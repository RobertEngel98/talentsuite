"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const B = "#023B5B", A = "#1B98E0", G = "#10B981", W = "#ffffff", GR = "#64748B", GOLD = "#FBBF24", RED = "#EF4444";

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

const npsColors = (score) => {
  if (score <= 6) return { bg: `${RED}18`, border: RED, text: RED };
  if (score <= 8) return { bg: `${GOLD}18`, border: GOLD, text: "#92400E" };
  return { bg: `${G}18`, border: G, text: G };
};

export default function BewertungPage() {
  const mob = useIsMobile();
  const [step, setStep] = useState(0);
  const [nps, setNps] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isPromoter = nps >= 9;
  const isPassive = nps >= 7 && nps <= 8;

  const handleNpsSubmit = () => {
    if (nps === null) return;
    setStep(1);
  };

  const handleFeedbackSubmit = () => {
    setSubmitted(true);
    setStep(2);
  };

  // Step titles
  const title = step === 0
    ? "Wie zufrieden sind Sie mit TalentSuite?"
    : step === 1 && isPromoter
      ? "Vielen Dank! ⭐"
      : step === 1
        ? "Danke für Ihre Ehrlichkeit."
        : "🙏 Vielen Dank!";

  const subtitle = step === 0
    ? "Ihre Meinung hilft uns, besser zu werden."
    : step === 1 && isPromoter
      ? "Würden Sie Ihre Erfahrung auf Google teilen?"
      : step === 1
        ? "Ihr Feedback hilft uns, besser zu werden."
        : "Wir schätzen Ihr Feedback sehr.";

  return (
    <>
      <Head>
        <title>Bewertung | TalentSuite</title>
        <meta name="description" content="Bewerten Sie Ihre Erfahrung mit TalentSuite – Ihr Feedback hilft uns, besser zu werden." />
      </Head>

      <div id="rf" style={{ background: "#f0f4f7", minHeight: "60vh" }}>

        {/* Hero Header */}
        <div style={{
          background: `linear-gradient(135deg, #011E2F, ${B})`,
          padding: mob ? "40px 20px 60px" : "56px 20px 72px",
          textAlign: "center",
        }}>
          <div style={{ letterSpacing: 4, fontSize: 11, fontWeight: 700, marginBottom: 10 }} data-rf="accent">
            TALENTSUITE
          </div>
          <h1 style={{
            fontSize: mob ? "clamp(22px, 5vw, 28px)" : "clamp(26px, 3vw, 36px)",
            fontWeight: 800, lineHeight: 1.2, maxWidth: 520, margin: "0 auto 10px",
          }} data-rf="white">
            {title}
          </h1>
          <p style={{ fontSize: mob ? 13 : 15, maxWidth: 440, margin: "0 auto" }} data-rf="muted">
            {subtitle}
          </p>
        </div>

        {/* Card Container */}
        <div style={{ maxWidth: 540, margin: mob ? "-32px auto 0" : "-40px auto 0", padding: "0 16px 48px" }}>

          {/* ── STEP 0: NPS Score ── */}
          {step === 0 && (
            <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: mob ? "24px 18px" : "32px 28px", textAlign: "center" }}>
              <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>
                Wie wahrscheinlich empfehlen Sie TalentSuite weiter?
              </p>
              <p data-rf="gray" style={{ fontSize: 12, margin: "0 0 22px" }}>
                0 = sehr unwahrscheinlich • 10 = sehr wahrscheinlich
              </p>

              {/* NPS Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: mob ? 5 : 7, flexWrap: "wrap", marginBottom: 22 }}>
                {Array.from({ length: 11 }, (_, i) => {
                  const c = npsColors(i);
                  const sel = nps === i;
                  const hov = hover === i;
                  return (
                    <button key={i} onClick={() => setNps(i)}
                      onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                      style={{
                        width: mob ? 36 : 42, height: mob ? 36 : 42, borderRadius: 10,
                        border: `2px solid ${sel ? c.border : hov ? "#CBD5E1" : "#E2E8F0"}`,
                        background: sel ? c.bg : hov ? "#F8FAFC" : W,
                        fontSize: mob ? 13 : 14, fontWeight: sel ? 800 : 600,
                        cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
                      }}>
                      {i}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Label */}
              {nps !== null && (
                <div style={{
                  padding: "8px 18px", borderRadius: 10, display: "inline-block", marginBottom: 18,
                  background: npsColors(nps).bg, fontSize: 13, fontWeight: 600,
                }}>
                  {nps >= 9 && "🌟 Promoter — Das freut uns sehr!"}
                  {nps >= 7 && nps <= 8 && "👍 Zufrieden — Danke für Ihr Feedback!"}
                  {nps <= 6 && "📝 Wir wollen uns verbessern."}
                </div>
              )}

              {/* Submit */}
              <div>
                <button onClick={handleNpsSubmit} disabled={nps === null} data-rf="pribtn" style={{
                  width: "100%", padding: 14, borderRadius: 12, border: "none",
                  background: nps !== null ? B : "#E2E8F0",
                  fontSize: 15, fontWeight: 700, fontFamily: "inherit",
                  cursor: nps !== null ? "pointer" : "default",
                  opacity: nps === null ? 0.6 : 1, transition: "all 0.2s",
                }}>
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 1: Promoter → Google Review ── */}
          {step === 1 && isPromoter && (
            <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: mob ? "24px 18px" : "32px 28px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 10 }}>⭐</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 8px" }}>
                Ihre Bewertung bedeutet uns viel!
              </h3>
              <p data-rf="body" style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 22px" }}>
                Würden Sie sich 2 Minuten Zeit nehmen und Ihre Erfahrung auf Google teilen?
                Das hilft anderen Unternehmen, uns zu finden.
              </p>

              {/* Inspiration Box */}
              <div style={{ background: "#f0f4f7", borderRadius: 12, padding: mob ? "14px 14px" : "16px 20px", marginBottom: 22, textAlign: "left" }}>
                <p style={{ fontSize: 12, fontWeight: 700, margin: "0 0 10px" }}>Inspiration für Ihre Bewertung:</p>
                {[
                  "Welches Problem hatten Sie vor TalentSuite?",
                  "Wie hat TalentSuite geholfen?",
                  "Welche konkreten Ergebnisse haben Sie erzielt?"
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                    <span data-rf="accent" style={{ fontSize: 12 }}>→</span>
                    <span data-rf="body" style={{ fontSize: 13 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Google Review Button */}
              <a href="https://g.page/talentsuite/review" target="_blank" rel="noopener noreferrer"
                data-rf="pribtn" style={{
                  display: "block", padding: 14, borderRadius: 12, textDecoration: "none",
                  background: B, textAlign: "center", fontSize: 15, fontWeight: 700,
                }}>
                ⭐ Jetzt auf Google bewerten →
              </a>

              <button onClick={() => setStep(2)} style={{
                marginTop: 14, background: "none", border: "none", fontSize: 12,
                cursor: "pointer", textDecoration: "underline", fontFamily: "inherit",
              }} data-rf="gray">
                Lieber nicht, danke
              </button>
            </div>
          )}

          {/* ── STEP 1: Passive/Detractor → Feedback Form ── */}
          {step === 1 && !isPromoter && (
            <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: mob ? "24px 18px" : "32px 28px" }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 6px" }}>
                {isPassive ? "Was können wir besser machen?" : "Wir nehmen Ihr Feedback ernst."}
              </h3>
              <p data-rf="gray" style={{ fontSize: 13, margin: "0 0 18px" }}>
                {isPassive
                  ? "Ihr Feedback hilft uns, von \u201egut\u201c zu \u201eherausragend\u201c zu kommen."
                  : "Bitte teilen Sie uns mit, was wir verbessern können. Robert Engel wird sich persönlich bei Ihnen melden."}
              </p>

              <textarea placeholder="Was hätten wir besser machen können?" value={feedback}
                onChange={e => setFeedback(e.target.value)}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 10,
                  border: "2px solid #cdd8e0", fontSize: 14, minHeight: 110,
                  resize: "vertical", boxSizing: "border-box",
                  fontFamily: "inherit", outline: "none", background: W,
                }} />

              <button onClick={handleFeedbackSubmit} data-rf="pribtn" style={{
                width: "100%", padding: 14, borderRadius: 12, border: "none", marginTop: 14,
                background: B, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              }}>
                Feedback absenden
              </button>
            </div>
          )}

          {/* ── STEP 2: Thank You ── */}
          {step === 2 && (
            <div style={{ background: "#ECFDF5", borderRadius: 16, padding: mob ? "28px 20px" : "36px 32px", textAlign: "center", boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 48 }}>🙏</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "12px 0 8px" }} data-rf="success">
                Vielen Dank für Ihre Zeit!
              </h3>
              <p style={{ fontSize: 14, margin: "0 0 20px", lineHeight: 1.6 }} data-rf="success-body">
                {isPromoter
                  ? "Ihre Bewertung hilft anderen Unternehmen, den richtigen Partner für ihre Fachkräftesuche zu finden."
                  : "Wir werden Ihr Feedback sorgfältig prüfen. Robert Engel meldet sich persönlich bei Ihnen."}
              </p>
              <a href="https://www.talentsuite.io" style={{
                display: "inline-block", padding: "11px 28px", background: G, borderRadius: 10,
                textDecoration: "none", fontSize: 14, fontWeight: 700,
              }} data-rf="pribtn">
                Zurück zu TalentSuite
              </a>
            </div>
          )}

          {/* Trust Elements */}
          <div style={{ display: "flex", justifyContent: "center", gap: mob ? 16 : 28, marginTop: 28, flexWrap: "wrap" }}>
            {["🔒 100% vertraulich", "⏱ Dauert nur 2 Min.", "❤️ Hilft uns enorm"].map((t, i) => (
              <span key={i} data-rf="gray" style={{ fontSize: 11 }}>{t}</span>
            ))}
          </div>

          <p data-rf="gray" style={{ textAlign: "center", fontSize: 11, padding: "20px 0 0" }}>
            TalentSuite — Performance Recruiting für den Mittelstand
          </p>
        </div>
      </div>
    </>
  );
}
