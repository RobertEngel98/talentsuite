"use client";
import React, { useState } from "react";
import Head from "next/head";

/*
 * PROBLEM: globals.css has:
 *   h3, h4, h5, h6, span, li, p { color: rgba(255,255,255,0.9) !important; }
 *   h1 { color: var(--text-color) !important; }  (--text-color = #fff)
 *   body { background: #091622 !important; color: #fff; }
 *
 * !important on tag selectors beats inline styles.
 * SOLUTION: Use #dc ID selector + tag + !important = highest specificity wins.
 */

const SOP = [
  { id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen", fields: [
    { key: "firma", label: "Firmenname", type: "text", ph: "z.B. Müller Heizungsbau GmbH" },
    { key: "ansprechpartner", label: "Ansprechpartner", type: "text", ph: "z.B. Thomas Müller" },
    { key: "email", label: "E-Mail", type: "text", ph: "z.B. t.mueller@firma.de" },
    { key: "telefon", label: "Telefon", type: "text", ph: "z.B. 0171 1234567" },
    { key: "branche", label: "Branche", type: "chips", opts: ["SHK","Elektro","Metallbau","Bau","Pflege","Gastronomie","Logistik","KFZ","Industrie","Immobilien","IT","Sonstige"] },
    { key: "mitarbeiter", label: "Mitarbeiteranzahl", type: "chips", opts: ["1–10","11–25","26–50","51–100","100+"] },
    { key: "konkurrenz", label: "Wer ist die Konkurrenz des Kunden?", type: "textarea", ph: "Konkurrenzbetriebe..." },
    { key: "usp", label: "USP – Was unterscheidet den Kunden?", type: "textarea", ph: "Alleinstellungsmerkmale..." },
  ]},
  { id: "stelle", icon: "📋", label: "2.2 Stelleninfo", hint: "Für bis zu 3 Stellen wiederholen.", fields: [
    { key: "berufsbezeichnung", label: "Genaue Berufsbezeichnung", type: "text", ph: "z.B. Anlagenmechaniker SHK" },
    { key: "arbeitszeit", label: "Voll- oder Teilzeit?", type: "chips", opts: ["Vollzeit","Teilzeit","Beides möglich"] },
    { key: "standort", label: "Standort und Suchradius", type: "text", ph: "z.B. Iserlohn, 30km Radius" },
    { key: "besetzung", label: "Besetzungszeitpunkt", type: "chips", opts: ["Sofort","2–4 Wochen","1–3 Monate","Flexibel"] },
    { key: "aufgaben", label: "Aufgaben der Position", type: "textarea", ph: "Was macht der Mitarbeiter im Alltag?" },
    { key: "qualifikationen", label: "Qualifikationsanforderungen", type: "textarea", ph: "Ausbildung, Erfahrung, Zertifikate, Führerschein..." },
    { key: "quereinstieg", label: "Quereinstieg möglich?", type: "chips", opts: ["Ja","Nein"] },
    { key: "quereinstiegDetail", label: "Mindestqualifikationen Quereinstieg", type: "text", ph: "z.B. Handwerkliche Erfahrung", cond: "quereinstieg", condVal: "Ja" },
    { key: "ausschluss", label: "Ausschlusskriterien", type: "textarea", ph: "Was MUSS der Bewerber mitbringen?" },
    { key: "idealkandidat", label: "Idealen Kandidaten beschreiben", type: "textarea", ph: "Traumkandidat..." },
  ]},
  { id: "stelle2", icon: "📋", label: "2.2b Weitere Stelle", optional: true, fields: [
    { key: "beruf2", label: "Berufsbezeichnung (Stelle 2)", type: "text", ph: "z.B. Elektroniker" },
    { key: "zeit2", label: "Voll-/Teilzeit?", type: "chips", opts: ["Vollzeit","Teilzeit","Beides"] },
    { key: "ort2", label: "Standort & Radius", type: "text", ph: "z.B. Hemer, 25km" },
    { key: "aufg2", label: "Aufgaben", type: "textarea", ph: "Aufgaben..." },
    { key: "qual2", label: "Qualifikationen", type: "textarea", ph: "Anforderungen..." },
  ]},
  { id: "landingpage", icon: "🌐", label: "2.3 Landingpage", fields: [
    { key: "ansprache", label: "Du- oder Sie-Form?", type: "chips", opts: ["Du","Sie"] },
    { key: "gendern", label: "Gendern?", type: "chips", opts: ["Ja","Nein"] },
    { key: "logo", label: "Logo vorhanden?", type: "chips", opts: ["Ja – wird zugesendet","Nein"] },
    { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B, Dunkelblau" },
    { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat" },
    { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2–3 Sätze..." },
    { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub..." },
    { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Schrift","Video","Beides","Nein"] },
    { key: "maBilder", label: "Bilder von Mitarbeitern?", type: "chips", opts: ["Ja","Stock nutzen","Vor-Ort planen"] },
    { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
  ]},
  { id: "creatives", icon: "🎨", label: "2.4 Creatives", fields: [
    { key: "material", label: "Foto-/Videomaterial vorhanden?", type: "chips", opts: ["Fotos","Videos","Beides","Nein"] },
    { key: "keinMat", label: "Falls nein: Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage","Vor-Ort","N/A"], cond: "material", condVal: "Nein" },
    { key: "zertifikate", label: "Zertifikate? (FOCUS, DEKRA etc.)", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
    { key: "logoHQ", label: "Logo in hoher Auflösung?", type: "chips", opts: ["Erhalten","Angefragt","Noch anfragen"] },
    { key: "ortCreatives", label: "Standort für Creatives", type: "text", ph: "z.B. Firmengebäude" },
  ]},
  { id: "meta", icon: "📱", label: "2.5 Meta Ads", fields: [
    { key: "fbSeite", label: "Facebook-Seite vorhanden?", type: "chips", opts: ["Ja","Nein – erstellen"] },
    { key: "fbZugriff", label: "Facebook-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
    { key: "fbAnfrage", label: "Zugriffsanfrage TalentSuite", type: "chips", opts: ["Erledigt","Ausstehend"] },
  ]},
  { id: "google", icon: "🔍", label: "2.6 Google Ads", hint: "Nur bei höher qualifizierten Jobs (Bachelor+).", fields: [
    { key: "gRelevant", label: "Google Ads relevant?", type: "chips", opts: ["Ja","Nein"] },
    { key: "gKonto", label: "Google Ads Konto vorhanden?", type: "chips", opts: ["Ja","Nein – erstellen"], cond: "gRelevant", condVal: "Ja" },
    { key: "gZugriff", label: "Zugriffsrechte?", type: "text", ph: "Name", cond: "gRelevant", condVal: "Ja" },
    { key: "gAnfrage", label: "Zugriffsanfrage", type: "chips", opts: ["Erledigt","Ausstehend"], cond: "gRelevant", condVal: "Ja" },
  ]},
  { id: "bewerbungen", icon: "📨", label: "2.7 Bewerbungen", fields: [
    { key: "kontaktPerson", label: "Wer ruft Bewerber am selben/nächsten Tag an?", type: "text", ph: "Name + Telefon" },
    { key: "erstgespraechTS", label: "Erstgespräch durch TalentSuite?", type: "chips", opts: ["Ja (Upsell!)","Nein – Kunde selbst"] },
  ]},
  { id: "abschluss", icon: "✅", label: "Abschluss", fields: [
    { key: "paket", label: "Empfohlenes Paket", type: "chips", opts: ["Starter (ab 990€)","Professional (1.490€)","Premium (2.490€)","Enterprise"] },
    { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat","3 Monate","6 Monate","12 Monate"] },
    { key: "start", label: "Startdatum", type: "text", ph: "z.B. 01.03.2026" },
    { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden, Zugänge anfragen..." },
    { key: "notizen", label: "Sonstige Notizen", type: "textarea", ph: "Alles Wichtige..." },
    { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot","🟡 Warm","🔵 Kalt","❌ Kein Fit"] },
  ]},
];

/* Ultra-specificity CSS: #dc beats any tag-level !important in globals.css */
const OVERRIDE_CSS = `
#dc, #dc *, #dc h1, #dc h2, #dc h3, #dc h4, #dc h5, #dc h6,
#dc p, #dc span, #dc label, #dc div, #dc button, #dc input,
#dc textarea, #dc summary, #dc a, #dc li, #dc details {
  color: #023B5B !important;
  font-family: inherit;
}
#dc {
  background: #f0f4f7 !important;
  padding: 28px 0 60px !important;
  min-height: 70vh !important;
  display: block !important;
}
#dc .dc-layout {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  gap: 24px;
}

/* SIDEBAR */
#dc .dc-side {
  width: 260px;
  flex-shrink: 0;
  background: #ffffff !important;
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  position: sticky;
  top: 100px;
  align-self: flex-start;
}
#dc .dc-side-title {
  font-size: 15px !important;
  font-weight: 700 !important;
  padding: 6px 10px 14px;
  border-bottom: 1px solid #e8edf1;
  margin-bottom: 6px;
}
#dc .dc-sb {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: transparent !important;
  cursor: pointer;
  text-align: left;
  margin-bottom: 2px;
}
#dc .dc-sb:hover { background: #f5f8fb !important; }
#dc .dc-sb-act { background: #E8F4FD !important; }
#dc .dc-sb-skip { opacity: 0.4; }
#dc .dc-sb span { font-size: 16px !important; }
#dc .dc-sb .dc-sb-lbl {
  display: block !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #023B5B !important;
}
#dc .dc-sb-act .dc-sb-lbl { font-weight: 700 !important; }
#dc .dc-sb .dc-sb-cnt {
  font-size: 11px !important;
  color: #8fa8ba !important;
}
#dc .dc-sb .dc-sb-cnt.done {
  color: #10B981 !important;
  font-weight: 600 !important;
}
#dc .dc-sb .dc-sb-ok {
  color: #10B981 !important;
  font-size: 14px !important;
  font-weight: 700 !important;
}
#dc .dc-copy {
  width: 100%;
  padding: 13px 16px;
  border-radius: 10px;
  border: none;
  background: #023B5B !important;
  color: #ffffff !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  cursor: pointer;
  margin-top: 10px;
}
#dc .dc-copy:hover { background: #01294a !important; }
#dc .dc-copy.copied { background: #10B981 !important; }

/* MAIN CARD */
#dc .dc-main { flex: 1; min-width: 0; }
#dc .dc-card {
  background: #ffffff !important;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  margin-bottom: 20px;
}
#dc .dc-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8edf1;
}
#dc .dc-head-row { display: flex; align-items: center; gap: 10px; }
#dc .dc-head h3 {
  font-size: 20px !important;
  font-weight: 700 !important;
  margin: 0 !important;
  line-height: 1.3 !important;
}
#dc .dc-head-hint {
  font-size: 12px !important;
  color: #F59E0B !important;
  font-weight: 500 !important;
  margin: 4px 0 0 36px !important;
}
#dc .dc-skipbtn {
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 12px !important;
  border: 1.5px solid #cdd8e0;
  background: #ffffff !important;
  color: #4a7a94 !important;
  cursor: pointer;
}

/* FIELDS */
#dc .dc-fields { display: flex; flex-direction: column; gap: 18px; }
#dc .dc-lbl {
  display: block !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  color: #023B5B !important;
  margin-bottom: 7px !important;
}
#dc .dc-inp, #dc .dc-ta {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1.5px solid #cdd8e0;
  font-size: 14px !important;
  outline: none;
  box-sizing: border-box;
  background: #ffffff !important;
  color: #023B5B !important;
}
#dc .dc-inp::placeholder, #dc .dc-ta::placeholder { color: #9cb3c4 !important; }
#dc .dc-inp:focus, #dc .dc-ta:focus { border-color: #023B5B; }
#dc .dc-inp.filled, #dc .dc-ta.filled { border-color: #023B5B; background: #f8fbff !important; }
#dc .dc-ta { resize: vertical; }

/* CHIPS */
#dc .dc-chips { display: flex; flex-wrap: wrap; gap: 8px; }
#dc .dc-chip {
  padding: 9px 18px;
  border-radius: 22px;
  border: 1.5px solid #cdd8e0;
  background: #ffffff !important;
  color: #023B5B !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  cursor: pointer;
}
#dc .dc-chip:hover { border-color: #023B5B; background: #f8fbff !important; }
#dc .dc-chip.sel {
  border: 2px solid #023B5B;
  background: #E8F4FD !important;
  font-weight: 700 !important;
}

/* NAV */
#dc .dc-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e8edf1;
}
#dc .dc-outbtn {
  padding: 11px 24px;
  border-radius: 10px;
  border: 1.5px solid #023B5B;
  background: #ffffff !important;
  color: #023B5B !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  cursor: pointer;
}
#dc .dc-outbtn:disabled { opacity: 0.3; cursor: not-allowed; }
#dc .dc-pribtn {
  padding: 11px 28px;
  border-radius: 10px;
  border: none;
  background: #023B5B !important;
  color: #ffffff !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  cursor: pointer;
}
#dc .dc-pribtn:hover { background: #01294a !important; }
#dc .dc-pribtn.copied { background: #10B981 !important; }

/* PREVIEW */
#dc .dc-prev summary { font-size: 13px !important; color: #4a7a94 !important; cursor: pointer; padding: 8px 0; }
#dc .dc-prev pre {
  background: #0f172a !important;
  color: #e2e8f0 !important;
  padding: 20px;
  border-radius: 12px;
  font-size: 12px !important;
  line-height: 1.7;
  white-space: pre-wrap;
  max-height: 400px;
  overflow: auto;
}
#dc .dc-skipped { text-align: center; padding: 40px 0; }
#dc .dc-skipped p { color: #4a7a94 !important; }

/* LOGIN */
#dc-login {
  min-height: 60vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 60px 20px !important;
  background: #f0f4f7 !important;
}
#dc-login, #dc-login *, #dc-login h2, #dc-login p,
#dc-login input, #dc-login button, #dc-login div, #dc-login span {
  color: #023B5B !important;
}
#dc-login .dc-lbox {
  background: #ffffff !important;
  border-radius: 20px;
  padding: 48px 40px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.12);
  max-width: 440px;
  width: 100%;
  text-align: center;
}
#dc-login .dc-lbox h2 {
  font-size: 24px !important;
  font-weight: 700 !important;
  margin-bottom: 8px !important;
  line-height: 1.3 !important;
}
#dc-login .dc-lbox p {
  font-size: 14px !important;
  color: #4a7a94 !important;
  margin-bottom: 28px !important;
}
#dc-login .dc-lrow { display: flex; gap: 8px; }
#dc-login .dc-linp {
  flex: 1;
  padding: 14px 18px;
  border-radius: 12px;
  border: 2px solid #cdd8e0;
  font-size: 15px !important;
  outline: none;
  color: #023B5B !important;
  background: #ffffff !important;
}
#dc-login .dc-linp:focus { border-color: #023B5B; }
#dc-login .dc-linp.err { border-color: #ef4444; }
#dc-login .dc-lgo {
  padding: 14px 28px;
  border-radius: 12px;
  border: none;
  background: #023B5B !important;
  color: #ffffff !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  cursor: pointer;
  white-space: nowrap;
}
#dc-login .dc-lerr { font-size: 13px !important; color: #ef4444 !important; margin-top: 8px; }

/* RESPONSIVE */
@media (max-width: 991px) {
  #dc .dc-layout { flex-direction: column; }
  #dc .dc-side { width: 100%; position: static; }
  #dc .dc-card { padding: 24px 20px; }
  #dc .dc-head { flex-direction: column; gap: 10px; }
  #dc-login .dc-lbox { padding: 32px 24px; }
}
`;

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
      const has = sec.fields.some((f) => d[f.key] && d[f.key] !== "");
      if (!has) return;
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
    <div id="dc">
      <div className="dc-layout">
        <div className="dc-side">
          <div className="dc-side-title">📞 Onboarding Call</div>
          {SOP.map((s) => {
            const p = prog(s);
            const isAct = active === s.id;
            const isDone = p.f === p.t && p.t > 0;
            return (
              <button key={s.id} onClick={() => setActive(s.id)}
                className={`dc-sb ${isAct ? "dc-sb-act" : ""} ${skip[s.id] ? "dc-sb-skip" : ""}`}>
                <span>{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <span className="dc-sb-lbl">{s.label}</span>
                  <span className={`dc-sb-cnt ${isDone ? "done" : ""}`}>{skip[s.id] ? "Skip" : `${p.f} / ${p.t}`}</span>
                </div>
                {isDone && !skip[s.id] && <span className="dc-sb-ok">✓</span>}
              </button>
            );
          })}
          <button onClick={copy} className={`dc-copy ${copied ? "copied" : ""}`}>
            {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
          </button>
        </div>

        <div className="dc-main">
          <div className="dc-card">
            <div className="dc-head">
              <div>
                <div className="dc-head-row">
                  <span style={{ fontSize: 26 }}>{sec.icon}</span>
                  <h3>{sec.label}</h3>
                </div>
                {sec.hint && <p className="dc-head-hint">⚠️ {sec.hint}</p>}
              </div>
              {sec.optional && (
                <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} className="dc-skipbtn">
                  {skip[active] ? "Aktivieren" : "Überspringen"}
                </button>
              )}
            </div>

            {!skip[active] ? (
              <div className="dc-fields">
                {sec.fields.map((f) => {
                  if (f.cond && d[f.cond] !== f.condVal) return null;
                  if (f.type === "text") return (
                    <div key={f.key}>
                      <label className="dc-lbl">{f.label}</label>
                      <input type="text" className={`dc-inp ${d[f.key] ? "filled" : ""}`} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} />
                    </div>
                  );
                  if (f.type === "textarea") return (
                    <div key={f.key}>
                      <label className="dc-lbl">{f.label}</label>
                      <textarea className={`dc-ta ${d[f.key] ? "filled" : ""}`} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                    </div>
                  );
                  if (f.type === "chips") return (
                    <div key={f.key}>
                      <label className="dc-lbl">{f.label}</label>
                      <div className="dc-chips">
                        {f.opts.map((o) => (
                          <button key={o} onClick={() => u(f.key, d[f.key] === o ? "" : o)} className={`dc-chip ${d[f.key] === o ? "sel" : ""}`}>
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
                <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} className="dc-outbtn">Doch ausfüllen</button>
              </div>
            )}

            <div className="dc-nav">
              <button className="dc-outbtn" onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0}>← Zurück</button>
              {idx < SOP.length - 1 ? (
                <button className="dc-pribtn" onClick={() => setActive(SOP[idx + 1].id)}>Weiter →</button>
              ) : (
                <button className={`dc-pribtn ${copied ? "copied" : ""}`} onClick={copy}>{copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}</button>
              )}
            </div>
          </div>
          <details className="dc-prev">
            <summary>📄 Vorschau ClickUp-Text</summary>
            <pre>{genText()}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}

export default function DiscoveryCallPage() {
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);
  const [err, setErr] = useState(false);

  const login = () => {
    if (pw === "talentsuite2026") { setAuth(true); setErr(false); }
    else setErr(true);
  };

  return (
    <>
      <Head>
        <title>Onboarding Call Tool | TalentSuite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: OVERRIDE_CSS }} />

      {!auth ? (
        <div id="dc-login">
          <div className="dc-lbox">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
            <h2>Onboarding Call Tool</h2>
            <p>Internes Tool für das TalentSuite Team.<br />Bitte Passwort eingeben um fortzufahren.</p>
            <div className="dc-lrow">
              <input
                type="password"
                className={`dc-linp ${err ? "err" : ""}`}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setErr(false); }}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Passwort eingeben..."
                autoFocus
              />
              <button onClick={login} className="dc-lgo">Anmelden →</button>
            </div>
            {err && <div className="dc-lerr">Falsches Passwort. Bitte erneut versuchen.</div>}
          </div>
        </div>
      ) : (
        <SopTool />
      )}
    </>
  );
}
