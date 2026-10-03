"use client";

import React, { useState, useEffect } from "react";
import { 
  Radar, 
  Search, 
  ShieldAlert, 
  Bot, 
  Award, 
  Activity, 
  ExternalLink,
  Layers,
  Database,
  Network
} from "lucide-react";

import RadarView from "@/components/RadarView";
import SearchFilterView from "@/components/SearchFilterView";
import SupplyWatchdogView from "@/components/SupplyWatchdogView";
import KnowledgeGraphView from "@/components/KnowledgeGraphView";
import AiAgentChatView from "@/components/AiAgentChatView";
import BenchmarkView from "@/components/BenchmarkView";
import InspectorModal from "@/components/InspectorModal";

import { getRegulatoryDocuments, getWatchlists, isSupabaseConfigured } from "@/lib/supabase";

export default function Home() {
  const [activeTab, setActiveTab] = useState("radar");
  const [documents, setDocuments] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [dataSource, setDataSource] = useState("loading");

  useEffect(() => {
    async function loadData() {
      const docsRes = await getRegulatoryDocuments();
      const watchRes = await getWatchlists();
      setDocuments(docsRes.data);
      setWatchlists(watchRes.data);
      setDataSource(docsRes.source);
    }
    loadData();
  }, []);

  const handleSelectVendorFromWatchdog = (vendorName) => {
    const matched = documents.find(d => 
      d.company_name.toLowerCase().includes(vendorName.toLowerCase()) ||
      vendorName.toLowerCase().includes(d.company_name.toLowerCase())
    );
    if (matched) {
      setSelectedDoc(matched);
    } else {
      setActiveTab("search");
    }
  };

  return (
    <div>
      {/* Top Sticky Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <div className="brand-section" onClick={() => setActiveTab("radar")}>
            <div className="brand-logo-icon">
              <Layers size={22} />
            </div>
            <div>
              <div className="brand-title">ReguLens Korea</div>
              <div className="brand-subtitle">AI Regulatory Intelligence & GMP Audit</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="nav-tabs">
            <button
              id="tab-radar-btn"
              className={`nav-tab-btn ${activeTab === "radar" ? "active" : ""}`}
              onClick={() => setActiveTab("radar")}
            >
              <Radar size={15} /> 글로벌 레이더
            </button>
            <button
              id="tab-search-btn"
              className={`nav-tab-btn ${activeTab === "search" ? "active" : ""}`}
              onClick={() => setActiveTab("search")}
            >
              <Search size={15} /> 규제 검색기
            </button>
            <button
              id="tab-watchdog-btn"
              className={`nav-tab-btn ${activeTab === "watchdog" ? "active" : ""}`}
              onClick={() => setActiveTab("watchdog")}
            >
              <ShieldAlert size={15} /> 공급망 워치독
            </button>
            <button
              id="tab-graph-btn"
              className={`nav-tab-btn ${activeTab === "graph" ? "active" : ""}`}
              onClick={() => setActiveTab("graph")}
            >
              <Network size={15} /> 지식 그래프 (온톨로지)
            </button>
            <button
              id="tab-agent-btn"
              className={`nav-tab-btn ${activeTab === "agent" ? "active" : ""}`}
              onClick={() => setActiveTab("agent")}
            >
              <Bot size={15} /> AI 공정 에이전트
            </button>
            <button
              id="tab-benchmark-btn"
              className={`nav-tab-btn ${activeTab === "benchmark" ? "active" : ""}`}
              onClick={() => setActiveTab("benchmark")}
            >
              <Award size={15} /> 골든 벤치마크
            </button>
          </div>

          {/* Right Status Indicator */}
          <div className="nav-actions">
            <div className="live-badge">
              <span className="pulse-dot" />
              <span>
                {isSupabaseConfigured ? "Supabase Live" : "AI 엔진 가동 (Ready)"}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Body */}
      <main className="app-container">
        {activeTab === "radar" && (
          <RadarView 
            documents={documents} 
            onSelectDoc={(doc) => setSelectedDoc(doc)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === "search" && (
          <SearchFilterView 
            documents={documents} 
            onSelectDoc={(doc) => setSelectedDoc(doc)}
          />
        )}

        {activeTab === "watchdog" && (
          <SupplyWatchdogView 
            watchlists={watchlists} 
            onSelectVendor={handleSelectVendorFromWatchdog}
          />
        )}

        {activeTab === "graph" && (
          <KnowledgeGraphView 
            onSelectVendor={handleSelectVendorFromWatchdog}
          />
        )}

        {activeTab === "agent" && (
          <AiAgentChatView />
        )}

        {activeTab === "benchmark" && (
          <BenchmarkView />
        )}
      </main>

      {/* Side-by-Side Inspection Modal */}
      {selectedDoc && (
        <InspectorModal 
          doc={selectedDoc} 
          onClose={() => setSelectedDoc(null)} 
        />
      )}

      {/* Mandatory Regulatory Compliance Disclaimer */}
      <footer className="disclaimer-banner">
        <p style={{ maxWidth: "1100px", margin: "0 auto", lineHeight: 1.5 }}>
          <strong>[법적 면책 고지]</strong> ReguLens Korea 플랫폼의 분석 결과는 공공 규제기관(미국 FDA, 유럽 EMA, 대한민국 식품의약품안전처) 공개 문서 및 AI 기반 자연어 처리 파이프라인에 의해 가공된 참고용 데이터입니다. 본 정보는 공식적인 법률 또는 규제 컨설팅 자문을 대신하지 않으며, 최종적인 GMP 규정 준수 및 생산·출하 판단에 대한 책임은 각 제조사에 있습니다.
        </p>
      </footer>
    </div>
  );
}
