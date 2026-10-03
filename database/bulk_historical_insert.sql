-- ReguLens Korea - Scaled Bulk Historical Data SQL Insert

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'MFDS-2024-GMP01', 'MFDS_ACTION', '한국유니온제약 (가칭 원주공장)', '강원도 원주시 문막읍', 'South Korea', '2024-05-14', '[식품의약품안전처 의약품 행정처분 공고]
문서번호: MFDS-2024-GMP01
처분상대자: 한국유니온제약 (가칭 원주공장)
소재지: 강원도 원주시 문막읍
발행일자: 2024-05-14
해당품목: 세포타심나트륨주사 (무균분말주사제)
처분내용: 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토
위반사유: 무균분말 충전 공정 중 멸균 파라미터(온도, 압력)가 승인된 제조지시서 기준 범위를 이탈하였음에도 일탈(Deviation) 처리 없이 상용 배치 출하. 제조기록서 사후 허위 작성.
'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '식약처 [한국유니온제약 (가칭 원주공장)] 세포타심나트륨주사 (무균분말주사제) 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토', '한국유니온제약 (가칭 원주공장) (강원도 원주시 문막읍) 제조소 실사 결과, 무균분말 충전 공정 중 멸균 파라미터(온도, 압력)가 승인된 제조지시서 기준 범위를 이탈하였음에도 일탈(Deviation) 처리 없이 상용 배치 출하. 제조기록서 사후 허위 작성. 사유로 해당 품목 제조업무정지 3개월 및 GMP 적합판정 취소 검토 처분이 공고되었습니다.', 'CRITICAL', ARRAY['무균충전(Aseptic)', '환경모니터링(EM)', 'KGMP']::text[], ARRAY['21 CFR 211.113(b)', '21 CFR 211.188']::text[], ARRAY['약사법 제38조(의약품등의 제조관리의무)', '의약품 제조 및 품질관리기준 제4조(제조위생관리)']::text[]
    FROM public.reg_documents WHERE doc_number = 'MFDS-2024-GMP01'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'MFDS-2024-GMP02', 'MFDS_ACTION', '바이넥스 오송공장', '충청북도 청주시 오송읍', 'South Korea', '2024-03-20', '[식품의약품안전처 의약품 행정처분 공고]
문서번호: MFDS-2024-GMP02
처분상대자: 바이넥스 오송공장
소재지: 충청북도 청주시 오송읍
발행일자: 2024-03-20
해당품목: 닥스펜정 (고형제 타정)
처분내용: 해당 제형 제조업무정지 1개월 15일
위반사유: 허가받은 주성분 및 부형제 배합 비율과 다르게 임의 제조하고, 주성분 투입량을 줄여 원가 절감 시도. 제조기록서에는 허가 규격대로 정량 투입된 것처럼 거짓 기재.
'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '식약처 [바이넥스 오송공장] 닥스펜정 (고형제 타정) 해당 제형 제조업무정지 1개월 15일', '바이넥스 오송공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 허가받은 주성분 및 부형제 배합 비율과 다르게 임의 제조하고, 주성분 투입량을 줄여 원가 절감 시도. 제조기록서에는 허가 규격대로 정량 투입된 것처럼 거짓 기재. 사유로 해당 제형 제조업무정지 1개월 15일 처분이 공고되었습니다.', 'MAJOR', ARRAY['고형제(Oral Solid)', '제조공정(Manufacturing)', '데이터무결성(DI)']::text[], ARRAY['21 CFR 211.186', '21 CFR 211.188']::text[], ARRAY['약사법 제37조', '약사법 제38조(제조관리의무)', '의약품 등의 안전에 관한 규칙 제40조']::text[]
    FROM public.reg_documents WHERE doc_number = 'MFDS-2024-GMP02'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'MFDS-2024-GMP03', 'MFDS_ACTION', '휴텍스제약 향남공장', '경기도 화성시 향남읍 제약단지', 'South Korea', '2024-06-11', '[식품의약품안전처 의약품 행정처분 공고]
문서번호: MFDS-2024-GMP03
처분상대자: 휴텍스제약 향남공장
소재지: 경기도 화성시 향남읍 제약단지
발행일자: 2024-06-11
해당품목: 그루리스정 및 6개 다소비 완제의약품
처분내용: 의약품 GMP 적합판정 취소(원스트라이크 아웃)
위반사유: 정제 타정 및 코팅 공정에서 발생한 부적합 불용성 과립 잔여물을 정식 일탈 승인 없이 다음 제조 배치에 임의 재투입(Re-work)하여 혼합 제조.
'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '식약처 [휴텍스제약 향남공장] 그루리스정 및 6개 다소비 완제의약품 의약품 GMP 적합판정 취소(원스트라이크 아웃)', '휴텍스제약 향남공장 (경기도 화성시 향남읍 제약단지) 제조소 실사 결과, 정제 타정 및 코팅 공정에서 발생한 부적합 불용성 과립 잔여물을 정식 일탈 승인 없이 다음 제조 배치에 임의 재투입(Re-work)하여 혼합 제조. 사유로 의약품 GMP 적합판정 취소(원스트라이크 아웃) 처분이 공고되었습니다.', 'CRITICAL', ARRAY['고형제(Oral Solid)', '일탈관리(Deviation)', 'KGMP']::text[], ARRAY['21 CFR 211.115', '21 CFR 211.192']::text[], ARRAY['약사법 제38조의2(GMP 적합판정 등)', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'MFDS-2024-GMP03'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'MFDS-2024-GMP04', 'MFDS_ACTION', '메디톡스 오송 2공장', '충청북도 청주시 오송읍', 'South Korea', '2024-04-02', '[식품의약품안전처 의약품 행정처분 공고]
문서번호: MFDS-2024-GMP04
처분상대자: 메디톡스 오송 2공장
소재지: 충청북도 청주시 오송읍
발행일자: 2024-04-02
해당품목: 보툴리눔 독소 제제 (바이오의약품)
처분내용: 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행
위반사유: 원액 역가(Potency) 및 안정성 시험 결과가 기준에 미달하였음에도, 역가 시험 데이터를 허위로 조작하여 국가출하승인을 신청 및 승인받음.
'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '식약처 [메디톡스 오송 2공장] 보툴리눔 독소 제제 (바이오의약품) 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행', '메디톡스 오송 2공장 (충청북도 청주시 오송읍) 제조소 실사 결과, 원액 역가(Potency) 및 안정성 시험 결과가 기준에 미달하였음에도, 역가 시험 데이터를 허위로 조작하여 국가출하승인을 신청 및 승인받음. 사유로 국가출하승인 서류 거짓 작성 품목허가 취소 처분 소송 진행 처분이 공고되었습니다.', 'CRITICAL', ARRAY['데이터무결성(DI)', '시험실(QC)', '생물학적제제(Bio)']::text[], ARRAY['21 CFR 211.194', '21 CFR 211.165']::text[], ARRAY['약사법 제53조(국가출하승인의약품)', '데이터 완전성 평가지침 제3조']::text[]
    FROM public.reg_documents WHERE doc_number = 'MFDS-2024-GMP04'
    ON CONFLICT DO NOTHING;
END $$;

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
    ) SELECT id, '[VITRUVIAS THERAPEUTICS INC] Superpotent Drug... 실사 및 리콜 조치', 'VITRUVIAS THERAPEUTICS INC (Auburn, United States) 제조소에서 Thyroid Tablets, USP, 1/2 Grain (30 mg), Each tablet contain 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Superpotent Drug', 'CRITICAL', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[Inventia Healthcare Limited] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, 100 Tablets per bottle,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter and Lack of Assurance of... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Epinephrine Injection, USP, 30 mg/30 mL (1mg/mL), 30 mL-Mult 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter and Lack of Assurance of Sterility. Particulate matter identified as nylon, cellulosic, acrylic, polyethylene and glass and broken and leaking vials.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Ajanta Pharma USA Inc] Failed impurities/degradation specifications: (OOS) for... 실사 및 리콜 조치', 'Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fluphenazine Hydrochloride Tablets, USP, 1mg, 100-count bott 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurities/degradation specifications: (OOS) for Organic Impurities by HPLC (Impurity-A) during testing at the 18 months long term stability. Result: 1.1 percent. Spec: 1.0 percent.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Dextrose Injection, USP, 70 %, 2000 mL bags, Rx Only, Baxter 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as stainless steel particles in the solution.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[B BRAUN MEDICAL INC] Presence of Particulate Matter: particulate matter iden... 실사 및 리콜 조치', 'B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 0.9% Sodium Chloride Injection, USP, 100 mL Partial Fill in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: particulate matter identified as iron oxide, inorganic material, cellulose cotton fiber or polystyrene', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 20 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 1,000 mg per  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[OPTIMAL BALANCE PHARMACY] Microbial Contamination of Sterile Products - out of sp... 실사 및 리콜 조치', 'OPTIMAL BALANCE PHARMACY (Houston, United States) 제조소에서 Glutathione 200 mg/mL, 30 mL sterile multidose vial, Each vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.', 'CRITICAL', ARRAY['환경모니터링(EM)', '시험실(QC)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)', '21 CFR 211.160(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1', '의약품 등의 안전에 관한 규칙 제48조']::text[]
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
    ) SELECT id, '[Supernus Pharmaceuticals, Inc.] Failed dissolution specifications.... 실사 및 리콜 조치', 'Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, (topiramate) extended-release capsules, 50 mg,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed dissolution specifications.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] Presence of particulate matter: Particulates identified... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 0.9% Sodium Chloride Injection USP 500 mL, VIAFLEX Plastic C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: Particulates identified as fiberglass', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Pantoprazole Sodium in 0.9% Sodium Chloride Injection, 80 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Daptomycin, in 0.9% Sodium Chloride Injection, 500 mg per 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Nexterone (amiodarone HCI), 360 mg/200 mL (1.8 mg/mL) in GAL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 600 mg per 50 mL ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Famotidine Injection in Sodium Chloride Injection, 20 mg, 50 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP, in 0.9% Sodium Chloride, 1g per 2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vasopressin, in 0.9% Sodium Chloride Injection, 40 units per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Sage Products, LLC] Cross Contamination with Other Products... 실사 및 리콜 조치', 'Sage Products, LLC (Cary, United States) 제조소에서 2% Chlorhexidine Gluconate* Cloth, Non-sterile, 6 Disposable 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications; product failed to me... 실사 및 리콜 조치', 'Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Prasugrel Tablets, USP, 10mg, Rx only, 30 Tablets in each bo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 18-month stability testing acceptance criteria', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Injection USP in 5% Dextrose, 900 mg/50 mL (18 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Vancomycin Injection, USP in 5% Dextrose, 1 g per 200mL (5 m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Baxter Healthcare Corporation] CGMP Deviations... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Clindamycin Phosphate in 0.9% Sodium Chloride Injection, 600 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
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
    ) SELECT id, '[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Carton label: Mycophenolate Mofetil for injection, USP, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'CRITICAL', ARRAY['환경모니터링(EM)', '시험실(QC)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)', '21 CFR 211.160(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1', '의약품 등의 안전에 관한 규칙 제48조']::text[]
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
    ) SELECT id, '[Golden State Medical Supply Inc.] Failed Dissolution Specifications. Notification from th... 실사 및 리콜 조치', 'Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Prasugrel HCI, Tablets, USP, 10mg, 30-count bottle, Rx only, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications. Notification from the manufacturer that lot is being recalled due to failed dissolution', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 200 mcg (0.2 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[Hikma Pharmaceuticals USA INC.] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치', 'Hikma Pharmaceuticals USA INC. (Columbus, United States) 제조소에서 Ramipril Capsules USP, 10 mg, packaged in a) 100 Capsules (N 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result obtained for a process impurity, dicyclohexylurea (DCU).', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.05 mg), 1000-co 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.125 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 137 mcg (0.137 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3 mg), 90-coun 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
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
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0777-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0803-2026', 'FDA_ENFORCEMENT', 'Mallinckrodt Hospital Products Inc.', 'Bridgewater, NJ', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0803-2026
Recalling Firm: Mallinckrodt Hospital Products Inc.
Location: Bridgewater, United States
Report Date: 2026-09-02
Product: Acthar Gel (repository corticotropin injection), 5 mL multiple-dose vial, Rx Only, Mfd. for: Mallinckrodt ARD LLC, Bridgewater, NJ 08807, NDC 63004-8710-1 & NDC 63004-8710-2
Reason: Presence of particulate matter: glass and stopper piece
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Mallinckrodt Hospital Products Inc.] Presence of particulate matter: glass and stopper piece... 실사 및 리콜 조치', 'Mallinckrodt Hospital Products Inc. (Bridgewater, United States) 제조소에서 Acthar Gel (repository corticotropin injection), 5 mL multip 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter: glass and stopper piece', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0803-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0783-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0783-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 150 mcg (0.15 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-455-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.15 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0783-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0790-2026', 'FDA_ENFORCEMENT', 'Church & Dwight Co., Inc.', 'Ewing, NJ', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0790-2026
Recalling Firm: Church & Dwight Co., Inc.
Location: Ewing, United States
Report Date: 2026-09-02
Product: Zicam, Cold Remedy, Medicated Nasal Swabs, With Cooling Menthol & Eucalyptus, 20 Single-Use Swabs per carton, Zinc-Free Homeopathic, Distributed by Church & Dwight Co. Inc., Ewing, NJ 08628, UPC 732216301205.
Reason: CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Church & Dwight Co., Inc.] CGMP Deviations; FDA inspection of the contract manufac... 실사 및 리콜 조치', 'Church & Dwight Co., Inc. (Ewing, United States) 제조소에서 Zicam, Cold Remedy, Medicated Nasal Swabs, With Cooling Ment 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; FDA inspection of the contract manufacturer noted out of limit results for microbiological testing', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0790-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0784-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0784-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 175 mcg (0.175 mg), packaged in a) 90-count bottles (NDC 16729-456-15), and b) 1000-count bottles (NDC 16729-456-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 175 mcg (0.175 mg), packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0784-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0827-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0827-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-09-02
Product: Tyenne (tocilizumab-aazg) Injection, 400 mg/20 mL (20 mg/mL), 20 mL vial, Rx Only, Manufactured  by Fresenius Kabi USA, LLC,  Lake Zurich, Illinois, 60047, NDC 65219-594-20.
Reason: Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of particulate matter:An internal investigatio... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Tyenne (tocilizumab-aazg) Injection, 400 mg/20 mL (20 mg/mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of particulate matter:An internal investigation at the firm found the product to contain glass particles.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0827-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0832-2026', 'FDA_ENFORCEMENT', 'B BRAUN MEDICAL INC', 'Allentown, PA', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0832-2026
Recalling Firm: B BRAUN MEDICAL INC
Location: Allentown, United States
Report Date: 2026-09-02
Product: Lactated Ringer''s Injection USP, 1000 mL EXCEL container, Rx only, L7500, B. Braun Medical, Inc., Bethlehem, PA 18018-3524 USA, NDC 0264-7750-00
Reason: Presence of Particulate matter.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[B BRAUN MEDICAL INC] Presence of Particulate matter.... 실사 및 리콜 조치', 'B BRAUN MEDICAL INC (Allentown, United States) 제조소에서 Lactated Ringer''s Injection USP, 1000 mL EXCEL container, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0832-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0779-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0779-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 100 mcg (0.1 mg), packaged in a) 90-count bottles (NDC 16729-451-15) and b) 1000-count bottles, (NDC 16729-451-17), Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 100 mcg (0.1 mg), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0779-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0778-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0778-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-450-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 1000-c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0778-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0780-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0780-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-09-02
Product: Levothyroxine Sodium Tablets, USP, 112 mcg (0.112 mg), 1000-count bottles, Rx Only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: Intas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, India, NDC 16729-452-17.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.112 mg), 1000- 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0780-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0804-2026', 'FDA_ENFORCEMENT', 'Apotex Corp.', 'Weston, FL', 'United States', '2026-09-02', 'FDA Enforcement Notice: D-0804-2026
Recalling Firm: Apotex Corp.
Location: Weston, United States
Report Date: 2026-09-02
Product: Paxil CR, Paroxetine, Extended-Release Tablets, 37.5mg, 30 count bottle, Rx only, Manufactured by: Apotex Inc., Toronto, Ontario, Canada M9L 1T9, Manufactured for: Apotex Corp., Weston, Florida 33326, NDC 60505-4379-3
Reason: Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apotex Corp.] Failed Dissolution Specifications; product failed to me... 실사 및 리콜 조치', 'Apotex Corp. (Weston, United States) 제조소에서 Paxil CR, Paroxetine, Extended-Release Tablets, 37.5mg, 30 c 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; product failed to meet 24-month stability testing acceptance criteria', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0804-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0793-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0793-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Cyanocobalamin injection USP, 10,000 mcg/10 mL (1,000 mcg/mL), For IM or SC Use Only, packaged in a) 10 mL Multi-Dose Vial (NDC 0517-0032-01) and b) 25x10 mL Multi-Dose Vials (NDC 0517-0032-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 10,000 mcg/10 mL (1,000 mcg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0793-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0771-2026', 'FDA_ENFORCEMENT', 'Golden State Medical Supply Inc.', 'Camarillo, CA', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0771-2026
Recalling Firm: Golden State Medical Supply Inc.
Location: Camarillo, United States
Report Date: 2026-08-26
Product: Carbamazepine Tablets, USP, 200mg, packaged in a)1000-count bottles (NDC 51407-215-10), b) 100-count bottles (NDC 51407-215-01), Rx Only, Manufactured by: Taro Pharmaceutical Industries Ltd., Marketed by: GSMS, Incorporated, Camarillo, CA 93012 USA
Reason: CGMP deviations: tablets with black specks.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Golden State Medical Supply Inc.] CGMP deviations: tablets with black specks.... 실사 및 리콜 조치', 'Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, packaged in a)1000-count  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviations: tablets with black specks.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0771-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0799-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0799-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Multrys (Trace Elements Injection 4, USP), For intravenous infusion, packaged in a) 1 mL Single-Dose Vial (NDC 0517-9302-01), and b) 25x1 mL Single-Dose Vials (NDC 0517-9302-25) Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Multrys (Trace Elements Injection 4, USP), For intravenous i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0799-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0797-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0797-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: ACETYLCYSTEINE SOLUTION, USP, 20% (200 mg/mL), packaged in a) 4 mL Vial NOT FOR INJECTION (NDC 0517-7604-01), and b) 25x4 mL Vials NOT FOR INJECTION (NDC 0517-7604-25), Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 20% (200 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0797-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0800-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0800-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Papaverine HCl Injection, USP, 60 mg/2 mL (30 mg/mL), packaged in a) 2mL Single-Dose Vial (NDC 0517-4002-01), and b) 25x2mL Single-Dose Vials (NDC 0517-4002-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Papaverine HCl Injection, USP, 60 mg/2 mL (30 mg/mL), packag 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0800-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0796-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0796-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: ACETYLCYSTEINE SOLUTION, USP, 10% (100 mg/mL), packaged in a) 4 mL Vial NOT FOR INJECTION (NDC 0517-7504-01), and b) 25x4 mL Vials NOT FOR INJECTION (NDC 0517-7504-25), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 ACETYLCYSTEINE SOLUTION, USP, 10% (100 mg/mL), packaged in a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0796-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0764-2026', 'FDA_ENFORCEMENT', 'Shilpa Medicare Limited', 'Jadcherla, Mahabubnagar District', 'India', '2026-08-26', 'FDA Enforcement Notice: D-0764-2026
Recalling Firm: Shilpa Medicare Limited
Location: Jadcherla, Mahabubnagar District, India
Report Date: 2026-08-26
Product: PEMRYDI RTU (pemetrexed injection), 100 mg/10 mL (10 mg/mL),  Single-dose vial, Rx only, Manufactured by: Zydus Lifesciences Limited, Ahmedabad, India; Distributed by: Amneal Pharmaceuticals LC, Bridgewater, NY 08807.  NDC: 70121-2453-1
Reason: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shilpa Medicare Limited] Discolored solution. The firm has received market compl... 실사 및 리콜 조치', 'Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU (pemetrexed injection), 100 mg/10 mL (10 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0764-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0795-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0795-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Atropine Sulfate injection, USP, 1 mg/mL, For intravenous Use, Sterile, packaged in a) 1 mL Single-Dose Vial (NDC 0517-1001-01), and b) 25x1 mL Single-Dose Vial (NDC 0517-1001-25), Rx only, AMERICAN REGENT INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Atropine Sulfate injection, USP, 1 mg/mL, For intravenous Us 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0795-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0767-2026', 'FDA_ENFORCEMENT', 'Regeneron Pharmaceuticals Inc', 'Tarrytown, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0767-2026
Recalling Firm: Regeneron Pharmaceuticals Inc
Location: Tarrytown, United States
Report Date: 2026-08-26
Product: Libtayo (cemiplimab-rwlc) Injection, 350 mg/7 mL (50 mg/mL), For Intravenous Infusion After Dilution, Single-Dose Vial, Rx only, Manufactured by: Regeneron Pharmaceuticals, Inc., Tarrytown, NY 10591; Marketed by: Regeneron Pharmaceuticals, Inc. (Tarrytown, NY 10591),  NDC 61755-008-01
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Regeneron Pharmaceuticals Inc] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Regeneron Pharmaceuticals Inc (Tarrytown, United States) 제조소에서 Libtayo (cemiplimab-rwlc) Injection, 350 mg/7 mL (50 mg/mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0767-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0791-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0791-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Nitroglycerin injection, USP, 50 mg/10 mL (5 mg/mL), packaged in a) 10 mL vials (NDC 0517-4810-01), b) 25x10mL vials (NDC 0517-4810-25) RX only, AMERICAN REGENT, INC., Shirley, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Nitroglycerin injection, USP, 50 mg/10 mL (5 mg/mL), package 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0791-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0774-2026', 'FDA_ENFORCEMENT', 'Mylan Pharmaceuticals Inc', 'Morgantown, WV', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0774-2026
Recalling Firm: Mylan Pharmaceuticals Inc
Location: Morgantown, United States
Report Date: 2026-08-26
Product: Acamprosate Calcium, Delayed-Release Tablets, 333 mg, 180 tablets bottles, Rx only, Mylan Pharmaceuticals Inc., Manufactured for: Mylan Pharmaceuticals Inc., Morgantown, WV 266505, NDC 0378-6333-80.
Reason: Failed Dissolution Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Mylan Pharmaceuticals Inc] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Mylan Pharmaceuticals Inc (Morgantown, United States) 제조소에서 Acamprosate Calcium, Delayed-Release Tablets, 333 mg, 180 ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0774-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0765-2026', 'FDA_ENFORCEMENT', 'Shilpa Medicare Limited', 'Jadcherla, Mahabubnagar District', 'India', '2026-08-26', 'FDA Enforcement Notice: D-0765-2026
Recalling Firm: Shilpa Medicare Limited
Location: Jadcherla, Mahabubnagar District, India
Report Date: 2026-08-26
Product: PEMRYDI RTU(pemetrexed injection), 500 mg/50 mL (10 mg/mL), Single-dose vial, Rx only, Manufactured by: Zydus Lifesciences Limited, Ahmedabad, India; Distributed by: Amneal Pharmaceuticals LC, Bridgewater, NY 08807.  NDC: 70121-2461-1
Reason: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shilpa Medicare Limited] Discolored solution. The firm has received market compl... 실사 및 리콜 조치', 'Shilpa Medicare Limited (Jadcherla, Mahabubnagar District, India) 제조소에서 PEMRYDI RTU(pemetrexed injection), 500 mg/50 mL (10 mg/mL),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Discolored solution. The firm has received market complaints reporting green to dark green discoloration in certain vials', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0765-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0802-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0802-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: niCARdipine Hydrochloride Injection, USP, 25 mg/10mL (2.5 mg/mL), packaged in a) 10 mL Single Dose Vial (NDC 72572-470-01) and b) 10x10 mL Single Dose Vials (NDC 72572-470-10), Rx Only, Mfd for: Civica, Inc., Lehi, UT, Mfd by: American Regent, Inc., New Albany, OH 43054.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 niCARdipine Hydrochloride Injection, USP, 25 mg/10mL (2.5 mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0802-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0794-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0794-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: AMINAOCAPROIC ACID INJECTION, USP, 250 mg/mL (5 g/20 mL), packaged in a) 20 mL MULTIPLE DOSE VIAL FOR IV INFUSION (NDC 0517-9120-01),  and b) 25x20 mL MULTIPLE DOSE VIALS (NDC 0517-9120-25), Rx Only, American Regent, Inc., Shirley, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 AMINAOCAPROIC ACID INJECTION, USP, 250 mg/mL (5 g/20 mL), pa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0794-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0798-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0798-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Selenious Acid Injection, USP 12 mcg/2 mL (6 mcg/2mL), For intravenous use, packaged in a) 2mL Single-Dose Vial (NDC 0517-6502-01), and b)10x2mL Single-Dose Vial (NDC 0517-6502-10), Rx Only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Selenious Acid Injection, USP 12 mcg/2 mL (6 mcg/2mL), For i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0798-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0788-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0788-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-08-26
Product: Morphine Sulfate Injection, USP, 2 mg /mL, 1 mL single-dose Simplist prefilled syringes, For Intramuscular or Intravenous use, Rx only, Fresenius Kabi, Lake Zurich, IL. Unit of Use NDC Number 76045-004-01; Unit of Sale NDC Number 76045-004-11
Reason: Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Labeling: Label Mixup: MicroVault labeled as Morphine 2... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Morphine Sulfate Injection, USP, 2 mg /mL, 1 mL single-dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mixup: MicroVault labeled as Morphine 2 mg/1 mL, contains a Prefilled Syringe of Dilaudid 0.5 mg/0.5 mL.', 'CRITICAL', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0788-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0770-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0770-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-08-26
Product: Carbamazepine Tablets, USP, 200mg, 1000 count bottles, Rx only, Manufactured by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761, Distributed by: Taro Pharmaceuticals USA, Inc., Hawthorne, NY 10532, NDC 51672-4005-3.
Reason: CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] CGMP Deviations; black spots found on tablets from burn... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Carbamazepine Tablets, USP, 200mg, 1000 count bottles, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; black spots found on tablets from burnt excipient during manufacturing', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0770-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0792-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0792-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Cyanocobalamin injection USP, 1,000 mcg/mL, For IM or SC Use Only, packaged in a) 1 mL Multi-Dose Vial (NDC 0517-0031-01), and b) 25x1 mL Multi-Dose Vials (NDC 0517-0031-25) Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Cyanocobalamin injection USP, 1,000 mcg/mL, For IM or SC Use 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0792-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0801-2026', 'FDA_ENFORCEMENT', 'American Regent, Inc.', 'Shirley, NY', 'United States', '2026-08-26', 'FDA Enforcement Notice: D-0801-2026
Recalling Firm: American Regent, Inc.
Location: Shirley, United States
Report Date: 2026-08-26
Product: Tralement (trace elements injection 4*, USP), packaged in a) 1mL Single Dose vials (NDC 0517-9305-01) and b) 5x1mL Single Dose vials (NDC 0517-9305-25), Rx only, AMERICAN REGENT, INC., SHIRLEY, NY 11967.
Reason: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[American Regent, Inc.] Presence of Particulate Matter: Product contaminated wi... 실사 및 리콜 조치', 'American Regent, Inc. (Shirley, United States) 제조소에서 Tralement (trace elements injection 4*, USP), packaged in a) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Product contaminated with particulate matter identified as hair, glass and/or paraformaldehyde', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0801-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0769-2026', 'FDA_ENFORCEMENT', 'Buy-Herbal', 'Flushing, NY', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0769-2026
Recalling Firm: Buy-Herbal
Location: Flushing, United States
Report Date: 2026-08-19
Product: Kian Pee Wan Capsules, 30-count bottles
Reason: Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Buy-Herbal] Marketed Without an Approved NDA/ANDA: Product contains... 실사 및 리콜 조치', 'Buy-Herbal (Flushing, United States) 제조소에서 Kian Pee Wan Capsules, 30-count bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Marketed Without an Approved NDA/ANDA: Product contains undeclared drug ingredients dexamethasone and cyproheptadine.', 'CRITICAL', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0769-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0759-2026', 'FDA_ENFORCEMENT', 'Shoolin Pharma Chem LLP', 'Kadi', 'India', '2026-08-19', 'FDA Enforcement Notice: D-0759-2026
Recalling Firm: Shoolin Pharma Chem LLP
Location: Kadi, India
Report Date: 2026-08-19
Product: SILDENAFIL CITRATE USP, 0.100 KG, 100 gm-bag Net Wt, RX ONLY "FOR Prescription Compounding Only", Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesana, Gujarat, 382715, India,  (CAS NO. 171599-83-0) NDC 85702-001-05
Reason: CGMP Deviations:Noted during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치', 'Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 0.100 KG, 100 gm-bag Net Wt, RX ONLY 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0759-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0755-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0755-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 7.5mg (5mg/mL), Glycine 7.5 mg (5mg/mL), 1.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-721-01
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 7.5mg (5mg/mL), Glycine 7.5 mg (5mg/mL), 1.5 mL  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0755-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0772-2026', 'FDA_ENFORCEMENT', 'Victory Medical Center Pharmacy', 'Austin, TX', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0772-2026
Recalling Firm: Victory Medical Center Pharmacy
Location: Austin, United States
Report Date: 2026-08-19
Product: Glutathione (MDV), 200 mg/mL, 30 mL vial, each mL contains Glutathione 200 mg, Ascorbic Acid 20 mg, Benzyl Alcohol 1.5%, Na Hydroxide (Ph Adjust) in sterile water for injection, VMC.
Reason: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Victory Medical Center Pharmacy] Microbial Contamination of Sterile Products - out of sp... 실사 및 리콜 조치', 'Victory Medical Center Pharmacy (Austin, United States) 제조소에서 Glutathione (MDV), 200 mg/mL, 30 mL vial, each mL contains G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Sterile Products - out of specifications results were obtained for bacterial endotoxin.', 'CRITICAL', ARRAY['환경모니터링(EM)', '시험실(QC)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)', '21 CFR 211.160(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1', '의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0772-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0747-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0747-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 12.5MG (2.5MG/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-495-05
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 12.5MG (2.5MG/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0747-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0748-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0748-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 2.25MG (0.9 mg/mL), 2.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202 NDC 71170-811-02
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.25MG (0.9 mg/mL), 2.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0748-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0773-2026', 'FDA_ENFORCEMENT', 'Liebel-Flarsheim Company LLC', 'Raleigh, NC', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0773-2026
Recalling Firm: Liebel-Flarsheim Company LLC
Location: Raleigh, United States
Report Date: 2026-08-19
Product: Optiray Imaging Bulk Package-350, Ioversol Injection 74%, 350 mg/mL Organically Bound Iodine, 500 mL Multiple-Dose Vial, Rx only, Sterile Solution, Manufactured by: Liebel-Flarsheim Company LLC, Raleigh, NC 27616, Made in USA, NDC 0019-1333-65.
Reason: Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Liebel-Flarsheim Company LLC] Presence of Particulate Matter: comprising polyethylene... 실사 및 리콜 조치', 'Liebel-Flarsheim Company LLC (Raleigh, United States) 제조소에서 Optiray Imaging Bulk Package-350, Ioversol Injection 74%, 35 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: comprising polyethylene and other plastic materials, stainless steel and glass.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0773-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0768-2026', 'FDA_ENFORCEMENT', 'Heritage Pharmaceuticals Inc', 'East Brunswick, NJ', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0768-2026
Recalling Firm: Heritage Pharmaceuticals Inc
Location: East Brunswick, United States
Report Date: 2026-08-19
Product: CLINDAMYCIN PALMITATE HYDROCHLORIDE FOR ORAL SOLUTION, USP, 75 mg/5 mL, Rx Only, 100 mL, Distributed by: Avet Pharmaceuticals Inc., East Brunswick, NJ 08816, NDC 23155-603-51
Reason: Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Heritage Pharmaceuticals Inc] Presence of Foreign Substance: presence of particles an... 실사 및 리콜 조치', 'Heritage Pharmaceuticals Inc (East Brunswick, United States) 제조소에서 CLINDAMYCIN PALMITATE HYDROCHLORIDE FOR ORAL SOLUTION, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance: presence of particles and white flakes in the reconstituted bottles.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0768-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0753-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0753-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 2.5mg (1mg/mL), Glycine 12.5 mg (5mg/mL), 2.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-711-02
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 2.5mg (1mg/mL), Glycine 12.5 mg (5mg/mL), 2.5 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0753-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0749-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0749-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 6.75mg (4.5 mg/mL), 1.5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202 NDC 71170-821-01
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 6.75mg (4.5 mg/mL), 1.5 mL Sterile Multi-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0749-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0752-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0752-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 0.9mg (0.9 mg/mL), 1 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-810-01
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 0.9mg (0.9 mg/mL), 1 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0752-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0766-2026', 'FDA_ENFORCEMENT', 'Prestige Brands Holdings', 'Tarrytown, NY', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0766-2026
Recalling Firm: Prestige Brands Holdings
Location: Tarrytown, United States
Report Date: 2026-08-19
Product: CLEAR EYES Maximum Itchy Eye Relief, 0.5 fl oz (15 mL) per dropper bottle, Sterile, Dist. by Medtech Products Inc., Tarrytown, NY 10591, a Prestige Consumer Healthcare Company.  NDC: 67172-999-01 UPC 6 78112 65920 3
Reason: Lack of assurance of sterility. The recall is due to potential contamination
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Prestige Brands Holdings] Lack of assurance of sterility. The recall is due to po... 실사 및 리콜 조치', 'Prestige Brands Holdings (Tarrytown, United States) 제조소에서 CLEAR EYES Maximum Itchy Eye Relief, 0.5 fl oz (15 mL) per d 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility. The recall is due to potential contamination', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0766-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0757-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0757-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 20mg (5mg/mL), Glycine 20 mg (5mg/mL), 4 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-724-04.
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 20mg (5mg/mL), Glycine 20 mg (5mg/mL), 4 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0757-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0756-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0756-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 10mg (5mg/mL), Glycine 10 mg (5mg/mL), 2 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-722-02
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 10mg (5mg/mL), Glycine 10 mg (5mg/mL), 2 mL Ster 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0756-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0751-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0751-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 9mg (4.5 mg/mL), 2 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-822-02
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 9mg (4.5 mg/mL), 2 mL Sterile Multi-Dose Vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0751-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0760-2026', 'FDA_ENFORCEMENT', 'Shoolin Pharma Chem LLP', 'Kadi', 'India', '2026-08-19', 'FDA Enforcement Notice: D-0760-2026
Recalling Firm: Shoolin Pharma Chem LLP
Location: Kadi, India
Report Date: 2026-08-19
Product: TADALAFIL USP, 0.100 KG, 0.1KG(100gm)-bag, Rx only, "For Prescription Compounding Only",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 1715996-29-5), NDC 85702-002-02.
Reason: CGMP Deviations:Noted during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치', 'Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.100 KG, 0.1KG(100gm)-bag, Rx only, "For Pre 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0760-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0761-2026', 'FDA_ENFORCEMENT', 'Shoolin Pharma Chem LLP', 'Kadi', 'India', '2026-08-19', 'FDA Enforcement Notice: D-0761-2026
Recalling Firm: Shoolin Pharma Chem LLP
Location: Kadi, India
Report Date: 2026-08-19
Product: TADALAFIL USP, 0.500 KG, 0.500KG(500gm)-bag, Rx only, "For Prescription Compounding Only",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 171596-29-5), NDC 85702-002-04.
Reason: CGMP Deviations:Noted during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치', 'Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 0.500 KG, 0.500KG(500gm)-bag, Rx only, "For P 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0761-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0750-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0750-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 4.5mg (0.9 mg/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202. NDC 71170-812-03
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 4.5mg (0.9 mg/mL), 5 mL Sterile Multi-Dose Vial, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0750-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0746-2026', 'FDA_ENFORCEMENT', 'Novartis Pharmaceuticals Corporation', 'East Hanover, NJ', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0746-2026
Recalling Firm: Novartis Pharmaceuticals Corporation
Location: East Hanover, United States
Report Date: 2026-08-19
Product: Diovan (valsartan) 160 mg, 90 tablets, Rx only, Manufactured by: Patheon Manufacturing Services LLC, Greenville, NC 27834, Distributed by: Novartis Pharmaceutical Corp, East Hanover, NJ 07936, NDC 0078-0359-34
Reason: Failed Dissolution Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Novartis Pharmaceuticals Corporation] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Novartis Pharmaceuticals Corporation (East Hanover, United States) 제조소에서 Diovan (valsartan) 160 mg, 90 tablets, Rx only, Manufactured 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0746-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0754-2026', 'FDA_ENFORCEMENT', 'Apollo Care, LLC', 'Columbia, MO', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0754-2026
Recalling Firm: Apollo Care, LLC
Location: Columbia, United States
Report Date: 2026-08-19
Product: SEMAGLUTIDE 5mg (1mg/mL), Glycine 25 mg (5mg/mL), 5 mL Sterile Multi-Dose Vial, Rx Only, For Subcutaneous Injection Only, APOLLO care, 3801 Mojave Ct, Ste 102, Columbia, MO 65202.NDC 71170-712-03
Reason: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Apollo Care, LLC] Presence of Particulate Matter; identified as a nylon/p... 실사 및 리콜 조치', 'Apollo Care, LLC (Columbia, United States) 제조소에서 SEMAGLUTIDE 5mg (1mg/mL), Glycine 25 mg (5mg/mL), 5 mL Steri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as a nylon/polyamide and silk/proteinaceous-type material', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0754-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0787-2026', 'FDA_ENFORCEMENT', 'Baxter Healthcare Corporation', 'Deerfield, IL', 'United States', '2026-08-19', 'FDA Enforcement Notice: D-0787-2026
Recalling Firm: Baxter Healthcare Corporation
Location: Deerfield, United States
Report Date: 2026-08-19
Product: Cefazolin in Dextrose, Injection, USP, 2g / 100mL (20mg / mL) Single-Dose Infusion Bag in 100mL GALAXY Plastic Container, Frozen Premix, Sterile, Rx only, Manufactured by Baxter Healthcare Corporation, Deerfield, IL 60015, USA, NDC 0338-3508-41.
Reason: Presence of Particulate Matter
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Baxter Healthcare Corporation] Presence of Particulate Matter... 실사 및 리콜 조치', 'Baxter Healthcare Corporation (Deerfield, United States) 제조소에서 Cefazolin in Dextrose, Injection, USP, 2g / 100mL (20mg / mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0787-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0763-2026', 'FDA_ENFORCEMENT', 'Shoolin Pharma Chem LLP', 'Kadi', 'India', '2026-08-19', 'FDA Enforcement Notice: D-0763-2026
Recalling Firm: Shoolin Pharma Chem LLP
Location: Kadi, India
Report Date: 2026-08-19
Product: SILDENAFIL CITRATE USP, 1.00KG, 1.00KG-bag Net Wt. Rx only " For Prescription Compounding Only",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO. 171599-83-0) NDC 85702-001-08.
Reason: CGMP Deviations:Noted during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치', 'Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 SILDENAFIL CITRATE USP, 1.00KG, 1.00KG-bag Net Wt. Rx only " 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0763-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0762-2026', 'FDA_ENFORCEMENT', 'Shoolin Pharma Chem LLP', 'Kadi', 'India', '2026-08-19', 'FDA Enforcement Notice: D-0762-2026
Recalling Firm: Shoolin Pharma Chem LLP
Location: Kadi, India
Report Date: 2026-08-19
Product: TADALAFIL USP, 1.00 KG, 1KG(1000gm)-bag, Rx only, "For Prescription Compounding Only",  Shoolin Pharma Chem LLP, Block/Survey no 408, B/H Ratnamani Tubes, Near Maruti Inox, Indrad, Kadi, Mahesania, Gujarat, 382715, India, (CAS NO 171596-29-5), NDC 85702-001-08
Reason: CGMP Deviations:Noted during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shoolin Pharma Chem LLP] CGMP Deviations:Noted during FDA inspection... 실사 및 리콜 조치', 'Shoolin Pharma Chem LLP (Kadi, India) 제조소에서 TADALAFIL USP, 1.00 KG, 1KG(1000gm)-bag, Rx only, "For Presc 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations:Noted during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0762-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0733-2026', 'FDA_ENFORCEMENT', 'Aurobindo Pharma USA Inc', 'East Windsor, NJ', 'United States', '2026-08-12', 'FDA Enforcement Notice: D-0733-2026
Recalling Firm: Aurobindo Pharma USA Inc
Location: East Windsor, United States
Report Date: 2026-08-12
Product: Dicyclomine Hydrochloride Capsules, USP, 10mg, 1,000 bottles, Rx only, Distributed by: Aurobindo Pharma USA, Inc., 279 Princeton-Hightstown Road, East Windsor, NJ 08520, Made in India, NDC 59651-719-99
Reason: shortfill; reports of empty capsules.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Aurobindo Pharma USA Inc] shortfill; reports of empty capsules.... 실사 및 리콜 조치', 'Aurobindo Pharma USA Inc (East Windsor, United States) 제조소에서 Dicyclomine Hydrochloride Capsules, USP, 10mg, 1,000 bottles 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: shortfill; reports of empty capsules.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0733-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0744-2026', 'FDA_ENFORCEMENT', 'Sunny Pharmtech Inc.', 'Taoyuan City', 'Taiwan', '2026-08-12', 'FDA Enforcement Notice: D-0744-2026
Recalling Firm: Sunny Pharmtech Inc.
Location: Taoyuan City, Taiwan
Report Date: 2026-08-12
Product: Cyclophosphamide for Injection, USP, 2 gram/vial, One Single-Dose Vial, Rx only, Manufactured for: Long Grove Pharmaceuticals, LLC, Rosemont, IL 60018.  Manufactured in Taiwan, NDC 81298-8114-1
Reason: Presence of Particulate Matter; identified as stainless steel
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Sunny Pharmtech Inc.] Presence of Particulate Matter; identified as stainless... 실사 및 리콜 조치', 'Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 2 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0744-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0740-2026', 'FDA_ENFORCEMENT', 'Central Admixture Pharmacy Services Inc', 'Norcross, GA', 'United States', '2026-08-12', 'FDA Enforcement Notice: D-0740-2026
Recalling Firm: Central Admixture Pharmacy Services Inc
Location: Norcross, United States
Report Date: 2026-08-12
Product: Total Parental Nutrition - Pediatric PN Patient-Specific TPN Bag, (patient specific),  Compound Volume 416.8 mL per bag, Rx only, Single Dose Injection, Refrigerated Injection, Central Admixture Pharmacy Services, Inc., Atlanta, 1750 Corp Dr. Ste 725, Norcross, GA 30093 (844) 903-6418
Reason: Incorrect Product Formulation
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Central Admixture Pharmacy Services Inc] Incorrect Product Formulation... 실사 및 리콜 조치', 'Central Admixture Pharmacy Services Inc (Norcross, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect Product Formulation', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0740-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0745-2026', 'FDA_ENFORCEMENT', 'Zydus Pharmaceuticals (USA) Inc', 'Pennington, NJ', 'United States', '2026-08-12', 'FDA Enforcement Notice: D-0745-2026
Recalling Firm: Zydus Pharmaceuticals (USA) Inc
Location: Pennington, United States
Report Date: 2026-08-12
Product: Mirabegron Extended-Release Tablets, 25 mg, 30-count bottle, Rx only, Manufactured by: Zydus Lifesciences Ltd., Matoda, Ahmedabad, India, Distributed by: Zydus Pharmaceuticals (USA) Inc., Pennington, NJ 08534, NDC 70710-1159-3.
Reason: CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Zydus Pharmaceuticals (USA) Inc] CGMP: Due to Out of Specification (OOS) result for N-Ni... 실사 및 리콜 조치', 'Zydus Pharmaceuticals (USA) Inc (Pennington, United States) 제조소에서 Mirabegron Extended-Release Tablets, 25 mg, 30-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP: Due to Out of Specification (OOS) result for N-Nitroso Mirabegron impurity.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0745-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0743-2026', 'FDA_ENFORCEMENT', 'Sunny Pharmtech Inc.', 'Taoyuan City', 'Taiwan', '2026-08-12', 'FDA Enforcement Notice: D-0743-2026
Recalling Firm: Sunny Pharmtech Inc.
Location: Taoyuan City, Taiwan
Report Date: 2026-08-12
Product: Cyclophosphamide for Injection, USP, 1 gram/vial, One Single-Dose Vial, Rx only, Manufactured for: Long Grove Pharmaceuticals, LLC, Rosemont, IL 60018.  Manufactured in Taiwan, NDC 81298-8112-1
Reason: Presence of Particulate Matter; identified as stainless steel
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Sunny Pharmtech Inc.] Presence of Particulate Matter; identified as stainless... 실사 및 리콜 조치', 'Sunny Pharmtech Inc. (Taoyuan City, Taiwan) 제조소에서 Cyclophosphamide for Injection, USP, 1 gram/vial, One Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter; identified as stainless steel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0743-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0738-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0738-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-08-05
Product: Dabigatran Etexilate Capsules, 75 mg, 60-count (6x10)blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7253-68.
Reason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 60-count (6x10)blister 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0738-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0739-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0739-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-08-05
Product: Dabigatran Etexilate Capsules, 75 mg, 30-count (3x10) blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7253-04.
Reason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 75 mg, 30-count (3x10) bliste 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0739-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0731-2026', 'FDA_ENFORCEMENT', 'Glenmark Pharmaceuticals Inc., USA', 'Elmwood Park, NJ', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0731-2026
Recalling Firm: Glenmark Pharmaceuticals Inc., USA
Location: Elmwood Park, United States
Report Date: 2026-08-05
Product: Azelaic Acid Gel, 15%, 50 gram tubes, For Topical Use only, Rx only, Distributed by: Glenmark Pharmaceuticals Inc., USA, Elmwood Park, NJ 07407, NDC 68462-626-52.
Reason: CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Glenmark Pharmaceuticals Inc., USA] CGMP Deviations: Product quality complaints concerning ... 실사 및 리콜 조치', 'Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Azelaic Acid Gel, 15%, 50 gram tubes, For Topical Use only,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Product quality complaints concerning abnormal texture or consistency (described as grainy, gritty, or sandy) were received.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0731-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0734-2026', 'FDA_ENFORCEMENT', 'MYLAN PHARMACEUTICALS INC', 'Morgantown, WV', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0734-2026
Recalling Firm: MYLAN PHARMACEUTICALS INC
Location: Morgantown, United States
Report Date: 2026-08-05
Product: Mycophenolate Mofetil for Injection USP, 500 mg/Vial, Single Dose Vial, 4 vials per carton, Rx only, Manufactured for: Mylan Institutional LLC, Morgantown, WV, 26505 USA, Made in India, NDC 67457-386-00 (vial label) & NDC 67457-386-81 (carton label).
Reason: Presence of precipitate
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[MYLAN PHARMACEUTICALS INC] Presence of precipitate... 실사 및 리콜 조치', 'MYLAN PHARMACEUTICALS INC (Morgantown, United States) 제조소에서 Mycophenolate Mofetil for Injection USP, 500 mg/Vial, Single 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of precipitate', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0734-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0730-2026', 'FDA_ENFORCEMENT', 'MICRO LABS USA INC', 'Somerset, NJ', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0730-2026
Recalling Firm: MICRO LABS USA INC
Location: Somerset, United States
Report Date: 2026-08-05
Product: Dorzolamide HCl and Timolol Maleate Ophthalmic Solution, USP, 2%/0.5%, 10mL - bottle, Rx only, Manufactured by: Micro Labs Limited, India, Manufactured for: Micro Labs USA Inc., Somerset, NJ 08873. NDC 42571-147-26.
Reason: Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[MICRO LABS USA INC] Defective Container: Firm received multiple complaints ... 실사 및 리콜 조치', 'MICRO LABS USA INC (Somerset, United States) 제조소에서 Dorzolamide HCl and Timolol Maleate Ophthalmic Solution, USP 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective Container: Firm received multiple complaints of broken cap spikes and undeliverable drops.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0730-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0737-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-08-05', 'FDA Enforcement Notice: D-0737-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-08-05
Product: Dabigatran Etexilate Capsules, 150 mg, 60-count (6x10) blister pack further packaged in a carton, Rx only, Manufactured by: Alkem Laboratories Ltd., Mumbai, INDIA, Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268, NDC 0904-7255-68.
Reason: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed impurity/degradation specification: an OOS resul... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran Etexilate Capsules, 150 mg, 60-count (6x10) blist 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed impurity/degradation specification: an OOS result observed in Related substance test analysis w.r.t Impurity II, Impurity III and Total impurities for 12-month stability', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0737-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0716-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0716-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Max Strength (naphazoline hydrochloride 0.03%, polysorbate 90, 0.2%), Sterile 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127,  Made in Vietnam, UPC 310742011012,  NDC 10742-8158-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0716-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0709-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0709-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3560-0; NDC Blister: 0904-6951-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0709-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0722-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0722-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Cool Relief (naphazoline hydrochloride 0.012%, polysorbate 80 0.2%), Sterile, 0.4 FL OZ (13 mL) each, Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010749, NDC 10742-8141-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Cool Relief (naphazoline hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0722-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0711-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0711-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3563-0; NDC Blister: 0904-6956-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0711-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0758-2026', 'FDA_ENFORCEMENT', 'Supernus Pharmaceuticals, Inc.', 'Rockville, MD', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0758-2026
Recalling Firm: Supernus Pharmaceuticals, Inc.
Location: Rockville, United States
Report Date: 2026-07-29
Product: Trokendi XR, topiramate extended-release capsules, 25mg, 30 Capsules, Rx only, Manufactured by: Catalent Pharma Solutions, Winchester, KY 40391 USA, Manufactured for: Supernus Pharmaceuticals, Inc., Rockville, MD 20850 USA, NDC 17772-101-30.
Reason: Failed Dissolution Specifications
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Supernus Pharmaceuticals, Inc.] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Supernus Pharmaceuticals, Inc. (Rockville, United States) 제조소에서 Trokendi XR, topiramate extended-release capsules, 25mg, 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0758-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0703-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0703-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6952-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 88 mcg (0.088 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0703-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0727-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0727-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-07-29
Product: Naropin (ropivacaine hydrochloride Injection, USP), 0.5%, 100 mg per 20 mL (5 mg per mL), Twenty-five, 20 mL Single-Dose Vials, Rx only, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-286-23; NDC Vial:  63323-286-05
Reason: Presence of Particulate Matter: Hair was found in products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Naropin (ropivacaine hydrochloride Injection, USP), 0.5%, 10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0727-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0702-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0702-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6951-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 75 mcg (0.075 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0702-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0710-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0710-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3562-0; NDC Blister: 0904-6951-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 10 T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0710-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0700-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0700-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6949-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0700-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0719-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0719-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Digi Eye (hypromellose 0.35%, tetrahydrozoline HCl 0.05%), Sterile, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010602, NDC 10742-8175-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Digi Eye (hypromellose 0.35%, tetrah 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0719-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0728-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0728-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-07-29
Product: Xylocaine (lidocaine HCl Injection, USP), 1%, 200 mg per 20 mL (10 mg per mL), 25 Multiple-Dose Vials, 20 mL, Rx only, Sterile,  Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-485-27; NDC Vial:  63323-485-01
Reason: Presence of Particulate Matter: Hair was found in products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 200 mg per 20  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0728-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0720-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0720-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene glycol 0.3%), Sterile, 0.34 FL OZ (10 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011135, NDC 10742-8162-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0720-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0736-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0736-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-07-29
Product: Dabigatran etexilate Capsules, 150 mg, 20-count carton (2x10), Rx only, Manufactured by: Alkem Laboratories, Mumbai, INDIA, Distributed by: Major Pharmaceuticals, Indianapolis, IN 46268, NDC 0904-7255-10.
Reason: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 150 mg, 20-count carton (2x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0736-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0701-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0701-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6950-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 100 Ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0701-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0726-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0726-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-07-29
Product: Lidocaine HCl Injection, USP, 2%, 100 mg per 5 mL (20 mg per mL), 25 Single Dose Vials, 5 mL per vial,  Rx only, Sterile, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-208-05; NDC Vial:  63323-208-01
Reason: Presence of Particulate Matter: Hair was found in products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Lidocaine HCl Injection, USP, 2%, 100 mg per 5 mL (20 mg per 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0726-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0717-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0717-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Max Strength (naphazoline hydrochloride 0.03%, polysorbate 80 0.2%), Sterile, TWIN PACK, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011210, NDC 10742-8158-2
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Max Strength (naphazoline hydrochlor 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0717-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0742-2026', 'FDA_ENFORCEMENT', 'Bionpharma Inc.', 'Princeton, NJ', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0742-2026
Recalling Firm: Bionpharma Inc.
Location: Princeton, United States
Report Date: 2026-07-29
Product: Divalproex Sodium Delayed-Release Tablets, USP, 500 mg, 500 Tablets bottles, Rx only, Distributed by: Bionpharma Inc., Princeton, NJ 08540, Made in India, NDC 69452-435-30.
Reason: Presence of Foreign Tablets/Capsules
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bionpharma Inc.] Presence of Foreign Tablets/Capsules... 실사 및 리콜 조치', 'Bionpharma Inc. (Princeton, United States) 제조소에서 Divalproex Sodium Delayed-Release Tablets, USP, 500 mg, 500  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Tablets/Capsules', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0742-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0713-2026', 'FDA_ENFORCEMENT', 'Asclemed USA Inc.', 'Torrance, CA', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0713-2026
Recalling Firm: Asclemed USA Inc.
Location: Torrance, United States
Report Date: 2026-07-29
Product: Lidolog Kit, Kit Contains: Lidocaine HCl Injection, USP, 2% (2mL) vial, 1 Dose, Single use Only, Rx Only, Distributed by: Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 76420-760-01.
Reason: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Asclemed USA Inc.] Labeling: Not Elsewhere Classified: The label wrap cove... 실사 및 리콜 조치', 'Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidolog Kit, Kit Contains: Lidocaine HCl Injection, USP, 2%  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0713-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0712-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0712-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-07-29
Product: Amlodipine and Olmesartan Medoxomil Tablets, 10 mg/20 mg, 30 Tablets per bottle, Rx Only, Manufactured by: Alkem Laboratories Ltd., INDIA; Distributed by: Ascend Laboratories, LLC., Parsnippany, NJ 07054.  NDC: 67877-500-30
Reason: Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed Dissolution Specifications; Olmesartan Medoxomil... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 10 mg/20 mg, 30 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications; Olmesartan Medoxomil content below specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0712-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0707-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0707-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Carton: 55154-3558-0; NDC Blister: 0904-6949-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 25 mcg (0.025 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0707-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0704-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0704-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 112 mcg (0.0112 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6954-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 112 mcg (0.0112 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0704-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0718-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0718-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Optic Glow (naphazoline hydrochloride 0.03%, povidone 0.5%, propylene glycol 0.2%), Sterile, 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742010916, NDC 10742-8160-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Optic Glow (naphazoline hydrochlorid 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0718-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0729-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0729-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-07-29
Product: Xylocaine (lidocaine HCl Injection, USP), 1%, 500 mg per 50 mL (10 mg per mL), 25 Multiple-Dose Vials, 50 mL, Rx only, Sterile,  Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-485-57; NDC Vial:  63323-485-03
Reason: Presence of Particulate Matter: Hair was found in products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Xylocaine (lidocaine HCl Injection, USP), 1%, 500 mg per 50  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0729-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0725-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0725-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-07-29
Product: Glycopyrrolate Injection, USP, 1 mg per 5 mL (0.2 mg per mL), 25 x  5 mL fill in a 6.5 mL vial, Rx only, Multiple Dose Vials, Fresenius Kabi, Lake Zurich, IL 60047 NDC Tray: 63323-578-05; NDC Vial:  63323-578-07
Reason: Presence of Particulate Matter: Hair was found in product
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Presence of Particulate Matter: Hair was found in produ... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Glycopyrrolate Injection, USP, 1 mg per 5 mL (0.2 mg per mL) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate Matter: Hair was found in product', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0725-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0705-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0705-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6955-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 125 mcg (0.0125 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0705-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0741-2026', 'FDA_ENFORCEMENT', 'Precision Dose Inc.', 'South Beloit, IL', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0741-2026
Recalling Firm: Precision Dose Inc.
Location: South Beloit, United States
Report Date: 2026-07-29
Product: Glycopyrrolate Oral Solution, 1 mg/5 mL, delivers 5 mL, Rx only, Pkg: Precision Dose, Inc, S. Beloil, IL 61080, unit-dose oral syringes, NDCs 68094-073-01 (oral syringe) and 68094-073-58 (case).
Reason: Failed Impurities/Degradation Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Precision Dose Inc.] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치', 'Precision Dose Inc. (South Beloit, United States) 제조소에서 Glycopyrrolate Oral Solution, 1 mg/5 mL, delivers 5 mL, Rx o 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0741-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0708-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0708-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 10 Tablets (10 x 1) unit dose blisters per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA. Distributed by Cardinal Health, Dublin, OH 43017. NDC Bag: 55154-3559-0; NDC Blister: 0904-6950-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 50 mcg (0.050 mg), 10 Tab 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0708-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0724-2026', 'FDA_ENFORCEMENT', 'Rising Pharma Holding, Inc.', 'East Brunswick, NJ', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0724-2026
Recalling Firm: Rising Pharma Holding, Inc.
Location: East Brunswick, United States
Report Date: 2026-07-29
Product: Rising, Cyproheptadine Hydrochloride Syrup, 2mg/5 mL, 473 mL (ONE PINT), Rx only, Manufactured for: Rising Pharma Holdings, Inc., East Brunswick, NJ, Manufactured by: Lyne Laboratories, Inc., Brockton, MA. NDC 64980-504-48.
Reason: Presence of Precipitate: medication was crystallizing and particles floating in the bottle
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rising Pharma Holding, Inc.] Presence of Precipitate: medication was crystallizing a... 실사 및 리콜 조치', 'Rising Pharma Holding, Inc. (East Brunswick, United States) 제조소에서 Rising, Cyproheptadine Hydrochloride Syrup, 2mg/5 mL, 473 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Precipitate: medication was crystallizing and particles floating in the bottle', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0724-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0732-2026', 'FDA_ENFORCEMENT', 'JB Chemicals and Pharmaceuticals Ltd', 'Mumbai, N/A', 'India', '2026-07-29', 'FDA Enforcement Notice: D-0732-2026
Recalling Firm: JB Chemicals and Pharmaceuticals Ltd
Location: Mumbai, India
Report Date: 2026-07-29
Product: Cetirizine Hydrochloride Tablets USP 5 mg, 100-count bottle, Manufactured by: Unique Pharmaceuticals Labs, (A Div. of J.B. Chemicals & Pharmaceuticals, Ltd.), Mumbai 400 030, India. Distributed by: Rising Pharma Holdings, Inc., East Brunswick, NJ 08816, NDC 16571-401-10.
Reason: Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydrochloride Tablets USP 5 mg. Determined to be Ranitidine.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[JB Chemicals and Pharmaceuticals Ltd] Cross Contamination with Other Products: Customer compl... 실사 및 리콜 조치', 'JB Chemicals and Pharmaceuticals Ltd (Mumbai, India) 제조소에서 Cetirizine Hydrochloride Tablets USP 5 mg, 100-count bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: Customer complaints for appearance of  discolored tablets and red dots observed on Cetirizine Hydrochloride Tablets USP 5 mg. Determined to be Ranitidine.', 'CRITICAL', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0732-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0735-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0735-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-07-29
Product: Dabigatran etexilate Capsules, 110 mg, 60-count carton (6x10), Rx Only, Manufactured by: Alkem Laboratories, Mumbai, INDIA, Distributed by: Major Pharmaceuticals, Indianapolis, IN 46268, NDC 0904-7254-68.
Reason: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed Impurities/Degradation Specifications: OOS resul... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Dabigatran etexilate Capsules, 110 mg, 60-count carton (6x10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: OOS result was observed during the related substance test analysis with respect to Impurity II, Impurity III and Total impurity testing for 12 Month Long-Term Stability.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0735-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0715-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0715-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops ALL-IN-ONE (hypromellose 0.2%, tetrahydrozoline HCL 0.05%, zinc sulfate 0.25%), Sterile 0.4 FL OZ (13 mL), Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam UPC 310742010862, NDC 10742-8146-1
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops ALL-IN-ONE (hypromellose 0.2%, tetra 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0715-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0706-2026', 'FDA_ENFORCEMENT', 'Major Pharmaceuticals', 'Dublin, OH', 'United States', '2026-07-29', 'FDA Enforcement Notice: D-0706-2026
Recalling Firm: Major Pharmaceuticals
Location: Dublin, United States
Report Date: 2026-07-29
Product: Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 100 Tablets (10 x 10 unit dose blisters) per carton, Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, IN 46268 USA.  NDC: 0904-6956-61
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Major Pharmaceuticals] Subpotent Drug... 실사 및 리콜 조치', 'Major Pharmaceuticals (Dublin, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 150 mcg (0.0150 mg), 100  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0706-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0721-2026', 'FDA_ENFORCEMENT', 'Rohto-Mentholatum (Vietnam) Co., Ltd.', 'Ho Chi Minh, N/A', 'Vietnam', '2026-07-29', 'FDA Enforcement Notice: D-0721-2026
Recalling Firm: Rohto-Mentholatum (Vietnam) Co., Ltd.
Location: Ho Chi Minh, Vietnam
Report Date: 2026-07-29
Product: Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene glycol 0.3%), Sterile, TWIN PACK 0.34 FL OZ (10 mL) each, Distributed by: The Mentholatum Company, Orchard Park, NY 14127, Made in Vietnam, UPC 310742011159, NDC 10742-8162-2
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Rohto-Mentholatum (Vietnam) Co., Ltd.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Rohto-Mentholatum (Vietnam) Co., Ltd. (Ho Chi Minh, Vietnam) 제조소에서 Rohto Cooling Eye Drops Dry Aid (povidone 0.68%, propylene g 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0721-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0689-2026', 'FDA_ENFORCEMENT', 'Chiesi USA, Inc.', 'Cary, NC', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0689-2026
Recalling Firm: Chiesi USA, Inc.
Location: Cary, United States
Report Date: 2026-07-22
Product: CLEVIPREX (clevidipine injectable emulsion) 50 mg/100 mL (0.5 mg/mL), 10 Single Use Vials, Rx Only, Manufactured for: Chiesi USA, Inc., Cary, NC 27518, by Fresenius Kabi, Graz, Austria, NDC 10122-611-10.
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Chiesi USA, Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Chiesi USA, Inc. (Cary, United States) 제조소에서 CLEVIPREX (clevidipine injectable emulsion) 50 mg/100 mL (0. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0689-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0680-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0680-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: QC Quality Choice, Carbamide Peroxide, 6.5%, 0.5 FL. OZ. (15 mL) a) Washer Bulb included (NDC 63868-026-15); b) 1 bottle (NDC 63868-027-16), Distributed by C.D.M.A., Inc., 43157 W. Nine Mile, Novi, MI 48376.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 QC Quality Choice, Carbamide Peroxide, 6.5%, 0.5 FL. OZ. (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0680-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0679-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0679-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: Clinere, Carbamide Peroxide, a) 2 bottles of Clinere Carbamide Peroxide (2 x 0.50 mL) 6.5%, 0.5 fl. oz. (15 mL); b) 1 bottle of Clinere Carbamide Peroxide (0,50 fl. oz. (15 mL), Dist. by: Quest Products LLC, Pleasant Prairie, WI 53158, NDC 68229-102-01.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Clinere, Carbamide Peroxide, a) 2 bottles of Clinere Carbami 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0679-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0685-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0685-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: LEADER, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit -1 RUBBER BULB SYRINGE, 0.5 FL OZ DROPS, (NDC 70000-0689-1); b) 1 bottle (NDC 70000-0688-1), DIST. BY CARDINAL HEALTH, DUBLIN, OH 43017.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 LEADER, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit - 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0685-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0683-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0683-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: FAMILY Wellness, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), Kit - Washer Bulb Included, (NDC 55319-835-01), DISTRIBUTED BY: MIDWOOD BRANDS LLC, 500 VOLVO PKWY, CHESAPEAKE, VA 23320.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 FAMILY Wellness, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0683-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0690-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0690-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-22
Product: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol), 60 x 1 mL applicators/carton, 0.03fl oz (1 mL) each, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-31
Reason: Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of Assurance of Sterility: Affected product may ex... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Affected product may exhibit an open or incomplete seal on the packaging of the applicator', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0690-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0688-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0688-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: CAREone, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Bottle, NDC 72476-838-34, DISTRIBUTED BY: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CAREone, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Bottle, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0688-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0677-2026', 'FDA_ENFORCEMENT', 'Padagis US LLC', 'Minneapolis, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0677-2026
Recalling Firm: Padagis US LLC
Location: Minneapolis, United States
Report Date: 2026-07-22
Product: Nystatin Cream USP, (100,000 USP Nystatin Units), NET WT 15 g, Rx only, 15 g tube, Manufactured by Padagis, Yeruham, Israel, NDC 45802-059-35
Reason: Subpotent Drug: Low out of specification assay results performed during long-term stability testing.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Padagis US LLC] Subpotent Drug: Low out of specification assay results ... 실사 및 리콜 조치', 'Padagis US LLC (Minneapolis, United States) 제조소에서 Nystatin Cream USP, (100,000 USP Nystatin Units), NET WT 15  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug: Low out of specification assay results performed during long-term stability testing.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0677-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0687-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0687-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: meijer, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Washer Bulb included, NDC 41250-835-33, DIST. BY MEIJER DISTRIBUTION, INC., GRAND RAPIDS, MI 49544.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 meijer, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), Washer B 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['원료(API)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0687-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0678-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0678-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: CVS Health, Carbamide Peroxide, 6.5%, 0.5 FL Oz (15 mL), a) Bottle (NDC 51316-822-00.); b) Kit (1 BULB, Syringe & Drops- NDC 51316-823-00.), Distributed by: CVS Pharmacy., Inc. One CVS Drive, Woonsocket, RI 02895,
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 CVS Health, Carbamide Peroxide, 6.5%, 0.5 FL Oz (15 mL), a)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0678-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0681-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0681-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: TopCare Health, CARBAMIDE PEROXIDE 6.5%, 0.5 FL OZ (15 mL) a) Kit - WASHER BULB & DROPS INCLUDED (NDC 36800-835-33); b) 1 bottle (NDC 36800-835-34), DISTRIBUTED BY TOPCO ASSOCIATES LLC, ELK GROVE VILLAGE, IL 60007.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 TopCare Health, CARBAMIDE PEROXIDE 6.5%, 0.5 FL OZ (15 mL) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0681-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0682-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0682-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: AUDIOLOGIST''S CHOICE, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL) a) Kit - Washer Bulb Included (NDC 59256-001-02); b) 1 bottle (NDC  59256-836-34), Distributed By: Oaktree Products Inc., St. Louis. MO 63005.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 AUDIOLOGIST''S CHOICE, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0682-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0684-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0684-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: GOOD NEIGHBOR PHARMACY, Carbamide Peroxide 6.5%, 0.5 Fl Oz (15 mL), a) Kit - Washer Bulb Included, (NDC 46122-556-05); b) 1 bottle (NDC 46122-557-05), Distributed by: AmerisourceBergen, 1 West First Avenue, Conshohocken, PA 19428.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 GOOD NEIGHBOR PHARMACY, Carbamide Peroxide 6.5%, 0.5 Fl Oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0684-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0686-2026', 'FDA_ENFORCEMENT', 'Bell Pharmaceuticals, Inc', 'Belle Plaine, MN', 'United States', '2026-07-22', 'FDA Enforcement Notice: D-0686-2026
Recalling Firm: Bell Pharmaceuticals, Inc
Location: Belle Plaine, United States
Report Date: 2026-07-22
Product: Foster & Thrive, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), NDC 70677-1154-01, Distributed by: McKesson Corp., via SSSL, Memphis, TN 38141.
Reason: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Bell Pharmaceuticals, Inc] SubPotent Drug: low pH and significantly reduced assay ... 실사 및 리콜 조치', 'Bell Pharmaceuticals, Inc (Belle Plaine, United States) 제조소에서 Foster & Thrive, Carbamide Peroxide 6.5%, 0.5 FL OZ (15 mL), 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: SubPotent Drug: low pH and significantly reduced assay (~0.6% vs expected ~6 7%).', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0686-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0662-2026', 'FDA_ENFORCEMENT', 'ONESOURCE SPECIALTY PHARMA LIMITED', 'Bengaluru, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0662-2026
Recalling Firm: ONESOURCE SPECIALTY PHARMA LIMITED
Location: Bengaluru, India
Report Date: 2026-07-15
Product: Methohexital Sodium for Injection, USP 500 mg Multiple Dose Vial, Rx Only, Manufactured by: OneSource Specialty, Pharma Limited, Bengaluru - 561 203, India, Manufactured for: Avet Pharmaceuticals Inc., East Brunswick, NJ 08816, NDC 23155-893-31
Reason: Failed Impurities/Degradation Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ONESOURCE SPECIALTY PHARMA LIMITED] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치', 'ONESOURCE SPECIALTY PHARMA LIMITED (Bengaluru, India) 제조소에서 Methohexital Sodium for Injection, USP 500 mg Multiple Dose  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0662-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0666-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0666-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Gasco Isopropyl Alcohol 70%, Net Contents: 1 US Gallon (3.78 L), Manufactured by: Gasco Industrial Corp., PO Box 1360, Gurabo, PR 00778, Made in USA
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 1 US Gallon (3.78 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0666-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0667-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0667-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Gasco Isopropyl Alcohol 70%, 32 oz (946 mL) Gasco Industrial Corp., PO Box 1360, Gurabo PR 00778, UPC 7 87302 12363 6.
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, 32 oz (946 mL) Gasco Industrial 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0667-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0670-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0670-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 32 oz., 946 mL, Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana Llana Rio Piedras, PR 00924, UPC 659685696567.
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 32 oz. 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0670-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0691-2026', 'FDA_ENFORCEMENT', 'Shimoga Chemicals', 'Sangli, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0691-2026
Recalling Firm: Shimoga Chemicals
Location: Sangli, India
Report Date: 2026-07-15
Product: Clomiphene Citrate USP Active Pharmaceutical Ingredient (CAS : 50-41-9), Net Weight a)1 KG (NDC 84849-000-01), b) 500 g (NDC 84849-000-02), (c) 100 g (NDC 84849-000-03), Rx Only, Shimoga Chemicals Address -W-57A, MIDC Kupwad Samgli, Maharashtra, 416436, India.
Reason: cGMP deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Shimoga Chemicals] cGMP deviations... 실사 및 리콜 조치', 'Shimoga Chemicals (Sangli, India) 제조소에서 Clomiphene Citrate USP Active Pharmaceutical Ingredient (CAS 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP deviations', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0691-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0672-2026', 'FDA_ENFORCEMENT', 'Reliance Life Sciences Private Limited', 'Navi Mumbai, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0672-2026
Recalling Firm: Reliance Life Sciences Private Limited
Location: Navi Mumbai, India
Report Date: 2026-07-15
Product: Pemetrexed for Injection 500mg/Vial, 1 50 mL Single-Dose Vial per carton, For intravenous use only, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0835-01
Reason: Lack of Sterility Assurance
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치', 'Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 500mg/Vial, 1 50 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0672-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0665-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0665-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Gasco Isopropyl Alcohol 70%, Net Contents: 16 Oz. (474 mL). Manufactured by: Gasco Industrial Corp., PO Box 1360 Gurabo PR 00778 Made in USA UPC 7 87302 13044 3
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Gasco Isopropyl Alcohol 70%, Net Contents: 16 Oz. (474 mL).  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0665-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0668-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0668-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 1 gallon (3.78 liter), Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana LLana Rio Piedras, PR 00924
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 1 gall 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0668-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0673-2026', 'FDA_ENFORCEMENT', 'Reliance Life Sciences Private Limited', 'Navi Mumbai, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0673-2026
Recalling Firm: Reliance Life Sciences Private Limited
Location: Navi Mumbai, India
Report Date: 2026-07-15
Product: Bortezomib for Injection 3.5mg/Vial, 10 mL per Single-Dose Vial, For Intravenous or Subcutaneous Use, Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873. NDC: 70069-0836-01
Reason: Lack of Sterility Assurance
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치', 'Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Bortezomib for Injection 3.5mg/Vial, 10 mL per Single-Dose V 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0673-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0671-2026', 'FDA_ENFORCEMENT', 'Reliance Life Sciences Private Limited', 'Navi Mumbai, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0671-2026
Recalling Firm: Reliance Life Sciences Private Limited
Location: Navi Mumbai, India
Report Date: 2026-07-15
Product: Pemetrexed for Injection 100mg/Vial, 1 10 mL Single-Dose Vial per carton, For intravenous use only, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0834-01
Reason: Lack of Sterility Assurance
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치', 'Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Pemetrexed for Injection 100mg/Vial, 1 10 mL Single-Dose Via 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0671-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0674-2026', 'FDA_ENFORCEMENT', 'Reliance Life Sciences Private Limited', 'Navi Mumbai, N/A', 'India', '2026-07-15', 'FDA Enforcement Notice: D-0674-2026
Recalling Firm: Reliance Life Sciences Private Limited
Location: Navi Mumbai, India
Report Date: 2026-07-15
Product: Azacitidine for Injection 100mg/Vial, 1 10 mL Single-Dose Vial per carton, For Subcutaneous  and Intravenous Use, Rx only,  Manufactured for: Somerset Therapeutics, LLC., Somerset, NJ 08873 NDC: 70069-0857-01
Reason: Lack of Sterility Assurance
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Reliance Life Sciences Private Limited] Lack of Sterility Assurance... 실사 및 리콜 조치', 'Reliance Life Sciences Private Limited (Navi Mumbai, India) 제조소에서 Azacitidine for Injection 100mg/Vial, 1 10 mL Single-Dose Vi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Sterility Assurance', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0674-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0663-2026', 'FDA_ENFORCEMENT', 'BioMed Laboratories, LLC.', 'Dallas, TX', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0663-2026
Recalling Firm: BioMed Laboratories, LLC.
Location: Dallas, United States
Report Date: 2026-07-15
Product: Medline Remedy Specialized Silicone Cream (Hydraguard-D ),Manufactured for Medline Industries, LP, Three Lakes Drive, Northfield, IL 80090  2 FL OZ (59 mL) NDC  53329-159-13   4 FL OZ (118 mL)  NDC 53329-159-04
Reason: Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[BioMed Laboratories, LLC.] Failed Impurities/Degradation Specifications; Formaldeh... 실사 및 리콜 조치', 'BioMed Laboratories, LLC. (Dallas, United States) 제조소에서 Medline Remedy Specialized Silicone Cream (Hydraguard-D ),Ma 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications; Formaldehyde levels exceeded specification.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0663-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0669-2026', 'FDA_ENFORCEMENT', 'Gasco Industrial Corp.', 'Gurabo, PR', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0669-2026
Recalling Firm: Gasco Industrial Corp.
Location: Gurabo, United States
Report Date: 2026-07-15
Product: Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 16 oz, 474 mL, Distributed by: Drogueria San Juan, Calle De Diego 590, Sabana LLana Rio Piedras, PR 00924, UPC 69685696529
Reason: Subpotent drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Gasco Industrial Corp.] Subpotent drug... 실사 및 리콜 조치', 'Gasco Industrial Corp. (Gurabo, United States) 제조소에서 Drogueria San Juan Puerto Rico Isopropyl Alcohol 70%, 16 oz, 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0669-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0664-2026', 'FDA_ENFORCEMENT', 'QuVa Pharma, Inc.', 'Sugar Land, TX', 'United States', '2026-07-15', 'FDA Enforcement Notice: D-0664-2026
Recalling Firm: QuVa Pharma, Inc.
Location: Sugar Land, United States
Report Date: 2026-07-15
Product: Methohexital Sodium, 100 mg/10 mL (10 mg/mL), Total Volume: 10 mL, Rx only, Compounded drug, QuVa Pharma, 1075 W Park One Dr, Suite 100, Sugar Land, TX 77478, Product code: 70092-1310-46.
Reason: Failed Impurities/Degradation Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[QuVa Pharma, Inc.] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치', 'QuVa Pharma, Inc. (Sugar Land, United States) 제조소에서 Methohexital Sodium, 100 mg/10 mL (10 mg/mL), Total Volume:  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0664-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0697-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0697-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: TERPENICOL Antifungal Solution, (Undecylenic (10-Undecenoic) acid 25%), 1.0 Fl Oz (29.6 mL), Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Santa Fe Springs, CA 90670. NDC 63347-600-01
Reason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Solution, (Undecylenic (10-Undecenoic) 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0697-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0643-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0643-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)), packaged as a) 100 x 10.5 mL applicators/case, NDC 54365-400-35, Catalog Number: 930715NS; b) 100 x 10.5 mL applicators/case, Catalog Number bulk 930715NSB, NDC 54365-400-35; STERILE SOLUTION, CAREFUSION 213, LLC, EL PASO, TX 79912, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0643-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0698-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0698-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: Fungal Fusion ERADICATION Solution, Antifungal & Antimicrobial Kit. Contains, 1x2 oz bottle Fungal Fusion Antifungal (Miconazole Nitrate) Cream, 1x2oz  bottle Fungal Fusion Antifungal Solution (25% Undecylenic Acid) and 1x1oz bottle of Fungal Fusion Eradication Antimicrobial Show Spray (isopropyl Alcohol, D-Limonene, Undecylenic Acid).  Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Santa Fe Springs, CA 90670, Manufactured for Doctor''s Inc
Reason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Fungal Fusion ERADICATION Solution, Antifungal & Antimicrobi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0698-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0646-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0646-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: ChloraPrep FREPP, Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) 500 x 1.5 mL applicators/case, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-30, Catalog number 930599NSB
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 ChloraPrep FREPP, Clear, (2% w/v chlorhexidine gluconate (CH 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0646-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0723-2026', 'FDA_ENFORCEMENT', 'Lupin Pharmaceuticals Inc.', 'Naples, FL', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0723-2026
Recalling Firm: Lupin Pharmaceuticals Inc.
Location: Naples, United States
Report Date: 2026-07-08
Product: Glucagon Emergency Kit for Low Blood Sugar, Glucagon for Injection USP, 1mg per vial, Diluent for Glucagon, 1 mL syringe, Rx only, Manufactured for: Lupin Pharmaceuticals, Inc., Naples, FL 34108, Manufactured by: Lupin Limited, Nagpur - 441108, INDIA, NDC 70748-311-01
Reason: CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lupin Pharmaceuticals Inc.] CGMP deviation: OOS result observed for the Gliding For... 실사 및 리콜 조치', 'Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 Glucagon Emergency Kit for Low Blood Sugar, Glucagon for Inj 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP deviation: OOS result observed for the Gliding Force functionality test during 12-month long term stability testing.', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0723-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0661-2026', 'FDA_ENFORCEMENT', 'Cipla USA, Inc.', 'Warren, NJ', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0661-2026
Recalling Firm: Cipla USA, Inc.
Location: Warren, United States
Report Date: 2026-07-08
Product: Cinacalcet Hydrochloride Tablets, 30 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-410-02
Reason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치', 'Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 30 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0661-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0658-2026', 'FDA_ENFORCEMENT', 'Asclemed USA Inc.', 'Torrance, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0658-2026
Recalling Firm: Asclemed USA Inc.
Location: Torrance, United States
Report Date: 2026-07-08
Product: Accucaine, Kit contains: Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose ampule, Rx Only, Distributed by Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 76420-715-01.
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Asclemed USA Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Asclemed USA Inc. (Torrance, United States) 제조소에서 Accucaine, Kit contains: Lidocaine HCl Injection USP, 1% (10 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0658-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0652-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0652-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) 100 x 10.5 mL Applicators/case, STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-34, catalog number 930700NS.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0652-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0692-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0692-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: Revitaderm Wound Care Gel, Benzalkonium Chloride 0.1%, packaged in 1.0 FL OZ (37 mL) bottle, shorter twist cap, Manufactured By: Blaine Labs, Inc. 11037 Lockport Place Santa Fe Springs, CA 90670, NDC 63347-120-02.
Reason: Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] Microbial contamination of Non-Sterile Product: samples... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care Gel, Benzalkonium Chloride 0.1%, packa 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of Non-Sterile Product: samples identified the presence of Lysinibacillus fusiformis and other Bacillus spp', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0692-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0654-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0654-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-07-08
Product: Fexofenadine Hydrochloride Tablets, USP 180 mg, Antihistamine, 150 Tablets per bottle, Distributed by: Ohm Laboratories, Inc., New Brunswick, NJ 08901. NDC 66336-561-30
Reason: Failed Impurities/Degradation Specifications
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Failed Impurities/Degradation Specifications... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Fexofenadine Hydrochloride Tablets, USP 180 mg, Antihistamin 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0654-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0694-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0694-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: TRIPENICOL S Antifungal Solution (Undecylenic Acid 25%), 1.25 FL OZ (37.5 mL) bottle, Manufactured For: Trifluent Pharma, LLC, San Antonio, TX 78213,  NDC 73352-550-01.
Reason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIPENICOL S Antifungal Solution (Undecylenic Acid 25%), 1.2 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0694-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0651-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0651-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol),500 x 1 mL applicators/case,  STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co. NDC 54365-400-31, bulk catalog number 930480NSB
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep CLear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0651-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0655-2026', 'FDA_ENFORCEMENT', 'Lupin Pharmaceuticals Inc.', 'Naples, FL', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0655-2026
Recalling Firm: Lupin Pharmaceuticals Inc.
Location: Naples, United States
Report Date: 2026-07-08
Product: prednisoLONE Acetate Ophthalmic Suspension, USP, 1%, Rx only, Sterile, a) 5 mL (NDC 70748-332-02); b) 10 mL (NDC 70748-332-03), c) 15 mL (70748-332-04), Manufactured by: Lupin Limited, Pithampur (M.P) 454 775, INDIA
Reason: Presence of Foreign Substance
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lupin Pharmaceuticals Inc.] Presence of Foreign Substance... 실사 및 리콜 조치', 'Lupin Pharmaceuticals Inc. (Naples, United States) 제조소에서 prednisoLONE Acetate Ophthalmic Suspension, USP, 1%, Rx only 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0655-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0699-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0699-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: Revitaderm Wound Care, First Aid Antiseptic Gel, Benzalkonium Chloride 0.1%) packaged as (a) 1.0 Fl OZ (16 mL) bottle, long pointy cap, NDC 63347-120-02; (b) 3.0 Fl OZ (85 g) tube, with short twist cap, NDC 63347-120-01; Manufactured By: Blaine Labs, Inc. 11037 Lockport Place, Santa Fe Springs, CA 90670,
Reason: CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; product manufactured in the same facil... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 Revitaderm Wound Care, First Aid Antiseptic Gel, Benzalkoniu 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; product manufactured in the same facility under the same conditions as the product found to be contaminated', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0699-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0650-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0650-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 25 x 26 mL applicators/case, NDC 54365-400-39, catalog number 930825NS, b)  50 x 26 mL applicators/case, NDC 54365-400-39, bulk catalog number 930825NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0650-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0656-2026', 'FDA_ENFORCEMENT', 'ACCORD HEALTHCARE, INC.', 'Raleigh, NC', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0656-2026
Recalling Firm: ACCORD HEALTHCARE, INC.
Location: Raleigh, United States
Report Date: 2026-07-08
Product: Levothyroxine Sodium Tablets, USP, 300 mcg (0.3mg), 90 Tablets bottles, Rx only, Manufactured for: Accord Healthcare, Inc., Raleigh, NC 27617, Manufactured by: lntas Pharmaceuticals Limited, Camp Road, Selaqui, Dehradun-248 197, INDIA, NDC 16729-458-15.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD HEALTHCARE, INC.] Subpotent Drug... 실사 및 리콜 조치', 'ACCORD HEALTHCARE, INC. (Raleigh, United States) 제조소에서 Levothyroxine Sodium Tablets, USP, 300 mcg (0.3mg), 90 Table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0656-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0644-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0644-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD PurPrep,  (Povidone-iodine 8.3% w/w (0.83% available iodine) with isopropyl alcohol 72.5% w/w), 50 x 26 mL Applicator/case, STERILE SOLUTION, CAREFUSION 213, LLC, EL PASO, TX 79912, subsidiary of Beckton, Dickson and Co, Catalog Number 960120NSB; NDC 54365-014-42.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD PurPrep,  (Povidone-iodine 8.3% w/w (0.83% available iodi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0644-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0676-2026', 'FDA_ENFORCEMENT', 'Cipla USA, Inc.', 'Warren, NJ', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0676-2026
Recalling Firm: Cipla USA, Inc.
Location: Warren, United States
Report Date: 2026-07-08
Product: Cinacalcet Hydrochloride Tablets, 90 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-412-02
Reason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치', 'Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 90 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0676-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0675-2026', 'FDA_ENFORCEMENT', 'Cipla USA, Inc.', 'Warren, NJ', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0675-2026
Recalling Firm: Cipla USA, Inc.
Location: Warren, United States
Report Date: 2026-07-08
Product: Cinacalcet Hydrochloride Tablets, 60 mg, 30-count bottle, Rx Only, Manufactured by: Cipla Ltd., MIDC, Patalganga, India; Manufactured for: Cipla USA, Inc., 10 Independence Boulevard, Suite 300, Warren, NJ 07059, NDC 69097-411-02
Reason: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Cipla USA, Inc.] cGMP Deviations: presence of N-nitroso-cinacalcet, abov... 실사 및 리콜 조치', 'Cipla USA, Inc. (Warren, United States) 제조소에서 Cinacalcet Hydrochloride Tablets, 60 mg, 30-count bottle, Rx 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: cGMP Deviations: presence of N-nitroso-cinacalcet, above the acceptable daily intake (ADI).', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0675-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0696-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0696-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: vite20 Antifungal Cream, (10% Undecylenic Acid), 0.54 OZ (15 g) bottle, Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Sante Fe Springs, CA 90670, UPC 6 16728 00039 2.
Reason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 vite20 Antifungal Cream, (10% Undecylenic Acid), 0.54 OZ (15 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0696-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0659-2026', 'FDA_ENFORCEMENT', 'Asclemed USA Inc.', 'Torrance, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0659-2026
Recalling Firm: Asclemed USA Inc.
Location: Torrance, United States
Report Date: 2026-07-08
Product: Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose ampule, Rx Only, Distributed by Enovachem Pharmaceuticals, Torrance, CA 90501, NDC: 85766-187-01.
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Asclemed USA Inc.] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Asclemed USA Inc. (Torrance, United States) 제조소에서 Lidocaine HCl Injection USP, 1% (10 mg/mL), 5 mL single dose 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0659-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0653-2026', 'FDA_ENFORCEMENT', 'ACCORD BIOPHARMA INC', 'Raleigh, NC', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0653-2026
Recalling Firm: ACCORD BIOPHARMA INC
Location: Raleigh, United States
Report Date: 2026-07-08
Product: IMULDOSA, (ustekinumab-srlf) Injection, 130 mg/26 mL (5mg/mL), Rx only, Single dose vial, Manufactured by Accord BioPharma Inc., 8041 Arco corporate Drive, Suite 200, Raleigh, NC 27617, USA, Manufactured at: Catalent Indiana, LLC, 1300 S. Patterson Drive, Bloomington, IN 47403, USA, NDC 69448-019-26.
Reason: Lack of assurance of Sterility:
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ACCORD BIOPHARMA INC] Lack of assurance of Sterility:... 실사 및 리콜 조치', 'ACCORD BIOPHARMA INC (Raleigh, United States) 제조소에서 IMULDOSA, (ustekinumab-srlf) Injection, 130 mg/26 mL (5mg/mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of Sterility:', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0653-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0693-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0693-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: TRIFLUENT PHARMA TRIDERGEL Wound Care Gel, (Benzalkonium Chloride 0.1%), 1.0 fl oz, (29.6 mL) bottle with long pointy cap, Manufactured for: Trifluent Pharma, LLC. San Antonio, TX 78213. NDC 73352-520-01.
Reason: CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations: product manufactured in the same facil... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TRIFLUENT PHARMA TRIDERGEL Wound Care Gel, (Benzalkonium Chl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: product manufactured in the same facility under the same conditions as the product found to be contaminated', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0693-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0695-2026', 'FDA_ENFORCEMENT', 'Blaine Labs Inc', 'Santa Fe Springs, CA', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0695-2026
Recalling Firm: Blaine Labs Inc
Location: Santa Fe Springs, United States
Report Date: 2026-07-08
Product: TERPENICOL Antifungal Cream (Undecylenic Acid 13%), 1.0 oz (28 g) bottles, Manufactured By: Blaine Labs, Inc., 11037 Lockport Place, Sante Fe Springs, CA 90670, NDC 63347-601-01.
Reason: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Blaine Labs Inc] CGMP Deviations; the firm discontinued required stabili... 실사 및 리콜 조치', 'Blaine Labs Inc (Santa Fe Springs, United States) 제조소에서 TERPENICOL Antifungal Cream (Undecylenic Acid 13%), 1.0 oz ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; the firm discontinued required stability testing for products on the market still within expiry', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0695-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0647-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0647-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 100 x 3 mL applicators/case, NDC 54365-400-33, calatog 930415NS: b) 250 x 3mL applicators/case, bulk catalog number 930415NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0647-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0714-2026', 'FDA_ENFORCEMENT', 'McKesson', 'Irving, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0714-2026
Recalling Firm: McKesson
Location: Irving, United States
Report Date: 2026-07-08
Product: Gemcitabine Injection, 1 g per 26.3 mL (38 mg/mL), 26.3 mL Single-Dose Vial, For Intravenous Infusion ONLY, Rx only, Manufactured by: THYMOORGAN PHARMAZIE GmbH, Schiffgraben 23, 38690 Goslar, Germany; Distributed by: Hikma, Berkeley Heights, NJ 07922.  NDC: 0143-9341-01
Reason: Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[McKesson] Temperature Abuse: Product was stored incorrectly in a ... 실사 및 리콜 조치', 'McKesson (Irving, United States) 제조소에서 Gemcitabine Injection, 1 g per 26.3 mL (38 mg/mL), 26.3 mL S 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Temperature Abuse: Product was stored incorrectly in a controlled room temperature environment instead of a refrigerated environment.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0714-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0649-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0649-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as a) 100 x 10.5 mL Applicators/case, NDC 54365-400-36, catalog number 930725NS; b) 100 x 10.5 mL Applicators/case, bulk catalog number 930725NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Scrub Teal, (2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0649-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0648-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0648-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol) packaged as: a) 25 x 26 mL applicators/case, NDC 54365-400-38, calatog number 930815NS: b) 50 x 26 mL appliactors/case, bulk catalog number 930815NSB; STERILE SOLUTION, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Hi-Lite Orange, (2% w/v chlorhexidine gluconat 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0648-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0645-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0645-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-08
Product: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG), and 70% v/v isopropyl alcohol (IPA), Packaged as a) 100 x 3ml applicators/case, NDC 54365-400-32, catalog 930400NS; b) 250 x 3ml applicators/case, NDC 54365-400-32, bulk Catalog 930500NSB, Sterile Solution, CareFusion 123, LLC, El Paso, TX, subsidiary of Beckton, Dickson and Co.
Reason: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of assurance of sterility: Unsterilized ChloraPrep... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG),  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of assurance of sterility: Unsterilized ChloraPrep & PurPrep Applicators, intended for further processing and sterilization were instead distributed to customers outside of the intended distribution channel', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0645-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0660-2026', 'FDA_ENFORCEMENT', 'Lannett Company Inc.', 'Seymour, IN', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0660-2026
Recalling Firm: Lannett Company Inc.
Location: Seymour, United States
Report Date: 2026-07-08
Product: Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydrate, Dextroamphetamine Sulfate and Amphetamine Sulfate Extended-Release Capsules, 5 mg, Rx Only, 100 capsules, Distributed by: Lannett Company, Inc., Philadelphia, PA 19136, NDC: 0527-0790-37.
Reason: Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Lannett Company Inc.] Labeling: Label Mix-up: Capsules contain only immediate... 실사 및 리콜 조치', 'Lannett Company Inc. (Seymour, United States) 제조소에서 Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: Capsules contain only immediate-release (IR) pellets while labeled as ER capsules.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0660-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0657-2026', 'FDA_ENFORCEMENT', 'Boehringer Ingelheim Pharmaceuticals, Inc.', 'Ridgefield, CT', 'United States', '2026-07-08', 'FDA Enforcement Notice: D-0657-2026
Recalling Firm: Boehringer Ingelheim Pharmaceuticals, Inc.
Location: Ridgefield, United States
Report Date: 2026-07-08
Product: Synjardy XR Tablets (empagliflozin and metformin hydrochloride extended-release tablets), 12.5/1000 mg, 60 Tablets per Bottle, Rx only, Distributed by: Boehringer Ingelheim Pharmaceuticals, Inc., Ridgefield, CT 06877 USA.  NDC: 00597-0300-45
Reason: CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously been used for a different product.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Boehringer Ingelheim Pharmaceuticals, Inc.] CGMP Deviations: An incorrect detergent was used and th... 실사 및 리콜 조치', 'Boehringer Ingelheim Pharmaceuticals, Inc. (Ridgefield, United States) 제조소에서 Synjardy XR Tablets (empagliflozin and metformin hydrochlori 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: An incorrect detergent was used and the required swab sampling was not performed on a production hopper that had previously been used for a different product.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0657-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0626-2026', 'FDA_ENFORCEMENT', 'Annora Pharma Private Limited', 'Hyderabad, N/A', 'India', '2026-07-01', 'FDA Enforcement Notice: D-0626-2026
Recalling Firm: Annora Pharma Private Limited
Location: Hyderabad, India
Report Date: 2026-07-01
Product: Lacosamide Tablets, USP, C V, 100mg, Rx only, 60-count bottle, By: Annora Pharma Pvt., Ltd, Sangareddy -502313, Telangana, India, Manufactured for: Camber Pharmaceuticals, Inc., Piscataway, NJ 08854, NDC 31722-813-60.
Reason: Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Annora Pharma Private Limited] Presence of a Foreign Tablets: Complaint received, poss... 실사 및 리콜 조치', 'Annora Pharma Private Limited (Hyderabad, India) 제조소에서 Lacosamide Tablets, USP, C V, 100mg, Rx only, 60-count bottl 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of a Foreign Tablets: Complaint received, possible mix-up of Selexipag 1000 mcg tablet in a bottle of Lacosamide Tablets USP, 100mg.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0626-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0615-2026', 'FDA_ENFORCEMENT', 'Amgen, Inc.', 'Thousand Oaks, CA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0615-2026
Recalling Firm: Amgen, Inc.
Location: Thousand Oaks, United States
Report Date: 2026-07-01
Product: Corlanor (ivabradine) tablets, 7.5mg, 60-count bottles, Rx Only, Amgen Inc., Thousand Oaks, CA 92130 Made In Italy. NDC 55513-810-60
Reason: Presence of Foreign Substance.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amgen, Inc.] Presence of Foreign Substance.... 실사 및 리콜 조치', 'Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 7.5mg, 60-count bottles, Rx O 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0615-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0612-2026', 'FDA_ENFORCEMENT', 'Amgen, Inc.', 'Thousand Oaks, CA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0612-2026
Recalling Firm: Amgen, Inc.
Location: Thousand Oaks, United States
Report Date: 2026-07-01
Product: Corlanor (ivabradine) tablets, 5 mg, packaged in a) 14 tablets bottles (NDC 55513-800-99), and b) 60 tablet bottles (NDC 55513-800-60), Rx Only, Amgen Inc., Thousand Oaks, CA 92130 Made In Italy.
Reason: Presence of Foreign Substance.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amgen, Inc.] Presence of Foreign Substance.... 실사 및 리콜 조치', 'Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Corlanor (ivabradine) tablets, 5 mg, packaged in a) 14 table 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0612-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0622-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0622-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-01
Product: BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA) 1 mL Applicator, 60 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-31.
Reason: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of Assurance of Sterility: Due to wrinkles in the ... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear, (2% w/v chlorhexidine gluconate (CHG) a 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0622-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0611-2026', 'FDA_ENFORCEMENT', 'Ajanta Pharma USA Inc', 'Bridgewater, NJ', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0611-2026
Recalling Firm: Ajanta Pharma USA Inc
Location: Bridgewater, United States
Report Date: 2026-07-01
Product: Fenofibrate Capsules, USP 200 mg, Rx only, 100 Capsules, Manufactured by: Ajanta Pharma Limited, India, Marketed by: Ajanta Pharma USA Inc. Bridgewater, NJ 08807, NDC 27241-120-04.
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ajanta Pharma USA Inc] CGMP Deviations... 실사 및 리콜 조치', 'Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Fenofibrate Capsules, USP 200 mg, Rx only, 100 Capsules, Man 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0611-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0614-2026', 'FDA_ENFORCEMENT', 'Amgen, Inc.', 'Thousand Oaks, CA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0614-2026
Recalling Firm: Amgen, Inc.
Location: Thousand Oaks, United States
Report Date: 2026-07-01
Product: Sensipar (cinacalcet) Tablets, 60mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks ,CA 91320-1799, Made in Japan. NDC 55513-074-30
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치', 'Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 60mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0614-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0627-2026', 'FDA_ENFORCEMENT', 'Elevate Oral Care', 'West Palm Beach, FL', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0627-2026
Recalling Firm: Elevate Oral Care
Location: West Palm Beach, United States
Report Date: 2026-07-01
Product: Povi-One, 10% Povidone-Iodine Oral Antiseptic, Packaged by Elevate Oral Care, LLC, 346 Pike Road, Suite 6, West Palm Beach, FL 33411, NDC 57511-0611-1.
Reason: sub potency
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Elevate Oral Care] sub potency... 실사 및 리콜 조치', 'Elevate Oral Care (West Palm Beach, United States) 제조소에서 Povi-One, 10% Povidone-Iodine Oral Antiseptic, Packaged by E 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: sub potency', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0627-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0617-2026', 'FDA_ENFORCEMENT', 'Direct Rx', 'Dawsonville, GA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0617-2026
Recalling Firm: Direct Rx
Location: Dawsonville, United States
Report Date: 2026-07-01
Product: DULOXETINE D/R, a) 30 mg (NDC 61919-482-30), 30 Caps; b) 30 mg (NDC 61919-482-60), 60 Caps; CYMBALTA, Packaged and Distributed by Direct Rx.
Reason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Direct Rx] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치', 'Direct Rx (Dawsonville, United States) 제조소에서 DULOXETINE D/R, a) 30 mg (NDC 61919-482-30), 30 Caps; b) 30  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0617-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0623-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0623-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-01
Product: BD ChloraPrep FREPP Clear, (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)  1.5 mL Applicator, 20 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-30.
Reason: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Lack of Assurance of Sterility: Due to wrinkles in the ... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear, (2% w/v chlorhexidine gluconate ( 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0623-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0618-2026', 'FDA_ENFORCEMENT', 'Central Admixture Pharmacy Services, Inc.', 'Woburn, MA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0618-2026
Recalling Firm: Central Admixture Pharmacy Services, Inc.
Location: Woburn, United States
Report Date: 2026-07-01
Product: Total Parental Nutrition - Pediatric PN Patient-Specific TPN Bag, (patient specific), Rx# 24-1269856-0-1Compound Volume 1295 mL per bag, Rx only, Single Dose Injection, Refrigerated Injection, Central Admixture Pharmacy Services, Boston, 55 6th Rd Woburn, Massachusetts 01801-1767.
Reason: Incorrect product formulation: bag did not contain copper and famotidine per label.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Central Admixture Pharmacy Services, Inc.] Incorrect product formulation: bag did not contain copp... 실사 및 리콜 조치', 'Central Admixture Pharmacy Services, Inc. (Woburn, United States) 제조소에서 Total Parental Nutrition - Pediatric PN Patient-Specific TPN 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Incorrect product formulation: bag did not contain copper and famotidine per label.', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0618-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0609-2026', 'FDA_ENFORCEMENT', 'The Harvard Drug Group LLC', 'Dublin, OH', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0609-2026
Recalling Firm: The Harvard Drug Group LLC
Location: Dublin, United States
Report Date: 2026-07-01
Product: Carton Label: MAJOR, Methylergonovine Maleate Tablets, USP, 0.2 mg, 20 TABLETS (2 x 10), Rx only, Packaged and Distributed by: MAJOR PHARMACEUTICALS, Indianapolis, in 46268, NDC 0904-7282-10.  Blister Label: Methylergonovine Maleate Tablets, 0.2 mg, USP, One Tablet, Major Pharm/Indianapolis, IN 46268, NDC 0904-7282-10.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[The Harvard Drug Group LLC] Subpotent Drug... 실사 및 리콜 조치', 'The Harvard Drug Group LLC (Dublin, United States) 제조소에서 Carton Label: MAJOR, Methylergonovine Maleate Tablets, USP,  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0609-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0621-2026', 'FDA_ENFORCEMENT', 'PReye LLC', 'Wheat Ridge, CO', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0621-2026
Recalling Firm: PReye LLC
Location: Wheat Ridge, United States
Report Date: 2026-07-01
Product: PReye Vitamin See Antioxidant Preservative Free Eye Drops, Distributed by: PReye, LLC, Golden, CO
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[PReye LLC] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'PReye LLC (Wheat Ridge, United States) 제조소에서 PReye Vitamin See Antioxidant Preservative Free Eye Drops, D 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0621-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0624-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0624-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-01
Product: BD ChloraPrep Clear (2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)), 1 mL Applicator, 60 Applicators per inner Carton, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-31.
Reason: Non-Sterility: Due to presence of Aspergillus penicillioides.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Non-Sterility: Due to presence of Aspergillus penicilli... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep Clear (2% w/v chlorhexidine gluconate (CHG) an 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0624-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0619-2026', 'FDA_ENFORCEMENT', 'ANI Pharmaceuticals, Inc.', 'Baudette, MN', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0619-2026
Recalling Firm: ANI Pharmaceuticals, Inc.
Location: Baudette, United States
Report Date: 2026-07-01
Product: hydrOXYzine Hydrochloride Oral Solution, USP, 10 mg/5 mL, 473 mL (1 Pint), Rx only, Distributed by: ANI Pharmaceuticals, Inc., Baudette, MN 56623.  NDC: 70954-912-10
Reason: Presence of foreign substance
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[ANI Pharmaceuticals, Inc.] Presence of foreign substance... 실사 및 리콜 조치', 'ANI Pharmaceuticals, Inc. (Baudette, United States) 제조소에서 hydrOXYzine Hydrochloride Oral Solution, USP, 10 mg/5 mL, 47 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0619-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0628-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0628-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-07-01
Product: Perampanel CIII Tablets, 6mg, Rx only, 30 Tablets, Mfd.by: Taro Pharmaceutical Industries Ltd., Haifa Bay, Israel 2624761, Dist. by: Sun Pharmaceutical Industries, Inc., Cranbury, NJ 08512, NDC 51672-4206-6
Reason: Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Labeling: Label Mix-up: 10mg Perampanel CIII tablet was... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Perampanel CIII Tablets, 6mg, Rx only, 30 Tablets, Mfd.by: T 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Label Mix-up: 10mg Perampanel CIII tablet was found in a Perampanel CIII bottle labeled Perampanel 6 mg tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0628-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0616-2026', 'FDA_ENFORCEMENT', 'Amgen, Inc.', 'Thousand Oaks, CA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0616-2026
Recalling Firm: Amgen, Inc.
Location: Thousand Oaks, United States
Report Date: 2026-07-01
Product: Sensipar (cinacalcet) Tablets, 90mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks, CA 91320-1799, Made in Japan. NDC 55513-075-30
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치', 'Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 90mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0616-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0613-2026', 'FDA_ENFORCEMENT', 'Amgen, Inc.', 'Thousand Oaks, CA', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0613-2026
Recalling Firm: Amgen, Inc.
Location: Thousand Oaks, United States
Report Date: 2026-07-01
Product: Sensipar (cinacalcet) Tablets, 30mg, 30-count bottles, Rx Only, Distributed by: Amge, One Amgen Center Drive, Thousand Oaks ,CA 91320-1799, Made in Japan. NDC 55513-073-30
Reason: CGMP Deviations
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amgen, Inc.] CGMP Deviations... 실사 및 리콜 조치', 'Amgen, Inc. (Thousand Oaks, United States) 제조소에서 Sensipar (cinacalcet) Tablets, 30mg, 30-count bottles, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0613-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0625-2026', 'FDA_ENFORCEMENT', 'CareFusion 213, LLC', 'El Paso, TX', 'United States', '2026-07-01', 'FDA Enforcement Notice: D-0625-2026
Recalling Firm: CareFusion 213, LLC
Location: El Paso, United States
Report Date: 2026-07-01
Product: BD ChloraPrep FREPP Clear,(2% w/v chlorhexidine gluconate (CHG) and 70% v/v isopropyl alcohol (IPA)) 1.5 mL Applicator, 20 Applicators, Sterile Solution, Care Fusion 213, LLC, El Paso, TX 79912, subsidiary of Beckton, Dickinson and Co., NDC 54365-400-30.
Reason: Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[CareFusion 213, LLC] Non-Sterility: Due to presence of Aspergillus penicilli... 실사 및 리콜 조치', 'CareFusion 213, LLC (El Paso, United States) 제조소에서 BD ChloraPrep FREPP Clear,(2% w/v chlorhexidine gluconate (C 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Non-Sterility: Due to presence of Aspergillus penicillioides. And Lack of Assurance of Sterility: Due to wrinkles in the paper lidding which may breach the seal   area.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0625-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0602-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0602-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: DHP Topical Anesthetic Gel, Benzocaine 20%, Strawberry Flavor, 1 oz. (30 g), Manufactured for and Distributed by Dental Health Products, Inc, 2614 North Sugar Bush Road, New Franken, WI 54229. NDC 69634-020-30
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 DHP Topical Anesthetic Gel, Benzocaine 20%, Strawberry Flavo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0602-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0640-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0640-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 1 oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30503 0.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 1 oz (28.3g) tub 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0640-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0605-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0605-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: PureLife, TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, 1 oz (30mL), Strawberry Flavor, Manufactured for Pure Life, LLC,  Manufactured for PureLife LLC., Carson, CA 90810. NDC 68987-001-30
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 PureLife, TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, 1 oz (30m 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0605-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0633-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0633-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Rapidol, Triple Antibiotic First Aid Ointment, Bacitracin Zinc 400 units, Neomycin Sulfate 3.5 mg, Polymyxin-B Sulfate 5,000 units, net wt. 2oz (57g) tubes, Distributed by/por: Pharmadel LLC, New Castle, DE 19720, Made in India, UPC 8 10096 77162 9.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Rapidol, Triple Antibiotic First Aid Ointment, Bacitracin Zi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0633-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0641-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0641-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc (equivalent to 400 units), Neomycin Sulfate 5 mg, Polymixin B 5000 units, 0.9g packets, 144 packets per box, 130g, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 1 03 52410 30253 1.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc (equi 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0641-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0630-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0630-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Lucky Super Soft, First Aid Triple Antibiotic Ointment, Bacitracin zinc 400 units, neomycin sulphate 3.5 mg, polymyxin B sulphate 5000 units, Net Wt. 0.5 oz (14g) tubes, Manufactured for Delta Brands Inc., 580 White Plains Rd., Tarrytown, NY 10591 USA, Made in India, UPC 8 08829 10372 4.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, First Aid Triple Antibiotic Ointment, Baci 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0630-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0637-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0637-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, Bacitracin Zinc Ointment, 1oz (28.3g) per tube, 72 tubes per case, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC X004WB4LKT.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 1oz (28.3g) per tube, 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0637-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0593-2026', 'FDA_ENFORCEMENT', 'IntegraDose Compounding Services LLC', 'Shoreview, MN', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0593-2026
Recalling Firm: IntegraDose Compounding Services LLC
Location: Shoreview, United States
Report Date: 2026-06-24
Product: Vasopressin 2 Units/2 mL in 0.9% Sodium Chloride, syringe, IntegraDose Compounding Services, LLC. 3650 Victoria St N, Suite 900, Shoreview, MN, NDC 71139-0190-1.
Reason: Subpotent Drug
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[IntegraDose Compounding Services LLC] Subpotent Drug... 실사 및 리콜 조치', 'IntegraDose Compounding Services LLC (Shoreview, United States) 제조소에서 Vasopressin 2 Units/2 mL in 0.9% Sodium Chloride, syringe, I 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Subpotent Drug', 'MAJOR', ARRAY['시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0593-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0610-2026', 'FDA_ENFORCEMENT', 'Inventia Healthcare Limited', 'Kalyan', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0610-2026
Recalling Firm: Inventia Healthcare Limited
Location: Kalyan, India
Report Date: 2026-06-24
Product: Chlorthalidone Tablets, USP, 25 mg, [100 or 1000] Tablets pr bottle, Rx only, Manufactured by: Inventia Healthcare Limited, Additional Ambernath, M.I.D.C., Ambernath (East) - 421506, INDIA.  Distributed by: Risiong Pharma Holdings, Inc., East Brunswick, NJ 08816.  NDC 100-tablet bottle: 64980-599-01; NDC 1000-tablet bottle: 64980-599-10
Reason: Failed Dissolution Specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Inventia Healthcare Limited] Failed Dissolution Specifications... 실사 및 리콜 조치', 'Inventia Healthcare Limited (Kalyan, India) 제조소에서 Chlorthalidone Tablets, USP, 25 mg, [100 or 1000] Tablets pr 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0610-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0601-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0601-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: Quala Dental Products, Topical Anesthetic Gel, 20 % Benzocaine, Strawberry Flavor Net Contents: 1 oz (30 g), Quala Dental Products, Made in USA for NDC Inc., 407 Sanford Road, Le Vergne, TN 37086, NDC 43128-034-30.
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 Quala Dental Products, Topical Anesthetic Gel, 20 % Benzocai 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0601-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0629-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0629-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Lucky Super Soft, Antifungal Athlete''s Foot Cream, Clotrimazole 1% Cream, Net Wt. 1.5 oz (42.5g) Tubes, Manufactured for Delta Brands Inc., 580 White Plains Rd., Tarrytown, NY 10591 USA, Made in India, UPC 8 08829 10461 5.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lucky Super Soft, Antifungal Athlete''s Foot Cream, Clotrimaz 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0629-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0639-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0639-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 16oz (454g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 305061.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, HYDROCORTISONE CREAM 1%, Net Wt. 16oz (454g) tube 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0639-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0636-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0636-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, Bacitracin Zinc Ointment, 500 units, 1oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30354 8.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 1oz (28.3g)  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0636-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0590-2026', 'FDA_ENFORCEMENT', 'PAI Holdings LLC', 'Greenville, SC', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0590-2026
Recalling Firm: PAI Holdings LLC
Location: Greenville, United States
Report Date: 2026-06-24
Product: VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY FLAVOR, 50 Grams Activated Charcoal in 240 ml (8 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-202-08.
Reason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치', 'PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0590-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0591-2026', 'FDA_ENFORCEMENT', 'PAI Holdings LLC', 'Greenville, SC', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0591-2026
Recalling Firm: PAI Holdings LLC
Location: Greenville, United States
Report Date: 2026-06-24
Product: VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY FLAVOR, 25 Grams Activated Charcoal in 26 Grams Sorbitol in 120 mL (4 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-203-04.
Reason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치', 'PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0591-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0589-2026', 'FDA_ENFORCEMENT', 'PAI Holdings LLC', 'Greenville, SC', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0589-2026
Recalling Firm: PAI Holdings LLC
Location: Greenville, United States
Report Date: 2026-06-24
Product: VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY FLAVOR, 25 Grams Activated Charcoal in 120 ml (4 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-202-04.
Reason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치', 'PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN AQUEOUS BASE WITH CHERRY F 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0589-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0594-2026', 'FDA_ENFORCEMENT', 'Ajanta Pharma USA Inc', 'Bridgewater, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0594-2026
Recalling Firm: Ajanta Pharma USA Inc
Location: Bridgewater, United States
Report Date: 2026-06-24
Product: Aripiprazole Tablets USP, Rx only, 30 mg, 30 tablets, Marketed by: Ajanta Pharma USA Inc., Bridgewater, NJ 08807, Made in India, NDC 27241-056-03.
Reason: Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ajanta Pharma USA Inc] Product Mix-Up:  A bottle containing Voriconazole Table... 실사 및 리콜 조치', 'Ajanta Pharma USA Inc (Bridgewater, United States) 제조소에서 Aripiprazole Tablets USP, Rx only, 30 mg, 30 tablets, Market 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Product Mix-Up:  A bottle containing Voriconazole Tablets 50 mg was labelled and distributed as Aripiprazole Tablets USP 30 mg.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0594-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0603-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0603-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: Burkhart topical anesthetic gel, benzocaine 20 %, Strawberry Flavor, 1 oz (30 mL), Manufactured for Burkhart Dental Supply, Tacoma, Washington, 98409. NDC: 43498-310-30
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 Burkhart topical anesthetic gel, benzocaine 20 %, Strawberry 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0603-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0604-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0604-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: Dental City TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, Strawberry Flavor, 1 OZ (30 g), Distributed by Dental City, 3205 Yeager Dr., Green Bay, WI 54311. NDC 69483-001-30
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 Dental City TOPICAL ANESTHETIC GEL,  BENZOCAINE 20%, Strawbe 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0604-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0632-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0632-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Lil Drug Store, Triple Antibiotic Ointment, Bacitracin Zinc (400 units), Neomycin Sulfate (3.5 mg), Polymyxin-B Sulfate (5000 units), net wt. 0.5 oz (14.2g), Product distributed by: Lil'' Drug Store Products, Inc., 9300 Earhart Lane SW, Cedar Rapids, IA 52404, Made in India, UPC 3 66715 97310 8.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Lil Drug Store, Triple Antibiotic Ointment, Bacitracin Zinc  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0632-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0606-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0606-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: safco SensiCaine-Ultra (20% Benzocaine), Topical Anesthetic Gel, Strawberry Flavor, 1 oz. (29.6mL),   Distributed by: Safco Dental Supply Co., Buffalo Grove, IL 60099, Made in USA, NDC 67239-0223-1.
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 safco SensiCaine-Ultra (20% Benzocaine), Topical Anesthetic  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0606-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0638-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0638-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, 1% Clotrimazole Antifungal Cream, Net Wt. 1oz (28.3g), Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 524103 0244 2.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, 1% Clotrimazole Antifungal Cream, Net Wt. 1oz (28 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0638-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0608-2026', 'FDA_ENFORCEMENT', 'Sandoz Inc', 'Princeton, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0608-2026
Recalling Firm: Sandoz Inc
Location: Princeton, United States
Report Date: 2026-06-24
Product: Focalin XR (dexmethylphenidate HCl) 5 mg, 30 extended-release capsules per bottle, Rx only, Manufactured by Societal CDMO Gainesville, LLC, Gainesville, GA 30504.  NDC: 66758-235-31
Reason: Labeling: Incorrect or Missing Lot and/or Exp Date
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Sandoz Inc] Labeling: Incorrect or Missing Lot and/or Exp Date... 실사 및 리콜 조치', 'Sandoz Inc (Princeton, United States) 제조소에서 Focalin XR (dexmethylphenidate HCl) 5 mg, 30 extended-releas 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Incorrect or Missing Lot and/or Exp Date', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0608-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0642-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0642-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc 400 units, Neomycin Sulfate 5 mg, Polymyxin B 5000 units, 1oz (28.3g) tubes, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30255 8.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Triple Antibiotic Ointment, Bacitracin Zinc 400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0642-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0588-2026', 'FDA_ENFORCEMENT', 'Glenmark Pharmaceuticals Inc., USA', 'Elmwood Park, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0588-2026
Recalling Firm: Glenmark Pharmaceuticals Inc., USA
Location: Elmwood Park, United States
Report Date: 2026-06-24
Product: Alyacen 7/7/7, Norethindrone and Ethinyl Estradiol Tablets USP, 0.5mg/0.035mg, 0.75mg/0.035mg, 1 mg/0.0.35mg, 3 Blister Cards each containing 28 tablets, 28 day regimen, Rx only, Manufactured by: Glenmark Pharmaceuticals Ltd., Colvale-Bardez, Goa 403 513, India, Manufactured for: Glenmark Pharmaceuticals Inc., Mahwah, NJ 07430, NDC 68462-556-29
Reason: Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Glenmark Pharmaceuticals Inc., USA] Failed Impurities/Degradation Specifications: This reca... 실사 및 리콜 조치', 'Glenmark Pharmaceuticals Inc., USA (Elmwood Park, United States) 제조소에서 Alyacen 7/7/7, Norethindrone and Ethinyl Estradiol Tablets U 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradation Specifications: This recall is being initiated due to out-of-specification results total impurities.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0588-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0631-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0631-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Circle K, triple antibiotic ointment, Bacitracin Zinc (400 units), Neomycin Sulfate (3.5 mg), Polymyxin-B Sulfate (5000 units), net wt. 0.5 oz (14.2g) tubes, Product manufactured for Lil'' Drug Store Products, Inc., 9300 Earhart Lane SW, Cedar Rapids, IA 52404, Made in India, UPC 1 94283 65181 0.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Circle K, triple antibiotic ointment, Bacitracin Zinc (400 u 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['원료(API)']::text[], ARRAY[]::text[], ARRAY[]::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0631-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0596-2026', 'FDA_ENFORCEMENT', 'Par Health USA, LLC', 'Rochester, MI', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0596-2026
Recalling Firm: Par Health USA, LLC
Location: Rochester, United States
Report Date: 2026-06-24
Product: Buprenorphine HCl, CIII, Injection, 0.3 mg/mL, 5 x 1 mL Single Dose Vials per Carton, Rx Only, For Intramuscular or Intravenous use, Manufactured for: Endo USA, Malvern, PA 19355,  NDC 42023-179-05
Reason: Crystallization; identified as Buprenorphine free base
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Par Health USA, LLC] Crystallization; identified as Buprenorphine free base... 실사 및 리콜 조치', 'Par Health USA, LLC (Rochester, United States) 제조소에서 Buprenorphine HCl, CIII, Injection, 0.3 mg/mL, 5 x 1 mL Sing 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Crystallization; identified as Buprenorphine free base', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0596-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0600-2026', 'FDA_ENFORCEMENT', 'Keystone Industries', 'Gibbstown, NJ', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0600-2026
Recalling Firm: Keystone Industries
Location: Gibbstown, United States
Report Date: 2026-06-24
Product: Pearson Quality Topical Anesthetic Gel (20% Benzocaine), Mint Flavor, Net Contents: 1 oz (3o g), Manufactured for: Pearson Dental Supply Inc., Sylmar, CA 91342 USA, NDC 43305-0009-3.
Reason: Defective container:may contain bottles with incomplete seals
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Keystone Industries] Defective container:may contain bottles with incomplete... 실사 및 리콜 조치', 'Keystone Industries (Gibbstown, United States) 제조소에서 Pearson Quality Topical Anesthetic Gel (20% Benzocaine), Min 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Defective container:may contain bottles with incomplete seals', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0600-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0592-2026', 'FDA_ENFORCEMENT', 'PAI Holdings LLC', 'Greenville, SC', 'United States', '2026-06-24', 'FDA Enforcement Notice: D-0592-2026
Recalling Firm: PAI Holdings LLC
Location: Greenville, United States
Report Date: 2026-06-24
Product: VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY FLAVOR, 50 Grams Activated Charcoal in 52 Grams Sorbitol in 240 mL (8 fl oz), distributed by: VistaPharm, Inc., Largo. FL 33771, NDC 66689-203-08.
Reason: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[PAI Holdings LLC] Does Not Meet USP or OTC Monograph: Product did not mee... 실사 및 리콜 조치', 'PAI Holdings LLC (Greenville, United States) 제조소에서 VistaPharm, KERR INSTA-CHAR IN AN SORBITOL BASE WITH CHERRY  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Does Not Meet USP or OTC Monograph: Product did not meet the Over-the-Counter (OTC) Monograph M023', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0592-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0634-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0634-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Cura Hongos, Crema Antifungica, Clotrimazole 1%, 2oz (57g) tubes, Dist by/por: Pharmadel LLC, New Castle, DE 19720, Made in India, UPC 8 52924 00683 1.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Cura Hongos, Crema Antifungica, Clotrimazole 1%, 2oz (57g) t 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0634-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0635-2026', 'FDA_ENFORCEMENT', 'Dabur India Limited', 'Dadra And Nagar Haveli', 'India', '2026-06-24', 'FDA Enforcement Notice: D-0635-2026
Recalling Firm: Dabur India Limited
Location: Dadra And Nagar Haveli, India
Report Date: 2026-06-24
Product: Med Pride, Bacitracin Zinc Ointment, 500 units, 0.9g packets Net Wt 130g, 144 count box, Manufactured for: Shield Line LLC, 59 Hook Road, Bayonne, NJ 07002 USA, Made in India, UPC 3 52410 30352 4.
Reason: CGMP Deviations; deficiencies observed during FDA inspection
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Dabur India Limited] CGMP Deviations; deficiencies observed during FDA inspe... 실사 및 리콜 조치', 'Dabur India Limited (Dadra And Nagar Haveli, India) 제조소에서 Med Pride, Bacitracin Zinc Ointment, 500 units, 0.9g packets 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; deficiencies observed during FDA inspection', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0635-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0597-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0597-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-06-17
Product: Minocycline Hydrochloride Extended-Release Tablets, USP, 115 mg, 30-count bottle, Rx Only, Manufactured by: Alkem Laboratories Ltd., INDIA. Distributed by: Ascend Laboratories, LLC, Parsippany, NJ 07054.  NDC: 67877-644-30
Reason: Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed Dissolution Specifications: An out-of-specificat... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Minocycline Hydrochloride Extended-Release Tablets, USP, 115 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: An out-of-specification (OOS) result was observed during the 9th month of dissolution test analysis', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0597-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0595-2026', 'FDA_ENFORCEMENT', 'Haleon US Holdings LLC', 'Warren, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0595-2026
Recalling Firm: Haleon US Holdings LLC
Location: Warren, United States
Report Date: 2026-06-17
Product: Gas-X Extra Strength, SIMETHICONE 125 mg/ANTIGAS, packaged in a) 120 SoftGels (UPC 3 00674 35041 9, b) 72 SoftGels (UPC 3 00439 00572 1), Distributed by: Haleon, Warren, NJ 07059.
Reason: Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Haleon US Holdings LLC] Chemical Contamination: contamination with a diluted pr... 실사 및 리콜 조치', 'Haleon US Holdings LLC (Warren, United States) 제조소에서 Gas-X Extra Strength, SIMETHICONE 125 mg/ANTIGAS, packaged i 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Chemical Contamination: contamination with a diluted propylene glycol-based coolant from a machine leakage during the packaging process.', 'CRITICAL', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0595-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0620-2026', 'FDA_ENFORCEMENT', 'BEEKEEPER''S NATURALS USA INC.', 'Covina, CA', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0620-2026
Recalling Firm: BEEKEEPER''S NATURALS USA INC.
Location: Covina, United States
Report Date: 2026-06-17
Product: BEEKEEPER''S NATURALS Saline Nasal Spray, Sinus Congestion Rinse, Made with Propolis + Xylitol, 1 FL OZ (30 mL) per bottle, Manufactured For:  Beekeeper''s Naturals USA Inc., Covina, CA 91789.
Reason: Microbial Contamination of Non-Sterile Products
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[BEEKEEPER''S NATURALS USA INC.] Microbial Contamination of Non-Sterile Products... 실사 및 리콜 조치', 'BEEKEEPER''S NATURALS USA INC. (Covina, United States) 제조소에서 BEEKEEPER''S NATURALS Saline Nasal Spray, Sinus Congestion Ri 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial Contamination of Non-Sterile Products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0620-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0607-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0607-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-06-17
Product: Budesonide Inhalation Suspension, 1mg/2mL, 30 x 2 mL Sterile Single-Dose Ampules (5 Single-Dose Ampules per pouch, 6 pouches per carton, Distributed by: Sun Pharmaceutical Industries, Inc., Cranbury, NJ 08512, Manufactured by: Sun Pharmaceutical Industries Limited, Baska Ujeti Road, Ujeti Halol-289350, Gujarat, India, NDC 47335-633-49.
Reason: Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and particles within the ampoule solution
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Presence of Foreign Substance:This recall has been init... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Budesonide Inhalation Suspension, 1mg/2mL, 30 x 2 mL Sterile 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Foreign Substance:This recall has been initiated in response to a product quality complaint reported for black/brown specs and particles within the ampoule solution', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0607-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0586-2026', 'FDA_ENFORCEMENT', 'Zep Inc', 'Emerson, GA', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0586-2026
Recalling Firm: Zep Inc
Location: Emerson, United States
Report Date: 2026-06-17
Product: Zep, Alcohol Sanitizer Spray, Ethanol 70%, Net Contents 55 Gallons 208 Liters, Made in USA, A Zep Inc. Brand, Distributed by: Zap Inc., 350 Joe Frank Harris Parkway, SE, Emerson, GA 30137, NDC 66949-133-85.
Reason: Microbial contamination of sterile products
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Zep Inc] Microbial contamination of sterile products... 실사 및 리콜 조치', 'Zep Inc (Emerson, United States) 제조소에서 Zep, Alcohol Sanitizer Spray, Ethanol 70%, Net Contents 55 G 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Microbial contamination of sterile products', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0586-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0583-2026', 'FDA_ENFORCEMENT', 'Breckenridge Pharmaceutical, Inc.', 'Berkeley Heights, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0583-2026
Recalling Firm: Breckenridge Pharmaceutical, Inc.
Location: Berkeley Heights, United States
Report Date: 2026-06-17
Product: Duloxetine Delayed-Release Capsules, USP, 60mg, packaged in a) 90 Capsules (NDC 51991-748-90); b) 1000 Capsules (51991-748-10), Rx Only, Mfr. by: Towa Pharmaceutical Europe, S.L. Martorelles, (Barcelona), Spain, Dist. by: Breckenridge Pharmaceuticals, Inc., Berkeley Heights, NJ 07922.
Reason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Breckenridge Pharmaceutical, Inc.] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치', 'Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 60mg, packaged in  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0583-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0581-2026', 'FDA_ENFORCEMENT', 'Fresenius Kabi USA, LLC', 'Lake Zurich, IL', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0581-2026
Recalling Firm: Fresenius Kabi USA, LLC
Location: Lake Zurich, United States
Report Date: 2026-06-17
Product: Epinephrine Injection, USP, 1mg/mL, 1 mL single-dose vial, Rx only, Fresenius Kabi, Lake Zurich, IL 60047, NDC 63323-696-02 (vial), NDC 63323-696-25 (carton)
Reason: Failed Impurities/Degradations Specifications
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Fresenius Kabi USA, LLC] Failed Impurities/Degradations Specifications... 실사 및 리콜 조치', 'Fresenius Kabi USA, LLC (Lake Zurich, United States) 제조소에서 Epinephrine Injection, USP, 1mg/mL, 1 mL single-dose vial, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Impurities/Degradations Specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0581-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0580-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0580-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-06-17
Product: DOXOrubin Hydrochloride Liposome injection, 50 mg/25 mL (2mg/mL), 25 mL single-dose vials, Sterile, Rx only, Manufactured for: Northstar Rx LLC., Memphis, TN 38141, Manufactured by: Sun Pharmaceutical Ind. Ltd., Halol-Baroda Highway, Halol, Gujarat, India, NDC 72603-200-01.
Reason: Presence of Particulate matter: Particulate matter identified as glass.
Classification: Class I'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Presence of Particulate matter: Particulate matter iden... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 DOXOrubin Hydrochloride Liposome injection, 50 mg/25 mL (2mg 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of Particulate matter: Particulate matter identified as glass.', 'CRITICAL', ARRAY['환경모니터링(EM)', '무균충전(Aseptic)']::text[], ARRAY['21 CFR 211.113(b)']::text[], ARRAY['무균의약품 제조소 관리기준 별표 1']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0580-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0582-2026', 'FDA_ENFORCEMENT', 'Breckenridge Pharmaceutical, Inc.', 'Berkeley Heights, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0582-2026
Recalling Firm: Breckenridge Pharmaceutical, Inc.
Location: Berkeley Heights, United States
Report Date: 2026-06-17
Product: Duloxetine Delayed-Release Capsules, USP, 30mg, 1000 Capsule bottles, Rx only, Manufactured. by: Towa Pharmaceutical Europe, S.L. Martorelles, (Barcelona), Spain, Distributed by: Breckenridge Pharmaceuticals, Inc., Berkeley Heights, NJ 07922. NDC 51991-747-10
Reason: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Breckenridge Pharmaceutical, Inc.] CGMP Deviations: Presence of N-nitroso-duloxetine impur... 실사 및 리콜 조치', 'Breckenridge Pharmaceutical, Inc. (Berkeley Heights, United States) 제조소에서 Duloxetine Delayed-Release Capsules, USP, 30mg, 1000 Capsule 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations: Presence of N-nitroso-duloxetine impurity above FDA recommended interim limit', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0582-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0585-2026', 'FDA_ENFORCEMENT', 'Amneal Pharmaceuticals, LLC', 'Bridgewater, NJ', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0585-2026
Recalling Firm: Amneal Pharmaceuticals, LLC
Location: Bridgewater, United States
Report Date: 2026-06-17
Product: Primidone Tablets, USP, 50 mg, 100 Tablets per Bottle, Rx only, Manufactured by: Amneal Pharmaceuticals Pvt. Ltd., Oral Solid Dosage Unit, Ahmedabad 382213, INDIA.  Distributed by: Amneal Pharmaceuticals LLC, Bridgewater, NJ 08807.  NDC: 53746-544-01
Reason: Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufacturer.
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Amneal Pharmaceuticals, LLC] Cross Contamination with Other Products: due to a poten... 실사 및 리콜 조치', 'Amneal Pharmaceuticals, LLC (Bridgewater, United States) 제조소에서 Primidone Tablets, USP, 50 mg, 100 Tablets per Bottle, Rx on 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Cross Contamination with Other Products: due to a potential for cross-contamination with Acemetacin API due to an issue at the API manufacturer.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '원료(API)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0585-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0587-2026', 'FDA_ENFORCEMENT', 'Golden State Medical Supply Inc.', 'Camarillo, CA', 'United States', '2026-06-17', 'FDA Enforcement Notice: D-0587-2026
Recalling Firm: Golden State Medical Supply Inc.
Location: Camarillo, United States
Report Date: 2026-06-17
Product: GSMS Incorporated, NIACIN EXTENDED-RELEASE TABLETS, USP, 1,000 MG, 90 tablets, Rx only, Manufactured by Kremers Urban Pharmaceuticals Inc., a subsidiary of Lannett, Inc., Seymour, IN 47274, Packaged by GSMS Incorporated, Camarillo, CA 93012. NDC 51407-268-90.
Reason: Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 dissolution at the 24-hour timepoint.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Golden State Medical Supply Inc.] Failed Dissolution Specifications: During 12-month long... 실사 및 리콜 조치', 'Golden State Medical Supply Inc. (Camarillo, United States) 제조소에서 GSMS Incorporated, NIACIN EXTENDED-RELEASE TABLETS, USP, 1,0 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: During 12-month long-term stability testing, subject lot was out of specification (low) for stage 3 dissolution at the 24-hour timepoint.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0587-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0558-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0558-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablets, 1000 mg, 160-count bottle, Haleon, Warren, NJ 07059, UPC 3 07660 74610 2.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0558-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0554-2026', 'FDA_ENFORCEMENT', 'Spectra Medical Devices, Llc', 'Wilmington, MA', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0554-2026
Recalling Firm: Spectra Medical Devices, Llc
Location: Wilmington, United States
Report Date: 2026-06-10
Product: Lidocaine HCl Injection USP, 25x5 mL, Single-Dose Ampules, Rx Only, Distributed by: Spectra Medical Devices, LLC, Wilmington, Made in S. Korea, NDC 65282-1605-1.
Reason: Lack of Assurance of Sterility
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Spectra Medical Devices, Llc] Lack of Assurance of Sterility... 실사 및 리콜 조치', 'Spectra Medical Devices, Llc (Wilmington, United States) 제조소에서 Lidocaine HCl Injection USP, 25x5 mL, Single-Dose Ampules, R 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Lack of Assurance of Sterility', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0554-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0572-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0572-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: HyVee, Ultra Strength Antacid, Calcium Carbonate 1000 mg, 72 CHEWABLE TABLETS, DISTRIBUTED BY: HY-VEE INC., Inc., WEST DES MOINES, IA 50266, UPC: 0 75450 82514 5.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Ultra Strength Antacid, Calcium Carbonate 1000 mg, 72 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0572-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0565-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0565-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: CAREone, EXTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 750 mg, 96 chewable Tablets, Distributed by: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785, NDC 72476-127-80.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, EXTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 7 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0565-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0571-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0571-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: HyVee, Extra Strength Antacid, Calcium Carbonate 750 mg, 96 CHEWABLE TABLETS, DISTRIBUTED BY: HY-VEE INC., Inc., WEST DES MOINES, IA 50266, UPC: 0 75450 82497 1.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HyVee, Extra Strength Antacid, Calcium Carbonate 750 mg, 96  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0571-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0552-2026', 'FDA_ENFORCEMENT', 'Eugia US LLC', 'East Windsor, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0552-2026
Recalling Firm: Eugia US LLC
Location: East Windsor, United States
Report Date: 2026-06-10
Product: Lidocaine HCl Injection, USP 2%, 40 mg/2 mL (20 mg/mL), 2 mL per Single-Dose Vial, Rx Only, Mfd. in India for: Eugia US LLC, E. Windsor, NJ 08520.  NDC: 55150-164-02
Reason: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan
Classification: Class III'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Eugia US LLC] Labeling: Not Elsewhere Classified: The label wrap cove... 실사 및 리콜 조치', 'Eugia US LLC (East Windsor, United States) 제조소에서 Lidocaine HCl Injection, USP 2%, 40 mg/2 mL (20 mg/mL), 2 mL 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified: The label wrap covers the barcode, making it hard to scan', 'MAJOR', ARRAY['제조공정(Manufacturing)']::text[], ARRAY['21 CFR 211.100']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0552-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0579-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0579-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: TopCare health, ULTRA STRENGTH, Antacid Tablets, CALCIUM CARBONATE 1000mg, 72 CHEWABLE TABLETS, DISTRIBUTED BY TOPCO ASSOCIATES LLC.,ELK GROVE VILLAGE, IL 60007, NDC 76162-129-68.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, ULTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0579-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0575-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0575-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: GOODSENSE Ultra Strength, Antacid TABLETS, Calcium Carbonate 1000 mg, 72 Chewable Tablets, Distributed by: Geiss, Destin & Dunn, inc., Peachtree City, GA, NDC 50804-171-68.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Ultra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0575-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0559-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0559-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablets, 750 mg, 330-count bottle, Haleon, Warren, NJ 07059, UPC 3 0766  3072 10 9.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 HALEON CALCIUM CARBONATE TUMS ANTACID, Assorted Fruit Tablet 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0559-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0567-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0567-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: DISCOUNT drug mart, EXTRA STRENGTH, ANTACID TABLETS, Calcium Carbonate 750 mg, 96 Tablets, Distributed by: Drug Mart- Food Fair Medina, OH 44256, UPC: 0 93351 03992 8.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 DISCOUNT drug mart, EXTRA STRENGTH, ANTACID TABLETS, Calcium 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0567-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0566-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0566-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: CAREone, ULTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 1000 mg, 72 chewable Tablets, Distributed by: FOODHOLD U.S.A, LLC, LANDOVER, MD 20785, NDC 72476-178-23.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 CAREone, ULTRA STRENGTH CALCIUM ANTACID, Calcium Carbonate 1 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0566-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0577-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0577-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: EQUALINE ultra strength, antacid tablets, calcium carbonate 1000mg, 72 chewable tablets, DISTRIBUTED BY SUPERVALU INC.,EDEN PRARIE, MN 55344 USA, NDC 41163-171-68.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE ultra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0577-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0574-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0574-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: GOODSENSE Extra Strength, Antacid TABLETS, Calcium Carbonate 750 mg, 96 Chewable Tablets, Distributed by: Geiss, Destin & Dunn, inc., Peachtree City, GA, NDC 50804-129-22.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 GOODSENSE Extra Strength, Antacid TABLETS, Calcium Carbonate 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0574-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0576-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0576-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: EQUALINE extra strength, antacid tablets, calcium carbonate 750mg, 96 chewable tablets, DISTRIBUTED BY SUPERVALU INC.,EDEN PRARIE, MN 55344 USA, NDC 41163-129-22.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 EQUALINE extra strength, antacid tablets, calcium carbonate  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0576-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0561-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0561-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: Good Neighbor Pharmacy, extra strength Antacid Calcium Carbonate 1000 mg, 72 chewable tablets, Distributed by: Amerisourcebergen, 1 West First Avenue, Conshohocken, PA, 19428, NDC 24385-595-23.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Good Neighbor Pharmacy, extra strength Antacid Calcium Carbo 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0561-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0598-2026', 'FDA_ENFORCEMENT', 'SUN PHARMACEUTICAL INDUSTRIES INC', 'Princeton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0598-2026
Recalling Firm: SUN PHARMACEUTICAL INDUSTRIES INC
Location: Princeton, United States
Report Date: 2026-06-10
Product: Xyvona (levorphanol tartrate tablets), 2mg, 100 Tablets, Rx only, Forte BioPharma, Manufactured by: Ohm Laboratories Inc., New Brunswick, NJ 08901, Distributed by: Fort Bio-Pharma, LLC., Las Vegas, NV 89113, NDC 72245-762-10
Reason: Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the proprietary name Xyvona
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[SUN PHARMACEUTICAL INDUSTRIES INC] Labeling: Not Elsewhere Classified. This recall has bee... 실사 및 리콜 조치', 'SUN PHARMACEUTICAL INDUSTRIES INC (Princeton, United States) 제조소에서 Xyvona (levorphanol tartrate tablets), 2mg, 100 Tablets, Rx  제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Labeling: Not Elsewhere Classified. This recall has been initiated in response to the denial by FDA of marketing the product under the proprietary name Xyvona', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0598-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0562-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0562-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: Extra strength Antacid Calcium Carbonate 750 mg, chewable tablets, 96-count bottle, DISTRIBUTED BY CASEY''S MARKETING COMPANY, ANKENY, IA 50521, UPC: 0 98437 24361 9.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 Extra strength Antacid Calcium Carbonate 750 mg, chewable ta 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0562-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0556-2026', 'FDA_ENFORCEMENT', 'Ascend Laboratories, LLC', 'Bedminster, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0556-2026
Recalling Firm: Ascend Laboratories, LLC
Location: Bedminster, United States
Report Date: 2026-06-10
Product: Amlodipine and Olmesartan Medoxomil Tablets, 5mg/40mg, Rx Only, 30-count bottle, Manufactured by: Alkem Laboratories Ltd., India, Distributed by: Ascend Laboratories, LLC., Parsippany, NJ 07054, NDC 67877-501-30.
Reason: Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Ascend Laboratories, LLC] Failed Dissolution Specifications: Olmesartan Medoxomil... 실사 및 리콜 조치', 'Ascend Laboratories, LLC (Bedminster, United States) 제조소에서 Amlodipine and Olmesartan Medoxomil Tablets, 5mg/40mg, Rx On 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Failed Dissolution Specifications: Olmesartan Medoxomil content below specifications', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0556-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0555-2026', 'FDA_ENFORCEMENT', 'Asclemed USA Inc.', 'Torrance, CA', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0555-2026
Recalling Firm: Asclemed USA Inc.
Location: Torrance, United States
Report Date: 2026-06-10
Product: Duloxetine DR Capsules, 30 mg, 30 count bottles, Rx, Relabeled by: Enovachem Pharmaceuticals, Torrance, CA 90501, NDC 76420-634-30, Marketed by: Ajanta Pharma USA Inc.
Reason: CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limit.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Asclemed USA Inc.] CGMP Deviations; presence of Nitrosamine Drug Substance... 실사 및 리콜 조치', 'Asclemed USA Inc. (Torrance, United States) 제조소에서 Duloxetine DR Capsules, 30 mg, 30 count bottles, Rx, Relabel 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: CGMP Deviations; presence of Nitrosamine Drug Substance Related Impurity (NDSRI), N-nitroso-duloxetine, above the FDA acceptable intake limit.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)', '시험실(QC)']::text[], ARRAY['21 CFR 211.160(b)', '21 CFR 211.110']::text[], ARRAY['의약품 등의 안전에 관한 규칙 제48조', '의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0555-2026'
    ON CONFLICT DO NOTHING;
END $$;

DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, 'D-0578-2026', 'FDA_ENFORCEMENT', 'Guardian Drug Co. Inc.', 'Dayton, NJ', 'United States', '2026-06-10', 'FDA Enforcement Notice: D-0578-2026
Recalling Firm: Guardian Drug Co. Inc.
Location: Dayton, United States
Report Date: 2026-06-10
Product: TopCare health, EXTRA STRENGTH, Antacid Tablets, CALCIUM CARBONATE 750mg, 96 CHEWABLE TABLETS, DISTRIBUTED BY TOPCO ASSOCIATES LLC.,ELK GROVE VILLAGE, IL 60007, NDC 76162-128-22.
Reason: Presence of foreign substance: small metallic particles in chewable tablets.
Classification: Class II'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '[Guardian Drug Co. Inc.] Presence of foreign substance: small metallic particles... 실사 및 리콜 조치', 'Guardian Drug Co. Inc. (Dayton, United States) 제조소에서 TopCare health, EXTRA STRENGTH, Antacid Tablets, CALCIUM CAR 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: Presence of foreign substance: small metallic particles in chewable tablets.', 'MAJOR', ARRAY['제조공정(Manufacturing)', '고형제(Oral Solid)']::text[], ARRAY['21 CFR 211.110']::text[], ARRAY['의약품 제조 및 품질관리기준 제4조']::text[]
    FROM public.reg_documents WHERE doc_number = 'D-0578-2026'
    ON CONFLICT DO NOTHING;
END $$;
