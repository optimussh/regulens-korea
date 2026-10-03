# ReguLens Korea (레귤렌즈 코리아)

> **글로벌 제약·바이오 규제 인텔리전스 & GMP 실사 분석 AI 플랫폼**  
> 미국 FDA Warning Letter, 유럽 EMA EudraGMDP, 대한민국 식약처(MFDS) 행정처분 비정형 데이터를 AI로 구조화하여 1:1 KGMP 매핑, 현장 즉시 조치 CAPA 5선, 원문 Citation을 제공합니다.

---

## 핵심 기능

1. **글로벌 레이더 (Global Radar)**: FDA/EMA/식약처 핵심 지적 및 단위공정·국가별(인도·중국·한국 등) 리스크 트렌드
2. **규제 검색기 (Regu-Search)**: 무균충전(Aseptic), 데이터무결성(DI), 시험실(QC), WFI 등 세부 공정 복합 필터링
3. **원문 대조 인스펙터 (Side-by-Side Inspector)**: 영문 원문 인용(Citation)과 한국어 요약, 근본 원인(Root Cause), 1:1 KGMP 매핑, 1클릭 복사 가능한 CAPA 점검표
4. **서플라이 체인 워치독 (Supply Chain Watchdog)**: 인도/중국 원료(API) 공장 24시간 실시간 실사 경보 감시
5. **AI 제조공정 에이전트 (QA Agent)**: 15년 차 Lead Auditor 페르소나 RAG 기반 규제 질의응답
6. **골든 벤치마크 검증실 (Benchmark)**: Zero-Hallucination 100% 정밀도 상시 검증 엔진

---

## 기술 스택

- **Frontend**: Next.js 16 (App Router), Vanilla CSS (Glassmorphism Cyber-Compliance 테마)
- **Port**: 5200 (http://localhost:5200)
- **Database**: Supabase (PostgreSQL + pgvector, HNSW Index, Hybrid Cosine Search)
- **AI Pipeline**: Python 3.12, openFDA Ingest, Pydantic, vLLM / SGLang Batch Inference

---

## 빠른 시작

### 1. 환경 설정
webapp/.env.example을 참고하여 webapp/.env.local을 생성합니다:
`ash
NEXT_PUBLIC_SUPABASE_URL=https://qpokylkyqogleueosygv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_4D0RpQeQPUjzjba8FSIkKQ_s0gRIF0x
`

### 2. 실행
`ash
cd webapp
npm install
npm run dev
`
브라우저에서 http://localhost:5200 접속.
