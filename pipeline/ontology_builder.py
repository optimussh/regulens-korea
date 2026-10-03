"""
ReguLens Korea - Regulatory Knowledge Graph & Ontology Builder (GraphRAG Engine)
Constructs multi-hop relational graph linking:
[Company] -> [Facility] -> [Material] -> [Process] -> [Regulatory Event] -> [Regulations] -> [KGMP Cross-Map] -> [Domestic Client Product]
"""

import os
import json

BASE_DIR = os.path.dirname(__file__)
PROJECT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))
OUTPUT_JSON = os.path.join(PROJECT_DIR, "database", "graph_data.json")
OUTPUT_SQL = os.path.join(PROJECT_DIR, "database", "graph_seed.sql")
OUTPUT_JS = os.path.join(PROJECT_DIR, "webapp", "src", "lib", "graphData.js")

NODES = [
    # 1. Global & Domestic Companies (글로벌 제조원 및 국내 수입·완제사)
    {
        "id": "comp-zenith",
        "label": "Zenith BioPharma Pvt.",
        "entity_type": "COMPANY",
        "risk_level": "CRITICAL",
        "country": "India",
        "properties": {
            "name_kr": "제니스 바이오파마",
            "role": "해외 CMO/API 제조소",
            "location": "인도 하이데라바드 (Hyderabad, India)",
            "description": "글로벌 무균 주사제 수탁 제조 및 세팔로스포린계 항생제 원료 제조소. 최근 FDA 483 및 Warning Letter 수신.",
            "fei": "3008921475"
        }
    },
    {
        "id": "comp-orient",
        "label": "Orient API Chemical Corp",
        "entity_type": "COMPANY",
        "risk_level": "CRITICAL",
        "country": "China",
        "properties": {
            "name_kr": "오리엔트 API 화학공업",
            "role": "해외 합성원료 제조소",
            "location": "중국 저장성 타이저우 (Zhejiang, China)",
            "description": "스타틴계 심혈관 및 항바이러스 합성 원료의약품 수출 전문 제조사. HPLC 시험 원본 데이터 삭제 및 ALCOA+ 위반.",
            "fei": "3011459820"
        }
    },
    {
        "id": "comp-bavaria",
        "label": "Bavaria Sterile Fill GmbH",
        "entity_type": "COMPANY",
        "risk_level": "CRITICAL",
        "country": "Germany",
        "properties": {
            "name_kr": "바바리아 스테릴 필",
            "role": "유럽 바이오 완제 CMO",
            "location": "독일 바이에른주 뮌헨 (Munich, Germany)",
            "description": "유럽 주요 바이오 완제 무균 충전 CMO. RABS 글로브 파손 미보고 및 EU GMP Annex 1 CCS 부적합 판정.",
            "eudragmdp_ref": "NCR/DE_BY_01/2024/004"
        }
    },
    {
        "id": "comp-alps",
        "label": "Alps Active Pharma S.p.A.",
        "entity_type": "COMPANY",
        "risk_level": "MAJOR",
        "country": "Italy",
        "properties": {
            "name_kr": "알프스 액티브 파마",
            "role": "유럽 고활성 원료(HPAPI) 제조소",
            "location": "이탈리아 밀라노 (Milan, Italy)",
            "description": "고활성 항암제 원료 합성 제조소. 교차오염 방지 차압 설계 결함 및 공용 덕트 지적.",
            "eudragmdp_ref": "NCR/IT_LOM_2024/012"
        }
    },
    {
        "id": "comp-binex",
        "label": "바이넥스 (오송/부산공장)",
        "entity_type": "COMPANY",
        "risk_level": "MAJOR",
        "country": "South Korea",
        "properties": {
            "name_kr": "바이넥스",
            "role": "국내 중견 완제 및 바이오 CDMO",
            "location": "충북 청주시 흥덕구 오송생명로",
            "description": "합성 및 바이오의약품 CDMO. 제조방법 임의 변경 및 허가사항 불일치로 식약처 행정처분 이력 보유.",
            "license": "KR-GMP-2018-OS01"
        }
    },
    {
        "id": "comp-samsung",
        "label": "삼성바이오로직스 (수입·공급망 연계)",
        "entity_type": "DOMESTIC_CLIENT",
        "risk_level": "NORMAL",
        "country": "South Korea",
        "properties": {
            "name_kr": "삼성바이오로직스",
            "role": "국내 1위 글로벌 바이오 CDMO",
            "location": "인천광역시 연수구 송도바이오대로",
            "description": "글로벌 8개 공장 가동. 해외 원료 및 무균 유틸리티 부품 수입 공급망 밸리데이션 모니터링 대상.",
            "exposure": "해외 무균 원료 수입 감시망 등록"
        }
    },
    {
        "id": "comp-celltrion",
        "label": "셀트리온 (수입·공급망 연계)",
        "entity_type": "DOMESTIC_CLIENT",
        "risk_level": "NORMAL",
        "country": "South Korea",
        "properties": {
            "name_kr": "셀트리온",
            "role": "국내 대표 바이오시밀러 제조·수출 기업",
            "location": "인천광역시 연수구 아카데미로",
            "description": "자가면역질환 및 항암 바이오시밀러 글로벌 공급. 유럽/미국 규제 실사 실시간 연계 관리.",
            "exposure": "글로벌 API 2차 벤더 위험 노출 관리"
        }
    },
    {
        "id": "comp-yuhan",
        "label": "유한양행 (수입·공급망 연계)",
        "entity_type": "DOMESTIC_CLIENT",
        "risk_level": "NORMAL",
        "country": "South Korea",
        "properties": {
            "name_kr": "유한양행",
            "role": "국내 주요 전통 제약 및 신약 개발사",
            "location": "서울특별시 동작구 노량진로",
            "description": "합성 완제의약품 주요 제조원. 해외 스타틴계 및 항생제 API 수입선 다변화 관리.",
            "exposure": "원료 시험 적격성 재검토 리스크"
        }
    },

    # 2. Facilities (제조 시설 & 클린룸)
    {
        "id": "fac-zenith-hyd",
        "label": "Zenith Hyderabad Cleanroom Line 3",
        "entity_type": "FACILITY",
        "risk_level": "CRITICAL",
        "country": "India",
        "properties": {
            "name_kr": "제니스 하이데라바드 무균 3호라인",
            "type": "Grade A/B 무균 충전 클린룸",
            "equipment": "동결건조기 연계 고속 무균 충전기",
            "hvac_status": "공기조화 차압 역전 발생 이력"
        }
    },
    {
        "id": "fac-orient-zhe",
        "label": "Orient Zhejiang API Synthesis Plant 1",
        "entity_type": "FACILITY",
        "risk_level": "CRITICAL",
        "country": "China",
        "properties": {
            "name_kr": "오리엔트 저장성 제1합성공장",
            "type": "화학 합성 및 고순도 결정화 라인",
            "equipment": "글라스라이닝 반응기 12기, 원심분리기",
            "qc_lab": "HPLC 14대, GC 6대 연계 시험실"
        }
    },
    {
        "id": "fac-bavaria-mun",
        "label": "Munich RABS Biologics Core",
        "entity_type": "FACILITY",
        "risk_level": "CRITICAL",
        "country": "Germany",
        "properties": {
            "name_kr": "뮌헨 바이오 완제 RABS 코어",
            "type": "RABS 제한접근격리시스템 무균실",
            "equipment": "Optima 바이알 세척 멸균 충전 복합라인",
            "sterilization": "VHP(기화과산화수소) 표면 멸균기"
        }
    },
    {
        "id": "fac-binex-osong",
        "label": "바이넥스 충북 오송 완제 타정·캡슐동",
        "entity_type": "FACILITY",
        "risk_level": "MAJOR",
        "country": "South Korea",
        "properties": {
            "name_kr": "바이넥스 오송 고형제 제조소",
            "type": "고형제(정제/캡슐제) 타정 및 과립실",
            "equipment": "Fette 고속 타정기, 코팅기 4대",
            "compliance": "제조기록서 이중작성 지적 이력"
        }
    },

    # 3. Materials / API (핵심 원료의약품 및 공급 품목)
    {
        "id": "mat-wfi",
        "label": "주사용수 (WFI Circulation Loop)",
        "entity_type": "MATERIAL",
        "risk_level": "CRITICAL",
        "country": "Global",
        "properties": {
            "name_kr": "주사용수 (WFI 제조 및 순환 루프)",
            "spec": "엔도톡신 < 0.25 EU/mL, 비전도도 관리",
            "criticality": "무균 주사제 전 공정 오염 직결 유틸리티",
            "cas_number": "7732-18-5"
        }
    },
    {
        "id": "mat-ceftriaxone",
        "label": "세프트리악손 나트륨 원료 (Ceftriaxone Sodium API)",
        "entity_type": "MATERIAL",
        "risk_level": "CRITICAL",
        "country": "India",
        "properties": {
            "name_kr": "세프트리악손 나트륨 무균 원료의약품",
            "type": "3세대 세팔로스포린계 광범위 항생제",
            "domestic_usage": "국내 주요 대형병원 원내 주사제 주원료",
            "cas_number": "74578-69-1"
        }
    },
    {
        "id": "mat-statin",
        "label": "아토르바스타틴 칼슘 원료 (Atorvastatin Calcium API)",
        "entity_type": "MATERIAL",
        "risk_level": "CRITICAL",
        "country": "China",
        "properties": {
            "name_kr": "아토르바스타틴 칼슘 합성 원료의약품",
            "type": "HMG-CoA 환원효소 억제제 (고지혈증 치료제)",
            "domestic_usage": "국내 연간 처방액 1,500억원 이상 블록버스터",
            "cas_number": "134523-03-8"
        }
    },
    {
        "id": "mat-oncology",
        "label": "세포독성 백금착제 항암원료 (Oxaliplatin API)",
        "entity_type": "MATERIAL",
        "risk_level": "MAJOR",
        "country": "Italy",
        "properties": {
            "name_kr": "옥살리플라틴 항암 원료의약품",
            "type": "대장암 1차 항암 표적 화학요법제",
            "handling": "고활성 격리 OEB 5 등급 관리 원료",
            "cas_number": "61825-94-3"
        }
    },

    # 4. Critical Processes (제조 단위공정)
    {
        "id": "proc-aseptic-fill",
        "label": "Grade A 무균충전 및 타전 공정",
        "entity_type": "PROCESS",
        "risk_level": "CRITICAL",
        "country": "Global",
        "properties": {
            "name_kr": "Grade A 무균 충전 및 고무전 타전 공정",
            "requirement": "부유입자 0.5um 기준 0개 유지, 동적 기류 0.45 m/s",
            "risk_point": "인체 개입 시 와류에 의한 미생물 혼입 가능성"
        }
    },
    {
        "id": "proc-di-audit",
        "label": "QC 시험실 HPLC 전자감사추적(Audit Trail)",
        "entity_type": "PROCESS",
        "risk_level": "CRITICAL",
        "country": "Global",
        "properties": {
            "name_kr": "QC 분석기기 전자 기록 및 감사추적 관리",
            "requirement": "ALCOA+ 원칙, 관리자 권한 분리, 재시험 파일 보존",
            "risk_point": "OOS(기준일탈) 은폐를 위한 시험 데이터 덮어쓰기"
        }
    },
    {
        "id": "proc-smoke-study",
        "label": "동적 기류 가시화 스모크 스터디",
        "entity_type": "PROCESS",
        "risk_level": "MAJOR",
        "country": "Global",
        "properties": {
            "name_kr": "작업자 동적 상태 기류 스모크 스터디",
            "requirement": "충전 구역 일방향 층류(Unidirectional Flow) 입증",
            "risk_point": "도어 개폐 및 작업자 팔 이동 시 정체 와류 발생"
        }
    },
    {
        "id": "proc-cleaning-val",
        "label": "다품목 공용 반응기 잔류물 세척밸리데이션",
        "entity_type": "PROCESS",
        "risk_level": "MAJOR",
        "country": "Global",
        "properties": {
            "name_kr": "공용 설비 교차오염 방지 세척밸리데이션",
            "requirement": "PDE(1일 노출허용량) 및 TOC 잔류 허용기준 충족",
            "risk_point": "이전 제조 원료의 다음 제조 배치 교차오염"
        }
    },

    # 5. Regulatory Events (글로벌 실사 지적 이벤트: FDA, EMA, MFDS, PMDA)
    {
        "id": "event-fda-zenith",
        "label": "FDA Warning Letter (WL-320-24-19)",
        "entity_type": "REG_EVENT",
        "risk_level": "CRITICAL",
        "country": "USA",
        "properties": {
            "title_kr": "FDA 경고장 (WL-320-24-19): 무균공정 붕괴 및 WFI 누수",
            "authority": "US FDA CDER",
            "date": "2024-08-14",
            "severity": "CRITICAL",
            "doc_type": "Warning Letter",
            "penalty": "수입 경보(Import Alert 66-40) 지정 및 미국 수출 전면 중단"
        }
    },
    {
        "id": "event-fda-orient",
        "label": "FDA Warning Letter (WL-320-24-31)",
        "entity_type": "REG_EVENT",
        "risk_level": "CRITICAL",
        "country": "USA",
        "properties": {
            "title_kr": "FDA 경고장 (WL-320-24-31): HPLC 데이터 고의 삭제",
            "authority": "US FDA CDER",
            "date": "2024-09-02",
            "severity": "CRITICAL",
            "doc_type": "Warning Letter",
            "penalty": "품질 관리자 서명 위조 혐의 및 원료 수입통관 보류"
        }
    },
    {
        "id": "event-ema-bavaria",
        "label": "EMA Statement of Non-Compliance (NCR/DE_BY_01)",
        "entity_type": "REG_EVENT",
        "risk_level": "CRITICAL",
        "country": "EU",
        "properties": {
            "title_kr": "EMA EudraGMDP GMP 부적합 처분서 (Annex 1 CCS 결함)",
            "authority": "EMA / Bavarian Competent Authority",
            "date": "2024-06-18",
            "severity": "CRITICAL",
            "doc_type": "Statement of Non-Compliance",
            "penalty": "EU 역내 바이오 완제의약품 출하 승인 정지"
        }
    },
    {
        "id": "event-mfds-binex",
        "label": "식약처 제조소 특별기획합동감시 행정처분",
        "entity_type": "REG_EVENT",
        "risk_level": "MAJOR",
        "country": "South Korea",
        "properties": {
            "title_kr": "식약처 GMP 적합판정 취소 및 잠정 제조·판매 중지",
            "authority": "대한민국 식품의약품안전처 (MFDS)",
            "date": "2024-03-20",
            "severity": "MAJOR",
            "doc_type": "행정처분 공고",
            "penalty": "해당 품목 허가 취소 및 GMP 원스트라이크 아웃 심의"
        }
    },
    {
        "id": "event-pmda-alps",
        "label": "PMDA Japan Foreign Manufacturer Deficiency Report",
        "entity_type": "REG_EVENT",
        "risk_level": "MAJOR",
        "country": "Japan",
        "properties": {
            "title_kr": "일본 PMDA 해외 제조소 실사 결함 보고서 (교차오염 차압)",
            "authority": "PMDA (Japan)",
            "date": "2024-05-11",
            "severity": "MAJOR",
            "doc_type": "Deficiency Report",
            "penalty": "일본 후생노동성 적합성 재심사 요구"
        }
    },

    # 6. Regulatory Standards & KGMP 1:1 Cross-Mapping (핵심 규제 온톨로지 고리)
    {
        "id": "reg-cfr-211-113",
        "label": "FDA 21 CFR 211.113(b) [무균 미생물 오염 방지]",
        "entity_type": "REG_CLAUSE",
        "risk_level": "CRITICAL",
        "country": "USA",
        "properties": {
            "jurisdiction": "US FDA",
            "clause": "21 CFR § 211.113(b)",
            "title_en": "Control of microbiological contamination",
            "summary_kr": "무균 표방 의약품의 미생물 오염 방지를 위한 서면 절차 수립 및 검증 의무화"
        }
    },
    {
        "id": "reg-cfr-211-194",
        "label": "FDA 21 CFR 211.194 [시험실 완전 기록 및 원본 데이터]",
        "entity_type": "REG_CLAUSE",
        "risk_level": "CRITICAL",
        "country": "USA",
        "properties": {
            "jurisdiction": "US FDA",
            "clause": "21 CFR § 211.194(a)",
            "title_en": "Laboratory records and complete raw data",
            "summary_kr": "규격 적합 입증을 위해 수행된 모든 시험의 완전한 원시 데이터 및 크로마토그램 보존"
        }
    },
    {
        "id": "reg-annex-1",
        "label": "EU GMP Annex 1 2.3 & 4.3 [오염관리전략 CCS & 무균보장]",
        "entity_type": "REG_CLAUSE",
        "risk_level": "CRITICAL",
        "country": "EU",
        "properties": {
            "jurisdiction": "EMA / PIC/S",
            "clause": "EU Guidelines Annex 1 Sec 2.3 & 4.3",
            "title_en": "Contamination Control Strategy (CCS)",
            "summary_kr": "설계, 설비, 작업원, 모니터링을 총망라하는 전사적 오염관리전략(CCS) 공식 수립"
        }
    },
    {
        "id": "reg-kgmp-part1",
        "label": "식약처 의약품등 안전에 관한 규칙 [별표 1] 무균의약품 제조",
        "entity_type": "REG_CLAUSE",
        "risk_level": "CRITICAL",
        "country": "South Korea",
        "properties": {
            "jurisdiction": "대한민국 식약처 (MFDS)",
            "clause": "안전규칙 [별표 1] 제4호 및 제11호",
            "title_kr": "무균의약품 제조소 환경모니터링 및 배지충전시험 기준",
            "mapping_target": "FDA 21 CFR 211.113 및 EU Annex 1과 100% 대응",
            "inspection_focus": "해외 실사 지적 발생 시 국내 수입사 제조소 즉시 현장 불시 실사 타깃"
        }
    },
    {
        "id": "reg-kgmp-di",
        "label": "식약처 의약품 제조업체 데이터 완전성(DI) 평가기준",
        "entity_type": "REG_CLAUSE",
        "risk_level": "CRITICAL",
        "country": "South Korea",
        "properties": {
            "jurisdiction": "대한민국 식약처 (MFDS)",
            "clause": "식약처 고시 데이터완전성 7대 핵심요건",
            "title_kr": "시험실 정보화시스템 감사추적(Audit Trail) 정기 검토 및 위변조 방지",
            "mapping_target": "FDA 21 CFR 211.194 및 ALCOA+ 가이드라인 일치",
            "inspection_focus": "OOS 은폐 및 시험데이터 무단 삭제 시 GMP 적합판정 원스트라이크 취소 대상"
        }
    },
    {
        "id": "reg-kgmp-vendor",
        "label": "식약처 의약품 수입관리기준 및 해외제조원 정기 실사제도",
        "entity_type": "REG_CLAUSE",
        "risk_level": "MAJOR",
        "country": "South Korea",
        "properties": {
            "jurisdiction": "대한민국 식약처 (MFDS)",
            "clause": "약사법 제42조 및 수입의약품 등 관리 규정",
            "title_kr": "원료의약품 해외제조소 등록 및 현지실사 평가",
            "mapping_target": "해외 규제기관 불합격 시 국내 수입 승인 정지 연계",
            "inspection_focus": "해외 경고장 발행 시 30일 이내 국내 수입사의 안전성 검토 보고서 제출 의무"
        }
    }
]

EDGES = [
    # 1. Company -> Facility (운영 관계)
    {"id": "e01", "source": "comp-zenith", "target": "fac-zenith-hyd", "relation": "OPERATES", "label": "무균 제조소 운영"},
    {"id": "e02", "source": "comp-orient", "target": "fac-orient-zhe", "relation": "OPERATES", "label": "합성 제조소 운영"},
    {"id": "e03", "source": "comp-bavaria", "target": "fac-bavaria-mun", "relation": "OPERATES", "label": "바이오 CMO 운영"},
    {"id": "e04", "source": "comp-binex", "target": "fac-binex-osong", "relation": "OPERATES", "label": "오송 완제공장 운영"},

    # 2. Facility -> Material & Process (생산 및 단위공정)
    {"id": "e05", "source": "fac-zenith-hyd", "target": "mat-wfi", "relation": "USES_UTILITY", "label": "WFI 유틸리티 루프 의존"},
    {"id": "e06", "source": "fac-zenith-hyd", "target": "mat-ceftriaxone", "relation": "PRODUCES", "label": "세프트리악손 원료 합성·무균화"},
    {"id": "e07", "source": "fac-orient-zhe", "target": "mat-statin", "relation": "PRODUCES", "label": "아토르바스타틴 화학합성"},
    {"id": "e08", "source": "fac-zenith-hyd", "target": "proc-aseptic-fill", "relation": "EXECUTES_PROCESS", "label": "무균 충전 공정 수행"},
    {"id": "e09", "source": "fac-orient-zhe", "target": "proc-di-audit", "relation": "EXECUTES_PROCESS", "label": "QC HPLC 배치 시험"},
    {"id": "e10", "source": "fac-bavaria-mun", "target": "proc-smoke-study", "relation": "EXECUTES_PROCESS", "label": "RABS 동적 기류 검증"},
    {"id": "e11", "source": "fac-orient-zhe", "target": "proc-cleaning-val", "relation": "EXECUTES_PROCESS", "label": "다품목 반응기 세척"},

    # 3. Regulatory Events -> Facilities (실사 결함 적발)
    {"id": "e12", "source": "event-fda-zenith", "target": "fac-zenith-hyd", "relation": "INSPECTED_DEFECT", "label": "FDA 현장실사 치명적 결함 적발"},
    {"id": "e13", "source": "event-fda-orient", "target": "fac-orient-zhe", "relation": "INSPECTED_DEFECT", "label": "FDA 데이터조작 확인"},
    {"id": "e14", "source": "event-ema-bavaria", "target": "fac-bavaria-mun", "relation": "INSPECTED_DEFECT", "label": "EMA 무균보장 부적합 단정"},
    {"id": "e15", "source": "event-mfds-binex", "target": "fac-binex-osong", "relation": "INSPECTED_DEFECT", "label": "식약처 제조방법 불일치 적발"},
    {"id": "e16", "source": "event-pmda-alps", "target": "mat-oncology", "relation": "INSPECTED_DEFECT", "label": "PMDA 차압 결함 지적"},

    # 4. Regulatory Events -> Cited Regulation Clauses (위반 규정 조항 적시)
    {"id": "e17", "source": "event-fda-zenith", "target": "reg-cfr-211-113", "relation": "CITES_CLAUSE", "label": "위반 조항 공식 적시"},
    {"id": "e18", "source": "event-fda-orient", "target": "reg-cfr-211-194", "relation": "CITES_CLAUSE", "label": "위반 조항 공식 적시"},
    {"id": "e19", "source": "event-ema-bavaria", "target": "reg-annex-1", "relation": "CITES_CLAUSE", "label": "위반 조항 공식 적시"},
    {"id": "e20", "source": "event-mfds-binex", "target": "reg-kgmp-di", "relation": "CITES_CLAUSE", "label": "식약처 고시 위반 처분"},

    # 5. Global Regulation -> 1:1 KGMP Korean Cross Mapping (핵심 국가 규제 연계 해자!)
    {"id": "e21", "source": "reg-cfr-211-113", "target": "reg-kgmp-part1", "relation": "CROSS_MAPPED_TO", "label": "1:1 KGMP [별표 1] 무균고시 법적 매핑"},
    {"id": "e22", "source": "reg-annex-1", "target": "reg-kgmp-part1", "relation": "CROSS_MAPPED_TO", "label": "1:1 KGMP [별표 1] 오염관리전략 매핑"},
    {"id": "e23", "source": "reg-cfr-211-194", "target": "reg-kgmp-di", "relation": "CROSS_MAPPED_TO", "label": "식약처 데이터완전성 7대지침 1:1 매핑"},
    {"id": "e24", "source": "reg-cfr-211-113", "target": "reg-kgmp-vendor", "relation": "CROSS_MAPPED_TO", "label": "해외제조원 관리규정 연계"},

    # 6. Supply Chain Contagion Ripple (해외 원료 결함 -> 국내 제약사 도미노 전이)
    {"id": "e25", "source": "mat-ceftriaxone", "target": "comp-samsung", "relation": "SUPPLIES_TO", "label": "원료 공급계약 체결"},
    {"id": "e26", "source": "mat-statin", "target": "comp-celltrion", "relation": "SUPPLIES_TO", "label": "합성 원료의약품 공급"},
    {"id": "e27", "source": "mat-statin", "target": "comp-yuhan", "relation": "SUPPLIES_TO", "label": "완제의약품 제네릭 원료 납품"},
    {"id": "e28", "source": "event-fda-zenith", "target": "comp-samsung", "relation": "CONTAGION_RISK", "label": "도미노 전이 리스크 88% (식약처 수입 불시감시 경보)"},
    {"id": "e29", "source": "event-fda-orient", "target": "comp-yuhan", "relation": "CONTAGION_RISK", "label": "도미노 전이 리스크 92% (원료 시험성적서 신뢰성 재검증)"},
    {"id": "e30", "source": "event-ema-bavaria", "target": "comp-celltrion", "relation": "CONTAGION_RISK", "label": "도미노 전이 리스크 79% (유럽 완제 출하 보류 파급)"}
]


def build_ontology():
    print(f"[*] Building Enterprise Regulatory Knowledge Graph...")
    print(f"[*] Total Nodes: {len(NODES)}, Total Relationships (Edges): {len(EDGES)}")

    os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)
    os.makedirs(os.path.dirname(OUTPUT_JS), exist_ok=True)

    # 1. Output JSON
    graph_data = {"nodes": NODES, "edges": EDGES}
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(graph_data, f, ensure_ascii=False, indent=2)
    print(f"[+] Exported Graph JSON: {OUTPUT_JSON}")

    # 2. Output JavaScript for Next.js Web Frontend
    js_content = f"// ReguLens Korea - Regulatory Knowledge Graph & Ontology Dataset\nexport const KNOWLEDGE_GRAPH_DATA = {json.dumps(graph_data, ensure_ascii=False, indent=2)};\n"
    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"[+] Exported Webapp JavaScript Dataset: {OUTPUT_JS}")

    # 3. Output SQL Seed for PostgreSQL
    sql_lines = [
        "-- ====================================================================",
        "-- ReguLens Korea - Regulatory Knowledge Graph Seed Data",
        "-- Auto-generated by ontology_builder.py",
        "-- ====================================================================\n"
    ]
    for n in NODES:
        p_str = json.dumps(n["properties"], ensure_ascii=False).replace("'", "''")
        label = n['label'].replace("'", "''")
        country = n['country'].replace("'", "''")
        sql_lines.append(
            f"INSERT INTO public.graph_nodes (id, label, entity_type, risk_level, country, properties) "
            f"VALUES ('{n['id']}', '{label}', '{n['entity_type']}', '{n['risk_level']}', '{country}', '{p_str}'::jsonb) "
            f"ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, entity_type = EXCLUDED.entity_type, risk_level = EXCLUDED.risk_level, properties = EXCLUDED.properties;"
        )

    sql_lines.append("")
    for e in EDGES:
        p_str = json.dumps(e.get("properties", {}), ensure_ascii=False).replace("'", "''")
        label = e['label'].replace("'", "''")
        sql_lines.append(
            f"INSERT INTO public.graph_edges (id, source_node_id, target_node_id, relation_type, label_kr, properties) "
            f"VALUES ('{e['id']}', '{e['source']}', '{e['target']}', '{e['relation']}', '{label}', '{p_str}'::jsonb) "
            f"ON CONFLICT (id) DO UPDATE SET relation_type = EXCLUDED.relation_type, label_kr = EXCLUDED.label_kr;"
        )

    with open(OUTPUT_SQL, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_lines))
    print(f"[+] Exported SQL Seed: {OUTPUT_SQL}")
    print("[*] Ontology compilation complete!")


if __name__ == '__main__':
    build_ontology()
