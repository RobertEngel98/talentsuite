"use client";
import React, { useEffect, useState } from "react";
import { trackMetaLead } from "../components/MetaPixel";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function TerminBestaetigt() {
  const mob = useIsMobile();
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    if (!tracked) {
      trackMetaLead({ formName: "termin-bestaetigt", category: "booking", value: 500 });
      // Also fire a Schedule event for higher-value tracking
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Schedule", {
          content_name: "beratungsgespraech",
          content_category: "booking",
          value: 500,
          currency: "EUR",
        });
      }
      setTracked(true);
    }
  }, [tracked]);

  const steps = [
    { icon: "📧", title: "Bestätigungs-E-Mail prüfen", desc: "Sie erhalten in Kürze eine Kalender-Einladung per E-Mail mit allen Details." },
    { icon: "📋", title: "Kurz vorbereiten", desc: "Überlegen Sie, welche Stellen Sie besetzen möchten und was Sie bisher versucht haben." },
    { icon: "💬", title: "Gespräch führen", desc: "In 20 Minuten analysieren wir gemeinsam Ihre Situation und zeigen Ihnen konkrete nächste Schritte." },
  ];

  return (
    <>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`,
        padding: mob ? "48px 16px 56px" : "80px 24px 88px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${G}15, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>

          {/* Success checkmark */}
          <div style={{
            width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px",
            background: `${G}20`, display: "flex", alignItems: "center", justifyContent: "center",
            animation: "scaleIn 0.5s ease-out",
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 style={{ color: W, fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Ihr Termin ist bestätigt!
          </h1>
          <p style={{ color: `${W}80`, fontSize: mob ? 16 : 20, maxWidth: 520, margin: "0 auto 0", lineHeight: 1.6 }}>
            Vielen Dank — wir freuen uns auf das Gespräch mit Ihnen.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: L, padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>

          {/* Next Steps */}
          <div style={{
            background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px",
            marginTop: mob ? -32 : -40, marginBottom: 24,
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative",
          }}>
            <h2 style={{ color: B, fontSize: mob ? 20 : 24, fontWeight: 700, margin: "0 0 20px", textAlign: "center" }}>
              So geht es weiter
            </h2>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < steps.length - 1 ? 20 : 0, alignItems: "flex-start" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${A}10`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, flexShrink: 0,
                }}>{s.icon}</div>
                <div>
                  <h3 style={{ color: B, fontSize: 17, fontWeight: 700, margin: "0 0 4px" }}>
                    <span style={{ color: A, marginRight: 8 }}>{i + 1}.</span>{s.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: 15, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div style={{
            background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px",
            marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px" }}>
              Was Sie in der Analyse erwartet
            </h2>
            {[
              "Ehrliche Einschätzung Ihrer aktuellen Recruiting-Situation",
              "Konkrete Strategie für Ihre Branche und offenen Stellen",
              "Transparente Kalkulation — was eine Kampagne kosten würde",
              "Quick Wins, die Sie sofort umsetzen können",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ color: G, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div style={{
            background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16,
            padding: mob ? "28px 18px" : "36px 28px", textAlign: "center",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
              {[
                { n: "50+", l: "Betriebe betreut" },
                { n: "15-25€", l: "Ø Kosten pro Bewerbung" },
                { n: "30 Tage", l: "Ø bis zur Einstellung" },
              ].map((r, i) => (
                <div key={i} style={{
                  background: `${W}08`, borderRadius: 12, padding: "16px 12px",
                  gridColumn: mob && i === 2 ? "1 / -1" : undefined,
                }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: A }}>{r.n}</div>
                  <div style={{ fontSize: 12, color: `${W}60`, marginTop: 4 }}>{r.l}</div>
                </div>
              ))}
            </div>
            <p style={{ color: `${W}50`, fontSize: 13, margin: 0 }}>
              Robert Engel · Geschäftsführer TalentSuite
            </p>
          </div>

          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, marginTop: 24 }}>
            Fragen vorab? Schreiben Sie uns an{" "}
            <a href="mailto:info@talentsuite.io" style={{ color: A, textDecoration: "none" }}>info@talentsuite.io</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
