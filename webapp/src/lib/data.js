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
        id: "CAPA-11",
        task: "제조소 전체 라이프사이클을 아우르는 종합 오염관리전략(Contamination Control Strategy) 문서 전면 제정",
        department: "QA 규제전략팀",
        urgency: "30일 이내",
        guideline_ref: "Annex 1 Section 2.3"
      }
    ],
    key_citations: [
      {
        section: "EMA Non-Compliance Deficiencies",
        english_quote: "Airflow visualization studies demonstrated turbulent flow and eddies directly over exposed open vials during stoppering operations in Grade A laminar flow zone.",
        korean_interpretation: "기류 가시화 시험(스모크 스터디)에서 Grade A 층류 구역의 고무전 타전 작업 중 개방된 바이알 위로 난류 및 와류가 발생하는 것이 확인됨.",
        risk_implication: "유럽 진출을 준비 중인 국내 바이오시밀러 및 백신 제조사는 Annex 1 CCS 문서와 Grade A 기류 패턴 비디오 증빙이 없으면 유럽 승인이 전면 반려됨."
      }
    ],
    raw_text: `EUROPEAN MEDICINES AGENCY - EudraGMDP Statement of Non-Compliance
Report No: EMA-NCR-2024-019
Manufacturer: Bavaria Sterile Solutions GmbH, Munich, Germany.
Deficiencies:
1. Absence of a comprehensive Contamination Control Strategy (CCS) as required by EU GMP Annex 1 (2022).
2. Dynamic smoke studies conducted in Grade A filling core demonstrated air turbulence and vortexes directly impinging on opened sterile vials.`
  }
,

  {
    "id": "hist-0001",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 15 mg per 3 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0002",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 20 mg per 4 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0003",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 10 mg per 2 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0004",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0866-2026\nRecalling Firm: VITRUVIAS THERAPEUTICS INC\nLocation: Auburn, United States\nReport Date: 2026-09-23\nProduct: Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contains: levothyroxine (T4) 19 mcg, liothyronine (T3) 4.5 mcg, 100 Tablets, Rx only, Distributed by: Vitruvias Therapeutics, Auburn, AL 36830, Product of USA, NDC 69680-166-00.\nReason: Superpotent Drug\nClassification: Class I",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Superpotent Drug",
        "korean_interpretation": "VITRUVIAS THERAPEUTICS INC (Auburn, United States) 제조소에서 Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contain 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Superpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0005",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 10 mL, Delivers: 10 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0006",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 5 mg per 1 mL, Delivers: 10 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0007",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "Safecor Health, LLC (Woburn, United States) 제조소에서 Fluphenazine HCl Elixir, USP, 2.5 mg per 5 mL, Delivers: 5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0008",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).",
        "korean_interpretation": "SUN PHARMA /TARO (Hawthorne, United States) 제조소에서 Lidocaine Ointment USP, 5%, Speermint Flavor, 50 g Jar, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Content Uniformity Specifications. Out of Specification for Assay during analysis at the 24- month long term stability station, at (25¿C,60%RH).",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0009",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0852-2026\nRecalling Firm: Inventia Healthcare Limited\nLocation: Kalyan, India\nReport Date: 2026-09-23\nProduct: Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle, Rx only, Manufactured by: Inventia Healthcare Limited.   NDC:  64980-599-01\nReason: Failed Dissolution Specifications\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Dissolution Specifications",
        "korean_interpretation": "Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0010",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications",
        "korean_interpretation": "SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Nystatin Cream, USP, 15 g per tube, Rx only, Mfd. by: Taro P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0011",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Lack of Assurance of Sterility",
        "korean_interpretation": "Pfizer (Manhattan, United States) 제조소에서 Dopamine HCl Inj., USP, 200 mg/5 mL (40 mg/mL), 5 mL Single- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0012",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).",
        "korean_interpretation": "OurPharma LLC (Fayetteville, United States) 제조소에서 fentaNYL Citrate, 1,000 mcg/100 mL (10mcg/mL) Injection solu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: Complaint received on 08/31/2026 regarding the discrepancy of the IV bag expiry (07/31/2026 and 11/30/2026) and the product expiry (12/09/2026).",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0013",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ImprimisRx NJ LLC (Ledgewood, United States) 제조소에서 Povidone Iodine 1.25% / Proparacaine HCl 0.5% Ophthalmic Sol 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0014",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.",
        "korean_interpretation": "American Regent, Inc. (Shirley, United States) 제조소에서 Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Mult 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0015",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0836-2026\nRecalling Firm: Ajanta Pharma USA Inc\nLocation: Bridgewater, United States\nReport Date: 2026-09-16\nProduct: Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bottles, Rx Only,  Marketed by: Ajanta Pharma USA Inc., Bridgewater, NJ 08807, Made in India, NDC 27241-255-01.\nReason: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.",
        "korean_interpretation": "Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bott 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0016",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0017",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene",
        "korean_interpretation": "B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0018",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0019",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0020",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0021",
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
      "무균충전(Aseptic)",
      "시험실(QC)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "korean_interpretation": "OPTIMAL BALANCE PHARMACY (Houston, United States) 제조소에서 Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0022",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 CARDENE IV (Nicardipine Hydrochloride) in 0.83% Sodium Chlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0023",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0833-2026\nRecalling Firm: Supernus Pharmaceuticals, Inc.\nLocation: Rockville, United States\nReport Date: 2026-09-09\nProduct: Trokendi XR, (topiramate) extended-release capsules, 50 mg, 30 Capsules, Rx only, Manufactured by: Catalent Pharma Solutions, Winchester, KY 40391 USA, Manufactured for: Supernus Pharmaceuticals, Inc., Rockville, MD 20850 USA, NDC 17772-102-30.\nReason: Failed dissolution specifications.\nClassification: Class III",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed dissolution specifications.",
        "korean_interpretation": "Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, (topiramate) extended-release capsules, 50 mg,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed dissolution specifications.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0024",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Labeling: Label Mix-up",
        "korean_interpretation": "American Health Packaging (Columbus, United States) 제조소에서 Buprenorphine Sublingual Tablets (C-III), 2 mg, 30 Tablets ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0025",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of Foreign Tablets/Capsules",
        "korean_interpretation": "Teva Pharmaceuticals USA, Inc (Parsippany, United States) 제조소에서 traZODone Hydrochloride Tablets, USP, 50 mg, Rx only, 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0026",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of particulate matter: Particulates identified as fiberglass",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: Particulates identified as fiberglass",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0027",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0028",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0029",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0030",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations: Potential contamination of raw material",
        "korean_interpretation": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, (Histamine Dihydrochloride 0.025% 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0031",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0032",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GAL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0033",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0034",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0035",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dexmedetomidine Hydrochloride in 0.9% Sodium Chloride Inject 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0036",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "korean_interpretation": "Allies Group Inc. (Wilmington, United States) 제조소에서 THE ONE SPF 50 INVISIBLE SUNSCREEN GEL, (Avobenzone 3%, Homo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Product: Firm Testing indicated the affected product may not reliably provide the SPF 50 protection stated on the label.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0037",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0038",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations: Potential contamination of raw material",
        "korean_interpretation": "Lexia LLC (Franklin, United States) 제조소에서 Broadway Joe's Pain Cream, 3000 gm CBD, (Histamine Dihydroch 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Potential contamination of raw material",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0039",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 MYXREDLIN, Insulin Human in 0.9% Sodium Chloride Injection,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0040",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Presence of Foreign Tablets/Capsules",
        "korean_interpretation": "Bionpharma Inc. (Princeton, United States) 제조소에서 Doxylamine Succinate and Pyridoxine HCl Delayed-Release tabl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0041",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0042",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0043",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0044",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Cross Contamination with Other Products",
        "korean_interpretation": "Sage Products, LLC (Cary, United States) 제조소에서 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0045",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.",
        "korean_interpretation": "Chiesi USA, Inc. (Cary, United States) 제조소에서 Revcovi (elapegademase-lvlr) Injection, 2.4mg/1.5mL (1.6 mg/ 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Stability Specifications: Out of specification stability result for the protein concentration profile.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0046",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0839-2026\nRecalling Firm: Mylan Pharmaceuticals Inc\nLocation: Morgantown, United States\nReport Date: 2026-09-09\nProduct: Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bottle, Manufactured for: Mylan Pharmaceuticals Inc., Morgantown, WV 26505, Made in India, NDC 0378-5186-93.\nReason: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria",
        "korean_interpretation": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0047",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0048",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0049",
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
      "무균충전(Aseptic)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: CGMP Deviations",
        "korean_interpretation": "Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0050",
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
      "무균충전(Aseptic)",
      "시험실(QC)",
      "환경모니터링(EM)"
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Dissolution Specifications",
        "korean_interpretation": "Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Carton label: Mycophenolate Mofetil for injection, USP, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0051",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0847-2026\nRecalling Firm: Golden State Medical Supply Inc.\nLocation: Camarillo, United States\nReport Date: 2026-09-09\nProduct: Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, Marketed by: GSMS, Incorporated, Camarillo, CA 93012, USA, NDC: 51407-445-30.\nReason: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution",
        "korean_interpretation": "Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0052",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0785-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), packaged in a) 90-count bottles (NDC  16729-457-15) and b) 1000-count bottles (NDC 16729-457-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0053",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0831-2026\nRecalling Firm: Hikma Pharmaceuticals USA INC.\nLocation: Columbus, United States\nReport Date: 2026-09-02\nProduct: Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (NDC 76282-673-01) and b) 500 Capsules (NDC 76282-673-05) bottles, Rx only, Manufactured for: Exelan Pharmaceuticals, Inc., Boca Raton, FL 33432, Manufactured by: West-Ward Columbus Inc., Columbus, OH  43228.\nReason: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).",
        "korean_interpretation": "Hikma Pharmaceuticals USA INC. (Columbus, United States) 제조소에서 Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (N 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0054",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0776-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-448-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-co 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0055",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0781-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-453-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0056",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0775-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-447-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0057",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0782-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packaged in a) 90-count bottles (NDC 16729-454-15) b) 1000-count bottles (NDC 16729-454-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0058",
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
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Failed content uniformity specifications.",
        "korean_interpretation": "Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Clobetasol Propionate Cream USP, 0.05%, 60 g tube, Rx Only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed content uniformity specifications.",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0059",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0786-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-458-15.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-coun 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
      }
    ]
  },
  {
    "id": "hist-0060",
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
      "21 CFR 211.110",
      "21 CFR 211.160(b)"
    ],
    "violation_codes_kgmp": [
      "의약품 제조 및 품질관리기준 제4조",
      "의약품 등의 안전에 관한 규칙 제48조"
    ],
    "raw_text": "FDA Enforcement Notice: D-0777-2026\nRecalling Firm: ACCORD HEALTHCARE, INC.\nLocation: Raleigh, United States\nReport Date: 2026-09-02\nProduct: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-449-17.\nReason: Subpotent Drug\nClassification: Class II",
    "capa_checklist": [
      {
        "id": "CAPA-H01",
        "task": "해당 원인 규명 및 배치 전수 검사 실시, QA 출하 승인 보류",
        "department": "QA 품질보증팀",
        "urgency": "즉시조치(7일)",
        "guideline_ref": "21 CFR 211.192"
      }
    ],
    "key_citations": [
      {
        "section": "FDA Enforcement Report",
        "english_quote": "Reason: Subpotent Drug",
        "korean_interpretation": "ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug",
        "risk_implication": "국내 수입 또는 유통 시 품질부적합 회수 명령 대상"
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
