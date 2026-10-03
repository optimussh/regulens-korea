-- ====================================================================
-- ReguLens Korea (레귤렌즈 코리아) - Supabase / PostgreSQL Database Schema
-- Description: AI-Ready GMP & Regulatory Intelligence System (FDA, EMA, MFDS)
-- Extensions: pgvector, pgcrypto, pg_trgm
-- ====================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 2. Master Table: Regulatory Documents (규제기관 원문 마스터)
CREATE TABLE IF NOT EXISTS public.reg_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_number VARCHAR(100) NOT NULL UNIQUE,       -- e.g., 'WL-320-24-18', 'MFDS-2024-AD092'
    source VARCHAR(50) NOT NULL,                    -- 'FDA_WARNING_LETTER', 'EMA_EUDRA', 'MFDS_ACTION', 'FDA_483'
    company_name VARCHAR(255) NOT NULL,             -- 대상 기업명 (예: Aurobindo Pharma Ltd)
    normalized_company_id VARCHAR(100),             -- M&A/명칭 통일 식별자 (MDM)
    fei_number VARCHAR(50),                         -- FDA Establishment Identifier
    duns_number VARCHAR(50),                        -- Dun & Bradstreet Number
    facility_location VARCHAR(255) NOT NULL,        -- 공장 소재지 (도시/주)
    country VARCHAR(100) NOT NULL,                  -- 공장 소재 국가 (예: India, China, South Korea, USA)
    issue_date DATE NOT NULL,                       -- 문서 발행일
    inspection_dates VARCHAR(150),                  -- 실사 기간 (예: 'Oct 23 - Nov 03, 2023')
    regulatory_era VARCHAR(50) DEFAULT 'CURRENT',   -- 'PRE_2022_ANNEX1', 'POST_2022_ANNEX1', 'DI_GUIDANCE_ERA'
    raw_text TEXT NOT NULL,                         -- 원문 전체 (OCR 또는 마크다운 변환 텍스트)
    official_url TEXT,                              -- 규제기관 공식 웹사이트 링크
    pdf_storage_path TEXT,                          -- Supabase Storage 또는 S3 PDF 경로
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. AI Structured Insights Table (AI 구조화 데이터 & 한국 QA 특화 분석)
CREATE TABLE IF NOT EXISTS public.reg_insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_id UUID NOT NULL REFERENCES public.reg_documents(id) ON DELETE CASCADE,
    title_kr VARCHAR(300) NOT NULL,                 -- 한국어 제목 (예: "인도 무균주사제 공장 WFI 및 미생물 오염 CAPA 지적")
    summary_kr TEXT NOT NULL,                       -- 제약 QA/QC 실무자 관점의 한국어 핵심 요약
    severity_level VARCHAR(20) DEFAULT 'MAJOR',     -- 'CRITICAL', 'MAJOR', 'MODERATE', 'INFORMATIONAL'
    
    -- 다중 태깅 지원 (공정별/규정별 필터링)
    process_types TEXT[] NOT NULL DEFAULT '{}',     -- ['무균충전(Aseptic)', '환경모니터링(EM)', '데이터무결성(DI)', '시험실(QC)', '원료(API)']
    violation_codes_fda TEXT[] DEFAULT '{}',        -- ['21 CFR 211.113(b)', '21 CFR 211.192']
    violation_codes_kgmp TEXT[] DEFAULT '{}',       -- ['의약품 제조 및 품질관리기준 제4조', '무균의약품 관리기준 별표 1']
    violation_codes_ema TEXT[] DEFAULT '{}',        -- ['EU GMP Annex 1 8.12', 'EU GMP Part I Chapter 4']
    
    -- 원인 분석 및 현장 즉시 조치 체크리스트
    root_cause_analysis TEXT,                       -- 근본 원인 분석 (Failure Root Cause)
    capa_checklist JSONB NOT NULL DEFAULT '[]'::jsonb, -- [{ id, task, department, urgency, guideline_ref }]
    
    -- 신뢰성 확보를 위한 영문 원문 인용 및 대조 (Citations)
    key_citations JSONB NOT NULL DEFAULT '[]'::jsonb,  -- [{ section, english_quote, korean_interpretation, risk_implication }]
    
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Vector Embeddings Table (RAG & Hybrid Semantic Search)
CREATE TABLE IF NOT EXISTS public.document_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_id UUID NOT NULL REFERENCES public.reg_documents(id) ON DELETE CASCADE,
    chunk_index INT NOT NULL,
    chunk_text TEXT NOT NULL,
    embedding VECTOR(1536),                         -- OpenAI text-embedding-3-small (1536) or custom local embedding
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. Supply Chain Watchdog Table (원료 공급사/협력사 모니터링 알림)
CREATE TABLE IF NOT EXISTS public.user_watchlists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,                                   -- Supabase auth.users(id)
    target_company VARCHAR(255) NOT NULL,           -- 모니터링 대상 공급업체명 (예: 'Hetero Labs', 'Cipla')
    target_material VARCHAR(255),                   -- 도입 원료명 (예: '아목시실린 원료의약품(API)')
    facility_country VARCHAR(100),                  -- 원료 제조국
    alert_email VARCHAR(255) NOT NULL,              -- 알림 수신 이메일
    is_active BOOLEAN DEFAULT TRUE,
    last_alerted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. AI Golden Dataset Benchmark Table (추론 품질 평가 및 Hallucination 방지 벤치마크)
CREATE TABLE IF NOT EXISTS public.golden_benchmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    case_code VARCHAR(50) NOT NULL UNIQUE,          -- 'BENCH-ASEPTIC-01', 'BENCH-DI-02'
    doc_title VARCHAR(255) NOT NULL,
    sample_text TEXT NOT NULL,                      -- 평가용 영문 Warning Letter 원문 스니펫
    ground_truth_json JSONB NOT NULL,               -- 검증된 정답 JSON (위반조항, CAPA, 식약처 매핑)
    last_accuracy_score NUMERIC(5,2),               -- 최근 평가 점수 (예: 96.50)
    tested_model_name VARCHAR(100),                 -- 'Llama-3-70B-Instruct', 'GPT-4o'
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ====================================================================
-- Indexes for Blazing Fast Queries (10만 건 이상 대응)
-- ====================================================================

CREATE INDEX IF NOT EXISTS idx_reg_docs_source ON public.reg_documents(source);
CREATE INDEX IF NOT EXISTS idx_reg_docs_company ON public.reg_documents(company_name);
CREATE INDEX IF NOT EXISTS idx_reg_docs_country ON public.reg_documents(country);
CREATE INDEX IF NOT EXISTS idx_reg_docs_issue_date ON public.reg_documents(issue_date DESC);
CREATE INDEX IF NOT EXISTS idx_reg_docs_trgm_company ON public.reg_documents USING gin(company_name gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_reg_insights_doc_id ON public.reg_insights(doc_id);
CREATE INDEX IF NOT EXISTS idx_reg_insights_severity ON public.reg_insights(severity_level);
CREATE INDEX IF NOT EXISTS idx_reg_insights_process_gin ON public.reg_insights USING gin(process_types);
CREATE INDEX IF NOT EXISTS idx_reg_insights_fda_gin ON public.reg_insights USING gin(violation_codes_fda);
CREATE INDEX IF NOT EXISTS idx_reg_insights_kgmp_gin ON public.reg_insights USING gin(violation_codes_kgmp);

-- HNSW Vector Index (Fast approximate nearest neighbors for pgvector)
CREATE INDEX IF NOT EXISTS idx_embeddings_hnsw ON public.document_embeddings 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- ====================================================================
-- Hybrid Search Function (Keyword Pre-filter + Vector Cosine RAG)
-- ====================================================================

CREATE OR REPLACE FUNCTION match_regulatory_insights(
    query_embedding VECTOR(1536),
    match_threshold FLOAT DEFAULT 0.65,
    match_count INT DEFAULT 10,
    filter_process TEXT DEFAULT NULL,
    filter_country TEXT DEFAULT NULL
)
RETURNS TABLE (
    doc_id UUID,
    doc_number VARCHAR,
    company_name VARCHAR,
    country VARCHAR,
    issue_date DATE,
    title_kr VARCHAR,
    summary_kr TEXT,
    process_types TEXT[],
    violation_codes_fda TEXT[],
    violation_codes_kgmp TEXT[],
    key_citations JSONB,
    similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        d.id AS doc_id,
        d.doc_number,
        d.company_name,
        d.country,
        d.issue_date,
        i.title_kr,
        i.summary_kr,
        i.process_types,
        i.violation_codes_fda,
        i.violation_codes_kgmp,
        i.key_citations,
        1 - (e.embedding <=> query_embedding) AS similarity
    FROM public.document_embeddings e
    JOIN public.reg_documents d ON e.doc_id = d.id
    JOIN public.reg_insights i ON d.id = i.doc_id
    WHERE (1 - (e.embedding <=> query_embedding)) > match_threshold
      AND (filter_process IS NULL OR filter_process = ANY(i.process_types))
      AND (filter_country IS NULL OR d.country = filter_country)
    ORDER BY similarity DESC
    LIMIT match_count;
END;
$$;

-- ====================================================================
-- Row Level Security (RLS) Configuration
-- ====================================================================
ALTER TABLE public.reg_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reg_insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_watchlists ENABLE ROW LEVEL SECURITY;

-- Public Read Policy for Regulatory Intelligence Knowledge Base
CREATE POLICY "Allow public read access to documents" ON public.reg_documents
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to insights" ON public.reg_insights
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to embeddings" ON public.document_embeddings
    FOR SELECT USING (true);

-- User-specific policy for Watchlists
CREATE POLICY "Users can manage their own watchlists" ON public.user_watchlists
    FOR ALL USING (auth.uid() = user_id OR auth.role() = 'service_role');

-- Benchmark table RLS
ALTER TABLE public.golden_benchmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to benchmarks" ON public.golden_benchmarks
    FOR SELECT USING (true);
