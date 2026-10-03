// ReguLens Korea - Core Regulatory Seed & Master Data
export const INITIAL_REGULATORY_DOCS = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    doc_number: "WL-320-24-19",
    source: "FDA_WARNING_LETTER",
    source_name: "미국 FDA 경고장",
    company_name: "Zenith BioPharma Laboratories Ltd.",
    country: "India",
    facility_location: "Hyderabad, Telangana",
    issue_date: "2024-08-14",
    inspection_dates: "Mar 04 - Mar 15, 2024",
    fei_number: "3008921475",
    title_kr: "인도 무균주사제 제조소 WFI 루프 미생물 연속 초과 및 QA 승인 일탈",
    summary_kr: "무균 충전 라인(Grade A) 공급 주사용수(WFI) 루프에서 Ralstonia pickettii 균 오염이 14주 연속 발생했음에도 품질부서(QA)가 근본 원인 조사 없이 18개 상용 배치를 출하 승인하여 적발되었습니다.",
    severity_level: "CRITICAL",
    process_types: ["무균충전(Aseptic)", "환경모니터링(EM)", "유틸리티(WFI)", "완제의약품"],
    violation_codes_fda: ["21 CFR 211.113(b)", "21 CFR 211.192", "21 CFR 211.94"],
    violation_codes_kgmp: [
      "의약품 제조 및 품질관리기준 제4조(제조위생관리)",
      "무균의약품 제조소 관리기준 별표 1 제8호(주사용수설비)"
    ],
    violation_codes_ema: ["EU GMP Annex 1 8.12 (Water Systems)"],
    root_cause_analysis: "WFI 루프 말단 밸브(Point-of-Use)의 바이오필름(Biofilm) 형성 및 핫 루프 순환 온도 저하(80℃ 미만). 주기적 증기 멸균(SIP) 주기 설계 실패 및 QA의 OOS 일탈 조사 절차 무력화.",
    capa_checklist: [
      {
        id: "CAPA-01",
        task: "WFI 전체 순환 루프 85℃ 이상 고온 순환 검증 및 루프 말단 밸브 Dead-Leg 재측정 (1.5D 이내 준수)",
        department: "엔지니어링 / 공무팀",
        urgency: "즉시조치(7일)",
        guideline_ref: "EU GMP Annex 1 8.12"
      },
      {
        id: "CAPA-02",
        task: "출하된 18개 배치에 대한 가속 안정성 시험 및 무균시험 재검증, 리콜 영향성 평가서 QA 승인",
        department: "QA 품질보증팀",
        urgency: "즉시조치(14일)",
        guideline_ref: "21 CFR 211.192"
      },
      {
        id: "CAPA-03",
        task: "Ralstonia 등 그람음성 비발효균 검출 시 배양 기간 연장 및 신속 동정(MALDI-TOF) 프로토콜 SOP 개정",
        department: "QC 미생물시험실",
        urgency: "30일 이내",
        guideline_ref: "USP <1231> Water for Pharma"
      }
    ],
    key_citations: [
      {
        section: "Observation 1 - 21 CFR 211.113(b)",
        english_quote: "Your firm failed to establish and follow appropriate written procedures designed to prevent microbiological contamination of drug products purporting to be sterile. Specifically, WFI loop point-of-use valves in Grade A filling line exhibited recurring Ralstonia pickettii excursions over 14 consecutive weeks.",
        korean_interpretation: "무균의약품의 미생물 오염을 방지하기 위한 적절한 절차를 수립 및 준수하지 않음. Grade A 무균충전 라인의 WFI 채수 밸브에서 14주 연속 미생물 규격 초과 발생.",
        risk_implication: "국내 완제 주사제 수탁 제조(CDMO) 및 수출 기업의 경우, WFI 루프의 연속 오염은 즉각적인 Import Alert(미국 수입금지) 및 전 배치 리콜을 초래할 수 있는 최고 위험 등급임."
      }
    ],
    raw_text: `UNITED STATES FOOD AND DRUG ADMINISTRATION
WARNING LETTER
Zenith BioPharma Laboratories Ltd.
FEI: 3008921475 | WL-320-24-19
Hyderabad, Telangana, India

During our inspection of your pharmaceutical manufacturing facility conducted from March 04 to March 15, 2024, our investigators identified significant violations of Current Good Manufacturing Practice (CGMP) regulations for finished pharmaceuticals.

1. Your firm failed to establish and follow appropriate written procedures designed to prevent microbiological contamination of drug products purporting to be sterile (21 CFR 211.113(b)). Specifically, your Water for Injection (WFI) loop point-of-use valves in Cleanroom Grade A aseptic filling line #3 exhibited recurring Ralstonia pickettii bioburden excursions over 14 consecutive weeks. Your Quality Unit failed to conduct an adequate Root Cause Investigation and released 18 commercial sterile injectable batches.

2. Your firm failed to ensure that each container closure system provides adequate protection against foreseeable external factors in storage and use (21 CFR 211.94). Container integrity testing was omitted for batch validation.`
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    doc_number: "WL-320-24-31",
    source: "FDA_WARNING_LETTER",
    source_name: "미국 FDA 경고장",
    company_name: "Orient Active Pharma Ingredients Corp.",
    country: "China",
    facility_location: "Zhejiang Province",
    issue_date: "2024-09-02",
    inspection_dates: "Apr 15 - Apr 26, 2024",
    fei_number: "3011459820",
    title_kr: "중국 원료(API) 제조소 HPLC 사전 Trial 시험 및 감사추적 무단 삭제 DI 적발",
    summary_kr: "HPLC 불순물 시험 중 비공식 사전 시험(Trial Injection)을 실시하여 규격외(OOS) 피크가 검출되면 크로마토그램을 무단 삭제하고, 6대 시험 장비의 Audit Trail을 관리자 권한으로 영구 비활성화한 데이터 무결성 결함입니다.",
    severity_level: "CRITICAL",
    process_types: ["데이터무결성(DI)", "시험실(QC)", "원료(API)"],
    violation_codes_fda: ["21 CFR 211.194(a)", "21 CFR 211.68(b)", "21 CFR 211.160(b)"],
    violation_codes_kgmp: [
      "의약품 제조 및 품질관리기준 제48조(시험관리 및 기록보존)",
      "데이터 완전성 평가지침(식약처 2020)"
    ],
    violation_codes_ema: ["EU GMP Part I Chapter 4 (Documentation)"],
    root_cause_analysis: "QC 분석원에게 기기 Administrator 권한 부여 및 시스템 Audit Trail 비활성화. 사내 KPI가 OOS 발생률 최소화에 편향되어 있어 실패 시험 결과를 은폐하려는 조직 문화.",
    capa_checklist: [
      {
        id: "CAPA-04",
        task: "모든 분석장비(HPLC, GC 등) 독립된 IT 관리자 전용 권한 분리 및 분석원 권한 강등(Operator/User)",
        department: "QC 시험실 / IT팀",
        urgency: "즉시조치(7일)",
        guideline_ref: "ALCOA+ Principles"
      },
      {
        id: "CAPA-05",
        task: "사전 시험(Trial Run) 전면 금지 및 시험 sequence 전건 감사추적 주기적 QA 교차 검토 SOP 시행",
        department: "QA 품질보증팀",
        urgency: "14일 이내",
        guideline_ref: "FDA DI Guidance 2018"
      },
      {
        id: "CAPA-06",
        task: "삭제된 크로마토그램 복구 및 과거 3년간 국내 공급 API 배치에 대한 재시험 영향 분석서 제출",
        department: "QA / 공급망관리팀",
        urgency: "30일 이내",
        guideline_ref: "21 CFR 211.194"
      }
    ],
    key_citations: [
      {
        section: "Observation 1 - 21 CFR 211.194(a)",
        english_quote: "QC analysts routinely conducted unofficial trial HPLC injections prior to recorded sequence runs. When OOS impurity peaks were observed, chromatograms were deleted without documented justification.",
        korean_interpretation: "시험 규격 적합 여부를 확인하기 위해 수행된 모든 시험의 완전한 데이터를 기록하지 않음. 시험원이 공식 시퀀스 전 시험용 주입을 실시하고 불합격 피크 검출 시 무단 삭제함.",
        risk_implication: "해당 공장으로부터 원료(API)를 수입하여 국내에서 완제의약품을 제조하는 제약사는 식약처 불시 점검 및 의약품 회수 명령 대상이 될 수 있으므로 즉시 수입선 긴급 감사(Vendor Audit) 필요."
      }
    ],
    raw_text: `FDA WARNING LETTER: Orient Active Pharma Ingredients Corp.
During our inspection of your API manufacturing facility, our investigators noted that your laboratory records failed to include complete data derived from all tests conducted to ensure compliance with established specifications (21 CFR 211.194(a)). Specifically:
1. QC analysts routinely conducted unofficial "trial" HPLC injections prior to recorded sequence runs. When out-of-specification (OOS) impurity peaks were observed in trial injections, chromatograms were deleted from local instrument hard drives without documented justification.
2. System audit trails on six HPLC workstations were permanently disabled since August 2022, permitting unauthorized deletion and file overwriting by analysts possessing administrative privileges.`
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    doc_number: "MFDS-2024-GMP088",
    source: "MFDS_ACTION",
    source_name: "한국 식약처 행정처분",
    company_name: "대동제약 충북오송공장 (가칭)",
    country: "South Korea",
    facility_location: "충청북도 청주시 오송읍",
    issue_date: "2024-07-22",
    inspection_dates: "Jun 10 - Jun 14, 2024",
    fei_number: "KR-MFDS-201844",
    title_kr: "식약처 정제 타정 공정 임의 제조 및 제조기록서 거짓 작성 행정처분",
    summary_kr: "국내 완제 제약사 제조소 점검 결과 타정 공정에서 허가 규격을 벗어난 파라미터로 운전하고도 제조기록서에 정상 수치로 거짓 기재하였으며, 불합격된 과립을 일탈 승인 없이 재가공 혼합 투입하여 정제·캡슐제 3개월 제조업무정지 처분을 받았습니다.",
    severity_level: "CRITICAL",
    process_types: ["고형제(Oral Solid)", "제조공정(Manufacturing)", "일탈관리(Deviation)", "KGMP"],
    violation_codes_fda: ["21 CFR 211.188", "21 CFR 211.115"],
    violation_codes_kgmp: [
      "약사법 제38조(의약품등의 제조관리의무)",
      "의약품 제조 및 품질관리기준 제4조(제조공정관리)",
      "제47조(기록서작성)"
    ],
    violation_codes_ema: ["EU GMP Part I Chapter 5 (Production)"],
    root_cause_analysis: "생산 수율(Yield) 압박으로 인한 현장 작업자의 임의 재작업 및 제조기록서 사후 작성 관행. QA 현장 감독(In-process QA) 체계 결여.",
    capa_checklist: [
      {
        id: "CAPA-07",
        task: "타정기 PLC 설비 운전 파라미터(압력, 두께) 전자식 로깅 및 임의 조작 방지 인터록(Interlock) 설치",
        department: "생산팀 / 시설엔지니어링",
        urgency: "즉시조치(14일)",
        guideline_ref: "KGMP 제4조"
      },
      {
        id: "CAPA-08",
        task: "재작업(Rework) 및 재가공(Reprocessing) 발생 시 반드시 QA 승인 및 변경관리(Change Control) 연동 SOP 개정",
        department: "QA 품질보증팀",
        urgency: "7일 이내",
        guideline_ref: "의약품 안전성 규칙 별표 1"
      }
    ],
    key_citations: [
      {
        section: "행정처분 사유 - 약사법 제38조",
        english_quote: "Failure to manufacture products according to approved master production records and falsification of batch manufacturing records regarding tableting compression forces.",
        korean_interpretation: "승인된 기준서에 따라 제조하지 아니하고 타정 공정 제조기록서를 거짓으로 작성하여 약사법 위반.",
        risk_implication: "식약처의 의약품 GMP 적합판정 취소(원스트라이크 아웃제) 대상이 될 수 있어 기업 전체 공장 셧다운 및 신약 허가 보류의 극단적 경영 위기 초래."
      }
    ],
    raw_text: `식품의약품안전처 의약품 GMP 특별기획점검 결과 공고
처분상대자: 대동제약 오송공장
처분내용: 정제·캡슐제 제조업무정지 3개월 (2024.08.01 ~ 2024.10.31)
위반내용: 1. 승인된 제조지시서와 다르게 타정 압력을 임의 변경 가동하고 정상 수치로 거짓 기재. 2. 공정 불합격 과립분을 QA 부서 승인 없이 차기 배치에 임의 재투입 제조.`
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    doc_number: "EMA-NCR-2024-019",
    source: "EMA_EUDRA",
    source_name: "유럽 EMA EudraGMDP",
    company_name: "Bavaria Sterile Solutions GmbH",
    country: "Germany",
    facility_location: "Munich, Bavaria",
    issue_date: "2024-06-18",
    inspection_dates: "May 06 - May 10, 2024",
    fei_number: "DE-BY-001948",
    title_kr: "독일 무균수탁소 2022 개정 EU GMP Annex 1 오염관리전략(CCS) 및 기류 스모크스터디 실패",
    summary_kr: "2022년 전면 개정된 유럽 무균의약품 가이드라인(Annex 1)에 따른 종합 오염관리전략(CCS) 수립이 미흡하고, Grade A 무균 타전 구역에서 스모크 스터디 상 기류 와류가 노출된 바이알 표면으로 직접 유입되어 GMP 부적합 처분을 받았습니다.",
    severity_level: "MAJOR",
    process_types: ["무균충전(Aseptic)", "환경모니터링(EM)", "공조설비(HVAC)", "유럽EMA"],
    violation_codes_fda: ["21 CFR 211.42(c)(10)"],
    violation_codes_kgmp: ["무균의약품 제조소 관리기준 별표 1 제4호(작업실 및 공조)"],
    violation_codes_ema: ["EU GMP Annex 1 Section 2.3 (CCS)", "EU GMP Annex 1 Section 4.3 (Airflow)"],
    root_cause_analysis: "오래된 RABS 설비 구조로 인한 Grade A 기류 패턴 저해. Annex 1 개정 대응을 위한 현장 공조 엔지니어링 검토 지연.",
    capa_checklist: [
      {
        id: "CAPA-10",
        task: "Grade A 충전존 및 캡핑기 구역 동적(Dynamic) 기류 스모크 스터디 재실시 및 고화질 비디오 아카이빙",
        department: "엔지니어링 / Validation팀",
        urgency: "즉시조치(21일)",
        guideline_ref: "Annex 1 Section 4.3"
      },

  {
    "id": "mfds-MFDS-2024-GMP01",
    "doc_number": "MFDS-2024-GMP01",
    "source": "MFDS_ACTION",
    "source_name": "한국 식약처 행정처분",
    "company_name": "한국유니온제약 (가칭 원주공장)",
    "facility_location": "강원도 원주시 문막읍",
    "country": "South Korea",
    "issue_date": "2024-05-14",
    "title_kr": "식약처 [한국유니온제약 (가칭 원주공장)] 세포타심나트륨주사 (무균분말주사제) 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토",
    "summary_kr": "한국유니온제약 (가칭 원주공장) (강원도 원주시 문막읍) 제조소 실사 결과, 무균분말 충전 공정 중 멸균 파라미터(온도, 압력)가 승인된 제조지시서 기준 범위를 이탈하였음에도 일탈(Deviation) 처리 없이 상용 배치 출하. 제조기록서 사후 허위 작성. 사유로 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토 처분이 공고되었습니다.",
    "severity_level": "CRITICAL",
    "process_types": [
      "무균충전(Aseptic)",
      "환경모니터링(EM)",
      "KGMP"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)",
      "21 CFR 211.188"
    ],
    "violation_codes_kgmp": [
      "약사법 제38조(의약품등의 제조관리의무)",
      "의약품 제조 및 품질관리기준 제4조(제조위생관리)"
    ],
    "root_cause_analysis": "멸균기(Autoclave) 센서 노후화 및 생산 납기 압박으로 인한 현장 작업자의 자의적 공정 진행 및 QA 서명 누락.",
    "capa_checklist": [
      {
        "id": "MFDS-CAPA-01",
        "task": "멸균 설비 온도 센서 3중화 및 PLC 데이터 자동 잠금 인터록 설치",
        "department": "엔지니어링 / 공무팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "KGMP 별표 1"
      },
      {
        "id": "MFDS-CAPA-02",
        "task": "최근 6개월 출하 무균제제 전 배치 멸균 차트 재검증 및 무균시험 재확인",
        "department": "QA 품질보증팀",
        "urgency": "14일 이내",
        "guideline_ref": "약사법 제38조"
      }
    ],
    "raw_text": "[식품의약품안전처 의약품 행정처분 공고]\n문서번호: MFDS-2024-GMP01\n처분상대자: 한국유니온제약 (가칭 원주공장)\n소재지: 강원도 원주시 문막읍\n발행일자: 2024-05-14\n해당품목: 세포타심나트륨주사 (무균분말주사제)\n처분내용: 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토\n위반사유: 무균분말 충전 공정 중 멸균 파라미터(온도, 압력)가 승인된 제조지시서 기준 범위를 이탈하였음에도 일탈(Deviation) 처리 없이 상용 배치 출하. 제조기록서 사후 허위 작성.\n",
    "key_citations": [
      {
        "section": "식약처 행정처분 공고",
        "english_quote": "Administrative sanction issued by Korean MFDS against 한국유니온제약 (가칭 원주공장) for CGMP non-compliance.",
        "korean_interpretation": "한국유니온제약 (가칭 원주공장) (강원도 원주시 문막읍) 제조소 실사 결과, 무균분말 충전 공정 중 멸균 파라미터(온도, 압력)가 승인된 제조지시서 기준 범위를 이탈하였음에도 일탈(Deviation) 처리 없이 상용 배치 출하. 제조기록서 사후 허위 작성. 사유로 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토 처분이 공고되었습니다.",
        "risk_implication": "국내 전 제조 라인 불시 실사 및 의약품 회수 폐기 명령"
      }
    ]
  },
  {
    "id": "mfds-MFDS-2024-GMP02",
    "doc_number": "MFDS-2024-GMP02",
    "source": "MFDS_ACTION",
    "source_name": "한국 식약처 행정처분",
    "company_name": "바이넥스 오송공장",
    "facility_location": "충청북도 청주시 오송읍",
    "country": "South Korea",
    "issue_date": "2024-03-20",
    "title_kr": "식약처 [바이넥스 오송공장] 닥스펜정 (고형제 타정) 해당 제형 제조업무정지 1개월 15일",
    "summary_kr": "바이넥스 오송공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 허가받은 주성분 및 부형제 배합 비율과 다르게 임의 제조하고, 주성분 투입량을 줄여 원가 절감 시도. 제조기록서에는 허가 규격대로 정량 투입된 것처럼 거짓 기재. 사유로 해당 제형 제조업무정지 1개월 15일 처분이 공고되었습니다.",
    "severity_level": "MAJOR",
    "process_types": [
      "고형제(Oral Solid)",
      "제조공정(Manufacturing)",
      "데이터무결성(DI)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.186",
      "21 CFR 211.188"
    ],
    "violation_codes_kgmp": [
      "약사법 제37조",
      "약사법 제38조(제조관리의무)",
      "의약품 등의 안전에 관한 규칙 제40조"
    ],
    "root_cause_analysis": "원가 절감을 위한 경영진 및 생산 부서의 고의적 임의 제조 관행 및 독립된 QA 견제 시스템 부재.",
    "capa_checklist": [
      {
        "id": "MFDS-CAPA-03",
        "task": "원료 칭량실 MES 자동 칭량-투입 전자연동 시스템 구축 (수동 투입 차단)",
        "department": "생산팀 / IT팀",
        "urgency": "30일 이내",
        "guideline_ref": "데이터 완전성 평가지침"
      },
      {
        "id": "MFDS-CAPA-04",
        "task": "QA 부서장 품질 최종 승인권 독립 보장 및 익명 준법감시 핫라인 개설",
        "department": "대표이사 / 준법지원실",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "KGMP 제3조"
      }
    ],
    "raw_text": "[식품의약품안전처 의약품 행정처분 공고]\n문서번호: MFDS-2024-GMP02\n처분상대자: 바이넥스 오송공장\n소재지: 충청북도 청주시 오송읍\n발행일자: 2024-03-20\n해당품목: 닥스펜정 (고형제 타정)\n처분내용: 해당 제형 제조업무정지 1개월 15일\n위반사유: 허가받은 주성분 및 부형제 배합 비율과 다르게 임의 제조하고, 주성분 투입량을 줄여 원가 절감 시도. 제조기록서에는 허가 규격대로 정량 투입된 것처럼 거짓 기재.\n",
    "key_citations": [
      {
        "section": "식약처 행정처분 공고",
        "english_quote": "Administrative sanction issued by Korean MFDS against 바이넥스 오송공장 for CGMP non-compliance.",
        "korean_interpretation": "바이넥스 오송공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 허가받은 주성분 및 부형제 배합 비율과 다르게 임의 제조하고, 주성분 투입량을 줄여 원가 절감 시도. 제조기록서에는 허가 규격대로 정량 투입된 것처럼 거짓 기재. 사유로 해당 제형 제조업무정지 1개월 15일 처분이 공고되었습니다.",
        "risk_implication": "국내 전 제조 라인 불시 실사 및 의약품 회수 폐기 명령"
      }
    ]
  },
  {
    "id": "mfds-MFDS-2024-GMP03",
    "doc_number": "MFDS-2024-GMP03",
    "source": "MFDS_ACTION",
    "source_name": "한국 식약처 행정처분",
    "company_name": "휴텍스제약 향남공장",
    "facility_location": "경기도 화성시 향남읍 제약단지",
    "country": "South Korea",
    "issue_date": "2024-06-11",
    "title_kr": "식약처 [휴텍스제약 향남공장] 그루리스정 및 6개 다소비 완제의약품 의약품 GMP 적합판정 취소(원스트라이크 아웃)",
    "summary_kr": "휴텍스제약 향남공장 (경기도 화성시 향남읍 제약단지) 제조소 실사 결과, 정제 타정 및 코팅 공정에서 발생한 부적합 불용성 과립 잔여물을 정식 일탈 승인 없이 다음 제조 배치에 임의 재투입(Re-work)하여 혼합 제조. 사유로 의약품 GMP 적합판정 취소(원스트라이크 아웃) 처분이 공고되었습니다.",
    "severity_level": "CRITICAL",
    "process_types": [
      "고형제(Oral Solid)",
      "일탈관리(Deviation)",
      "KGMP"
    ],
    "violation_codes_fda": [
      "21 CFR 211.115",
      "21 CFR 211.192"
    ],
    "violation_codes_kgmp": [
      "약사법 제38조의2(GMP 적합판정 등)",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "root_cause_analysis": "수율 증대를 위한 부적합 분말 재활용 관행 및 현장 In-process QA 검사 체계 완전 결여.",
    "capa_checklist": [
      {
        "id": "MFDS-CAPA-05",
        "task": "폐기 대상 불합격 과립 전량 폐기물 보관소 즉시 이송 및 폐기 처리 영상 녹화",
        "department": "생산관리팀 / 폐기물관리",
        "urgency": "즉시조치(3일)",
        "guideline_ref": "KGMP 제4조"
      },
      {
        "id": "MFDS-CAPA-06",
        "task": "변경관리(Change Control) 위원회 가동 및 전 공정 일탈 SOP 재교육",
        "department": "QA 품질보증팀",
        "urgency": "14일 이내",
        "guideline_ref": "의약품 안전성 규칙 별표 1"
      }
    ],
    "raw_text": "[식품의약품안전처 의약품 행정처분 공고]\n문서번호: MFDS-2024-GMP03\n처분상대자: 휴텍스제약 향남공장\n소재지: 경기도 화성시 향남읍 제약단지\n발행일자: 2024-06-11\n해당품목: 그루리스정 및 6개 다소비 완제의약품\n처분내용: 의약품 GMP 적합판정 취소(원스트라이크 아웃)\n위반사유: 정제 타정 및 코팅 공정에서 발생한 부적합 불용성 과립 잔여물을 정식 일탈 승인 없이 다음 제조 배치에 임의 재투입(Re-work)하여 혼합 제조.\n",
    "key_citations": [
      {
        "section": "식약처 행정처분 공고",
        "english_quote": "Administrative sanction issued by Korean MFDS against 휴텍스제약 향남공장 for CGMP non-compliance.",
        "korean_interpretation": "휴텍스제약 향남공장 (경기도 화성시 향남읍 제약단지) 제조소 실사 결과, 정제 타정 및 코팅 공정에서 발생한 부적합 불용성 과립 잔여물을 정식 일탈 승인 없이 다음 제조 배치에 임의 재투입(Re-work)하여 혼합 제조. 사유로 의약품 GMP 적합판정 취소(원스트라이크 아웃) 처분이 공고되었습니다.",
        "risk_implication": "국내 전 제조 라인 불시 실사 및 의약품 회수 폐기 명령"
      }
    ]
  },
  {
    "id": "mfds-MFDS-2024-GMP04",
    "doc_number": "MFDS-2024-GMP04",
    "source": "MFDS_ACTION",
    "source_name": "한국 식약처 행정처분",
    "company_name": "메디톡스 오송 2공장",
    "facility_location": "충청북도 청주시 오송읍",
    "country": "South Korea",
    "issue_date": "2024-04-02",
    "title_kr": "식약처 [메디톡스 오송 2공장] 보툴리눔 독소 제제 (바이오의약품) 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행",
    "summary_kr": "메디톡스 오송 2공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 원액 역가(Potency) 및 안정성 시험 결과가 기준에 미달하였음에도, 역가 시험 데이터를 허위로 조작하여 국가출하승인을 신청 및 승인받음. 사유로 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행 처분이 공고되었습니다.",
    "severity_level": "CRITICAL",
    "process_types": [
      "데이터무결성(DI)",
      "시험실(QC)",
      "생물학적제제(Bio)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.194",
      "21 CFR 211.165"
    ],
    "violation_codes_kgmp": [
      "약사법 제53조(국가출하승인의약품)",
      "데이터 완전성 평가지침 제3조"
    ],
    "root_cause_analysis": "배치 역가 불안정 원인 규명 실패 및 출시 일정 압박으로 인한 시험 데이터 조작.",
    "capa_checklist": [
      {
        "id": "MFDS-CAPA-07",
        "task": "역가 분석 장비 및 LIMS(시험정보관리시스템) 전 계정 감사추적 일일 점검 의무화",
        "department": "QC 시험실 / IT팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "ALCOA+ 지침"
      }
    ],
    "raw_text": "[식품의약품안전처 의약품 행정처분 공고]\n문서번호: MFDS-2024-GMP04\n처분상대자: 메디톡스 오송 2공장\n소재지: 충청북도 청주시 오송읍\n발행일자: 2024-04-02\n해당품목: 보툴리눔 독소 제제 (바이오의약품)\n처분내용: 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행\n위반사유: 원액 역가(Potency) 및 안정성 시험 결과가 기준에 미달하였음에도, 역가 시험 데이터를 허위로 조작하여 국가출하승인을 신청 및 승인받음.\n",
    "key_citations": [
      {
        "section": "식약처 행정처분 공고",
        "english_quote": "Administrative sanction issued by Korean MFDS against 메디톡스 오송 2공장 for CGMP non-compliance.",
        "korean_interpretation": "메디톡스 오송 2공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 원액 역가(Potency) 및 안정성 시험 결과가 기준에 미달하였음에도, 역가 시험 데이터를 허위로 조작하여 국가출하승인을 신청 및 승인받음. 사유로 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행 처분이 공고되었습니다.",
        "risk_implication": "국내 전 제조 라인 불시 실사 및 의약품 회수 폐기 명령"
      }
    ]
  },
  {
    "id": "hist-0005",
    "doc_number": "D-0845-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0845-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H005",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0006",
    "doc_number": "D-0846-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0846-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H006",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0007",
    "doc_number": "D-0844-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0844-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H007",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0008",
    "doc_number": "D-0866-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "VITRUVIAS THERAPEUTICS INC",
    "facility_location": "Auburn, AL",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[VITRUVIAS THERAPEUTICS INC] Superpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "VITRUVIAS THERAPEUTICS INC (Auburn, United States) 제조소에서 Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contain 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Superpotent Drug",
    "severity_level": "CRITICAL",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0866-2026\nRecalling Firm: VITRUVIAS THERAPEUTICS INC\nLocation: Auburn, United States\nReport Date: 2026-09-23\nProduct: Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contains: levothyroxine (T4) 19 mcg, liothyronine (T3) 4.5 mcg, 100 Tablets, Rx only, Distributed by: Vitruvias Therapeutics, Auburn, AL 36830, Product of USA, NDC 69680-166-00.\nReason: Superpotent Drug\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H008",
        "task": "Superpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Superpotent Drug",
        "korean_interpretation": "VITRUVIAS THERAPEUTICS INC (Auburn, United States) 제조소에서 Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contain 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Superpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0009",
    "doc_number": "D-0843-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0843-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0654-16\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H009",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0010",
    "doc_number": "D-0842-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0842-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0653-04\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H010",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0011",
    "doc_number": "D-0841-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Safecor Health, LLC",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Safecor Health, LLC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0841-2026\nRecalling Firm: Safecor Health, LLC\nLocation: Woburn, United States\nReport Date: 2026-09-23\nProduct: Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 mL, Oral Elixir, PAI, Alcohol 14% by volume, For Oral Use Only, Rx Only, Pkg by: Safecor Health, Woburn, MA 01801.  NDC:  00121-0654-16\nReason: Failed Stability Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H011",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0012",
    "doc_number": "D-0848-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMA /TARO",
    "facility_location": "Hawthorne, NY",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[SUN PHARMA /TARO] Failed Content Uniformity Specifications. Out of Specif... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMA /TARO (Hawthorne, United States) 제조소에서 Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0848-2026\nRecalling Firm: SUN PHARMA /TARO\nLocation: Hawthorne, United States\nReport Date: 2026-09-23\nProduct: Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx only, Mfd. by: Taro Pharmaceuticals Inc., Brampton, Ontario, L6T1C, Canada, Dist By: Taro Pharmaceuticals U.S.A. Inc. Hawthorne NY 70532 NDC: 51672-3008-5\nReason: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H012",
        "task": "Failed Content Uniformity Specifications. Out of S에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (2",
        "korean_interpretation": "SUN PHARMA /TARO (Hawthorne, United States) 제조소에서 Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0013",
    "doc_number": "D-0852-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Inventia Healthcare Limited",
    "facility_location": "Kalyan, N/A",
    "country": "India",
    "issue_date": "2026-09-23",
    "title_kr": "[Inventia Healthcare Limited] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0852-2026\nRecalling Firm: Inventia Healthcare Limited\nLocation: Kalyan, India\nReport Date: 2026-09-23\nProduct: Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle, Rx only, Manufactured by: Inventia Healthcare Limited.   NDC:  64980-599-01\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H013",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0014",
    "doc_number": "N/A",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Failed Stability Specifications... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: N/A\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-09-23\nProduct: Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761; Dist. by: Taro Pharmaceuticals U.S.A., Inc., Hawthorne, NY 10532.  NDC: 51672-1289-1\nReason: Failed Stability Specifications\nClassification: Not Yet Classified",
    "capa_checklist": [
      {
        "id": "CAPA-H014",
        "task": "Failed Stability Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0015",
    "doc_number": "D-0853-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Pfizer",
    "facility_location": "Manhattan, NY",
    "country": "United States",
    "issue_date": "2026-09-23",
    "title_kr": "[Pfizer] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Pfizer (Manhattan, United States) 제조소에서 Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0853-2026\nRecalling Firm: Pfizer\nLocation: Manhattan, United States\nReport Date: 2026-09-23\nProduct: Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single-dose, 25 vials per tray, Rx only, Distributed by Hospira, Inc., Lake Forest, IL 60045 USA, Vial NDC 0409-5820-11, Carton NDC 0409-5820-01.\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H015",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Pfizer (Manhattan, United States) 제조소에서 Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0016",
    "doc_number": "D-0864-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "OurPharma LLC",
    "facility_location": "Fayetteville, AR",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[OurPharma LLC] Labeling: Not Elsewhere Classified: Complaint received ... 실사 및 리콜 조치",
    "summary_kr": "OurPharma LLC (Fayetteville, United States) 제조소에서 fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0864-2026\nRecalling Firm: OurPharma LLC\nLocation: Fayetteville, United States\nReport Date: 2026-09-16\nProduct: fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solution in 100 mL, 0.9% NaCl Bag, OurPharma LLC, 2512 S. City Lake, Fayetteville, AR, NDC 73013-1013-01.\nReason: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H016",
        "task": "Labeling: Not Elsewhere Classified: Complaint rece에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/20",
        "korean_interpretation": "OurPharma LLC (Fayetteville, United States) 제조소에서 fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0017",
    "doc_number": "D-0835-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ImprimisRx NJ LLC",
    "facility_location": "Ledgewood, NJ",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[ImprimisRx NJ LLC] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ImprimisRx NJ LLC (Ledgewood, United States) 제조소에서 Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Sol 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0835-2026\nRecalling Firm: ImprimisRx NJ LLC\nLocation: Ledgewood, United States\nReport Date: 2026-09-16\nProduct: Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Solution, 10 mL per dropper bottle, For Office Use Only, Imprimis NJOF, LLC, 1705 Route 46 West, Unit 6B, Ledgewood, NJ 07852, NDC 71384-732-10\nReason: Subpotent Drug\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H017",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ImprimisRx NJ LLC (Ledgewood, United States) 제조소에서 Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Sol 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0018",
    "doc_number": "D-0865-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter and Lack of Assurance of... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Mult 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0865-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-09-16\nProduct: Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Multiple-Dose Vial, Rx Only, For Intravenous Infusion, intramuscular and Subcutaneous Use, AMERICAN REGENT INC., SHIRLEY, NY 11967. NDC 0517-3030-01\nReason: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H018",
        "task": "Presence of Particulate Matter and Lack of Assuran에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Mult 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0019",
    "doc_number": "D-0836-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ajanta Pharma USA Inc",
    "facility_location": "Bridgewater, NJ",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[Ajanta Pharma USA Inc] Failed impurities/degradation specifications: (OOS) for... 실사 및 리콜 조치",
    "summary_kr": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bott 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0836-2026\nRecalling Firm: Ajanta Pharma USA Inc\nLocation: Bridgewater, United States\nReport Date: 2026-09-16\nProduct: Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bottles, Rx Only,  Marketed by: Ajanta Pharma USA Inc., Bridgewater, NJ 08807, Made in India, NDC 27241-255-01.\nReason: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H019",
        "task": "Failed impurities/degradation specifications: (OOS에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term st",
        "korean_interpretation": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bott 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0020",
    "doc_number": "D-0850-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[Baxter Healthcare Corporation] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0850-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-16\nProduct: Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter Healthcare Corporation Deerfield, IL, 60016, Made in USA, NDC 00338-0719-06\nReason: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H020",
        "task": "Presence of Particulate Matter: particulate matter에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0021",
    "doc_number": "D-0869-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "B BRAUN MEDICAL INC",
    "facility_location": "Allentown, PA",
    "country": "United States",
    "issue_date": "2026-09-16",
    "title_kr": "[B BRAUN MEDICAL INC] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치",
    "summary_kr": "B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0869-2026\nRecalling Firm: B BRAUN MEDICAL INC\nLocation: Allentown, United States\nReport Date: 2026-09-16\nProduct: 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in 150 mL PAB Container, Sterile, Rx only, B. Braun Medical Inc., Bethlehem, PA 18018 USA, NDC 0264-1800-32.\nReason: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H021",
        "task": "Presence of Particulate Matter: particulate matter에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene",
        "korean_interpretation": "B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0022",
    "doc_number": "D-0815-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0815-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL (12 mg/mL) in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-3814-50.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H022",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0023",
    "doc_number": "D-0811-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0811-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 100 mL (0.2 units/mL), 100mL Single-Dose Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60012 USA, NDC 0338-9640-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H023",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0024",
    "doc_number": "D-0821-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0821-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per 100 mL (10 mg/mL), 1,000 mg total, in 1000 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0718-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H024",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0025",
    "doc_number": "D-0851-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "OPTIMAL BALANCE PHARMACY",
    "facility_location": "Houston, TX",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[OPTIMAL BALANCE PHARMACY] Microbial Contamination of Sterile Products - out of sp... 실사 및 리콜 조치",
    "summary_kr": "OPTIMAL BALANCE PHARMACY (Houston, United States) 제조소에서 Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "시험실(QC)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0851-2026\nRecalling Firm: OPTIMAL BALANCE PHARMACY\nLocation: Houston, United States\nReport Date: 2026-09-09\nProduct: Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vial contains: Glutathione, Ascorbic Acid, Benzyl Alcohol & sterile water for injection, For IM or IV Injection Use Only, RX only,  Optimal Balance Pharmacy, 2204 Cypress Creek Pkwy Suite F, Houston, TX 77090\nReason: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H025",
        "task": "Microbial Contamination of Sterile Products - out 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "korean_interpretation": "OPTIMAL BALANCE PHARMACY (Houston, United States) 제조소에서 Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0026",
    "doc_number": "D-0813-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0813-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chloride Injection, 40 mg in 200 mL (0.2 mg/mL) in GALAXY Single-Dose Container, Manufactured and Marketed by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 43066-016-10.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H026",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0027",
    "doc_number": "D-0833-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Supernus Pharmaceuticals, Inc.",
    "facility_location": "Rockville, MD",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Supernus Pharmaceuticals, Inc.] Failed dissolution specifications.... 실사 및 리콜 조치",
    "summary_kr": "Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, (topiramate) extended-release capsules, 50 mg,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed dissolution specifications.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0833-2026\nRecalling Firm: Supernus Pharmaceuticals, Inc.\nLocation: Rockville, United States\nReport Date: 2026-09-09\nProduct: Trokendi XR, (topiramate) extended-release capsules, 50 mg, 30 Capsules, Rx only, Manufactured by: Catalent Pharma Solutions, Winchester, KY 40391 USA, Manufactured for: Supernus Pharmaceuticals, Inc., Rockville, MD 20850 USA, NDC 17772-102-30.\nReason: Failed dissolution specifications.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H027",
        "task": "Failed dissolution specifications.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed dissolution specifications.",
        "korean_interpretation": "Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, (topiramate) extended-release capsules, 50 mg,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed dissolution specifications.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0028",
    "doc_number": "D-0840-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Health Packaging",
    "facility_location": "Columbus, OH",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[American Health Packaging] Labeling: Label Mix-up... 실사 및 리콜 조치",
    "summary_kr": "American Health Packaging (Columbus, United States) 제조소에서 Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0840-2026\nRecalling Firm: American Health Packaging\nLocation: Columbus, United States\nReport Date: 2026-09-09\nProduct: Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets (3x10), Rx only, Distributed by: American Health Packaging, Columbus, Ohio 43217, Carton NDC#: 60687-481-21, (Individual Dose NDC: 60687-481-11).\nReason: Labeling: Label Mix-up\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H028",
        "task": "Labeling: Label Mix-up에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Label Mix-up",
        "korean_interpretation": "American Health Packaging (Columbus, United States) 제조소에서 Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0029",
    "doc_number": "D-0834-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Teva Pharmaceuticals USA, Inc",
    "facility_location": "Parsippany, NJ",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Teva Pharmaceuticals USA, Inc] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치",
    "summary_kr": "Teva Pharmaceuticals USA, Inc (Parsippany, United States) 제조소에서 traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0834-2026\nRecalling Firm: Teva Pharmaceuticals USA, Inc\nLocation: Parsippany, United States\nReport Date: 2026-09-09\nProduct: traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Tablets, Manufactured in Croatia By: Pliva Hrvatska d.o.o, Zagreb, Croatia, Manufactured For: Teva Pharmaceuticals, Parsippany, NJ 07054, NDC 50111-560-01\nReason: Presence of Foreign Tablets/Capsules\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H029",
        "task": "Presence of Foreign Tablets/Capsules에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Tablets/Capsules",
        "korean_interpretation": "Teva Pharmaceuticals USA, Inc (Parsippany, United States) 제조소에서 traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0030",
    "doc_number": "D-0849-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] Presence of particulate matter: Particulates identified... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: Particulates identified as fiberglass",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0849-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic Containers, with 24 units per case. Baxter Healthcare Corporation, Deerfield, IL, 60015, USA, Made in USA, NDC 0338-0049-03\nReason: Presence of particulate matter: Particulates identified as fiberglass\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H030",
        "task": "Presence of particulate matter: Particulates ident에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of particulate matter: Particulates identified as fiberglass",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: Particulates identified as fiberglass",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0031",
    "doc_number": "D-0824-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Allies Group Inc.",
    "facility_location": "Wilmington, DE",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치",
    "summary_kr": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0824-2026\nRecalling Firm: Allies Group Inc.\nLocation: Wilmington, United States\nReport Date: 2026-09-09\nProduct: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 3ml - 0.1 fl. oz, Sachet: Single use only, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914.UPC 8 885014 073293\nReason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H031",
        "task": "Subpotent Product: Firm Testing indicated the affe에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0032",
    "doc_number": "D-0826-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Allies Group Inc.",
    "facility_location": "Wilmington, DE",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치",
    "summary_kr": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0826-2026\nRecalling Firm: Allies Group Inc.\nLocation: Wilmington, United States\nReport Date: 2026-09-09\nProduct: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 90ml - 3 fl. oz. Tube, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC 8 885014 075853\nReason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H032",
        "task": "Subpotent Product: Firm Testing indicated the affe에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0033",
    "doc_number": "D-0812-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0812-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg/100 mL (0.8 mg/mL) Single-Dose Infusion Bag in 100 mL GALAXY Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60015, USA, NDC 0338-9648-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H033",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0034",
    "doc_number": "D-0828-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lexia LLC",
    "facility_location": "Franklin, TN",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Lexia LLC] CGMP Deviations: Potential contamination of raw materia... 실사 및 리콜 조치",
    "summary_kr": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, (Histamine Dihydrochloride 0.025% 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0828-2026\nRecalling Firm: Lexia LLC\nLocation: Franklin, United States\nReport Date: 2026-09-09\nProduct: Broadway Joe's Pain Cream, (Histamine Dihydrochloride 0.025%), 1500mg CBD Isolate, 1000mg Hempseed oil,  2 oz-jar, Produced for Broadway Joe's, Franklin, TN, 37067, NDC 83088-8120-5, UPC 8 50041 64003 7\nReason: CGMP Deviations: Potential contamination of raw material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H034",
        "task": "CGMP Deviations: Potential contamination of raw ma에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Potential contamination of raw material",
        "korean_interpretation": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, (Histamine Dihydrochloride 0.025% 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0035",
    "doc_number": "D-0807-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0807-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 mL (10 mg/mL), 500 mg total, in 50 mL Single Dose Container (24 bags/carton), Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0714-24.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H035",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0036",
    "doc_number": "D-0814-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GAL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0814-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GALAXY Single-Dose Container, sterile, Nonpyrogenic, iso-osmotic solution in Dextrose, Baxter Healthcare Corporation, Deerfield, IL 60015, Made in the USA, NDC 43066-360-20.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H036",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GAL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0037",
    "doc_number": "D-0808-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0808-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL (12 mg/mL) in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Baxter healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-3612-50.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H037",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0038",
    "doc_number": "D-0823-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Allies Group Inc.",
    "facility_location": "Wilmington, DE",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치",
    "summary_kr": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0823-2026\nRecalling Firm: Allies Group Inc.\nLocation: Wilmington, United States\nReport Date: 2026-09-09\nProduct: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 50ML - 1.7 fl. oz Tube, Made in U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC 8 885014 073224\nReason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H038",
        "task": "Subpotent Product: Firm Testing indicated the affe에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0039",
    "doc_number": "D-0810-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Inject 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0810-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Injection, 400 mcg per 100 mL (4 mcg/mL) in Galaxy 100 mL Single Dose Container, Rx only, Baxter Healthcare Corporation, Deerfield, IL 60015, USA, NDC 0338-9557-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H039",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Inject 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0040",
    "doc_number": "D-0825-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Allies Group Inc.",
    "facility_location": "Wilmington, DE",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Allies Group Inc.] Subpotent Product: Firm Testing indicated the affected ... 실사 및 리콜 조치",
    "summary_kr": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0825-2026\nRecalling Firm: Allies Group Inc.\nLocation: Wilmington, United States\nReport Date: 2026-09-09\nProduct: THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homosalate 7%, Octocrylene 10%, Octisalate 5%), 20ml - 0.7 fl. oz. Tube, Made in the U.S.A, Distributed by Allies Group Pte Ltd, Singapore 068914. UPC  8 885014 074733\nReason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H040",
        "task": "Subpotent Product: Firm Testing indicated the affe에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0041",
    "doc_number": "D-0817-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0817-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 mg/mL), in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Manufactured by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-4114-50.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H041",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0042",
    "doc_number": "D-0829-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lexia LLC",
    "facility_location": "Franklin, TN",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Lexia LLC] CGMP Deviations: Potential contamination of raw materia... 실사 및 리콜 조치",
    "summary_kr": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, 3000 gm CBD, (Histamine Dihydroch 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0829-2026\nRecalling Firm: Lexia LLC\nLocation: Franklin, United States\nReport Date: 2026-09-09\nProduct: Broadway Joe's Pain Cream, 3000 gm CBD, (Histamine Dihydrochloride 0.025%) (CDB Isolate 3000mg, HempSeed Oil 2000mg),4 oz-jar, Produced for Broadway Joe's, Franklin, TN, 37067, NDC 83088-8120-6; UPC 8 50041 64004 4\nReason: CGMP Deviations: Potential contamination of raw material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H042",
        "task": "CGMP Deviations: Potential contamination of raw ma에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Potential contamination of raw material",
        "korean_interpretation": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, 3000 gm CBD, (Histamine Dihydroch 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0043",
    "doc_number": "D-0806-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0806-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection, 100 units/100 mL (1 unit/mL), Rx only, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-0126-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H043",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0044",
    "doc_number": "D-0822-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bionpharma Inc.",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Bionpharma Inc.] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치",
    "summary_kr": "Bionpharma Inc. (Princeton, United States) 제조소에서 Doxylamine Succinate and Pyridoxine HCl Delayed-Release tabl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0822-2026\nRecalling Firm: Bionpharma Inc.\nLocation: Princeton, United States\nReport Date: 2026-09-09\nProduct: Doxylamine Succinate and Pyridoxine HCl Delayed-Release tablets 10 mg/10 mg, 100-count bottle, Rx Only, MADE IN INDIA, Distributed by: Bionpharma Inc., Princeton, NJ 08540 NDC 69452-206-20.\nReason: Presence of Foreign Tablets/Capsules\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H044",
        "task": "Presence of Foreign Tablets/Capsules에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Tablets/Capsules",
        "korean_interpretation": "Bionpharma Inc. (Princeton, United States) 제조소에서 Doxylamine Succinate and Pyridoxine HCl Delayed-Release tabl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0045",
    "doc_number": "D-0809-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0809-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 mL in GALAXY Single Dose Container, Rx Only, Sterile Nonpyrogenic, Baxter International Inc., Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-5197-41.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H045",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0046",
    "doc_number": "D-0820-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0820-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 200 mL (5 mg/mL) in GALAXY Single-Dose Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-3583-01.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H046",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0047",
    "doc_number": "D-0819-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0819-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 100 mL (0.4 units/mL), 100mL Single-Dose Container, Rx only, Sterile, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-9647-12.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H047",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0048",
    "doc_number": "D-0837-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Sage Products, LLC",
    "facility_location": "Cary, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Sage Products, LLC] Cross Contamination with Other Products... 실사 및 리콜 조치",
    "summary_kr": "Sage Products, LLC (Cary, United States) 제조소에서 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0837-2026\nRecalling Firm: Sage Products, LLC\nLocation: Cary, United States\nReport Date: 2026-09-09\nProduct: 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable cloths, Sage Products LLC, 3909 Three Oaks Road, Cary, Illinois 60013.  NDC: 53462-705-26\nReason: Cross Contamination with Other Products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H048",
        "task": "Cross Contamination with Other Products에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Cross Contamination with Other Products",
        "korean_interpretation": "Sage Products, LLC (Cary, United States) 제조소에서 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0049",
    "doc_number": "D-0838-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Chiesi USA, Inc.",
    "facility_location": "Cary, NC",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Chiesi USA, Inc.] Failed Stability Specifications: Out of specification s... 실사 및 리콜 조치",
    "summary_kr": "Chiesi USA, Inc. (Cary, United States) 제조소에서 Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/ 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0838-2026\nRecalling Firm: Chiesi USA, Inc.\nLocation: Cary, United States\nReport Date: 2026-09-09\nProduct: Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/mL), Single-Dose Vial, Rx Only, For Intramuscular Use Only, Mfd. by Chiesi USA, Inc., Cary, NC 27518,  NDC 10122-502-01\nReason: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H049",
        "task": "Failed Stability Specifications: Out of specificat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Stability Specifications: Out of specification stability result for the protein concentration profile.",
        "korean_interpretation": "Chiesi USA, Inc. (Cary, United States) 제조소에서 Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/ 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0050",
    "doc_number": "D-0839-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Mylan Pharmaceuticals Inc",
    "facility_location": "Morgantown, WV",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications; product failed to me... 실사 및 리콜 조치",
    "summary_kr": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0839-2026\nRecalling Firm: Mylan Pharmaceuticals Inc\nLocation: Morgantown, United States\nReport Date: 2026-09-09\nProduct: Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bottle, Manufactured for: Mylan Pharmaceuticals Inc., Morgantown, WV 26505, Made in India, NDC 0378-5186-93.\nReason: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H050",
        "task": "Failed Dissolution Specifications; product failed 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria",
        "korean_interpretation": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0051",
    "doc_number": "D-0818-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0818-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 mg/mL), in GALAXY 50 mL Single Dose Container, Rx only, Sterile Nonpyrogenic, Manufactured by: Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 43066-995-24.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H051",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0052",
    "doc_number": "D-0805-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0805-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 mg/mL), in GALAXY Single-Dose Container, Rx only, Sterile Nonpyrogenic, Iso-osmotic, Baxter Healthcare Corporation, Deerfield, IL, 60015 USA, NDC 0338-3552-48.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H052",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0053",
    "doc_number": "D-0816-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0816-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-09-09\nProduct: Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 mg per 50 mL (12 mg/mL), 50 mL Single-Dose GALAXY Container, Rx only, Sterile Nonpyrogenic, Baxter Healthcare Corporation, Deerfield, IL 60015 USA, NDC 0338-9549-50.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H053",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0054",
    "doc_number": "D-0830-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Mylan Pharmaceuticals Inc",
    "facility_location": "Morgantown, WV",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Carton label: Mycophenolate Mofetil for injection, USP, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "시험실(QC)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0830-2026\nRecalling Firm: Mylan Pharmaceuticals Inc\nLocation: Morgantown, United States\nReport Date: 2026-09-09\nProduct: Carton label: Mycophenolate Mofetil for injection, USP, 500 mg/vial, Sterile, 4 Single Dose Vials, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV 26505, Made in India, NDC 67457-386-81.  Vial Label: Mycophenolate Mofetil for injection, USP, 500 mg/vial, Sterile, Single Dose Vial, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV 26505, Made in India, NDC 67457-386-00.\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H054",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Carton label: Mycophenolate Mofetil for injection, USP, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0055",
    "doc_number": "D-0847-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Golden State Medical Supply Inc.",
    "facility_location": "Camarillo, CA",
    "country": "United States",
    "issue_date": "2026-09-09",
    "title_kr": "[Golden State Medical Supply Inc.] Failed Dissolution Specifications. Notification from th... 실사 및 리콜 조치",
    "summary_kr": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0847-2026\nRecalling Firm: Golden State Medical Supply Inc.\nLocation: Camarillo, United States\nReport Date: 2026-09-09\nProduct: Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, Marketed by: GSMS, Incorporated, Camarillo, CA 93012, USA, NDC: 51407-445-30.\nReason: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H055",
        "task": "Failed Dissolution Specifications. Notification fr에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution",
        "korean_interpretation": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0056",
    "doc_number": "D-0785-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0785-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), packaged in a) 90-count bottles (NDC  16729-457-15) and b) 1000-count bottles (NDC 16729-457-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H056",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0057",
    "doc_number": "D-0831-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Hikma Pharmaceuticals USA INC.",
    "facility_location": "Columbus, OH",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Hikma Pharmaceuticals USA INC.] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Hikma Pharmaceuticals USA INC. (Columbus, United States) 제조소에서 Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (N 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0831-2026\nRecalling Firm: Hikma Pharmaceuticals USA INC.\nLocation: Columbus, United States\nReport Date: 2026-09-02\nProduct: Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (NDC 76282-673-01) and b) 500 Capsules (NDC 76282-673-05) bottles, Rx only, Manufactured for: Exelan Pharmaceuticals, Inc., Boca Raton, FL 33432, Manufactured by: West-Ward Columbus Inc., Columbus, OH  43228.\nReason: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H057",
        "task": "Failed Impurities/Degradation Specifications: OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).",
        "korean_interpretation": "Hikma Pharmaceuticals USA INC. (Columbus, United States) 제조소에서 Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (N 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0058",
    "doc_number": "D-0776-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-co 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0776-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-448-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H058",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-co 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0059",
    "doc_number": "D-0781-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0781-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-453-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H059",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0060",
    "doc_number": "D-0775-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0775-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-447-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H060",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0061",
    "doc_number": "D-0782-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0782-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packaged in a) 90-count bottles (NDC 16729-454-15) b) 1000-count bottles (NDC 16729-454-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H061",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0062",
    "doc_number": "D-0789-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lupin Pharmaceuticals Inc.",
    "facility_location": "Naples, FL",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Lupin Pharmaceuticals Inc.] Failed content uniformity specifications.... 실사 및 리콜 조치",
    "summary_kr": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed content uniformity specifications.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0789-2026\nRecalling Firm: Lupin Pharmaceuticals Inc.\nLocation: Naples, United States\nReport Date: 2026-09-02\nProduct: Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only, Manufactured for: Lupin Pharmaceuticals, Inc., Naples, FL 34108, United States, Manufactured by: Lupin Limited, Pithampur (MP) 454 775, INDIA, NDC 68180-956-04.\nReason: Failed content uniformity specifications.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H062",
        "task": "Failed content uniformity specifications.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed content uniformity specifications.",
        "korean_interpretation": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed content uniformity specifications.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0063",
    "doc_number": "D-0786-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-coun 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0786-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-458-15.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H063",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-coun 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0064",
    "doc_number": "D-0777-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0777-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-449-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H064",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0065",
    "doc_number": "D-0803-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Mallinckrodt Hospital Products Inc.",
    "facility_location": "Bridgewater, NJ",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Mallinckrodt Hospital Products Inc.] Presence of particulate matter: glass and stopper piece... 실사 및 리콜 조치",
    "summary_kr": "Mallinckrodt Hospital Products Inc. (Bridgewater, United States) 제조소에서 Acthar Gel (repository corticotropin injection), 5 mL multip 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: glass and stopper piece",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0803-2026\nRecalling Firm: Mallinckrodt Hospital Products Inc.\nLocation: Bridgewater, United States\nReport Date: 2026-09-02\nProduct: Acthar Gel (repository corticotropin injection), 5 mL multiple-dose vial, Rx Only, Mfd. for: Mallinckrodt ARD LLC, Bridgewater, NJ 08807, NDC 63004-8710-1 & NDC 63004-8710-2\nReason: Presence of particulate matter: glass and stopper piece\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H065",
        "task": "Presence of particulate matter: glass and stopper 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of particulate matter: glass and stopper piece",
        "korean_interpretation": "Mallinckrodt Hospital Products Inc. (Bridgewater, United States) 제조소에서 Acthar Gel (repository corticotropin injection), 5 mL multip 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: glass and stopper piece",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0066",
    "doc_number": "D-0783-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.15 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0783-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 150 mcg (0.15 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-455-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H066",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.15 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0067",
    "doc_number": "D-0790-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Church & Dwight Co., Inc.",
    "facility_location": "Ewing, NJ",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Church & Dwight Co., Inc.] CGMP Deviations; FDA inspection of the contract manufac... 실사 및 리콜 조치",
    "summary_kr": "Church & Dwight Co., Inc. (Ewing, United States) 제조소에서 Zicam, Cold Remedy, Medicated Nasal Swabs, With Cooling Ment 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0790-2026\nRecalling Firm: Church & Dwight Co., Inc.\nLocation: Ewing, United States\nReport Date: 2026-09-02\nProduct: Zicam, Cold Remedy, Medicated Nasal Swabs, With Cooling Menthol & Eucalyptus, 20 Single-Use Swabs per carton, Zinc-Free Homeopathic, Distributed by Church & Dwight Co. Inc., Ewing, NJ 08628, UPC 732216301205.\nReason: CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H067",
        "task": "CGMP Deviations; FDA inspection of the contract ma에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing",
        "korean_interpretation": "Church & Dwight Co., Inc. (Ewing, United States) 제조소에서 Zicam, Cold Remedy, Medicated Nasal Swabs, With Cooling Ment 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0068",
    "doc_number": "D-0784-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 175 mcg (0.175 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0784-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 175 mcg (0.175 mg), packaged in a) 90-count bottles (NDC 16729-456-15), and b) 1000-count bottles (NDC 16729-456-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H068",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 175 mcg (0.175 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0069",
    "doc_number": "D-0827-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of particulate matter:An internal investigatio... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Tyenne (tocilizumab-aazg) Injection, 400 mg/20 mL (20 mg/mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0827-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-09-02\nProduct: Tyenne (tocilizumab-aazg) Injection, 400 mg/20 mL (20 mg/mL), 20 mL vial, Rx Only, Manufactured  by Fresenius Kabi USA, LLC,  Lake Zurich, Illinois, 60047, NDC 65219-594-20.\nReason: Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H069",
        "task": "Presence of particulate matter:An internal investi에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Tyenne (tocilizumab-aazg) Injection, 400 mg/20 mL (20 mg/mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0070",
    "doc_number": "D-0832-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "B BRAUN MEDICAL INC",
    "facility_location": "Allentown, PA",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[B BRAUN MEDICAL INC] Presence of Particulate matter.... 실사 및 리콜 조치",
    "summary_kr": "B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 Lactated Ringer's Injection USP, 1000 mL EXCEL container, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0832-2026\nRecalling Firm: B BRAUN MEDICAL INC\nLocation: Allentown, United States\nReport Date: 2026-09-02\nProduct: Lactated Ringer's Injection USP, 1000 mL EXCEL container, Rx only, L7500, B. Braun Medical, Inc., Bethlehem, PA 18018-3524 USA, NDC 0264-7750-00\nReason: Presence of Particulate matter.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H070",
        "task": "Presence of Particulate matter.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate matter.",
        "korean_interpretation": "B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 Lactated Ringer's Injection USP, 1000 mL EXCEL container, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0071",
    "doc_number": "D-0779-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 100 mcg (0.1 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0779-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 100 mcg (0.1 mg), packaged in a) 90-count bottles (NDC 16729-451-15) and b) 1000-count bottles, (NDC 16729-451-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H071",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 100 mcg (0.1 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0072",
    "doc_number": "D-0778-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0778-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-450-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H072",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0073",
    "doc_number": "D-0780-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.112 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0780-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 112 mcg (0.112 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-452-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H073",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.112 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0074",
    "doc_number": "D-0804-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apotex Corp.",
    "facility_location": "Weston, FL",
    "country": "United States",
    "issue_date": "2026-09-02",
    "title_kr": "[Apotex Corp.] Failed Dissolution Specifications; product failed to me... 실사 및 리콜 조치",
    "summary_kr": "Apotex Corp. (Weston, United States) 제조소에서 Paxil CR, Paroxetine, Extended-Release Tablets, 37.5mg, 30 c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0804-2026\nRecalling Firm: Apotex Corp.\nLocation: Weston, United States\nReport Date: 2026-09-02\nProduct: Paxil CR, Paroxetine, Extended-Release Tablets, 37.5mg, 30 count bottle, Rx only, Manufactured by: Apotex Inc., Toronto, Ontario, Canada M9L 1T9, Manufactured for: Apotex Corp., Weston, Florida 33326, NDC 60505-4379-3\nReason: Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H074",
        "task": "Failed Dissolution Specifications; product failed 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria",
        "korean_interpretation": "Apotex Corp. (Weston, United States) 제조소에서 Paxil CR, Paroxetine, Extended-Release Tablets, 37.5mg, 30 c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0075",
    "doc_number": "D-0793-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 10,000 mcg/10 mL (1,000 mcg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0793-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Cyanocobalamin injection USP, 10,000 mcg/10 mL (1,000 mcg/mL), For IM or SC Use Only, packaged in a) 10 mL Multi-Dose Vial (NDC 0517-0032-01) and b) 25x10 mL Multi-Dose Vials (NDC 0517-0032-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H075",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 10,000 mcg/10 mL (1,000 mcg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0076",
    "doc_number": "D-0771-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Golden State Medical Supply Inc.",
    "facility_location": "Camarillo, CA",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[Golden State Medical Supply Inc.] CGMP deviations: tablets with black specks.... 실사 및 리콜 조치",
    "summary_kr": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, packaged in a)1000-count  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviations: tablets with black specks.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0771-2026\nRecalling Firm: Golden State Medical Supply Inc.\nLocation: Camarillo, United States\nReport Date: 2026-08-26\nProduct: Carbamazepine Tablets, USP, 200mg, packaged in a)1000-count bottles (NDC 51407-215-10), b) 100-count bottles (NDC 51407-215-01), Rx Only, Manufactured by: Taro Pharmaceutical Industries Ltd., Marketed by: GSMS, Incorporated, Camarillo, CA 93012 USA\nReason: CGMP deviations: tablets with black specks.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H076",
        "task": "CGMP deviations: tablets with black specks.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP deviations: tablets with black specks.",
        "korean_interpretation": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, packaged in a)1000-count  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviations: tablets with black specks.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0077",
    "doc_number": "D-0799-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Multrys (Trace Elements Injection 4, USP), For intravenous i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0799-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Multrys (Trace Elements Injection 4, USP), For intravenous infusion, packaged in a) 1 mL Single-Dose Vial (NDC 0517-9302-01), and b) 25x1 mL Single-Dose Vials (NDC 0517-9302-25) Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H077",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Multrys (Trace Elements Injection 4, USP), For intravenous i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0078",
    "doc_number": "D-0797-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 20% (200 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0797-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: ACETYLCYSTEINE SOLUTION, USP, 20% (200 mg/mL), packaged in a) 4 mL Vial NOT FOR INJECTION (NDC 0517-7604-01), and b) 25x4 mL Vials NOT FOR INJECTION (NDC 0517-7604-25), Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H078",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 20% (200 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0079",
    "doc_number": "D-0800-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Papaverine HCl Injection, USP, 60 mg/2 mL (30 mg/mL), packag 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0800-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Papaverine HCl Injection, USP, 60 mg/2 mL (30 mg/mL), packaged in a) 2mL Single-Dose Vial (NDC 0517-4002-01), and b) 25x2mL Single-Dose Vials (NDC 0517-4002-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H079",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Papaverine HCl Injection, USP, 60 mg/2 mL (30 mg/mL), packag 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0080",
    "doc_number": "D-0796-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 10% (100 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0796-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: ACETYLCYSTEINE SOLUTION, USP, 10% (100 mg/mL), packaged in a) 4 mL Vial NOT FOR INJECTION (NDC 0517-7504-01), and b) 25x4 mL Vials NOT FOR INJECTION (NDC 0517-7504-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H080",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 10% (100 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0081",
    "doc_number": "D-0764-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shilpa Medicare Limited",
    "facility_location": "Jadcherla, Mahabubnagar District",
    "country": "India",
    "issue_date": "2026-08-26",
    "title_kr": "[Shilpa Medicare Limited] Discolored solution. The firm has received market compl... 실사 및 리콜 조치",
    "summary_kr": "Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU (pemetrexed injection), 100 mg/10 mL (10 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0764-2026\nRecalling Firm: Shilpa Medicare Limited\nLocation: Jadcherla, Mahabubnagar District, India\nReport Date: 2026-08-26\nProduct: PEMRYDI RTU (pemetrexed injection), 100 mg/10 mL (10 mg/mL),  Single-dose vial, Rx only, Manufactured by: Zydus Lifesciences Limited, Ahmedabad, India; Distributed by: Amneal Pharmaceuticals LC, Bridgewater, NY 08807.  NDC: 70121-2453-1\nReason: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H081",
        "task": "Discolored solution. The firm has received market 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
        "korean_interpretation": "Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU (pemetrexed injection), 100 mg/10 mL (10 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0082",
    "doc_number": "D-0795-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Atropine Sulfate injection, USP, 1 mg/mL, For intravenous Us 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0795-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Atropine Sulfate injection, USP, 1 mg/mL, For intravenous Use, Sterile, packaged in a) 1 mL Single-Dose Vial (NDC 0517-1001-01), and b) 25x1 mL Single-Dose Vial (NDC 0517-1001-25), Rx only, AMERICAN REGENT INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H082",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Atropine Sulfate injection, USP, 1 mg/mL, For intravenous Us 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0083",
    "doc_number": "D-0767-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Regeneron Pharmaceuticals Inc",
    "facility_location": "Tarrytown, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[Regeneron Pharmaceuticals Inc] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Regeneron Pharmaceuticals Inc (Tarrytown, United States) 제조소에서 Libtayo (cemiplimab-rwlc) Injection, 350 mg/7 mL (50 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0767-2026\nRecalling Firm: Regeneron Pharmaceuticals Inc\nLocation: Tarrytown, United States\nReport Date: 2026-08-26\nProduct: Libtayo (cemiplimab-rwlc) Injection, 350 mg/7 mL (50 mg/mL), For Intravenous Infusion After Dilution, Single-Dose Vial, Rx only, Manufactured by: Regeneron Pharmaceuticals, Inc., Tarrytown, NY 10591; Marketed by: Regeneron Pharmaceuticals, Inc. (Tarrytown, NY 10591),  NDC 61755-008-01\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H083",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Regeneron Pharmaceuticals Inc (Tarrytown, United States) 제조소에서 Libtayo (cemiplimab-rwlc) Injection, 350 mg/7 mL (50 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0084",
    "doc_number": "D-0791-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Nitroglycerin injection, USP, 50 mg/10 mL (5 mg/mL), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0791-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Nitroglycerin injection, USP, 50 mg/10 mL (5 mg/mL), packaged in a) 10 mL vials (NDC 0517-4810-01), b) 25x10mL vials (NDC 0517-4810-25) RX only, AMERICAN REGENT, INC., Shirley, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H084",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Nitroglycerin injection, USP, 50 mg/10 mL (5 mg/mL), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0085",
    "doc_number": "D-0774-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Mylan Pharmaceuticals Inc",
    "facility_location": "Morgantown, WV",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Acamprosate Calcium, Delayed-Release Tablets, 333 mg, 180 ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0774-2026\nRecalling Firm: Mylan Pharmaceuticals Inc\nLocation: Morgantown, United States\nReport Date: 2026-08-26\nProduct: Acamprosate Calcium, Delayed-Release Tablets, 333 mg, 180 tablets bottles, Rx only, Mylan Pharmaceuticals Inc., Manufactured for: Mylan Pharmaceuticals Inc., Morgantown, WV 266505, NDC 0378-6333-80.\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H085",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Acamprosate Calcium, Delayed-Release Tablets, 333 mg, 180 ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0086",
    "doc_number": "D-0765-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shilpa Medicare Limited",
    "facility_location": "Jadcherla, Mahabubnagar District",
    "country": "India",
    "issue_date": "2026-08-26",
    "title_kr": "[Shilpa Medicare Limited] Discolored solution. The firm has received market compl... 실사 및 리콜 조치",
    "summary_kr": "Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU(pemetrexed injection), 500 mg/50 mL (10 mg/mL),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0765-2026\nRecalling Firm: Shilpa Medicare Limited\nLocation: Jadcherla, Mahabubnagar District, India\nReport Date: 2026-08-26\nProduct: PEMRYDI RTU(pemetrexed injection), 500 mg/50 mL (10 mg/mL), Single-dose vial, Rx only, Manufactured by: Zydus Lifesciences Limited, Ahmedabad, India; Distributed by: Amneal Pharmaceuticals LC, Bridgewater, NY 08807.  NDC: 70121-2461-1\nReason: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H086",
        "task": "Discolored solution. The firm has received market 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
        "korean_interpretation": "Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU(pemetrexed injection), 500 mg/50 mL (10 mg/mL),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0087",
    "doc_number": "D-0802-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 niCARdipine Hydrochloride Injection, USP, 25 mg/10mL (2.5 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0802-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: niCARdipine Hydrochloride Injection, USP, 25 mg/10mL (2.5 mg/mL), packaged in a) 10 mL Single Dose Vial (NDC 72572-470-01) and b) 10x10 mL Single Dose Vials (NDC 72572-470-10), Rx Only, Mfd for: Civica, Inc., Lehi, UT, Mfd by: American Regent, Inc., New Albany, OH 43054.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H087",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 niCARdipine Hydrochloride Injection, USP, 25 mg/10mL (2.5 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0088",
    "doc_number": "D-0794-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 AMINAOCAPROIC ACID INJECTION, USP, 250 mg/mL (5 g/20 mL), pa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0794-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: AMINAOCAPROIC ACID INJECTION, USP, 250 mg/mL (5 g/20 mL), packaged in a) 20 mL MULTIPLE DOSE VIAL FOR IV INFUSION (NDC 0517-9120-01),  and b) 25x20 mL MULTIPLE DOSE VIALS (NDC 0517-9120-25), Rx Only, American Regent, Inc., Shirley, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H088",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 AMINAOCAPROIC ACID INJECTION, USP, 250 mg/mL (5 g/20 mL), pa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0089",
    "doc_number": "D-0798-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Selenious Acid Injection, USP 12 mcg/2 mL (6 mcg/2mL), For i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0798-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Selenious Acid Injection, USP 12 mcg/2 mL (6 mcg/2mL), For intravenous use, packaged in a) 2mL Single-Dose Vial (NDC 0517-6502-01), and b)10x2mL Single-Dose Vial (NDC 0517-6502-10), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H089",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Selenious Acid Injection, USP 12 mcg/2 mL (6 mcg/2mL), For i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0090",
    "doc_number": "D-0788-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[Fresenius Kabi USA, LLC] Labeling: Label Mixup: MicroVault labeled as Morphine 2... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Morphine Sulfate Injection, USP, 2 mg /mL, 1 mL single-dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.",
    "severity_level": "CRITICAL",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0788-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-08-26\nProduct: Morphine Sulfate Injection, USP, 2 mg /mL, 1 mL single-dose Simplist prefilled syringes, For Intramuscular or Intravenous use, Rx only, Fresenius Kabi, Lake Zurich, IL. Unit of Use NDC Number 76045-004-01; Unit of Sale NDC Number 76045-004-11\nReason: Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H090",
        "task": "Labeling: Label Mixup: MicroVault labeled as Morph에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Morphine Sulfate Injection, USP, 2 mg /mL, 1 mL single-dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0091",
    "doc_number": "D-0770-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] CGMP Deviations; black spots found on tablets from burn... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, 1000 count bottles, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0770-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-08-26\nProduct: Carbamazepine Tablets, USP, 200mg, 1000 count bottles, Rx only, Manufactured by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761, Distributed by: Taro Pharmaceuticals USA, Inc., Hawthorne, NY 10532, NDC 51672-4005-3.\nReason: CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H091",
        "task": "CGMP Deviations; black spots found on tablets from에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, 1000 count bottles, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0092",
    "doc_number": "D-0792-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 1,000 mcg/mL, For IM or SC Use 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0792-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Cyanocobalamin injection USP, 1,000 mcg/mL, For IM or SC Use Only, packaged in a) 1 mL Multi-Dose Vial (NDC 0517-0031-01), and b) 25x1 mL Multi-Dose Vials (NDC 0517-0031-25) Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H092",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 1,000 mcg/mL, For IM or SC Use 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0093",
    "doc_number": "D-0801-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "American Regent, Inc.",
    "facility_location": "Shirley, NY",
    "country": "United States",
    "issue_date": "2026-08-26",
    "title_kr": "[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치",
    "summary_kr": "American Regent, Inc. (Shirley, United States) 제조소에서 Tralement (trace elements injection 4*, USP), packaged in a) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0801-2026\nRecalling Firm: American Regent, Inc.\nLocation: Shirley, United States\nReport Date: 2026-08-26\nProduct: Tralement (trace elements injection 4*, USP), packaged in a) 1mL Single Dose vials (NDC 0517-9305-01) and b) 5x1mL Single Dose vials (NDC 0517-9305-25), Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.\nReason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H093",
        "task": "Presence of Particulate Matter: Product contaminat에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Tralement (trace elements injection 4*, USP), packaged in a) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0094",
    "doc_number": "D-0769-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Buy-Herbal",
    "facility_location": "Flushing, NY",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Buy-Herbal] Marketed Without an Approved NDA/ANDA: Product contains... 실사 및 리콜 조치",
    "summary_kr": "Buy-Herbal (Flushing, United States) 제조소에서 Kian Pee Wan Capsules, 30-count bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.",
    "severity_level": "CRITICAL",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0769-2026\nRecalling Firm: Buy-Herbal\nLocation: Flushing, United States\nReport Date: 2026-08-19\nProduct: Kian Pee Wan Capsules, 30-count bottles\nReason: Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H094",
        "task": "Marketed Without an Approved NDA/ANDA: Product con에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.",
        "korean_interpretation": "Buy-Herbal (Flushing, United States) 제조소에서 Kian Pee Wan Capsules, 30-count bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0095",
    "doc_number": "D-0759-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shoolin Pharma Chem LLP",
    "facility_location": "Kadi",
    "country": "India",
    "issue_date": "2026-08-19",
    "title_kr": "[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치",
    "summary_kr": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 0.100 KG, 100 gm-bag Net Wt, RX ONLY 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0759-2026\nRecalling Firm: Shoolin Pharma Chem LLP\nLocation: Kadi, India\nReport Date: 2026-08-19\nProduct: SILDENAFIL CITRATE USP, 0.100 KG, 100 gm-bag Net Wt, RX ONLY \"FOR Prescription Compounding Only\", Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesana, Gujarat, 382715, India,  (CAS NO. 171599-83-0) NDC 85702-001-05\nReason: CGMP Deviations:Noted during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H095",
        "task": "CGMP Deviations:Noted during FDA inspection에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations:Noted during FDA inspection",
        "korean_interpretation": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 0.100 KG, 100 gm-bag Net Wt, RX ONLY 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0096",
    "doc_number": "D-0755-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 7.5mg (5mg/mL), Glycine 7.5 mg (5mg/mL), 1.5 mL  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0755-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 7.5mg (5mg/mL), Glycine 7.5 mg (5mg/mL), 1.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-721-01\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H096",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 7.5mg (5mg/mL), Glycine 7.5 mg (5mg/mL), 1.5 mL  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0097",
    "doc_number": "D-0772-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Victory Medical Center Pharmacy",
    "facility_location": "Austin, TX",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Victory Medical Center Pharmacy] Microbial Contamination of Sterile Products - out of sp... 실사 및 리콜 조치",
    "summary_kr": "Victory Medical Center Pharmacy (Austin, United States) 제조소에서 Glutathione (MDV), 200 mg/mL, 30 mL vial, each mL contains G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "시험실(QC)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0772-2026\nRecalling Firm: Victory Medical Center Pharmacy\nLocation: Austin, United States\nReport Date: 2026-08-19\nProduct: Glutathione (MDV), 200 mg/mL, 30 mL vial, each mL contains Glutathione 200 mg, Ascorbic Acid 20 mg, Benzyl Alcohol 1.5%, Na Hydroxide (Ph Adjust) in sterile water for injection, VMC.\nReason: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H097",
        "task": "Microbial Contamination of Sterile Products - out 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "korean_interpretation": "Victory Medical Center Pharmacy (Austin, United States) 제조소에서 Glutathione (MDV), 200 mg/mL, 30 mL vial, each mL contains G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0098",
    "doc_number": "D-0747-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 12.5MG (2.5MG/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0747-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 12.5MG (2.5MG/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-495-05\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H098",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 12.5MG (2.5MG/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0099",
    "doc_number": "D-0748-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.25MG (0.9 mg/mL), 2.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0748-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 2.25MG (0.9 mg/mL), 2.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202 NDC 71170-811-02\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H099",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.25MG (0.9 mg/mL), 2.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0100",
    "doc_number": "D-0773-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Liebel-Flarsheim Company LLC",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Liebel-Flarsheim Company LLC] Presence of Particulate Matter: comprising polyethylene... 실사 및 리콜 조치",
    "summary_kr": "Liebel-Flarsheim Company LLC (Raleigh, United States) 제조소에서 Optiray Imaging Bulk Package-350, Ioversol Injection 74%, 35 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0773-2026\nRecalling Firm: Liebel-Flarsheim Company LLC\nLocation: Raleigh, United States\nReport Date: 2026-08-19\nProduct: Optiray Imaging Bulk Package-350, Ioversol Injection 74%, 350 mg/mL Organically Bound Iodine, 500 mL Multiple-Dose Vial, Rx only, Sterile Solution, Manufactured by: Liebel-Flarsheim Company LLC, Raleigh, NC 27616, Made in USA, NDC 0019-1333-65.\nReason: Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H100",
        "task": "Presence of Particulate Matter: comprising polyeth에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.",
        "korean_interpretation": "Liebel-Flarsheim Company LLC (Raleigh, United States) 제조소에서 Optiray Imaging Bulk Package-350, Ioversol Injection 74%, 35 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0101",
    "doc_number": "D-0768-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Heritage Pharmaceuticals Inc",
    "facility_location": "East Brunswick, NJ",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Heritage Pharmaceuticals Inc] Presence of Foreign Substance: presence of particles an... 실사 및 리콜 조치",
    "summary_kr": "Heritage Pharmaceuticals Inc (East Brunswick, United States) 제조소에서 CLINDAMYCIN PALMITATE HYDROCHLORIDE FOR ORAL SOLUTION, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0768-2026\nRecalling Firm: Heritage Pharmaceuticals Inc\nLocation: East Brunswick, United States\nReport Date: 2026-08-19\nProduct: CLINDAMYCIN PALMITATE HYDROCHLORIDE FOR ORAL SOLUTION, USP, 75 mg/5 mL, Rx Only, 100 mL, Distributed by: Avet Pharmaceuticals Inc., East Brunswick, NJ 08816, NDC 23155-603-51\nReason: Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H101",
        "task": "Presence of Foreign Substance: presence of particl에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.",
        "korean_interpretation": "Heritage Pharmaceuticals Inc (East Brunswick, United States) 제조소에서 CLINDAMYCIN PALMITATE HYDROCHLORIDE FOR ORAL SOLUTION, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0102",
    "doc_number": "D-0753-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.5mg (1mg/mL), Glycine 12.5 mg (5mg/mL), 2.5 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0753-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 2.5mg (1mg/mL), Glycine 12.5 mg (5mg/mL), 2.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-711-02\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H102",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.5mg (1mg/mL), Glycine 12.5 mg (5mg/mL), 2.5 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0103",
    "doc_number": "D-0749-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 6.75mg (4.5 mg/mL), 1.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0749-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 6.75mg (4.5 mg/mL), 1.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202 NDC 71170-821-01\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H103",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 6.75mg (4.5 mg/mL), 1.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0104",
    "doc_number": "D-0752-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 0.9mg (0.9 mg/mL), 1 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0752-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 0.9mg (0.9 mg/mL), 1 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-810-01\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H104",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 0.9mg (0.9 mg/mL), 1 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0105",
    "doc_number": "D-0766-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Prestige Brands Holdings",
    "facility_location": "Tarrytown, NY",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Prestige Brands Holdings] Lack of assurance of sterility. The recall is due to po... 실사 및 리콜 조치",
    "summary_kr": "Prestige Brands Holdings (Tarrytown, United States) 제조소에서 CLEAR EYES Maximum Itchy Eye Relief, 0.5 fl oz (15 mL) per d 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility. The recall is due to potential contamination",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0766-2026\nRecalling Firm: Prestige Brands Holdings\nLocation: Tarrytown, United States\nReport Date: 2026-08-19\nProduct: CLEAR EYES Maximum Itchy Eye Relief, 0.5 fl oz (15 mL) per dropper bottle, Sterile, Dist. by Medtech Products Inc., Tarrytown, NY 10591, a Prestige Consumer Healthcare Company.  NDC: 67172-999-01 UPC 6 78112 65920 3\nReason: Lack of assurance of sterility. The recall is due to potential contamination\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H105",
        "task": "Lack of assurance of sterility. The recall is due 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility. The recall is due to potential contamination",
        "korean_interpretation": "Prestige Brands Holdings (Tarrytown, United States) 제조소에서 CLEAR EYES Maximum Itchy Eye Relief, 0.5 fl oz (15 mL) per d 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility. The recall is due to potential contamination",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0106",
    "doc_number": "D-0757-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 20mg (5mg/mL), Glycine 20 mg (5mg/mL), 4 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0757-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 20mg (5mg/mL), Glycine 20 mg (5mg/mL), 4 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-724-04.\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H106",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 20mg (5mg/mL), Glycine 20 mg (5mg/mL), 4 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0107",
    "doc_number": "D-0756-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 10mg (5mg/mL), Glycine 10 mg (5mg/mL), 2 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0756-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 10mg (5mg/mL), Glycine 10 mg (5mg/mL), 2 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-722-02\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H107",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 10mg (5mg/mL), Glycine 10 mg (5mg/mL), 2 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0108",
    "doc_number": "D-0751-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 9mg (4.5 mg/mL), 2 mL Sterile Multi-Dose Vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0751-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 9mg (4.5 mg/mL), 2 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-822-02\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H108",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 9mg (4.5 mg/mL), 2 mL Sterile Multi-Dose Vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0109",
    "doc_number": "D-0760-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shoolin Pharma Chem LLP",
    "facility_location": "Kadi",
    "country": "India",
    "issue_date": "2026-08-19",
    "title_kr": "[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치",
    "summary_kr": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.100 KG, 0.1KG(100gm)-bag, Rx only, \"For Pre 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0760-2026\nRecalling Firm: Shoolin Pharma Chem LLP\nLocation: Kadi, India\nReport Date: 2026-08-19\nProduct: TADALAFIL USP, 0.100 KG, 0.1KG(100gm)-bag, Rx only, \"For Prescription Compounding Only\",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 1715996-29-5), NDC 85702-002-02.\nReason: CGMP Deviations:Noted during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H109",
        "task": "CGMP Deviations:Noted during FDA inspection에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations:Noted during FDA inspection",
        "korean_interpretation": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.100 KG, 0.1KG(100gm)-bag, Rx only, \"For Pre 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0110",
    "doc_number": "D-0761-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shoolin Pharma Chem LLP",
    "facility_location": "Kadi",
    "country": "India",
    "issue_date": "2026-08-19",
    "title_kr": "[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치",
    "summary_kr": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.500 KG, 0.500KG(500gm)-bag, Rx only, \"For P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0761-2026\nRecalling Firm: Shoolin Pharma Chem LLP\nLocation: Kadi, India\nReport Date: 2026-08-19\nProduct: TADALAFIL USP, 0.500 KG, 0.500KG(500gm)-bag, Rx only, \"For Prescription Compounding Only\",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 171596-29-5), NDC 85702-002-04.\nReason: CGMP Deviations:Noted during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H110",
        "task": "CGMP Deviations:Noted during FDA inspection에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations:Noted during FDA inspection",
        "korean_interpretation": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.500 KG, 0.500KG(500gm)-bag, Rx only, \"For P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0111",
    "doc_number": "D-0750-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 4.5mg (0.9 mg/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0750-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 4.5mg (0.9 mg/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-812-03\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H111",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 4.5mg (0.9 mg/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0112",
    "doc_number": "D-0746-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Novartis Pharmaceuticals Corporation",
    "facility_location": "East Hanover, NJ",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Novartis Pharmaceuticals Corporation] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Novartis Pharmaceuticals Corporation (East Hanover, United States) 제조소에서 Diovan (valsartan) 160 mg, 90 tablets, Rx only, Manufactured 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0746-2026\nRecalling Firm: Novartis Pharmaceuticals Corporation\nLocation: East Hanover, United States\nReport Date: 2026-08-19\nProduct: Diovan (valsartan) 160 mg, 90 tablets, Rx only, Manufactured by: Patheon Manufacturing Services LLC, Greenville, NC 27834, Distributed by: Novartis Pharmaceutical Corp, East Hanover, NJ 07936, NDC 0078-0359-34\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H112",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Novartis Pharmaceuticals Corporation (East Hanover, United States) 제조소에서 Diovan (valsartan) 160 mg, 90 tablets, Rx only, Manufactured 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0113",
    "doc_number": "D-0754-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Apollo Care, LLC",
    "facility_location": "Columbia, MO",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치",
    "summary_kr": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 5mg (1mg/mL), Glycine 25 mg (5mg/mL), 5 mL Steri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0754-2026\nRecalling Firm: Apollo Care, LLC\nLocation: Columbia, United States\nReport Date: 2026-08-19\nProduct: SEMAGLUTIDE 5mg (1mg/mL), Glycine 25 mg (5mg/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202.NDC 71170-712-03\nReason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H113",
        "task": "Presence of Particulate Matter; identified as a ny에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "korean_interpretation": "Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 5mg (1mg/mL), Glycine 25 mg (5mg/mL), 5 mL Steri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0114",
    "doc_number": "D-0787-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Baxter Healthcare Corporation",
    "facility_location": "Deerfield, IL",
    "country": "United States",
    "issue_date": "2026-08-19",
    "title_kr": "[Baxter Healthcare Corporation] Presence of Particulate Matter... 실사 및 리콜 조치",
    "summary_kr": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Cefazolin in Dextrose, Injection, USP, 2g / 100mL (20mg / mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0787-2026\nRecalling Firm: Baxter Healthcare Corporation\nLocation: Deerfield, United States\nReport Date: 2026-08-19\nProduct: Cefazolin in Dextrose, Injection, USP, 2g / 100mL (20mg / mL) Single-Dose Infusion Bag in 100mL GALAXY Plastic Container, Frozen Premix, Sterile, Rx only, Manufactured by Baxter Healthcare Corporation, Deerfield, IL 60015, USA, NDC 0338-3508-41.\nReason: Presence of Particulate Matter\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H114",
        "task": "Presence of Particulate Matter에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Cefazolin in Dextrose, Injection, USP, 2g / 100mL (20mg / mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0115",
    "doc_number": "D-0763-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shoolin Pharma Chem LLP",
    "facility_location": "Kadi",
    "country": "India",
    "issue_date": "2026-08-19",
    "title_kr": "[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치",
    "summary_kr": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 1.00KG, 1.00KG-bag Net Wt. Rx only \" 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0763-2026\nRecalling Firm: Shoolin Pharma Chem LLP\nLocation: Kadi, India\nReport Date: 2026-08-19\nProduct: SILDENAFIL CITRATE USP, 1.00KG, 1.00KG-bag Net Wt. Rx only \" For Prescription Compounding Only\",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO. 171599-83-0) NDC 85702-001-08.\nReason: CGMP Deviations:Noted during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H115",
        "task": "CGMP Deviations:Noted during FDA inspection에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations:Noted during FDA inspection",
        "korean_interpretation": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 1.00KG, 1.00KG-bag Net Wt. Rx only \" 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0116",
    "doc_number": "D-0762-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shoolin Pharma Chem LLP",
    "facility_location": "Kadi",
    "country": "India",
    "issue_date": "2026-08-19",
    "title_kr": "[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치",
    "summary_kr": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 1.00 KG, 1KG(1000gm)-bag, Rx only, \"For Presc 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0762-2026\nRecalling Firm: Shoolin Pharma Chem LLP\nLocation: Kadi, India\nReport Date: 2026-08-19\nProduct: TADALAFIL USP, 1.00 KG, 1KG(1000gm)-bag, Rx only, \"For Prescription Compounding Only\",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 171596-29-5), NDC 85702-001-08\nReason: CGMP Deviations:Noted during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H116",
        "task": "CGMP Deviations:Noted during FDA inspection에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations:Noted during FDA inspection",
        "korean_interpretation": "Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 1.00 KG, 1KG(1000gm)-bag, Rx only, \"For Presc 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0117",
    "doc_number": "D-0733-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Aurobindo Pharma USA Inc",
    "facility_location": "East Windsor, NJ",
    "country": "United States",
    "issue_date": "2026-08-12",
    "title_kr": "[Aurobindo Pharma USA Inc] shortfill; reports of empty capsules.... 실사 및 리콜 조치",
    "summary_kr": "Aurobindo Pharma USA Inc (East Windsor, United States) 제조소에서 Dicyclomine Hydrochloride Capsules, USP, 10mg, 1,000 bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: shortfill; reports of empty capsules.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0733-2026\nRecalling Firm: Aurobindo Pharma USA Inc\nLocation: East Windsor, United States\nReport Date: 2026-08-12\nProduct: Dicyclomine Hydrochloride Capsules, USP, 10mg, 1,000 bottles, Rx only, Distributed by: Aurobindo Pharma USA, Inc., 279 Princeton-Hightstown Road, East Windsor, NJ 08520, Made in India, NDC 59651-719-99\nReason: shortfill; reports of empty capsules.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H117",
        "task": "shortfill; reports of empty capsules.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "shortfill; reports of empty capsules.",
        "korean_interpretation": "Aurobindo Pharma USA Inc (East Windsor, United States) 제조소에서 Dicyclomine Hydrochloride Capsules, USP, 10mg, 1,000 bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: shortfill; reports of empty capsules.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0118",
    "doc_number": "D-0744-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Sunny Pharmtech Inc.",
    "facility_location": "Taoyuan City",
    "country": "Taiwan",
    "issue_date": "2026-08-12",
    "title_kr": "[Sunny Pharmtech Inc.] Presence of Particulate Matter; identified as stainless... 실사 및 리콜 조치",
    "summary_kr": "Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 2 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0744-2026\nRecalling Firm: Sunny Pharmtech Inc.\nLocation: Taoyuan City, Taiwan\nReport Date: 2026-08-12\nProduct: Cyclophosphamide for Injection, USP, 2 gram/vial, One Single-Dose Vial, Rx only, Manufactured for: Long Grove Pharmaceuticals, LLC, Rosemont, IL 60018.  Manufactured in Taiwan, NDC 81298-8114-1\nReason: Presence of Particulate Matter; identified as stainless steel\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H118",
        "task": "Presence of Particulate Matter; identified as stai에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as stainless steel",
        "korean_interpretation": "Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 2 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0119",
    "doc_number": "D-0740-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Central Admixture Pharmacy Services Inc",
    "facility_location": "Norcross, GA",
    "country": "United States",
    "issue_date": "2026-08-12",
    "title_kr": "[Central Admixture Pharmacy Services Inc] Incorrect Product Formulation... 실사 및 리콜 조치",
    "summary_kr": "Central Admixture Pharmacy Services Inc (Norcross, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect Product Formulation",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0740-2026\nRecalling Firm: Central Admixture Pharmacy Services Inc\nLocation: Norcross, United States\nReport Date: 2026-08-12\nProduct: Total Parental Nutrition - Pediatric PN Patient-Specific TPN Bag, (patient specific),  Compound Volume 416.8 mL per bag, Rx only, Single Dose Injection, Refrigerated Injection, Central Admixture Pharmacy Services, Inc., Atlanta, 1750 Corp Dr. Ste 725, Norcross, GA 30093 (844) 903-6418\nReason: Incorrect Product Formulation\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H119",
        "task": "Incorrect Product Formulation에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Incorrect Product Formulation",
        "korean_interpretation": "Central Admixture Pharmacy Services Inc (Norcross, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect Product Formulation",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0120",
    "doc_number": "D-0745-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Zydus Pharmaceuticals (USA) Inc",
    "facility_location": "Pennington, NJ",
    "country": "United States",
    "issue_date": "2026-08-12",
    "title_kr": "[Zydus Pharmaceuticals (USA) Inc] CGMP: Due to Out of Specification (OOS) result for N-Ni... 실사 및 리콜 조치",
    "summary_kr": "Zydus Pharmaceuticals (USA) Inc (Pennington, United States) 제조소에서 Mirabegron Extended-Release Tablets, 25 mg, 30-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0745-2026\nRecalling Firm: Zydus Pharmaceuticals (USA) Inc\nLocation: Pennington, United States\nReport Date: 2026-08-12\nProduct: Mirabegron Extended-Release Tablets, 25 mg, 30-count bottle, Rx only, Manufactured by: Zydus Lifesciences Ltd., Matoda, Ahmedabad, India, Distributed by: Zydus Pharmaceuticals (USA) Inc., Pennington, NJ 08534, NDC 70710-1159-3.\nReason: CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H120",
        "task": "CGMP: Due to Out of Specification (OOS) result for에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.",
        "korean_interpretation": "Zydus Pharmaceuticals (USA) Inc (Pennington, United States) 제조소에서 Mirabegron Extended-Release Tablets, 25 mg, 30-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0121",
    "doc_number": "D-0743-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Sunny Pharmtech Inc.",
    "facility_location": "Taoyuan City",
    "country": "Taiwan",
    "issue_date": "2026-08-12",
    "title_kr": "[Sunny Pharmtech Inc.] Presence of Particulate Matter; identified as stainless... 실사 및 리콜 조치",
    "summary_kr": "Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 1 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0743-2026\nRecalling Firm: Sunny Pharmtech Inc.\nLocation: Taoyuan City, Taiwan\nReport Date: 2026-08-12\nProduct: Cyclophosphamide for Injection, USP, 1 gram/vial, One Single-Dose Vial, Rx only, Manufactured for: Long Grove Pharmaceuticals, LLC, Rosemont, IL 60018.  Manufactured in Taiwan, NDC 81298-8112-1\nReason: Presence of Particulate Matter; identified as stainless steel\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H121",
        "task": "Presence of Particulate Matter; identified as stai에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter; identified as stainless steel",
        "korean_interpretation": "Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 1 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0122",
    "doc_number": "D-0738-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 60-count (6x10)blister 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0738-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-08-05\nProduct: Dabigatran Etexilate Capsules, 75 mg, 60-count (6x10)blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7253-68.\nReason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H122",
        "task": "Failed impurity/degradation specification: an OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Tot",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 60-count (6x10)blister 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0123",
    "doc_number": "D-0739-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 30-count (3x10) bliste 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0739-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-08-05\nProduct: Dabigatran Etexilate Capsules, 75 mg, 30-count (3x10) blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7253-04.\nReason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H123",
        "task": "Failed impurity/degradation specification: an OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Tot",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 30-count (3x10) bliste 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0124",
    "doc_number": "D-0731-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Glenmark Pharmaceuticals Inc., USA",
    "facility_location": "Elmwood Park, NJ",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[Glenmark Pharmaceuticals Inc., USA] CGMP Deviations: Product quality complaints concerning ... 실사 및 리콜 조치",
    "summary_kr": "Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Azelaic Acid Gel, 15%, 50 gram tubes, For Topical Use only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0731-2026\nRecalling Firm: Glenmark Pharmaceuticals Inc., USA\nLocation: Elmwood Park, United States\nReport Date: 2026-08-05\nProduct: Azelaic Acid Gel, 15%, 50 gram tubes, For Topical Use only, Rx only, Distributed by: Glenmark Pharmaceuticals Inc., USA, Elmwood Park, NJ 07407, NDC 68462-626-52.\nReason: CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H124",
        "task": "CGMP Deviations: Product quality complaints concer에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received",
        "korean_interpretation": "Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Azelaic Acid Gel, 15%, 50 gram tubes, For Topical Use only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0125",
    "doc_number": "D-0734-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "MYLAN PHARMACEUTICALS INC",
    "facility_location": "Morgantown, WV",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[MYLAN PHARMACEUTICALS INC] Presence of precipitate... 실사 및 리콜 조치",
    "summary_kr": "MYLAN PHARMACEUTICALS INC (Morgantown, United States) 제조소에서 Mycophenolate Mofetil for Injection USP, 500 mg/Vial, Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of precipitate",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0734-2026\nRecalling Firm: MYLAN PHARMACEUTICALS INC\nLocation: Morgantown, United States\nReport Date: 2026-08-05\nProduct: Mycophenolate Mofetil for Injection USP, 500 mg/Vial, Single Dose Vial, 4 vials per carton, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV, 26505 USA, Made in India, NDC 67457-386-00 (vial label) & NDC 67457-386-81 (carton label).\nReason: Presence of precipitate\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H125",
        "task": "Presence of precipitate에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of precipitate",
        "korean_interpretation": "MYLAN PHARMACEUTICALS INC (Morgantown, United States) 제조소에서 Mycophenolate Mofetil for Injection USP, 500 mg/Vial, Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of precipitate",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0126",
    "doc_number": "D-0730-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "MICRO LABS USA INC",
    "facility_location": "Somerset, NJ",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[MICRO LABS USA INC] Defective Container: Firm received multiple complaints ... 실사 및 리콜 조치",
    "summary_kr": "MICRO LABS USA INC (Somerset, United States) 제조소에서 Dorzolamide HCl and Timolol Maleate Ophthalmic Solution, USP 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0730-2026\nRecalling Firm: MICRO LABS USA INC\nLocation: Somerset, United States\nReport Date: 2026-08-05\nProduct: Dorzolamide HCl and Timolol Maleate Ophthalmic Solution, USP, 2%/0.5%, 10mL - bottle, Rx only, Manufactured by: Micro Labs Limited, India, Manufactured for: Micro Labs USA Inc., Somerset, NJ 08873. NDC 42571-147-26.\nReason: Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H126",
        "task": "Defective Container: Firm received multiple compla에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.",
        "korean_interpretation": "MICRO LABS USA INC (Somerset, United States) 제조소에서 Dorzolamide HCl and Timolol Maleate Ophthalmic Solution, USP 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0127",
    "doc_number": "D-0737-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-08-05",
    "title_kr": "[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 150 mg, 60-count (6x10) blist 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0737-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-08-05\nProduct: Dabigatran Etexilate Capsules, 150 mg, 60-count (6x10) blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7255-68.\nReason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H127",
        "task": "Failed impurity/degradation specification: an OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Tot",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 150 mg, 60-count (6x10) blist 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0128",
    "doc_number": "D-0716-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0716-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Max Strength (naphazoline hydrochloride 0.03%, polysorbate 90, 0.2%), Sterile 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127,  Made in Vietnam, UPC 310742011012,  NDC 10742-8158-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H128",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0129",
    "doc_number": "D-0709-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0709-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3560-0; NDC Blister: 0904-6951-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H129",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0130",
    "doc_number": "D-0722-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Cool Relief (naphazoline hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0722-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Cool Relief (naphazoline hydrochloride 0.012%, polysorbate 80 0.2%), Sterile, 0.4 FL OZ (13 mL) each, Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010749, NDC 10742-8141-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H130",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Cool Relief (naphazoline hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0131",
    "doc_number": "D-0711-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0711-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3563-0; NDC Blister: 0904-6956-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H131",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0132",
    "doc_number": "D-0758-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Supernus Pharmaceuticals, Inc.",
    "facility_location": "Rockville, MD",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Supernus Pharmaceuticals, Inc.] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, topiramate extended-release capsules, 25mg, 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0758-2026\nRecalling Firm: Supernus Pharmaceuticals, Inc.\nLocation: Rockville, United States\nReport Date: 2026-07-29\nProduct: Trokendi XR, topiramate extended-release capsules, 25mg, 30 Capsules, Rx only, Manufactured by: Catalent Pharma Solutions, Winchester, KY 40391 USA, Manufactured for: Supernus Pharmaceuticals, Inc., Rockville, MD 20850 USA, NDC 17772-101-30.\nReason: Failed Dissolution Specifications\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H132",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, topiramate extended-release capsules, 25mg, 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0133",
    "doc_number": "D-0703-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0703-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6952-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H133",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0134",
    "doc_number": "D-0727-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Naropin (ropivacaine hydrochloride Injection, USP), 0.5%, 10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0727-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-07-29\nProduct: Naropin (ropivacaine hydrochloride Injection, USP), 0.5%, 100 mg per 20 mL (5 mg per mL), Twenty-five, 20 mL Single-Dose Vials, Rx only, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-286-23; NDC Vial:  63323-286-05\nReason: Presence of Particulate Matter: Hair was found in products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H134",
        "task": "Presence of Particulate Matter: Hair was found in 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Hair was found in products",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Naropin (ropivacaine hydrochloride Injection, USP), 0.5%, 10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0135",
    "doc_number": "D-0702-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0702-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6951-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H135",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0136",
    "doc_number": "D-0710-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0710-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3562-0; NDC Blister: 0904-6951-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H136",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0137",
    "doc_number": "D-0700-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0700-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6949-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H137",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0138",
    "doc_number": "D-0719-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Digi Eye (hypromellose 0.35%, tetrah 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0719-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Digi Eye (hypromellose 0.35%, tetrahydrozoline HCl 0.05%), Sterile, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010602, NDC 10742-8175-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H138",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Digi Eye (hypromellose 0.35%, tetrah 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0139",
    "doc_number": "D-0728-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 200 mg per 20  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0728-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-07-29\nProduct: Xylocaine (lidocaine HCl Injection, USP), 1%, 200 mg per 20 mL (10 mg per mL), 25 Multiple-Dose Vials, 20 mL, Rx only, Sterile,  Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-485-27; NDC Vial:  63323-485-01\nReason: Presence of Particulate Matter: Hair was found in products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H139",
        "task": "Presence of Particulate Matter: Hair was found in 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Hair was found in products",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 200 mg per 20  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0140",
    "doc_number": "D-0720-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0720-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene glycol 0.3%), Sterile, 0.34 FL OZ (10 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011135, NDC 10742-8162-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H140",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0141",
    "doc_number": "D-0736-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Ascend Laboratories, LLC] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 150 mg, 20-count carton (2x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0736-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-07-29\nProduct: Dabigatran etexilate Capsules, 150 mg, 20-count carton (2x10), Rx only, Manufactured by: Alkem Laboratories, Mumbai, INDIA, Distributed by: Major Pharmaceuticals, Indianapolis, IN 46268, NDC 0904-7255-10.\nReason: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H141",
        "task": "Failed Impurities/Degradation Specifications: OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 150 mg, 20-count carton (2x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0142",
    "doc_number": "D-0701-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0701-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6950-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H142",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0143",
    "doc_number": "D-0726-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Lidocaine HCl Injection, USP, 2%, 100 mg per 5 mL (20 mg per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0726-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-07-29\nProduct: Lidocaine HCl Injection, USP, 2%, 100 mg per 5 mL (20 mg per mL), 25 Single Dose Vials, 5 mL per vial,  Rx only, Sterile, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-208-05; NDC Vial:  63323-208-01\nReason: Presence of Particulate Matter: Hair was found in products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H143",
        "task": "Presence of Particulate Matter: Hair was found in 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Hair was found in products",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Lidocaine HCl Injection, USP, 2%, 100 mg per 5 mL (20 mg per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0144",
    "doc_number": "D-0717-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0717-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Max Strength (naphazoline hydrochloride 0.03%, polysorbate 80 0.2%), Sterile, TWIN PACK, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011210, NDC 10742-8158-2\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H144",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0145",
    "doc_number": "D-0742-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bionpharma Inc.",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Bionpharma Inc.] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치",
    "summary_kr": "Bionpharma Inc. (Princeton, United States) 제조소에서 Divalproex Sodium Delayed-Release Tablets, USP, 500 mg, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0742-2026\nRecalling Firm: Bionpharma Inc.\nLocation: Princeton, United States\nReport Date: 2026-07-29\nProduct: Divalproex Sodium Delayed-Release Tablets, USP, 500 mg, 500 Tablets bottles, Rx only, Distributed by: Bionpharma Inc., Princeton, NJ 08540, Made in India, NDC 69452-435-30.\nReason: Presence of Foreign Tablets/Capsules\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H145",
        "task": "Presence of Foreign Tablets/Capsules에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Tablets/Capsules",
        "korean_interpretation": "Bionpharma Inc. (Princeton, United States) 제조소에서 Divalproex Sodium Delayed-Release Tablets, USP, 500 mg, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0146",
    "doc_number": "D-0713-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Asclemed USA Inc.",
    "facility_location": "Torrance, CA",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Asclemed USA Inc.] Labeling: Not Elsewhere Classified: The label wrap cove... 실사 및 리콜 조치",
    "summary_kr": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidolog Kit, Kit Contains: Lidocaine HCl Injection, USP, 2%  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0713-2026\nRecalling Firm: Asclemed USA Inc.\nLocation: Torrance, United States\nReport Date: 2026-07-29\nProduct: Lidolog Kit, Kit Contains: Lidocaine HCl Injection, USP, 2% (2mL) vial, 1 Dose, Single use Only, Rx Only, Distributed by: Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 76420-760-01.\nReason: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H146",
        "task": "Labeling: Not Elsewhere Classified: The label wrap에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
        "korean_interpretation": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidolog Kit, Kit Contains: Lidocaine HCl Injection, USP, 2%  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0147",
    "doc_number": "D-0712-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Ascend Laboratories, LLC] Failed Dissolution Specifications; Olmesartan Medoxomil... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 10 mg/20 mg, 30 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0712-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-07-29\nProduct: Amlodipine and Olmesartan Medoxomil Tablets, 10 mg/20 mg, 30 Tablets per bottle, Rx Only, Manufactured by: Alkem Laboratories Ltd., INDIA; Distributed by: Ascend Laboratories, LLC., Parsnippany, NJ 07054.  NDC: 67877-500-30\nReason: Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H147",
        "task": "Failed Dissolution Specifications; Olmesartan Medo에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 10 mg/20 mg, 30 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0148",
    "doc_number": "D-0707-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0707-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Carton: 55154-3558-0; NDC Blister: 0904-6949-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H148",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0149",
    "doc_number": "D-0704-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.0112 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0704-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 112 mcg (0.0112 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6954-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H149",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.0112 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0150",
    "doc_number": "D-0718-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Optic Glow (naphazoline hydrochlorid 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0718-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Optic Glow (naphazoline hydrochloride 0.03%, povidone 0.5%, propylene glycol 0.2%), Sterile, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010916, NDC 10742-8160-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H150",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Optic Glow (naphazoline hydrochlorid 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0151",
    "doc_number": "D-0729-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 500 mg per 50  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0729-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-07-29\nProduct: Xylocaine (lidocaine HCl Injection, USP), 1%, 500 mg per 50 mL (10 mg per mL), 25 Multiple-Dose Vials, 50 mL, Rx only, Sterile,  Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-485-57; NDC Vial:  63323-485-03\nReason: Presence of Particulate Matter: Hair was found in products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H151",
        "task": "Presence of Particulate Matter: Hair was found in 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Hair was found in products",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 500 mg per 50  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0152",
    "doc_number": "D-0725-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Glycopyrrolate Injection, USP, 1 mg per 5 mL (0.2 mg per mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in product",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0725-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-07-29\nProduct: Glycopyrrolate Injection, USP, 1 mg per 5 mL (0.2 mg per mL), 25 x  5 mL fill in a 6.5 mL vial, Rx only, Multiple Dose Vials, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-578-05; NDC Vial:  63323-578-07\nReason: Presence of Particulate Matter: Hair was found in product\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H152",
        "task": "Presence of Particulate Matter: Hair was found in 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate Matter: Hair was found in product",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Glycopyrrolate Injection, USP, 1 mg per 5 mL (0.2 mg per mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in product",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0153",
    "doc_number": "D-0705-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0705-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6955-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H153",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0154",
    "doc_number": "D-0741-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Precision Dose Inc.",
    "facility_location": "South Beloit, IL",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Precision Dose Inc.] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치",
    "summary_kr": "Precision Dose Inc. (South Beloit, United States) 제조소에서 Glycopyrrolate Oral Solution, 1 mg/5 mL, delivers 5 mL, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0741-2026\nRecalling Firm: Precision Dose Inc.\nLocation: South Beloit, United States\nReport Date: 2026-07-29\nProduct: Glycopyrrolate Oral Solution, 1 mg/5 mL, delivers 5 mL, Rx only, Pkg: Precision Dose, Inc, S. Beloil, IL 61080, unit-dose oral syringes, NDCs 68094-073-01 (oral syringe) and 68094-073-58 (case).\nReason: Failed Impurities/Degradation Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H154",
        "task": "Failed Impurities/Degradation Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications",
        "korean_interpretation": "Precision Dose Inc. (South Beloit, United States) 제조소에서 Glycopyrrolate Oral Solution, 1 mg/5 mL, delivers 5 mL, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0155",
    "doc_number": "D-0708-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0708-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3559-0; NDC Blister: 0904-6950-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H155",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0156",
    "doc_number": "D-0724-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rising Pharma Holding, Inc.",
    "facility_location": "East Brunswick, NJ",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Rising Pharma Holding, Inc.] Presence of Precipitate: medication was crystallizing a... 실사 및 리콜 조치",
    "summary_kr": "Rising Pharma Holding, Inc. (East Brunswick, United States) 제조소에서 Rising, Cyproheptadine Hydrochloride Syrup, 2mg/5 mL, 473 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Precipitate: medication was crystallizing and particles floating in the bottle",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0724-2026\nRecalling Firm: Rising Pharma Holding, Inc.\nLocation: East Brunswick, United States\nReport Date: 2026-07-29\nProduct: Rising, Cyproheptadine Hydrochloride Syrup, 2mg/5 mL, 473 mL (ONE PINT), Rx only, Manufactured for: Rising Pharma Holdings, Inc., East Brunswick, NJ, Manufactured by: Lyne Laboratories, Inc., Brockton, MA. NDC 64980-504-48.\nReason: Presence of Precipitate: medication was crystallizing and particles floating in the bottle\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H156",
        "task": "Presence of Precipitate: medication was crystalliz에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Precipitate: medication was crystallizing and particles floating in the bottle",
        "korean_interpretation": "Rising Pharma Holding, Inc. (East Brunswick, United States) 제조소에서 Rising, Cyproheptadine Hydrochloride Syrup, 2mg/5 mL, 473 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Precipitate: medication was crystallizing and particles floating in the bottle",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0157",
    "doc_number": "D-0732-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "JB Chemicals and Pharmaceuticals Ltd",
    "facility_location": "Mumbai, N/A",
    "country": "India",
    "issue_date": "2026-07-29",
    "title_kr": "[JB Chemicals and Pharmaceuticals Ltd] Cross Contamination with Other Products: Customer compl... 실사 및 리콜 조치",
    "summary_kr": "JB Chemicals and Pharmaceuticals Ltd (Mumbai, India) 제조소에서 Cetirizine Hydrochloride Tablets USP 5 mg, 100-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydrochloride Tablets USP 5 mg. Determined to be Ranitidine.",
    "severity_level": "CRITICAL",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0732-2026\nRecalling Firm: JB Chemicals and Pharmaceuticals Ltd\nLocation: Mumbai, India\nReport Date: 2026-07-29\nProduct: Cetirizine Hydrochloride Tablets USP 5 mg, 100-count bottle, Manufactured by: Unique Pharmaceuticals Labs, (A Div. of J.B. Chemicals & Pharmaceuticals, Ltd.), Mumbai 400 030, India. Distributed by: Rising Pharma Holdings, Inc., East Brunswick, NJ 08816, NDC 16571-401-10.\nReason: Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydrochloride Tablets USP 5 mg. Determined to be Ranitidine.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H157",
        "task": "Cross Contamination with Other Products: Customer 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydro",
        "korean_interpretation": "JB Chemicals and Pharmaceuticals Ltd (Mumbai, India) 제조소에서 Cetirizine Hydrochloride Tablets USP 5 mg, 100-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydrochloride Tablets USP 5 mg. Determined to be Ranitidine.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0158",
    "doc_number": "D-0735-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Ascend Laboratories, LLC] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 110 mg, 60-count carton (6x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0735-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-07-29\nProduct: Dabigatran etexilate Capsules, 110 mg, 60-count carton (6x10), Rx Only, Manufactured by: Alkem Laboratories, Mumbai, INDIA, Distributed by: Major Pharmaceuticals, Indianapolis, IN 46268, NDC 0904-7254-68.\nReason: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H158",
        "task": "Failed Impurities/Degradation Specifications: OOS 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 110 mg, 60-count carton (6x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0159",
    "doc_number": "D-0715-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops ALL-IN-ONE (hypromellose 0.2%, tetra 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0715-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops ALL-IN-ONE (hypromellose 0.2%, tetrahydrozoline HCL 0.05%, zinc sulfate 0.25%), Sterile 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam UPC 310742010862, NDC 10742-8146-1\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H159",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops ALL-IN-ONE (hypromellose 0.2%, tetra 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0160",
    "doc_number": "D-0706-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Major Pharmaceuticals",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-29",
    "title_kr": "[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0706-2026\nRecalling Firm: Major Pharmaceuticals\nLocation: Dublin, United States\nReport Date: 2026-07-29\nProduct: Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6956-61\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H160",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0161",
    "doc_number": "D-0721-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Rohto-Mentholatum (Vietnam) Co., Ltd.",
    "facility_location": "Ho Chi Minh, N/A",
    "country": "Vietnam",
    "issue_date": "2026-07-29",
    "title_kr": "[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0721-2026\nRecalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.\nLocation: Ho Chi Minh, Vietnam\nReport Date: 2026-07-29\nProduct: Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene glycol 0.3%), Sterile, TWIN PACK 0.34 FL OZ (10 mL) each, Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011159, NDC 10742-8162-2\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H161",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0162",
    "doc_number": "D-0689-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Chiesi USA, Inc.",
    "facility_location": "Cary, NC",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Chiesi USA, Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Chiesi USA, Inc. (Cary, United States) 제조소에서 CLEVIPREX (clevidipine injectable emulsion) 50 mg/100 mL (0. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0689-2026\nRecalling Firm: Chiesi USA, Inc.\nLocation: Cary, United States\nReport Date: 2026-07-22\nProduct: CLEVIPREX (clevidipine injectable emulsion) 50 mg/100 mL (0.5 mg/mL), 10 Single Use Vials, Rx Only, Manufactured for: Chiesi USA, Inc., Cary, NC 27518, by Fresenius Kabi, Graz, Austria, NDC 10122-611-10.\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H162",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Chiesi USA, Inc. (Cary, United States) 제조소에서 CLEVIPREX (clevidipine injectable emulsion) 50 mg/100 mL (0. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0163",
    "doc_number": "D-0680-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 QC Quality Choice, Carbamide Peroxide, 6.5%, 0.5 FL. OZ. (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0680-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: QC Quality Choice, Carbamide Peroxide, 6.5%, 0.5 FL. OZ. (15 mL) a) Washer Bulb included (NDC 63868-026-15); b) 1 bottle (NDC 63868-027-16), Distributed by C.D.M.A., Inc., 43157 W. Nine Mile, Novi, MI 48376.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H163",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 QC Quality Choice, Carbamide Peroxide, 6.5%, 0.5 FL. OZ. (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0164",
    "doc_number": "D-0679-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Clinere, Carbamide Peroxide, a) 2 bottles of Clinere Carbami 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0679-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: Clinere, Carbamide Peroxide, a) 2 bottles of Clinere Carbamide Peroxide (2 x 0.50 mL) 6.5%, 0.5 fl. oz. (15 mL); b) 1 bottle of Clinere Carbamide Peroxide (0,50 fl. oz. (15 mL), Dist. by: Quest Products LLC, Pleasant Prairie, WI 53158, NDC 68229-102-01.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H164",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Clinere, Carbamide Peroxide, a) 2 bottles of Clinere Carbami 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0165",
    "doc_number": "D-0685-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 LEADER, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit - 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0685-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: LEADER, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit -1 RUBBER BULB SYRINGE, 0.5 FL OZ DROPS, (NDC 70000-0689-1); b) 1 bottle (NDC 70000-0688-1), DIST. BY CARDINAL HEALTH, DUBLIN, OH 43017.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H165",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 LEADER, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit - 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0166",
    "doc_number": "D-0683-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 FAMILY Wellness, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0683-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: FAMILY Wellness, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), Kit - Washer Bulb Included, (NDC 55319-835-01), DISTRIBUTED BY: MIDWOOD BRANDS LLC, 500 VOLVO PKWY, CHESAPEAKE, VA 23320.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H166",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 FAMILY Wellness, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0167",
    "doc_number": "D-0690-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[CareFusion 213, LLC] Lack of Assurance of Sterility: Affected product may ex... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0690-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-22\nProduct: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol), 60 x 1 mL applicators/carton, 0.03fl oz (1 mL) each, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-31\nReason: Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H167",
        "task": "Lack of Assurance of Sterility: Affected product m에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0168",
    "doc_number": "D-0688-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CAREone, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0688-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: CAREone, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Bottle, NDC 72476-838-34, DISTRIBUTED BY: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H168",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CAREone, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0169",
    "doc_number": "D-0677-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Padagis US LLC",
    "facility_location": "Minneapolis, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Padagis US LLC] Subpotent Drug: Low out of specification assay results ... 실사 및 리콜 조치",
    "summary_kr": "Padagis US LLC (Minneapolis, United States) 제조소에서 Nystatin Cream USP, (100,000 USP Nystatin Units), NET WT 15  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug: Low out of specification assay results performed during long-term stability testing.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0677-2026\nRecalling Firm: Padagis US LLC\nLocation: Minneapolis, United States\nReport Date: 2026-07-22\nProduct: Nystatin Cream USP, (100,000 USP Nystatin Units), NET WT 15 g, Rx only, 15 g tube, Manufactured by Padagis, Yeruham, Israel, NDC 45802-059-35\nReason: Subpotent Drug: Low out of specification assay results performed during long-term stability testing.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H169",
        "task": "Subpotent Drug: Low out of specification assay res에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug: Low out of specification assay results performed during long-term stability testing.",
        "korean_interpretation": "Padagis US LLC (Minneapolis, United States) 제조소에서 Nystatin Cream USP, (100,000 USP Nystatin Units), NET WT 15  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug: Low out of specification assay results performed during long-term stability testing.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0170",
    "doc_number": "D-0687-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 meijer, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Washer B 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0687-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: meijer, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Washer Bulb included, NDC 41250-835-33, DIST. BY MEIJER DISTRIBUTION, INC., GRAND RAPIDS, MI 49544.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H170",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 meijer, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Washer B 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0171",
    "doc_number": "D-0678-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CVS Health, Carbamide Peroxide, 6.5%, 0.5 FL Oz (15 mL), a)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0678-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: CVS Health, Carbamide Peroxide, 6.5%, 0.5 FL Oz (15 mL), a) Bottle (NDC 51316-822-00.); b) Kit (1 BULB, Syringe & Drops- NDC 51316-823-00.), Distributed by: CVS Pharmacy., Inc. One CVS Drive, Woonsocket, RI 02895,\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H171",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CVS Health, Carbamide Peroxide, 6.5%, 0.5 FL Oz (15 mL), a)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0172",
    "doc_number": "D-0681-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 TopCare Health, CARBAMIDE PEROXIDE 6.5%, 0.5 FL OZ (15 mL) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0681-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: TopCare Health, CARBAMIDE PEROXIDE 6.5%, 0.5 FL OZ (15 mL) a) Kit - WASHER BULB & DROPS INCLUDED (NDC 36800-835-33); b) 1 bottle (NDC 36800-835-34), DISTRIBUTED BY TOPCO ASSOCIATES LLC, ELK GROVE VILLAGE, IL 60007.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H172",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 TopCare Health, CARBAMIDE PEROXIDE 6.5%, 0.5 FL OZ (15 mL) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0173",
    "doc_number": "D-0682-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 AUDIOLOGIST'S CHOICE, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0682-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: AUDIOLOGIST'S CHOICE, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL) a) Kit - Washer Bulb Included (NDC 59256-001-02); b) 1 bottle (NDC  59256-836-34), Distributed By: Oaktree Products Inc., St. Louis. MO 63005.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H173",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 AUDIOLOGIST'S CHOICE, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0174",
    "doc_number": "D-0684-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 GOOD NEIGHBOR PHARMACY, Carbamide Peroxide 6.5%, 0.5 Fl Oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0684-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: GOOD NEIGHBOR PHARMACY, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit - Washer Bulb Included, (NDC 46122-556-05); b) 1 bottle (NDC 46122-557-05), Distributed by: AmerisourceBergen, 1 West First Avenue, Conshohocken, PA 19428.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H174",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 GOOD NEIGHBOR PHARMACY, Carbamide Peroxide 6.5%, 0.5 Fl Oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0175",
    "doc_number": "D-0686-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Bell Pharmaceuticals, Inc",
    "facility_location": "Belle Plaine, MN",
    "country": "United States",
    "issue_date": "2026-07-22",
    "title_kr": "[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치",
    "summary_kr": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Foster & Thrive, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0686-2026\nRecalling Firm: Bell Pharmaceuticals, Inc\nLocation: Belle Plaine, United States\nReport Date: 2026-07-22\nProduct: Foster & Thrive, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), NDC 70677-1154-01, Distributed by: McKesson Corp., via SSSL, Memphis, TN 38141.\nReason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H175",
        "task": "SubPotent Drug: low pH and significantly reduced a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "korean_interpretation": "Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Foster & Thrive, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0176",
    "doc_number": "D-0662-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ONESOURCE SPECIALTY PHARMA LIMITED",
    "facility_location": "Bengaluru, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[ONESOURCE SPECIALTY PHARMA LIMITED] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치",
    "summary_kr": "ONESOURCE SPECIALTY PHARMA LIMITED (Bengaluru, India) 제조소에서 Methohexital Sodium for Injection, USP 500 mg Multiple Dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0662-2026\nRecalling Firm: ONESOURCE SPECIALTY PHARMA LIMITED\nLocation: Bengaluru, India\nReport Date: 2026-07-15\nProduct: Methohexital Sodium for Injection, USP 500 mg Multiple Dose Vial, Rx Only, Manufactured by: OneSource Specialty, Pharma Limited, Bengaluru - 561 203, India, Manufactured for: Avet Pharmaceuticals Inc., East Brunswick, NJ 08816, NDC 23155-893-31\nReason: Failed Impurities/Degradation Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H176",
        "task": "Failed Impurities/Degradation Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications",
        "korean_interpretation": "ONESOURCE SPECIALTY PHARMA LIMITED (Bengaluru, India) 제조소에서 Methohexital Sodium for Injection, USP 500 mg Multiple Dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0177",
    "doc_number": "D-0666-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 1 US Gallon (3.78 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0666-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Gasco Isopropyl Alcohol 70%, Net Contents: 1 US Gallon (3.78 L), Manufactured by: Gasco Industrial Corp., PO Box 1360, Gurabo, PR 00778, Made in USA\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H177",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 1 US Gallon (3.78 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0178",
    "doc_number": "D-0667-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, 32 oz (946 mL) Gasco Industrial 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0667-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Gasco Isopropyl Alcohol 70%, 32 oz (946 mL) Gasco Industrial Corp., PO Box 1360, Gurabo PR 00778, UPC 7 87302 12363 6.\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H178",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, 32 oz (946 mL) Gasco Industrial 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0179",
    "doc_number": "D-0670-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 32 oz. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0670-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 32 oz., 946 mL, Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana Llana Rio Piedras, PR 00924, UPC 659685696567.\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H179",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 32 oz. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0180",
    "doc_number": "D-0691-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Shimoga Chemicals",
    "facility_location": "Sangli, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[Shimoga Chemicals] cGMP deviations... 실사 및 리콜 조치",
    "summary_kr": "Shimoga Chemicals (Sangli, India) 제조소에서 Clomiphene Citrate USP Active Pharmaceutical Ingredient (CAS 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0691-2026\nRecalling Firm: Shimoga Chemicals\nLocation: Sangli, India\nReport Date: 2026-07-15\nProduct: Clomiphene Citrate USP Active Pharmaceutical Ingredient (CAS : 50-41-9), Net Weight a)1 KG (NDC 84849-000-01), b) 500 g (NDC 84849-000-02), (c) 100 g (NDC 84849-000-03), Rx Only, Shimoga Chemicals Address -W-57A, MIDC Kupwad Samgli, Maharashtra, 416436, India.\nReason: cGMP deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H180",
        "task": "cGMP deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "cGMP deviations",
        "korean_interpretation": "Shimoga Chemicals (Sangli, India) 제조소에서 Clomiphene Citrate USP Active Pharmaceutical Ingredient (CAS 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0181",
    "doc_number": "D-0672-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Reliance Life Sciences Private Limited",
    "facility_location": "Navi Mumbai, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치",
    "summary_kr": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 500mg/Vial, 1 50 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0672-2026\nRecalling Firm: Reliance Life Sciences Private Limited\nLocation: Navi Mumbai, India\nReport Date: 2026-07-15\nProduct: Pemetrexed for Injection 500mg/Vial, 1 50 mL Single-Dose Vial per carton, For intravenous use only, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0835-01\nReason: Lack of Sterility Assurance\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H181",
        "task": "Lack of Sterility Assurance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Sterility Assurance",
        "korean_interpretation": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 500mg/Vial, 1 50 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0182",
    "doc_number": "D-0665-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 16 Oz. (474 mL).  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0665-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Gasco Isopropyl Alcohol 70%, Net Contents: 16 Oz. (474 mL). Manufactured by: Gasco Industrial Corp., PO Box 1360 Gurabo PR 00778 Made in USA UPC 7 87302 13044 3\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H182",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 16 Oz. (474 mL).  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0183",
    "doc_number": "D-0668-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 1 gall 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0668-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 1 gallon (3.78 liter), Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana LLana Rio Piedras, PR 00924\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H183",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 1 gall 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0184",
    "doc_number": "D-0673-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Reliance Life Sciences Private Limited",
    "facility_location": "Navi Mumbai, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치",
    "summary_kr": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Bortezomib for Injection 3.5mg/Vial, 10 mL per Single-Dose V 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0673-2026\nRecalling Firm: Reliance Life Sciences Private Limited\nLocation: Navi Mumbai, India\nReport Date: 2026-07-15\nProduct: Bortezomib for Injection 3.5mg/Vial, 10 mL per Single-Dose Vial, For Intravenous or Subcutaneous Use, Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873. NDC: 70069-0836-01\nReason: Lack of Sterility Assurance\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H184",
        "task": "Lack of Sterility Assurance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Sterility Assurance",
        "korean_interpretation": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Bortezomib for Injection 3.5mg/Vial, 10 mL per Single-Dose V 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0185",
    "doc_number": "D-0671-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Reliance Life Sciences Private Limited",
    "facility_location": "Navi Mumbai, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치",
    "summary_kr": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 100mg/Vial, 1 10 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0671-2026\nRecalling Firm: Reliance Life Sciences Private Limited\nLocation: Navi Mumbai, India\nReport Date: 2026-07-15\nProduct: Pemetrexed for Injection 100mg/Vial, 1 10 mL Single-Dose Vial per carton, For intravenous use only, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0834-01\nReason: Lack of Sterility Assurance\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H185",
        "task": "Lack of Sterility Assurance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Sterility Assurance",
        "korean_interpretation": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 100mg/Vial, 1 10 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0186",
    "doc_number": "D-0674-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Reliance Life Sciences Private Limited",
    "facility_location": "Navi Mumbai, N/A",
    "country": "India",
    "issue_date": "2026-07-15",
    "title_kr": "[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치",
    "summary_kr": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Azacitidine for Injection 100mg/Vial, 1 10 mL Single-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0674-2026\nRecalling Firm: Reliance Life Sciences Private Limited\nLocation: Navi Mumbai, India\nReport Date: 2026-07-15\nProduct: Azacitidine for Injection 100mg/Vial, 1 10 mL Single-Dose Vial per carton, For Subcutaneous  and Intravenous Use, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0857-01\nReason: Lack of Sterility Assurance\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H186",
        "task": "Lack of Sterility Assurance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Sterility Assurance",
        "korean_interpretation": "Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Azacitidine for Injection 100mg/Vial, 1 10 mL Single-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0187",
    "doc_number": "D-0663-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "BioMed Laboratories, LLC.",
    "facility_location": "Dallas, TX",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[BioMed Laboratories, LLC.] Failed Impurities/Degradation Specifications; Formaldeh... 실사 및 리콜 조치",
    "summary_kr": "BioMed Laboratories, LLC. (Dallas, United States) 제조소에서 Medline Remedy Specialized Silicone Cream (Hydraguard-D ),Ma 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0663-2026\nRecalling Firm: BioMed Laboratories, LLC.\nLocation: Dallas, United States\nReport Date: 2026-07-15\nProduct: Medline Remedy Specialized Silicone Cream (Hydraguard-D ),Manufactured for Medline Industries, LP, Three Lakes Drive, Northfield, IL 80090  2 FL OZ (59 mL) NDC  53329-159-13   4 FL OZ (118 mL)  NDC 53329-159-04\nReason: Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H187",
        "task": "Failed Impurities/Degradation Specifications; Form에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.",
        "korean_interpretation": "BioMed Laboratories, LLC. (Dallas, United States) 제조소에서 Medline Remedy Specialized Silicone Cream (Hydraguard-D ),Ma 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0188",
    "doc_number": "D-0669-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Gasco Industrial Corp.",
    "facility_location": "Gurabo, PR",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치",
    "summary_kr": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 16 oz, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0669-2026\nRecalling Firm: Gasco Industrial Corp.\nLocation: Gurabo, United States\nReport Date: 2026-07-15\nProduct: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 16 oz, 474 mL, Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana LLana Rio Piedras, PR 00924, UPC 69685696529\nReason: Subpotent drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H188",
        "task": "Subpotent drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent drug",
        "korean_interpretation": "Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 16 oz, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0189",
    "doc_number": "D-0664-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "QuVa Pharma, Inc.",
    "facility_location": "Sugar Land, TX",
    "country": "United States",
    "issue_date": "2026-07-15",
    "title_kr": "[QuVa Pharma, Inc.] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치",
    "summary_kr": "QuVa Pharma, Inc. (Sugar Land, United States) 제조소에서 Methohexital Sodium, 100 mg/10 mL (10 mg/mL), Total Volume:  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0664-2026\nRecalling Firm: QuVa Pharma, Inc.\nLocation: Sugar Land, United States\nReport Date: 2026-07-15\nProduct: Methohexital Sodium, 100 mg/10 mL (10 mg/mL), Total Volume: 10 mL, Rx only, Compounded drug, QuVa Pharma, 1075 W Park One Dr, Suite 100, Sugar Land, TX 77478, Product code: 70092-1310-46.\nReason: Failed Impurities/Degradation Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H189",
        "task": "Failed Impurities/Degradation Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications",
        "korean_interpretation": "QuVa Pharma, Inc. (Sugar Land, United States) 제조소에서 Methohexital Sodium, 100 mg/10 mL (10 mg/mL), Total Volume:  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0190",
    "doc_number": "D-0697-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Solution, (Undecylenic (10-Undecenoic) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0697-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: TERPENICOL Antifungal Solution, (Undecylenic (10-Undecenoic) acid 25%), 1.0 Fl Oz (29.6 mL), Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Santa Fe Springs, CA 90670. NDC 63347-600-01\nReason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H190",
        "task": "CGMP Deviations; the firm discontinued required st에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Solution, (Undecylenic (10-Undecenoic) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0191",
    "doc_number": "D-0643-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0643-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)), packaged as a) 100 x 10.5 mL applicators/case, NDC 54365-400-35, Catalog Number: 930715NS; b) 100 x 10.5 mL applicators/case, Catalog Number bulk 930715NSB, NDC 54365-400-35; STERILE SOLUTION, CAREFUSION 213, LLC, EL PASO, TX 79912, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H191",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0192",
    "doc_number": "D-0698-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Fungal Fusion ERADICATION Solution, Antifungal & Antimicrobi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0698-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: Fungal Fusion ERADICATION Solution, Antifungal & Antimicrobial Kit. Contains, 1x2 oz bottle Fungal Fusion Antifungal (Miconazole Nitrate) Cream, 1x2oz  bottle Fungal Fusion Antifungal Solution (25% Undecylenic Acid) and 1x1oz bottle of Fungal Fusion Eradication Antimicrobial Show Spray (isopropyl Alcohol, D-Limonene, Undecylenic Acid).  Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Santa Fe Springs, CA 90670, Manufactured for Doctor's Inc\nReason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H192",
        "task": "CGMP Deviations; the firm discontinued required st에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Fungal Fusion ERADICATION Solution, Antifungal & Antimicrobi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0193",
    "doc_number": "D-0646-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 ChloraPrep FREPP, Clear, (2% w/v chlorhexidine gluconate (CH 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0646-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: ChloraPrep FREPP, Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) 500 x 1.5 mL applicators/case, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-30, Catalog number 930599NSB\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H193",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 ChloraPrep FREPP, Clear, (2% w/v chlorhexidine gluconate (CH 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0194",
    "doc_number": "D-0723-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lupin Pharmaceuticals Inc.",
    "facility_location": "Naples, FL",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Lupin Pharmaceuticals Inc.] CGMP deviation: OOS result observed for the Gliding For... 실사 및 리콜 조치",
    "summary_kr": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Glucagon Emergency Kit for Low Blood Sugar, Glucagon for Inj 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0723-2026\nRecalling Firm: Lupin Pharmaceuticals Inc.\nLocation: Naples, United States\nReport Date: 2026-07-08\nProduct: Glucagon Emergency Kit for Low Blood Sugar, Glucagon for Injection USP, 1mg per vial, Diluent for Glucagon, 1 mL syringe, Rx only, Manufactured for: Lupin Pharmaceuticals, Inc., Naples, FL 34108, Manufactured by: Lupin Limited, Nagpur - 441108, INDIA, NDC 70748-311-01\nReason: CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H194",
        "task": "CGMP deviation: OOS result observed for the Glidin에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.",
        "korean_interpretation": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Glucagon Emergency Kit for Low Blood Sugar, Glucagon for Inj 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0195",
    "doc_number": "D-0661-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Cipla USA, Inc.",
    "facility_location": "Warren, NJ",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치",
    "summary_kr": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 30 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0661-2026\nRecalling Firm: Cipla USA, Inc.\nLocation: Warren, United States\nReport Date: 2026-07-08\nProduct: Cinacalcet Hydrochloride Tablets, 30 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-410-02\nReason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H195",
        "task": "cGMP Deviations: presence of N-nitroso-cinacalcet,에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "korean_interpretation": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 30 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0196",
    "doc_number": "D-0658-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Asclemed USA Inc.",
    "facility_location": "Torrance, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Asclemed USA Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Accucaine, Kit contains: Lidocaine HCl Injection USP, 1% (10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0658-2026\nRecalling Firm: Asclemed USA Inc.\nLocation: Torrance, United States\nReport Date: 2026-07-08\nProduct: Accucaine, Kit contains: Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose ampule, Rx Only, Distributed by Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 76420-715-01.\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H196",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Accucaine, Kit contains: Lidocaine HCl Injection USP, 1% (10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0197",
    "doc_number": "D-0652-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0652-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) 100 x 10.5 mL Applicators/case, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-34, catalog number 930700NS.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H197",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0198",
    "doc_number": "D-0692-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] Microbial contamination of Non-Sterile Product: samples... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care Gel, Benzalkonium Chloride 0.1%, packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0692-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: Revitaderm Wound Care Gel, Benzalkonium Chloride 0.1%, packaged in 1.0 FL OZ (37 mL) bottle, shorter twist cap, Manufactured By: Blaine Labs, Inc. 11037 Lockport Place Santa Fe Springs, CA 90670, NDC 63347-120-02.\nReason: Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H198",
        "task": "Microbial contamination of Non-Sterile Product: sa에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care Gel, Benzalkonium Chloride 0.1%, packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0199",
    "doc_number": "D-0654-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Fexofenadine Hydrochloride Tablets, USP 180 mg, Antihistamin 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0654-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-07-08\nProduct: Fexofenadine Hydrochloride Tablets, USP 180 mg, Antihistamine, 150 Tablets per bottle, Distributed by: Ohm Laboratories, Inc., New Brunswick, NJ 08901. NDC 66336-561-30\nReason: Failed Impurities/Degradation Specifications\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H199",
        "task": "Failed Impurities/Degradation Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Fexofenadine Hydrochloride Tablets, USP 180 mg, Antihistamin 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0200",
    "doc_number": "D-0694-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIPENICOL S Antifungal Solution (Undecylenic Acid 25%), 1.2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0694-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: TRIPENICOL S Antifungal Solution (Undecylenic Acid 25%), 1.25 FL OZ (37.5 mL) bottle, Manufactured For: Trifluent Pharma, LLC, San Antonio, TX 78213,  NDC 73352-550-01.\nReason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H200",
        "task": "CGMP Deviations; the firm discontinued required st에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIPENICOL S Antifungal Solution (Undecylenic Acid 25%), 1.2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0201",
    "doc_number": "D-0651-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0651-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol),500 x 1 mL applicators/case,  STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-31, bulk catalog number 930480NSB\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H201",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0202",
    "doc_number": "D-0655-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lupin Pharmaceuticals Inc.",
    "facility_location": "Naples, FL",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Lupin Pharmaceuticals Inc.] Presence of Foreign Substance... 실사 및 리콜 조치",
    "summary_kr": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 prednisoLONE Acetate Ophthalmic Suspension, USP, 1%, Rx only 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0655-2026\nRecalling Firm: Lupin Pharmaceuticals Inc.\nLocation: Naples, United States\nReport Date: 2026-07-08\nProduct: prednisoLONE Acetate Ophthalmic Suspension, USP, 1%, Rx only, Sterile, a) 5 mL (NDC 70748-332-02); b) 10 mL (NDC 70748-332-03), c) 15 mL (70748-332-04), Manufactured by: Lupin Limited, Pithampur (M.P) 454 775, INDIA\nReason: Presence of Foreign Substance\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H202",
        "task": "Presence of Foreign Substance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Substance",
        "korean_interpretation": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 prednisoLONE Acetate Ophthalmic Suspension, USP, 1%, Rx only 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0203",
    "doc_number": "D-0699-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; product manufactured in the same facil... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care, First Aid Antiseptic Gel, Benzalkoniu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0699-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: Revitaderm Wound Care, First Aid Antiseptic Gel, Benzalkonium Chloride 0.1%) packaged as (a) 1.0 Fl OZ (16 mL) bottle, long pointy cap, NDC 63347-120-02; (b) 3.0 Fl OZ (85 g) tube, with short twist cap, NDC 63347-120-01; Manufactured By: Blaine Labs, Inc. 11037 Lockport Place, Santa Fe Springs, CA 90670,\nReason: CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H203",
        "task": "CGMP Deviations; product manufactured in the same 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care, First Aid Antiseptic Gel, Benzalkoniu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0204",
    "doc_number": "D-0650-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0650-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 25 x 26 mL applicators/case, NDC 54365-400-39, catalog number 930825NS, b)  50 x 26 mL applicators/case, NDC 54365-400-39, bulk catalog number 930825NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H204",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0205",
    "doc_number": "D-0656-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD HEALTHCARE, INC.",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3mg), 90 Table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0656-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-07-08\nProduct: Levothyroxine Sodium Tablets, USP, 300 mcg (0.3mg), 90 Tablets bottles, Rx only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: lntas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, INDIA, NDC 16729-458-15.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H205",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3mg), 90 Table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0206",
    "doc_number": "D-0644-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD PurPrep,  (Povidone-iodine 8.3% w/w (0.83% available iodi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0644-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD PurPrep,  (Povidone-iodine 8.3% w/w (0.83% available iodine) with isopropyl alcohol 72.5% w/w), 50 x 26 mL Applicator/case, STERILE SOLUTION, CAREFUSION 213, LLC, EL PASO, TX 79912, subsidiary of Beckton, Dickson and Co, Catalog Number 960120NSB; NDC 54365-014-42.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H206",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD PurPrep,  (Povidone-iodine 8.3% w/w (0.83% available iodi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0207",
    "doc_number": "D-0676-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Cipla USA, Inc.",
    "facility_location": "Warren, NJ",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치",
    "summary_kr": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 90 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0676-2026\nRecalling Firm: Cipla USA, Inc.\nLocation: Warren, United States\nReport Date: 2026-07-08\nProduct: Cinacalcet Hydrochloride Tablets, 90 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-412-02\nReason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H207",
        "task": "cGMP Deviations: presence of N-nitroso-cinacalcet,에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "korean_interpretation": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 90 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0208",
    "doc_number": "D-0675-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Cipla USA, Inc.",
    "facility_location": "Warren, NJ",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치",
    "summary_kr": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 60 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0675-2026\nRecalling Firm: Cipla USA, Inc.\nLocation: Warren, United States\nReport Date: 2026-07-08\nProduct: Cinacalcet Hydrochloride Tablets, 60 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-411-02\nReason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H208",
        "task": "cGMP Deviations: presence of N-nitroso-cinacalcet,에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "korean_interpretation": "Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 60 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0209",
    "doc_number": "D-0696-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 vite20 Antifungal Cream, (10% Undecylenic Acid), 0.54 OZ (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0696-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: vite20 Antifungal Cream, (10% Undecylenic Acid), 0.54 OZ (15 g) bottle, Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Sante Fe Springs, CA 90670, UPC 6 16728 00039 2.\nReason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H209",
        "task": "CGMP Deviations; the firm discontinued required st에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 vite20 Antifungal Cream, (10% Undecylenic Acid), 0.54 OZ (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0210",
    "doc_number": "D-0659-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Asclemed USA Inc.",
    "facility_location": "Torrance, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Asclemed USA Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0659-2026\nRecalling Firm: Asclemed USA Inc.\nLocation: Torrance, United States\nReport Date: 2026-07-08\nProduct: Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose ampule, Rx Only, Distributed by Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 85766-187-01.\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H210",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0211",
    "doc_number": "D-0653-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ACCORD BIOPHARMA INC",
    "facility_location": "Raleigh, NC",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[ACCORD BIOPHARMA INC] Lack of assurance of Sterility:... 실사 및 리콜 조치",
    "summary_kr": "ACCORD BIOPHARMA INC (Raleigh, United States) 제조소에서 IMULDOSA, (ustekinumab-srlf) Injection, 130 mg/26 mL (5mg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of Sterility:",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0653-2026\nRecalling Firm: ACCORD BIOPHARMA INC\nLocation: Raleigh, United States\nReport Date: 2026-07-08\nProduct: IMULDOSA, (ustekinumab-srlf) Injection, 130 mg/26 mL (5mg/mL), Rx only, Single dose vial, Manufactured by Accord BioPharma Inc., 8041 Arco corporate Drive, Suite 200, Raleigh, NC 27617, USA, Manufactured at: Catalent Indiana, LLC, 1300 S. Patterson Drive, Bloomington, IN 47403, USA, NDC 69448-019-26.\nReason: Lack of assurance of Sterility:\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H211",
        "task": "Lack of assurance of Sterility:에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of Sterility:",
        "korean_interpretation": "ACCORD BIOPHARMA INC (Raleigh, United States) 제조소에서 IMULDOSA, (ustekinumab-srlf) Injection, 130 mg/26 mL (5mg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of Sterility:",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0212",
    "doc_number": "D-0693-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations: product manufactured in the same facil... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIFLUENT PHARMA TRIDERGEL Wound Care Gel, (Benzalkonium Chl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0693-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: TRIFLUENT PHARMA TRIDERGEL Wound Care Gel, (Benzalkonium Chloride 0.1%), 1.0 fl oz, (29.6 mL) bottle with long pointy cap, Manufactured for: Trifluent Pharma, LLC. San Antonio, TX 78213. NDC 73352-520-01.\nReason: CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H212",
        "task": "CGMP Deviations: product manufactured in the same 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIFLUENT PHARMA TRIDERGEL Wound Care Gel, (Benzalkonium Chl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0213",
    "doc_number": "D-0695-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Blaine Labs Inc",
    "facility_location": "Santa Fe Springs, CA",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치",
    "summary_kr": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Cream (Undecylenic Acid 13%), 1.0 oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0695-2026\nRecalling Firm: Blaine Labs Inc\nLocation: Santa Fe Springs, United States\nReport Date: 2026-07-08\nProduct: TERPENICOL Antifungal Cream (Undecylenic Acid 13%), 1.0 oz (28 g) bottles, Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Sante Fe Springs, CA 90670, NDC 63347-601-01.\nReason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H213",
        "task": "CGMP Deviations; the firm discontinued required st에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "korean_interpretation": "Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Cream (Undecylenic Acid 13%), 1.0 oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0214",
    "doc_number": "D-0647-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0647-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 100 x 3 mL applicators/case, NDC 54365-400-33, calatog 930415NS: b) 250 x 3mL applicators/case, bulk catalog number 930415NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H214",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0215",
    "doc_number": "D-0714-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "McKesson",
    "facility_location": "Irving, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[McKesson] Temperature Abuse: Product was stored incorrectly in a ... 실사 및 리콜 조치",
    "summary_kr": "McKesson (Irving, United States) 제조소에서 Gemcitabine Injection, 1 g per 26.3 mL (38 mg/mL), 26.3 mL S 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0714-2026\nRecalling Firm: McKesson\nLocation: Irving, United States\nReport Date: 2026-07-08\nProduct: Gemcitabine Injection, 1 g per 26.3 mL (38 mg/mL), 26.3 mL Single-Dose Vial, For Intravenous Infusion ONLY, Rx only, Manufactured by: THYMOORGAN PHARMAZIE GmbH, Schiffgraben 23, 38690 Goslar, Germany; Distributed by: Hikma, Berkeley Heights, NJ 07922.  NDC: 0143-9341-01\nReason: Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H215",
        "task": "Temperature Abuse: Product was stored incorrectly 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.",
        "korean_interpretation": "McKesson (Irving, United States) 제조소에서 Gemcitabine Injection, 1 g per 26.3 mL (38 mg/mL), 26.3 mL S 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0216",
    "doc_number": "D-0649-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0649-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 100 x 10.5 mL Applicators/case, NDC 54365-400-36, catalog number 930725NS; b) 100 x 10.5 mL Applicators/case, bulk catalog number 930725NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H216",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0217",
    "doc_number": "D-0648-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0648-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as: a) 25 x 26 mL applicators/case, NDC 54365-400-38, calatog number 930815NS: b) 50 x 26 mL appliactors/case, bulk catalog number 930815NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H217",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0218",
    "doc_number": "D-0645-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0645-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-08\nProduct: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG), and 70% v/v isopropyl alcohol (IPA), Packaged as a) 100 x 3ml applicators/case, NDC 54365-400-32, catalog 930400NS; b) 250 x 3ml applicators/case, NDC 54365-400-32, bulk Catalog 930500NSB, Sterile Solution, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.\nReason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H218",
        "task": "Lack of assurance of sterility: Unsterilized Chlor에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instea",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0219",
    "doc_number": "D-0660-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Lannett Company Inc.",
    "facility_location": "Seymour, IN",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Lannett Company Inc.] Labeling: Label Mix-up: Capsules contain only immediate... 실사 및 리콜 조치",
    "summary_kr": "Lannett Company Inc. (Seymour, United States) 제조소에서 Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0660-2026\nRecalling Firm: Lannett Company Inc.\nLocation: Seymour, United States\nReport Date: 2026-07-08\nProduct: Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydrate, Dextroamphetamine Sulfate and Amphetamine Sulfate Extended-Release Capsules, 5 mg, Rx Only, 100 capsules, Distributed by: Lannett Company, Inc., Philadelphia, PA 19136, NDC: 0527-0790-37.\nReason: Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H219",
        "task": "Labeling: Label Mix-up: Capsules contain only imme에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.",
        "korean_interpretation": "Lannett Company Inc. (Seymour, United States) 제조소에서 Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0220",
    "doc_number": "D-0657-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Boehringer Ingelheim Pharmaceuticals, Inc.",
    "facility_location": "Ridgefield, CT",
    "country": "United States",
    "issue_date": "2026-07-08",
    "title_kr": "[Boehringer Ingelheim Pharmaceuticals, Inc.] CGMP Deviations: An incorrect detergent was used and th... 실사 및 리콜 조치",
    "summary_kr": "Boehringer Ingelheim Pharmaceuticals, Inc. (Ridgefield, United States) 제조소에서 Synjardy XR Tablets (empagliflozin and metformin hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously been used for a different product.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0657-2026\nRecalling Firm: Boehringer Ingelheim Pharmaceuticals, Inc.\nLocation: Ridgefield, United States\nReport Date: 2026-07-08\nProduct: Synjardy XR Tablets (empagliflozin and metformin hydrochloride extended-release tablets), 12.5/1000 mg, 60 Tablets per Bottle, Rx only, Distributed by: Boehringer Ingelheim Pharmaceuticals, Inc., Ridgefield, CT 06877 USA.  NDC: 00597-0300-45\nReason: CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously been used for a different product.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H220",
        "task": "CGMP Deviations: An incorrect detergent was used a에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously",
        "korean_interpretation": "Boehringer Ingelheim Pharmaceuticals, Inc. (Ridgefield, United States) 제조소에서 Synjardy XR Tablets (empagliflozin and metformin hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously been used for a different product.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0221",
    "doc_number": "D-0626-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Annora Pharma Private Limited",
    "facility_location": "Hyderabad, N/A",
    "country": "India",
    "issue_date": "2026-07-01",
    "title_kr": "[Annora Pharma Private Limited] Presence of a Foreign Tablets: Complaint received, poss... 실사 및 리콜 조치",
    "summary_kr": "Annora Pharma Private Limited (Hyderabad, India) 제조소에서 Lacosamide Tablets, USP, C V, 100mg, Rx only, 60-count bottl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0626-2026\nRecalling Firm: Annora Pharma Private Limited\nLocation: Hyderabad, India\nReport Date: 2026-07-01\nProduct: Lacosamide Tablets, USP, C V, 100mg, Rx only, 60-count bottle, By: Annora Pharma Pvt., Ltd, Sangareddy -502313, Telangana, India, Manufactured for: Camber Pharmaceuticals, Inc., Piscataway, NJ 08854, NDC 31722-813-60.\nReason: Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H221",
        "task": "Presence of a Foreign Tablets: Complaint received,에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg",
        "korean_interpretation": "Annora Pharma Private Limited (Hyderabad, India) 제조소에서 Lacosamide Tablets, USP, C V, 100mg, Rx only, 60-count bottl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0222",
    "doc_number": "D-0615-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amgen, Inc.",
    "facility_location": "Thousand Oaks, CA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Amgen, Inc.] Presence of Foreign Substance.... 실사 및 리콜 조치",
    "summary_kr": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 7.5mg, 60-count bottles, Rx O 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0615-2026\nRecalling Firm: Amgen, Inc.\nLocation: Thousand Oaks, United States\nReport Date: 2026-07-01\nProduct: Corlanor (ivabradine) tablets, 7.5mg, 60-count bottles, Rx Only, Amgen Inc., Thousand Oaks, CA 92130 Made In Italy. NDC 55513-810-60\nReason: Presence of Foreign Substance.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H222",
        "task": "Presence of Foreign Substance.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Substance.",
        "korean_interpretation": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 7.5mg, 60-count bottles, Rx O 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0223",
    "doc_number": "D-0612-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amgen, Inc.",
    "facility_location": "Thousand Oaks, CA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Amgen, Inc.] Presence of Foreign Substance.... 실사 및 리콜 조치",
    "summary_kr": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 5 mg, packaged in a) 14 table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0612-2026\nRecalling Firm: Amgen, Inc.\nLocation: Thousand Oaks, United States\nReport Date: 2026-07-01\nProduct: Corlanor (ivabradine) tablets, 5 mg, packaged in a) 14 tablets bottles (NDC 55513-800-99), and b) 60 tablet bottles (NDC 55513-800-60), Rx Only, Amgen Inc., Thousand Oaks, CA 92130 Made In Italy.\nReason: Presence of Foreign Substance.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H223",
        "task": "Presence of Foreign Substance.에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Substance.",
        "korean_interpretation": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 5 mg, packaged in a) 14 table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0224",
    "doc_number": "D-0622-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[CareFusion 213, LLC] Lack of Assurance of Sterility: Due to wrinkles in the ... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0622-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-01\nProduct: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA) 1 mL Applicator, 60 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-31.\nReason: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H224",
        "task": "Lack of Assurance of Sterility: Due to wrinkles in에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0225",
    "doc_number": "D-0611-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ajanta Pharma USA Inc",
    "facility_location": "Bridgewater, NJ",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Ajanta Pharma USA Inc] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fenofibrate Capsules, USP 200 mg, Rx only, 100 Capsules, Man 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0611-2026\nRecalling Firm: Ajanta Pharma USA Inc\nLocation: Bridgewater, United States\nReport Date: 2026-07-01\nProduct: Fenofibrate Capsules, USP 200 mg, Rx only, 100 Capsules, Manufactured by: Ajanta Pharma Limited, India, Marketed by: Ajanta Pharma USA Inc. Bridgewater, NJ 08807, NDC 27241-120-04.\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H225",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fenofibrate Capsules, USP 200 mg, Rx only, 100 Capsules, Man 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0226",
    "doc_number": "D-0614-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amgen, Inc.",
    "facility_location": "Thousand Oaks, CA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 60mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0614-2026\nRecalling Firm: Amgen, Inc.\nLocation: Thousand Oaks, United States\nReport Date: 2026-07-01\nProduct: Sensipar (cinacalcet) Tablets, 60mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks ,CA 91320-1799, Made in Japan. NDC 55513-074-30\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H226",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 60mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0227",
    "doc_number": "D-0627-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Elevate Oral Care",
    "facility_location": "West Palm Beach, FL",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Elevate Oral Care] sub potency... 실사 및 리콜 조치",
    "summary_kr": "Elevate Oral Care (West Palm Beach, United States) 제조소에서 Povi-One, 10% Povidone-Iodine Oral Antiseptic, Packaged by E 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: sub potency",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0627-2026\nRecalling Firm: Elevate Oral Care\nLocation: West Palm Beach, United States\nReport Date: 2026-07-01\nProduct: Povi-One, 10% Povidone-Iodine Oral Antiseptic, Packaged by Elevate Oral Care, LLC, 346 Pike Road, Suite 6, West Palm Beach, FL 33411, NDC 57511-0611-1.\nReason: sub potency\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H227",
        "task": "sub potency에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "sub potency",
        "korean_interpretation": "Elevate Oral Care (West Palm Beach, United States) 제조소에서 Povi-One, 10% Povidone-Iodine Oral Antiseptic, Packaged by E 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: sub potency",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0228",
    "doc_number": "D-0617-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Direct Rx",
    "facility_location": "Dawsonville, GA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Direct Rx] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치",
    "summary_kr": "Direct Rx (Dawsonville, United States) 제조소에서 DULOXETINE D/R, a) 30 mg (NDC 61919-482-30), 30 Caps; b) 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0617-2026\nRecalling Firm: Direct Rx\nLocation: Dawsonville, United States\nReport Date: 2026-07-01\nProduct: DULOXETINE D/R, a) 30 mg (NDC 61919-482-30), 30 Caps; b) 30 mg (NDC 61919-482-60), 60 Caps; CYMBALTA, Packaged and Distributed by Direct Rx.\nReason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H228",
        "task": "CGMP Deviations: Presence of N-nitroso-duloxetine 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "korean_interpretation": "Direct Rx (Dawsonville, United States) 제조소에서 DULOXETINE D/R, a) 30 mg (NDC 61919-482-30), 30 Caps; b) 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0229",
    "doc_number": "D-0623-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[CareFusion 213, LLC] Lack of Assurance of Sterility: Due to wrinkles in the ... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear, (2% w/v chlorhexidine gluconate ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0623-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-01\nProduct: BD ChloraPrep FREPP Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)  1.5 mL Applicator, 20 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-30.\nReason: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H229",
        "task": "Lack of Assurance of Sterility: Due to wrinkles in에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear, (2% w/v chlorhexidine gluconate ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0230",
    "doc_number": "D-0618-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Central Admixture Pharmacy Services, Inc.",
    "facility_location": "Woburn, MA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Central Admixture Pharmacy Services, Inc.] Incorrect product formulation: bag did not contain copp... 실사 및 리콜 조치",
    "summary_kr": "Central Admixture Pharmacy Services, Inc. (Woburn, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect product formulation: bag did not contain copper and famotidine per label.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0618-2026\nRecalling Firm: Central Admixture Pharmacy Services, Inc.\nLocation: Woburn, United States\nReport Date: 2026-07-01\nProduct: Total Parental Nutrition - Pediatric PN Patient-Specific TPN Bag, (patient specific), Rx# 24-1269856-0-1Compound Volume 1295 mL per bag, Rx only, Single Dose Injection, Refrigerated Injection, Central Admixture Pharmacy Services, Boston, 55 6th Rd Woburn, Massachusetts 01801-1767.\nReason: Incorrect product formulation: bag did not contain copper and famotidine per label.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H230",
        "task": "Incorrect product formulation: bag did not contain에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Incorrect product formulation: bag did not contain copper and famotidine per label.",
        "korean_interpretation": "Central Admixture Pharmacy Services, Inc. (Woburn, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect product formulation: bag did not contain copper and famotidine per label.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0231",
    "doc_number": "D-0609-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "The Harvard Drug Group LLC",
    "facility_location": "Dublin, OH",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[The Harvard Drug Group LLC] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "The Harvard Drug Group LLC (Dublin, United States) 제조소에서 Carton Label: MAJOR, Methylergonovine Maleate Tablets, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0609-2026\nRecalling Firm: The Harvard Drug Group LLC\nLocation: Dublin, United States\nReport Date: 2026-07-01\nProduct: Carton Label: MAJOR, Methylergonovine Maleate Tablets, USP, 0.2 mg, 20 TABLETS (2 x 10), Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, in 46268, NDC 0904-7282-10.  Blister Label: Methylergonovine Maleate Tablets, 0.2 mg, USP, One Tablet, Major Pharm/Indianapolis, IN 46268, NDC 0904-7282-10.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H231",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "The Harvard Drug Group LLC (Dublin, United States) 제조소에서 Carton Label: MAJOR, Methylergonovine Maleate Tablets, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0232",
    "doc_number": "D-0621-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "PReye LLC",
    "facility_location": "Wheat Ridge, CO",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[PReye LLC] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "PReye LLC (Wheat Ridge, United States) 제조소에서 PReye Vitamin See Antioxidant Preservative Free Eye Drops, D 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0621-2026\nRecalling Firm: PReye LLC\nLocation: Wheat Ridge, United States\nReport Date: 2026-07-01\nProduct: PReye Vitamin See Antioxidant Preservative Free Eye Drops, Distributed by: PReye, LLC, Golden, CO\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H232",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "PReye LLC (Wheat Ridge, United States) 제조소에서 PReye Vitamin See Antioxidant Preservative Free Eye Drops, D 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0233",
    "doc_number": "D-0624-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[CareFusion 213, LLC] Non-Sterility: Due to presence of Aspergillus penicilli... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear (2% w/v chlorhexidine gluconate (CHG) an 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0624-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-01\nProduct: BD ChloraPrep Clear (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)), 1 mL Applicator, 60 Applicators per inner Carton, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-31.\nReason: Non-Sterility: Due to presence of Aspergillus penicillioides.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H233",
        "task": "Non-Sterility: Due to presence of Aspergillus peni에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Non-Sterility: Due to presence of Aspergillus penicillioides.",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear (2% w/v chlorhexidine gluconate (CHG) an 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0234",
    "doc_number": "D-0619-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "ANI Pharmaceuticals, Inc.",
    "facility_location": "Baudette, MN",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[ANI Pharmaceuticals, Inc.] Presence of foreign substance... 실사 및 리콜 조치",
    "summary_kr": "ANI Pharmaceuticals, Inc. (Baudette, United States) 제조소에서 hydrOXYzine Hydrochloride Oral Solution, USP, 10 mg/5 mL, 47 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0619-2026\nRecalling Firm: ANI Pharmaceuticals, Inc.\nLocation: Baudette, United States\nReport Date: 2026-07-01\nProduct: hydrOXYzine Hydrochloride Oral Solution, USP, 10 mg/5 mL, 473 mL (1 Pint), Rx only, Distributed by: ANI Pharmaceuticals, Inc., Baudette, MN 56623.  NDC: 70954-912-10\nReason: Presence of foreign substance\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H234",
        "task": "Presence of foreign substance에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance",
        "korean_interpretation": "ANI Pharmaceuticals, Inc. (Baudette, United States) 제조소에서 hydrOXYzine Hydrochloride Oral Solution, USP, 10 mg/5 mL, 47 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0235",
    "doc_number": "D-0628-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Labeling: Label Mix-up: 10mg Perampanel CIII tablet was... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Perampanel CIII Tablets, 6mg, Rx only, 30 Tablets, Mfd.by: T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0628-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-07-01\nProduct: Perampanel CIII Tablets, 6mg, Rx only, 30 Tablets, Mfd.by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761, Dist. by: Sun Pharmaceutical Industries, Inc., Cranbury, NJ 08512, NDC 51672-4206-6\nReason: Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H235",
        "task": "Labeling: Label Mix-up: 10mg Perampanel CIII table에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Perampanel CIII Tablets, 6mg, Rx only, 30 Tablets, Mfd.by: T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0236",
    "doc_number": "D-0616-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amgen, Inc.",
    "facility_location": "Thousand Oaks, CA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 90mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0616-2026\nRecalling Firm: Amgen, Inc.\nLocation: Thousand Oaks, United States\nReport Date: 2026-07-01\nProduct: Sensipar (cinacalcet) Tablets, 90mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks, CA 91320-1799, Made in Japan. NDC 55513-075-30\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H236",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 90mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0237",
    "doc_number": "D-0613-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amgen, Inc.",
    "facility_location": "Thousand Oaks, CA",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치",
    "summary_kr": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 30mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0613-2026\nRecalling Firm: Amgen, Inc.\nLocation: Thousand Oaks, United States\nReport Date: 2026-07-01\nProduct: Sensipar (cinacalcet) Tablets, 30mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks ,CA 91320-1799, Made in Japan. NDC 55513-073-30\nReason: CGMP Deviations\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H237",
        "task": "CGMP Deviations에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations",
        "korean_interpretation": "Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 30mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0238",
    "doc_number": "D-0625-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "CareFusion 213, LLC",
    "facility_location": "El Paso, TX",
    "country": "United States",
    "issue_date": "2026-07-01",
    "title_kr": "[CareFusion 213, LLC] Non-Sterility: Due to presence of Aspergillus penicilli... 실사 및 리콜 조치",
    "summary_kr": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear,(2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0625-2026\nRecalling Firm: CareFusion 213, LLC\nLocation: El Paso, United States\nReport Date: 2026-07-01\nProduct: BD ChloraPrep FREPP Clear,(2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)) 1.5 mL Applicator, 20 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-30.\nReason: Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H238",
        "task": "Non-Sterility: Due to presence of Aspergillus peni에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which",
        "korean_interpretation": "CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear,(2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0239",
    "doc_number": "D-0602-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 DHP Topical Anesthetic Gel, Benzocaine 20%, Strawberry Flavo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0602-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: DHP Topical Anesthetic Gel, Benzocaine 20%, Strawberry Flavor, 1 oz. (30 g), Manufactured for and Distributed by Dental Health Products, Inc, 2614 North Sugar Bush Road, New Franken, WI 54229. NDC 69634-020-30\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H239",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 DHP Topical Anesthetic Gel, Benzocaine 20%, Strawberry Flavo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0240",
    "doc_number": "D-0640-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 1 oz (28.3g) tub 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0640-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 1 oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30503 0.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H240",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 1 oz (28.3g) tub 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0241",
    "doc_number": "D-0605-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 PureLife, TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, 1 oz (30m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0605-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: PureLife, TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, 1 oz (30mL), Strawberry Flavor, Manufactured for Pure Life, LLC,  Manufactured for PureLife LLC., Carson, CA 90810. NDC 68987-001-30\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H241",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 PureLife, TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, 1 oz (30m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0242",
    "doc_number": "D-0633-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Rapidol, Triple Antibiotic First Aid Ointment, Bacitracin Zi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0633-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Rapidol, Triple Antibiotic First Aid Ointment, Bacitracin Zinc 400 units, Neomycin Sulfate 3.5 mg, Polymyxin-B Sulfate 5,000 units, net wt. 2oz (57g) tubes, Distributed by/por: Pharmadel LLC, New Castle, DE 19720, Made in India, UPC 8 10096 77162 9.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H242",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Rapidol, Triple Antibiotic First Aid Ointment, Bacitracin Zi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0243",
    "doc_number": "D-0641-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc (equi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0641-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc (equivalent to 400 units), Neomycin Sulfate 5 mg, Polymixin B 5000 units, 0.9g packets, 144 packets per box, 130g, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 1 03 52410 30253 1.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H243",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc (equi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0244",
    "doc_number": "D-0630-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, First Aid Triple Antibiotic Ointment, Baci 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0630-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Lucky Super Soft, First Aid Triple Antibiotic Ointment, Bacitracin zinc 400 units, neomycin sulphate 3.5 mg, polymyxin B sulphate 5000 units, Net Wt. 0.5 oz (14g) tubes, Manufactured for Delta Brands Inc., 580 White Plains Rd., Tarrytown, NY 10591 USA, Made in India, UPC 8 08829 10372 4.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H244",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, First Aid Triple Antibiotic Ointment, Baci 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0245",
    "doc_number": "D-0637-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 1oz (28.3g) per tube, 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0637-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, Bacitracin Zinc Ointment, 1oz (28.3g) per tube, 72 tubes per case, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC X004WB4LKT.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H245",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 1oz (28.3g) per tube, 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0246",
    "doc_number": "D-0593-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "IntegraDose Compounding Services LLC",
    "facility_location": "Shoreview, MN",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[IntegraDose Compounding Services LLC] Subpotent Drug... 실사 및 리콜 조치",
    "summary_kr": "IntegraDose Compounding Services LLC (Shoreview, United States) 제조소에서 Vasopressin 2 Units/2 mL in 0.9% Sodium Chloride, syringe, I 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
    "severity_level": "MAJOR",
    "process_types": [
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0593-2026\nRecalling Firm: IntegraDose Compounding Services LLC\nLocation: Shoreview, United States\nReport Date: 2026-06-24\nProduct: Vasopressin 2 Units/2 mL in 0.9% Sodium Chloride, syringe, IntegraDose Compounding Services, LLC. 3650 Victoria St N, Suite 900, Shoreview, MN, NDC 71139-0190-1.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H246",
        "task": "Subpotent Drug에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Subpotent Drug",
        "korean_interpretation": "IntegraDose Compounding Services LLC (Shoreview, United States) 제조소에서 Vasopressin 2 Units/2 mL in 0.9% Sodium Chloride, syringe, I 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0247",
    "doc_number": "D-0610-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Inventia Healthcare Limited",
    "facility_location": "Kalyan",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Inventia Healthcare Limited] Failed Dissolution Specifications... 실사 및 리콜 조치",
    "summary_kr": "Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, [100 or 1000] Tablets pr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0610-2026\nRecalling Firm: Inventia Healthcare Limited\nLocation: Kalyan, India\nReport Date: 2026-06-24\nProduct: Chlorthalidone Tablets, USP, 25 mg, [100 or 1000] Tablets pr bottle, Rx only, Manufactured by: Inventia Healthcare Limited, Additional Ambernath, M.I.D.C., Ambernath (East) - 421506, INDIA.  Distributed by: Risiong Pharma Holdings, Inc., East Brunswick, NJ 08816.  NDC 100-tablet bottle: 64980-599-01; NDC 1000-tablet bottle: 64980-599-10\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H247",
        "task": "Failed Dissolution Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications",
        "korean_interpretation": "Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, [100 or 1000] Tablets pr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0248",
    "doc_number": "D-0601-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 Quala Dental Products, Topical Anesthetic Gel, 20 % Benzocai 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0601-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: Quala Dental Products, Topical Anesthetic Gel, 20 % Benzocaine, Strawberry Flavor Net Contents: 1 oz (30 g), Quala Dental Products, Made in USA for NDC Inc., 407 Sanford Road, Le Vergne, TN 37086, NDC 43128-034-30.\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H248",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 Quala Dental Products, Topical Anesthetic Gel, 20 % Benzocai 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0249",
    "doc_number": "D-0629-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, Antifungal Athlete's Foot Cream, Clotrimaz 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0629-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Lucky Super Soft, Antifungal Athlete's Foot Cream, Clotrimazole 1% Cream, Net Wt. 1.5 oz (42.5g) Tubes, Manufactured for Delta Brands Inc., 580 White Plains Rd., Tarrytown, NY 10591 USA, Made in India, UPC 8 08829 10461 5.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H249",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, Antifungal Athlete's Foot Cream, Clotrimaz 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0250",
    "doc_number": "D-0639-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 16oz (454g) tube 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0639-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 16oz (454g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 305061.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H250",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 16oz (454g) tube 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0251",
    "doc_number": "D-0636-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 1oz (28.3g)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0636-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, Bacitracin Zinc Ointment, 500 units, 1oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30354 8.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H251",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 1oz (28.3g)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0252",
    "doc_number": "D-0590-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "PAI Holdings LLC",
    "facility_location": "Greenville, SC",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치",
    "summary_kr": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0590-2026\nRecalling Firm: PAI Holdings LLC\nLocation: Greenville, United States\nReport Date: 2026-06-24\nProduct: VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY FLAVOR, 50 Grams Activated Charcoal in 240 ml (8 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-202-08.\nReason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H252",
        "task": "Does Not Meet USP or OTC Monograph: Product did no에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "korean_interpretation": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0253",
    "doc_number": "D-0591-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "PAI Holdings LLC",
    "facility_location": "Greenville, SC",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치",
    "summary_kr": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0591-2026\nRecalling Firm: PAI Holdings LLC\nLocation: Greenville, United States\nReport Date: 2026-06-24\nProduct: VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY FLAVOR, 25 Grams Activated Charcoal in 26 Grams Sorbitol in 120 mL (4 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-203-04.\nReason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H253",
        "task": "Does Not Meet USP or OTC Monograph: Product did no에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "korean_interpretation": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0254",
    "doc_number": "D-0589-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "PAI Holdings LLC",
    "facility_location": "Greenville, SC",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치",
    "summary_kr": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0589-2026\nRecalling Firm: PAI Holdings LLC\nLocation: Greenville, United States\nReport Date: 2026-06-24\nProduct: VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY FLAVOR, 25 Grams Activated Charcoal in 120 ml (4 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-202-04.\nReason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H254",
        "task": "Does Not Meet USP or OTC Monograph: Product did no에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "korean_interpretation": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0255",
    "doc_number": "D-0594-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ajanta Pharma USA Inc",
    "facility_location": "Bridgewater, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Ajanta Pharma USA Inc] Product Mix-Up:  A bottle containing Voriconazole Table... 실사 및 리콜 조치",
    "summary_kr": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Aripiprazole Tablets USP, Rx only, 30 mg, 30 tablets, Market 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0594-2026\nRecalling Firm: Ajanta Pharma USA Inc\nLocation: Bridgewater, United States\nReport Date: 2026-06-24\nProduct: Aripiprazole Tablets USP, Rx only, 30 mg, 30 tablets, Marketed by: Ajanta Pharma USA Inc., Bridgewater, NJ 08807, Made in India, NDC 27241-056-03.\nReason: Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H255",
        "task": "Product Mix-Up:  A bottle containing Voriconazole 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.",
        "korean_interpretation": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Aripiprazole Tablets USP, Rx only, 30 mg, 30 tablets, Market 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0256",
    "doc_number": "D-0603-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 Burkhart topical anesthetic gel, benzocaine 20 %, Strawberry 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0603-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: Burkhart topical anesthetic gel, benzocaine 20 %, Strawberry Flavor, 1 oz (30 mL), Manufactured for Burkhart Dental Supply, Tacoma, Washington, 98409. NDC: 43498-310-30\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H256",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 Burkhart topical anesthetic gel, benzocaine 20 %, Strawberry 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0257",
    "doc_number": "D-0604-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 Dental City TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, Strawbe 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0604-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: Dental City TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, Strawberry Flavor, 1 OZ (30 g), Distributed by Dental City, 3205 Yeager Dr., Green Bay, WI 54311. NDC 69483-001-30\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H257",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 Dental City TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, Strawbe 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0258",
    "doc_number": "D-0632-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lil Drug Store, Triple Antibiotic Ointment, Bacitracin Zinc  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0632-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Lil Drug Store, Triple Antibiotic Ointment, Bacitracin Zinc (400 units), Neomycin Sulfate (3.5 mg), Polymyxin-B Sulfate (5000 units), net wt. 0.5 oz (14.2g), Product distributed by: Lil' Drug Store Products, Inc., 9300 Earhart Lane SW, Cedar Rapids, IA 52404, Made in India, UPC 3 66715 97310 8.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H258",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lil Drug Store, Triple Antibiotic Ointment, Bacitracin Zinc  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0259",
    "doc_number": "D-0606-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 safco SensiCaine-Ultra (20% Benzocaine), Topical Anesthetic  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0606-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: safco SensiCaine-Ultra (20% Benzocaine), Topical Anesthetic Gel, Strawberry Flavor, 1 oz. (29.6mL),   Distributed by: Safco Dental Supply Co., Buffalo Grove, IL 60099, Made in USA, NDC 67239-0223-1.\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H259",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 safco SensiCaine-Ultra (20% Benzocaine), Topical Anesthetic  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0260",
    "doc_number": "D-0638-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, 1% Clotrimazole Antifungal Cream, Net Wt. 1oz (28 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0638-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, 1% Clotrimazole Antifungal Cream, Net Wt. 1oz (28.3g), Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 524103 0244 2.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H260",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, 1% Clotrimazole Antifungal Cream, Net Wt. 1oz (28 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0261",
    "doc_number": "D-0608-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Sandoz Inc",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Sandoz Inc] Labeling: Incorrect or Missing Lot and/or Exp Date... 실사 및 리콜 조치",
    "summary_kr": "Sandoz Inc (Princeton, United States) 제조소에서 Focalin XR (dexmethylphenidate HCl) 5 mg, 30 extended-releas 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Incorrect or Missing Lot and/or Exp Date",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0608-2026\nRecalling Firm: Sandoz Inc\nLocation: Princeton, United States\nReport Date: 2026-06-24\nProduct: Focalin XR (dexmethylphenidate HCl) 5 mg, 30 extended-release capsules per bottle, Rx only, Manufactured by Societal CDMO Gainesville, LLC, Gainesville, GA 30504.  NDC: 66758-235-31\nReason: Labeling: Incorrect or Missing Lot and/or Exp Date\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H261",
        "task": "Labeling: Incorrect or Missing Lot and/or Exp Date에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Incorrect or Missing Lot and/or Exp Date",
        "korean_interpretation": "Sandoz Inc (Princeton, United States) 제조소에서 Focalin XR (dexmethylphenidate HCl) 5 mg, 30 extended-releas 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Incorrect or Missing Lot and/or Exp Date",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0262",
    "doc_number": "D-0642-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc 400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0642-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc 400 units, Neomycin Sulfate 5 mg, Polymyxin B 5000 units, 1oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30255 8.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H262",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc 400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0263",
    "doc_number": "D-0588-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Glenmark Pharmaceuticals Inc., USA",
    "facility_location": "Elmwood Park, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Glenmark Pharmaceuticals Inc., USA] Failed Impurities/Degradation Specifications: This reca... 실사 및 리콜 조치",
    "summary_kr": "Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Alyacen 7/7/7, Norethindrone and Ethinyl Estradiol Tablets U 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0588-2026\nRecalling Firm: Glenmark Pharmaceuticals Inc., USA\nLocation: Elmwood Park, United States\nReport Date: 2026-06-24\nProduct: Alyacen 7/7/7, Norethindrone and Ethinyl Estradiol Tablets USP, 0.5mg/0.035mg, 0.75mg/0.035mg, 1 mg/0.0.35mg, 3 Blister Cards each containing 28 tablets, 28 day regimen, Rx only, Manufactured by: Glenmark Pharmaceuticals Ltd., Colvale-Bardez, Goa 403 513, India, Manufactured for: Glenmark Pharmaceuticals Inc., Mahwah, NJ 07430, NDC 68462-556-29\nReason: Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H263",
        "task": "Failed Impurities/Degradation Specifications: This에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.",
        "korean_interpretation": "Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Alyacen 7/7/7, Norethindrone and Ethinyl Estradiol Tablets U 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0264",
    "doc_number": "D-0631-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Circle K, triple antibiotic ointment, Bacitracin Zinc (400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "원료(API)"
    ],
    "violation_codes_fda": [],
    "violation_codes_kgmp": [],
    "raw_text": "FDA Enforcement Notice: D-0631-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Circle K, triple antibiotic ointment, Bacitracin Zinc (400 units), Neomycin Sulfate (3.5 mg), Polymyxin-B Sulfate (5000 units), net wt. 0.5 oz (14.2g) tubes, Product manufactured for Lil' Drug Store Products, Inc., 9300 Earhart Lane SW, Cedar Rapids, IA 52404, Made in India, UPC 1 94283 65181 0.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H264",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Circle K, triple antibiotic ointment, Bacitracin Zinc (400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0265",
    "doc_number": "D-0596-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Par Health USA, LLC",
    "facility_location": "Rochester, MI",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Par Health USA, LLC] Crystallization; identified as Buprenorphine free base... 실사 및 리콜 조치",
    "summary_kr": "Par Health USA, LLC (Rochester, United States) 제조소에서 Buprenorphine HCl, CIII, Injection, 0.3 mg/mL, 5 x 1 mL Sing 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Crystallization; identified as Buprenorphine free base",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0596-2026\nRecalling Firm: Par Health USA, LLC\nLocation: Rochester, United States\nReport Date: 2026-06-24\nProduct: Buprenorphine HCl, CIII, Injection, 0.3 mg/mL, 5 x 1 mL Single Dose Vials per Carton, Rx Only, For Intramuscular or Intravenous use, Manufactured for: Endo USA, Malvern, PA 19355,  NDC 42023-179-05\nReason: Crystallization; identified as Buprenorphine free base\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H265",
        "task": "Crystallization; identified as Buprenorphine free 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Crystallization; identified as Buprenorphine free base",
        "korean_interpretation": "Par Health USA, LLC (Rochester, United States) 제조소에서 Buprenorphine HCl, CIII, Injection, 0.3 mg/mL, 5 x 1 mL Sing 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Crystallization; identified as Buprenorphine free base",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0266",
    "doc_number": "D-0600-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Keystone Industries",
    "facility_location": "Gibbstown, NJ",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치",
    "summary_kr": "Keystone Industries (Gibbstown, United States) 제조소에서 Pearson Quality Topical Anesthetic Gel (20% Benzocaine), Min 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0600-2026\nRecalling Firm: Keystone Industries\nLocation: Gibbstown, United States\nReport Date: 2026-06-24\nProduct: Pearson Quality Topical Anesthetic Gel (20% Benzocaine), Mint Flavor, Net Contents: 1 oz (3o g), Manufactured for: Pearson Dental Supply Inc., Sylmar, CA 91342 USA, NDC 43305-0009-3.\nReason: Defective container:may contain bottles with incomplete seals\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H266",
        "task": "Defective container:may contain bottles with incom에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Defective container:may contain bottles with incomplete seals",
        "korean_interpretation": "Keystone Industries (Gibbstown, United States) 제조소에서 Pearson Quality Topical Anesthetic Gel (20% Benzocaine), Min 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0267",
    "doc_number": "D-0592-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "PAI Holdings LLC",
    "facility_location": "Greenville, SC",
    "country": "United States",
    "issue_date": "2026-06-24",
    "title_kr": "[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치",
    "summary_kr": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0592-2026\nRecalling Firm: PAI Holdings LLC\nLocation: Greenville, United States\nReport Date: 2026-06-24\nProduct: VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY FLAVOR, 50 Grams Activated Charcoal in 52 Grams Sorbitol in 240 mL (8 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-203-08.\nReason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H267",
        "task": "Does Not Meet USP or OTC Monograph: Product did no에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "korean_interpretation": "PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0268",
    "doc_number": "D-0634-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Cura Hongos, Crema Antifungica, Clotrimazole 1%, 2oz (57g) t 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0634-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Cura Hongos, Crema Antifungica, Clotrimazole 1%, 2oz (57g) tubes, Dist by/por: Pharmadel LLC, New Castle, DE 19720, Made in India, UPC 8 52924 00683 1.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H268",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Cura Hongos, Crema Antifungica, Clotrimazole 1%, 2oz (57g) t 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0269",
    "doc_number": "D-0635-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Dabur India Limited",
    "facility_location": "Dadra And Nagar Haveli",
    "country": "India",
    "issue_date": "2026-06-24",
    "title_kr": "[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치",
    "summary_kr": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 0.9g packets 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0635-2026\nRecalling Firm: Dabur India Limited\nLocation: Dadra And Nagar Haveli, India\nReport Date: 2026-06-24\nProduct: Med Pride, Bacitracin Zinc Ointment, 500 units, 0.9g packets Net Wt 130g, 144 count box, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30352 4.\nReason: CGMP Deviations; deficiencies observed during FDA inspection\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H269",
        "task": "CGMP Deviations; deficiencies observed during FDA 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; deficiencies observed during FDA inspection",
        "korean_interpretation": "Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 0.9g packets 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0270",
    "doc_number": "D-0597-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Ascend Laboratories, LLC] Failed Dissolution Specifications: An out-of-specificat... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Minocycline Hydrochloride Extended-Release Tablets, USP, 115 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0597-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-06-17\nProduct: Minocycline Hydrochloride Extended-Release Tablets, USP, 115 mg, 30-count bottle, Rx Only, Manufactured by: Alkem Laboratories Ltd., INDIA. Distributed by: Ascend Laboratories, LLC, Parsippany, NJ 07054.  NDC: 67877-644-30\nReason: Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H270",
        "task": "Failed Dissolution Specifications: An out-of-speci에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Minocycline Hydrochloride Extended-Release Tablets, USP, 115 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0271",
    "doc_number": "D-0595-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Haleon US Holdings LLC",
    "facility_location": "Warren, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Haleon US Holdings LLC] Chemical Contamination: contamination with a diluted pr... 실사 및 리콜 조치",
    "summary_kr": "Haleon US Holdings LLC (Warren, United States) 제조소에서 Gas-X Extra Strength, SIMETHICONE 125 mg/ANTIGAS, packaged i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.",
    "severity_level": "CRITICAL",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0595-2026\nRecalling Firm: Haleon US Holdings LLC\nLocation: Warren, United States\nReport Date: 2026-06-17\nProduct: Gas-X Extra Strength, SIMETHICONE 125 mg/ANTIGAS, packaged in a) 120 SoftGels (UPC 3 00674 35041 9, b) 72 SoftGels (UPC 3 00439 00572 1), Distributed by: Haleon, Warren, NJ 07059.\nReason: Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H271",
        "task": "Chemical Contamination: contamination with a dilut에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.",
        "korean_interpretation": "Haleon US Holdings LLC (Warren, United States) 제조소에서 Gas-X Extra Strength, SIMETHICONE 125 mg/ANTIGAS, packaged i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0272",
    "doc_number": "D-0620-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "BEEKEEPER'S NATURALS USA INC.",
    "facility_location": "Covina, CA",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[BEEKEEPER'S NATURALS USA INC.] Microbial Contamination of Non-Sterile Products... 실사 및 리콜 조치",
    "summary_kr": "BEEKEEPER'S NATURALS USA INC. (Covina, United States) 제조소에서 BEEKEEPER'S NATURALS Saline Nasal Spray, Sinus Congestion Ri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Non-Sterile Products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0620-2026\nRecalling Firm: BEEKEEPER'S NATURALS USA INC.\nLocation: Covina, United States\nReport Date: 2026-06-17\nProduct: BEEKEEPER'S NATURALS Saline Nasal Spray, Sinus Congestion Rinse, Made with Propolis + Xylitol, 1 FL OZ (30 mL) per bottle, Manufactured For:  Beekeeper's Naturals USA Inc., Covina, CA 91789.\nReason: Microbial Contamination of Non-Sterile Products\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H272",
        "task": "Microbial Contamination of Non-Sterile Products에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Microbial Contamination of Non-Sterile Products",
        "korean_interpretation": "BEEKEEPER'S NATURALS USA INC. (Covina, United States) 제조소에서 BEEKEEPER'S NATURALS Saline Nasal Spray, Sinus Congestion Ri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Non-Sterile Products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0273",
    "doc_number": "D-0607-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Presence of Foreign Substance:This recall has been init... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Budesonide Inhalation Suspension, 1mg/2mL, 30 x 2 mL Sterile 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and particles within the ampoule solution",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0607-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-06-17\nProduct: Budesonide Inhalation Suspension, 1mg/2mL, 30 x 2 mL Sterile Single-Dose Ampules (5 Single-Dose Ampules per pouch, 6 pouches per carton, Distributed by: Sun Pharmaceutical Industries, Inc., Cranbury, NJ 08512, Manufactured by: Sun Pharmaceutical Industries Limited, Baska Ujeti Road, Ujeti Halol-289350, Gujarat, India, NDC 47335-633-49.\nReason: Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and particles within the ampoule solution\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H273",
        "task": "Presence of Foreign Substance:This recall has been에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and p",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Budesonide Inhalation Suspension, 1mg/2mL, 30 x 2 mL Sterile 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and particles within the ampoule solution",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0274",
    "doc_number": "D-0586-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Zep Inc",
    "facility_location": "Emerson, GA",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Zep Inc] Microbial contamination of sterile products... 실사 및 리콜 조치",
    "summary_kr": "Zep Inc (Emerson, United States) 제조소에서 Zep, Alcohol Sanitizer Spray, Ethanol 70%, Net Contents 55 G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of sterile products",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0586-2026\nRecalling Firm: Zep Inc\nLocation: Emerson, United States\nReport Date: 2026-06-17\nProduct: Zep, Alcohol Sanitizer Spray, Ethanol 70%, Net Contents 55 Gallons 208 Liters, Made in USA, A Zep Inc. Brand, Distributed by: Zap Inc., 350 Joe Frank Harris Parkway, SE, Emerson, GA 30137, NDC 66949-133-85.\nReason: Microbial contamination of sterile products\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H274",
        "task": "Microbial contamination of sterile products에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Microbial contamination of sterile products",
        "korean_interpretation": "Zep Inc (Emerson, United States) 제조소에서 Zep, Alcohol Sanitizer Spray, Ethanol 70%, Net Contents 55 G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of sterile products",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0275",
    "doc_number": "D-0583-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Breckenridge Pharmaceutical, Inc.",
    "facility_location": "Berkeley Heights, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Breckenridge Pharmaceutical, Inc.] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치",
    "summary_kr": "Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 60mg, packaged in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0583-2026\nRecalling Firm: Breckenridge Pharmaceutical, Inc.\nLocation: Berkeley Heights, United States\nReport Date: 2026-06-17\nProduct: Duloxetine Delayed-Release Capsules, USP, 60mg, packaged in a) 90 Capsules (NDC 51991-748-90); b) 1000 Capsules (51991-748-10), Rx Only, Mfr. by: Towa Pharmaceutical Europe, S.L. Martorelles, (Barcelona), Spain, Dist. by: Breckenridge Pharmaceuticals, Inc., Berkeley Heights, NJ 07922.\nReason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H275",
        "task": "CGMP Deviations: Presence of N-nitroso-duloxetine 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "korean_interpretation": "Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 60mg, packaged in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0276",
    "doc_number": "D-0581-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Fresenius Kabi USA, LLC",
    "facility_location": "Lake Zurich, IL",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Fresenius Kabi USA, LLC] Failed Impurities/Degradations Specifications... 실사 및 리콜 조치",
    "summary_kr": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Epinephrine Injection, USP, 1mg/mL, 1 mL single-dose vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradations Specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0581-2026\nRecalling Firm: Fresenius Kabi USA, LLC\nLocation: Lake Zurich, United States\nReport Date: 2026-06-17\nProduct: Epinephrine Injection, USP, 1mg/mL, 1 mL single-dose vial, Rx only, Fresenius Kabi, Lake Zurich, IL 60047, NDC 63323-696-02 (vial), NDC 63323-696-25 (carton)\nReason: Failed Impurities/Degradations Specifications\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H276",
        "task": "Failed Impurities/Degradations Specifications에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Impurities/Degradations Specifications",
        "korean_interpretation": "Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Epinephrine Injection, USP, 1mg/mL, 1 mL single-dose vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradations Specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0277",
    "doc_number": "D-0580-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Presence of Particulate matter: Particulate matter iden... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 DOXOrubin Hydrochloride Liposome injection, 50 mg/25 mL (2mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter: Particulate matter identified as glass.",
    "severity_level": "CRITICAL",
    "process_types": [
      "환경모니터링(EM)",
      "무균충전(Aseptic)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.113(b)"
    ],
    "violation_codes_kgmp": [
      "무균의약품 제조소 관리기준 별표 1"
    ],
    "raw_text": "FDA Enforcement Notice: D-0580-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-06-17\nProduct: DOXOrubin Hydrochloride Liposome injection, 50 mg/25 mL (2mg/mL), 25 mL single-dose vials, Sterile, Rx only, Manufactured for: Northstar Rx LLC., Memphis, TN 38141, Manufactured by: Sun Pharmaceutical Ind. Ltd., Halol-Baroda Highway, Halol, Gujarat, India, NDC 72603-200-01.\nReason: Presence of Particulate matter: Particulate matter identified as glass.\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H277",
        "task": "Presence of Particulate matter: Particulate matter에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.113(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of Particulate matter: Particulate matter identified as glass.",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 DOXOrubin Hydrochloride Liposome injection, 50 mg/25 mL (2mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter: Particulate matter identified as glass.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0278",
    "doc_number": "D-0582-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Breckenridge Pharmaceutical, Inc.",
    "facility_location": "Berkeley Heights, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Breckenridge Pharmaceutical, Inc.] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치",
    "summary_kr": "Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 30mg, 1000 Capsule 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0582-2026\nRecalling Firm: Breckenridge Pharmaceutical, Inc.\nLocation: Berkeley Heights, United States\nReport Date: 2026-06-17\nProduct: Duloxetine Delayed-Release Capsules, USP, 30mg, 1000 Capsule bottles, Rx only, Manufactured. by: Towa Pharmaceutical Europe, S.L. Martorelles, (Barcelona), Spain, Distributed by: Breckenridge Pharmaceuticals, Inc., Berkeley Heights, NJ 07922. NDC 51991-747-10\nReason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H278",
        "task": "CGMP Deviations: Presence of N-nitroso-duloxetine 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "korean_interpretation": "Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 30mg, 1000 Capsule 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0279",
    "doc_number": "D-0585-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Amneal Pharmaceuticals, LLC",
    "facility_location": "Bridgewater, NJ",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Amneal Pharmaceuticals, LLC] Cross Contamination with Other Products: due to a poten... 실사 및 리콜 조치",
    "summary_kr": "Amneal Pharmaceuticals, LLC (Bridgewater, United States) 제조소에서 Primidone Tablets, USP, 50 mg, 100 Tablets per Bottle, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufacturer.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "원료(API)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0585-2026\nRecalling Firm: Amneal Pharmaceuticals, LLC\nLocation: Bridgewater, United States\nReport Date: 2026-06-17\nProduct: Primidone Tablets, USP, 50 mg, 100 Tablets per Bottle, Rx only, Manufactured by: Amneal Pharmaceuticals Pvt. Ltd., Oral Solid Dosage Unit, Ahmedabad 382213, INDIA.  Distributed by: Amneal Pharmaceuticals LLC, Bridgewater, NJ 08807.  NDC: 53746-544-01\nReason: Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufacturer.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H279",
        "task": "Cross Contamination with Other Products: due to a 에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufactu",
        "korean_interpretation": "Amneal Pharmaceuticals, LLC (Bridgewater, United States) 제조소에서 Primidone Tablets, USP, 50 mg, 100 Tablets per Bottle, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufacturer.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0280",
    "doc_number": "D-0587-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Golden State Medical Supply Inc.",
    "facility_location": "Camarillo, CA",
    "country": "United States",
    "issue_date": "2026-06-17",
    "title_kr": "[Golden State Medical Supply Inc.] Failed Dissolution Specifications: During 12-month long... 실사 및 리콜 조치",
    "summary_kr": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 GSMS Incorporated, NIACIN EXTENDED-RELEASE TABLETS, USP, 1,0 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 dissolution at the 24-hour timepoint.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0587-2026\nRecalling Firm: Golden State Medical Supply Inc.\nLocation: Camarillo, United States\nReport Date: 2026-06-17\nProduct: GSMS Incorporated, NIACIN EXTENDED-RELEASE TABLETS, USP, 1,000 MG, 90 tablets, Rx only, Manufactured by Kremers Urban Pharmaceuticals Inc., a subsidiary of Lannett, Inc., Seymour, IN 47274, Packaged by GSMS Incorporated, Camarillo, CA 93012. NDC 51407-268-90.\nReason: Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 dissolution at the 24-hour timepoint.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H280",
        "task": "Failed Dissolution Specifications: During 12-month에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 disso",
        "korean_interpretation": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 GSMS Incorporated, NIACIN EXTENDED-RELEASE TABLETS, USP, 1,0 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 dissolution at the 24-hour timepoint.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0281",
    "doc_number": "D-0558-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0558-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablets, 1000 mg, 160-count bottle, Haleon, Warren, NJ 07059, UPC 3 07660 74610 2.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H281",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0282",
    "doc_number": "D-0554-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Spectra Medical Devices, Llc",
    "facility_location": "Wilmington, MA",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Spectra Medical Devices, Llc] Lack of Assurance of Sterility... 실사 및 리콜 조치",
    "summary_kr": "Spectra Medical Devices, Llc (Wilmington, United States) 제조소에서 Lidocaine HCl Injection USP, 25x5 mL, Single-Dose Ampules, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0554-2026\nRecalling Firm: Spectra Medical Devices, Llc\nLocation: Wilmington, United States\nReport Date: 2026-06-10\nProduct: Lidocaine HCl Injection USP, 25x5 mL, Single-Dose Ampules, Rx Only, Distributed by: Spectra Medical Devices, LLC, Wilmington, Made in S. Korea, NDC 65282-1605-1.\nReason: Lack of Assurance of Sterility\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H282",
        "task": "Lack of Assurance of Sterility에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Lack of Assurance of Sterility",
        "korean_interpretation": "Spectra Medical Devices, Llc (Wilmington, United States) 제조소에서 Lidocaine HCl Injection USP, 25x5 mL, Single-Dose Ampules, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0283",
    "doc_number": "D-0572-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Ultra Strength Antacid, Calcium Carbonate 1000 mg, 72 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0572-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: HyVee, Ultra Strength Antacid, Calcium Carbonate 1000 mg, 72 CHEWABLE TABLETS, DISTRIBUTED BY: HY-VEE INC., Inc., WEST DES MOINES, IA 50266, UPC: 0 75450 82514 5.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H283",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Ultra Strength Antacid, Calcium Carbonate 1000 mg, 72 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0284",
    "doc_number": "D-0565-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, EXTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0565-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: CAREone, EXTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 750 mg, 96 chewable Tablets, Distributed by: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785, NDC 72476-127-80.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H284",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, EXTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0285",
    "doc_number": "D-0571-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Extra Strength Antacid, Calcium Carbonate 750 mg, 96  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0571-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: HyVee, Extra Strength Antacid, Calcium Carbonate 750 mg, 96 CHEWABLE TABLETS, DISTRIBUTED BY: HY-VEE INC., Inc., WEST DES MOINES, IA 50266, UPC: 0 75450 82497 1.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H285",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Extra Strength Antacid, Calcium Carbonate 750 mg, 96  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0286",
    "doc_number": "D-0552-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Eugia US LLC",
    "facility_location": "East Windsor, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Eugia US LLC] Labeling: Not Elsewhere Classified: The label wrap cove... 실사 및 리콜 조치",
    "summary_kr": "Eugia US LLC (East Windsor, United States) 제조소에서 Lidocaine HCl Injection, USP 2%, 40 mg/2 mL (20 mg/mL), 2 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.100"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0552-2026\nRecalling Firm: Eugia US LLC\nLocation: East Windsor, United States\nReport Date: 2026-06-10\nProduct: Lidocaine HCl Injection, USP 2%, 40 mg/2 mL (20 mg/mL), 2 mL per Single-Dose Vial, Rx Only, Mfd. in India for: Eugia US LLC, E. Windsor, NJ 08520.  NDC: 55150-164-02\nReason: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H286",
        "task": "Labeling: Not Elsewhere Classified: The label wrap에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.100"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
        "korean_interpretation": "Eugia US LLC (East Windsor, United States) 제조소에서 Lidocaine HCl Injection, USP 2%, 40 mg/2 mL (20 mg/mL), 2 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0287",
    "doc_number": "D-0579-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, ULTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0579-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: TopCare health, ULTRA STRENGTH, Antacid Tablets, CALCIUM CARBONATE 1000mg, 72 CHEWABLE TABLETS, DISTRIBUTED BY TOPCO ASSOCIATES LLC.,ELK GROVE VILLAGE, IL 60007, NDC 76162-129-68.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H287",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, ULTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0288",
    "doc_number": "D-0575-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Ultra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0575-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: GOODSENSE Ultra Strength, Antacid TABLETS, Calcium Carbonate 1000 mg, 72 Chewable Tablets, Distributed by: Geiss, Destin & Dunn, inc., Peachtree City, GA, NDC 50804-171-68.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H288",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Ultra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0289",
    "doc_number": "D-0559-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0559-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablets, 750 mg, 330-count bottle, Haleon, Warren, NJ 07059, UPC 3 0766  3072 10 9.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H289",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0290",
    "doc_number": "D-0567-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 DISCOUNT drug mart, EXTRA STRENGTH, ANTACID TABLETS, Calcium 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0567-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: DISCOUNT drug mart, EXTRA STRENGTH, ANTACID TABLETS, Calcium Carbonate 750 mg, 96 Tablets, Distributed by: Drug Mart- Food Fair Medina, OH 44256, UPC: 0 93351 03992 8.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H290",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 DISCOUNT drug mart, EXTRA STRENGTH, ANTACID TABLETS, Calcium 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0291",
    "doc_number": "D-0566-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, ULTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 1 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0566-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: CAREone, ULTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 1000 mg, 72 chewable Tablets, Distributed by: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785, NDC 72476-178-23.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H291",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, ULTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 1 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0292",
    "doc_number": "D-0577-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE ultra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0577-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: EQUALINE ultra strength, antacid tablets, calcium carbonate 1000mg, 72 chewable tablets, DISTRIBUTED BY SUPERVALU INC.,EDEN PRARIE, MN 55344 USA, NDC 41163-171-68.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H292",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE ultra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0293",
    "doc_number": "D-0574-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Extra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0574-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: GOODSENSE Extra Strength, Antacid TABLETS, Calcium Carbonate 750 mg, 96 Chewable Tablets, Distributed by: Geiss, Destin & Dunn, inc., Peachtree City, GA, NDC 50804-129-22.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H293",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Extra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0294",
    "doc_number": "D-0576-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE extra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0576-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: EQUALINE extra strength, antacid tablets, calcium carbonate 750mg, 96 chewable tablets, DISTRIBUTED BY SUPERVALU INC.,EDEN PRARIE, MN 55344 USA, NDC 41163-129-22.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H294",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE extra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0295",
    "doc_number": "D-0561-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Good Neighbor Pharmacy, extra strength Antacid Calcium Carbo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0561-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: Good Neighbor Pharmacy, extra strength Antacid Calcium Carbonate 1000 mg, 72 chewable tablets, Distributed by: Amerisourcebergen, 1 West First Avenue, Conshohocken, PA, 19428, NDC 24385-595-23.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H295",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Good Neighbor Pharmacy, extra strength Antacid Calcium Carbo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0296",
    "doc_number": "D-0598-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "SUN PHARMACEUTICAL INDUSTRIES INC",
    "facility_location": "Princeton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[SUN PHARMACEUTICAL INDUSTRIES INC] Labeling: Not Elsewhere Classified. This recall has bee... 실사 및 리콜 조치",
    "summary_kr": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Xyvona (levorphanol tartrate tablets), 2mg, 100 Tablets, Rx  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the proprietary name Xyvona",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0598-2026\nRecalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC\nLocation: Princeton, United States\nReport Date: 2026-06-10\nProduct: Xyvona (levorphanol tartrate tablets), 2mg, 100 Tablets, Rx only, Forte BioPharma, Manufactured by: Ohm Laboratories Inc., New Brunswick, NJ 08901, Distributed by: Fort Bio-Pharma, LLC., Las Vegas, NV 89113, NDC 72245-762-10\nReason: Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the proprietary name Xyvona\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H296",
        "task": "Labeling: Not Elsewhere Classified. This recall ha에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the propr",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Xyvona (levorphanol tartrate tablets), 2mg, 100 Tablets, Rx  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the proprietary name Xyvona",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0297",
    "doc_number": "D-0562-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Extra strength Antacid Calcium Carbonate 750 mg, chewable ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0562-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: Extra strength Antacid Calcium Carbonate 750 mg, chewable tablets, 96-count bottle, DISTRIBUTED BY CASEY'S MARKETING COMPANY, ANKENY, IA 50521, UPC: 0 98437 24361 9.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H297",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Extra strength Antacid Calcium Carbonate 750 mg, chewable ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0298",
    "doc_number": "D-0556-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Ascend Laboratories, LLC",
    "facility_location": "Bedminster, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Ascend Laboratories, LLC] Failed Dissolution Specifications: Olmesartan Medoxomil... 실사 및 리콜 조치",
    "summary_kr": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 5mg/40mg, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0556-2026\nRecalling Firm: Ascend Laboratories, LLC\nLocation: Bedminster, United States\nReport Date: 2026-06-10\nProduct: Amlodipine and Olmesartan Medoxomil Tablets, 5mg/40mg, Rx Only, 30-count bottle, Manufactured by: Alkem Laboratories Ltd., India, Distributed by: Ascend Laboratories, LLC., Parsippany, NJ 07054, NDC 67877-501-30.\nReason: Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H298",
        "task": "Failed Dissolution Specifications: Olmesartan Medo에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications",
        "korean_interpretation": "Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 5mg/40mg, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0299",
    "doc_number": "D-0555-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Asclemed USA Inc.",
    "facility_location": "Torrance, CA",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Asclemed USA Inc.] CGMP Deviations; presence of Nitrosamine Drug Substance... 실사 및 리콜 조치",
    "summary_kr": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Duloxetine DR Capsules, 30 mg, 30 count bottles, Rx, Relabel 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limit.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)",
      "시험실(QC)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.160(b)",
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 등의 안전에 관한 규칙 제48조",
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0555-2026\nRecalling Firm: Asclemed USA Inc.\nLocation: Torrance, United States\nReport Date: 2026-06-10\nProduct: Duloxetine DR Capsules, 30 mg, 30 count bottles, Rx, Relabeled by: Enovachem Pharmaceuticals, Torrance, CA 90501, NDC 76420-634-30, Marketed by: Ajanta Pharma USA Inc.\nReason: CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limit.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H299",
        "task": "CGMP Deviations; presence of Nitrosamine Drug Subs에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.160(b)"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limi",
        "korean_interpretation": "Asclemed USA Inc. (Torrance, United States) 제조소에서 Duloxetine DR Capsules, 30 mg, 30 count bottles, Rx, Relabel 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limit.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  },
  {
    "id": "hist-0300",
    "doc_number": "D-0578-2026",
    "source": "FDA_ENFORCEMENT",
    "source_name": "미국 FDA Enforcement/Recall",
    "company_name": "Guardian Drug Co. Inc.",
    "facility_location": "Dayton, NJ",
    "country": "United States",
    "issue_date": "2026-06-10",
    "title_kr": "[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치",
    "summary_kr": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, EXTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
    "severity_level": "MAJOR",
    "process_types": [
      "제조공정(Manufacturing)",
      "고형제(Oral Solid)"
    ],
    "violation_codes_fda": [
      "21 CFR 211.110"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0578-2026\nRecalling Firm: Guardian Drug Co. Inc.\nLocation: Dayton, United States\nReport Date: 2026-06-10\nProduct: TopCare health, EXTRA STRENGTH, Antacid Tablets, CALCIUM CARBONATE 750mg, 96 CHEWABLE TABLETS, DISTRIBUTED BY TOPCO ASSOCIATES LLC.,ELK GROVE VILLAGE, IL 60007, NDC 76162-128-22.\nReason: Presence of foreign substance: small metallic particles in chewable tablets.\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H300",
        "task": "Presence of foreign substance: small metallic part에 대한 근본 원인 분석(RCA) 및 오염 확산 방지 전수 검사 실시",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.110"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement / Recall Finding",
        "english_quote": "Presence of foreign substance: small metallic particles in chewable tablets.",
        "korean_interpretation": "Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, EXTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.",
        "risk_implication": "해당 제조소 원료 또는 완제품 수입 시 국내 식약처 통관 보류 및 회수 조치 대상"
      }
    ]
  }

];

export const INITIAL_WATCHLIST = [
  {
    id: "w1",
    target_company: "Zenith BioPharma Laboratories Ltd.",
    target_material: "세프트리악손 무균 주사제 원료(API)",
    facility_country: "India",
    alert_status: "CRITICAL",
    last_event: "2024-08-14 FDA Warning Letter (WFI Ralstonia 오염 적발)",
    alert_email: "qa_director@k-pharma.com"
  },
  {
    id: "w2",
    target_company: "Orient Active Pharma Ingredients Corp.",
    target_material: "아토르바스타틴 고지혈증 원료의약품",
    facility_country: "China",
    alert_status: "CRITICAL",
    last_event: "2024-09-02 FDA Warning Letter (HPLC Audit Trail 삭제)",
    alert_email: "supply_risk@samsungbio.com"
  },
  {
    id: "w3",
    target_company: "Cipla Limited Unit VII",
    target_material: "호흡기 흡입제(Inhalation) 원료",
    facility_country: "India",
    alert_status: "NORMAL",
    last_event: "2024-05-12 정기 실사 VAI (자발적 시정 조치) 종결",
    alert_email: "compliance@celltrion.com"
  }
];
