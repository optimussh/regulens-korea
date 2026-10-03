"""
ReguLens Korea - Bulk Historical Regulatory Data Collector
Fetches real historical regulatory records from openFDA API (17,900+ archive records),
transforms them into ReguLens GMP schema, and generates SQL & JSON dumps.
"""

import os
import sys
import json
import time
import requests
from datetime import datetime

OPENFDA_URL = "https://api.fda.gov/drug/enforcement.json"
OUTPUT_JSON_PATH = os.path.join(os.path.dirname(__file__), "..", "database", "historical_records.json")
OUTPUT_SQL_PATH = os.path.join(os.path.dirname(__file__), "..", "database", "bulk_historical_insert.sql")


def categorize_gmp_issue(reason_text: str, product_desc: str):
    text = (reason_text + " " + product_desc).lower()
    process_types = []
    violation_fda = []
    violation_kgmp = []
    severity = "MAJOR"

    if any(k in text for k in ["sterile", "microbial", "bioburden", "endotoxin", "particulate", "mold", "wfi", "aseptic"]):
        process_types.append("무균충전(Aseptic)")
        process_types.append("환경모니터링(EM)")
        violation_fda.append("21 CFR 211.113(b)")
        violation_kgmp.append("무균의약품 제조소 관리기준 별표 1")
        severity = "CRITICAL"

    if any(k in text for k in ["data integrity", "audit trail", "falsif", "unauthorized", "delete"]):
        process_types.append("데이터무결성(DI)")
        violation_fda.append("21 CFR 211.194(a)")
        violation_kgmp.append("의약품 데이터 완전성 평가지침")
        severity = "CRITICAL"

    if any(k in text for k in ["dissolution", "out of specification", "oos", "subpotent", "superpotent", "potency", "assay", "impurity"]):
        process_types.append("시험실(QC)")
        violation_fda.append("21 CFR 211.160(b)")
        violation_kgmp.append("의약품 등의 안전에 관한 규칙 제48조")

    if any(k in text for k in ["tablet", "capsule", "weight variation", "hardness", "friability", "blend"]):
        process_types.append("고형제(Oral Solid)")
        process_types.append("제조공정(Manufacturing)")
        violation_fda.append("21 CFR 211.110")
        violation_kgmp.append("의약품 제조 및 품질관리기준 제4조")

    if any(k in text for k in ["api", "active pharmaceutical", "raw material"]):
        process_types.append("원료(API)")

    if not process_types:
        process_types.append("제조공정(Manufacturing)")
        violation_fda.append("21 CFR 211.100")
        violation_kgmp.append("의약품 제조 및 품질관리기준 제4조")

    return list(set(process_types)), list(set(violation_fda)), list(set(violation_kgmp)), severity


def fetch_historical_records(total_target: int = 60):
    print(f"[*] Starting bulk collection of {total_target} historical FDA regulatory records...")
    collected = []
    limit = 20
    skip = 0

    while len(collected) < total_target:
        query_url = f"{OPENFDA_URL}?limit={limit}&skip={skip}&sort=report_date:desc"
        try:
            res = requests.get(query_url, timeout=15)
            if res.status_code != 200:
                break

            results = res.json().get("results", [])
            if not results:
                break

            for r in results:
                recall_num = r.get("recall_number", f"FDA-HIST-{skip}")
                firm = r.get("recalling_firm", "Global Pharma Manufacturer")
                city = r.get("city", "N/A")
                state = r.get("state", "")
                country = r.get("country", "USA")
                report_date_raw = r.get("report_date", "20240101")
                reason = r.get("reason_for_recall", "CGMP deviation during manufacturing")
                product = r.get("product_description", "Pharmaceutical Drug Product")
                classification = r.get("classification", "Class II")

                try:
                    pdate = datetime.strptime(report_date_raw, "%Y%m%d").strftime("%Y-%m-%d")
                except:
                    pdate = "2024-01-01"

                proc_types, v_fda, v_kgmp, severity = categorize_gmp_issue(reason, product)

                title_kr = f"[{firm}] {reason[:55]}... 실사 및 리콜 조치"
                summary_kr = f"{firm} ({city}, {country}) 제조소에서 {product[:60]} 제조 중 CGMP 규격 일탈이 확인되어 조치가 내려졌습니다. 사유: {reason}"

                doc_record = {
                    "id": f"hist-{len(collected)+1:04d}",
                    "doc_number": recall_num,
                    "source": "FDA_ENFORCEMENT",
                    "source_name": "미국 FDA Enforcement/Recall",
                    "company_name": firm,
                    "facility_location": f"{city}, {state}".strip(", "),
                    "country": country,
                    "issue_date": pdate,
                    "title_kr": title_kr,
                    "summary_kr": summary_kr,
                    "severity_level": "CRITICAL" if classification == "Class I" else severity,
                    "process_types": proc_types,
                    "violation_codes_fda": v_fda,
                    "violation_codes_kgmp": v_kgmp,
                    "raw_text": f"FDA Enforcement Notice: {recall_num}\nRecalling Firm: {firm}\nLocation: {city}, {country}\nReport Date: {pdate}\nProduct: {product}\nReason: {reason}\nClassification: {classification}"
                }
                collected.append(doc_record)
                if len(collected) >= total_target:
                    break

            skip += limit
            time.sleep(0.3)
        except Exception as e:
            print(f"[!] Error fetching batch: {e}")
            break

    print(f"[+] Successfully transformed {len(collected)} historical regulatory records.")

    # Save to JSON
    with open(OUTPUT_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(collected, f, ensure_ascii=False, indent=2)

    # Generate SQL with explicit type casting ARRAY[]::text[] to prevent 42P18 error
    sql_lines = ["-- ReguLens Korea - Historical Bulk Data SQL Insert\n"]
    for d in collected:
        escaped_title = d["title_kr"].replace("'", "''")
        escaped_summary = d["summary_kr"].replace("'", "''")
        escaped_firm = d["company_name"].replace("'", "''")
        escaped_loc = d["facility_location"].replace("'", "''")
        escaped_raw = d["raw_text"].replace("'", "''")
        
        p_types = "ARRAY[" + ", ".join(f"'{p}'" for p in d["process_types"]) + "]::text[]" if d["process_types"] else "ARRAY[]::text[]"
        v_fda = "ARRAY[" + ", ".join(f"'{c}'" for c in d["violation_codes_fda"]) + "]::text[]" if d["violation_codes_fda"] else "ARRAY[]::text[]"
        v_kgmp = "ARRAY[" + ", ".join(f"'{c}'" for c in d["violation_codes_kgmp"]) + "]::text[]" if d["violation_codes_kgmp"] else "ARRAY[]::text[]"

        sql = f"""DO $$
DECLARE
    new_doc_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.reg_documents (
        id, doc_number, source, company_name, facility_location, country, issue_date, raw_text
    ) VALUES (
        new_doc_id, '{d["doc_number"]}', '{d["source"]}', '{escaped_firm}', '{escaped_loc}', '{d["country"]}', '{d["issue_date"]}', '{escaped_raw}'
    ) ON CONFLICT (doc_number) DO NOTHING;

    INSERT INTO public.reg_insights (
        doc_id, title_kr, summary_kr, severity_level, process_types, violation_codes_fda, violation_codes_kgmp
    ) SELECT id, '{escaped_title}', '{escaped_summary}', '{d["severity_level"]}', {p_types}, {v_fda}, {v_kgmp}
    FROM public.reg_documents WHERE doc_number = '{d["doc_number"]}'
    ON CONFLICT DO NOTHING;
END $$;
"""
        sql_lines.append(sql)

    with open(OUTPUT_SQL_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_lines))
    print(f"[+] Saved SQL dump to: {OUTPUT_SQL_PATH}")

    return collected


if __name__ == "__main__":
    fetch_historical_records(60)
