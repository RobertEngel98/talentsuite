"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function PreisePage() {
  const mob = useIsMobile();
  const plans = [
    { name: "Starter", price: "ab 1.490€", period: "pro Kampagne", desc: "Für Betriebe, die Performance Recruiting testen möchten.", features: ["1 offene Stelle", "Meta Ads Kampagne", "60-Sekunden-Bewerberfunnel", "2 Wochen Laufzeit", "Echtzeit-Dashboard", "E-Mail-Support"], popular: false },
    { name: "Professional", price: "ab 2.490€", period: "pro Monat", desc: "Für Betriebe mit mehreren offenen Stellen und laufendem Bedarf.", features: ["Bis zu 3 offene Stellen", "Laufende Optimierung", "A/B-Testing", "Wöchentliches Reporting", "Employer Branding Beratung", "Telefon- & E-Mail-Support", "Keine Mindestlaufzeit"], popular: true },
    { name: "Enterprise", price: "Individuell", period: "auf Anfrage", desc: "Für größere Unternehmen mit komplexen Anforderungen.", features: ["Unbegrenzte Stellen", "Multi-Channel (Meta + LinkedIn + Google)", "Video-Produktion (MadebyMEE)", "Dedizierter Account Manager", "Monatliche Strategie-Calls", "Custom Reporting", "Employer Branding Komplett"], popular: false },
  ];

  return (
    <>
      <Head>
        <title>Preise | TalentSuite — Transparentes Performance Recruiting</title>
        <meta name="description" content="Transparente Preise für Performance Recruiting: Ab 1.490€ pro Kampagne. Keine versteckten Kosten." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px" }}>
            Transparente <span style={{ color: "#1B98E0" }}>Preise</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>Keine versteckten Kosten. Keine Mindestlaufzeit. Messbare Ergebnisse.</p>
        </div>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: mob ? "24px 16px 48px" : "40px 24px 64px" }}>
          <div data-track-section="pricing" data-track-section-name="Preise" style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr", gap: 20, marginTop: mob ? -28 : -40 }}>
            {plans.map((p, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: "28px 24px", boxShadow: p.popular ? "0 8px 40px rgba(27,152,224,0.2)" : "0 4px 20px rgba(0,0,0,0.06)", border: p.popular ? "2px solid #1B98E0" : "1px solid #e8e8e8", position: "relative" }}>
                {p.popular && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "4px 16px", borderRadius: 12, background: "#1B98E0", color: "#ffffff", fontSize: 11, fontWeight: 700 }}>BELIEBT</div>}
                <h3 style={{ color: "#023B5B", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{p.name}</h3>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: "#1B98E0" }}>{p.price}</span>
                  <span style={{ fontSize: 13, color: "#94A3B8", marginLeft: 4 }}>{p.period}</span>
                </div>
                <p style={{ color: "#64748B", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>{p.desc}</p>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#10B981", flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
                <a href="/recruiting-analyse" data-track-click="Jetzt beraten lassen" data-track-location="preise" style={{ display: "block", textAlign: "center", marginTop: 20, padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14, background: p.popular ? "#1B98E0" : "#023B5B", color: "#ffffff" }}>
                  {p.popular ? "Jetzt beraten lassen" : p.name === "Starter" ? "Jetzt starten" : "Angebot anfordern"} →
                </a>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: mob ? 16 : 32, flexWrap: "wrap", marginTop: 32 }}>
            {["Keine Mindestlaufzeit", "Transparente Kosten", "DSGVO-konform", "Erste Bewerbungen in 48h"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ color: "#10B981" }}>✓</span>
                <span style={{ color: "#64748B", fontSize: 13 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
