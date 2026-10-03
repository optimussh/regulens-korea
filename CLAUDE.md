# ReguLens Korea (레귤렌즈 코리아)

글로벌 규제기관(FDA, EMA, 식약처) 실사 및 경고장 데이터를 AI로 분석하여 1:1 KGMP 매핑, 공정별 CAPA 점검표 및 원문 인용 대조를 제공하는 B2B 제약·바이오 규제 인텔리전스 플랫폼.

## Commands

- Frontend Dev (Port 5200): cd webapp && npm run dev
- Frontend Build: cd webapp && npm run build
- Python Pipeline: cd pipeline && python eval_golden_dataset.py
- Bulk Historical Collect: cd pipeline && python bulk_historical_collector.py

## Working Style — 최우선 (모든 룰보다 먼저)

**모든 작업의 행동 기반.** 아래 도메인 룰과 충돌해도 이 가이드의 원칙이 우선한다.

@rules/guidelines.md

---

## Rules — 범용 (유지)

@rules/common/comments.md
@rules/common/naming.md
@rules/common/git.md
@rules/common/security.md
@rules/common/error-handling.md
@rules/common/dependencies.md
@rules/common/documentation.md
@rules/common/testing.md

## Rules — 백엔드/Docker

@rules/backend/config.md

## Language-Specific Rules

@rules/languages/python.md
@rules/languages/typescript.md
