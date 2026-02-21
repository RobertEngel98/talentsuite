"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#FFFFFF";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return m;
}

const industries = [
  { id: "handwerk", label: "Handwerk & Bauwesen", icon: "🔨", factor: 1.2 },
  { id: "pflege", label: "Gesundheit & Pflege", icon: "🏥", factor: 1.35 },
  { id: "logistik", label: "Logistik & Transport", icon: "🚛", factor: 1.1 },
  { id: "gastro", label: "Gastronomie & Hotel", icon: "🍽️", factor: 1.0 },
  { id: "industrie", label: "Industrie & Produktion", icon: "⚙️", factor: 1.15 },
  { id: "other", label: "Andere Branche", icon: "🏢", factor: 1.0 },
];

const channels = [
  { id: "portal", label: "Jobportale (Stepstone, Indeed)", costFactor: 1.0 },
  { id: "zeitung", label: "Zeitungsanzeigen", costFactor: 1.2 },
  { id: "agentur", label: "Personalvermittlung", costFactor: 0.7 },
  { id: "nichts", label: "Noch nichts Aktives", costFactor: 1.3 },
  { id: "social", label: "Social Media (eigenständig)", costFactor: 0.9 },
];

const fmt = n => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export default function KostenrechnerPage() {
  const mob = useIsMobile();
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);
  const [formData, setFormData] = useState({
    industry: "", openPositions: 1, avgSalary: 45000, monthsOpen: 3,
    currentChannel: "", companyName: "", email: "", name: "", phone: "", dsgvo: false,
  });

  const industryFactor = industries.find(i => i.id === formData.industry)?.factor || 1;
  const channelCost = channels.find(c => c.id === formData.currentChannel)?.costFactor || 1;
  const monthlyLoss = Math.round((formData.avgSalary / 12) * 1.5 * industryFactor);
  const totalVacancy = monthlyLoss * formData.monthsOpen * formData.openPositions;
  const recruitCost = Math.round(formData.openPositions * 2500 * channelCost);
  const totalCurrent = totalVacancy + recruitCost;
  const tsPkg = formData.openPositions <= 1 ? 2990 : formData.openPositions <= 3 ? 4990 : 8990;
  const estDays = Math.round(30 * industryFactor);
  const savedMonths = Math.max(0, formData.monthsOpen - Math.ceil(estDays / 30));
  const savedCost = savedMonths * monthlyLoss * formData.openPositions;
  const roi = tsPkg > 0 ? Math.round(((savedCost - tsPkg) / tsPkg) * 100) : 0;
  const progress = showResult ? 100 : ((step + 1) / 4) * 100;

  const go = (s) => { setAnimateIn(false); setTimeout(() => { setStep(s); setAnimateIn(true); }, 250); };
  const submit = () => {
    setAnimateIn(false);
    setTimeout(() => { setShowResult(true); setAnimateIn(true); }, 250);
    // Lead an ClickUp senden (async, blockiert UI nicht)
    fetch("/api/leadmagnet-capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "kostenrechner",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        industry: industries.find(i => i.id === formData.industry)?.label || formData.industry,
        extra: {
          openPositions: formData.openPositions,
          avgSalary: formData.avgSalary,
          monthsOpen: formData.monthsOpen,
          currentChannel: channels.find(c => c.id === formData.currentChannel)?.label || formData.currentChannel,
          totalVacancyCost: totalVacancy + recruitCost,
          roi,
        },
      }),
    }).catch(err => console.error("Lead capture error:", err));
  };

  const Btn = ({ children, onClick, primary, disabled, style: s }) => (
    <button onClick={onClick} disabled={disabled} style={{
      padding: "14px 24px", border: primary ? "none" : `1px solid ${W}20`,
      borderRadius: 10, color: W, fontSize: 15, cursor: disabled ? "default" : "pointer",
      fontWeight: primary ? 700 : 500, fontFamily: "inherit", transition: "all 0.2s",
      background: disabled ? `${W}15` : primary ? `linear-gradient(135deg, ${A}, #0F7BC0)` : `${W}10`, ...s
    }}>{children}</button>
  );

  const sliders = [
    { label: "Anzahl offener Stellen", val: formData.openPositions, key: "openPositions", min: 1, max: 20, stepVal: 1, display: formData.openPositions, minL: "1", maxL: "20" },
    { label: "Durchschnittliches Jahresgehalt", val: formData.avgSalary, key: "avgSalary", min: 25000, max: 100000, stepVal: 5000, display: fmt(formData.avgSalary), minL: "25k", maxL: "100k" },
    { label: "Monate unbesetzt", val: formData.monthsOpen, key: "monthsOpen", min: 1, max: 12, stepVal: 1, display: `${formData.monthsOpen} Monate`, minL: "1", maxL: "12" },
  ];

  return (
    <>
      <Head>
        <title>Vakanzkosten-Rechner | TalentSuite</title>
        <meta name="description" content="Berechnen Sie Ihre tatsächlichen Vakanzkosten und sehen Sie, wie viel Sie mit TalentSuite sparen können." />
      </Head>

      <div style={{
        background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`,
        minHeight: "60vh", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circle */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${A}15, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 700, margin: "0 auto", padding: mob ? "28px 16px 60px" : "40px 24px 80px" }}>

          {/* Progress */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: `${W}90`, fontSize: 13, fontWeight: 500 }}>{showResult ? "Ihre Auswertung" : `Schritt ${step + 1} von 4`}</span>
              <span style={{ color: A, fontSize: 13, fontWeight: 600 }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 4, background: `${W}15`, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${A}, ${G})`, borderRadius: 4, transition: "width 0.5s ease" }} />
            </div>
          </div>

          {/* Animated content */}
          <div style={{ opacity: animateIn ? 1 : 0, transform: animateIn ? "translateY(0)" : "translateY(20px)", transition: "all 0.3s ease" }}>

            {/* STEP 0: Branche */}
            {!showResult && step === 0 && (
              <div>
                <h2 style={{ color: W, fontSize: mob ? 24 : 30, marginBottom: 8, fontWeight: 700 }}>In welcher Branche sind Sie tätig?</h2>
                <p style={{ color: `${W}70`, fontSize: 15, marginBottom: 28 }}>Wir berechnen branchenspezifische Vakanzkosten für Sie.</p>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 12 }}>
                  {industries.map(ind => (
                    <button key={ind.id} onClick={() => { setFormData(f => ({...f, industry: ind.id})); go(1); }}
                      style={{
                        padding: "18px 16px", background: formData.industry === ind.id ? `${A}25` : `${W}08`,
                        border: `2px solid ${formData.industry === ind.id ? A : `${W}15`}`,
                        borderRadius: 12, cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                        display: "flex", alignItems: "center", gap: 12, fontFamily: "inherit",
                      }}>
                      <span style={{ fontSize: 26 }}>{ind.icon}</span>
                      <span style={{ color: W, fontSize: 15, fontWeight: 500 }}>{ind.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Stellen & Gehalt */}
            {!showResult && step === 1 && (
              <div>
                <h2 style={{ color: W, fontSize: mob ? 24 : 30, marginBottom: 8, fontWeight: 700 }}>Offene Stellen & Gehaltsniveau</h2>
                <p style={{ color: `${W}70`, fontSize: 15, marginBottom: 32 }}>Diese Angaben helfen uns, Ihre tatsächlichen Vakanzkosten zu berechnen.</p>
                {sliders.map(sl => (
                  <div key={sl.key} style={{ marginBottom: 28 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <span style={{ color: `${W}90`, fontSize: 14, fontWeight: 500 }}>{sl.label}</span>
                      <span style={{ color: A, fontSize: 18, fontWeight: 700 }}>{sl.display}</span>
                    </div>
                    <input type="range" min={sl.min} max={sl.max} step={sl.stepVal} value={sl.val}
                      onChange={e => setFormData(f => ({...f, [sl.key]: Number(e.target.value)}))}
                      style={{ width: "100%", accentColor: A, height: 6, cursor: "pointer" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                      <span style={{ color: `${W}40`, fontSize: 11 }}>{sl.minL}</span>
                      <span style={{ color: `${W}40`, fontSize: 11 }}>{sl.maxL}</span>
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                  <Btn onClick={() => go(0)}>{"← Zurück"}</Btn>
                  <Btn primary onClick={() => go(2)} style={{ flex: 1 }}>{"Weiter →"}</Btn>
                </div>
              </div>
            )}

            {/* STEP 2: Aktueller Kanal */}
            {!showResult && step === 2 && (
              <div>
                <h2 style={{ color: W, fontSize: mob ? 24 : 30, marginBottom: 8, fontWeight: 700 }}>Was nutzen Sie aktuell?</h2>
                <p style={{ color: `${W}70`, fontSize: 15, marginBottom: 28 }}>Wir vergleichen Ihre aktuellen Kosten mit unserem Ansatz.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {channels.map(ch => (
                    <button key={ch.id} onClick={() => { setFormData(f => ({...f, currentChannel: ch.id})); go(3); }}
                      style={{
                        padding: "18px 20px",
                        background: formData.currentChannel === ch.id ? `${A}25` : `${W}08`,
                        border: `2px solid ${formData.currentChannel === ch.id ? A : `${W}15`}`,
                        borderRadius: 12, cursor: "pointer", textAlign: "left", color: W,
                        fontSize: 15, fontWeight: 500, transition: "all 0.2s", fontFamily: "inherit",
                      }}>
                      {ch.label}
                    </button>
                  ))}
                </div>
                <Btn onClick={() => go(1)} style={{ marginTop: 16 }}>{"← Zurück"}</Btn>
              </div>
            )}

            {/* STEP 3: Kontakt */}
            {!showResult && step === 3 && (() => {
              const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email);
              const phoneClean = formData.phone.replace(/[\s\-\/\(\)]/g, "");
              const phoneValid = /^(\+?[0-9]{7,15})$/.test(phoneClean);
              const canSubmit = formData.name && emailValid && phoneValid && formData.dsgvo;
              return (
              <div>
                <h2 style={{ color: W, fontSize: mob ? 24 : 30, marginBottom: 8, fontWeight: 700 }}>Fast geschafft!</h2>
                <p style={{ color: `${W}70`, fontSize: 15, marginBottom: 28 }}>Geben Sie Ihre Daten ein und erhalten Sie sofort Ihre Kostenanalyse.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[{ k: "name", p: "Ihr Name", type: "text" }, { k: "companyName", p: "Firmenname", type: "text" }, { k: "email", p: "E-Mail-Adresse", type: "email" }, { k: "phone", p: "Telefonnummer", type: "tel" }].map(f => (
                    <div key={f.k}>
                      <input placeholder={f.p} type={f.type} value={formData[f.k]}
                        onChange={e => setFormData(d => ({...d, [f.k]: e.target.value}))}
                        style={{
                          width: "100%", padding: "16px 18px", background: `${W}08`, border: `2px solid ${
                            f.k === "email" && formData.email && !emailValid ? "#F87171" :
                            f.k === "phone" && formData.phone && !phoneValid ? "#F87171" : `${W}15`
                          }`,
                          borderRadius: 10, color: W, fontSize: 15, outline: "none", fontFamily: "inherit",
                          boxSizing: "border-box",
                        }} />
                      {f.k === "email" && formData.email && !emailValid && (
                        <p style={{ color: "#F87171", fontSize: 11, marginTop: 4 }}>Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>
                      )}
                      {f.k === "phone" && formData.phone && !phoneValid && (
                        <p style={{ color: "#F87171", fontSize: 11, marginTop: 4 }}>Bitte geben Sie eine gültige Telefonnummer ein.</p>
                      )}
                    </div>
                  ))}
                </div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 16, cursor: "pointer" }}>
                  <input type="checkbox" checked={formData.dsgvo}
                    onChange={e => setFormData(d => ({...d, dsgvo: e.target.checked}))}
                    style={{ width: 18, height: 18, marginTop: 2, accentColor: A, flexShrink: 0 }} />
                  <span style={{ color: `${W}70`, fontSize: 12, lineHeight: 1.5 }}>
                    {"Ich stimme der "}
                    <a href="/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: A, textDecoration: "underline" }}>Datenschutzerklärung</a>
                    {" zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden. Ich kann meine Einwilligung jederzeit widerrufen."}
                  </span>
                </label>
                <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                  <Btn onClick={() => go(2)}>{"← Zurück"}</Btn>
                  <Btn primary onClick={submit} disabled={!canSubmit}
                    style={{ flex: 1, background: canSubmit ? `linear-gradient(135deg, ${G}, #0D9669)` : undefined }}>
                    {"🔓 Auswertung anzeigen"}
                  </Btn>
                </div>
              </div>
              );
            })()}

            {/* RESULT */}
            {showResult && (
              <div>
                <div style={{ textAlign: "center", marginBottom: 36 }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>📊</div>
                  <h2 style={{ color: W, fontSize: mob ? 24 : 30, marginBottom: 4, fontWeight: 700 }}>Ihre Vakanzkosten-Analyse</h2>
                  <p style={{ color: `${W}60`, fontSize: 14 }}>
                    {formData.companyName ? `Für ${formData.companyName}` : "Ihr Ergebnis"} {" • "} {industries.find(i => i.id === formData.industry)?.label}
                  </p>
                </div>

                {/* Aktuelle Kosten */}
                <div style={{ background: `${W}08`, borderRadius: 16, padding: mob ? 20 : 28, marginBottom: 20, border: `1px solid ${W}10` }}>
                  <h3 style={{ color: `${W}90`, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Aktuelle Kosten</h3>
                  {[
                    { l: "Produktivitätsverlust/Monat", s: "pro unbesetzter Stelle", v: fmt(monthlyLoss) },
                    { l: "Gesamte Vakanzkosten", s: `${formData.openPositions} Stelle(n) × ${formData.monthsOpen} Monate`, v: fmt(totalVacancy) },
                    { l: "Geschätzte Recruiting-Kosten", s: channels.find(c => c.id === formData.currentChannel)?.label, v: fmt(recruitCost) },
                  ].map((r, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid ${W}10`, flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <div style={{ color: W, fontSize: mob ? 14 : 15, fontWeight: 500 }}>{r.l}</div>
                        <div style={{ color: `${W}50`, fontSize: 12, marginTop: 2 }}>{r.s}</div>
                      </div>
                      <span style={{ color: "#F87171", fontSize: mob ? 18 : 20, fontWeight: 700 }}>{r.v}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0 4px", flexWrap: "wrap", gap: 8 }}>
                    <span style={{ color: W, fontSize: mob ? 16 : 18, fontWeight: 700 }}>Gesamtkosten aktuell</span>
                    <span style={{ color: "#F87171", fontSize: mob ? 24 : 28, fontWeight: 800 }}>{fmt(totalCurrent)}</span>
                  </div>
                </div>

                {/* Mit TalentSuite */}
                <div style={{ background: `linear-gradient(135deg, ${A}20, ${G}15)`, borderRadius: 16, padding: mob ? 20 : 28, marginBottom: 20, border: `1px solid ${A}30` }}>
                  <h3 style={{ color: A, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Mit TalentSuite</h3>
                  <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 14 }}>
                    {[
                      { l: "Empfohlenes Paket", v: fmt(tsPkg), s: formData.openPositions <= 1 ? "Starter (30 Tage)" : formData.openPositions <= 3 ? "Premium (90 Tage)" : "Enterprise (180 Tage)" },
                      { l: "Ø Time-to-Hire", v: `${estDays} Tage`, s: `statt ${formData.monthsOpen * 30} Tage` },
                      { l: "Gesparte Vakanzkosten", v: fmt(savedCost), s: `${savedMonths} Monat(e) früher besetzt` },
                      { l: "Return on Investment", v: `${roi > 0 ? "+" : ""}${roi}%`, s: "auf Ihre Investition", green: roi > 0 },
                    ].map((item, i) => (
                      <div key={i} style={{ background: `${W}08`, borderRadius: 12, padding: 16 }}>
                        <div style={{ color: `${W}60`, fontSize: 12, fontWeight: 500, marginBottom: 6 }}>{item.l}</div>
                        <div style={{ color: item.green ? G : W, fontSize: mob ? 20 : 24, fontWeight: 800 }}>{item.v}</div>
                        <div style={{ color: `${W}40`, fontSize: 11, marginTop: 2 }}>{item.s}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ background: `linear-gradient(135deg, ${G}, #0D9669)`, borderRadius: 16, padding: mob ? "24px 18px" : 28, textAlign: "center" }}>
                  <h3 style={{ color: W, fontSize: mob ? 18 : 22, fontWeight: 700, marginBottom: 8 }}>
                    Bereit, {fmt(savedCost > 0 ? savedCost : totalVacancy)} zu sparen?
                  </h3>
                  <p style={{ color: `${W}90`, fontSize: 14, marginBottom: 20 }}>
                    Kostenloser Discovery Call — 20 Min., unverbindlich, konkrete Strategie.
                  </p>
                  <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-block", padding: "16px 40px", background: W, border: "none",
                      borderRadius: 10, color: B, fontSize: 16, fontWeight: 700, cursor: "pointer",
                      fontFamily: "inherit", textDecoration: "none",
                    }}>
                    {"Discovery Call buchen →"}
                  </a>
                  <p style={{ color: `${W}60`, fontSize: 12, marginTop: 12 }}>Robert Engel, Geschäftsführer TalentSuite</p>
                </div>

                <button onClick={() => { setShowResult(false); setStep(0); setAnimateIn(true); }}
                  style={{
                    marginTop: 20, padding: "12px 20px", background: "none",
                    border: `1px solid ${W}20`, borderRadius: 8, color: `${W}60`,
                    fontSize: 13, cursor: "pointer", display: "block", margin: "20px auto 0",
                    fontFamily: "inherit",
                  }}>
                  {"🔄 Neue Berechnung"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
