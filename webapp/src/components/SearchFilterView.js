"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, AlertCircle, ArrowRight, CheckCircle2, FileText, SlidersHorizontal } from "lucide-react";

const PROCESS_FILTER_OPTIONS = [
  "전체 공정",
  "무균충전(Aseptic)",
  "환경모니터링(EM)",
  "데이터무결성(DI)",
  "시험실(QC)",
  "유틸리티(WFI)",
  "원료(API)",
  "고형제(Oral Solid)"
];

const AGENCY_OPTIONS = [
  { label: "전체 기관", value: "ALL" },
  { label: "미국 FDA", value: "FDA_WARNING_LETTER" },
  { label: "한국 식약처", value: "MFDS_ACTION" },
  { label: "유럽 EMA", value: "EMA_EUDRA" }
];

export default function SearchFilterView({ documents, onSelectDoc }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProcess, setSelectedProcess] = useState("전체 공정");
  const [selectedAgency, setSelectedAgency] = useState("ALL");
  const [selectedSeverity, setSelectedSeverity] = useState("ALL");

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      // Search term
      const query = searchTerm.toLowerCase();
      const matchQuery =
        !query ||
        doc.company_name.toLowerCase().includes(query) ||
        doc.title_kr.toLowerCase().includes(query) ||
        doc.summary_kr.toLowerCase().includes(query) ||
        doc.country.toLowerCase().includes(query) ||
        doc.violation_codes_fda.some(c => c.toLowerCase().includes(query)) ||
        doc.violation_codes_kgmp.some(c => c.toLowerCase().includes(query));

      // Process filter
      const matchProcess =
        selectedProcess === "전체 공정" ||
        doc.process_types.some(p => p.includes(selectedProcess.replace(/\(.*\)/, "")));

      // Agency filter
      const matchAgency =
        selectedAgency === "ALL" || doc.source === selectedAgency;

      // Severity filter
      const matchSeverity =
        selectedSeverity === "ALL" || doc.severity_level === selectedSeverity;

      return matchQuery && matchProcess && matchAgency && matchSeverity;
    });
  }, [documents, searchTerm, selectedProcess, selectedAgency, selectedSeverity]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Search and Filters Header Card */}
      <div className="glass-panel" style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <Search size={20} color="var(--accent-cyan)" />
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700 }}>규제 인텔리전스 정밀 검색기 (Regu-Search)</h2>
        </div>

        {/* Input Bar */}
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            id="regulatory-search-input"
            type="text"
            placeholder="공장명, 원료명, 규제 조항 (예: WFI, 21 CFR 211.113, 데이터 무결성, 오송공장, Ralstonia) 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 18px 14px 44px",
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "12px",
              color: "white",
              fontSize: "0.95rem",
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--accent-indigo)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
          />
          <Search 
            size={18} 
            color="var(--text-muted)" 
            style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} 
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontSize: "0.85rem"
              }}
            >
              초기화
            </button>
          )}
        </div>

        {/* Process Pills */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "8px", fontWeight: 600 }}>
            세부 단위공정(Unit Process) 필터링:
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {PROCESS_FILTER_OPTIONS.map((proc) => {
              const isSelected = selectedProcess === proc;
              return (
                <button
                  key={proc}
                  onClick={() => setSelectedProcess(proc)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: isSelected ? "1px solid var(--accent-indigo)" : "1px solid rgba(255, 255, 255, 0.08)",
                    background: isSelected ? "var(--accent-indigo)" : "rgba(255, 255, 255, 0.03)",
                    color: isSelected ? "#ffffff" : "var(--text-secondary)",
                    transition: "all 0.15s ease"
                  }}
                >
                  {proc}
                </button>
              );
            })}
          </div>
        </div>

        {/* Agency & Severity Selectors */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>발행 기관:</span>
            <div style={{ display: "flex", gap: "4px" }}>
              {AGENCY_OPTIONS.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedAgency(item.value)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    border: "none",
                    background: selectedAgency === item.value ? "rgba(6, 182, 212, 0.2)" : "transparent",
                    color: selectedAgency === item.value ? "var(--accent-cyan)" : "var(--text-secondary)",
                    fontWeight: selectedAgency === item.value ? 700 : 500
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>위험도:</span>
            {["ALL", "CRITICAL", "MAJOR"].map((sev) => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  border: "none",
                  background: selectedSeverity === sev ? "rgba(244, 63, 94, 0.2)" : "transparent",
                  color: selectedSeverity === sev ? "#fb7185" : "var(--text-secondary)",
                  fontWeight: selectedSeverity === sev ? 700 : 500
                }}
              >
                {sev === "ALL" ? "전체" : sev}
              </button>
            ))}
          </div>

          <div style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--text-muted)" }}>
            검색 결과: <strong style={{ color: "var(--text-primary)" }}>{filteredDocs.length}</strong>건
          </div>
        </div>
      </div>

      {/* Results List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {filteredDocs.length === 0 ? (
          <div className="glass-panel" style={{ padding: "48px", textAlign: "center" }}>
            <AlertCircle size={36} color="var(--text-muted)" style={{ margin: "0 auto 16px" }} />
            <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>검색 조건에 맞는 규제 사례가 없습니다</div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
              다른 검색어나 단위공정 필터를 선택하거나, 상단의 전체 공정을 클릭해 보세요.
            </p>
          </div>
        ) : (
          filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="glass-panel"
              style={{
                padding: "24px",
                cursor: "pointer",
                borderLeft: doc.severity_level === "CRITICAL" ? "4px solid var(--accent-rose)" : "4px solid var(--accent-amber)"
              }}
              onClick={() => onSelectDoc(doc)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "16px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span className="badge badge-agency">{doc.source_name || doc.source}</span>
                    <span className={`badge ${doc.severity_level === "CRITICAL" ? "badge-critical" : "badge-major"}`}>
                      {doc.severity_level}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {doc.doc_number}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      • {doc.country} ({doc.facility_location}) • {doc.issue_date}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>
                    {doc.title_kr}
                  </h3>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "8px" }}>
                    제조소: {doc.company_name} (FEI: {doc.fei_number || "N/A"})
                  </div>
                </div>

                <button 
                  className="btn-primary"
                  style={{ padding: "8px 16px", fontSize: "0.82rem", whiteSpace: "nowrap" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDoc(doc);
                  }}
                >
                  원문 대조 및 CAPA 열람 <ArrowRight size={14} />
                </button>
              </div>

              {/* Summary */}
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
                {doc.summary_kr}
              </p>

              {/* Tags & KGMP Alignment */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {doc.process_types.map((proc, i) => (
                    <span key={i} className="badge badge-process">
                      {proc}
                    </span>
                  ))}
                  {doc.violation_codes_fda.map((code, i) => (
                    <span key={i} style={{ fontSize: "0.75rem", padding: "3px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#e2e8f0", fontFamily: "var(--font-mono)" }}>
                      {code}
                    </span>
                  ))}
                </div>

                {doc.violation_codes_kgmp?.length > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#34d399", fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    <span>KGMP 매핑: {doc.violation_codes_kgmp[0]}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
