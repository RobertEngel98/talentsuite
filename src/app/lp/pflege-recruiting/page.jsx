"use client";

import { useState, useEffect } from "react";
import { trackMetaLead, trackMetaViewContent, trackMetaSchedule } from "../../components/MetaPixel";

const ACCENT = "#1B98E0";
const DARK = "#0a1628";
const DARK2 = "#1a2744";
const BRAND = "#023B5B";
const GREEN = "#10B981";
const CALENDAR_URL = "https://calendar.app.google/CSGu2PT8671jC4q68";

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
        <h3 style={{ margin: 0, color: BRAND, fontSize: 17, fontWeight: 700 }}>{question}</h3>
        <span data-pf="accent" style={{ fontSize: 22, fontWeight: 600, color: ACCENT, flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </div>
      {open && <p data-pf="body" style={{ marginTop: 14, marginBottom: 0, color: "#475569", fontSize: 15, lineHeight: 1.7 }}>{answer}</p>}
    </div>
  );
}

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function PflegeRecruiting() {
  const mob = useIsMobile();
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", telefon: "", einrichtung: "", rolle: "", anzahl: "", dsgvo: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // UTM tracking + ViewContent on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const utmData = {};
      utmKeys.forEach((k) => { const v = params.get(k); if (v) utmData[k] = v; });
      if (Object.keys(utmData).length > 0) sessionStorage.setItem("utm_data", JSON.stringify(utmData));
    }
    trackMetaViewContent({ contentName: "pflege-tofu", category: "pflege", contentType: "landing_page" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.vorname || !form.nachname || !form.telefon || !form.einrichtung || !form.dsgvo) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    setSubmitting(true);
    setError("");

    const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");

    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pflege-recruiting",
          name: `${form.vorname} ${form.nachname}`,
          email: form.email,
          phone: form.telefon,
          company: form.einrichtung,
          industry: "Pflege",
          extra: {
            rolle: form.rolle,
            anzahlPflegekraefte: form.anzahl,
            funnel_stage: "tofu",
            ...utmData,
          },
        }),
      });

      trackMetaLead({ formName: "pflege-tofu", category: "pflege", value: 30 });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", { currency: "EUR", value: 30, industry: "pflege", funnel_stage: "tofu" });
      }

      setSubmitted(true);
    } catch {
      setError("Es gab einen Fehler. Bitte versuchen Sie es erneut.");
    }
    setSubmitting(false);
  };

  const handleCalendarClick = () => {
    trackMetaSchedule({ formName: "pflege-tofu-calendar", category: "pflege", value: 50 });
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "begin_checkout", { currency: "EUR", value: 50, items: [{ item_name: "pflege-termin" }] });
    }
  };

  const sectionStyle = { marginBottom: mob ? 60 : 80 };
  const containerStyle = { maxWidth: 1100, margin: "0 auto", padding: mob ? "0 16px" : "0 24px" };
  const containerNarrow = { maxWidth: 720, margin: "0 auto", padding: mob ? "0 16px" : "0 24px" };

  return (
    <div id="pf" style={{ background: "#f0f4f7", paddingTop: 80 }}>
      {/* ═══ HERO ═══ */}
      <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 100%)`, padding: mob ? "48px 16px 56px" : "80px 24px 90px" }}>
        <div style={{ ...containerStyle, display: mob ? "block" : "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1 }}>
            <p data-pf="white50" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Performance Recruiting für die Pflege
            </p>
            <h1 data-pf="white" style={{ color: "#ffffff", fontSize: mob ? 28 : 42, fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px" }}>
              Pflegefachkräfte finden –{" "}
              <span data-pf="accent" style={{ color: ACCENT }}>ohne Jobportale, ohne Zeitarbeit</span>
            </h1>
            <p data-pf="white75" style={{ color: "rgba(255,255,255,0.75)", fontSize: mob ? 16 : 18, lineHeight: 1.6, marginBottom: 32, maxWidth: 520 }}>
              Wir bringen qualifizierte Bewerbungen von Pflegekräften direkt auf Ihren Tisch. Über Social Media. In weniger als 30 Tagen.
            </p>
            <a
              href="#formular"
              data-pf="pribtn"
              style={{ display: "inline-block", padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", color: "#ffffff", background: ACCENT, boxShadow: "0 4px 20px rgba(27,152,224,0.3)" }}
            >
              Kostenlose Recruiting-Analyse →
            </a>
            <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span data-pf="white50" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Vertraut von 50+ Pflegeeinrichtungen in Deutschland</span>
            </div>
          </div>
          {!mob && (
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 400, height: 300, borderRadius: 20, background: "linear-gradient(135deg, #1a2744, #023B5B)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 60, marginBottom: 12 }}>🏥</div>
                  <p data-pf="white70" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, margin: 0 }}>Pflegekräfte finden</p>
                  <p data-pf="accent" style={{ color: ACCENT, fontSize: 24, fontWeight: 800, margin: "8px 0 0" }}>in 30 Tagen</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══ PROBLEM AGITATION ═══ */}
      <div style={{ ...sectionStyle, marginTop: mob ? 40 : 60 }}>
        <div style={containerStyle}>
          <h2 style={{ color: BRAND, fontSize: mob ? 24 : 32, fontWeight: 700, textAlign: "center", marginBottom: 40 }}>
            Kommt Ihnen das bekannt vor?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(2, 1fr)", gap: 20 }}>
            {[
              { icon: "🏥", title: "Stationen sind unterbesetzt – Aufnahmestopp droht", desc: "Ihre Mitarbeiter arbeiten am Limit. Überstunden sind die Regel, nicht die Ausnahme." },
              { icon: "📄", title: "Stellenanzeigen bringen keine Bewerbungen", desc: "Sie investieren in StepStone, Indeed & Co. – aber die Bewerbungen bleiben aus. Die wenigen die kommen, sind unqualifiziert." },
              { icon: "💸", title: "Zeitarbeit frisst Ihre Marge", desc: "30-50% Aufschlag pro Zeitarbeitskraft. Das ist keine Lösung, das ist ein Kostenproblem." },
              { icon: "⏰", title: "Die Besetzung dauert Monate", desc: "Im Durchschnitt dauert es 6+ Monate eine Pflegefachkraft zu finden. Jeder Tag kostet Sie Geld und belastet Ihr Team." },
            ].map((p, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 20px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ color: BRAND, fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>{p.title}</h3>
                <p data-pf="gray" style={{ color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <p style={{ color: BRAND, fontSize: mob ? 16 : 18, fontWeight: 600, fontStyle: "italic", maxWidth: 600, margin: "0 auto" }}>
              „Das Problem ist nicht, dass es keine Pflegekräfte gibt. Das Problem ist, dass 80% nicht aktiv auf Jobportalen suchen."
            </p>
          </div>
        </div>
      </div>

      {/* ═══ LÖSUNG – 3 SCHRITTE ═══ */}
      <div id="loesung" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ color: BRAND, fontSize: mob ? 24 : 32, fontWeight: 700, textAlign: "center", marginBottom: 40 }}>
            So finden wir Ihre Pflegekräfte
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { step: "1", icon: "🔍", title: "Analyse", desc: "Wir analysieren Ihre Einrichtung, Ihre offenen Stellen und Ihren Standort. Daraus entwickeln wir eine maßgeschneiderte Recruiting-Strategie für Ihre Pflegekräfte." },
              { step: "2", icon: "📱", title: "Kampagne", desc: "Wir schalten hochperformante Kampagnen auf Facebook, Instagram & Google – und erreichen damit Pflegekräfte die aktuell NICHT auf Jobportalen unterwegs sind." },
              { step: "3", icon: "✉️", title: "Bewerbungen", desc: "Qualifizierte Bewerbungen landen direkt bei Ihnen. Sie führen Gespräche mit motivierten Pflegekräften aus Ihrer Region." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "28px 20px" : "32px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${ACCENT}15`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
                  {s.icon}
                </div>
                <div data-pf="accent" style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
                  Schritt {s.step}
                </div>
                <h3 style={{ color: BRAND, fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{s.title}</h3>
                <p data-pf="gray" style={{ color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: `linear-gradient(135deg, ${DARK}, ${BRAND})`, borderRadius: 16, padding: mob ? "24px 20px" : "28px 32px", textAlign: "center" }}>
            <p data-pf="white" style={{ color: "#ffffff", fontSize: mob ? 16 : 18, fontWeight: 600, margin: 0 }}>
              Durchschnittlich <span data-pf="accent" style={{ color: ACCENT, fontWeight: 800 }}>15-25€ pro Bewerbung</span> – ein Bruchteil der Kosten von Jobportalen oder Zeitarbeit.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ SOCIAL PROOF ═══ */}
      <div id="social-proof" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ color: BRAND, fontSize: mob ? 24 : 32, fontWeight: 700, textAlign: "center", marginBottom: 40 }}>
            Ergebnisse die überzeugen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
            {[
              { value: "47+", label: "Bewerbungen/Monat", color: ACCENT },
              { value: "23 Tage", label: "Ø bis erste Bewerbung", color: ACCENT },
              { value: "73%", label: "Einstellungsquote", color: GREEN },
              { value: "15€", label: "Ø Kosten/Bewerbung", color: ACCENT },
            ].map((s, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: "24px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div data-pf={s.color === GREEN ? "green" : "accent"} style={{ fontSize: mob ? 24 : 30, fontWeight: 800, color: s.color, marginBottom: 6 }}>{s.value}</div>
                <div data-pf="gray" style={{ fontSize: 13, color: "#64748B" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 20px" : "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", borderLeft: `4px solid ${ACCENT}`, marginBottom: 24 }}>
            <p style={{ color: BRAND, fontSize: mob ? 16 : 18, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 16px" }}>
              „Wir haben 6 Monate lang auf Indeed inseriert – ohne Ergebnis. Mit TalentSuite hatten wir nach 3 Wochen die ersten Vorstellungsgespräche. Inzwischen haben wir 4 neue Pflegefachkräfte eingestellt."
            </p>
            <p data-pf="gray" style={{ color: "#64748B", fontSize: 14, margin: 0 }}>– Pflegedienstleitung, Seniorenheim in NRW</p>
            <div style={{ marginTop: 8 }}>{"⭐⭐⭐⭐⭐"}</div>
          </div>

          {/* Case Study Teaser */}
          <div style={{ textAlign: "center" }}>
            <a data-pf="accent" href="/lp/pflege-case-study" style={{ color: ACCENT, fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
              Case Study: Wie ein Pflegeheim in 4 Wochen 12 Pflegekräfte eingestellt hat →
            </a>
          </div>
        </div>
      </div>

      {/* ═══ FORMULAR & TERMINBUCHUNG ═══ */}
      <div id="formular" style={{ ...sectionStyle, scrollMarginTop: 80 }}>
        <div style={containerNarrow}>
          <h2 style={{ color: BRAND, fontSize: mob ? 22 : 28, fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
            Kostenlose Recruiting-Analyse für Ihre Pflegeeinrichtung
          </h2>
          <p data-pf="gray" style={{ color: "#64748B", fontSize: 16, textAlign: "center", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            In 15 Minuten zeigen wir Ihnen, wie Sie qualifizierte Pflegekräfte über Social Media finden. Unverbindlich und kostenlos.
          </p>

          {submitted ? (
            <div style={{ background: "#ffffff", borderRadius: 20, padding: mob ? "32px 20px" : "44px 36px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ color: BRAND, fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Vielen Dank!</h3>
              <p data-pf="gray" style={{ color: "#64748B", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
                Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <p style={{ color: BRAND, fontWeight: 600, marginBottom: 16 }}>
                Oder buchen Sie direkt Ihren Wunschtermin:
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCalendarClick}
                data-pf="pribtn"
                style={{ display: "inline-block", padding: "14px 32px", borderRadius: 12, background: GREEN, color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}
              >
                Termin direkt buchen →
              </a>
            </div>
          ) : (
            <div style={{ background: "#ffffff", borderRadius: 20, padding: mob ? "28px 20px" : "44px 36px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Vorname *</label>
                    <input type="text" required value={form.vorname} onChange={(e) => setForm({ ...form, vorname: e.target.value })} style={inputStyle} placeholder="Max" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Nachname *</label>
                    <input type="text" required value={form.nachname} onChange={(e) => setForm({ ...form, nachname: e.target.value })} style={inputStyle} placeholder="Mustermann" />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>E-Mail Adresse *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="max@einrichtung.de" />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Telefonnummer *</label>
                  <input type="tel" required value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} style={inputStyle} placeholder="+49 123 456789" />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Name der Einrichtung *</label>
                  <input type="text" required value={form.einrichtung} onChange={(e) => setForm({ ...form, einrichtung: e.target.value })} style={inputStyle} placeholder="Seniorenheim Musterstadt" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Ihre Rolle</label>
                    <select value={form.rolle} onChange={(e) => setForm({ ...form, rolle: e.target.value })} style={inputStyle}>
                      <option value="">Bitte wählen</option>
                      <option value="Geschäftsführer/in">Geschäftsführer/in</option>
                      <option value="Pflegedienstleitung">Pflegedienstleitung</option>
                      <option value="HR / Personalabteilung">HR / Personalabteilung</option>
                      <option value="Andere">Andere</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: BRAND, marginBottom: 6 }}>Wie viele Pflegekräfte?</label>
                    <select value={form.anzahl} onChange={(e) => setForm({ ...form, anzahl: e.target.value })} style={inputStyle}>
                      <option value="">Bitte wählen</option>
                      <option value="1-2">1-2 Pflegekräfte</option>
                      <option value="3-5">3-5 Pflegekräfte</option>
                      <option value="6-10">6-10 Pflegekräfte</option>
                      <option value="10+">Mehr als 10</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                    <input type="checkbox" checked={form.dsgvo} onChange={(e) => setForm({ ...form, dsgvo: e.target.checked })} style={{ marginTop: 4, width: 18, height: 18, accentColor: ACCENT }} />
                    <span data-pf="gray" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a data-pf="accent" href="/datenschutz" target="_blank" style={{ color: ACCENT }}>Datenschutzerklärung</a> zu. *
                    </span>
                  </label>
                </div>
                {error && <p style={{ color: "#EF4444", fontSize: 14, marginBottom: 16 }}>{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  data-pf="pribtn"
                  style={{ width: "100%", padding: "16px 24px", borderRadius: 12, border: "none", background: ACCENT, color: "#ffffff", fontSize: 16, fontWeight: 700, cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? "Wird gesendet..." : "Kostenlose Analyse anfordern"}
                </button>
              </form>

              <div style={{ textAlign: "center", marginTop: 24 }}>
                <p data-pf="gray" style={{ color: "#64748B", fontSize: 14, marginBottom: 12 }}>Oder buchen Sie direkt Ihren Wunschtermin:</p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCalendarClick}
                  data-pf="pribtn"
                  style={{ display: "inline-block", padding: "14px 32px", borderRadius: 12, background: GREEN, color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}
                >
                  Termin direkt buchen →
                </a>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: mob ? 16 : 24, marginTop: 24, flexWrap: "wrap" }}>
                {[
                  { icon: "🔒", text: "DSGVO-konform" },
                  { icon: "⏱", text: "Antwort in 24h" },
                  { icon: "🚫", text: "Kein Spam" },
                ].map((t, i) => (
                  <span key={i} data-pf="gray" style={{ fontSize: 13, color: "#64748B" }}>{t.icon} {t.text}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══ FAQ ═══ */}
      <div style={{ ...sectionStyle }}>
        <div style={containerNarrow}>
          <h2 style={{ color: BRAND, fontSize: mob ? 22 : 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>
            Häufige Fragen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <FAQ
              question="Wie funktioniert Social Media Recruiting für die Pflege?"
              answer="80% der Pflegekräfte sind nicht aktiv auf Jobportalen unterwegs – aber sie sind täglich auf Facebook und Instagram. Wir schalten gezielte Anzeigen, die genau diese passiven Kandidaten ansprechen und zu einer einfachen Bewerbung führen."
            />
            <FAQ
              question="Was kostet das?"
              answer="Die Kosten liegen durchschnittlich bei 15-25€ pro qualifizierter Bewerbung. Das ist ein Bruchteil der Kosten von Zeitarbeitsfirmen oder klassischen Stellenanzeigen. In der kostenlosen Analyse berechnen wir Ihnen Ihr individuelles Budget."
            />
            <FAQ
              question="Wie schnell bekomme ich die ersten Bewerbungen?"
              answer="Die meisten unserer Kunden erhalten die ersten qualifizierten Bewerbungen innerhalb von 7-14 Tagen nach Kampagnenstart."
            />
            <FAQ
              question="Funktioniert das auch in meiner Region?"
              answer="Ja. Wir werben gezielt im Umkreis Ihrer Einrichtung und erreichen Pflegekräfte die in Ihrer Nähe wohnen oder bereit sind, für die richtige Stelle umzuziehen."
            />
            <FAQ
              question="Muss ich lange Verträge abschließen?"
              answer="Nein. Wir arbeiten Performance-basiert. Sie sehen die Ergebnisse und entscheiden selbst, ob Sie weitermachen möchten."
            />
          </div>
        </div>
      </div>

      {/* ═══ FINAL CTA ═══ */}
      <div style={{ paddingBottom: 80 }}>
        <div style={containerNarrow}>
          <div style={{ background: `linear-gradient(135deg, ${DARK}, ${BRAND})`, borderRadius: 20, padding: mob ? "32px 20px" : "48px 36px", textAlign: "center" }}>
            <h2 data-pf="white" style={{ color: "#ffffff", fontSize: mob ? 22 : 28, fontWeight: 700, margin: "0 0 12px" }}>
              Bereit, Pflegekräfte zu finden?
            </h2>
            <p data-pf="white65" style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, margin: "0 0 28px" }}>
              15 Minuten, die den Unterschied machen können. Kostenlos und unverbindlich.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendarClick}
              data-pf="pribtn"
              style={{ display: "inline-block", padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", color: "#ffffff", background: ACCENT, boxShadow: "0 4px 20px rgba(27,152,224,0.3)" }}
            >
              Jetzt Termin buchen →
            </a>
            <p data-pf="white45" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 16 }}>
              Robert Engel · Geschäftsführer TalentSuite · Keine Verpflichtung
            </p>
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
