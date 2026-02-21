"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const B = "#023B5B", A = "#1B98E0", G = "#10B981", D = "#011E2F", GR = "#64748B", W = "#ffffff", L = "#f0f4f7";

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

const branches = [
  { name: "Handwerk", stellen: "178.000", tti: "95 Tage", cpa: "15-22 €", conv: "12-16%", cost: "8.400 €/Mon." },
  { name: "Pflege", stellen: "152.000", tti: "110 Tage", cpa: "18-28 €", conv: "14-18%", cost: "9.500 €/Mon." },
  { name: "Logistik", stellen: "98.000", tti: "85 Tage", cpa: "14-20 €", conv: "13-17%", cost: "6.800 €/Mon." },
  { name: "Gastro", stellen: "87.000", tti: "70 Tage", cpa: "10-18 €", conv: "15-22%", cost: "5.200 €/Mon." },
  { name: "Industrie", stellen: "115.000", tti: "90 Tage", cpa: "16-25 €", conv: "11-15%", cost: "9.200 €/Mon." },
];

export default function BranchenreportPage() {
  const mob = useIsMobile();
  const [selected, setSelected] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const b = branches[selected];
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const phoneClean = phone.replace(/[\s\-\/\(\)]/g, "");
  const phoneValid = /^(\+?[0-9]{7,15})$/.test(phoneClean);
  const canSubmit = name && emailValid && phoneValid && dsgvo;

  return (
    <>
      <Head>
        <title>Branchenreport 2026 | TalentSuite</title>
        <meta name="description" content="Aktuelle Recruiting-Kennzahlen für die 5 am stärksten betroffenen Branchen im DACH-Raum. Kostenloser Download." />
      </Head>

      <div id="br" style={{ background: L, minHeight: "60vh" }}>

        {/* Hero */}
        <div style={{
          background: `linear-gradient(135deg, ${D}, ${B})`,
          padding: mob ? "40px 20px 60px" : "52px 20px 72px",
          textAlign: "center",
        }}>
          <div style={{
            display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16,
            background: `${A}22`,
          }}>
            <span data-br="accent" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3 }}>BRANCHENREPORT 2026</span>
          </div>

          <h1 style={{
            fontSize: mob ? "clamp(22px, 5.5vw, 28px)" : "clamp(26px, 3vw, 36px)",
            fontWeight: 800, lineHeight: 1.2, maxWidth: 560, margin: "0 auto 14px",
          }} data-br="white">
            {"Fachkräftemangel: "}<span data-br="accent">Zahlen & Benchmarks</span>
          </h1>
          <p data-br="muted" style={{ fontSize: mob ? 14 : 15, maxWidth: 460, margin: "0 auto", lineHeight: 1.5 }}>
            Aktuelle Recruiting-Kennzahlen für die 5 am stärksten betroffenen Branchen im DACH-Raum.
          </p>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 640, margin: mob ? "-32px auto 0" : "-40px auto 0", padding: "0 16px 48px" }}>

          {/* Key Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: mob ? 8 : 12, marginBottom: 20 }}>
            {[{ n: "630.000+", l: "Offene Stellen" }, { n: "72%", l: "KMU betroffen" }, { n: "87 Tage", l: "Ø Time-to-Hire" }].map((s, i) => (
              <div key={i} style={{ background: W, borderRadius: 12, padding: mob ? "14px 10px" : "18px 12px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: mob ? 18 : 22, fontWeight: 800 }}>{s.n}</div>
                <div data-br="gray" style={{ fontSize: 11, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Branch Selector Card */}
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.08)", overflow: "hidden", marginBottom: 20 }}>
            {/* Tabs */}
            <div style={{ display: "flex", overflowX: "auto" }}>
              {branches.map((br, i) => (
                <button key={i} onClick={() => setSelected(i)}
                  style={{
                    flex: "1 0 auto", padding: mob ? "11px 12px" : "12px 16px", border: "none",
                    borderBottom: `3px solid ${selected === i ? A : "transparent"}`,
                    background: selected === i ? `${A}08` : "transparent",
                    fontSize: mob ? 11 : 12, fontWeight: 600, cursor: "pointer",
                    whiteSpace: "nowrap", fontFamily: "inherit",
                  }}>
                  <span data-br={selected === i ? "accent" : "gray"}>{br.name}</span>
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div style={{ padding: mob ? "18px 16px" : "24px 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { label: "Offene Stellen", value: b.stellen, color: "#EF4444" },
                  { label: "Ø Time-to-Hire", value: b.tti, color: "#F59E0B" },
                  { label: "SM Recruiting CPA", value: b.cpa, color: G },
                  { label: "Conversion Rate", value: b.conv, color: G },
                  { label: "Vakanzkosten", value: b.cost, color: "#EF4444" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: L, borderRadius: 10, padding: mob ? "12px 14px" : "14px 16px",
                    gridColumn: i === 4 ? "1 / -1" : undefined,
                  }}>
                    <div data-br="gray" style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{stat.label}</div>
                    <div style={{ fontSize: mob ? 18 : 22, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Report Contents */}
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: mob ? "20px 18px" : "24px 24px", marginBottom: 20 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>Im Report enthalten:</h3>
            {[
              "Detaillierte Branchendaten für alle 5 Branchen",
              "Recruiting-Kanal Vergleich (Jobportale vs. Social Media vs. Headhunter)",
              "Benchmark CPA und Conversion Rates nach Branche",
              "Prognosen für 2026 und strategische Empfehlungen",
              "Vakanzkosten-Rechnung nach Branche und Firmengröße",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                <span data-br="green" style={{ fontSize: 14 }}>✓</span>
                <span data-br="body" style={{ fontSize: 13, lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          {!sent ? (
            <div style={{ background: D, borderRadius: 16, padding: mob ? "24px 18px" : 28 }}>
              <h3 data-br="white" style={{ fontSize: mob ? 17 : 19, fontWeight: 700, margin: "0 0 4px", textAlign: "center" }}>Vollständigen Report herunterladen</h3>
              <p data-br="muted" style={{ fontSize: 13, margin: "0 0 18px", textAlign: "center" }}>20+ Seiten Daten, Benchmarks und Handlungsempfehlungen — kostenlos.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420, margin: "0 auto" }}>
                <input type="text" placeholder="Ihr Name" value={name} onChange={e => setName(e.target.value)}
                  style={{ padding: "12px 14px", borderRadius: 10, border: "2px solid #334155", background: "#0A1628", fontSize: 14, outline: "none", fontFamily: "inherit", color: W, boxSizing: "border-box" }} />
                <div>
                  <input type="email" placeholder="E-Mail-Adresse" value={email} onChange={e => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `2px solid ${email && !emailValid ? "#F87171" : "#334155"}`, background: "#0A1628", fontSize: 14, outline: "none", fontFamily: "inherit", color: W, boxSizing: "border-box" }} />
                  {email && !emailValid && <p style={{ color: "#F87171", fontSize: 11, marginTop: 4 }}>Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>}
                </div>
                <div>
                  <input type="tel" placeholder="Telefonnummer" value={phone} onChange={e => setPhone(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `2px solid ${phone && !phoneValid ? "#F87171" : "#334155"}`, background: "#0A1628", fontSize: 14, outline: "none", fontFamily: "inherit", color: W, boxSizing: "border-box" }} />
                  {phone && !phoneValid && <p style={{ color: "#F87171", fontSize: 11, marginTop: 4 }}>Bitte geben Sie eine gültige Telefonnummer ein.</p>}
                </div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginTop: 4 }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)}
                    style={{ width: 18, height: 18, marginTop: 2, accentColor: A, flexShrink: 0 }} />
                  <span style={{ color: `${W}70`, fontSize: 11, lineHeight: 1.5 }}>
                    {"Ich stimme der "}
                    <a href="/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: A, textDecoration: "underline" }}>Datenschutzerklärung</a>
                    {" zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden."}
                  </span>
                </label>
                <button data-br="pribtn" onClick={() => {
                  if (!canSubmit) return;
                  setSent(true);
                  fetch("/api/leadmagnet-capture", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      source: "branchenreport",
                      name,
                      email,
                      phone,
                      extra: { selectedBranch: branches[selected]?.name },
                    }),
                  }).catch(err => console.error("Lead capture error:", err));
                }}
                  disabled={!canSubmit}
                  style={{
                    padding: "14px 24px", background: canSubmit ? A : `${W}15`, border: "none", borderRadius: 10,
                    fontSize: 14, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                    whiteSpace: "nowrap", color: W, opacity: canSubmit ? 1 : 0.5,
                  }}>
                  {"Report herunterladen →"}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ background: "#ECFDF5", borderRadius: 16, padding: mob ? "24px 18px" : 28, textAlign: "center", boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
              <div data-br="green" style={{ fontSize: 28 }}>✓</div>
              <p data-br="success" style={{ fontSize: 16, fontWeight: 700, margin: "8px 0 4px" }}>Report wird gesendet!</p>
              <p data-br="success-body" style={{ fontSize: 13 }}>{"Check Ihr Postfach — " + email}</p>
            </div>
          )}

          <p data-br="gray" style={{ textAlign: "center", fontSize: 11, padding: "24px 0 0" }}>
            TalentSuite — Performance Recruiting für den Mittelstand
          </p>
        </div>
      </div>
    </>
  );
}
