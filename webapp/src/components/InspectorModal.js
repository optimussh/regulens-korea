"use client";

import React, { useState } from "react";
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle, 
  AlertTriangle, 
  BookOpen, 
  Layers, 
  Quote, 
  Building, 
  Calendar,
  Printer
} from "lucide-react";

export default function InspectorModal({ doc, onClose }) {
  const [copiedId, setCopiedId] = useState(null);

  if (!doc) return null;

  const handleCopyCapa = (item) => {
    const textToCopy = `[${item.id}] ${item.task} (주관: ${item.department} / 기한: ${item.urgency} / 관련기준: ${item.guideline_ref})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
      onClick={onClose}
    >
      <div 
        id="printable-report"
        className="glass-panel modal-content"
        style={{
          width: "100%",
          maxWidth: "1320px",
          height: "90vh",
          maxHeight: "920px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "var(--bg-secondary)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Printable Executive Document Header (Visible primarily in print) */}
        <div className="print-only-header" style={{ display: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #0f172a", paddingBottom: "10px", marginBottom: "16px" }}>
            <div>
              <div style={{ fontSize: "18pt", fontWeight: 800, color: "#0f172a" }}>ReguLens Korea | 제약·바이오 GMP 실사 One-Pager 보고서</div>
              <div style={{ fontSize: "9pt", color: "#475569" }}>공식 문서번호: {doc.doc_number} | 발행기관: {doc.source_name || doc.source} | 출력일시: {new Date().toLocaleDateString('ko-KR')}</div>
            </div>
            <div style={{ textAlign: "right", fontSize: "9pt", color: "#475569" }}>
              <div><strong>대상 제조소:</strong> {doc.company_name} ({doc.country})</div>
              <div><strong>위험도 등급:</strong> {doc.severity_level}</div>
            </div>
          </div>
        </div>

        {/* Modal Top Header (Screen UI) */}
        <div 
          className="modal-header-screen no-print"
          style={{
            padding: "18px 28px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(15, 23, 42, 0.95)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span className="badge badge-agency">{doc.source_name || doc.source}</span>
            <span className={`badge ${doc.severity_level === "CRITICAL" ? "badge-critical" : "badge-major"}`}>
              {doc.severity_level}
            </span>
            <span style={{ fontSize: "0.88rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: "#e2e8f0" }}>
              {doc.doc_number}
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>|</span>
            <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Building size={14} /> {doc.company_name} ({doc.country})
            </span>
            <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Calendar size={14} /> {doc.issue_date}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* 1-Pager Executive PDF Print Button */}
            <button
              id="print-pdf-report-btn"
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: "7px 14px", fontSize: "0.82rem", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)" }}
              title="실무진/경영진 보고용 1-Pager PDF 출력"
            >
              <Printer size={14} /> 실무용 1-Pager PDF 출력
            </button>

            {doc.official_url && (
              <a
                href={doc.official_url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: "6px 12px", fontSize: "0.78rem" }}
              >
                원문 링크 <ExternalLink size={13} />
              </a>
            )}
            <button
              onClick={onClose}
              id="close-inspector-modal-btn"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "none",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body - 2 Columns (Left: Korean QA & CAPA, Right: English Citation & Raw) */}
        <div className="report-columns" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", flex: 1, overflow: "hidden" }}>
          {/* Left Column: Korean QA Analysis & Action Plan */}
          <div className="report-left-pane" style={{ padding: "28px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "24px", borderRight: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div>
              <h2 className="report-title" style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3 }}>
                {doc.title_kr}
              </h2>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {doc.process_types.map((p, idx) => (
                  <span key={idx} className="badge badge-process">{p}</span>
                ))}
              </div>
              <div className="report-summary-box" style={{ padding: "16px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.06)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--text-primary)" }}>
                {doc.summary_kr}
              </div>
            </div>

            {/* Root Cause Section */}
            {doc.root_cause_analysis && (
              <div className="report-root-cause">
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px", color: "#fb7185" }}>
                  <AlertTriangle size={17} /> 공정 품질 시스템 관점 근본 원인(Root Cause)
                </h3>
                <div style={{ padding: "14px 18px", borderRadius: "10px", background: "rgba(244, 63, 94, 0.07)", border: "1px solid rgba(244, 63, 94, 0.2)", fontSize: "0.88rem", color: "#fecdd3", lineHeight: 1.6 }}>
                  {doc.root_cause_analysis}
                </div>
              </div>
            )}

            {/* 1:1 KGMP & Regulatory Cross-Mapping */}
            <div className="report-mapping">
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px", color: "#34d399" }}>
                <CheckCircle size={17} /> 국내 식약처(KGMP) 및 글로벌 규정 매핑 대조
              </h3>
              <div style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.06)", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr style={{ background: "rgba(255, 255, 255, 0.04)", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", textAlign: "left" }}>
                      <th style={{ padding: "10px 14px", color: "var(--text-muted)", width: "35%" }}>해외 규제 조항 (FDA / EMA)</th>
                      <th style={{ padding: "10px 14px", color: "var(--text-muted)" }}>국내 식약처(KGMP) 매핑 고시 조항</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "12px 14px", verticalAlign: "top", borderBottom: "1px solid rgba(255, 255, 255, 0.04)", fontFamily: "var(--font-mono)", color: "#a5b4fc" }}>
                        {doc.violation_codes_fda.join(", ") || doc.violation_codes_ema?.join(", ") || "N/A"}
                      </td>
                      <td style={{ padding: "12px 14px", verticalAlign: "top", borderBottom: "1px solid rgba(255, 255, 255, 0.04)", color: "#6ee7b7", fontWeight: 600 }}>
                        {doc.violation_codes_kgmp?.join(" / ") || "해당 사항 없음"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actionable 5-point CAPA Checklist */}
            <div className="report-capa">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", color: "#818cf8" }}>
                  <Layers size={17} /> 현장 즉시 적용 CAPA 점검표 (One-Pager 액션)
                </h3>
                <span className="no-print" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  사내 품질회의 / 내부감사 즉시 복사 활용 가능
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {doc.capa_checklist?.map((item) => (
                  <div
                    key={item.id}
                    className="capa-item"
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "flex-start"
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                          {item.id}
                        </span>
                        <span style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: "4px", background: "rgba(99, 102, 241, 0.2)", color: "#c7d2fe" }}>
                          담당: {item.department}
                        </span>
                        <span style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: "4px", background: "rgba(244, 63, 94, 0.15)", color: "#fda4af" }}>
                          기한: {item.urgency}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-primary)", lineHeight: 1.5 }}>
                        {item.task}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        기준 근거: {item.guideline_ref}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopyCapa(item)}
                      title="CAPA 항목 복사"
                      className="no-print"
                      style={{
                        padding: "8px",
                        background: copiedId === item.id ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "6px",
                        color: copiedId === item.id ? "#34d399" : "var(--text-secondary)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.75rem"
                      }}
                    >
                      {copiedId === item.id ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: English Original Citation & Raw Text */}
          <div className="report-right-pane" style={{ padding: "28px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "24px", background: "rgba(10, 15, 29, 0.85)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", color: "var(--accent-cyan)" }}>
                <Quote size={18} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>영문 원문 핵심 인용 및 신뢰성 증빙 (Citations)</h3>
              </div>
              <p className="no-print" style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "14px" }}>
                AI의 자의적 해석을 배제하고, 실사관(Investigator)이 직접 지적한 원문 문장을 토대로 신뢰성을 검증합니다.
              </p>

              {doc.key_citations?.map((cit, idx) => (
                <div 
                  key={idx}
                  className="citation-box"
                  style={{
                    padding: "16px",
                    borderRadius: "10px",
                    background: "rgba(6, 182, 212, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.25)",
                    marginBottom: "14px"
                  }}
                >
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-cyan)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    {cit.section}
                  </div>
                  <blockquote style={{ fontSize: "0.85rem", color: "#e2e8f0", fontStyle: "italic", borderLeft: "3px solid var(--accent-cyan)", paddingLeft: "10px", marginBottom: "10px", lineHeight: 1.5 }}>
                    "{cit.english_quote}"
                  </blockquote>
                  <div style={{ fontSize: "0.82rem", color: "#cbd5e1", marginBottom: "8px", lineHeight: 1.5 }}>
                    <strong style={{ color: "#38bdf8" }}>한국어 직역:</strong> {cit.korean_interpretation}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#fda4af", background: "rgba(244, 63, 94, 0.1)", padding: "8px 10px", borderRadius: "6px", lineHeight: 1.4 }}>
                    <strong>국내 기업 리스크:</strong> {cit.risk_implication}
                  </div>
                </div>
              ))}
            </div>

            {/* Raw Text Inspector */}
            <div className="no-print">
              <h4 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <BookOpen size={14} /> 규제 공문서 전문 텍스트 (Raw Transcript)
              </h4>
              <pre
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  background: "#050811",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "#94a3b8",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.6,
                  maxHeight: "320px",
                  overflowY: "auto"
                }}
              >
                {doc.raw_text}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
