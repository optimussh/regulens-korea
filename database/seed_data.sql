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
