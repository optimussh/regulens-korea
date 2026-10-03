"""
ReguLens Korea - openFDA API Automated Ingestion Pipeline
Fetches pharmaceutical enforcement and inspection data from openFDA API.
"""

import sys
import os
import json
import logging
import requests
from typing import Dict, Any, List, Optional
from datetime import datetime

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("openFDA-Ingest")

OPENFDA_ENFORCEMENT_URL = "https://api.fda.gov/drug/enforcement.json"


class OpenFdaCollector:
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("OPENFDA_API_KEY")

    def fetch_recent_enforcements(self, limit: int = 10, search_query: Optional[str] = None) -> List[Dict[str, Any]]:
        """
        Fetches recent drug recalls and enforcement actions from openFDA.
        """
        params = {
            "limit": limit,
            "sort": "report_date:desc"
        }
        if self.api_key:
            params["api_key"] = self.api_key

        if search_query:
            params["search"] = search_query
        else:
            # 기본값: 최근 클래스 I, II 의약품 리콜 및 GMP 결함 건 필터링
            params["search"] = 'status:"Ongoing"+AND+(classification:"Class I"+OR+classification:"Class II")'

        logger.info(f"Querying openFDA endpoint with params: {params}")
        try:
            response = requests.get(OPENFDA_ENFORCEMENT_URL, params=params, timeout=15)
            response.raise_for_status()
            data = response.json()
            results = data.get("results", [])
            logger.info(f"Successfully retrieved {len(results)} records from openFDA.")
            return results
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to fetch openFDA data: {e}")
            return []

    def transform_to_reg_document(self, fda_record: Dict[str, Any]) -> Dict[str, Any]:
        """
        Transforms openFDA API record into ReguLens reg_documents format.
        """
        recall_number = fda_record.get("recall_number", f"FDA-REC-{datetime.now().strftime('%Y%m%d%H%M%S')}")
        recalling_firm = fda_record.get("recalling_firm", "Unknown Manufacturer")
        reason_for_recall = fda_record.get("reason_for_recall", "No reason specified.")
        city = fda_record.get("city", "Unknown City")
        country = fda_record.get("country", "USA")
        report_date_str = fda_record.get("report_date", datetime.now().strftime("%Y%m%d"))

        try:
            parsed_date = datetime.strptime(report_date_str, "%Y%m%d").strftime("%Y-%m-%d")
        except ValueError:
            parsed_date = datetime.now().strftime("%Y-%m-%d")

        raw_text = f"""[openFDA Enforcement Report]
Recall Number: {recall_number}
Recalling Firm: {recalling_firm}
Location: {city}, {country}
Report Date: {parsed_date}
Classification: {fda_record.get('classification', 'N/A')}
Product Description: {fda_record.get('product_description', 'N/A')}
Reason for Recall: {reason_for_recall}
Distribution Pattern: {fda_record.get('distribution_pattern', 'N/A')}
"""

        return {
            "doc_number": recall_number,
            "source": "FDA_ENFORCEMENT",
            "company_name": recalling_firm,
            "facility_location": f"{city}, {fda_record.get('state', '')}".strip(", "),
            "country": country,
            "issue_date": parsed_date,
            "regulatory_era": "CURRENT",
            "raw_text": raw_text,
            "official_url": f"https://www.accessdata.fda.gov/scripts/ires/index.cfm?Event={fda_record.get('event_id', '')}"
        }


if __name__ == "__main__":
    collector = OpenFdaCollector()
    print("Testing openFDA API fetch...")
    records = collector.fetch_recent_enforcements(limit=2)
    for r in records:
        transformed = collector.transform_to_reg_document(r)
        print("\nTransformed ReguLens Document:")
        print(json.dumps(transformed, indent=2, ensure_ascii=False))
