"use client";

import { useState, useEffect } from "react";
import { trackViewContent, trackSchedule, trackLead } from "../../components/Analytics";

const ACCENT = "#1B98E0";
const DARK = "#0a1628";
const BRAND = "#023B5B";
const GREEN = "#10B981";
const CALENDAR_URL = "https://calendar.app.google/CSGu2PT8671jC4q68";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function PflegeCaseStudy() {
  const mob = useIsMobile();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const utmData = {};
      utmKeys.forEach((k) => { const v = params.get(k); if (v) utmData[k] = v; });
      if (Object.keys(utmData).length > 0) sessionStorage.setItem("utm_data", JSON.stringify(utmData));
    }
    trackViewContent({ contentName: "pflege-case-study", category: "pflege", contentType: "case_study" });
  }, []);

  const handleCalendarClick = () => {
    trackSchedule({ formName: "pflege-casestudy-calendar", category: "pflege", value: 50 });
  };

  const containerStyle = { maxWidth: 720, margin: "0 auto", padding: mob ? "0 16px" : "0 24px" };

  const timeline = [
    { tag: "Woche 1", title: "Analyse & Setup", desc: "Zielgruppenanalyse, Kampagnenstruktur erstellt, Pflegekraft-spezifischer Bewerberfunnel aufgebaut." },
    { tag: "Woche 2", title: "Erste Bewerbungen", desc: "18 Bewerbungen eingegangen. 9 davon qualifiziert. Erste Vorstellungsgespräche geführt." },
    { tag: "Woche 3", title: "Optimierung & Skalierung", desc: "Anzeigen optimiert, CPA von 24€ auf 16€ gesenkt. 22 weitere Bewerbungen." },
    { tag: "Woche 4", title: "Einstellungen", desc: "63 Bewerbungen gesamt. 12 Pflegefachkräfte eingestellt. Kampagne auf Dauerbesetzung umgestellt." },
  ];

  return (
    <div id="pf" style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      {/* ═══ HERO ═══ */}
      <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${BRAND} 50%, #0A4D72 100%)`, padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
        <a data-pf="white50" href="/lp/pflege-recruiting" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", display: "block", marginBottom: 12 }}>
          ← Zurück zur Übersicht
        </a>
        <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(16,185,129,0.15)" }}>
          <span data-pf="green" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: GREEN }}>CASE STUDY · PFLEGE</span>
        </div>
        <h1 data-pf="white" style={{ color: "#ffffff", fontSize: mob ? 26 : 38, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.15, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          12 Pflegekräfte in <span data-pf="accent" style={{ color: ACCENT }}>4 Wochen</span> – ohne Jobportale
        </h1>
        <p data-pf="white70" style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>
          Wie ein Pflegeheim in NRW den Fachkräftemangel mit Social Media Recruiting gelöst hat.
        </p>
      </div>

      <div style={{ ...containerStyle, paddingTop: mob ? 24 : 40, paddingBottom: mob ? 48 : 64 }}>
        {/* Stats Bar */}
        <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 10, marginBottom: 24, marginTop: mob ? -28 : -36 }}>
          {[
            { n: "63", l: "Bewerbungen" },
            { n: "28", l: "Qualifiziert" },
            { n: "12", l: "Einstellungen", highlight: true },
            { n: "208€", l: "pro Einstellung" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "16px 8px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div data-pf={s.highlight ? "green" : "accent"} style={{ fontSize: mob ? 22 : 28, fontWeight: 800, color: s.highlight ? GREEN : ACCENT }}>{s.n}</div>
              <div data-pf="gray" style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Ausgangssituation */}
        <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 style={{ color: BRAND, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Ausgangssituation</h2>
          <p data-pf="darkbody" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
            Ein Pflegeheim mit 85 Betten und 60 Mitarbeitern in NRW suchte dringend Pflegefachkräfte. Die Situation:
          </p>
          <ul style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
            <li data-pf="darkbody">8 offene Stellen für Pflegefachkräfte seit über 6 Monaten</li>
            <li data-pf="darkbody">0 qualifizierte Bewerbungen über Indeed und StepStone</li>
            <li data-pf="darkbody">Zeitarbeit kostete über 40.000€ pro Monat</li>
            <li data-pf="darkbody">Bestandspersonal am Limit – Krankenstand bei 18%</li>
            <li data-pf="darkbody">Aufnahmestopp drohte</li>
          </ul>
        </div>

        {/* Strategie */}
        <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 style={{ color: BRAND, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Unsere Strategie</h2>
          <p data-pf="darkbody" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
            Statt weitere Stellenanzeigen auf Jobportalen zu schalten, haben wir einen komplett neuen Ansatz gewählt:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "🎯", title: "Zielgruppe definiert", desc: "Pflegefachkräfte im Umkreis von 40km, die nicht aktiv suchen aber offen für Veränderung sind." },
              { icon: "📱", title: "Social Media Kampagnen", desc: "Gezielte Anzeigen auf Facebook und Instagram mit authentischen Einblicken in die Einrichtung." },
              { icon: "⚡", title: "60-Sekunden-Bewerbung", desc: "Mobiler Bewerberfunnel – Bewerbung in unter 60 Sekunden direkt vom Smartphone." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h3 style={{ color: BRAND, fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{s.title}</h3>
                  <p data-pf="gray" style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: "12px 16px", borderRadius: 10, background: `${ACCENT}10`, borderLeft: `3px solid ${ACCENT}` }}>
            <p style={{ color: BRAND, fontSize: 14, fontWeight: 600, margin: 0 }}>
              Monatliches Budget: 2.500€ – ein Bruchteil der Zeitarbeitskosten
            </p>
          </div>
        </div>

        {/* Kampagnenverlauf */}
        <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 style={{ color: BRAND, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px" }}>Kampagnen-Verlauf</h2>
          {timeline.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < timeline.length - 1 ? 20 : 0 }}>
              <div style={{ width: 80, flexShrink: 0 }}>
                <span style={{ padding: "4px 10px", borderRadius: 8, background: "#E8F4FD", color: BRAND, fontSize: 11, fontWeight: 700 }}>{t.tag}</span>
              </div>
              <div>
                <h3 style={{ color: BRAND, fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{t.title}</h3>
                <p data-pf="gray" style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ergebnisse */}
        <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 style={{ color: BRAND, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px" }}>Ergebnisse nach 4 Wochen</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {[
              { label: "Bewerbungen", value: "63", sub: "gesamt" },
              { label: "Qualifiziert", value: "28", sub: "44% Quote" },
              { label: "Einstellungen", value: "12", sub: "Pflegefachkräfte" },
              { label: "Kosten/Einstellung", value: "208€", sub: "statt 5.000€+" },
              { label: "Zeitraum", value: "4 Wochen", sub: "statt 6+ Monate" },
              { label: "Ersparnis", value: "35.000€+", sub: "vs. Zeitarbeit/Monat" },
            ].map((r, i) => (
              <div key={i} style={{ padding: "16px 12px", borderRadius: 12, background: "#f8fafc", textAlign: "center" }}>
                <div data-pf="gray" style={{ fontSize: 13, color: "#64748B", marginBottom: 4 }}>{r.label}</div>
                <div data-pf="accent" style={{ fontSize: 24, fontWeight: 800, color: ACCENT }}>{r.value}</div>
                <div data-pf="muted" style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Kundenzitat */}
        <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 24, borderLeft: `4px solid ${ACCENT}` }}>
          <p style={{ color: BRAND, fontSize: mob ? 16 : 18, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 12px" }}>
            „Wir waren skeptisch – nach 6 Monaten ohne Bewerbungen über Jobportale. Aber nach nur 3 Wochen mit TalentSuite hatten wir mehr Vorstellungsgespräche als im gesamten letzten Jahr. Die Qualität der Bewerber war herausragend. Wir konnten alle 8 Stellen besetzen und mussten sogar Bewerbern absagen."
          </p>
          <p data-pf="gray" style={{ color: "#64748B", fontSize: 14, margin: 0 }}>– Pflegedienstleitung, Seniorenheim in NRW, 85 Betten</p>
          <div style={{ marginTop: 8 }}>{"⭐⭐⭐⭐⭐"}</div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${DARK}, ${BRAND})`, borderRadius: 16, padding: mob ? "32px 20px" : "44px 32px", textAlign: "center" }}>
          <h2 data-pf="white" style={{ color: "#ffffff", fontSize: mob ? 22 : 28, fontWeight: 700, margin: "0 0 10px" }}>
            Ähnliche Ergebnisse für Ihre Einrichtung?
          </h2>
          <p data-pf="white65" style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, margin: "0 0 24px" }}>
            Kostenlose Recruiting-Analyse in 15 Minuten – unverbindlich
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCalendarClick}
            data-pf="pribtn"
            style={{ display: "inline-block", padding: "16px 36px", borderRadius: 12, background: ACCENT, color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 20px rgba(27,152,224,0.3)" }}
          >
            Jetzt Termin buchen →
          </a>
          <p data-pf="white40" style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginTop: 14 }}>
            Robert Engel · Geschäftsführer TalentSuite
          </p>
        </div>
      </div>
    </div>
  );
}
