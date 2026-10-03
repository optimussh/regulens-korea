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
