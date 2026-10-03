# Progress

## 2026-10-03 — 규제 온톨로지 지식 그래프 & 공급망 전이 리스크 시뮬레이터 구축 (GraphRAG)
- 다국가 규제기관 (미국 FDA, 유럽 EMA EudraGMDP, 대한민국 식약처, 일본 PMDA) 결함 지적과 6계층 온톨로지 연계
- 31개 노드 및 30개 관계 엣지 데이터셋 구축 (pipeline/ontology_builder.py, database/graph_seed.sql, webapp/src/lib/graphData.js)
- 인터랙티브 SVG 지식 그래프 탐색기 (KnowledgeGraphView.js), 6계층 플로우 시각화 및 노드별 1:1 KGMP 고시 매핑
- 공급망 도미노 전이 리스크 시뮬레이터 (Contagion Simulator): 해외 제조소 결함의 국내 완제사 4-Hop 파급 경로, 전이 위험도(88%) 게이지, 약사법 제42조 수입관리기준 연계 분석, AI 사전 방어 CAPA 패키지 및 1-Pager 진단서 인쇄
- GraphRAG 시맨틱 자연어 질의 엔진: WFI 누수, HPLC 데이터 삭제, EU Annex 1 CCS 부적합 질의 경로 탐색 및 AI 브리핑 카드 구현
- 로컬 포트 5200 등록 및 Vercel 배포 연동

## 2026-10-03 — 식약처 파이프라인 구축, openFDA 데이터 300건 확장, 1-Pager PDF 출력 기능 탑재
- 한국 공공데이터포털 식약처(MFDS) 행정처분 전용 수집기(pipeline/mfds_collector.py) 구축
- openFDA 300건 히스토리컬 배치 수집 파이프라인 가동 및 304건 규제 데이터 DB 통합
- 원문 대조 인스펙터 실무용 1-Pager PDF 출력 및 @media print A4 스타일링 구현

## 2026-10-03 — 초기 아키텍처 및 Supabase·Next.js 플랫폼 구축
- 글로벌 GMP 규제기관 (FDA, EMA, 식약처) 인텔리전스 플랫폼 구축
- Supabase PostgreSQL + pgvector 하이브리드 검색 및 규제 데이터 적재 완료
- Next.js 16 다크 대시보드 (레이더, 검색기, 원문 대조 인스펙터, 워치독, QA 에이전트) 구현 및 브라우저 검증 완료
- 로컬 포트 5200 배정 (G:\내 드라이브\10_개발\로컬포트.md)