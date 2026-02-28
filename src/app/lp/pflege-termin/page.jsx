"use client";

import { useState, useEffect } from "react";
import { trackMetaViewContent, trackMetaSchedule, trackMetaLead } from "../../components/MetaPixel";

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

export default function PflegeTermin() {
  const mob = useIsMobile();
  const [callbackForm, setCallbackForm] = useState({ name: "", telefon: "", einrichtung: "" });
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const utmData = {};
      utmKeys.forEach((k) => { const v = params.get(k); if (v) utmData[k] = v; });
      if (Object.keys(utmData).length > 0) sessionStorage.setItem("utm_data", JSON.stringify(utmData));
    }
    trackMetaViewContent({ contentName: "pflege-bofu", category: "pflege", contentType: "booking_page" });
  }, []);

  const handleCalendarClick = () => {
    trackMetaSchedule({ formName: "pflege-bofu-calendar", category: "pflege", value: 50 });
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "begin_checkout", { currency: "EUR", value: 50, items: [{ item_name: "pflege-termin" }] });
    }
  };

  const handleCallback = async (e) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.telefon) return;
    setSubmitting(true);

    const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");

    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pflege-termin",
          name: callbackForm.name,
          phone: callbackForm.telefon,
          company: callbackForm.einrichtung,
          email: `rueckruf-${Date.now()}@pflege-lead.talentsuite.io`,
          industry: "Pflege",
          extra: { type: "rueckruf", funnel_stage: "bofu", ...utmData },
        }),
      });
      trackMetaLead({ formName: "pflege-bofu-callback", category: "pflege", value: 30 });
      setCallbackSubmitted(true);
    } catch {}
    setSubmitting(false);
  };

  const containerStyle = { maxWidth: 680, margin: "0 auto", padding: mob ? "0 16px" : "0 24px" };

  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      {/* ═══ HERO ═══ */}
      <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${BRAND} 100%)`, padding: mob ? "48px 16px 56px" : "80px 24px 90px", textAlign: "center" }}>
        <div style={containerStyle}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            15 Minuten · Kostenlos · Unverbindlich
          </p>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 28 : 40, fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px" }}>
            Ihr kostenloser Recruiting-Plan{" "}
            <span style={{ color: ACCENT }}>für Pflegekräfte</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 16 : 18, lineHeight: 1.6, maxWidth: 520, margin: "0 auto 32px" }}>
            In 15 Minuten zeigen wir Ihnen exakt, wie viele Pflegekräfte Sie in den nächsten 30 Tagen gewinnen können.
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCalendarClick}
            style={{ display: "inline-block", padding: "18px 40px", borderRadius: 12, fontWeight: 700, fontSize: 17, textDecoration: "none", color: "#ffffff", background: ACCENT, boxShadow: "0 6px 24px rgba(27,152,224,0.35)" }}
          >
            Jetzt Termin wählen →
          </a>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginTop: 14 }}>
            Mit Robert Engel, Geschäftsführer TalentSuite
          </p>
        </div>
      </div>

      {/* ═══ WAS SIE ERHALTEN ═══ */}
      <div style={{ marginTop: mob ? 40 : 60, marginBottom: mob ? 40 : 60 }}>
        <div style={containerStyle}>
          <h2 style={{ color: BRAND, fontSize: mob ? 22 : 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>
            Was Sie im Gespräch erhalten
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📊", title: "Individuelle Standort-Analyse", desc: "Wir analysieren, wie viele Pflegekräfte in Ihrem Umkreis über Social Media erreichbar sind." },
              { icon: "💰", title: "Berechnung Ihres Recruiting-Budgets", desc: "Sie erfahren, was ein realistisches Budget für Ihre Situation ist – transparent und ehrlich." },
              { icon: "📈", title: "Konkrete Prognose", desc: "So viele Bewerbungen können Sie in 30 Tagen erwarten. Basierend auf Daten, nicht auf Vermutungen." },
              { icon: "🎯", title: "Strategie-Empfehlung", desc: "Maßgeschneidert für Ihre Einrichtung, Ihre Region und Ihre offenen Stellen." },
            ].map((b, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "20px 18px" : "24px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <h3 style={{ color: BRAND, fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{b.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SOCIAL PROOF KOMPAKT ═══ */}
      <div style={{ marginBottom: mob ? 40 : 60 }}>
        <div style={containerStyle}>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
            {[
              { value: "50+", label: "Kunden" },
              { value: "47+", label: "Bewerbungen/Monat" },
              { value: "15€", label: "Ø pro Bewerbung" },
              { value: "30 Tage", label: "Ø bis Einstellung" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "16px 8px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: mob ? 20 : 24, fontWeight: 800, color: ACCENT }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "20px 18px" : "24px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", borderLeft: `3px solid ${ACCENT}` }}>
            <p style={{ color: BRAND, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px" }}>
              „47 Bewerbungen in 4 Wochen – komplett ohne StepStone oder Indeed. Wir haben inzwischen alle Stellen besetzt."
            </p>
            <p style={{ color: "#64748B", fontSize: 13, margin: 0 }}>– Pflegedienstleitung, Pflegeheim NRW</p>
          </div>
        </div>
      </div>

      {/* ═══ CALENDAR CTA (Hauptelement) ═══ */}
      <div style={{ marginBottom: mob ? 40 : 60 }}>
        <div style={containerStyle}>
          <div style={{ background: `linear-gradient(135deg, ${DARK}, ${BRAND})`, borderRadius: 20, padding: mob ? "32px 20px" : "48px 36px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 22 : 30, fontWeight: 700, margin: "0 0 10px" }}>
              Jetzt Ihren Termin sichern
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, margin: "0 0 28px", maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
              15 Minuten – Kostenlose Recruiting-Analyse – Keine Verpflichtung
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendarClick}
              style={{ display: "inline-block", padding: "18px 44px", borderRadius: 14, fontWeight: 700, fontSize: 18, textDecoration: "none", color: "#ffffff", background: ACCENT, boxShadow: "0 6px 28px rgba(27,152,224,0.4)" }}
            >
              Termin wählen →
            </a>
            <div style={{ display: "flex", justifyContent: "center", gap: mob ? 16 : 28, marginTop: 24, flexWrap: "wrap" }}>
              {[
                { icon: "🔒", text: "DSGVO-konform" },
                { icon: "💯", text: "100% kostenlos" },
                { icon: "🚫", text: "Kein Verkaufsdruck" },
              ].map((t, i) => (
                <span key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{t.icon} {t.text}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ RÜCKRUF FORMULAR ═══ */}
      <div style={{ paddingBottom: 80 }}>
        <div style={containerStyle}>
          <div style={{ background: "#ffffff", borderRadius: 20, padding: mob ? "28px 20px" : "36px 32px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", textAlign: "center" }}>
            <h3 style={{ color: BRAND, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 8px" }}>
              Lieber Rückruf?
            </h3>
            <p style={{ color: "#64748B", fontSize: 15, marginBottom: 24 }}>
              Hinterlassen Sie Ihre Nummer – wir rufen Sie innerhalb von 24 Stunden zurück.
            </p>

            {callbackSubmitted ? (
              <div>
                <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
                <p style={{ color: GREEN, fontWeight: 600, fontSize: 16 }}>Vielen Dank! Wir rufen Sie zurück.</p>
              </div>
            ) : (
              <form onSubmit={handleCallback} style={{ maxWidth: 400, margin: "0 auto" }}>
                <input type="text" required value={callbackForm.name} onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })} placeholder="Ihr Name *" style={{ ...inputStyle, marginBottom: 12 }} />
                <input type="tel" required value={callbackForm.telefon} onChange={(e) => setCallbackForm({ ...callbackForm, telefon: e.target.value })} placeholder="Ihre Telefonnummer *" style={{ ...inputStyle, marginBottom: 12 }} />
                <input type="text" value={callbackForm.einrichtung} onChange={(e) => setCallbackForm({ ...callbackForm, einrichtung: e.target.value })} placeholder="Name der Einrichtung (optional)" style={{ ...inputStyle, marginBottom: 16 }} />
                <button type="submit" disabled={submitting} style={{ width: "100%", padding: "14px 24px", borderRadius: 12, border: "none", background: GREEN, color: "#ffffff", fontSize: 16, fontWeight: 700, cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? "Wird gesendet..." : "Rückruf anfordern"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "1.5px solid #e2e8f0",
  fontSize: 15,
  color: "#023B5B",
  outline: "none",
  background: "#f8fafc",
  boxSizing: "border-box",
};
