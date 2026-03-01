"use client";
import React, { useState, useEffect } from "react";
import { trackLead } from "../components/Analytics";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#FFFFFF", R = "#EF4444", Y = "#F59E0B";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const questions = [
  { q: "Haben Sie eine eigene Karriereseite auf Ihrer Website?", tip: "73% der Bewerber prüfen die Website, bevor sie sich bewerben.", weight: 12 },
  { q: "Können Bewerber sich in unter 60 Sekunden bei Ihnen bewerben?", tip: "Jeder zusätzliche Klick im Bewerbungsprozess senkt die Conversion um 20%.", weight: 11 },
  { q: "Zeigen Sie Ihren Arbeitsalltag auf Social Media?", tip: "Betriebe mit Social-Media-Präsenz erhalten 3-5x mehr Bewerbungen als ohne.", weight: 14 },
  { q: "Haben Sie mehr als 5 Google-Bewertungen als Arbeitgeber?", tip: "84% der Bewerber lesen Bewertungen, bevor sie sich bewerben.", weight: 10 },
  { q: "Führen Sie ein strukturiertes Onboarding für neue Mitarbeiter durch?", tip: "Gutes Onboarding senkt die Frühfluktuation um bis zu 82%.", weight: 9 },
  { q: "Bieten Sie flexible Arbeitszeiten oder eine 4-Tage-Woche an?", tip: "Flexibilität ist mittlerweile Benefit Nr. 1 — noch vor Gehalt.", weight: 8 },
  { q: "Führen Sie mindestens vierteljährlich Mitarbeitergespräche?", tip: "Der direkte Vorgesetzte ist Kündigungsgrund Nr. 1 — Feedback beugt vor.", weight: 9 },
  { q: "Haben Sie ein Mitarbeiter-Empfehlungsprogramm?", tip: "Empfohlene Kandidaten haben 40% geringere Recruiting-Kosten und bleiben länger.", weight: 8 },
  { q: "Antworten Sie auf Bewerbungen innerhalb von 24 Stunden?", tip: "57% der Kandidaten verlieren das Interesse, wenn sie länger als 3 Tage warten.", weight: 10 },
  { q: "Wissen neue Mitarbeiter am ersten Tag genau, was sie erwartet?", tip: "Ein klarer Einarbeitungsplan steigert die Zufriedenheit in der Probezeit um 54%.", weight: 9 },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^(\+?[0-9]{7,15})$/;

/* ─── Stable sub-components (defined OUTSIDE to prevent remounting) ─── */

function Card({ children, style }) {
  return (
    <div style={{ background: `${W}08`, border: `1px solid ${W}12`, borderRadius: 16, padding: "32px 28px", ...style }}>
      {children}
    </div>
  );
}

function CardMobile({ children, style }) {
  return (
    <div style={{ background: `${W}08`, border: `1px solid ${W}12`, borderRadius: 16, padding: "24px 18px", ...style }}>
      {children}
    </div>
  );
}

function Btn({ children, onClick, primary, disabled, style: s, big }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      padding: big ? "16px 32px" : "14px 24px", border: primary ? "none" : `1px solid ${W}20`,
      borderRadius: 10, color: W, fontSize: big ? 17 : 15, cursor: disabled ? "default" : "pointer",
      fontWeight: primary ? 700 : 500, fontFamily: "inherit", transition: "all 0.2s",
      background: disabled ? `${W}15` : primary ? `linear-gradient(135deg, ${A}, #0F7BC0)` : `${W}10`,
      opacity: disabled ? 0.5 : 1, width: big ? "100%" : undefined, ...s,
    }}>{children}</button>
  );
}

function Input({ label, value, onChange, type, placeholder, error }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", color: `${W}70`, fontSize: 13, marginBottom: 6, fontWeight: 500 }}>{label}</label>
      <input type={type || "text"} value={value} onChange={onChange} placeholder={placeholder}
        style={{ width: "100%", padding: "12px 16px", background: `${W}08`, border: `1px solid ${error ? R : `${W}15`}`, borderRadius: 8, color: W, fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
      {error && <span style={{ color: R, fontSize: 12, marginTop: 4, display: "block" }}>{error}</span>}
    </div>
  );
}

/* ─── Main component ─── */

export default function ArbeitgeberSchnellcheck() {
  const mob = useIsMobile();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", branche: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [anim, setAnim] = useState(true);

  const score = answers.reduce((s, a, i) => s + (a === true ? questions[i].weight : 0), 0);
  const maxScore = questions.reduce((s, q) => s + q.weight, 0);
  const pct = Math.round((score / maxScore) * 100);
  const level = pct >= 70 ? "green" : pct >= 40 ? "yellow" : "red";
  const levelLabel = level === "green" ? "Gut aufgestellt" : level === "yellow" ? "Ausbaufähig" : "Dringender Handlungsbedarf";
  const levelColor = level === "green" ? G : level === "yellow" ? Y : R;
  const yesCount = answers.filter(a => a === true).length;
  const noCount = answers.filter(a => a === false).length;

  const weaknesses = questions.filter((_, i) => answers[i] === false).sort((a, b) => b.weight - a.weight).slice(0, 3);

  const fadeGo = (s) => { setAnim(false); setTimeout(() => { setStep(s); setAnim(true); }, 200); };
  const answer = (val) => { const n = [...answers]; n[step - 1] = val; setAnswers(n); setTimeout(() => fadeGo(step + 1), 300); };

  const cleanPhone = (p) => p.replace(/[\s\-\/\(\)]/g, "");
  const emailValid = emailRe.test(form.email);
  const phoneValid = form.phone === "" || phoneRe.test(cleanPhone(form.phone));
  const canSubmit = form.name && emailValid && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "schnellcheck",
          name: form.name, email: form.email, phone: form.phone || undefined,
          company: form.company || undefined,
          industry: form.branche || undefined,
          extra: { score: pct, level: levelLabel, yesCount, noCount, weaknesses: weaknesses.map(w => w.q) },
        }),
      });
    } catch (e) { console.error(e); }
    trackLead({ formName: "arbeitgeber-schnellcheck", category: "leadmagnet", value: 50 });
    fadeGo(12);
  };

  const progress = step === 0 ? 0 : step <= 10 ? (step / 12) * 100 : step === 11 ? 90 : 100;
  const CurCard = mob ? CardMobile : Card;

  return (
    <div style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`, minHeight: "80vh", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${A}15, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: mob ? "28px 16px 60px" : "48px 24px 80px" }}>

        {/* Progress bar */}
        {step > 0 && step < 12 && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: `${W}70`, fontSize: 13 }}>{step <= 10 ? `Frage ${step} von 10` : "Fast geschafft"}</span>
              <span style={{ color: A, fontSize: 13, fontWeight: 600 }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 4, background: `${W}12`, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${A}, ${G})`, borderRadius: 4, transition: "width 0.5s" }} />
            </div>
          </div>
        )}

        <div style={{ opacity: anim ? 1 : 0, transform: anim ? "translateY(0)" : "translateY(16px)", transition: "all 0.25s ease" }}>

          {/* ─── INTRO ─── */}
          {step === 0 && (
            <CurCard>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 48 }}>🏢</span>
                <h1 style={{ color: W, fontSize: mob ? 22 : 28, fontWeight: 800, margin: "16px 0 12px", lineHeight: 1.25 }}>
                  Arbeitgeber-Schnellcheck
                </h1>
                <p style={{ color: `${W}80`, fontSize: mob ? 15 : 17, lineHeight: 1.6, margin: "0 0 8px" }}>
                  Finden Sie in <strong style={{ color: A }}>2 Minuten</strong> heraus, wie attraktiv Ihr Betrieb für Fachkräfte wirklich ist.
                </p>
                <p style={{ color: `${W}60`, fontSize: 14, margin: "0 0 28px" }}>
                  10 Ja/Nein-Fragen · Sofortiges Ergebnis · Konkreter Maßnahmenplan
                </p>
                <Btn primary big onClick={() => fadeGo(1)}>Schnellcheck starten →</Btn>
                <p style={{ color: `${W}40`, fontSize: 12, marginTop: 16 }}>100% kostenlos · Keine versteckten Kosten</p>
              </div>
            </CurCard>
          )}

          {/* ─── QUESTIONS 1-10 ─── */}
          {step >= 1 && step <= 10 && (
            <CurCard>
              <p style={{ color: A, fontSize: 13, fontWeight: 600, margin: "0 0 12px" }}>Frage {step} / 10</p>
              <h2 style={{ color: W, fontSize: mob ? 20 : 24, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.35 }}>
                {questions[step - 1].q}
              </h2>
              <p style={{ color: `${W}50`, fontSize: 13, margin: "0 0 28px", fontStyle: "italic" }}>
                💡 {questions[step - 1].tip}
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => answer(true)} style={{
                  flex: 1, padding: "18px", borderRadius: 12, border: `2px solid ${answers[step - 1] === true ? G : `${W}15`}`,
                  background: answers[step - 1] === true ? `${G}15` : `${W}05`, color: W, fontSize: 17, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
                }}>✅ Ja</button>
                <button onClick={() => answer(false)} style={{
                  flex: 1, padding: "18px", borderRadius: 12, border: `2px solid ${answers[step - 1] === false ? R : `${W}15`}`,
                  background: answers[step - 1] === false ? `${R}15` : `${W}05`, color: W, fontSize: 17, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
                }}>❌ Nein</button>
              </div>
              {step > 1 && (
                <button onClick={() => fadeGo(step - 1)} style={{ marginTop: 16, background: "none", border: "none", color: `${W}50`, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Zurück</button>
              )}
            </CurCard>
          )}

          {/* ─── CONTACT FORM ─── */}
          {step === 11 && !sent && (
            <CurCard>
              <h2 style={{ color: W, fontSize: mob ? 20 : 24, fontWeight: 700, margin: "0 0 8px" }}>
                Fast geschafft! 🎉
              </h2>
              <p style={{ color: `${W}70`, fontSize: 15, margin: "0 0 24px" }}>
                Tragen Sie Ihre Daten ein, um Ihren persönlichen Score und Maßnahmenplan zu sehen.
              </p>
              <Input label="Name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Max Mustermann" />
              <Input label="E-Mail *" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="max@firma.de"
                error={form.email && !emailValid ? "Bitte geben Sie eine gültige E-Mail-Adresse ein" : null} />
              <Input label="Telefon" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+49 170 1234567"
                error={form.phone && !phoneValid ? "Bitte geben Sie eine gültige Telefonnummer ein" : null} />
              <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 12 }}>
                <Input label="Firma" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Firmenname" />
                <Input label="Branche" value={form.branche} onChange={e => setForm(f => ({ ...f, branche: e.target.value }))} placeholder="z.B. Handwerk, Pflege" />
              </div>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 8, cursor: "pointer" }}>
                <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 4, accentColor: A }} />
                <span style={{ color: `${W}60`, fontSize: 12, lineHeight: 1.5 }}>
                  Ich stimme der <a href="/datenschutz" target="_blank" rel="noopener" style={{ color: A }}>Datenschutzerklärung</a> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden. Ich kann meine Einwilligung jederzeit widerrufen.
                </span>
              </label>
              <Btn primary big onClick={submit} disabled={!canSubmit} style={{ marginTop: 20 }}>Ergebnis anzeigen →</Btn>
            </CurCard>
          )}

          {/* ─── RESULT ─── */}
          {step === 12 && (
            <div>
              <CurCard style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ width: 120, height: 120, borderRadius: "50%", border: `4px solid ${levelColor}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", background: `${levelColor}10` }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: levelColor }}>{pct}%</span>
                </div>
                <h2 style={{ color: W, fontSize: mob ? 22 : 28, fontWeight: 700, margin: "0 0 8px" }}>
                  {form.name.split(" ")[0]}, Ihr Betrieb ist: <span style={{ color: levelColor }}>{levelLabel}</span>
                </h2>
                <p style={{ color: `${W}60`, fontSize: 15, margin: 0 }}>
                  {yesCount} von 10 Kriterien erfüllt · Score: {pct} von 100
                </p>
              </CurCard>

              {weaknesses.length > 0 && (
                <CurCard style={{ marginBottom: 20 }}>
                  <h3 style={{ color: W, fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>🔴 Ihre 3 größten Hebel</h3>
                  {weaknesses.map((w, i) => (
                    <div key={i} style={{ padding: "14px 16px", background: `${R}08`, border: `1px solid ${R}20`, borderRadius: 10, marginBottom: i < weaknesses.length - 1 ? 10 : 0 }}>
                      <p style={{ color: W, fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>{w.q.replace("?", "")}</p>
                      <p style={{ color: `${W}60`, fontSize: 13, margin: 0 }}>{w.tip}</p>
                    </div>
                  ))}
                </CurCard>
              )}

              <CurCard style={{ background: `linear-gradient(135deg, ${A}15, ${G}10)`, border: `1px solid ${A}30`, textAlign: "center" }}>
                <h3 style={{ color: W, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
                  Wollen Sie diese Lücken schließen?
                </h3>
                <p style={{ color: `${W}70`, fontSize: 15, margin: "0 0 20px", lineHeight: 1.6 }}>
                  In einem kostenlosen 20-Minuten-Gespräch zeigen wir Ihnen, welche Quick Wins den größten Unterschied machen — speziell für Ihren Betrieb.
                </p>
                <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "16px 40px", background: W, borderRadius: 10, color: B, fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "inherit" }}>
                  Kostenlose Recruiting-Analyse buchen →
                </a>
                <p style={{ color: `${W}40`, fontSize: 12, marginTop: 12 }}>Robert Engel, Geschäftsführer TalentSuite · 20 Min. · Unverbindlich</p>
              </CurCard>

              <button onClick={() => { setStep(0); setAnswers(Array(10).fill(null)); setForm({ name: "", email: "", phone: "", company: "", branche: "" }); setDsgvo(false); setSent(false); }}
                style={{ display: "block", margin: "20px auto 0", background: "none", border: `1px solid ${W}20`, borderRadius: 8, color: `${W}50`, padding: "10px 20px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
                🔄 Neuen Check starten
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
