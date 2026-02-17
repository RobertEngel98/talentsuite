"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

// ============================================================
// ONBOARDING CALL TOOL (nur intern, passwortgeschützt)
// Passwort: talentsuite2026
// ============================================================

// SOP Phase 2 Sektionen
const SOP = [
  {
    id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen",
    fields: [
      { key: "firma", label: "Firmenname", type: "text", ph: "z.B. Müller Heizungsbau GmbH" },
      { key: "ansprechpartner", label: "Ansprechpartner", type: "text", ph: "z.B. Thomas Müller" },
      { key: "email", label: "E-Mail", type: "text", ph: "z.B. t.mueller@firma.de" },
      { key: "telefon", label: "Telefon", type: "text", ph: "z.B. 0171 1234567" },
      { key: "branche", label: "Branche", type: "chips", opts: ["SHK", "Elektro", "Metallbau", "Bau", "Pflege", "Gastronomie", "Logistik", "KFZ", "Industrie", "Immobilien", "IT", "Sonstige"] },
      { key: "mitarbeiter", label: "Mitarbeiteranzahl", type: "chips", opts: ["1–10", "11–25", "26–50", "51–100", "100+"] },
      { key: "konkurrenz", label: "Wer ist die Konkurrenz des Kunden?", type: "textarea", ph: "Konkurrenzbetriebe..." },
      { key: "usp", label: "USP – Was unterscheidet den Kunden?", type: "textarea", ph: "Alleinstellungsmerkmale..." },
    ],
  },
  {
    id: "stelle", icon: "📋", label: "2.2 Stelleninfo",
    hint: "Für bis zu 3 Stellen wiederholen.",
    fields: [
      { key: "berufsbezeichnung", label: "Genaue Berufsbezeichnung", type: "text", ph: "z.B. Anlagenmechaniker SHK" },
      { key: "arbeitszeit", label: "Voll- oder Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides möglich"] },
      { key: "standort", label: "Standort und Suchradius", type: "text", ph: "z.B. Iserlohn, 30km Radius" },
      { key: "besetzung", label: "Besetzungszeitpunkt", type: "chips", opts: ["Sofort", "2–4 Wochen", "1–3 Monate", "Flexibel"] },
      { key: "aufgaben", label: "Aufgaben der Position", type: "textarea", ph: "Was macht der Mitarbeiter im Alltag?" },
      { key: "qualifikationen", label: "Qualifikationsanforderungen", type: "textarea", ph: "Ausbildung, Erfahrung, Zertifikate, Führerschein..." },
      { key: "quereinstieg", label: "Quereinstieg möglich?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "quereinstiegDetail", label: "Mindestqualifikationen bei Quereinstieg", type: "text", ph: "z.B. Handwerkliche Erfahrung", cond: "quereinstieg", condVal: "Ja" },
      { key: "ausschluss", label: "Ausschlusskriterien", type: "textarea", ph: "Was MUSS der Bewerber mitbringen?" },
      { key: "idealkandidat", label: "Idealen Kandidaten beschreiben", type: "textarea", ph: "Traumkandidat..." },
    ],
  },
  {
    id: "stelle2", icon: "📋", label: "2.2b Weitere Stelle", optional: true,
    fields: [
      { key: "beruf2", label: "Berufsbezeichnung (Stelle 2)", type: "text", ph: "z.B. Elektroniker" },
      { key: "zeit2", label: "Voll-/Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides"] },
      { key: "ort2", label: "Standort & Radius", type: "text", ph: "z.B. Hemer, 25km" },
      { key: "aufg2", label: "Aufgaben", type: "textarea", ph: "Aufgaben..." },
      { key: "qual2", label: "Qualifikationen", type: "textarea", ph: "Anforderungen..." },
    ],
  },
  {
    id: "landingpage", icon: "🌐", label: "2.3 Landingpage",
    fields: [
      { key: "ansprache", label: "Du- oder Sie-Form?", type: "chips", opts: ["Du", "Sie"] },
      { key: "gendern", label: "Gendern?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "logo", label: "Logo vorhanden?", type: "chips", opts: ["Ja – wird zugesendet", "Nein"] },
      { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B, Dunkelblau" },
      { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat" },
      { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2–3 Sätze..." },
      { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub..." },
      { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Schrift", "Video", "Beides", "Nein"] },
      { key: "maBilder", label: "Bilder von Mitarbeitern?", type: "chips", opts: ["Ja", "Stock nutzen", "Vor-Ort planen"] },
      { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
    ],
  },
  {
    id: "creatives", icon: "🎨", label: "2.4 Creatives",
    fields: [
      { key: "material", label: "Foto-/Videomaterial vorhanden?", type: "chips", opts: ["Fotos", "Videos", "Beides", "Nein"] },
      { key: "keinMat", label: "Falls nein: Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage", "Vor-Ort", "N/A"], cond: "material", condVal: "Nein" },
      { key: "zertifikate", label: "Zertifikate? (FOCUS, DEKRA etc.)", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
      { key: "logoHQ", label: "Logo in hoher Auflösung?", type: "chips", opts: ["Erhalten", "Angefragt", "Noch anfragen"] },
      { key: "ortCreatives", label: "Standort für Creatives", type: "text", ph: "z.B. Firmengebäude" },
    ],
  },
  {
    id: "meta", icon: "📱", label: "2.5 Meta Ads",
    fields: [
      { key: "fbSeite", label: "Facebook-Seite vorhanden?", type: "chips", opts: ["Ja", "Nein – erstellen"] },
      { key: "fbZugriff", label: "Facebook-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
      { key: "fbAnfrage", label: "Zugriffsanfrage TalentSuite", type: "chips", opts: ["Erledigt", "Ausstehend"] },
    ],
  },
  {
    id: "google", icon: "🔍", label: "2.6 Google Ads",
    hint: "Nur bei höher qualifizierten Jobs (Bachelor+).",
    fields: [
      { key: "gRelevant", label: "Google Ads relevant?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "gKonto", label: "Google Ads Konto vorhanden?", type: "chips", opts: ["Ja", "Nein – erstellen"], cond: "gRelevant", condVal: "Ja" },
      { key: "gZugriff", label: "Zugriffsrechte?", type: "text", ph: "Name", cond: "gRelevant", condVal: "Ja" },
      { key: "gAnfrage", label: "Zugriffsanfrage", type: "chips", opts: ["Erledigt", "Ausstehend"], cond: "gRelevant", condVal: "Ja" },
    ],
  },
  {
    id: "bewerbungen", icon: "📨", label: "2.7 Bewerbungen",
    fields: [
      { key: "kontaktPerson", label: "Wer ruft Bewerber am selben/nächsten Tag an?", type: "text", ph: "Name + Telefon" },
      { key: "erstgespraechTS", label: "Erstgespräch durch TalentSuite?", type: "chips", opts: ["Ja (Upsell!)", "Nein – Kunde selbst"] },
    ],
  },
  {
    id: "abschluss", icon: "✅", label: "Abschluss",
    fields: [
      { key: "paket", label: "Empfohlenes Paket", type: "chips", opts: ["Starter (ab 990€)", "Professional (1.490€)", "Premium (2.490€)", "Enterprise"] },
      { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat", "3 Monate", "6 Monate", "12 Monate"] },
      { key: "start", label: "Startdatum", type: "text", ph: "z.B. 01.03.2026" },
      { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden, Zugänge anfragen..." },
      { key: "notizen", label: "Sonstige Notizen", type: "textarea", ph: "Alles Wichtige..." },
      { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot", "🟡 Warm", "🔵 Kalt", "❌ Kein Fit"] },
    ],
  },
];

// ============================================================
// SOP TOOL
// ============================================================
function SopTool() {
  const [active, setActive] = useState(SOP[0].id);
  const [d, setD] = useState({});
  const [skip, setSkip] = useState({});
  const [copied, setCopied] = useState(false);
  const u = (k, v) => setD((p) => ({ ...p, [k]: v }));

  const prog = (sec) => {
    const vis = sec.fields.filter((f) => !f.cond || d[f.cond] === f.condVal);
    const fill = vis.filter((f) => d[f.key] && d[f.key] !== "");
    return { f: fill.length, t: vis.length };
  };

  const genText = () => {
    let t = `📋 ONBOARDING CALL – ${d.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    SOP.forEach((sec) => {
      if (skip[sec.id]) return;
      const hasData = sec.fields.some((f) => d[f.key] && d[f.key] !== "");
      if (!hasData) return;
      t += `${sec.icon} ${sec.label.toUpperCase()}\n────────────────────\n`;
      sec.fields.forEach((f) => {
        if (f.cond && d[f.cond] !== f.condVal) return;
        if (d[f.key] && d[f.key] !== "") t += `${f.label}: ${d[f.key]}\n`;
      });
      t += `\n`;
    });
    return t;
  };

  const copy = () => { navigator.clipboard.writeText(genText()); setCopied(true); setTimeout(() => setCopied(false), 3000); };
  const sec = SOP.find((s) => s.id === active);
  const idx = SOP.findIndex((s) => s.id === active);

  return (
    <div className="row g-4">
      {/* Sidebar */}
      <div className="col-12 col-lg-3">
        <div className="dc-sidebar">
          <div className="dc-sidebar-title">📞 Onboarding Call</div>
          {SOP.map((s) => {
            const p = prog(s);
            const isActive = active === s.id;
            return (
              <button key={s.id} onClick={() => setActive(s.id)}
                className={`dc-sidebar-btn ${isActive ? "active" : ""} ${skip[s.id] ? "skipped" : ""}`}>
                <span className="dc-sidebar-icon">{s.icon}</span>
                <div className="dc-sidebar-info">
                  <span className="dc-sidebar-label">{s.label}</span>
                  <span className={`dc-sidebar-prog ${p.f === p.t && p.t > 0 ? "done" : ""}`}>
                    {skip[s.id] ? "Übersprungen" : `${p.f} / ${p.t}`}
                  </span>
                </div>
                {p.f === p.t && p.t > 0 && !skip[s.id] && <span className="dc-sidebar-check">✓</span>}
              </button>
            );
          })}
          <button onClick={copy} className={`dc-copy-btn ${copied ? "copied" : ""}`}>
            {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-12 col-lg-9">
        <div className="dc-card">
          <div className="dc-section-header">
            <div>
              <div className="dc-section-top">
                <span className="dc-section-icon">{sec.icon}</span>
                <h3 className="dc-section-title">{sec.label}</h3>
              </div>
              {sec.hint && <p className="dc-hint">⚠️ {sec.hint}</p>}
            </div>
            {sec.optional && (
              <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} className="dc-skip-btn">
                {skip[active] ? "Aktivieren" : "Überspringen"}
              </button>
            )}
          </div>

          {!skip[active] ? (
            <div className="dc-fields">
              {sec.fields.map((f) => {
                if (f.cond && d[f.cond] !== f.condVal) return null;
                if (f.type === "text") return (
                  <div key={f.key} className="dc-field">
                    <label className="dc-label">{f.label}</label>
                    <input type="text" className={`dc-input ${d[f.key] ? "filled" : ""}`} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} />
                  </div>
                );
                if (f.type === "textarea") return (
                  <div key={f.key} className="dc-field">
                    <label className="dc-label">{f.label}</label>
                    <textarea className={`dc-textarea ${d[f.key] ? "filled" : ""}`} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                  </div>
                );
                if (f.type === "chips") return (
                  <div key={f.key} className="dc-field">
                    <label className="dc-label">{f.label}</label>
                    <div className="dc-chips">
                      {f.opts.map((o) => (
                        <button key={o} onClick={() => u(f.key, d[f.key] === o ? "" : o)}
                          className={`dc-chip ${d[f.key] === o ? "selected" : ""}`}>
                          {d[f.key] === o && "✓ "}{o}
                        </button>
                      ))}
                    </div>
                  </div>
                );
                return null;
              })}
            </div>
          ) : (
            <div className="dc-skipped">
              <p>Diese Sektion wurde übersprungen.</p>
              <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} className="dc-btn-outline">Doch ausfüllen</button>
            </div>
          )}

          <div className="dc-nav">
            <button className="dc-btn-outline" onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0}>← Zurück</button>
            {idx < SOP.length - 1 ? (
              <button className="dc-btn-primary" onClick={() => setActive(SOP[idx + 1].id)}>Weiter →</button>
            ) : (
              <button className={`dc-btn-primary ${copied ? "copied" : ""}`} onClick={copy}>
                {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
              </button>
            )}
          </div>
        </div>

        <details className="dc-preview">
          <summary>📄 Vorschau ClickUp-Text</summary>
          <pre>{genText()}</pre>
        </details>
      </div>
    </div>
  );
}

// ============================================================
// HAUPTSEITE
// ============================================================
export default function DiscoveryCallPage() {
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (pw === "talentsuite2026") {
      setAuth(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Onboarding Call Tool | TalentSuite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        /* ============================================ */
        /* DISCOVERY CALL / ONBOARDING TOOL STYLES      */
        /* All text: dark blue on white backgrounds     */
        /* ============================================ */
        :root {
          --dc-brand: #023B5B;
          --dc-brand-light: #E8F4FD;
          --dc-green: #10B981;
          --dc-warn: #F59E0B;
          --dc-bg: #f5f7fa;
          --dc-white: #ffffff;
          --dc-text: #023B5B;
          --dc-text-light: #3a6a87;
          --dc-border: #d0dce5;
        }

        /* === LOGIN SCREEN === */
        .dc-login-wrapper {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
        }
        .dc-login-box {
          background: var(--dc-white);
          border-radius: 20px;
          padding: 48px 40px;
          box-shadow: 0 4px 24px rgba(2,59,91,0.08);
          max-width: 440px;
          width: 100%;
          text-align: center;
        }
        .dc-login-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .dc-login-box h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--dc-text);
          margin-bottom: 8px;
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-login-box p {
          font-size: 14px;
          color: var(--dc-text-light);
          margin-bottom: 28px;
        }
        .dc-login-field {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        .dc-login-input {
          flex: 1;
          padding: 14px 18px;
          border-radius: 12px;
          border: 2px solid var(--dc-border);
          font-size: 15px;
          font-family: inherit;
          outline: none;
          color: var(--dc-text);
          background: var(--dc-white);
          transition: border-color 0.2s;
        }
        .dc-login-input:focus {
          border-color: var(--dc-brand);
        }
        .dc-login-input.error {
          border-color: #ef4444;
        }
        .dc-login-submit {
          padding: 14px 28px;
          border-radius: 12px;
          border: none;
          background: var(--dc-brand);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .dc-login-submit:hover {
          background: #01294a;
        }
        .dc-login-error {
          font-size: 13px;
          color: #ef4444;
          margin-top: 4px;
        }

        /* === CARD === */
        .dc-card {
          background: var(--dc-white);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 2px 16px rgba(2,59,91,0.06);
          margin-bottom: 20px;
        }

        /* === SIDEBAR === */
        .dc-sidebar {
          background: var(--dc-white);
          border-radius: 16px;
          padding: 12px;
          box-shadow: 0 2px 16px rgba(2,59,91,0.06);
          position: sticky;
          top: 100px;
        }
        .dc-sidebar-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--dc-text);
          padding: 8px 10px 12px;
          border-bottom: 1px solid #eef2f5;
          margin-bottom: 6px;
        }
        .dc-sidebar-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          margin-bottom: 2px;
          font-family: inherit;
          transition: background 0.15s;
        }
        .dc-sidebar-btn:hover { background: #f5f8fb; }
        .dc-sidebar-btn.active { background: var(--dc-brand-light); }
        .dc-sidebar-btn.skipped { opacity: 0.4; }
        .dc-sidebar-icon { font-size: 16px; }
        .dc-sidebar-info { flex: 1; }
        .dc-sidebar-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: var(--dc-text);
        }
        .dc-sidebar-btn.active .dc-sidebar-label {
          font-weight: 700;
          color: var(--dc-brand);
        }
        .dc-sidebar-prog {
          font-size: 11px;
          color: #8fa8ba;
        }
        .dc-sidebar-prog.done { color: var(--dc-green); font-weight: 600; }
        .dc-sidebar-check { color: var(--dc-green); font-size: 14px; font-weight: 700; }
        .dc-copy-btn {
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          border: none;
          background: var(--dc-brand);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
          font-family: inherit;
          transition: background 0.2s;
        }
        .dc-copy-btn:hover { background: #01294a; }
        .dc-copy-btn.copied { background: var(--dc-green); }

        /* === SECTION HEADER === */
        .dc-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eef2f5;
        }
        .dc-section-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dc-section-icon { font-size: 26px; }
        .dc-section-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--dc-text);
          margin: 0;
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-hint {
          font-size: 12px;
          color: var(--dc-warn);
          font-weight: 500;
          margin: 4px 0 0 36px;
        }
        .dc-skip-btn {
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 12px;
          border: 1.5px solid var(--dc-border);
          background: var(--dc-white);
          color: var(--dc-text-light);
          cursor: pointer;
          font-family: inherit;
          font-weight: 500;
        }
        .dc-skipped {
          text-align: center;
          padding: 40px 0;
          color: var(--dc-text-light);
        }
        .dc-skipped p { margin-bottom: 12px; }

        /* === FIELDS === */
        .dc-fields {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .dc-field { }
        .dc-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--dc-text);
          margin-bottom: 7px;
        }
        .dc-input, .dc-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1.5px solid var(--dc-border);
          font-size: 14px;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
          background: var(--dc-white);
          color: var(--dc-text);
        }
        .dc-input::placeholder, .dc-textarea::placeholder {
          color: #9cb3c4;
        }
        .dc-input:focus, .dc-textarea:focus {
          border-color: var(--dc-brand);
        }
        .dc-input.filled, .dc-textarea.filled {
          border-color: var(--dc-brand);
          background: #f8fbff;
        }
        .dc-textarea { resize: vertical; }

        /* === CHIPS === */
        .dc-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .dc-chip {
          padding: 9px 18px;
          border-radius: 22px;
          border: 1.5px solid var(--dc-border);
          background: var(--dc-white);
          color: var(--dc-text);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .dc-chip:hover {
          border-color: var(--dc-brand);
          background: #f8fbff;
        }
        .dc-chip.selected {
          border: 2px solid var(--dc-brand);
          background: var(--dc-brand-light);
          color: var(--dc-brand);
          font-weight: 700;
        }

        /* === NAVIGATION === */
        .dc-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #eef2f5;
        }
        .dc-btn-outline {
          padding: 11px 24px;
          border-radius: 10px;
          border: 1.5px solid var(--dc-brand);
          background: var(--dc-white);
          color: var(--dc-brand);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
        }
        .dc-btn-outline:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .dc-btn-primary {
          padding: 11px 28px;
          border-radius: 10px;
          border: none;
          background: var(--dc-brand);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
        }
        .dc-btn-primary:hover { background: #01294a; }
        .dc-btn-primary.copied { background: var(--dc-green); }

        /* === PREVIEW === */
        .dc-preview { margin-top: 12px; }
        .dc-preview summary {
          font-size: 13px;
          color: var(--dc-text-light);
          cursor: pointer;
          padding: 8px 0;
        }
        .dc-preview pre {
          background: #0f172a;
          color: #e2e8f0;
          padding: 20px;
          border-radius: 12px;
          font-size: 12px;
          line-height: 1.7;
          white-space: pre-wrap;
          max-height: 400px;
          overflow: auto;
          margin-top: 8px;
        }

        /* === RESPONSIVE === */
        @media (max-width: 991px) {
          .dc-sidebar { position: static; margin-bottom: 16px; }
          .dc-card { padding: 24px 20px; }
          .dc-section-header { flex-direction: column; gap: 10px; }
          .dc-login-box { padding: 32px 24px; }
        }
      `}</style>

      {/* LOGIN SCREEN */}
      {!auth && (
        <section>
          <div className="dc-login-wrapper">
            <div className="dc-login-box">
              <div className="dc-login-icon">🔒</div>
              <h2>Onboarding Call Tool</h2>
              <p>Internes Tool für das TalentSuite Team.<br />Bitte Passwort eingeben um fortzufahren.</p>
              <div className="dc-login-field">
                <input
                  type="password"
                  className={`dc-login-input ${error ? "error" : ""}`}
                  value={pw}
                  onChange={(e) => { setPw(e.target.value); setError(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Passwort eingeben..."
                  autoFocus
                />
                <button onClick={handleLogin} className="dc-login-submit">
                  Anmelden →
                </button>
              </div>
              {error && <div className="dc-login-error">Falsches Passwort. Bitte erneut versuchen.</div>}
            </div>
          </div>
        </section>
      )}

      {/* SOP TOOL */}
      {auth && (
        <section style={{ padding: "32px 0 60px", background: "var(--dc-bg)" }}>
          <div className="container">
            <SopTool />
          </div>
        </section>
      )}
    </>
  );
}
