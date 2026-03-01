"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { trackMetaLead } from "../components/MetaPixel";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function BindungToolkit() {
  const mob = useIsMobile();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async () => {
    if (!email) return;
    trackMetaLead({ formName: "mitarbeiter-bindung-toolkit", category: "leadmagnet", value: 50 });
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "mitarbeiter-bindung", name: email.split("@")[0], email,
          extra: { toolkit: "bindung-toolkit" },
        }),
      });
    } catch (e) { console.error(e); }
  };
  const tools = [
    { icon: "📋", title: "Fluktuations-Analyse-Checkliste", desc: "Identifizieren Sie die 7 häufigsten Gründe, warum Mitarbeiter kündigen." },
    { icon: "💬", title: "Mitarbeitergespräch-Leitfaden", desc: "Strukturierter Gesprächsguide für Bleibe- und Entwicklungsgespräche." },
    { icon: "🎯", title: "Benefits-Matrix", desc: "Welche Benefits wirklich wirken — nach Branche und Betriebsgröße." },
    { icon: "📊", title: "Onboarding-Checkliste", desc: "30-60-90-Tage-Plan für erfolgreiche Einarbeitung neuer Mitarbeiter." },
    { icon: "⭐", title: "Employer-Branding-Quickstart", desc: "5 sofort umsetzbare Maßnahmen für eine stärkere Arbeitgebermarke." },
  ];

  return (
    <>
      <Head>
        <title>Mitarbeiterbindungs-Toolkit | TalentSuite</title>
        <meta name="description" content="Kostenloses Toolkit zur Mitarbeiterbindung: Checklisten, Gesprächsleitfäden und praktische Maßnahmen gegen Fluktuation." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 60px" : "72px 24px 88px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(16,185,129,0.15)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#10B981" }}>KOSTENLOSES TOOLKIT</span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 24 : 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Mitarbeiter finden ist teuer. <span style={{ color: "#1B98E0" }}>Sie zu halten ist unbezahlbar.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 540, margin: "0 auto" }}>5 praxiserprobte Tools gegen Fluktuation — sofort einsetzbar.</p>
        </div>
        <div style={{ maxWidth: 640, margin: mob ? "-32px auto 0" : "-48px auto 0", padding: "0 16px 48px" }}>
          {tools.map((t, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "18px 16px" : "22px 24px", boxShadow: "0 3px 14px rgba(0,0,0,0.05)", marginBottom: 12, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{t.icon}</span>
              <div>
                <h3 style={{ color: "#023B5B", fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{t.title}</h3>
                <p style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", marginTop: 20 }}>
            {!sent ? (<>
              <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>Toolkit kostenlos herunterladen</h2>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ihre E-Mail-Adresse" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #ddd", fontSize: 15, outline: "none", boxSizing: "border-box", color: "#023B5B", marginBottom: 12 }} />
              <button onClick={handleSubmit} style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "#10B981", color: "#ffffff", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>Jetzt Toolkit erhalten →</button>
              <p style={{ textAlign: "center", fontSize: 11, color: "#94A3B8", marginTop: 8 }}>5 PDF-Tools · Sofort-Download · DSGVO-konform</p>
            </>) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📦</div>
                <h2 style={{ color: "#10B981", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Toolkit ist unterwegs!</h2>
                <p style={{ color: "#64748B", fontSize: 15 }}>Prüfen Sie Ihr Postfach — {email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
