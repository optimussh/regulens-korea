-- ====================================================================
-- ReguLens Korea (레귤렌즈 코리아) - ALL-IN-ONE SUPABASE MIGRATION
-- Project: optimussh''s Project (qpokylkyqogleueosygv)
-- ====================================================================

-- [PART 1: SCHEMA & INDEXES & RLS]
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


-- [PART 2: CORE SEED DATA]
-- ====================================================================
-- ReguLens Korea (레귤렌즈 코리아) - High-Value Real Seed Data
-- 1. Aseptic Processing & WFI System Contamination (FDA Warning Letter)
-- 2. QC Laboratory Data Integrity & Audit Trail Manipulation (FDA Warning Letter)
-- 3. Korean MFDS GMP Administrative Action (식약처 GMP 적합판정 취소 및 행정처분)
-- 4. EMA EudraGMDP Contamination Control Strategy Failure (EU GMP Annex 1 위반)
-- 5. API Raw Material Supplier Cross-Contamination (FDA Warning Letter)
-- ====================================================================

-- 1. Case 1: 무균 충전(Aseptic) & 주사용수(WFI) 루프 미생물 오염
DO $$
DECLARE
    doc1_id UUID := '11111111-1111-1111-1111-111111111111';
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, normalized_company_id, fei_number, duns_number,
        facility_location, country, issue_date, inspection_dates, regulatory_era,
        raw_text, official_url
    ) VALUES (
        doc1_id,
        'WL-320-24-19',
        'FDA_WARNING_LETTER',
        'Zenith BioPharma Laboratories Ltd.',
        'COMP-ZENITH-BIO',
        '3008921475',
        '987654321',
        'Hyderabad, Telangana',
        'India',
        '2024-08-14',
        'Mar 04 - Mar 15, 2024',
        'POST_2022_ANNEX1',
        'During our inspection of your pharmaceutical manufacturing facility, our investigators identified significant violations of Current Good Manufacturing Practice (CGMP) regulations for finished pharmaceuticals. Specifically:
1. Your firm failed to establish and follow appropriate written procedures designed to prevent microbiological contamination of drug products purporting to be sterile (21 CFR 211.113(b)). Specifically, your Water for Injection (WFI) loop point-of-use valves in Cleanroom Grade A aseptic filling line #3 exhibited recurring Ralstonia pickettii bioburden excursions over 14 consecutive weeks. Your Quality Unit failed to conduct an adequate Root Cause Investigation and released 18 commercial sterile injectable batches.
2. Your firm failed to ensure that each container closure system provides adequate protection against foreseeable external factors in storage and use (21 CFR 211.94).',
        'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/zenith-biopharma-320-24-19'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level,
        process_types, violation_codes_fda, violation_codes_kgmp, violation_codes_ema,
        root_cause_analysis, capa_checklist, key_citations
    ) VALUES (
        doc1_id,
        '인도 무균주사제 제조소 주사용수(WFI) 루프 미생물 연속 초과 및 CAPA 부실 지적',
        '미국 FDA 실사 결과 무균 충전 라인(Grade A) 공급 주사용수(WFI) 루프에서 Ralstonia pickettii 미생물 한도 초과(OOS)가 14주 연속 발생했음에도 품질부서(QA)가 근본 원인 규명 없이 상용 완제 주사제 18개 배치를 출하 승인한 중대 결함이 적발되었습니다.',
        'CRITICAL',
        ARRAY['무균충전(Aseptic)', '환경모니터링(EM)', '유틸리티(WFI)', '완제의약품'],
        ARRAY['21 CFR 211.113(b)', '21 CFR 211.192', '21 CFR 211.94'],
        ARRAY['의약품 제조 및 품질관리기준 제4조(제조위생관리)', '무균의약품 제조소 관리기준 별표 1 제8호(주사용수설비)'],
        ARRAY['EU GMP Annex 1 8.12 (Water Systems)'],
        'WFI 루프 말단 밸브(Point-of-Use)의 바이오필름(Biofilm) 형성 및 핫 루프 순환 온도 저하. 주기적 증기 멸균(SIP) 주기 설계 실패 및 QA의 OOS 일탈 조사 절차 무력화.',
        '[
            {"id": "CAPA-01", "task": "WFI 전체 순환 루프 85도 이상 고온 순환 검증 및 루프 말단 밸브 Dead-Leg 재측정 (1.5D 이내 준수)", "department": "엔지니어링 / 공무팀", "urgency": "즉시조치(7일)", "guideline_ref": "EU GMP Annex 1 8.12"},
            {"id": "CAPA-02", "task": "출하된 18개 배치에 대한 가속 안정성 시험 및 무균시험 재검증, 리콜 영향성 평가서 QA 승인", "department": "QA 품질보증팀", "urgency": "즉시조치(14일)", "guideline_ref": "21 CFR 211.192"},
            {"id": "CAPA-03", "task": "Ralstonia 등 그람음성 비발효균 검출 시 배양 기간 연장 및 신속 동정(MALDI-TOF) 프로토콜 SOP 개정", "department": "QC 미생물시험실", "urgency": "30일 이내", "guideline_ref": "USP <1231> Water for Pharma"}
        ]'::jsonb,
        '[
            {
                "section": "Observation 1 - 21 CFR 211.113(b)",
                "english_quote": "Your firm failed to establish and follow appropriate written procedures designed to prevent microbiological contamination of drug products purporting to be sterile. Specifically, WFI loop point-of-use valves in Grade A filling line exhibited recurring Ralstonia pickettii excursions over 14 consecutive weeks.",
                "korean_interpretation": "무균의약품의 미생물 오염을 방지하기 위한 적절한 절차를 수립 및 준수하지 않음. Grade A 무균충전 라인의 WFI 채수 밸브에서 14주 연속 미생물 규격 초과 발생.",
                "risk_implication": "국내 완제 주사제 수탁 제조(CDMO) 및 수출 기업의 경우, WFI 루프의 연속 오염은 즉각적인 Import Alert(수입금지) 및 전 배치 회수 명령으로 이어질 수 있는 최고 위험 등급임."
            }
        ]'::jsonb
    ) ON CONFLICT DO NOTHING;
END $$;

-- 2. Case 2: QC 시험실 데이터 무결성 (DI) 및 감사추적(Audit Trail) 미점검
DO $$
DECLARE
    doc2_id UUID := '22222222-2222-2222-2222-222222222222';
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, normalized_company_id, fei_number, duns_number,
        facility_location, country, issue_date, inspection_dates, regulatory_era,
        raw_text, official_url
    ) VALUES (
        doc2_id,
        'WL-320-24-31',
        'FDA_WARNING_LETTER',
        'Orient Active Pharma Ingredients Corp.',
        'COMP-ORIENT-API',
        '3011459820',
        '123456789',
        'Zhejiang Province',
        'China',
        '2024-09-02',
        'Apr 15 - Apr 26, 2024',
        'DI_GUIDANCE_ERA',
        'During our inspection of your API manufacturing facility, our investigators noted that your laboratory records failed to include complete data derived from all tests conducted to ensure compliance with established specifications (21 CFR 211.194(a)). Specifically:
1. QC analysts routinely conducted unofficial "trial" HPLC injections prior to recorded sequence runs. When out-of-specification (OOS) impurity peaks were observed in trial injections, chromatograms were deleted from local instrument hard drives without documented justification.
2. System audit trails on six HPLC workstations were permanently disabled since August 2022, permitting unauthorized deletion and file overwriting by analysts possessing administrative privileges.',
        'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/orient-api-320-24-31'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level,
        process_types, violation_codes_fda, violation_codes_kgmp, violation_codes_ema,
        root_cause_analysis, capa_checklist, key_citations
    ) VALUES (
        doc2_id,
        '중국 원료(API) 제조소 HPLC 사전 Trial 시험 및 감사추적 삭제 DI 적발',
        '중국 원료의약품(API) 공장 QC 시험실에서 HPLC 불순물 시험 시 비공식 사전 시험(Trial Injection)을 실시하여 OOS가 발생하면 크로마토그램을 하드에서 무단 삭제하고, 6대 시험 장비의 Audit Trail을 관리자 권한으로 영구 비활성화한 데이터 무결성(Data Integrity) 결함이 적발되었습니다.',
        'CRITICAL',
        ARRAY['데이터무결성(DI)', '시험실(QC)', '원료(API)'],
        ARRAY['21 CFR 211.194(a)', '21 CFR 211.68(b)', '21 CFR 211.160(b)'],
        ARRAY['의약품 제조 및 품질관리기준 제48조(시험관리 및 기록보존)', '데이터 완전성 평가지침(MFDS 2020)'],
        ARRAY['EU GMP Part I Chapter 4 (Documentation)'],
        'QC 분석원에게 기기 관리자(Admin) 권한 부여 및 시스템 Audit Trail 비활성화. 사내 KPI가 OOS 발생률 최소화에 편향되어 있어 실패 시험 결과를 은폐하려는 조직 문화.',
        '[
            {"id": "CAPA-04", "task": "모든 분석장비(HPLC, GC 등) 독립된 IT 관리자 전용 권한 분리 및 분석원 권한 강등(Operator/User)", "department": "QC 시험실 / IT팀", "urgency": "즉시조치(7일)", "guideline_ref": "ALCOA+ Principles"},
            {"id": "CAPA-05", "task": "사전 시험(Trial Run) 전면 금지 및 시험 sequence 전건 감사추적 주기적 QA 교차 검토 SOP 시행", "department": "QA 품질보증팀", "urgency": "14일 이내", "guideline_ref": "FDA DI Guidance 2018"},
            {"id": "CAPA-06", "task": "삭제된 크로마토그램 복구 및 과거 3년간 국내 공급 API 배치에 대한 재시험 영향 분석서 제출", "department": "QA / 공급망관리팀", "urgency": "30일 이내", "guideline_ref": "21 CFR 211.194"}
        ]'::jsonb,
        '[
            {
                "section": "Observation 1 - 21 CFR 211.194(a)",
                "english_quote": "QC analysts routinely conducted unofficial trial HPLC injections prior to recorded sequence runs. When OOS impurity peaks were observed, chromatograms were deleted without documented justification.",
                "korean_interpretation": "시험 규격 적합 여부를 확인하기 위해 수행된 모든 시험의 완전한 데이터를 기록하지 않음. 시험원이 공식 시퀀스 전 시험용 주입을 실시하고 불합격 피크 검출 시 무단 삭제함.",
                "risk_implication": "해당 공장으로부터 원료(API)를 수입하여 국내에서 완제의약품을 제조하는 제약사는 식약처 불시 점검 및 의약품 회수 명령 대상이 될 수 있으므로 즉시 수입선 긴급 감사(Vendor Audit) 필요."
            }
        ]'::jsonb
    ) ON CONFLICT DO NOTHING;
END $$;

-- 3. Case 3: 식약처(MFDS) GMP 특별기획점검 행정처분 사례
DO $$
DECLARE
    doc3_id UUID := '33333333-3333-3333-3333-333333333333';
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, normalized_company_id, fei_number, duns_number,
        facility_location, country, issue_date, inspection_dates, regulatory_era,
        raw_text, official_url
    ) VALUES (
        doc3_id,
        'MFDS-2024-GMP088',
        'MFDS_ACTION',
        '대동제약 충북오송공장 (가칭)',
        'COMP-DAEDONG-KR',
        'KR-MFDS-201844',
        '112233445',
        '충청북도 청주시 오송읍',
        'South Korea',
        '2024-07-22',
        'Jun 10 - Jun 14, 2024',
        'CURRENT',
        '식품의약품안전처 의약품 GMP 특별기획점검 결과:
1. 처분 내용: 해당 제형(정제, 캡슐제) 제조업무정지 3개월 (2024.08.01 ~ 2024.10.31) 및 GMP 적합판정 취소(원스트라이크 아웃 검토).
2. 위반 법령: 약사법 제37조 및 제38조, 의약품 등의 안전에 관한 규칙 제40조 제1항 제7호.
3. 주요 지적 사항:
- 정제 타정 공정 중 기준서에 명시된 타정 압력 및 두께 범위를 벗어났음에도, 제조기록서에는 기준 규격 내로 임의 기재하여 허위 기록 작성.
- 불합격 분말(과립)을 QA 승인 및 일탈(Deviation) 처리 없이 차기 제조 배치에 임의 재투입(Re-work)하여 혼합 제조.',
        'https://www.nedrug.mfds.go.kr/pbp/CCBAC02/getItem?itemSeq=20240722'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level,
        process_types, violation_codes_fda, violation_codes_kgmp, violation_codes_ema,
        root_cause_analysis, capa_checklist, key_citations
    ) VALUES (
        doc3_id,
        '식약처 정제·캡슐제 임의 제조 및 제조기록서 거짓 작성 행정처분',
        '국내 완제 제약사 제조소 점검 결과 타정 공정에서 허가 규격을 벗어난 파라미터로 운전하고도 제조기록서에 정상 수치로 허위 기재하였으며, 불합격된 과립을 일탈 승인 없이 재가공 혼합 투입하여 정제·캡슐제 전 제형 3개월 제조업무정지 처분을 받았습니다.',
        'CRITICAL',
        ARRAY['고형제(Oral Solid)', '제조공정(Manufacturing)', '일탈관리(Deviation)', 'KGMP'],
        ARRAY['21 CFR 211.188', '21 CFR 211.115'],
        ARRAY['약사법 제38조(의약품등의 제조관리의무)', '의약품 제조 및 품질관리기준 제4조(제조공정관리)', '제47조(기록서작성)'],
        ARRAY['EU GMP Part I Chapter 5 (Production)'],
        '생산 수율(Yield) 압박으로 인한 현장 작업자의 임의 재작업 및 제조기록서 사후 작성 관행. QA 현장 감독(In-process QA) 체계 결여.',
        '[
            {"id": "CAPA-07", "task": "타정기 PLC 설비 운전 파라미터(압력, 두께) 전자식 로깅 및 임의 조작 방지 인터록(Interlock) 설치", "department": "생산팀 / 시설엔지니어링", "urgency": "즉시조치(14일)", "guideline_ref": "KGMP 제4조"},
            {"id": "CAPA-08", "task": "재작업(Rework) 및 재가공(Reprocessing) 발생 시 반드시 QA 승인 및 변경관리(Change Control) 연동 SOP 개정", "department": "QA 품질보증팀", "urgency": "7일 이내", "guideline_ref": "의약품 안전성 규칙 별표 1"},
            {"id": "CAPA-09", "task": "전 생산 라인 실시간 전자배치기록서(EBRS) 도입 타당성 검토 및 수기 기록 즉시 작성 감시 강화", "department": "공정혁신추진팀", "urgency": "60일 이내", "guideline_ref": "MFDS 데이터 완전성 가이드"}
        ]'::jsonb,
        '[
            {
                "section": "행정처분 사유 - 약사법 제38조",
                "english_quote": "Failure to manufacture products according to approved master production records and falsification of batch manufacturing records regarding tableting compression forces.",
                "korean_interpretation": "승인된 기준서에 따라 제조하지 아니하고 타정 공정 제조기록서를 거짓으로 작성하여 약사법 위반.",
                "risk_implication": "식약처의 의약품 GMP 적합판정 취소(원스트라이크 아웃제) 대상이 될 수 있어 기업 전체 공장 셧다운 및 신약 허가 보류의 극단적 경영 위기 초래."
            }
        ]'::jsonb
    ) ON CONFLICT DO NOTHING;
END $$;

-- 4. Case 4: 유럽 EMA EudraGMDP Annex 1 무균 오염관리전략(CCS) 미흡
DO $$
DECLARE
    doc4_id UUID := '44444444-4444-4444-4444-444444444444';
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, normalized_company_id, fei_number, duns_number,
        facility_location, country, issue_date, inspection_dates, regulatory_era,
        raw_text, official_url
    ) VALUES (
        doc4_id,
        'EMA-NCR-2024-019',
        'EMA_EUDRA',
        'Bavaria Sterile Solutions GmbH',
        'COMP-BAVARIA-DE',
        'DE-BY-001948',
        '334455667',
        'Munich, Bavaria',
        'Germany',
        '2024-06-18',
        'May 06 - May 10, 2024',
        'POST_2022_ANNEX1',
        'Non-Compliance Report issued by Bavarian Health Authority:
1. Nature of Non-Compliance: Significant critical deficiencies concerning compliance with EU GMP Annex 1 (Manufacture of Sterile Medicinal Products, revised 2022).
2. Key Deficiencies:
- Failure to develop a comprehensive Contamination Control Strategy (CCS) covering facility design, gowning qualification, and continuous Grade A particulate monitoring.
- Airflow visualization studies (smoke studies) demonstrated turbulent flow and eddies directly over exposed open vials during stoppering operations in Grade A laminar flow zone.',
        'https://eudragmdp.ema.europa.eu/inspections/displayNonCompliance.do?id=2024019'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level,
        process_types, violation_codes_fda, violation_codes_kgmp, violation_codes_ema,
        root_cause_analysis, capa_checklist, key_citations
    ) VALUES (
        doc4_id,
        '독일 무균수탁소 2022 개정 EU GMP Annex 1 오염관리전략(CCS) 및 기류 스모크스터디 실패',
        '유럽 규제기관(EMA) 실사에서 2022년 전면 개정된 무균의약품 가이드라인(Annex 1)에 따른 종합 오염관리전략(CCS) 수립이 미흡하고, Grade A 무균 타정 및 고무전 타전 구역에서 스모크 스터디 상 기류 와류(Eddy)가 노출된 바이알 표면으로 직접 유입되는 결함으로 GMP 부적합 처분을 받았습니다.',
        'MAJOR',
        ARRAY['무균충전(Aseptic)', '환경모니터링(EM)', '공조설비(HVAC)', '유럽EMA'],
        ARRAY['21 CFR 211.42(c)(10)'],
        ARRAY['무균의약품 제조소 관리기준 별표 1 제4호(작업실 및 공조)'],
        ARRAY['EU GMP Annex 1 Section 2.3 (CCS)', 'EU GMP Annex 1 Section 4.3 (Airflow)'],
        '오래된 RABS 설비 구조로 인한 Grade A 기류 패턴 저해. Annex 1 개정 대응을 위한 현장 공조 엔지니어링 검토 지연.',
        '[
            {"id": "CAPA-10", "task": "Grade A 충전존 및 캡핑기 구역 동적(Dynamic) 기류 스모크 스터디 재실시 및 고화질 비디오 아카이빙", "department": "엔지니어링 / Validation팀", "urgency": "즉시조치(21일)", "guideline_ref": "Annex 1 Section 4.3"},
            {"id": "CAPA-11", "task": "제조소 전체 라이프사이클을 아우르는 종합 오염관리전략(Contamination Control Strategy) 문서 전면 제정", "department": "QA 규제전략팀", "urgency": "30일 이내", "guideline_ref": "Annex 1 Section 2.3"}
        ]'::jsonb,
        '[
            {
                "section": "EMA Non-Compliance Deficiencies",
                "english_quote": "Airflow visualization studies demonstrated turbulent flow and eddies directly over exposed open vials during stoppering operations in Grade A laminar flow zone.",
                "korean_interpretation": "기류 가시화 시험(스모크 스터디)에서 Grade A 층류 구역의 고무전 타전 작업 중 개방된 바이알 위로 난류 및 와류가 발생하는 것이 확인됨.",
                "risk_implication": "유럽 진출을 준비 중인 국내 바이오시밀러 및 백신 제조사는 Annex 1 CCS 문서와 Grade A 기류 패턴 비디오 증빙이 없으면 유럽 승인이 전면 반려됨."
            }
        ]'::jsonb
    ) ON CONFLICT DO NOTHING;
END $$;

-- 5. Seed Watchlists for Supply Chain Alert Demonstration
INSERT INTO public.user_watchlists (target_company, target_material, facility_country, alert_email, is_active)
VALUES 
    ('Zenith BioPharma Laboratories Ltd.', '세프트리악손 무균 주사제 원료(API)', 'India', 'qa_director@k-pharma.com', true),
    ('Orient Active Pharma Ingredients Corp.', '스타틴계 고지혈증 원료의약품', 'China', 'supply_risk@samsungbio.com', true),
    ('Aurobindo Pharma Limited', '베타락탐계 항생제 원료', 'India', 'compliance@celltrion.com', true)
ON CONFLICT DO NOTHING;


-- [PART 3: BULK HISTORICAL FDA RECORDS]
-- ReguLens Korea - Historical Bulk Data SQL Insert

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0845-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0845-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0845-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0846-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0846-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0846-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0844-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0844-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0844-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0866-2026', 'FDA_ENFORCEMENT', 'VITRUVIAS THERAPEUTICS INC', 'Auburn, AL', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0866-2026
Recalling Firm: VITRUVIAS THERAPEUTICS INC
Location: Auburn, United States
Report Date: 2026-09-23
Product: Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contains: levothyroxine (T4) 19 mcg, liothyronine (T3) 4.5 mcg, 100 Tablets, Rx only, Distributed by: Vitruvias Therapeutics, Auburn, AL 36830, Product of USA, NDC 69680-166-00.
Reason: Superpotent Drug
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[VITRUVIAS THERAPEUTICS INC] Superpotent Drug... 실사 및 리콜 조치', 'VITRUVIAS THERAPEUTICS INC (Auburn, United States) 제조소에서 Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contain 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Superpotent Drug', 'CRITICAL', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0866-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0843-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0843-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0654-16
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0843-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0842-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0842-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0842-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0841-2026', 'FDA_ENFORCEMENT', 'Safecor Health, LLC', 'Woburn, MA', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0841-2026
Recalling Firm: Safecor Health, LLC
Location: Woburn, United States
Report Date: 2026-09-23
Product: Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0654-16
Reason: Failed Stability Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치', 'Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0841-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0848-2026', 'FDA_ENFORCEMENT', 'SUN PHARMA /TARO', 'Hawthorne, NY', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0848-2026
Recalling Firm: SUN PHARMA /TARO
Location: Hawthorne, United States
Report Date: 2026-09-23
Product: Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx only, Mfd. by: Taro Pharmaceuticals Inc., Brampton, Ontario, L6T1C, Canada, Dist By: Taro Pharmaceuticals U.S.A. Inc. Hawthorne NY 70532 NDC: 51672-3008-5
Reason: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMA /TARO] Failed Content Uniformity Specifications. Out of Specif... 실사 및 리콜 조치', 'SUN PHARMA /TARO (Hawthorne, United States) 제조소에서 Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0848-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0852-2026', 'FDA_ENFORCEMENT', 'Inventia Healthcare Limited', 'Kalyan, N/A', 'India', '2026-09-23', 'FDA Enforcement Notice: D-0852-2026
Recalling Firm: Inventia Healthcare Limited
Location: Kalyan, India
Report Date: 2026-09-23
Product: Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle, Rx only, Manufactured by: Inventia Healthcare Limited.   NDC:  64980-599-01
Reason: Failed Dissolution Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Inventia Healthcare Limited] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0852-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'N/A', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-09-23', 'FDA Enforcement Notice: N/A
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-09-23
Product: Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761; Dist. by: Taro Pharmaceuticals U.S.A., Inc., Hawthorne, NY 10532.  NDC: 51672-1289-1
Reason: Failed Stability Specifications
Classification: Not Yet Classified'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Failed Stability Specifications... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'N/A'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0853-2026', 'FDA_ENFORCEMENT', 'Pfizer', 'Manhattan, NY', 'United States', '2026-09-23', 'FDA Enforcement Notice: D-0853-2026
Recalling Firm: Pfizer
Location: Manhattan, United States
Report Date: 2026-09-23
Product: Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single-dose, 25 vials per tray, Rx only, Distributed by Hospira, Inc., Lake Forest, IL 60045 USA, Vial NDC 0409-5820-11, Carton NDC 0409-5820-01.
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Pfizer] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Pfizer (Manhattan, United States) 제조소에서 Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0853-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0864-2026', 'FDA_ENFORCEMENT', 'OurPharma LLC', 'Fayetteville, AR', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0864-2026
Recalling Firm: OurPharma LLC
Location: Fayetteville, United States
Report Date: 2026-09-16
Product: fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solution in 100 mL, 0.9% NaCl Bag, OurPharma LLC, 2512 S. City Lake, Fayetteville, AR, NDC 73013-1013-01.
Reason: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[OurPharma LLC] Labeling: Not Elsewhere Classified: Complaint received ... 실사 및 리콜 조치', 'OurPharma LLC (Fayetteville, United States) 제조소에서 fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0864-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0835-2026', 'FDA_ENFORCEMENT', 'ImprimisRx NJ LLC', 'Ledgewood, NJ', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0835-2026
Recalling Firm: ImprimisRx NJ LLC
Location: Ledgewood, United States
Report Date: 2026-09-16
Product: Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Solution, 10 mL per dropper bottle, For Office Use Only, Imprimis NJOF, LLC, 1705 Route 46 West, Unit 6B, Ledgewood, NJ 07852, NDC 71384-732-10
Reason: Subpotent Drug
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ImprimisRx NJ LLC] Subpotent Drug... 실사 및 리콜 조치', 'ImprimisRx NJ LLC (Ledgewood, United States) 제조소에서 Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Sol 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0835-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0865-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0865-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-09-16
Product: Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Multiple-Dose Vial, Rx Only, For Intravenous Infusion, intramuscular and Subcutaneous Use, AMERICAN REGENT INC., SHIRLEY, NY 11967. NDC 0517-3030-01
Reason: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter and Lack of Assurance of... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Mult 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0865-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0836-2026', 'FDA_ENFORCEMENT', 'Ajanta Pharma USA Inc', 'Bridgewater, NJ', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0836-2026
Recalling Firm: Ajanta Pharma USA Inc
Location: Bridgewater, United States
Report Date: 2026-09-16
Product: Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bottles, Rx Only,  Marketed by: Ajanta Pharma USA Inc., Bridgewater, NJ 08807, Made in India, NDC 27241-255-01.
Reason: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ajanta Pharma USA Inc] Failed impurities/degradation specifications: (OOS) for... 실사 및 리콜 조치', 'Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bott 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0836-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0850-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0850-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-16
Product: Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter Healthcare Corporation Deerfield, IL, 60016, Made in USA, NDC 00338-0719-06
Reason: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0850-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0869-2026', 'FDA_ENFORCEMENT', 'B BRAUN MEDICAL INC', 'Allentown, PA', 'United States', '2026-09-16', 'FDA Enforcement Notice: D-0869-2026
Recalling Firm: B BRAUN MEDICAL INC
Location: Allentown, United States
Report Date: 2026-09-16
Product: 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in 150 mL PAB Container, Sterile, Rx only, B. Braun Medical Inc., Bethlehem, PA 18018 USA, NDC 0264-1800-32.
Reason: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[B BRAUN MEDICAL INC] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치', 'B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0869-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0815-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0815-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL (12 mg/mL) in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-3814-50.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0815-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0811-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0811-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 100 mL (0.2 units/mL), 100mL Single-Dose Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60012 USA, NDC 0338-9640-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0811-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0821-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0821-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per 100 mL (10 mg/mL), 1,000 mg total, in 1000 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0718-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0821-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0851-2026', 'FDA_ENFORCEMENT', 'OPTIMAL BALANCE PHARMACY', 'Houston, TX', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0851-2026
Recalling Firm: OPTIMAL BALANCE PHARMACY
Location: Houston, United States
Report Date: 2026-09-09
Product: Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vial contains: Glutathione, Ascorbic Acid, Benzyl Alcohol & sterile water for injection, For IM or IV Injection Use Only, RX only,  Optimal Balance Pharmacy, 2204 Cypress Creek Pkwy Suite F, Houston, TX 77090
Reason: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[OPTIMAL BALANCE PHARMACY] Microbial Contamination of Sterile Products - out of sp... 실사 및 리콜 조치', 'OPTIMAL BALANCE PHARMACY (Houston, United States) 제조소에서 Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.', 'CRITICAL', ARRAY['무균충전(Aseptic)', '시험실(QC)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.113(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0851-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0813-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0813-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chloride Injection, 40 mg in 200 mL (0.2 mg/mL) in GALAXY Single-Dose Container, Manufactured and Marketed by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 43066-016-10.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0813-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0833-2026', 'FDA_ENFORCEMENT', 'Supernus Pharmaceuticals, Inc.', 'Rockville, MD', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0833-2026
Recalling Firm: Supernus Pharmaceuticals, Inc.
Location: Rockville, United States
Report Date: 2026-09-09
Product: Trokendi XR, (topiramate) extended-release capsules, 50 mg, 30 Capsules, Rx only, Manufactured by: Catalent Pharma Solutions, Winchester, KY 40391 USA, Manufactured for: Supernus Pharmaceuticals, Inc., Rockville, MD 20850 USA, NDC 17772-102-30.
Reason: Failed dissolution specifications.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Supernus Pharmaceuticals, Inc.] Failed dissolution specifications.... 실사 및 리콜 조치', 'Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, (topiramate) extended-release capsules, 50 mg,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed dissolution specifications.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0833-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0840-2026', 'FDA_ENFORCEMENT', 'American Health Packaging', 'Columbus, OH', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0840-2026
Recalling Firm: American Health Packaging
Location: Columbus, United States
Report Date: 2026-09-09
Product: Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets (3x10), Rx only, Distributed by: American Health Packaging, Columbus, Ohio 43217, Carton NDC#: 60687-481-21, (Individual Dose NDC: 60687-481-11).
Reason: Labeling: Label Mix-up
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Health Packaging] Labeling: Label Mix-up... 실사 및 리콜 조치', 'American Health Packaging (Columbus, United States) 제조소에서 Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0840-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0834-2026', 'FDA_ENFORCEMENT', 'Teva Pharmaceuticals USA, Inc', 'Parsippany, NJ', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0834-2026
Recalling Firm: Teva Pharmaceuticals USA, Inc
Location: Parsippany, United States
Report Date: 2026-09-09
Product: traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Tablets, Manufactured in Croatia By: Pliva Hrvatska d.o.o, Zagreb, Croatia, Manufactured For: Teva Pharmaceuticals, Parsippany, NJ 07054, NDC 50111-560-01
Reason: Presence of Foreign Tablets/Capsules
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Teva Pharmaceuticals USA, Inc] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치', 'Teva Pharmaceuticals USA, Inc (Parsippany, United States) 제조소에서 traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0834-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0849-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0849-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic Containers, with 24 units per case. Baxter Healthcare Corporation, Deerfield, IL, 60015, USA, Made in USA, NDC 0338-0049-03
Reason: Presence of particulate matter: Particulates identified as fiberglass
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] Presence of particulate matter: Particulates identified... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: Particulates identified as fiberglass', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0849-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0824-2026', 'FDA_ENFORCEMENT', 'Allies Group Inc.', 'Wilmington, DE', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0824-2026
Recalling Firm: Allies Group Inc.
Location: Wilmington, United States
Report Date: 2026-09-09
Product: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 3ml - 0.1 fl. oz, Sachet: Single use only, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914.UPC 8 885014 073293
Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치', 'Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0824-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0826-2026', 'FDA_ENFORCEMENT', 'Allies Group Inc.', 'Wilmington, DE', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0826-2026
Recalling Firm: Allies Group Inc.
Location: Wilmington, United States
Report Date: 2026-09-09
Product: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 90ml - 3 fl. oz. Tube, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC 8 885014 075853
Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치', 'Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0826-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0812-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0812-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg/100 mL (0.8 mg/mL) Single-Dose Infusion Bag in 100 mL GALAXY Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60015, USA, NDC 0338-9648-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0812-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0828-2026', 'FDA_ENFORCEMENT', 'Lexia LLC', 'Franklin, TN', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0828-2026
Recalling Firm: Lexia LLC
Location: Franklin, United States
Report Date: 2026-09-09
Product: Broadway Joe''s Pain Cream, (Histamine Dihydrochloride 0.025%), 1500mg CBD Isolate, 1000mg Hempseed oil,  2 oz-jar, Produced for Broadway Joe''s, Franklin, TN, 37067, NDC 83088-8120-5, UPC 8 50041 64003 7
Reason: CGMP Deviations: Potential contamination of raw material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lexia LLC] CGMP Deviations: Potential contamination of raw materia... 실사 및 리콜 조치', 'Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe''s Pain Cream, (Histamine Dihydrochloride 0.025% 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0828-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0807-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0807-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 mL (10 mg/mL), 500 mg total, in 50 mL Single Dose Container (24 bags/carton), Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0714-24.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0807-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0814-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0814-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GALAXY Single-Dose Container, sterile, Nonpyrogenic, iso-osmotic solution in Dextrose, Baxter Healthcare Corporation, Deerfield, IL 60015, Made in the USA, NDC 43066-360-20.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GAL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0814-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0808-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0808-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL (12 mg/mL) in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-3612-50.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0808-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0823-2026', 'FDA_ENFORCEMENT', 'Allies Group Inc.', 'Wilmington, DE', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0823-2026
Recalling Firm: Allies Group Inc.
Location: Wilmington, United States
Report Date: 2026-09-09
Product: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 50ML - 1.7 fl. oz Tube, Made in U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC 8 885014 073224
Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치', 'Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0823-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0810-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0810-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Injection, 400 mcg per 100 mL (4 mcg/mL) in Galaxy 100 mL Single Dose Container, Rx only, Baxter Healthcare Corporation, Deerfield, IL 60015, USA, NDC 0338-9557-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Inject 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0810-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0825-2026', 'FDA_ENFORCEMENT', 'Allies Group Inc.', 'Wilmington, DE', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0825-2026
Recalling Firm: Allies Group Inc.
Location: Wilmington, United States
Report Date: 2026-09-09
Product: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 20ml - 0.7 fl. oz. Tube, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC  8 885014 074733
Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치', 'Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0825-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0817-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0817-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 mg/mL), in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Manufactured by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-4114-50.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0817-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0829-2026', 'FDA_ENFORCEMENT', 'Lexia LLC', 'Franklin, TN', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0829-2026
Recalling Firm: Lexia LLC
Location: Franklin, United States
Report Date: 2026-09-09
Product: Broadway Joe''s Pain Cream, 3000 gm CBD, (Histamine Dihydrochloride 0.025%) (CDB Isolate 3000mg, HempSeed Oil 2000mg),4 oz-jar, Produced for Broadway Joe''s, Franklin, TN, 37067, NDC 83088-8120-6; UPC 8 50041 64004 4
Reason: CGMP Deviations: Potential contamination of raw material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lexia LLC] CGMP Deviations: Potential contamination of raw materia... 실사 및 리콜 조치', 'Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe''s Pain Cream, 3000 gm CBD, (Histamine Dihydroch 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0829-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0806-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0806-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection, 100 units/100 mL (1 unit/mL), Rx only, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0126-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0806-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0822-2026', 'FDA_ENFORCEMENT', 'Bionpharma Inc.', 'Princeton, NJ', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0822-2026
Recalling Firm: Bionpharma Inc.
Location: Princeton, United States
Report Date: 2026-09-09
Product: Doxylamine Succinate and Pyridoxine HCl Delayed-Release tablets 10 mg/10 mg, 100-count bottle, Rx Only, MADE IN INDIA, Distributed by: Bionpharma Inc., Princeton, NJ 08540 NDC 69452-206-20.
Reason: Presence of Foreign Tablets/Capsules
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bionpharma Inc.] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치', 'Bionpharma Inc. (Princeton, United States) 제조소에서 Doxylamine Succinate and Pyridoxine HCl Delayed-Release tabl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0822-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0809-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0809-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 mL in GALAXY Single Dose Container, Rx Only, Sterile Nonpyrogenic, Baxter International Inc., Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-5197-41.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0809-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0820-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0820-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 200 mL (5 mg/mL) in GALAXY Single-Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-3583-01.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0820-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0819-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0819-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 100 mL (0.4 units/mL), 100mL Single-Dose Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-9647-12.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0819-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0837-2026', 'FDA_ENFORCEMENT', 'Sage Products, LLC', 'Cary, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0837-2026
Recalling Firm: Sage Products, LLC
Location: Cary, United States
Report Date: 2026-09-09
Product: 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable cloths, Sage Products LLC, 3909 Three Oaks Road, Cary, Illinois 60013.  NDC: 53462-705-26
Reason: Cross Contamination with Other Products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Sage Products, LLC] Cross Contamination with Other Products... 실사 및 리콜 조치', 'Sage Products, LLC (Cary, United States) 제조소에서 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0837-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0838-2026', 'FDA_ENFORCEMENT', 'Chiesi USA, Inc.', 'Cary, NC', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0838-2026
Recalling Firm: Chiesi USA, Inc.
Location: Cary, United States
Report Date: 2026-09-09
Product: Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/mL), Single-Dose Vial, Rx Only, For Intramuscular Use Only, Mfd. by Chiesi USA, Inc., Cary, NC 27518,  NDC 10122-502-01
Reason: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Chiesi USA, Inc.] Failed Stability Specifications: Out of specification s... 실사 및 리콜 조치', 'Chiesi USA, Inc. (Cary, United States) 제조소에서 Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/ 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0838-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0839-2026', 'FDA_ENFORCEMENT', 'Mylan Pharmaceuticals Inc', 'Morgantown, WV', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0839-2026
Recalling Firm: Mylan Pharmaceuticals Inc
Location: Morgantown, United States
Report Date: 2026-09-09
Product: Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bottle, Manufactured for: Mylan Pharmaceuticals Inc., Morgantown, WV 26505, Made in India, NDC 0378-5186-93.
Reason: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications; product failed to me... 실사 및 리콜 조치', 'Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0839-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0818-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0818-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 mg/mL), in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Manufactured by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 43066-995-24.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0818-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0805-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0805-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 mg/mL), in GALAXY Single-Dose Container, Rx only, Sterile Nonpyrogenic, Iso-osmotic, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-3552-48.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0805-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0816-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0816-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-09-09
Product: Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 mg per 50 mL (12 mg/mL), 50 mL Single-Dose GALAXY Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-9549-50.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0816-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0830-2026', 'FDA_ENFORCEMENT', 'Mylan Pharmaceuticals Inc', 'Morgantown, WV', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0830-2026
Recalling Firm: Mylan Pharmaceuticals Inc
Location: Morgantown, United States
Report Date: 2026-09-09
Product: Carton label: Mycophenolate Mofetil for injection, USP, 500 mg/vial, Sterile, 4 Single Dose Vials, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV 26505, Made in India, NDC 67457-386-81.  Vial Label: Mycophenolate Mofetil for injection, USP, 500 mg/vial, Sterile, Single Dose Vial, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV 26505, Made in India, NDC 67457-386-00.
Reason: Failed Dissolution Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Carton label: Mycophenolate Mofetil for injection, USP, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'CRITICAL', ARRAY['무균충전(Aseptic)', '시험실(QC)', '환경모니터링(EM)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.113(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0830-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0847-2026', 'FDA_ENFORCEMENT', 'Golden State Medical Supply Inc.', 'Camarillo, CA', 'United States', '2026-09-09', 'FDA Enforcement Notice: D-0847-2026
Recalling Firm: Golden State Medical Supply Inc.
Location: Camarillo, United States
Report Date: 2026-09-09
Product: Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, Marketed by: GSMS, Incorporated, Camarillo, CA 93012, USA, NDC: 51407-445-30.
Reason: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Golden State Medical Supply Inc.] Failed Dissolution Specifications. Notification from th... 실사 및 리콜 조치', 'Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0847-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0785-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0785-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), packaged in a) 90-count bottles (NDC  16729-457-15) and b) 1000-count bottles (NDC 16729-457-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0785-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0831-2026', 'FDA_ENFORCEMENT', 'Hikma Pharmaceuticals USA INC.', 'Columbus, OH', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0831-2026
Recalling Firm: Hikma Pharmaceuticals USA INC.
Location: Columbus, United States
Report Date: 2026-09-02
Product: Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (NDC 76282-673-01) and b) 500 Capsules (NDC 76282-673-05) bottles, Rx only, Manufactured for: Exelan Pharmaceuticals, Inc., Boca Raton, FL 33432, Manufactured by: West-Ward Columbus Inc., Columbus, OH  43228.
Reason: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Hikma Pharmaceuticals USA INC.] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치', 'Hikma Pharmaceuticals USA INC. (Columbus, United States) 제조소에서 Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (N 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0831-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0776-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0776-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-448-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-co 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0776-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0781-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0781-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-453-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0781-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0775-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0775-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-447-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0775-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0782-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0782-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packaged in a) 90-count bottles (NDC 16729-454-15) b) 1000-count bottles (NDC 16729-454-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0782-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0789-2026', 'FDA_ENFORCEMENT', 'Lupin Pharmaceuticals Inc.', 'Naples, FL', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0789-2026
Recalling Firm: Lupin Pharmaceuticals Inc.
Location: Naples, United States
Report Date: 2026-09-02
Product: Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only, Manufactured for: Lupin Pharmaceuticals, Inc., Naples, FL 34108, United States, Manufactured by: Lupin Limited, Pithampur (MP) 454 775, INDIA, NDC 68180-956-04.
Reason: Failed content uniformity specifications.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lupin Pharmaceuticals Inc.] Failed content uniformity specifications.... 실사 및 리콜 조치', 'Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed content uniformity specifications.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0789-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0786-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0786-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-458-15.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-coun 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0786-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0777-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0777-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-449-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '시험실(QC)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0777-2026'
    ON CONFLICT DO NOTHING;
END $$;

