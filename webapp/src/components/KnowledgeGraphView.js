"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { 
  Network, 
  Share2, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  Factory, 
  Pill, 
  Cpu, 
  FileText, 
  BookOpen, 
  Search, 
  RefreshCw, 
  ArrowRight, 
  Sliders, 
  Zap, 
  Layers, 
  ChevronRight, 
  Download,
  Info,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2
} from "lucide-react";
import { KNOWLEDGE_GRAPH_DATA } from "@/lib/graphData";

const ENTITY_CONFIG = {
  COMPANY: { label: "글로벌 제조원", color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.15)", border: "#8b5cf6", icon: Building2 },
  FACILITY: { label: "제조 시설·라인", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", border: "#f59e0b", icon: Factory },
  MATERIAL: { label: "원료·유틸리티", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)", border: "#10b981", icon: Pill },
  PROCESS: { label: "핵심 단위공정", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.15)", border: "#06b6d4", icon: Cpu },
  REG_EVENT: { label: "규제 실사처분", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)", border: "#ef4444", icon: AlertTriangle },
  REG_CLAUSE: { label: "글로벌/KGMP 규정", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.15)", border: "#3b82f6", icon: BookOpen },
  DOMESTIC_CLIENT: { label: "국내 도입 완제사", color: "#ec4899", bg: "rgba(236, 72, 153, 0.15)", border: "#ec4899", icon: Building2 },
};

// Preset Graph Coordinates for 6-Tier Hierarchical Flow Layout
const NODE_POSITIONS = {
  // Tier 1: Regulatory Events (Left-most)
  "event-fda-zenith": { x: 90, y: 120 },
  "event-fda-orient": { x: 90, y: 310 },
  "event-ema-bavaria": { x: 90, y: 500 },
  "event-mfds-binex": { x: 90, y: 690 },
  "event-pmda-alps": { x: 90, y: 880 },

  // Tier 2: Overseas Companies & Facilities
  "comp-zenith": { x: 300, y: 80 },
  "fac-zenith-hyd": { x: 300, y: 170 },
  "comp-orient": { x: 300, y: 270 },
  "fac-orient-zhe": { x: 300, y: 360 },
  "comp-bavaria": { x: 300, y: 460 },
  "fac-bavaria-mun": { x: 300, y: 550 },
  "comp-binex": { x: 300, y: 650 },
  "fac-binex-osong": { x: 300, y: 740 },
  "comp-alps": { x: 300, y: 850 },

  // Tier 3: Unit Processes & Utilities
  "proc-aseptic-fill": { x: 530, y: 130 },
  "mat-wfi": { x: 530, y: 220 },
  "proc-di-audit": { x: 530, y: 330 },
  "proc-smoke-study": { x: 530, y: 480 },
  "proc-cleaning-val": { x: 530, y: 620 },

  // Tier 4: Global Regulations (FDA CFR / EU Annex 1)
  "reg-cfr-211-113": { x: 740, y: 140 },
  "reg-cfr-211-194": { x: 740, y: 320 },
  "reg-annex-1": { x: 740, y: 500 },

  // Tier 5: 1:1 KGMP Korean Cross-Map (Moat!)
  "reg-kgmp-part1": { x: 960, y: 180 },
  "reg-kgmp-di": { x: 960, y: 340 },
  "reg-kgmp-vendor": { x: 960, y: 500 },

  // Tier 6: Materials & Domestic Client Supply Contagion
  "mat-ceftriaxone": { x: 750, y: 670 },
  "mat-statin": { x: 750, y: 790 },
  "mat-oncology": { x: 750, y: 900 },
  "comp-samsung": { x: 1040, y: 680 },
  "comp-yuhan": { x: 1040, y: 790 },
  "comp-celltrion": { x: 1040, y: 900 },
};

export default function KnowledgeGraphView({ onSelectVendor }) {
  const [selectedEntityFilter, setSelectedEntityFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNode, setSelectedNode] = useState(KNOWLEDGE_GRAPH_DATA.nodes[0]); // Default to Zenith BioPharma
  const [activeMode, setActiveMode] = useState("network"); // "network" | "simulator" | "rag"
  
  // Contagion Simulator States
  const [simVendor, setSimVendor] = useState("comp-zenith");
  const [simResult, setSimResult] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Graph Canvas Pan/Zoom
  const [zoomLevel, setZoomLevel] = useState(0.9);
  const [panOffset, setPanOffset] = useState({ x: 10, y: 10 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // RAG Query Presets
  const ragQueries = [
    {
      title: "무균 충전 WFI 누수와 국내 수입사 리스크",
      query: "Zenith 인도 공장 무균충전 라인 WFI 누수 적발 건에 따른 삼성바이오로직스 원료 영향 및 식약처 [별표 1] 대응 방안",
      pathNodes: ["event-fda-zenith", "fac-zenith-hyd", "mat-wfi", "reg-cfr-211-113", "reg-kgmp-part1", "mat-ceftriaxone", "comp-samsung"],
      answer: "US FDA Warning Letter(WL-320-24-19) 지적사항은 21 CFR § 211.113(b) 위반으로, 한국 식약처 '의약품등 안전에 관한 규칙 [별표 1] 제4호(무균의약품 작업원 및 환경기준)'와 1:1 법적 대응됩니다. 세프트리악손 원료 수입선인 국내 완제사에 대해 식약처 수입관리기준(약사법 제42조)에 따른 원료 전수 재시험 및 30일 이내 안전성 소명서 제출이 요구됩니다."
    },
    {
      title: "HPLC 시험 데이터 삭제 및 식약처 DI 가이드라인 영향",
      query: "Orient API 중국 공장의 HPLC 크로마토그램 삭제 적발과 식약처 데이터완전성 평가기준 및 유한양행 납품 리스크",
      pathNodes: ["event-fda-orient", "fac-orient-zhe", "proc-di-audit", "reg-cfr-211-194", "reg-kgmp-di", "mat-statin", "comp-yuhan"],
      answer: "중국 Orient API의 HPLC 원본 데이터 무단 삭제는 ALCOA+ 원칙 위반이자 식약처 '의약품 제조업체 데이터 완전성(DI) 평가기준' 7대 필수요건 위배입니다. 원료 시험성적서(CoA)의 법적 신뢰성이 상실되어, 국내 유한양행 등 완제사는 입고 즉시 자체 확인/정량시험을 전면 재실시하고 변경허가 검토가 요구됩니다."
    },
    {
      title: "유럽 EMA EudraGMDP 부적합과 EU Annex 1 CCS 대응",
      query: "Bavaria Sterile Fill의 EMA Statement of Non-Compliance와 국내 셀트리온 바이오시밀러 유럽 출하 영향",
      pathNodes: ["event-ema-bavaria", "fac-bavaria-mun", "proc-smoke-study", "reg-annex-1", "reg-kgmp-part1", "comp-celltrion"],
      answer: "독일 뮌헨 바이오 CMO의 EudraGMDP 부적합 처분(NCR/DE_BY_01/2024/004)은 EU GMP Annex 1 오염관리전략(CCS) 미흡에 기인합니다. EMA 적합성 인증이 정지됨에 따라 해당 CMO에서 충전된 배치에 대한 유럽 역내 QP 릴리즈가 전면 보류되며, 국내 고객사는 긴급 대체 CMO 밸리데이션(Site Transfer)에 착수해야 합니다."
    }
  ];

  const [activeRagQuery, setActiveRagQuery] = useState(ragQueries[0]);

  // Filtered Nodes
  const filteredNodes = useMemo(() => {
    return KNOWLEDGE_GRAPH_DATA.nodes.filter(node => {
      const matchType = selectedEntityFilter === "ALL" || node.entity_type === selectedEntityFilter;
      const matchSearch = searchQuery.trim() === "" || 
        node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (node.properties?.name_kr && node.properties.name_kr.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (node.properties?.description && node.properties.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchType && matchSearch;
    });
  }, [selectedEntityFilter, searchQuery]);

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  // Filtered Edges
  const filteredEdges = useMemo(() => {
    return KNOWLEDGE_GRAPH_DATA.edges.filter(edge => {
      return filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target);
    });
  }, [filteredNodeIds]);

  // Connected Edges for Selected Node
  const selectedNodeConnections = useMemo(() => {
    if (!selectedNode) return { incoming: [], outgoing: [] };
    const incoming = KNOWLEDGE_GRAPH_DATA.edges
      .filter(e => e.target === selectedNode.id)
      .map(e => ({
        edge: e,
        node: KNOWLEDGE_GRAPH_DATA.nodes.find(n => n.id === e.source)
      }))
      .filter(item => item.node);

    const outgoing = KNOWLEDGE_GRAPH_DATA.edges
      .filter(e => e.source === selectedNode.id)
      .map(e => ({
        edge: e,
        node: KNOWLEDGE_GRAPH_DATA.nodes.find(n => n.id === e.target)
      }))
      .filter(item => item.node);

    return { incoming, outgoing };
  }, [selectedNode]);

  // Execute Contagion Risk Simulation
  const handleRunSimulation = (vendorId) => {
    setIsSimulating(true);
    setSimResult(null);

    setTimeout(() => {
      let result = null;
      if (vendorId === "comp-zenith") {
        result = {
          vendorName: "Zenith BioPharma (인도)",
          eventTitle: "US FDA Warning Letter (WL-320-24-19) - 무균공정 미생물 오염",
          material: "세프트리악손 나트륨 원료(API)",
          affectedClient: "삼성바이오로직스 (수입 연계)",
          riskScore: 88,
          riskLevel: "CRITICAL",
          impactSummary: "해외 제조소 미생물 결함 적발에 따라 식약처 수입관리기준(약사법 제42조)에 의거, 국내 완제의약품 제조소에 대한 불시 합동기획감시 및 해당 원료 사용 완제 배치 잠정 유통보류 위험 88% 도달.",
          kgmpClause: "식약처 [별표 1] 제4호(무균의약품 작업원 및 환경기준) & 수입관리기준",
          actionSteps: [
            "수입 완제사 긴급 통보 및 최근 3개월 입고 원료 100% 무균/엔도톡신 전수 재시험",
            "Zenith사 발행 CoA(시험성적서) 신뢰성 보증을 위한 제3자 공인시험기관 대조검사",
            "식약처 의약품안전국 대상 사전 자진 소명자료(CAPA 이행 보고서) 제출"
          ]
        };
      } else if (vendorId === "comp-orient") {
        result = {
          vendorName: "Orient API Chemical (중국)",
          eventTitle: "US FDA Warning Letter (WL-320-24-31) - HPLC 데이터 고의 삭제",
          material: "아토르바스타틴 칼슘 원료(API)",
          affectedClient: "유한양행 및 국내 제네릭 완제사",
          riskScore: 92,
          riskLevel: "CRITICAL",
          impactSummary: "시험실 원본 데이터 삭제 및 ALCOA+ 위반으로 원료 CoA 법적 효력 상실. 식약처 데이터완전성 7대 지침에 따른 수입원료 적격성 전면 재평가 및 GMP 적합판정 취소 경보.",
          kgmpClause: "식약처 고시 의약품 제조업체 데이터 완전성(DI) 평가기준",
          actionSteps: [
            "제조소 내 Orient API 원료 전 배치 잠정 출하 보류(Quarantine 격리)",
            "HPLC 감사추적(Audit Trail) 전자 기록 원본 실사단 파견 요구",
            "식약처 보고용 완제 배치 함량/유연물질 정밀 재시험 포트폴리오 구축"
          ]
        };
      } else if (vendorId === "comp-bavaria") {
        result = {
          vendorName: "Bavaria Sterile Fill (독일)",
          eventTitle: "EMA EudraGMDP 부적합 처분 (NCR/DE_BY_01) - RABS CCS 결함",
          material: "바이오 완제 무균 충전 서비스",
          affectedClient: "셀트리온 (바이오시밀러 유럽 출하 연계)",
          riskScore: 79,
          riskLevel: "MAJOR",
          impactSummary: "유럽 EudraGMDP 부적합 등록으로 EU 역내 배치 릴리즈(QP Release) 즉시 중단. 유럽 허가당국(EMA) 시정조치 완료 시까지 잠정 공급 중단 리스크.",
          kgmpClause: "식약처 [별표 1] 오염관리전략(CCS) & PIC/S GMP 상호인증",
          actionSteps: [
            "유럽 QP(Qualified Person) 협의를 통한 기존 출하 배치 안전성 평가서 송부",
            "동결건조 바이알 무균성 보증을 위한 2차 백업 CMO 긴급 전환 절차 가동",
            "식약처 해외제조소 변경허가 신청 서류(CTD Module 3) 사전 준비"
          ]
        };
      } else {
        result = {
          vendorName: "Alps Active Pharma (이탈리아)",
          eventTitle: "일본 PMDA 해외 실사 결함 보고서 (차압 및 교차오염)",
          material: "세포독성 백금착제 항암원료 (Oxaliplatin)",
          affectedClient: "국내 항암제 전문 완제 제조사",
          riskScore: 65,
          riskLevel: "MAJOR",
          impactSummary: "고활성 항암제 전용배기 설비 미흡 지적으로 일본 및 국내 식약처 연계 불시감시 대상 지정 가능성.",
          kgmpClause: "식약처 [별표 2] 원료의약품 제조 및 교차오염 방지 기준",
          actionSteps: [
            "공용 덕트 교차오염 위험도 정량평가(PDE 수치 분석) 실시",
            "세척밸리데이션 잔류물 허용기준 적합성 증빙 보고서 수령"
          ]
        };
      }
      setSimResult(result);
      setIsSimulating(false);
    }, 600);
  };

  // Zoom handlers
  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.max(0.4, Math.min(1.8, prev + delta)));
  };

  const handleResetZoom = () => {
    setZoomLevel(0.85);
    setPanOffset({ x: 20, y: 20 });
  };

  return (
    <div className="view-container animate-fade-in" style={{ paddingBottom: "3rem" }}>
      {/* Top Banner / Header */}
      <div className="section-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <span className="live-badge" style={{ background: "rgba(139, 92, 246, 0.15)", color: "#a78bfa", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <Network size={13} /> GraphRAG Engine
            </span>
            <span className="live-badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "rgba(16, 185, 129, 0.3)" }}>
              • 31개 노드 / 30개 다중 홉 관계
            </span>
            <span className="live-badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", borderColor: "rgba(239, 68, 68, 0.3)" }}>
              • 도미노 전이 시뮬레이터 가동
            </span>
          </div>
          <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
            규제 온톨로지 지식 그래프 & 공급망 전이 리스크 시뮬레이터
          </h2>
          <p className="section-desc">
            미국 FDA, 유럽 EMA, 대한민국 식약처, 일본 PMDA의 실사 지적을 <strong>[제조원 → 공장 → 원료 → 공정 → 규제이벤트 → KGMP 1:1 고시 매핑 → 국내 수입완제사]</strong>의 다차원 온톨로지로 연결하여 해외 결함의 국내 전이 파급력을 실시간 시뮬레이션합니다.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", background: "rgba(15, 23, 42, 0.8)", padding: "0.25rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <button
            onClick={() => setActiveMode("network")}
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "8px",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: activeMode === "network" ? "#6366f1" : "transparent",
              color: activeMode === "network" ? "#fff" : "#94a3b8",
              border: "none",
              transition: "all 0.2s ease"
            }}
          >
            <Network size={14} /> 온톨로지 네트워크
          </button>
          <button
            onClick={() => setActiveMode("simulator")}
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "8px",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: activeMode === "simulator" ? "#ef4444" : "transparent",
              color: activeMode === "simulator" ? "#fff" : "#94a3b8",
              border: "none",
              transition: "all 0.2s ease"
            }}
          >
            <Zap size={14} /> 공급망 전이 시뮬레이터
          </button>
          <button
            onClick={() => setActiveMode("rag")}
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "8px",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: activeMode === "rag" ? "#06b6d4" : "transparent",
              color: activeMode === "rag" ? "#fff" : "#94a3b8",
              border: "none",
              transition: "all 0.2s ease"
            }}
          >
            <Sliders size={14} /> GraphRAG 시맨틱 질의
          </button>
        </div>
      </div>

      {/* Mode 1: Ontology Network Explorer */}
      {activeMode === "network" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "1.25rem", alignItems: "start" }}>
          {/* Left: Interactive Graph Canvas */}
          <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "820px", position: "relative" }}>
            {/* Canvas Toolbar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(10, 15, 29, 0.9)",
              zIndex: 10,
              flexWrap: "wrap",
              gap: "0.5rem"
            }}>
              {/* Entity Filter Pills */}
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748b", marginRight: "0.25rem" }}>엔티티 필터:</span>
                <button
                  onClick={() => setSelectedEntityFilter("ALL")}
                  style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    border: "1px solid",
                    borderColor: selectedEntityFilter === "ALL" ? "#38bdf8" : "rgba(255, 255, 255, 0.1)",
                    background: selectedEntityFilter === "ALL" ? "rgba(56, 189, 248, 0.2)" : "transparent",
                    color: selectedEntityFilter === "ALL" ? "#38bdf8" : "#94a3b8",
                    cursor: "pointer"
                  }}
                >
                  전체 ({KNOWLEDGE_GRAPH_DATA.nodes.length})
                </button>
                {Object.entries(ENTITY_CONFIG).map(([typeKey, cfg]) => {
                  const count = KNOWLEDGE_GRAPH_DATA.nodes.filter(n => n.entity_type === typeKey).length;
                  const isSelected = selectedEntityFilter === typeKey;
                  return (
                    <button
                      key={typeKey}
                      onClick={() => setSelectedEntityFilter(typeKey)}
                      style={{
                        padding: "0.2rem 0.55rem",
                        borderRadius: "6px",
                        fontSize: "0.72rem",
                        border: "1px solid",
                        borderColor: isSelected ? cfg.border : "rgba(255, 255, 255, 0.08)",
                        background: isSelected ? cfg.bg : "transparent",
                        color: isSelected ? cfg.color : "#94a3b8",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.color }} />
                      {cfg.label} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Zoom & Search Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ position: "relative" }}>
                  <Search size={13} style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                  <input
                    type="text"
                    placeholder="노드/원료/고시 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      padding: "0.25rem 0.5rem 0.25rem 1.6rem",
                      fontSize: "0.75rem",
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px",
                      color: "#fff",
                      width: "150px"
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: "0.2rem" }}>
                  <button 
                    onClick={() => handleZoom(0.1)} 
                    className="btn btn-outline" 
                    style={{ padding: "0.25rem 0.4rem", fontSize: "0.75rem" }}
                    title="확대"
                  >
                    <ZoomIn size={13} />
                  </button>
                  <button 
                    onClick={() => handleZoom(-0.1)} 
                    className="btn btn-outline" 
                    style={{ padding: "0.25rem 0.4rem", fontSize: "0.75rem" }}
                    title="축소"
                  >
                    <ZoomOut size={13} />
                  </button>
                  <button 
                    onClick={handleResetZoom} 
                    className="btn btn-outline" 
                    style={{ padding: "0.25rem 0.4rem", fontSize: "0.75rem" }}
                    title="기본 뷰"
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* SVG Visualizer Area */}
            <div 
              style={{
                flex: 1,
                background: "radial-gradient(ellipse at 50% 50%, rgba(15, 23, 42, 0.6) 0%, rgba(2, 6, 23, 1) 100%)",
                position: "relative",
                overflow: "hidden",
                cursor: isDragging ? "grabbing" : "grab"
              }}
              onMouseDown={(e) => {
                setIsDragging(true);
                setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
              }}
              onMouseMove={(e) => {
                if (isDragging) {
                  setPanOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
                }
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* Background Graph Grid */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  pointerEvents: "none"
                }} 
              />

              {/* Tier Flow Background Labels */}
              <div style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                right: "20px",
                display: "flex",
                justifyContent: "space-between",
                color: "rgba(255, 255, 255, 0.15)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                pointerEvents: "none"
              }}>
                <span>1. 글로벌 규제실사</span>
                <span>2. 해외제조소·시설</span>
                <span>3. 단위공정·유틸리티</span>
                <span>4. 글로벌 규정 조항</span>
                <span>5. 식약처 KGMP 1:1 고시</span>
                <span>6. 국내 완제 공급망</span>
              </div>

              {/* Main SVG Container */}
              <svg
                width="100%"
                height="100%"
                style={{
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: "0 0",
                  transition: isDragging ? "none" : "transform 0.15s ease-out"
                }}
              >
                <defs>
                  {/* Arrowhead Markers */}
                  <marker id="arrow-default" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="rgba(148, 163, 184, 0.4)" />
                  </marker>
                  <marker id="arrow-critical" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
                  </marker>
                  <marker id="arrow-kgmp" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
                  </marker>
                  <marker id="arrow-contagion" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
                  </marker>
                </defs>

                {/* Draw Edges */}
                {filteredEdges.map(edge => {
                  const srcPos = NODE_POSITIONS[edge.source] || { x: 400, y: 400 };
                  const tgtPos = NODE_POSITIONS[edge.target] || { x: 600, y: 400 };
                  
                  const isContagion = edge.relation === "CONTAGION_RISK";
                  const isKgmp = edge.relation === "CROSS_MAPPED_TO";
                  const isDefect = edge.relation === "INSPECTED_DEFECT";

                  let strokeColor = "rgba(148, 163, 184, 0.25)";
                  let strokeWidth = 1.5;
                  let strokeDasharray = "none";
                  let markerEnd = "url(#arrow-default)";

                  if (isContagion) {
                    strokeColor = "#ef4444";
                    strokeWidth = 2.5;
                    strokeDasharray = "6 4";
                    markerEnd = "url(#arrow-contagion)";
                  } else if (isKgmp) {
                    strokeColor = "#3b82f6";
                    strokeWidth = 2;
                    markerEnd = "url(#arrow-kgmp)";
                  } else if (isDefect) {
                    strokeColor = "#f97316";
                    strokeWidth = 2;
                    markerEnd = "url(#arrow-critical)";
                  }

                  const isConnectedToSelected = selectedNode && (edge.source === selectedNode.id || edge.target === selectedNode.id);
                  if (isConnectedToSelected) {
                    strokeColor = "#38bdf8";
                    strokeWidth = 3;
                  }

                  // Curved Bezier Path
                  const dx = tgtPos.x - srcPos.x;
                  const dy = tgtPos.y - srcPos.y;
                  const cx1 = srcPos.x + dx * 0.5;
                  const cy1 = srcPos.y;
                  const cx2 = srcPos.x + dx * 0.5;
                  const cy2 = tgtPos.y;

                  const midX = (srcPos.x + tgtPos.x) / 2;
                  const midY = (srcPos.y + tgtPos.y) / 2;

                  return (
                    <g key={edge.id} className="graph-edge-group">
                      <path
                        d={`M ${srcPos.x} ${srcPos.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tgtPos.x} ${tgtPos.y}`}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeDasharray={strokeDasharray}
                        markerEnd={markerEnd}
                        style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                      />
                      {/* Edge Label on Midpoint */}
                      <text
                        x={midX}
                        y={midY - 4}
                        fill={isContagion ? "#f87171" : isKgmp ? "#60a5fa" : "rgba(148, 163, 184, 0.7)"}
                        fontSize="9"
                        fontWeight="600"
                        textAnchor="middle"
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        {edge.label}
                      </text>
                    </g>
                  );
                })}

                {/* Draw Nodes */}
                {filteredNodes.map(node => {
                  const pos = NODE_POSITIONS[node.id] || { x: 400, y: 400 };
                  const cfg = ENTITY_CONFIG[node.entity_type] || ENTITY_CONFIG.COMPANY;
                  const isSelected = selectedNode?.id === node.id;
                  const isCritical = node.risk_level === "CRITICAL";

                  return (
                    <g
                      key={node.id}
                      transform={`translate(${pos.x}, ${pos.y})`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNode(node);
                      }}
                      style={{ cursor: "pointer" }}
                      className="graph-node-group"
                    >
                      {/* Selection Glow */}
                      {isSelected && (
                        <circle
                          r="28"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          className="animate-spin-slow"
                        />
                      )}

                      {/* Critical Pulse */}
                      {isCritical && (
                        <circle
                          r="24"
                          fill="rgba(239, 68, 68, 0.2)"
                          className="pulse-node"
                        />
                      )}

                      {/* Node Outer Circle */}
                      <circle
                        r="20"
                        fill="rgba(10, 15, 29, 0.95)"
                        stroke={isSelected ? "#38bdf8" : cfg.color}
                        strokeWidth={isSelected ? 3 : 2}
                        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                      />

                      {/* Node Center Icon Dot */}
                      <circle
                        r="7"
                        fill={cfg.color}
                      />

                      {/* Node Title Text */}
                      <text
                        y="32"
                        textAnchor="middle"
                        fill={isSelected ? "#38bdf8" : "#f1f5f9"}
                        fontSize="11"
                        fontWeight={isSelected ? "700" : "600"}
                        style={{ pointerEvents: "none", textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
                      >
                        {node.label.length > 20 ? node.label.substring(0, 18) + "..." : node.label}
                      </text>

                      {/* Node Country / Subtitle */}
                      <text
                        y="44"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="8.5"
                        style={{ pointerEvents: "none" }}
                      >
                        {node.country} • {cfg.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Detailed Entity Inspector Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {selectedNode ? (
              <div className="card" style={{ padding: "1.25rem", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                {/* Node Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: ENTITY_CONFIG[selectedNode.entity_type]?.bg,
                      color: ENTITY_CONFIG[selectedNode.entity_type]?.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      {React.createElement(ENTITY_CONFIG[selectedNode.entity_type]?.icon || Network, { size: 20 })}
                    </div>
                    <div>
                      <span style={{ fontSize: "0.7rem", color: ENTITY_CONFIG[selectedNode.entity_type]?.color, fontWeight: 700, letterSpacing: "0.05em" }}>
                        {ENTITY_CONFIG[selectedNode.entity_type]?.label}
                      </span>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                        {selectedNode.properties?.name_kr || selectedNode.label}
                      </h3>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        {selectedNode.label} ({selectedNode.country})
                      </div>
                    </div>
                  </div>

                  {/* Risk Badge */}
                  <span className={`badge badge-${selectedNode.risk_level === "CRITICAL" ? "critical" : selectedNode.risk_level === "MAJOR" ? "major" : "info"}`}>
                    {selectedNode.risk_level}
                  </span>
                </div>

                {/* Entity Description / Properties */}
                <div style={{ background: "rgba(15, 23, 42, 0.6)", borderRadius: "8px", padding: "0.85rem", marginBottom: "1rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: "0.3rem" }}>엔티티 상세 정보:</div>
                  <p style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                    {selectedNode.properties?.description || selectedNode.properties?.summary_kr || selectedNode.properties?.title_kr || "상세 규제 프로필이 등록되어 있습니다."}
                  </p>
                  
                  {/* Metadata Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.6rem" }}>
                    {selectedNode.properties?.fei && (
                      <span style={{ fontSize: "0.7rem", background: "rgba(255, 255, 255, 0.07)", padding: "0.15rem 0.45rem", borderRadius: "4px", color: "#94a3b8" }}>
                        FDA FEI: <strong>{selectedNode.properties.fei}</strong>
                      </span>
                    )}
                    {selectedNode.properties?.eudragmdp_ref && (
                      <span style={{ fontSize: "0.7rem", background: "rgba(255, 255, 255, 0.07)", padding: "0.15rem 0.45rem", borderRadius: "4px", color: "#94a3b8" }}>
                        EMA EudraGMDP: <strong>{selectedNode.properties.eudragmdp_ref}</strong>
                      </span>
                    )}
                    {selectedNode.properties?.cas_number && (
                      <span style={{ fontSize: "0.7rem", background: "rgba(255, 255, 255, 0.07)", padding: "0.15rem 0.45rem", borderRadius: "4px", color: "#94a3b8" }}>
                        CAS No: <strong>{selectedNode.properties.cas_number}</strong>
                      </span>
                    )}
                    {selectedNode.properties?.clause && (
                      <span style={{ fontSize: "0.7rem", background: "rgba(59, 130, 246, 0.15)", padding: "0.15rem 0.45rem", borderRadius: "4px", color: "#60a5fa" }}>
                        고시: <strong>{selectedNode.properties.clause}</strong>
                      </span>
                    )}
                  </div>
                </div>

                {/* 1:1 KGMP Moat Box (If Regulatory Clause) */}
                {selectedNode.entity_type === "REG_CLAUSE" && (
                  <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "8px", padding: "0.85rem", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#60a5fa", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.3rem" }}>
                      <CheckCircle2 size={15} /> 대한민국 식약처 1:1 고시 매핑
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#e2e8f0", marginBottom: "0.4rem" }}>
                      <strong>대응 조항:</strong> {selectedNode.properties?.mapping_target || "KGMP 별표 1 및 데이터완전성 평가기준 연계"}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.4 }}>
                      <strong>실사 타깃:</strong> {selectedNode.properties?.inspection_focus || "해외 규제 결함 적발 시 국내 수입사 제조소 즉시 불시감시 대상"}
                    </div>
                  </div>
                )}

                {/* Connected Relationships (Incoming / Outgoing) */}
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    연계 네트워크 경로 ({selectedNodeConnections.incoming.length + selectedNodeConnections.outgoing.length}개):
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", maxHeight: "240px", overflowY: "auto" }}>
                    {/* Incoming connections */}
                    {selectedNodeConnections.incoming.map((item, idx) => (
                      <div
                        key={`in-${idx}`}
                        onClick={() => setSelectedNode(item.node)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.45rem 0.65rem",
                          borderRadius: "6px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          cursor: "pointer",
                          fontSize: "0.75rem"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ color: "#94a3b8" }}>←</span>
                          <span style={{ color: "#cbd5e1" }}>{item.node.label}</span>
                        </div>
                        <span style={{ color: "#38bdf8", fontWeight: 600, fontSize: "0.7rem" }}>
                          {item.edge.label}
                        </span>
                      </div>
                    ))}

                    {/* Outgoing connections */}
                    {selectedNodeConnections.outgoing.map((item, idx) => (
                      <div
                        key={`out-${idx}`}
                        onClick={() => setSelectedNode(item.node)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.45rem 0.65rem",
                          borderRadius: "6px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          cursor: "pointer",
                          fontSize: "0.75rem"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ color: "#94a3b8" }}>→</span>
                          <span style={{ color: "#cbd5e1" }}>{item.node.label}</span>
                        </div>
                        <span style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.7rem" }}>
                          {item.edge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem" }}>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, fontSize: "0.8rem", padding: "0.5rem" }}
                    onClick={() => {
                      setSimVendor(selectedNode.id.startsWith("comp-") ? selectedNode.id : "comp-zenith");
                      setActiveMode("simulator");
                      handleRunSimulation(selectedNode.id.startsWith("comp-") ? selectedNode.id : "comp-zenith");
                    }}
                  >
                    <Zap size={14} /> 전이 리스크 시뮬레이션
                  </button>
                </div>
              </div>
            ) : (
              <div className="card" style={{ padding: "2rem", textAlign: "center", color: "#64748b" }}>
                <Network size={32} style={{ margin: "0 auto 0.75rem", opacity: 0.5 }} />
                <p style={{ fontSize: "0.85rem" }}>캔버스에서 노드를 클릭하면 다차원 온톨로지 정보와 식약처 1:1 고시 매핑을 확인할 수 있습니다.</p>
              </div>
            )}

            {/* Platform Moat Mini Card */}
            <div className="card" style={{ padding: "1rem", background: "rgba(15, 23, 42, 0.7)", border: "1px dashed rgba(255, 255, 255, 0.15)" }}>
              <div style={{ fontSize: "0.75rem", color: "#38bdf8", fontWeight: 700, marginBottom: "0.25rem" }}>
                💡 ReguLens Korea 온톨로지 핵심 해자
              </div>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.4, margin: 0 }}>
                단순 텍스트 검색을 넘어 해외 규제기관(FDA/EMA)의 지적 코드를 한국 식약처(MFDS) 행정처분 및 KGMP [별표 1] 고시 조항에 1:1로 사전 매핑하여 공급망 전이 리스크를 계산합니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Supply Chain Contagion Risk Simulator */}
      {activeMode === "simulator" && (
        <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: "1.25rem" }}>
          {/* Simulator Control Panel */}
          <div className="card" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Zap size={18} style={{ color: "#ef4444" }} />
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                공급망 도미노 전이 시뮬레이터
              </h3>
            </div>
            <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "1.25rem", lineHeight: 1.4 }}>
              해외 CMO/API 제조원의 규제기관 결함 발생 시 국내 제약사(고객사)로 전이되는 법적·행정적 리스크 확률을 산출합니다.
            </p>

            {/* Vendor Selector */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                해외 공급 제조소 (Vendor) 선택:
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { id: "comp-zenith", name: "Zenith BioPharma (인도)", spec: "무균충전 주사제 CMO / FDA Warning Letter" },
                  { id: "comp-orient", name: "Orient API Chemical (중국)", spec: "합성원료 API / FDA HPLC 데이터 삭제" },
                  { id: "comp-bavaria", name: "Bavaria Sterile Fill (독일)", spec: "바이오 완제 CMO / EMA EudraGMDP 부적합" },
                  { id: "comp-alps", name: "Alps Active Pharma (이탈리아)", spec: "고활성 항암제 원료 / PMDA 차압 지적" },
                ].map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSimVendor(item.id)}
                    style={{
                      padding: "0.65rem 0.85rem",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: simVendor === item.id ? "#ef4444" : "rgba(255, 255, 255, 0.08)",
                      background: simVendor === item.id ? "rgba(239, 68, 68, 0.12)" : "rgba(15, 23, 42, 0.6)",
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                  >
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: simVendor === item.id ? "#f87171" : "#fff" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.15rem" }}>
                      {item.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={() => handleRunSimulation(simVendor)}
              disabled={isSimulating}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                borderColor: "#ef4444",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
            >
              {isSimulating ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  온톨로지 다중 홉 시뮬레이션 연산 중...
                </>
              ) : (
                <>
                  <Zap size={15} />
                  도미노 전이 리스크 시뮬레이션 가동
                </>
              )}
            </button>
          </div>

          {/* Simulation Output Dashboard */}
          <div className="card" style={{ padding: "1.5rem" }}>
            {simResult ? (
              <div className="animate-fade-in">
                {/* Result Header Gauge */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem",
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.25)",
                  borderRadius: "12px",
                  marginBottom: "1.5rem"
                }}>
                  <div>
                    <span className="badge badge-critical" style={{ marginBottom: "0.3rem", display: "inline-block" }}>
                      {simResult.riskLevel} CONTAGION ALERT
                    </span>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", margin: 0 }}>
                      국내 공급망 전이 위험도: {simResult.riskScore}%
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "#cbd5e1", marginTop: "0.25rem", marginBottom: 0 }}>
                      원인 발생지: <strong>{simResult.vendorName}</strong> → 파급 대상: <strong>{simResult.affectedClient}</strong>
                    </p>
                  </div>

                  {/* Big Number Radial Gauge */}
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "6px solid #ef4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: "rgba(10, 15, 29, 0.8)",
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)"
                  }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#f87171" }}>{simResult.riskScore}%</span>
                    <span style={{ fontSize: "0.6rem", color: "#94a3b8", fontWeight: 600 }}>전이 지수</span>
                  </div>
                </div>

                {/* 5-Hop Contagion Propagation Path */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    Multi-Hop 파급 경로 (Contagion Propagation Flow):
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.65rem", position: "relative" }}>
                    <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                      <span style={{ fontSize: "0.65rem", color: "#f87171", fontWeight: 700 }}>1단계: 해외 실사 지적</span>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginTop: "0.25rem" }}>
                        {simResult.eventTitle.split("-")[0]}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.2rem" }}>{simResult.vendorName}</div>
                    </div>

                    <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                      <span style={{ fontSize: "0.65rem", color: "#34d399", fontWeight: 700 }}>2단계: 연계 원료·품목</span>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginTop: "0.25rem" }}>
                        {simResult.material}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.2rem" }}>국내 완제 주원료 사용</div>
                    </div>

                    <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(236, 72, 153, 0.3)" }}>
                      <span style={{ fontSize: "0.65rem", color: "#f472b6", fontWeight: 700 }}>3단계: 국내 고객사 노출</span>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginTop: "0.25rem" }}>
                        {simResult.affectedClient.split("(")[0]}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.2rem" }}>국내 1·2차 완제 제조사</div>
                    </div>

                    <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(59, 130, 246, 0.3)" }}>
                      <span style={{ fontSize: "0.65rem", color: "#60a5fa", fontWeight: 700 }}>4단계: 식약처 행정처분 위험</span>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginTop: "0.25rem" }}>
                        불시 현지실사·출하보류
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.2rem" }}>약사법 제42조 수입기준</div>
                    </div>
                  </div>
                </div>

                {/* Regulatory Assessment & Checklist */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                  {/* Left: MFDS Administrative Impact */}
                  <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "1rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.8rem", color: "#f87171", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <ShieldAlert size={15} /> 식약처 연계 행정처분 파급력 분석
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                      {simResult.impactSummary}
                    </p>
                    <div style={{ marginTop: "0.75rem", padding: "0.5rem 0.75rem", background: "rgba(255, 255, 255, 0.04)", borderRadius: "6px", fontSize: "0.75rem", color: "#94a3b8" }}>
                      <strong>적용 법령:</strong> {simResult.kgmpClause}
                    </div>
                  </div>

                  {/* Right: Automated CAPA Action Package */}
                  <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "1rem", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div style={{ fontSize: "0.8rem", color: "#34d399", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <CheckCircle2 size={15} /> AI 권고 사전 방어 체크리스트 (CAPA)
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {simResult.actionSteps.map((step, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.78rem", color: "#e2e8f0" }}>
                          <span style={{ color: "#10b981", fontWeight: 700 }}>•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Print/Download CAPA Report Button */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
                  <button
                    onClick={() => window.print()}
                    className="btn btn-outline"
                    style={{ fontSize: "0.82rem", padding: "0.6rem 1.1rem" }}
                  >
                    <Download size={14} /> 실무용 전이 리스크 진단서 (PDF 인쇄)
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ padding: "4rem 2rem", textAlign: "center", color: "#64748b" }}>
                <Zap size={40} style={{ margin: "0 auto 1rem", opacity: 0.3 }} />
                <h4 style={{ fontSize: "1.05rem", color: "#94a3b8", marginBottom: "0.5rem" }}>
                  시뮬레이션 대기 중
                </h4>
                <p style={{ fontSize: "0.82rem", maxWidth: "420px", margin: "0 auto" }}>
                  좌측 패널에서 해외 제조소를 선택하고 <strong>'도미노 전이 리스크 시뮬레이션 가동'</strong>을 클릭하면 규제기관 결함의 국내 완제사 파급 경로를 즉시 계산합니다.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mode 3: GraphRAG Semantic Search */}
      {activeMode === "rag" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Query Selection Bar */}
          <div className="card" style={{ padding: "1.25rem" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Sliders size={16} style={{ color: "#06b6d4" }} />
              시맨틱 온톨로지 자연어 질의 템플릿 (GraphRAG Semantic Queries)
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
              {ragQueries.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveRagQuery(item)}
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: activeRagQuery.title === item.title ? "#06b6d4" : "rgba(255, 255, 255, 0.08)",
                    background: activeRagQuery.title === item.title ? "rgba(6, 182, 212, 0.12)" : "rgba(15, 23, 42, 0.6)",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: activeRagQuery.title === item.title ? "#22d3ee" : "#fff" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#94a3b8", marginTop: "0.3rem", lineHeight: 1.4 }}>
                    {item.query.substring(0, 55)}...
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GraphRAG Traversal & AI Briefing Card */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span className="live-badge" style={{ background: "rgba(6, 182, 212, 0.15)", color: "#22d3ee", borderColor: "rgba(6, 182, 212, 0.3)" }}>
                GraphRAG Traversal Active
              </span>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                {activeRagQuery.title}
              </h3>
            </div>

            <p style={{ fontSize: "0.85rem", color: "#cbd5e1", background: "rgba(15, 23, 42, 0.7)", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)", marginBottom: "1.25rem" }}>
              <strong>자연어 질의:</strong> "{activeRagQuery.query}"
            </p>

            {/* Traversed Node Path Badges */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                온톨로지 그래프 탐색 경로 (Traversed Entities):
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
                {activeRagQuery.pathNodes.map((nodeId, idx) => {
                  const nodeObj = KNOWLEDGE_GRAPH_DATA.nodes.find(n => n.id === nodeId);
                  const isLast = idx === activeRagQuery.pathNodes.length - 1;
                  return (
                    <React.Fragment key={nodeId}>
                      <span style={{
                        padding: "0.35rem 0.65rem",
                        borderRadius: "6px",
                        background: "rgba(6, 182, 212, 0.15)",
                        border: "1px solid rgba(6, 182, 212, 0.4)",
                        color: "#22d3ee",
                        fontSize: "0.75rem",
                        fontWeight: 600
                      }}>
                        {nodeObj?.label || nodeId}
                      </span>
                      {!isLast && <ArrowRight size={13} style={{ color: "#64748b" }} />}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* AI Synthesized Executive Briefing */}
            <div style={{ background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.25)", borderRadius: "10px", padding: "1.25rem" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#22d3ee", display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={16} /> AI Executive Summary (GraphRAG 도출 결과)
              </div>
              <p style={{ fontSize: "0.85rem", color: "#f1f5f9", lineHeight: 1.6, margin: 0 }}>
                {activeRagQuery.answer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
