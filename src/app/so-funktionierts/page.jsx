"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function SoFunktionierts() {
  const mob = useIsMobile();
  const steps = [
    { nr: "01", icon: "📊", title: "Kostenlose Analyse", desc: "In 20 Minuten analysieren wir Ihre Situation: Welche Stellen sind offen? Wie viele Fachkräfte sind in Ihrer Region über Social Media erreichbar? Was ist realistisch?", details: ["Branchenspezifische Zielgruppenanalyse", "Regionale Reichweiten-Prognose", "Konkrete Kosten-Kalkulation", "Keine Verpflichtung"] },
    { nr: "02", icon: "🎯", title: "Kampagne aufsetzen", desc: "Wir erstellen Ihre maßgeschneiderte Recruiting-Kampagne: Zielgruppe definieren, Anzeigen gestalten, Bewerberfunnel bauen — alles innerhalb von 5 Werktagen.", details: ["Zielgruppen-Targeting nach Beruf, Region & Interessen", "Professionelle Anzeigen-Erstellung", "60-Sekunden-Bewerbungsfunnel", "DSGVO-konforme Datenverarbeitung"] },
    { nr: "03", icon: "📱", title: "Bewerbungen erhalten", desc: "Ihre Anzeigen erreichen Fachkräfte dort, wo sie täglich 2,5 Stunden verbringen: auf Social Media. Die 60-Sekunden-Bewerbung senkt die Hürde maximal.", details: ["Erste Bewerbungen in 48-72 Stunden", "Qualifizierte Vorauswahl durch smarte Fragen", "Automatische Benachrichtigung per E-Mail", "Echtzeit-Dashboard mit allen Bewerbungen"] },
    { nr: "04", icon: "✅", title: "Einstellen & skalieren", desc: "Sie führen Gespräche mit qualifizierten Kandidaten und stellen ein. Wir optimieren die Kampagne laufend für noch bessere Ergebnisse.", details: ["Laufende Kampagnen-Optimierung", "Wöchentliches Reporting", "A/B-Testing für maximale Performance", "Skalierung bei Bedarf"] },
  ];

  return (
    <>
      <Head>
        <title>So funktioniert Performance Recruiting | TalentSuite</title>
        <meta name="description" content="In 4 Schritten zu qualifizierten Bewerbungen: Analyse → Kampagne → Bewerbungen → Einstellung." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            So funktioniert <span style={{ color: "#1B98E0" }}>Performance Recruiting</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>
            Von der Analyse bis zur Einstellung — in 4 klaren Schritten.
          </p>
        </div>
        <div data-track-section="how-it-works" data-track-section-name="So funktionierts" style={{ maxWidth: 740, margin: "0 auto", padding: mob ? "32px 16px 48px" : "48px 24px 64px" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20, borderLeft: "4px solid #1B98E0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>{s.icon}</span>
                <div>
                  <span style={{ color: "#1B98E0", fontSize: 13, fontWeight: 700 }}>SCHRITT {s.nr}</span>
                  <h2 style={{ color: "#023B5B", fontSize: mob ? 20 : 24, fontWeight: 700, margin: 0 }}>{s.title}</h2>
                </div>
              </div>
              <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>{s.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 8 }}>
                {s.details.map((d, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#10B981", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ color: "#64748B", fontSize: 14, lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "28px 18px" : "40px 28px", textAlign: "center", marginTop: 12 }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 8px" }}>Bereit für Schritt 1?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse — 20 Minuten, keine Verpflichtung</p>
            <a href="/recruiting-analyse" data-track-click="Jetzt Analyse starten" data-track-location="so-funktionierts" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Analyse starten →</a>
          </div>
        </div>
      </div>
    </>
  );
}
