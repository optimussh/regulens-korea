"""
ReguLens Korea - Pydantic Schemas for AI Extraction Pipeline
Strict JSON output schemas for LangGraph / vLLM / SGLang batch inference.
"""

from typing import List, Optional
from pydantic import BaseModel, Field
from enum import Enum


class SeverityLevel(str, Enum):
    CRITICAL = "CRITICAL"
    MAJOR = "MAJOR"
    MODERATE = "MODERATE"
    INFORMATIONAL = "INFORMATIONAL"


class ProcessCategory(str, Enum):
    ASEPTIC = "무균충전(Aseptic)"
    EM = "환경모니터링(EM)"
    DATA_INTEGRITY = "데이터무결성(DI)"
    QC_LAB = "시험실(QC)"
    API = "원료(API)"
    ORAL_SOLID = "고형제(Oral Solid)"
    CLEANING_VAL = "세척밸리데이션(Cleaning)"
    UTILITY_WFI = "유틸리티(WFI)"
    MANUFACTURING = "제조공정(Manufacturing)"


class CapaActionItem(BaseModel):
    id: str = Field(description="CAPA 고유 코드 (예: CAPA-01)")
    task: str = Field(description="현장 품질관리 및 제조팀이 즉시 수행해야 할 구체적인 조치 사항")
    department: str = Field(description="수행 주관 부서 (예: QA 품질보증팀, QC 미생물팀, 생산공무팀)")
    urgency: str = Field(description="이행 권고 시한 (예: 즉시조치(7일), 14일 이내, 30일 이내)")
    guideline_ref: str = Field(description="관련 규제 지침 기준 (예: EU GMP Annex 1 8.12, 21 CFR 211.192)")


class RegulatoryCitation(BaseModel):
    section: str = Field(description="지적된 법령 또는 가이드라인 조항 (예: 21 CFR 211.113(b))")
    english_quote: str = Field(description="경고장/실사보고서 원문 핵심 인용 문장")
    korean_interpretation: str = Field(description="국내 제약 실무자 관점의 한국어 직역 및 맥락 해석")
    risk_implication: str = Field(description="국내 제약사 및 원료 수입사에 미치는 실질적 비즈니스/규제 리스크")


class RegulatoryInsightExtraction(BaseModel):
    title_kr: str = Field(description="한국어 분석 헤드라인 (핵심 위반 공정과 제조소 위치 포함)")
    summary_kr: str = Field(description="QA/QC 실무자를 위한 3~5줄 분량의 명확한 사건 요약")
    severity_level: SeverityLevel = Field(description="규제 심각도 등급")
    process_types: List[str] = Field(description="해당되는 공정 카테고리 태그 목록")
    violation_codes_fda: List[str] = Field(default_factory=list, description="위반된 미국 FDA 21 CFR 조항")
    violation_codes_kgmp: List[str] = Field(default_factory=list, description="매핑되는 대한민국 식약처 KGMP 고시 조항")
    violation_codes_ema: List[str] = Field(default_factory=list, description="매핑되는 유럽 EU GMP Annex 또는 가이드라인")
    root_cause_analysis: str = Field(description="제조 품질 시스템 관점의 근본 실패 원인 (Root Cause)")
    capa_checklist: List[CapaActionItem] = Field(description="공정 개선을 위한 실무 CAPA 체크리스트 (3~5개)")
    key_citations: List[RegulatoryCitation] = Field(description="원문 신뢰성 보증을 위한 영문 인용문 및 해석 쌍")
