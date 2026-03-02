"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

const ACCENT = "#2D8CFF";
const BRAND = "#023B5B";

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "#ffffff",
        borderRadius: 14,
        padding: "20px 24px",
        cursor: "pointer",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <h3 style={{ margin: 0 }}>{question}</h3>
        <span data-ra="accent" style={{ fontSize: 22, fontWeight: 600, flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </div>
      {open && (
        <p data-ra="body" style={{ marginTop: 14, marginBottom: 0 }}>{answer}</p>
      )}
    </div>
  );
}

export default function RecruitingAnalyse() {
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-ra-styles", "true");
    style.textContent = `
      #ra { padding-top: 80px !important; }

      #ra h1, #ra h2, #ra h3, #ra h4, #ra h5, #ra h6,
      #ra span, #ra li, #ra p, #ra div, #ra label, #ra button,
      #ra input, #ra textarea, #ra summary, #ra a {
        color: #023B5B !important;
      }

      #ra h1 { font-size: clamp(28px, 5vw, 40px) !important; line-height: 1.2 !important; font-weight: 800 !important; }
      #ra h2 { font-size: clamp(22px, 3.5vw, 28px) !important; line-height: 1.3 !important; font-weight: 700 !important; }
      #ra h3 { font-size: 17px !important; line-height: 1.4 !important; font-weight: 700 !important; }
      #ra p  { font-size: 15px !important; line-height: 1.7 !important; opacity: 1 !important; }
      #ra span { font-size: inherit !important; }

      #ra .ra-container      { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; }
      #ra .ra-container-wide { max-width: 1000px !important; margin: 0 auto !important; padding: 0 24px !important; }
      #ra .ra-card            { background: #ffffff !important; border-radius: 20px !important; padding: 44px 36px !important; box-shadow: 0 4px 30px rgba(0,0,0,0.08) !important; }
      #ra .ra-grid-3          { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 28px !important; }
      #ra .ra-grid-4          { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 20px !important; }
      #ra .ra-stat-val        { font-size: clamp(22px, 4vw, 30px) !important; }

      #ra [data-ra="white"]   { color: #ffffff !important; }
      #ra [data-ra="muted"]   { color: #cccccc !important; }
      #ra [data-ra="body"]    { color: #475569 !important; }
      #ra [data-ra="gray"]    { color: #64748B !important; }
      #ra [data-ra="accent"]  { color: #2D8CFF !important; }
      #ra [data-ra="link"]    { color: #2D8CFF !important; text-decoration: underline !important; }
      #ra [data-ra="pribtn"]  { color: #ffffff !important; font-size: 16px !important; }

      @media (max-width: 768px) {
        #ra { padding-top: 60px !important; }
        #ra h1 { font-size: 26px !important; }
        #ra h2 { font-size: 20px !important; }
        #ra .ra-grid-3 { grid-template-columns: 1fr !important; gap: 20px !important; }
        #ra .ra-grid-4 { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        #ra .ra-card { padding: 28px 20px !important; border-radius: 16px !important; }
        #ra .ra-container, #ra .ra-container-wide { padding: 0 16px !important; }
        #ra .ra-stat-val { font-size: 24px !important; }
      }

      @media (max-width: 480px) {
        #ra h1 { font-size: 24px !important; }
        #ra h2 { font-size: 18px !important; }
        #ra .ra-grid-4 { grid-template-columns: 1fr !important; }
        #ra .ra-card { padding: 24px 16px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Head>
        <title>Kostenlose Recruiting-Analyse | TalentSuite</title>
        <meta name="description" content="Kostenlose Recruiting-Analyse — Fachkräfte finden in 30 Tagen. In 20 Minuten erfahren Sie, wie Sie qualifizierte Fachkräfte über Social Media finden." />
        <link rel="canonical" href="https://www.talentsuite.io/recruiting-analyse" />
      </Head>

      <div id="ra">

        {/* ══════════ HERO ══════════ */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="ra-container">
            <p data-ra="muted" style={{ marginBottom: 16, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              20 Minuten · 100% kostenlos · Unverbindlich
            </p>
            <h1 data-ra="white">Kostenlose Recruiting-Analyse für Ihren Betrieb</h1>
            <p data-ra="muted" style={{ marginTop: 20, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
              In 20 Minuten erfahren Sie, wie Sie qualifizierte Fachkräfte über Social Media finden — konkret, ehrlich und auf Ihre Branche zugeschnitten.
            </p>
            <div style={{ marginTop: 32 }}>
              <a data-ra="pribtn" href="https://calendar.app.google/QFoADWcRwwuYUoky8" style={{
                display: "inline-block", padding: "16px 36px", borderRadius: 12,
                fontWeight: 700, textDecoration: "none", background: ACCENT,
                boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
              }}>
                Jetzt Termin wählen →
              </a>
            </div>
            <p data-ra="muted" style={{ marginTop: 16, opacity: 0.6 }}>
              Mit Robert Engel, Geschäftsführer TalentSuite
            </p>
          </div>
        </div>

        {/* ══════════ STATS ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container-wide">
            <div className="ra-grid-4">
              {[
                { value: "50+", label: "Unternehmen betreut" },
                { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
                { value: "30 Tage", label: "Ø Zeit bis zur Einstellung" },
                { value: "12-18%", label: "Ø Conversion-Rate" },
              ].map((stat, i) => (
                <div key={i} className="ra-card" style={{ textAlign: "center", padding: "28px 16px" }}>
                  <div data-ra="accent" className="ra-stat-val" style={{ fontWeight: 800, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <p data-ra="gray" style={{ margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ WAS SIE ERFAHREN ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container-wide">
            <h2 data-ra="white" style={{ textAlign: "center", marginBottom: 40 }}>Was Sie in der Analyse erfahren</h2>
            <div className="ra-grid-3">
              {[
                { icon: "📊", title: "Analyse Ihrer Situation", desc: "Wir schauen uns Ihre offenen Stellen, bisherigen Recruiting-Maßnahmen und Ihre Branche an." },
                { icon: "🎯", title: "Konkrete Strategie", desc: "Sie erfahren, über welche Kanäle und mit welcher Ansprache Sie Ihre Zielgruppe am besten erreichen." },
                { icon: "💰", title: "Transparente Kalkulation", desc: "Sie erhalten eine ehrliche Einschätzung, was eine Kampagne kosten würde und welche Ergebnisse realistisch sind." },
              ].map((step, i) => (
                <div key={i} className="ra-card" style={{ textAlign: "center" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16, background: "#f0f5fa",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 30, marginBottom: 20,
                  }}>
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p data-ra="body" style={{ marginTop: 10 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ WARUM KEINE BEWERBUNGEN ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container">
            <div className="ra-card">
              <h2 style={{ textAlign: "center", marginBottom: 28 }}>Warum die meisten Betriebe keine Bewerbungen bekommen</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p data-ra="body" style={{ margin: 0 }}>
                  Die Wahrheit ist unbequem: 72% aller Fachkräfte in Deutschland sind nicht aktiv auf Jobsuche. Sie scrollen nicht auf StepStone, Indeed oder der Jobbörse der Arbeitsagentur. Aber sie verbringen täglich 90+ Minuten auf Social Media — auf Facebook, Instagram und TikTok.
                </p>
                <p data-ra="body" style={{ margin: 0 }}>
                  Klassische Stellenanzeigen auf Jobportalen erreichen nur die 20-28% der Fachkräfte, die aktiv suchen. Das bedeutet: Sie konkurrieren mit hunderten anderen Betrieben um denselben kleinen Pool an Bewerbern. Das treibt die Kosten hoch und die Qualität runter.
                </p>
                <p data-ra="body" style={{ margin: 0 }}>
                  Performance Recruiting über Social Media dreht dieses Verhältnis um. Sie erreichen die 80% passiver Fachkräfte, die zwar nicht aktiv suchen, aber für das richtige Angebot offen sind. Mit branchenspezifischen Kampagnen, authentischen Arbeitgebereinblicken und einem Bewerbungsprozess, der in unter 60 Sekunden funktioniert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ FAQ ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container">
            <h2 data-ra="white" style={{ textAlign: "center", marginBottom: 32 }}>Häufige Fragen</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <FAQ question="Ist das wirklich kostenlos?" answer="Ja, zu 100%. Die Recruiting-Analyse ist unser Kennenlernen. Wir schauen uns Ihre Situation an und geben Ihnen eine ehrliche Einschätzung — ohne Verpflichtung, ohne versteckte Kosten." />
              <FAQ question="Ich wurde schon mal von einer Agentur enttäuscht." answer="Das hören wir leider oft. Deshalb arbeiten wir datenbasiert und transparent. Sie sehen jederzeit, was Ihre Kampagne kostet und welche Ergebnisse sie liefert. Keine leeren Versprechen." />
              <FAQ question="Lohnt sich das bei nur 1-2 offenen Stellen?" answer="Absolut. Gerade wenn Sie nur wenige Stellen besetzen müssen, ist eine gezielte Kampagne effizienter als monatelanges Warten auf Jobbörsen." />
              <FAQ question="Wie schnell sehe ich Ergebnisse?" answer="In der Regel erhalten Sie die ersten Bewerbungen innerhalb der ersten 7-14 Tage nach Kampagnenstart. Die meisten unserer Kunden stellen innerhalb von 30 Tagen ein." />
            </div>
          </div>
        </div>

        {/* ══════════ FINAL CTA ══════════ */}
        <div style={{ textAlign: "center", paddingBottom: 100 }}>
          <div className="ra-container" style={{ maxWidth: 600 }}>
            <h2 data-ra="white">Bereit, Fachkräfte zu finden?</h2>
            <p data-ra="muted" style={{ marginTop: 14, marginBottom: 32 }}>
              20 Minuten, die den Unterschied machen können. Kostenlos und unverbindlich.
            </p>
            <a data-ra="pribtn" href="https://calendar.app.google/QFoADWcRwwuYUoky8" style={{
              display: "inline-block", padding: "16px 36px", borderRadius: 12,
              fontWeight: 700, textDecoration: "none", background: ACCENT,
              boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
            }}>
              Jetzt Termin wählen →
            </a>
            <p data-ra="muted" style={{ marginTop: 16, opacity: 0.6 }}>
              Robert Engel · Geschäftsführer TalentSuite · Keine Verpflichtung
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
