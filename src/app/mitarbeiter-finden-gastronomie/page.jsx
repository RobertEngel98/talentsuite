"use client";
import React, { useState, useEffect } from "react";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444";
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^(\+?[0-9]{7,15})$/;

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
          source: "mitarbeiter-finden-gastronomie", name: form.name, email: form.email,
          phone: form.phone || undefined, company: form.company || undefined,
          industry: "Gastronomie & Hotellerie",
          extra: { branche: "Gastronomie & Hotellerie", pageType: "branchen-landing" },
        }),
      });
    } catch (e) { console.error(e); }
  };

  const Stat = ({ n, label, color }) => (
    <div style={{ background: W, borderRadius: 14, padding: mob ? "16px 12px" : "20px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ fontSize: mob ? 22 : 28, fontWeight: 800, color: color || A }}>{n}</div>
      <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>{label}</div>
    </div>
  );

  const FormField = ({ label, k, ph, type }) => (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", color: `${W}70`, fontSize: 13, marginBottom: 4 }}>{label}</label>
      <input type={type || "text"} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={ph}
        style={{ width: "100%", padding: "12px 14px", background: `${W}08`, border: `1px solid ${W}15`, borderRadius: 8, color: W, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
      {k === "email" && form.email && !emailValid && <span style={{ color: R, fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
      {k === "phone" && form.phone && !phoneValid && <span style={{ color: R, fontSize: 12 }}>Bitte gültige Telefonnummer</span>}
    </div>
  );

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`, padding: mob ? "48px 16px 56px" : "80px 24px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${A}12, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>🍽️</span>
          <h1 style={{ color: W, fontSize: mob ? 26 : 42, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Personal Gastronomie finden — Köche, Service & Hotelfachkräfte
          </h1>
          <p style={{ color: `${W}80`, fontSize: mob ? 15 : 19, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.6 }}>
            38.000+ offene Stellen · Ø 130 Tage Vakanzzeit · 72% der Fachkräfte nicht auf Jobbörsen
          </p>
          <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 44px", background: W, borderRadius: 12, color: B, fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Kostenlose Recruiting-Analyse →
          </a>
          <p style={{ color: `${W}50`, fontSize: 13, marginTop: 10 }}>20 Min. · Unverbindlich · Konkrete Strategie für Gastronomie & Hotellerie</p>
        </div>
      </div>

      <div style={{ background: L, padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            <Stat n="38.000+" label="Offene Stellen" />
            <Stat n="130 Tage" label="Ø Vakanzzeit" color={R} />
            <Stat n="12-18 €" label="Kosten/Bewerbung" color={G} />
            <Stat n="Ø 25 Tage" label="Bis zur Einstellung" />
          </div>

          {/* Pain Section */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 14px" }}>
              🍽️ Die Situation in der Gastronomie, Hotellerie und Eventbranche
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Die Gastronomie hat seit COVID eine historische Personalflucht erlebt. 275.000 Fachkräfte haben die Branche dauerhaft verlassen. Wer jetzt nicht kreativ rekrutiert, verliert den Anschluss.
            </p>
            <div style={{ padding: "14px 16px", background: `${R}05`, border: `1px solid ${R}15`, borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🔴</strong> Post-COVID-Exodus: Jede sechste Fachkraft hat das Gastgewerbe verlassen und kommt nicht zurück. Viele sind in den Einzelhandel oder Bürojobs gewechselt.</p>
            </div>
            <div style={{ padding: "14px 16px", background: `${L}`, border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟡</strong> Eingeschränkter Betrieb: 58% der Gastro-Betriebe können ihr Angebot wegen Personalmangel nicht voll aufrechterhalten.</p>
            </div>
            <div style={{ padding: "14px 16px", background: `${L}`, border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 0 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟠</strong> Imageprobleme: Unregelmäßige Arbeitszeiten und niedrige Löhne schrecken Nachwuchs ab.</p>
            </div>
          </div>

          {/* Why Jobboards Fail */}
          <div style={{ background: `${R}05`, border: `1px solid ${R}15`, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              ❌ Warum Jobbörsen im Gastronomie & Hotellerie nicht mehr funktionieren
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Die Gastronomie-Zielgruppe ist jung, mobil und visuell. Sie erreichen Köche und Servicekräfte über Instagram Reels und TikTok — nicht über trockene Stellenanzeigen auf Indeed.
            </p>
          </div>

          {/* Social Recruiting Solution */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              ✅ Social Recruiting für Gastronomie & Hotellerie: So funktioniert's
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind — direkt auf Facebook, Instagram und Co. Mit branchenspezifischen Kampagnen, die nachweislich funktionieren.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", t: "Gezielte Ansprache", d: "Wir erreichen Koch im Umkreis von 30km — nach Beruf, Alter und Interessen." },
                { icon: "📱", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
                { icon: "📊", t: "Messbare Ergebnisse", d: "12-18 € pro Bewerbung bei 10-14% Conversion. Transparent und nachvollziehbar." },
              ].map((s, i) => (
                <div key={i} style={{ background: L, borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                  <h4 style={{ color: B, fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{s.t}</h4>
                  <p style={{ color: "#64748B", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div style={{ background: `${G}08`, border: `1px solid ${G}20`, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h3 style={{ color: B, fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>📈 Praxisbeispiel</h3>
            <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Ein Restaurant in München mit 3 offenen Stellen versuchte 4 Monate klassisches Recruiting. Mit Social Ads: 42 Bewerbungen in 3 Wochen, 3 Einstellungen — darunter ein Sous-Chef.
            </p>
          </div>

          {/* Positions we fill */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              Diese Positionen besetzen wir im Gastronomie & Hotellerie
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Koch/Köchin","Servicekraft (m/w/d)","Küchenchef/in","Hotelfachmann/-frau","Restaurantleiter/in"].map((p, i) => (
                <span key={i} style={{ padding: "8px 16px", background: `${A}10`, border: `1px solid ${A}20`, borderRadius: 8, fontSize: 14, color: B, fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              Gastronomie & Hotellerie: So gewinnen erfolgreiche Betriebe heute Fachkräfte
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Der Fachkräftemangel in der Gastronomie, Hotellerie und Eventbranche ist keine vorübergehende Erscheinung — er ist strukturell und wird sich in den kommenden Jahren weiter verschärfen. Die Kombination aus demografischem Wandel, sinkenden Ausbildungszahlen und steigender Nachfrage schafft eine Situation, in der herkömmliche Recruiting-Methoden nicht mehr ausreichen.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Erfolgreiche Betriebe setzen deshalb auf einen Paradigmenwechsel: Statt darauf zu warten, dass Bewerber zu ihnen kommen, gehen sie aktiv auf potenzielle Kandidaten zu. Social Media Recruiting ermöglicht genau das — mit gezielten Kampagnen, die Fachkräfte dort erreichen, wo sie tatsächlich ihre Zeit verbringen.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Die Ergebnisse sprechen für sich: 12-18 € pro qualifizierte Bewerbung, 10-14% Conversion-Rate und durchschnittlich 25 Tage bis zur Einstellung. Deutlich schneller und kostengünstiger als traditionelle Wege über Jobbörsen, Zeitungsanzeigen oder Personalvermittler.
            </p>
          </div>

          {/* CTA Section with Form */}
          <div style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16, padding: mob ? "32px 18px" : "44px 32px", textAlign: "center" }}>
            <h2 style={{ color: W, fontSize: mob ? 22 : 30, fontWeight: 800, margin: "0 0 10px" }}>
              Koch gesucht?
            </h2>
            <p style={{ color: `${W}70`, fontSize: mob ? 15 : 17, margin: "0 0 24px", lineHeight: 1.6 }}>
              In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkräfte in Ihrer Region über Social Media erreichbar sind — und was eine Kampagne kosten würde.
            </p>

            {!showForm && !sent ? (
              <>
                <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "18px 44px", background: W, borderRadius: 12, color: B, fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", marginBottom: 12 }}>
                  Jetzt Termin wählen →
                </a>
                <p style={{ color: `${W}50`, fontSize: 13, margin: "8px 0 16px" }}>Oder lassen Sie sich zurückrufen:</p>
                <button onClick={() => setShowForm(true)} style={{ padding: "14px 32px", background: "none", border: `1px solid ${W}30`, borderRadius: 10, color: W, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  Rückruf anfordern
                </button>
              </>
            ) : sent ? (
              <div>
                <span style={{ fontSize: 56 }}>✅</span>
                <h3 style={{ color: W, fontSize: 22, fontWeight: 700, marginTop: 12 }}>Anfrage erhalten!</h3>
                <p style={{ color: `${W}70`, fontSize: 16, marginTop: 8 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen, {form.name.split(" ")[0]}.</p>
              </div>
            ) : (
              <div style={{ maxWidth: 440, margin: "0 auto", textAlign: "left" }}>
                <FormField label="Name *" k="name" ph="Max Mustermann" />
                <FormField label="E-Mail *" k="email" ph="max@firma.de" type="email" />
                <FormField label="Telefon *" k="phone" ph="+49 170 1234567" type="tel" />
                <FormField label="Firma" k="company" ph="Firmenname" />
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "12px 0 16px", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: A }} />
                  <span style={{ color: `${W}50`, fontSize: 12, lineHeight: 1.5 }}>
                    Ich stimme der <a href="/datenschutz" target="_blank" style={{ color: A }}>Datenschutzerklärung</a> zu und bin damit einverstanden, kontaktiert zu werden.
                  </span>
                </label>
                <button onClick={submit} disabled={!canSubmit} style={{
                  width: "100%", padding: "16px", background: canSubmit ? W : `${W}20`, border: "none", borderRadius: 10,
                  color: canSubmit ? B : `${W}50`, fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                }}>
                  Rückruf anfordern →
                </button>
              </div>
            )}

            <p style={{ color: `${W}35`, fontSize: 12, marginTop: 16 }}>Robert Engel · Geschäftsführer TalentSuite · 100% kostenlos & unverbindlich</p>
          </div>
        </div>
      </div>
    </>
  );
}
