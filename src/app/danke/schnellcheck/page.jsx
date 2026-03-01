"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { trackLead } from "../../components/Analytics";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function Danke() {
  const mob = useIsMobile();
  const [tracked, setTracked] = useState(false);
  useEffect(() => { if (!tracked) { trackLead({ formName: "danke-schnellcheck", category: "leadmagnet-danke", value: 50 }); setTracked(true); } }, [tracked]);

  return (
    <>
      <Head><title>Danke — Arbeitgeber-Schnellcheck | TalentSuite</title></Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "64px 16px 72px" : "96px 24px 104px", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>📊</div>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 24 : 36, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>Ihr Ergebnis wird erstellt!</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>Prüfen Sie Ihr Postfach — Ihre Auswertung kommt in den nächsten Minuten.</p>
        </div>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: mob ? "24px 16px 48px" : "40px 24px 64px" }}>
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", marginTop: mob ? -32 : -48 }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>Ihr nächster Schritt</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", textAlign: "center" }}>
              Sie haben den Arbeitgeber-Schnellcheck erhalten — aber möchten Sie wissen, was das konkret für Ihren Betrieb bedeutet?
            </p>
            <a href="/recruiting-analyse" style={{ display: "block", textAlign: "center", padding: "14px 28px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Kostenlose Recruiting-Analyse buchen →</a>
            <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 10 }}>20 Minuten · Kostenlos · Keine Verpflichtung</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr", gap: 12, marginTop: 24 }}>
            {[{ n: "50+", l: "Betriebe betreut" }, { n: "15-25€", l: "Ø pro Bewerbung" }, { n: "30 Tage", l: "Ø bis Einstellung" }].map((s, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "16px 12px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#1B98E0" }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, marginTop: 24 }}>TalentSuite — Performance Recruiting für den Mittelstand</p>
        </div>
      </div>
    </>
  );
}
