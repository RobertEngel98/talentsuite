"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { trackMetaLead } from "../components/MetaPixel";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function GehaltsBenchmark() {
  const mob = useIsMobile();
  const [email, setEmail] = useState("");
  const [branche, setBranche] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async () => {
    if (!email || !branche) return;
    trackMetaLead({ formName: "gehalts-benchmark", category: "leadmagnet", value: 50 });
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "gehalts-benchmark", name: email.split("@")[0], email,
          industry: branche,
          extra: { branche },
        }),
      });
    } catch (e) { console.error(e); }
  };
  const branches = ["SHK", "Elektro", "Pflege", "Gastronomie", "Bau", "Logistik", "KFZ", "Industrie"];

  return (
    <>
      <Head>
        <title>Gehalts-Benchmark 2026 | TalentSuite</title>
        <meta name="description" content="Kostenloser Gehalts-Benchmark für Fachkräfte: Aktuelle Gehaltsdaten nach Branche und Region." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 60px" : "72px 24px 88px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(27,152,224,0.15)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#1B98E0" }}>KOSTENLOS</span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px" }}>
            Gehalts-Benchmark <span style={{ color: "#1B98E0" }}>2026</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>
            Zahlen Sie Ihren Fachkräften genug? Vergleichen Sie Ihre Gehälter mit dem Branchendurchschnitt.
          </p>
        </div>
        <div style={{ maxWidth: 600, margin: mob ? "-32px auto 0" : "-48px auto 0", padding: "0 16px 48px" }}>
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "36px 28px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            {!sent ? (<>
              <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 4px", textAlign: "center" }}>Ihr Benchmark anfordern</h2>
              <p style={{ color: "#64748B", fontSize: 14, textAlign: "center", margin: "0 0 24px" }}>Aktuelle Gehaltsdaten für Ihre Branche und Region</p>
              {["Durchschnittsgehälter nach Position und Erfahrung", "Regionale Gehaltsunterschiede (DACH)", "Welche Benefits Fachkräfte wirklich erwarten", "Konkrete Handlungsempfehlungen"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#10B981", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#023B5B", display: "block", marginBottom: 6 }}>Ihre Branche</label>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {branches.map(b => (
                    <button key={b} onClick={() => setBranche(b)} style={{ padding: "6px 14px", borderRadius: 16, fontSize: 12, border: branche === b ? "2px solid #023B5B" : "1.5px solid #ddd", background: branche === b ? "#E8F4FD" : "#fff", color: branche === b ? "#023B5B" : "#64748B", fontWeight: branche === b ? 600 : 400, cursor: "pointer" }}>{b}</button>
                  ))}
                </div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#023B5B", display: "block", marginBottom: 6 }}>Ihre E-Mail</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ihre@email.de" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #ddd", fontSize: 15, outline: "none", boxSizing: "border-box", color: "#023B5B", marginBottom: 16 }} />
                <button onClick={handleSubmit} style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>Benchmark kostenlos erhalten →</button>
                <p style={{ textAlign: "center", fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Kein Spam · Sofortiger Download · DSGVO-konform</p>
              </div>
            </>) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
                <h2 style={{ color: "#10B981", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Benchmark wird gesendet!</h2>
                <p style={{ color: "#64748B", fontSize: 15 }}>Prüfen Sie Ihr Postfach — {email}</p>
                <a href="/recruiting-analyse" style={{ display: "inline-block", marginTop: 20, padding: "12px 28px", borderRadius: 10, background: "#023B5B", color: "#ffffff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Jetzt kostenlose Recruiting-Analyse buchen →</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
