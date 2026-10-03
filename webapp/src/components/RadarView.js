"use client";

import React from "react";
import { 
  AlertTriangle, 
  ShieldCheck, 
  FileText, 
  Activity, 
  Building2, 
  ChevronRight, 
  Clock, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Network
} from "lucide-react";

export default function RadarView({ documents, onSelectDoc, onNavigateTab }) {
  const totalCount = documents.length;
  const criticalCount = documents.filter(d => d.severity_level === "CRITICAL").length;
  const asepticCount = documents.filter(d => d.process_types.some(p => p.includes("무균") || p.includes("Aseptic"))).length;
  const diCount = documents.filter(d => d.process_types.some(p => p.includes("무결성") || p.includes("DI"))).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {/* Hero Welcome Banner */}
      <div 
        className="glass-panel" 
        style={{ 
          padding: "32px", 
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "relative", zIndex: 2, maxWidth: "780px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "9999px", background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.35)", marginBottom: "14px" }}>
            <Cpu size={15} color="#818cf8" />
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#c7d2fe", letterSpacing: "0.04em" }}>
              AI AGENTIC REGULATORY INTELLIGENCE
            </span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.25, marginBottom: "12px", letterSpacing: "-0.02em" }}>
            글로벌 규제기관 실사 리스크를 <br />
            <span style={{ background: "linear-gradient(120deg, #38bdf8 0%, #818cf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              국내 제약·바이오 현장 실무 인사이트
            </span>로 전환합니다
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
            미국 FDA Warning Letter, Form 483, 유럽 EMA EudraGMDP 및 대한민국 식약처 행정처분 비정형 데이터를 AI로 자동 정형화하여 1:1 KGMP 조항 매핑, 부서별 즉시 실행 CAPA 점검표를 실시간 제공합니다.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button 
              id="hero-search-btn"
              className="btn-primary" 
              onClick={() => onNavigateTab("search")}
            >
              규제 데이터 정밀 검색 <ArrowUpRight size={16} />
            </button>
            <button 
              id="hero-watchdog-btn"
              className="btn-secondary" 
              onClick={() => onNavigateTab("watchdog")}
            >
              원료 공급망(Vendor) 모니터링 <ChevronRight size={16} />
            </button>
            <button 
              id="hero-agent-btn"
              className="btn-secondary" 
              onClick={() => onNavigateTab("agent")}
              style={{ background: "rgba(99, 102, 241, 0.12)", borderColor: "rgba(99, 102, 241, 0.3)" }}
            >
              AI 공정 검토 에이전트 질문 <Cpu size={16} color="#818cf8" />
            </button>
            <button 
              id="hero-graph-btn"
              className="btn-secondary" 
              onClick={() => onNavigateTab("graph")}
              style={{ background: "rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.35)", color: "#c4b5fd" }}
            >
              지식 그래프 & 전이 시뮬레이터 <Network size={16} color="#a78bfa" />
            </button>
          </div>
        </div>

        {/* Ambient decorative glow */}
        <div style={{
          position: "absolute",
          right: "-80px",
          top: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }} />
      </div>

      {/* KPI Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)" }}>분석 적재 규제 문서</span>
            <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(6, 182, 212, 0.12)" }}>
              <FileText size={18} color="var(--accent-cyan)" />
            </div>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>{totalCount} <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>건</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px", fontSize: "0.78rem", color: "#34d399" }}>
            <TrendingUp size={14} /> 10년치 아카이브 & 식약처 연동
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)" }}>CRITICAL 고위험 경보</span>
            <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(244, 63, 94, 0.12)" }}>
              <AlertTriangle size={18} color="var(--accent-rose)" />
            </div>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fb7185" }}>{criticalCount} <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>건</span></div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "8px" }}>
            WFI 오염 및 Audit Trail 삭제 등
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)" }}>무균충전(Aseptic) 결함</span>
            <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(99, 102, 241, 0.12)" }}>
              <Activity size={18} color="var(--accent-indigo)" />
            </div>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#a5b4fc" }}>{asepticCount} <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>건</span></div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "8px" }}>
            EU Annex 1 및 21 CFR 211.113
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)" }}>데이터 무결성(DI) 결함</span>
            <div style={{ padding: "8px", borderRadius: "10px", background: "rgba(245, 158, 11, 0.12)" }}>
              <ShieldCheck size={18} color="var(--accent-amber)" />
            </div>
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fbbf24" }}>{diCount} <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>건</span></div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "8px" }}>
            HPLC Trial 주입 & 백업 부실
          </div>
        </div>
      </div>

      {/* Two-Column Intelligence Section */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "24px" }}>
        {/* Left: Latest Actionable Risk Cases */}
        <div className="glass-panel" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
              <AlertTriangle size={18} color="#f43f5e" /> 긴급 실사 리스크 & CAPA 대기 목록
            </h2>
            <button 
              id="view-all-cases-btn"
              onClick={() => onNavigateTab("search")}
              style={{ background: "none", border: "none", color: "var(--accent-cyan)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
            >
              전체 보기 <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {documents.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => onSelectDoc(doc)}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.borderColor = "var(--border-active)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="badge badge-agency">{doc.source_name || doc.source}</span>
                    <span className={`badge ${doc.severity_level === "CRITICAL" ? "badge-critical" : "badge-major"}`}>
                      {doc.severity_level}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {doc.country} • {doc.issue_date}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                    원문 대조 열람 ↗
                  </span>
                </div>

                <div style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: "6px", color: "var(--text-primary)" }}>
                  {doc.title_kr}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "10px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {doc.summary_kr}
                </div>

                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                  {doc.process_types.slice(0, 3).map((proc, i) => (
                    <span key={i} className="badge badge-process" style={{ fontSize: "0.72rem" }}>
                      {proc}
                    </span>
                  ))}
                  {doc.violation_codes_fda.slice(0, 2).map((code, i) => (
                    <span key={i} style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", color: "#cbd5e1", fontFamily: "var(--font-mono)" }}>
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Country Risk Radar & Key KGMP Directives */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Country Distribution */}
          <div className="glass-panel" style={{ padding: "24px" }}>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Building2 size={18} color="var(--accent-cyan)" /> 글로벌 원료 공급국 리스크 비중
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { country: "인도 (India API & Sterile)", count: 48, percentage: 42, color: "#6366f1" },
                { country: "중국 (China Chemical API)", count: 32, percentage: 28, color: "#f43f5e" },
                { country: "대한민국 (MFDS 식약처)", count: 20, percentage: 17, color: "#10b981" },
                { country: "유럽/독일 (EU Sterile Hub)", count: 15, percentage: 13, color: "#06b6d4" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "4px" }}>
                    <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{item.country}</span>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{item.percentage}% ({item.count}건)</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ width: `${item.percentage}%`, height: "100%", background: item.color, borderRadius: "4px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Regulatory Directive Box */}
          <div className="glass-panel" style={{ padding: "24px", borderLeft: "4px solid var(--accent-indigo)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#818cf8", fontWeight: 700, fontSize: "0.88rem" }}>
              <ShieldCheck size={16} /> 2026 대한민국 식약처(KGMP) 중점 감사 지침
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "12px" }}>
              식약처는 데이터 완전성 평가지침 시행 이후, 제조기록서 사후 작성 및 HPLC 분석장비 감사추적(Audit Trail) 임의 수정을 <strong>원스트라이크 아웃(적합판정 취소)</strong> 대상 중대 일탈로 분류하여 특별기획점검을 강화하고 있습니다.
            </p>
            <div style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
              관련 규정: 약사법 제38조 및 데이터 완전성 평가 기준서
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
