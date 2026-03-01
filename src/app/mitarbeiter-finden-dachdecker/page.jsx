"use client";
import React, { useState, useEffect } from "react";
import { trackLead } from "../components/Analytics";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function Page() {
  const mob = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRe = /^(\+?[0-9]{7,15})$/;
  const cleanPhone = (p) => p.replace(/[\s\-\/\(\)]/g, "");
  const emailValid = emailRe.test(form.email);
  const phoneValid = form.phone === "" || phoneRe.test(cleanPhone(form.phone));
  const canSubmit = form.name && emailValid && phoneValid && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "mitarbeiter-finden-dachdecker", name: form.name, email: form.email,
          phone: form.phone || undefined, company: form.company || undefined,
          industry: "Dachdeckerhandwerk",
          extra: { branche: "Dachdeckerhandwerk", pageType: "branchen-landing" },
        }),
      });
    } catch (e) { console.error(e); }
    trackLead({ formName: "mitarbeiter-finden-dachdecker", category: "branchen-landing", industry: "Dachdecker & Dachbau", value: 50 });
  };

  return (
    <div id="bp-root" className="branchen-page">
      <style>{`
        /* === BRANCHEN PAGE COMPLETE RESET === */
        #bp-root, #bp-root * { box-sizing: border-box !important; }
        #bp-root { background: #f0f4f7 !important; }

        /* === DEFAULT TEXT (light bg sections) === */
        #bp-root h1 { color: #023B5B !important; font-size: 26px !important; font-weight: 800 !important; line-height: 1.2 !important; }
        #bp-root h2 { color: #023B5B !important; font-size: 22px !important; font-weight: 700 !important; line-height: 1.3 !important; }
        #bp-root h3 { color: #023B5B !important; font-size: 18px !important; font-weight: 700 !important; }
        #bp-root h4 { color: #023B5B !important; font-size: 15px !important; font-weight: 700 !important; }
        #bp-root p { color: #4A5568 !important; font-size: 15px !important; line-height: 1.7 !important; }
        #bp-root span { font-size: inherit !important; }
        #bp-root strong { color: inherit !important; }
        #bp-root a { text-decoration: none !important; }
        #bp-root input { font-family: inherit !important; }
        #bp-root button { font-family: inherit !important; }

        @media (min-width: 768px) {
          #bp-root h1 { font-size: 42px !important; }
          #bp-root h2 { font-size: 26px !important; }
        }

        /* === HERO (dark bg) === */
        #bp-root .bp-hero { background: linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%) !important; }
        #bp-root .bp-hero h1 { color: #ffffff !important; }
        #bp-root .bp-hero p { color: rgba(255,255,255,0.8) !important; }
        #bp-root .bp-hero span { color: #ffffff !important; }
        #bp-root .bp-hero .bp-hero-hint { color: rgba(255,255,255,0.5) !important; font-size: 13px !important; }
        #bp-root .bp-hero a { color: #023B5B !important; background: #ffffff !important; font-size: 17px !important; font-weight: 800 !important; }

        /* === STATS === */
        #bp-root .bp-stat-n { font-weight: 800 !important; font-size: 28px !important; }
        @media (max-width: 767px) { #bp-root .bp-stat-n { font-size: 22px !important; } }
        #bp-root .bp-stat-l { color: #64748B !important; font-size: 12px !important; }

        /* === PAIN SECTION === */
        #bp-root .bp-pain-intro { color: #4A5568 !important; }
        #bp-root .bp-pain-box p { color: #334155 !important; }

        /* === FAIL SECTION (red bg) === */
        #bp-root .bp-fail h2 { color: #023B5B !important; }
        #bp-root .bp-fail p { color: #4A5568 !important; }

        /* === SOLUTION CARDS === */
        #bp-root .bp-card h4 { color: #023B5B !important; font-size: 15px !important; }
        #bp-root .bp-card p { color: #64748B !important; font-size: 13px !important; }

        /* === CASE STUDY (green bg) === */
        #bp-root .bp-case h3 { color: #023B5B !important; font-size: 18px !important; }
        #bp-root .bp-case p { color: #334155 !important; }

        /* === POSITION TAGS === */
        #bp-root .bp-tag { color: #023B5B !important; font-size: 14px !important; font-weight: 500 !important; }

        /* === SEO TEXT === */
        #bp-root .bp-seo h2 { color: #023B5B !important; }
        #bp-root .bp-seo p { color: #4A5568 !important; }

        /* === CTA (dark bg) === */
        #bp-root .bp-cta { background: linear-gradient(135deg, #011E2F, #023B5B) !important; }
        #bp-root .bp-cta h2 { color: #ffffff !important; font-size: 22px !important; }
        #bp-root .bp-cta p { color: rgba(255,255,255,0.7) !important; }
        #bp-root .bp-cta .bp-cta-hint { color: rgba(255,255,255,0.5) !important; font-size: 13px !important; }
        #bp-root .bp-cta .bp-cta-fine { color: rgba(255,255,255,0.35) !important; font-size: 12px !important; }
        #bp-root .bp-cta a { color: #023B5B !important; background: #ffffff !important; font-size: 17px !important; font-weight: 800 !important; }
        #bp-root .bp-cta button { color: #ffffff !important; font-size: 15px !important; border: 1px solid rgba(255,255,255,0.3) !important; }
        #bp-root .bp-cta label { color: rgba(255,255,255,0.5) !important; font-size: 12px !important; }
        #bp-root .bp-cta label a { color: #1B98E0 !important; background: none !important; font-size: 12px !important; font-weight: 400 !important; }
        #bp-root .bp-cta input { color: #ffffff !important; font-size: 15px !important; background: rgba(255,255,255,0.08) !important; border: 1px solid rgba(255,255,255,0.15) !important; }
        #bp-root .bp-cta input::placeholder { color: rgba(255,255,255,0.4) !important; }
        #bp-root .bp-cta .bp-form-label { color: rgba(255,255,255,0.7) !important; font-size: 13px !important; }
        #bp-root .bp-cta .bp-submit { font-size: 16px !important; font-weight: 700 !important; }
        #bp-root .bp-cta h3 { color: #ffffff !important; font-size: 22px !important; }
        #bp-root .bp-cta .bp-success-msg { color: rgba(255,255,255,0.7) !important; font-size: 16px !important; }

        @media (min-width: 768px) {
          #bp-root .bp-cta h2 { font-size: 30px !important; }
        }

        /* === RESPONSIVE GRIDS === */
        @media (max-width: 767px) {
          .bp-g1 { grid-template-columns: 1fr !important; }
          .bp-g2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        #bp-root input { -webkit-appearance: none !important; }
      `}</style>

      {/* HERO */}
      <div className="bp-hero" data-track-section="hero" data-track-section-name="Hero" style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "80px 24px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>🏠</span>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 42, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Dachdecker finden — Dachdecker & Spengler in 30 Tagen einstellen
          </h1>
          <p className="bp-hero-sub" style={{ color: "rgba(255,255,255,0.8)", fontSize: mob ? 15 : 19, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.6 }}>
            12.000+ offene Stellen · Ø 160 Tage Vakanzzeit · 72% der Fachkräfte nicht auf Jobbörsen
          </p>
          <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Kostenlose Recruiting-Analyse →
          </a>
          <p className="bp-hero-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 10 }}>20 Min. · Unverbindlich · Konkrete Strategie für Dachdeckerhandwerk</p>
        </div>
      </div>

      <div style={{ background: "#f0f4f7", padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats */}
          <div className="bp-g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { n: "12.000+", label: "Offene Stellen", c: "#1B98E0" },
              { n: "160 Tage", label: "Ø Vakanzzeit", c: "#EF4444" },
              { n: "17-25 €", label: "Kosten/Bewerbung", c: "#10B981" },
              { n: "Ø 32 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
            ].map((s, idx) => (
              <div key={idx} style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "16px 12px" : "20px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="bp-stat-n" style={{ color: s.c }}>{s.n}</div>
                <div className="bp-stat-l" style={{ marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Pain Section */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 14px" }}>
              🏠 Die Situation im Dachdeckerhandwerk
            </h2>
            <p className="bp-pain-intro" style={{ margin: "0 0 16px" }}>
              Das Dachdeckerhandwerk gehört zu den am stärksten vom Fachkräftemangel betroffenen Gewerken.
            </p>
            <div className="bp-pain-box" style={{ padding: "14px 16px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🔴</strong> Klimawandel-Folgen: Stürme, Starkregen und neue Dämmpflichten sorgen für volle Auftragsbücher — aber die Kapazitäten fehlen.</p>
            </div>
            <div className="bp-pain-box" style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟡</strong> Risiko-Image: Höhenarbeit schreckt viele junge Menschen ab. Moderne Sicherheitsstandards werden zu wenig kommuniziert.</p>
            </div>
            <div className="bp-pain-box" style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟠</strong> Kleine Betriebsgrößen: Die meisten Dachdeckerbetriebe haben unter 10 Mitarbeiter und keine HR-Abteilung.</p>
            </div>
          </div>

          {/* Why Jobboards Fail */}
          <div className="bp-fail" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              ❌ Warum Jobbörsen im Bereich Dachdeckerhandwerk nicht mehr funktionieren
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Dachdecker suchen nicht auf LinkedIn oder Indeed — sie sind auf Facebook und Instagram unterwegs.
            </p>
          </div>

          {/* Social Recruiting Solution */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              ✅ Social Recruiting für Dachdeckerhandwerk: So funktioniert es
            </h2>
            <p className="bp-pain-intro" style={{ margin: "0 0 16px" }}>
              Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.
            </p>
            <div className="bp-g1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", t: "Gezielte Ansprache", d: "Wir erreichen Dachdecker im Umkreis von 30km — nach Beruf, Alter und Interessen." },
                { icon: "📱", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
                { icon: "📊", t: "Messbare Ergebnisse", d: "17-25 € pro Bewerbung bei 10-14% Conversion. Transparent und nachvollziehbar." },
              ].map((s, idx) => (
                <div key={idx} className="bp-card" style={{ background: "#f0f4f7", borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                  <h4 style={{ color: "#023B5B", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{s.t}</h4>
                  <p style={{ color: "#64748B", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="bp-case" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h3 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>📈 Praxisbeispiel</h3>
            <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Ein Dachdeckerbetrieb im Rheinland suchte 9 Monate einen Gesellen. Social Recruiting: 12 Bewerbungen in 3 Wochen, 1 Einstellung unter 2.000 € Gesamtkosten.
            </p>
          </div>

          {/* Positions */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              Diese Positionen besetzen wir im Bereich Dachdeckerhandwerk
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Dachdecker (m/w/d)","Spengler/Klempner","Dachdeckermeister","Zimmerer (Dachstuhl)","Dachdeckerhelfer"].map((p, idx) => (
                <span key={idx} className="bp-tag" style={{ padding: "8px 16px", background: "rgba(27,152,224,0.1)", border: "1px solid rgba(27,152,224,0.2)", borderRadius: 8, fontSize: 14, color: "#023B5B", fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div className="bp-seo" style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>So gewinnen erfolgreiche Dachdeckerbetriebe heute Fachkräfte</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Der Fachkräftemangel im Dachdeckerhandwerk ist strukturell und wird durch den Klimawandel verschärft.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>Die Ergebnisse: 17-25 € pro qualifizierte Bewerbung, 10-14% Conversion-Rate, Ø 32 Tage bis Einstellung.</p>
          </div>

          {/* CTA */}
          <div className="bp-cta" data-track-section="cta-form" data-track-section-name="Kontaktformular" style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "32px 18px" : "44px 32px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 22 : 30, fontWeight: 800, margin: "0 0 10px" }}>Dachdecker oder Spengler gesucht?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 17, margin: "0 0 24px", lineHeight: 1.6 }}>
              In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkräfte in Ihrer Region über Social Media erreichbar sind — und was eine Kampagne kosten würde.
            </p>
            {!showForm && !sent ? (
              <>
                <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", marginBottom: 12 }}>
                  Jetzt Termin wählen →
                </a>
                <p className="bp-cta-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 16px" }}>Oder lassen Sie sich zurückrufen:</p>
                <button onClick={() => setShowForm(true)} style={{ padding: "14px 32px", background: "none", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, color: "#ffffff", fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  Rückruf anfordern
                </button>
              </>
            ) : sent ? (
              <div>
                <span style={{ fontSize: 56 }}>✅</span>
                <h3 style={{ color: "#ffffff", fontSize: 22, fontWeight: 700, marginTop: 12 }}>Anfrage erhalten!</h3>
                <p className="bp-success-msg" style={{ marginTop: 8 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen, {form.name.split(" ")[0]}.</p>
              </div>
            ) : (
              <div data-track-form="mitarbeiter-finden-dachdecker" style={{ maxWidth: 440, margin: "0 auto", textAlign: "left" }}>
                {[
                  { label: "Name *", k: "name", ph: "Max Mustermann", type: "text" },
                  { label: "E-Mail *", k: "email", ph: "max@firma.de", type: "email" },
                  { label: "Telefon", k: "phone", ph: "+49 170 1234567", type: "tel" },
                  { label: "Firma", k: "company", ph: "Firmenname", type: "text" },
                ].map((f, idx) => (
                  <div key={idx} style={{ marginBottom: 14 }}>
                    <label className="bp-form-label" style={{ display: "block", marginBottom: 4 }}>{f.label}</label>
                    <input type={f.type} value={form[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })} placeholder={f.ph}
                      style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 16, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                    {f.k === "email" && form.email && !emailValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
                    {f.k === "phone" && form.phone && !phoneValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige Telefonnummer</span>}
                  </div>
                ))}
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "12px 0 16px", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: "#1B98E0" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>
                    Ich stimme der <a href="/datenschutz" target="_blank" style={{ color: "#1B98E0" }}>Datenschutzerklärung</a> zu und bin damit einverstanden, kontaktiert zu werden.
                  </span>
                </label>
                <button onClick={submit} disabled={!canSubmit} className="bp-submit" style={{
                  width: "100%", padding: "16px", background: canSubmit ? "#ffffff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 10,
                  color: canSubmit ? "#023B5B" : "rgba(255,255,255,0.5)", fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                }}>
                  Rückruf anfordern →
                </button>
              </div>
            )}
            <p className="bp-cta-fine" style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 16 }}>Robert Engel · Geschäftsführer TalentSuite · 100% kostenlos &amp; unverbindlich</p>
          </div>
        </div>
      </div>
    </div>
  );
}
