"use client";
import React, { useState } from "react";
import Head from "next/head";

/*
 * NUCLEAR CSS OVERRIDE STRATEGY:
 * globals.css uses: span, p, h1-h6, li { color: white !important }
 * 
 * We inject a <style> tag into <head> with:
 * #dc#dc#dc span, #dc#dc#dc p, etc. { color: #023B5B !important }
 * 
 * Triple-ID = specificity (3,0,1) which always beats (0,0,1) from globals
 * Both have !important, so specificity decides = we win.
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
    { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B" },
    { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat" },
    { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2–3 Sätze..." },
    { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub..." },
    { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Schrift","Video","Beides","Nein"] },
    { key: "maBilder", label: "Mitarbeiter-Bilder?", type: "chips", opts: ["Ja","Stock","Vor-Ort planen"] },
    { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
  ]},
  { id: "creatives", icon: "🎨", label: "2.4 Creatives", fields: [
    { key: "material", label: "Foto-/Videomaterial?", type: "chips", opts: ["Fotos","Videos","Beides","Nein"] },
    { key: "keinMat", label: "Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage","Vor-Ort","N/A"], cond: "material", condVal: "Nein" },
    { key: "zertifikate", label: "Zertifikate?", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
    { key: "logoHQ", label: "Logo HQ?", type: "chips", opts: ["Erhalten","Angefragt","Noch anfragen"] },
    { key: "ortCreatives", label: "Standort Creatives", type: "text", ph: "z.B. Firmengebäude" },
  ]},
  { id: "meta", icon: "📱", label: "2.5 Meta Ads", fields: [
    { key: "fbSeite", label: "Facebook-Seite?", type: "chips", opts: ["Ja","Nein – erstellen"] },
    { key: "fbZugriff", label: "FB-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
    { key: "fbAnfrage", label: "Zugriffsanfrage", type: "chips", opts: ["Erledigt","Ausstehend"] },
  ]},
  { id: "google", icon: "🔍", label: "2.6 Google Ads", hint: "Nur bei Bachelor+ Jobs.", fields: [
    { key: "gRelevant", label: "Google Ads relevant?", type: "chips", opts: ["Ja","Nein"] },
    { key: "gKonto", label: "Konto vorhanden?", type: "chips", opts: ["Ja","Nein"], cond: "gRelevant", condVal: "Ja" },
    { key: "gZugriff", label: "Zugriffsrechte?", type: "text", ph: "Name", cond: "gRelevant", condVal: "Ja" },
  ]},
  { id: "bewerbungen", icon: "📨", label: "2.7 Bewerbungen", fields: [
    { key: "kontaktPerson", label: "Bewerber-Kontakt?", type: "text", ph: "Name + Telefon" },
    { key: "erstgespraechTS", label: "Erstgespräch durch TS?", type: "chips", opts: ["Ja (Upsell!)","Nein"] },
  ]},
  { id: "abschluss", icon: "✅", label: "Abschluss", fields: [
    { key: "paket", label: "Paket", type: "chips", opts: ["Starter (990€)","Professional (1.490€)","Premium (2.490€)","Enterprise"] },
    { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat","3 Monate","6 Monate","12 Monate"] },
    { key: "start", label: "Startdatum", type: "text", ph: "z.B. 01.03.2026" },
    { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden..." },
    { key: "notizen", label: "Notizen", type: "textarea", ph: "Sonstiges..." },
    { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot","🟡 Warm","🔵 Kalt","❌ Kein Fit"] },
  ]},
];

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
    let t = `📋 ONBOARDING CALL – ${d.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    SOP.forEach((sec) => {
      if (skip[sec.id]) return;
      const has = sec.fields.some((f) => d[f.key] && d[f.key] !== "");
      if (!has) return;
      t += `${sec.icon} ${sec.label.toUpperCase()}\n──────────\n`;
      sec.fields.forEach((f) => {
        if (f.cond && d[f.cond] !== f.condVal) return;
        if (d[f.key]) t += `${f.label}: ${d[f.key]}\n`;
      });
      t += `\n`;
    });
    return t;
  };
  const copy = () => { navigator.clipboard.writeText(genText()); setCopied(true); setTimeout(() => setCopied(false), 3000); };
  const sec = SOP.find((s) => s.id === active);
  const idx = SOP.findIndex((s) => s.id === active);

  // Style constants
  const B = "#023B5B";
  const W = "#ffffff";
  const BL = "#E8F4FD";
  const BD = "#cdd8e0";
  const G = "#10B981";

  return (
    <div id="dc" style={{ background: "#f0f4f7", padding: "28px 0 60px", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 16px", display: "flex", gap: 24 }}>
        
        {/* SIDEBAR */}
        <div style={{ width: 260, flexShrink: 0, background: W, borderRadius: 16, padding: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "sticky", top: 100, alignSelf: "flex-start" }}>
          <div style={{ fontSize: 15, fontWeight: 700, padding: "6px 10px 14px", borderBottom: "1px solid #e8edf1", marginBottom: 6 }}>📞 Onboarding Call</div>
          {SOP.map((s) => {
            const p = prog(s);
            const isAct = active === s.id;
            const isDone = p.f === p.t && p.t > 0;
            return (
              <button key={s.id} onClick={() => setActive(s.id)} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px",
                borderRadius: 10, border: "none", background: isAct ? BL : "transparent",
                cursor: "pointer", textAlign: "left", marginBottom: 2, fontFamily: "inherit",
                opacity: skip[s.id] ? 0.4 : 1,
              }}>
                <div style={{ fontSize: 16, lineHeight: 1 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div data-dc="lbl" style={{ fontSize: 13, fontWeight: isAct ? 700 : 500 }}>{s.label}</div>
                  <div data-dc="cnt" style={{ fontSize: 11 }}>{skip[s.id] ? "Skip" : `${p.f} / ${p.t}`}</div>
                </div>
                {isDone && !skip[s.id] && <div data-dc="ok" style={{ fontSize: 14, fontWeight: 700 }}>✓</div>}
              </button>
            );
          })}
          <button onClick={copy} data-dc="copybtn" style={{
            width: "100%", padding: "13px 16px", borderRadius: 10, border: "none",
            background: copied ? G : B, fontSize: 13, fontWeight: 700, cursor: "pointer",
            marginTop: 10, fontFamily: "inherit",
          }}>
            {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
          </button>
        </div>

        {/* MAIN */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ background: W, borderRadius: 16, padding: 32, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e8edf1" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 26 }}>{sec.icon}</div>
                  <div data-dc="title" style={{ fontSize: 20, fontWeight: 700 }}>{sec.label}</div>
                </div>
                {sec.hint && <div data-dc="hint" style={{ fontSize: 12, fontWeight: 500, marginTop: 4, marginLeft: 36 }}>{`⚠️ ${sec.hint}`}</div>}
              </div>
              {sec.optional && (
                <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} style={{ padding: "6px 16px", borderRadius: 8, fontSize: 12, border: `1.5px solid ${BD}`, background: W, cursor: "pointer", fontFamily: "inherit" }}>
                  {skip[active] ? "Aktivieren" : "Überspringen"}
                </button>
              )}
            </div>

            {!skip[active] ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {sec.fields.map((f) => {
                  if (f.cond && d[f.cond] !== f.condVal) return null;
                  if (f.type === "text") return (
                    <div key={f.key}>
                      <div data-dc="label" style={{ fontSize: 14, fontWeight: 700, marginBottom: 7 }}>{f.label}</div>
                      <input type="text" data-dc="input" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${d[f.key] ? B : BD}`, fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: d[f.key] ? "#f8fbff" : W }} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} />
                    </div>
                  );
                  if (f.type === "textarea") return (
                    <div key={f.key}>
                      <div data-dc="label" style={{ fontSize: 14, fontWeight: 700, marginBottom: 7 }}>{f.label}</div>
                      <textarea data-dc="input" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${d[f.key] ? B : BD}`, fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", resize: "vertical", background: d[f.key] ? "#f8fbff" : W }} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                    </div>
                  );
                  if (f.type === "chips") return (
                    <div key={f.key}>
                      <div data-dc="label" style={{ fontSize: 14, fontWeight: 700, marginBottom: 7 }}>{f.label}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {f.opts.map((o) => {
                          const sel = d[f.key] === o;
                          return (
                            <button key={o} data-dc="chip" onClick={() => u(f.key, sel ? "" : o)} style={{
                              padding: "9px 18px", borderRadius: 22, border: sel ? `2px solid ${B}` : `1.5px solid ${BD}`,
                              background: sel ? BL : W, fontSize: 13, fontWeight: sel ? 700 : 500,
                              cursor: "pointer", fontFamily: "inherit",
                            }}>
                              {sel && "✓ "}{o}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                  return null;
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div>Übersprungen</div>
                <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} style={{ marginTop: 12, padding: "8px 20px", borderRadius: 8, border: `1.5px solid ${B}`, background: W, cursor: "pointer", fontFamily: "inherit" }}>Doch ausfüllen</button>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #e8edf1" }}>
              <button onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0} style={{ padding: "11px 24px", borderRadius: 10, border: `1.5px solid ${B}`, background: W, fontSize: 14, fontWeight: 600, cursor: idx === 0 ? "not-allowed" : "pointer", fontFamily: "inherit", opacity: idx === 0 ? 0.3 : 1 }}>← Zurück</button>
              {idx < SOP.length - 1 ? (
                <button data-dc="pribtn" onClick={() => setActive(SOP[idx + 1].id)} style={{ padding: "11px 28px", borderRadius: 10, border: "none", background: B, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Weiter →</button>
              ) : (
                <button data-dc="pribtn" onClick={copy} style={{ padding: "11px 28px", borderRadius: 10, border: "none", background: copied ? G : B, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}</button>
              )}
            </div>
          </div>
          <details style={{ marginTop: 12 }}>
            <summary data-dc="summary" style={{ fontSize: 13, cursor: "pointer", padding: "8px 0" }}>📄 Vorschau ClickUp-Text</summary>
            <pre style={{ background: "#0f172a", padding: 20, borderRadius: 12, fontSize: 12, lineHeight: 1.7, whiteSpace: "pre-wrap", maxHeight: 400, overflow: "auto" }}>{genText()}</pre>
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

      {!auth ? (
        <div id="dc-login" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", background: "#f0f4f7" }}>
          <div style={{ background: "#ffffff", borderRadius: 20, padding: "48px 40px", boxShadow: "0 4px 30px rgba(0,0,0,0.12)", maxWidth: 440, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Onboarding Call Tool</h2>
            <p data-dc="loginp" style={{ fontSize: 14, marginBottom: 28 }}>Internes Tool für das TalentSuite Team.<br />Bitte Passwort eingeben um fortzufahren.</p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="password"
                style={{ flex: 1, padding: "14px 18px", borderRadius: 12, border: `2px solid ${err ? "#ef4444" : "#cdd8e0"}`, fontSize: 15, outline: "none", background: "#ffffff", fontFamily: "inherit" }}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setErr(false); }}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Passwort eingeben..."
                autoFocus
              />
              <button data-dc="loginbtn" onClick={login} style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "#023B5B", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>Anmelden →</button>
            </div>
            {err && <div data-dc="loginerr" style={{ fontSize: 13, marginTop: 8 }}>Falsches Passwort.</div>}
          </div>
        </div>
      ) : (
        <SopTool />
      )}
    </>
  );
}
