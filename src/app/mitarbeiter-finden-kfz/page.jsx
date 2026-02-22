"use client";
import React, { useState, useEffect } from "react";

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
          source: "mitarbeiter-finden-kfz", name: form.name, email: form.email,
          phone: form.phone || undefined, company: form.company || undefined,
          industry: "KFZ-Gewerbe",
          extra: { branche: "KFZ-Gewerbe", pageType: "branchen-landing" },
        }),
      });
    } catch (e) { console.error(e); }
  };

  return (
    <>
      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "80px 24px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,152,224,0.07), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>🚗</span>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 42, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            KFZ Mechatroniker finden — KFZ-Fachkräfte in 30 Tagen einstellen
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: mob ? 15 : 19, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.6 }}>
            25.000+ offene Stellen · Ø 145 Tage Vakanzzeit · 72% der Fachkräfte nicht auf Jobbörsen
          </p>
          <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Kostenlose Recruiting-Analyse →
          </a>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 10 }}>20 Min. · Unverbindlich · Konkrete Strategie für KFZ-Gewerbe</p>
        </div>
      </div>

      <div style={{ background: "#f0f4f7", padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { n: "25.000+", label: "Offene Stellen", color: "#1B98E0" },
              { n: "145 Tage", label: "Ø Vakanzzeit", color: "#EF4444" },
              { n: "15-22 €", label: "Kosten/Bewerbung", color: "#10B981" },
              { n: "Ø 28 Tage", label: "Bis zur Einstellung", color: "#1B98E0" },
            ].map((s, idx) => (
              <div key={idx} style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "16px 12px" : "20px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: mob ? 22 : 28, fontWeight: 800, color: s.color }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Pain Section */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 14px" }}>
              🚗 Die Situation im KFZ-Gewerbe
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Das KFZ-Gewerbe befindet sich im größten Umbruch seiner Geschichte. Die Elektromobilität erfordert völlig neue Qualifikationen, während erfahrene Mechaniker in die Industrie abwandern.
            </p>
            <div style={{ padding: "14px 16px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🔴</strong> E-Mobilität: Hochvolt-Technik erfordert neue Qualifikationen — der Markt für geschulte KFZ-Mechatroniker ist nahezu leergefegt.</p>
            </div>
            <div style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟡</strong> Abwanderung: 72% der KFZ-Betriebe verlieren Fachkräfte an die Industrie, die mit höheren Gehältern und geregelteren Arbeitszeiten lockt.</p>
            </div>
            <div style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 0 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟠</strong> Auslastung am Limit: 93% Werkstattauslastung bei gleichzeitigem Personalmangel führt zu Überlastung und weiteren Kündigungen.</p>
            </div>
          </div>

          {/* Why Jobboards Fail */}
          <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              ❌ Warum Jobbörsen im Bereich KFZ-Gewerbe nicht mehr funktionieren
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              KFZ-Mechatroniker sind technisch versiert — sie verbringen Freizeit auf YouTube und Social Media, nicht auf Jobbörsen.
            </p>
          </div>

          {/* Social Recruiting Solution */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              ✅ Social Recruiting für KFZ-Gewerbe: So funktioniert es
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind — direkt auf Facebook, Instagram und Co.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", t: "Gezielte Ansprache", d: "Wir erreichen KFZ-Mechatroniker im Umkreis von 30km — nach Beruf, Alter und Interessen." },
                { icon: "📱", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
                { icon: "📊", t: "Messbare Ergebnisse", d: "15-22 € pro Bewerbung bei 12-16% Conversion. Transparent und nachvollziehbar." },
              ].map((s, idx) => (
                <div key={idx} style={{ background: "#f0f4f7", borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                  <h4 style={{ color: "#023B5B", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{s.t}</h4>
                  <p style={{ color: "#64748B", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h3 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>📈 Praxisbeispiel</h3>
            <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Ein Autohaus in Thüringen suchte 6 Monate einen Hochvolt-Mechatroniker. Social Recruiting: 16 Bewerbungen in 3 Wochen, 1 Einstellung nach 21 Tagen.
            </p>
          </div>

          {/* Positions */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              Diese Positionen besetzen wir im Bereich KFZ-Gewerbe
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["KFZ-Mechatroniker (m/w/d)","KFZ-Mechaniker","KFZ-Meister","Serviceberater","Hochvolt-Techniker"].map((p, idx) => (
                <span key={idx} style={{ padding: "8px 16px", background: "rgba(27,152,224,0.1)", border: "1px solid rgba(27,152,224,0.2)", borderRadius: 8, fontSize: 14, color: "#023B5B", fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              So gewinnen erfolgreiche KFZ-Betriebe heute Fachkräfte
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Der Fachkräftemangel im KFZ-Gewerbe ist keine vorübergehende Erscheinung — er ist strukturell und wird durch die E-Mobilität weiter verschärft.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Erfolgreiche Betriebe setzen deshalb auf einen Paradigmenwechsel: Statt darauf zu warten, dass Bewerber zu ihnen kommen, gehen sie aktiv auf potenzielle Kandidaten zu.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>Die Ergebnisse sprechen für sich: 15-22 € pro qualifizierte Bewerbung, 12-16% Conversion-Rate und durchschnittlich 28 Tage bis zur Einstellung.</p>
          </div>

          {/* CTA Section */}
          <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "32px 18px" : "44px 32px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 22 : 30, fontWeight: 800, margin: "0 0 10px" }}>
              KFZ-Mechatroniker gesucht?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 17, margin: "0 0 24px", lineHeight: 1.6 }}>
              In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkräfte in Ihrer Region über Social Media erreichbar sind — und was eine Kampagne kosten würde.
            </p>

            {!showForm && !sent ? (
              <>
                <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", marginBottom: 12 }}>
                  Jetzt Termin wählen →
                </a>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 16px" }}>Oder lassen Sie sich zurückrufen:</p>
                <button onClick={() => setShowForm(true)} style={{ padding: "14px 32px", background: "none", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, color: "#ffffff", fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  Rückruf anfordern
                </button>
              </>
            ) : sent ? (
              <div>
                <span style={{ fontSize: 56 }}>✅</span>
                <h3 style={{ color: "#ffffff", fontSize: 22, fontWeight: 700, marginTop: 12 }}>Anfrage erhalten!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginTop: 8 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen, {form.name.split(" ")[0]}.</p>
              </div>
            ) : (
              <div style={{ maxWidth: 440, margin: "0 auto", textAlign: "left" }}>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>Name *</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Max Mustermann"
                    style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>E-Mail *</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="max@firma.de"
                    style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                  {form.email && !emailValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>Telefon</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+49 170 1234567"
                    style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                  {form.phone && !phoneValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige Telefonnummer</span>}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>Firma</label>
                  <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Firmenname"
                    style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                </div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "12px 0 16px", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: "#1B98E0" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>
                    Ich stimme der <a href="/datenschutz" target="_blank" style={{ color: "#1B98E0" }}>Datenschutzerklärung</a> zu und bin damit einverstanden, kontaktiert zu werden.
                  </span>
                </label>
                <button onClick={submit} disabled={!canSubmit} style={{
                  width: "100%", padding: "16px", background: canSubmit ? "#ffffff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 10,
                  color: canSubmit ? "#023B5B" : "rgba(255,255,255,0.5)", fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                }}>
                  Rückruf anfordern →
                </button>
              </div>
            )}

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 16 }}>Robert Engel · Geschäftsführer TalentSuite · 100% kostenlos &amp; unverbindlich</p>
          </div>
        </div>
      </div>
    </>
  );
}
