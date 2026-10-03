"use client";

import React, { useState } from "react";
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Bell, 
  ShieldCheck, 
  Trash2, 
  Mail,
  Send,
  ExternalLink
} from "lucide-react";

export default function SupplyWatchdogView({ watchlists, onSelectVendor }) {
  const [items, setItems] = useState(watchlists);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newVendor, setNewVendor] = useState({
    target_company: "",
    target_material: "",
    facility_country: "India",
    alert_email: ""
  });
  const [alertSuccessToast, setAlertSuccessToast] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newVendor.target_company) return;

    const newItem = {
      id: "w-" + Date.now(),
      target_company: newVendor.target_company,
      target_material: newVendor.target_material || "원료의약품 (API)",
      facility_country: newVendor.facility_country,
      alert_status: "NORMAL",
      last_event: "신규 등록됨 (글로벌 규제기관 모니터링 파이프라인 연동 완료)",
      alert_email: newVendor.alert_email || "qa@pharma-corp.kr"
    };

    setItems([newItem, ...items]);
    setShowAddModal(false);
    setNewVendor({ target_company: "", target_material: "", facility_country: "India", alert_email: "" });
  };

  const handleSimulateAlert = (vendorName) => {
    setAlertSuccessToast(`[모니터링 알림 발송 완료] ${vendorName} 관련 FDA 최신 Warning Letter 감지 -> 담당자 카카오톡/이메일로 경보가 즉시 전송되었습니다.`);
    setTimeout(() => setAlertSuccessToast(null), 4000);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Toast Alert */}
      {alertSuccessToast && (
        <div 
          style={{
            padding: "14px 20px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95))",
            color: "white",
            fontSize: "0.88rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "var(--shadow-glow-cyan)",
            animation: "pulseAnimation 1.5s ease"
          }}
        >
          <Bell size={18} />
          {alertSuccessToast}
        </div>
      )}

      {/* Header Panel */}
      <div className="glass-panel" style={{ padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-cyan)", fontSize: "0.78rem", fontWeight: 700, marginBottom: "8px" }}>
              <ShieldCheck size={16} /> 서플라이 체인 워치독 (Supply Chain Watchdog)
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "6px" }}>
              해외 원료(API) 공장 및 CDMO 파트너 규제 리스크 실시간 감시
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "780px", lineHeight: 1.6 }}>
              국내 제약사가 수입하는 해외 제조소 목록을 등록해 두면, 해당 제조소에 미국 FDA Warning Letter, Form 483 또는 수입금지(Import Alert)가 발생하는 즉시 실시간 알림을 발송하여 품질 부적합 원료 투입을 사전에 차단합니다.
            </p>
          </div>

          <button
            id="open-add-vendor-modal-btn"
            className="btn-primary"
            onClick={() => setShowAddModal(true)}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Plus size={16} /> 신규 협력사 등록
          </button>
        </div>
      </div>

      {/* Vendor Cards Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "20px" }}>
        {items.map((v) => {
          const isCritical = v.alert_status === "CRITICAL";
          return (
            <div
              key={v.id}
              className="glass-panel"
              style={{
                padding: "24px",
                borderLeft: isCritical ? "4px solid var(--accent-rose)" : "4px solid var(--accent-emerald)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "18px"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <span 
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        background: isCritical ? "rgba(244, 63, 94, 0.15)" : "rgba(16, 185, 129, 0.15)",
                        color: isCritical ? "#fb7185" : "#34d399",
                        marginBottom: "6px"
                      }}
                    >
                      {isCritical ? <AlertTriangle size={12} /> : <CheckCircle2 size={12} />}
                      {isCritical ? "CRITICAL RISK (실사 결함 감지)" : "NORMAL (정상 모니터링)"}
                    </span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)" }}>
                      {v.target_company}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleDelete(v.id)}
                    style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: "4px" }}
                    title="모니터링 해제"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "14px", lineHeight: 1.5 }}>
                  <div><strong>도입 원료:</strong> {v.target_material}</div>
                  <div><strong>공장 소재국:</strong> {v.facility_country}</div>
                  <div><strong>알림 수신처:</strong> {v.alert_email}</div>
                </div>

                <div 
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: isCritical ? "rgba(244, 63, 94, 0.08)" : "rgba(16, 185, 129, 0.06)",
                    border: isCritical ? "1px solid rgba(244, 63, 94, 0.2)" : "1px solid rgba(16, 185, 129, 0.15)",
                    fontSize: "0.8rem",
                    color: isCritical ? "#fda4af" : "#6ee7b7",
                    lineHeight: 1.5
                  }}
                >
                  <strong>최근 감지 이력:</strong> {v.last_event}
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <button
                  className="btn-secondary"
                  style={{ flex: 1, padding: "8px 12px", fontSize: "0.78rem", justifyContent: "center" }}
                  onClick={() => handleSimulateAlert(v.target_company)}
                >
                  <Send size={13} /> 긴급 경보 테스트
                </button>
                {isCritical && (
                  <button
                    className="btn-primary"
                    style={{ flex: 1, padding: "8px 12px", fontSize: "0.78rem", justifyContent: "center" }}
                    onClick={() => onSelectVendor(v.target_company)}
                  >
                    대응 CAPA 열람
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 110,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "520px",
              padding: "32px",
              background: "var(--bg-secondary)",
              border: "1px solid rgba(255, 255, 255, 0.15)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px" }}>
              신규 원료 공급사(Vendor) 등록
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "20px" }}>
              등록된 공장의 FDA 실사 결과, Warning Letter, 식약처 회수 조치를 24시간 자동 추적합니다.
            </p>

            <form onSubmit={handleAdd} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  제조사 영문명 (공식 상호) *
                </label>
                <input
                  id="new-vendor-company"
                  type="text"
                  placeholder="예: Hetero Drugs Limited, Dr. Reddy's"
                  value={newVendor.target_company}
                  onChange={(e) => setNewVendor({ ...newVendor, target_company: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "white"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  도입 대상 원료의약품(API) 품명
                </label>
                <input
                  id="new-vendor-material"
                  type="text"
                  placeholder="예: 세프트리악손 나트륨 원료, 아모디핀"
                  value={newVendor.target_material}
                  onChange={(e) => setNewVendor({ ...newVendor, target_material: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "white"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                    제조소 소재국
                  </label>
                  <select
                    value={newVendor.facility_country}
                    onChange={(e) => setNewVendor({ ...newVendor, facility_country: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "white"
                    }}
                  >
                    <option value="India">인도 (India)</option>
                    <option value="China">중국 (China)</option>
                    <option value="South Korea">대한민국 (South Korea)</option>
                    <option value="Germany">독일 (Germany)</option>
                    <option value="USA">미국 (USA)</option>
                    <option value="Japan">일본 (Japan)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                    알림 수신 이메일
                  </label>
                  <input
                    type="email"
                    placeholder="qa@pharma-corp.kr"
                    value={newVendor.alert_email}
                    onChange={(e) => setNewVendor({ ...newVendor, alert_email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "white"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "12px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  취소
                </button>
                <button
                  type="submit"
                  id="submit-vendor-btn"
                  className="btn-primary"
                >
                  등록 및 추적 시작
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
