"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle, 
  Layers, 
  Lightbulb,
  FileSearch
} from "lucide-react";

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content: `안녕하세요! **ReguLens 제조 품질 규제 검토 에이전트**입니다. 

미국 FDA 21 CFR Part 211, 유럽 EU GMP Annex 1, 대한민국 식약처(KGMP) 고시 및 10년 치 Warning Letter 아카이브를 바탕으로, 귀사의 제조 공정 개선 및 규제 실사 사전 방어 인사이트를 제공합니다.

궁금하신 공정(무균, DI, WFI, OOS 등)이나 특정 협력사 리스크에 대해 질문해 주세요.`
  }
];

const PRESET_QUERIES = [
  "인도 무균주사제 WFI 루프 오염 지적 사례와 사전 예방 체크리스트",
  "HPLC Trial 주입 및 감사추적(Audit Trail) 삭제 관련 식약처/FDA 대응 방안",
  "2022 개정 EU GMP Annex 1 오염관리전략(CCS)과 스모크스터디 주요 결함",
  "중국/인도 원료공장 Warning Letter 수신 시 국내 제약사 긴급 대응 SOP"
];

const KNOWLEDGE_RESPONSES = {
  "wfi": {
    title: "인도 무균제조소 WFI 루프 오염 및 FDA 지적 사례 분석",
    text: `최근 3개년 미국 FDA Warning Letter(예: Zenith BioPharma WL-320-24-19 등) 분석 결과, 주사용수(WFI) 관련 최대 지적 사항은 다음과 같습니다:

1. **지적 원문 요지 (21 CFR 211.113(b))**:
   - 무균 충전 라인(Grade A) 공급 WFI 채수 밸브에서 *Ralstonia pickettii* 등 그람음성 세균의 지속적 규격 초과(Bioburden Excursion)가 발생했음에도, QA 부서가 배관 Dead-Leg 및 멸균 온도 결함을 규명하지 않고 상용 배치를 출하 승인함.

2. **국내 식약처(KGMP) 연계 조항**:
   - 의약품 제조 및 품질관리기준 제4조(제조위생관리) 및 무균의약품 관리기준 별표 1 제8호(주사용수 설비 관리).

3. **현장 즉시 점검 체크리스트 (CAPA 3선)**:
   - ① **WFI 순환 온도 상시 감시**: 루프 전체 배관의 온도가 최소 80℃ 이상(권장 85℃)으로 유지되는지 연속 트렌드 검증.
   - ② **Dead-Leg 배관비율 측정**: 밸브 말단 정체 구역이 배관 내경의 1.5D 이내인지 도면 및 현장 실측.
   - ③ **미생물 OOS 조사 고도화**: 그람음성 비발효균 검출 시 즉시 MALDI-TOF 동정 및 바이오필름 박리 증기 멸균(SIP) 주기 재검증.`
  },
  "hplc": {
    title: "HPLC 데이터 무결성(DI) 및 Audit Trail 삭제 지적 분석",
    text: `미국 FDA 및 대한민국 식약처(MFDS)는 시험실 데이터 완전성(Data Integrity) 훼손을 가장 치명적인 **중대 결함(Critical Defect)**으로 분류합니다:

1. **적발된 대표 위반 행위 (21 CFR 211.194(a) / ALCOA+ 위반)**:
   - 공식 시험 시퀀스 등록 전 비공식 "Trial Injection(시험용 사전 주입)"을 실시하여 불합격(OOS) 피크 확인 시 크로마토그램을 영구 삭제.
   - QC 분석원에게 Administrator(시스템 관리자) 권한이 부여되어 Audit Trail 기능을 비활성화하거나 시간을 수동 조작.

2. **국내 식약처(KGMP) 행정처분 위험**:
   - 식약처 '데이터 완전성 평가지침'에 따라 시험기록 허위 작성 적발 시 **원스트라이크 아웃(GMP 적합판정 즉시 취소 및 제조업무정지 3개월)** 대상이 됨.

3. **즉각적인 현장 예방 조치**:
   - ① 분석원 권한 강등: 모든 분석 장비 계정을 분석원(Operator)과 독립된 사내 전산실(IT Admin)로 엄격히 이원화.
   - ② Trial Run 전면 금지: 시스템 적합성 시험(SST) 외의 모든 주입은 시퀀스에 영구 기록되도록 SOP 개정.
   - ③ QA 교차 감사추적 검토: 시험 배치 승인 전 QA 담당자가 Audit Trail 로그를 대조 서명하는 프로세스 의무화.`
  },
  "annex": {
    title: "2022 전면 개정 EU GMP Annex 1 무균 오염관리전략(CCS) 분석",
    text: `2022년 전면 개정된 유럽 무균의약품 가이드라인(EU GMP Annex 1) 관련 최근 EMA 실사 지적 트렌드입니다:

1. **핵심 위반 조항 (Annex 1 Section 2.3 & 4.3)**:
   - 시설 설계부터 작업원 갱의 적격성(Gowning), 소독 검증까지 하나로 통합된 '종합 오염관리전략(CCS, Contamination Control Strategy)' 문서 체계 결여.
   - Grade A 무균 충전 및 고무전 타전 구역에서 동적(Dynamic) 스모크 스터디를 수행했을 때, 난류(Turbulence)와 와류가 개방된 바이알 입구로 유입되는 현상 방치.

2. **국내 바이오시밀러 및 백신 수출 기업 영향**:
   - 유럽 EMA 허가 실사 시 CCS 종합 문서와 기류 가시화 비디오(Smoke Study Video)가 제출되지 않으면 허가 심사가 즉시 보류(Clock-stop)됨.`
  },
  "vendor": {
    title: "해외 원료공장 Warning Letter 수신 시 국내 완제사 SOP",
    text: `귀사가 수입 중인 인도/중국 원료(API) 공장에 FDA Warning Letter가 발행된 경우 국내 QA팀의 표준 대응 절차입니다:

1. **즉각 조치 (24시간 이내)**:
   - 입고 창고에 보관 중인 해당 제조소 API 원료 전량 **'QA 보관(Quarantine)'** 상태로 시스템 잠금 처리.
   - 제조 중인 완제 배치에 해당 원료가 투입되었는지 즉시 추적(Batch Traceability).

2. **Warning Letter 지적 항목과 자사 완제 품질 영향 평가**:
   - 지적 사유가 교차 오염(Cross-contamination)이나 DI 조작인 경우, 기존 입고 배치에 대한 전수 재시험(Re-test) 실시.

3. **국내 식약처 사전 대응**:
   - 불시 약사감시 대비 '해외 제조원 규제 이슈 영향성 평가서' 및 '특별 Vendor Audit 계획서' 사전 작성 완료.`
  }
};

export default function AiAgentChatView() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text) => {
    const query = text || inputPrompt;
    if (!query.trim()) return;

    const userMsg = { role: "user", content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt("");
    setIsTyping(true);

    // Contextual matching
    setTimeout(() => {
      let matchedResponse = KNOWLEDGE_RESPONSES.wfi;
      const lower = query.toLowerCase();

      if (lower.includes("hplc") || lower.includes("di") || lower.includes("데이터") || lower.includes("감사추적")) {
        matchedResponse = KNOWLEDGE_RESPONSES.hplc;
      } else if (lower.includes("annex") || lower.includes("유럽") || lower.includes("스모크") || lower.includes("ccs")) {
        matchedResponse = KNOWLEDGE_RESPONSES.annex;
      } else if (lower.includes("원료") || lower.includes("협력사") || lower.includes("vendor") || lower.includes("중국")) {
        matchedResponse = KNOWLEDGE_RESPONSES.vendor;
      }

      const botMsg = {
        role: "assistant",
        content: matchedResponse.text,
        title: matchedResponse.title
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "calc(100vh - 220px)", minHeight: "640px" }}>
      {/* Top Header Card */}
      <div className="glass-panel" style={{ padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <Bot size={20} />
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "6px" }}>
              제조 공정 검토 에이전트 (Manufacturing QA Review Agent)
              <span className="live-badge" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                <span className="pulse-dot" /> RAG 가동 중
              </span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
              근거 기반(Evidence-based) • FDA 21 CFR • 식약처 KGMP • EU Annex 1 지식 베이스
            </div>
          </div>
        </div>

        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
          <Lightbulb size={15} color="#eab308" />
          <span>프롬프트 템플릿: 15년 차 Lead Auditor 프롬프트 적용됨</span>
        </div>
      </div>

      {/* Preset Query Chips */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
        {PRESET_QUERIES.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            style={{
              padding: "8px 14px",
              borderRadius: "9999px",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              color: "#c7d2fe",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.25)";
              e.currentTarget.style.borderColor = "var(--accent-indigo)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.25)";
            }}
          >
            <Sparkles size={12} color="#a5b4fc" />
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages Body */}
      <div 
        className="glass-panel" 
        style={{ 
          flex: 1, 
          overflowY: "auto", 
          padding: "24px", 
          display: "flex", 
          flexDirection: "column", 
          gap: "18px" 
        }}
      >
        {messages.map((m, idx) => {
          const isUser = m.role === "user";
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                flexDirection: isUser ? "row-reverse" : "row"
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: isUser ? "rgba(255, 255, 255, 0.1)" : "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "white"
                }}
              >
                {isUser ? <User size={16} /> : <Bot size={16} />}
              </div>

              <div
                style={{
                  maxWidth: "82%",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background: isUser ? "var(--accent-indigo)" : "rgba(15, 23, 42, 0.85)",
                  border: isUser ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                {m.title && (
                  <div style={{ fontWeight: 800, color: "var(--accent-cyan)", marginBottom: "8px", fontSize: "0.95rem" }}>
                    {m.title}
                  </div>
                )}
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {m.content}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              <Bot size={16} />
            </div>
            <div style={{ padding: "12px 18px", borderRadius: "14px", background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="pulse-dot" /> 규제 원문 아카이브(RAG) 및 KGMP 고시 조항 교차 검색 중...
            </div>
          </div>
        )}
      </div>

      {/* Input Form Bar */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{ display: "flex", gap: "12px" }}
      >
        <input
          id="chat-agent-input"
          type="text"
          placeholder="공정 결함, 실사 지적 사례, 규제 조항 대응 방안을 질의하십시오..."
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          style={{
            flex: 1,
            padding: "16px 20px",
            borderRadius: "12px",
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "white",
            fontSize: "0.95rem",
            outline: "none"
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent-indigo)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
        />
        <button
          type="submit"
          id="send-agent-query-btn"
          className="btn-primary"
          style={{ padding: "0 24px" }}
        >
          <Send size={18} /> 전송
        </button>
      </form>
    </div>
  );
}
