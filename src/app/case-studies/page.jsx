"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const cases = [
  { slug: "shk-sauerland", branche: "SHK", firma: "SHK-Betrieb, Sauerland", bewerbungen: 23, wochen: 4, cpa: "17€", einstellungen: 3, quote: "Erst war ich skeptisch — jetzt haben wir 3 neue Mitarbeiter." },
  { slug: "pflege-nrw", branche: "Pflege", firma: "Pflegedienst, NRW", bewerbungen: 18, wochen: 5, cpa: "22€", einstellungen: 2, quote: "Qualifizierte Pflegekräfte über Social Media — das hätten wir nicht erwartet." },
  { slug: "gastro-koeln", branche: "Gastro", firma: "Restaurant-Gruppe, Köln", bewerbungen: 31, wochen: 3, cpa: "12€", einstellungen: 4, quote: "In 3 Wochen mehr Bewerbungen als in 6 Monaten auf Jobbörsen." },
  { slug: "elektro-hessen", branche: "Elektro", firma: "Elektrobetrieb, Hessen", bewerbungen: 15, wochen: 4, cpa: "19€", einstellungen: 2, quote: "Endlich Elektriker gefunden — und das ohne Headhunter." },
  { slug: "bau-ruhr", branche: "Bau", firma: "Bauunternehmen, Ruhrgebiet", bewerbungen: 27, wochen: 5, cpa: "15€", einstellungen: 3, quote: "Performance Recruiting hat unseren Fachkräftemangel gelöst." },
  { slug: "logistik-nds", branche: "Logistik", firma: "Logistikunternehmen, Niedersachsen", bewerbungen: 20, wochen: 4, cpa: "16€", einstellungen: 2, quote: "LKW-Fahrer über Facebook finden? Funktioniert besser als alles andere." },
];

const branches = ["Alle", "SHK", "Pflege", "Gastro", "Elektro", "Bau", "Logistik"];

export default function CaseStudiesPage() {
  const mob = useIsMobile();
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? cases : cases.filter(c => c.branche === filter);

  return (
    <>
      <Head>
        <title>Case Studies | TalentSuite — Echte Ergebnisse</title>
        <meta name="description" content="Echte Recruiting-Ergebnisse unserer Kunden: 15-31 Bewerbungen in 3-5 Wochen. Case Studies aus SHK, Pflege, Gastro, Elektro, Bau und Logistik." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }} data-track-section="case-studies" data-track-section-name="Case Studies">
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(27,152,224,0.15)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#1B98E0" }}>ECHTE ERGEBNISSE</span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Case Studies: <span style={{ color: "#1B98E0" }}>Unsere Kundenerfolge</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Echte Zahlen. Echte Betriebe. Messbare Ergebnisse.
          </p>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "24px 16px 48px" : "40px 24px 64px" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 32, marginTop: mob ? -24 : -32 }}>
            {branches.map(b => (
              <button key={b} onClick={() => setFilter(b)} style={{
                padding: "8px 18px", borderRadius: 20, border: filter === b ? "2px solid #023B5B" : "1.5px solid #ddd",
                background: filter === b ? "#E8F4FD" : "#ffffff", color: filter === b ? "#023B5B" : "#64748B",
                fontSize: 13, fontWeight: filter === b ? 600 : 400, cursor: "pointer",
              }}>
                {filter === b && "✓ "}{b}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20 }}>
            {filtered.map((c, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "20px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ padding: "4px 12px", borderRadius: 12, background: "#E8F4FD", color: "#023B5B", fontSize: 11, fontWeight: 700 }}>{c.branche}</span>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>{c.firma}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {[{n: c.bewerbungen, l: "Bewerbungen", col: "#1B98E0"}, {n: c.wochen + " Wo.", l: "Laufzeit", col: "#023B5B"}, {n: c.cpa, l: "pro Bewerbung", col: "#10B981"}].map((s, j) => (
                    <div key={j} style={{ textAlign: "center", padding: "10px 4px", background: "#f8fafb", borderRadius: 8 }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: s.col }}>{s.n}</div>
                      <div style={{ fontSize: 10, color: "#64748B" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: "#4A5568", fontSize: 14, fontStyle: "italic", margin: "0 0 16px", lineHeight: 1.5 }}>"{c.quote}"</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#10B981", fontSize: 13, fontWeight: 600 }}>✓ {c.einstellungen} Einstellungen</span>
                  <Link href={"/case-study/" + c.slug} style={{ color: "#1B98E0", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "28px 18px" : "40px 28px", textAlign: "center", marginTop: 32 }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 8px" }}>Bereit für mehr Bewerbungen?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse in 20 Minuten</p>
            <a href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Termin sichern →</a>
          </div>
        </div>
      </div>
    </>
  );
}
