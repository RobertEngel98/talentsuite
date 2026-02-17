"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

// ============================================================
// DISCOVERY CALL / ONBOARDING TOOL
// Uses existing website layout (Header/Footer from layout.js)
// Stufe 1: Interessent (öffentlich)
// Stufe 2: SOP-Tool (🔒 intern, Passwort: talentsuite2026)
// ============================================================

const CAL = "https://calendar.app.google/CQpLAnRw8tzQUEQz5";

const BRANCHEN = [
  "SHK (Sanitär, Heizung, Klima)", "Elektro & Elektrotechnik", "Metallbau & Maschinenbau",
  "Baugewerbe & Hochbau", "Pflege & Gesundheitswesen", "Gastronomie & Hotellerie",
  "Logistik & Transport", "Automotive & KFZ", "Industrie & Produktion",
  "Immobilien", "IT & Software", "Sonstige",
];
const MA = ["1–10", "11–25", "26–50", "51–100", "100+"];
const STELLEN = ["1–2", "3–5", "6–10", "10+"];
const HERAUSF = [
  "Zu wenig Bewerbungen", "Falsche/unqualifizierte Bewerber", "Bewerber springen ab",
  "Stellenanzeigen bringen nichts", "Keine Zeit für Recruiting",
  "Hohe Fluktuation", "Konkurrenz zahlt mehr", "Kein Employer Branding",
];
const ZEIT = ["Sofort", "In 2–4 Wochen", "In 1–3 Monaten", "Erstmal informieren"];

// SOP Phase 2 Sektionen
const SOP = [
  {
    id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen",
    fields: [
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

// Testimonials
const TESTIMONIALS = [
  { emoji: "🚚", firma: "Spedition Huckschlag", result: "150+ Lagerlogistiker & 50+ LKW-Fahrer", link: "https://youtu.be/X6YgtmkyGLo" },
  { emoji: "🏒", firma: "Iserlohn Roosters", result: "70 Bewerbungen, 30 eingestellt", link: "https://youtu.be/uUfwkiSFnTs" },
  { emoji: "🏠", firma: "Specht & Partner", result: "5 neue Immobilienmakler", link: "https://youtu.be/e_trKcpqhYA" },
];

// ============================================================
// STUFE 1: ÖFFENTLICHES KURZFORMULAR
// ============================================================
function LeadForm({ onDone }) {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ firma: "", name: "", email: "", tel: "", branche: "", mitarbeiter: "", stellen: "", herausforderungen: [], zeitrahmen: "", anmerkung: "" });
  const u = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const tog = (k, v) => setD((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const steps = [
    {
      t: "Über Sie & Ihr Unternehmen", sub: "Damit wir uns optimal auf das Gespräch vorbereiten können", icon: "👤",
      ok: d.firma && d.name && d.email,
      c: (<>
        <Inp l="Firmenname *" v={d.firma} set={(v) => u("firma", v)} ph="z.B. Müller Heizungsbau GmbH" />
        <Inp l="Ihr Name *" v={d.name} set={(v) => u("name", v)} ph="z.B. Thomas Müller" />
        <Inp l="E-Mail *" v={d.email} set={(v) => u("email", v)} ph="z.B. t.mueller@firma.de" />
        <Inp l="Telefon" v={d.tel} set={(v) => u("tel", v)} ph="z.B. 0171 1234567" />
      </>),
    },
    {
      t: "Branche & Unternehmensgröße", sub: "Hilft uns, branchenspezifische Lösungen vorzubereiten", icon: "🏢",
      ok: d.branche && d.mitarbeiter && d.stellen,
      c: (<>
        <CG l="Branche *" opts={BRANCHEN} val={d.branche} set={(v) => u("branche", v)} />
        <CG l="Mitarbeiteranzahl *" opts={MA} val={d.mitarbeiter} set={(v) => u("mitarbeiter", v)} />
        <CG l="Aktuell offene Stellen *" opts={STELLEN} val={d.stellen} set={(v) => u("stellen", v)} />
      </>),
    },
    {
      t: "Ihre aktuelle Situation", sub: "Was sind Ihre größten Recruiting-Herausforderungen?", icon: "🎯",
      ok: d.herausforderungen.length > 0 && d.zeitrahmen,
      c: (<>
        <div className="dc-field">
          <label className="dc-label">Größte Herausforderungen (mehrere möglich) *</label>
          <div className="dc-chips">
            {HERAUSF.map((h) => <Chip key={h} t={h} on={d.herausforderungen.includes(h)} click={() => tog("herausforderungen", h)} />)}
          </div>
        </div>
        <CG l="Wann sollen Stellen besetzt werden? *" opts={ZEIT} val={d.zeitrahmen} set={(v) => u("zeitrahmen", v)} />
        <div className="dc-field">
          <label className="dc-label">Anmerkungen (optional)</label>
          <textarea className="dc-textarea" value={d.anmerkung} onChange={(e) => u("anmerkung", e.target.value)} placeholder="Bestimmte Positionen, Wünsche..." rows={3} />
        </div>
      </>),
    },
  ];

  const s = steps[step];

  return (
    <div className="dc-form">
      <div className="dc-progress">
        {steps.map((_, i) => <div key={i} className={`dc-progress-bar ${i <= step ? "active" : ""}`} />)}
      </div>
      <div className="dc-step-header">
        <span className="dc-step-icon">{s.icon}</span>
        <span className="dc-step-count">Schritt {step + 1} von {steps.length}</span>
      </div>
      <h3 className="dc-step-title">{s.t}</h3>
      <p className="dc-step-sub">{s.sub}</p>
      <div className="dc-fields">{s.c}</div>
      <div className="dc-nav">
        <button className="dc-btn-back" onClick={() => setStep((x) => x - 1)} disabled={step === 0}>← Zurück</button>
        {step < steps.length - 1 ? (
          <button className="dc-btn-next" onClick={() => setStep((x) => x + 1)} disabled={!s.ok}>Weiter →</button>
        ) : (
          <button className="dc-btn-submit" onClick={() => onDone(d)} disabled={!s.ok}>✓ Absenden & Termin buchen</button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// STUFE 2: SOP TOOL (intern)
// ============================================================
function SopTool({ lead }) {
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
    let t = `📋 ONBOARDING CALL – ${lead?.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    if (lead) {
      t += `👤 KONTAKT (Interessent)\n────────────────────\nFirma: ${lead.firma}\nName: ${lead.name}\nE-Mail: ${lead.email}\nTelefon: ${lead.tel || "-"}\nBranche: ${lead.branche}\nMitarbeiter: ${lead.mitarbeiter}\nStellen: ${lead.stellen}\nHerausforderungen: ${lead.herausforderungen?.join(", ")}\nZeitrahmen: ${lead.zeitrahmen}\n`;
      if (lead.anmerkung) t += `Anmerkungen: ${lead.anmerkung}\n`;
      t += `\n`;
    }
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
    <div className="row">
      {/* Sidebar */}
      <div className="col-12 col-md-3">
        <div className="dc-sidebar">
          {lead && (
            <div className="dc-lead-summary">
              <strong>{lead.firma}</strong><br />
              {lead.name} · {lead.branche}<br />
              {lead.mitarbeiter} MA · {lead.stellen} Stellen
            </div>
          )}
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
                    {skip[s.id] ? "Skip" : `${p.f}/${p.t}`}
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

      {/* Main */}
      <div className="col-12 col-md-9">
        <div className="dc-card">
          <div className="dc-section-header">
            <div>
              <span className="dc-section-icon">{sec.icon}</span>
              <h3 className="dc-section-title">{sec.label}</h3>
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
                if (f.type === "text") return <Inp key={f.key} l={f.label} v={d[f.key] || ""} set={(v) => u(f.key, v)} ph={f.ph} />;
                if (f.type === "textarea") return (
                  <div key={f.key} className="dc-field">
                    <label className="dc-label">{f.label}</label>
                    <textarea className={`dc-textarea ${d[f.key] ? "filled" : ""}`} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                  </div>
                );
                if (f.type === "chips") return <CG key={f.key} l={f.label} opts={f.opts} val={d[f.key] || ""} set={(v) => u(f.key, d[f.key] === v ? "" : v)} />;
                return null;
              })}
            </div>
          ) : (
            <div className="dc-skipped">
              <p>Übersprungen</p>
              <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} className="dc-btn-back">Doch ausfüllen</button>
            </div>
          )}

          <div className="dc-nav">
            <button className="dc-btn-back" onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0}>← Zurück</button>
            {idx < SOP.length - 1 ? (
              <button className="dc-btn-next" onClick={() => setActive(SOP[idx + 1].id)}>Weiter →</button>
            ) : (
              <button className={`dc-btn-submit ${copied ? "copied" : ""}`} onClick={copy}>
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
// ERFOLGSSEITE
// ============================================================
function Success({ data }) {
  return (
    <div className="dc-success">
      <div className="dc-success-icon">🎉</div>
      <h2>Vielen Dank, {data.name?.split(" ")[0]}!</h2>
      <p>Wir haben Ihre Angaben erhalten und bereiten uns optimal auf Ihr Erstgespräch vor.</p>
      <Link href={CAL} target="_blank" rel="noopener noreferrer" className="btns web_btns">
        🗓 Jetzt Termin buchen
        <span className="btn_arrows">
          <i className="bi bi-arrow-up-right"></i>
          <i className="bi bi-arrow-up-right"></i>
        </span>
      </Link>
      <div className="dc-trust-row">
        <span>✓ 100% kostenlos</span>
        <span>✓ Unverbindlich</span>
        <span>✓ 15–20 Minuten</span>
      </div>
      <div className="dc-testimonials-mini">
        <h4>Das sagen unsere Kunden:</h4>
        {TESTIMONIALS.map((c) => (
          <a key={c.firma} href={c.link} target="_blank" rel="noopener noreferrer" className="dc-testimonial-card">
            <span className="dc-testimonial-name">{c.emoji} {c.firma}</span>
            <span className="dc-testimonial-result">{c.result}</span>
            <span className="dc-testimonial-play">▶</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// SHARED COMPONENTS
// ============================================================
function Inp({ l, v, set, ph }) {
  return (
    <div className="dc-field">
      {l && <label className="dc-label">{l}</label>}
      <input type="text" className={`dc-input ${v ? "filled" : ""}`} value={v || ""} onChange={(e) => set(e.target.value)} placeholder={ph} />
    </div>
  );
}

function Chip({ t, on, click }) {
  return <button onClick={click} className={`dc-chip ${on ? "selected" : ""}`}>{on && "✓ "}{t}</button>;
}

function CG({ l, opts, val, set }) {
  return (
    <div className="dc-field">
      <label className="dc-label">{l}</label>
      <div className="dc-chips">{opts.map((o) => <Chip key={o} t={o} on={val === o} click={() => set(o)} />)}</div>
    </div>
  );
}

// ============================================================
// HAUPTSEITE
// ============================================================
export default function DiscoveryCallPage() {
  const [mode, setMode] = useState("lead");
  const [lead, setLead] = useState(null);
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Head>
        <title>Kostenlose Recruiting-Potenzialanalyse | TalentSuite</title>
        <meta name="description" content="Füllen Sie unser kurzes Formular aus und sichern Sie sich eine kostenlose Potenzialanalyse für Ihr Recruiting. In 2 Minuten erledigt." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        /* ============================================ */
        /* DISCOVERY CALL PAGE STYLES                   */
        /* Matches TalentSuite website design            */
        /* ============================================ */
        .dc-hero {
          padding: 80px 0 40px;
          text-align: center;
        }
        .dc-badge {
          display: inline-block;
          background: rgba(2,59,91,0.08);
          color: var(--primary, #023B5B);
          font-size: 11px;
          font-weight: 600;
          padding: 5px 16px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .dc-hero h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary, #023B5B);
          margin-bottom: 8px;
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-hero p {
          font-size: 15px;
          color: #666;
          max-width: 520px;
          margin: 0 auto;
        }
        .dc-trust-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .dc-trust-row span {
          font-size: 12px;
          color: #999;
        }

        /* Card */
        .dc-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          margin-bottom: 24px;
        }

        /* Form */
        .dc-form { }
        .dc-progress {
          display: flex;
          gap: 6px;
          margin-bottom: 28px;
        }
        .dc-progress-bar {
          flex: 1;
          height: 4px;
          border-radius: 2px;
          background: #e0e0e0;
          transition: background 0.3s;
        }
        .dc-progress-bar.active {
          background: var(--primary, #023B5B);
        }
        .dc-step-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .dc-step-icon { font-size: 22px; }
        .dc-step-count {
          font-size: 11px;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .dc-step-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary, #023B5B);
          margin: 4px 0 2px;
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-step-sub {
          font-size: 13px;
          color: #888;
          margin: 0 0 20px;
        }

        /* Fields */
        .dc-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .dc-field { }
        .dc-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }
        .dc-input, .dc-textarea {
          width: 100%;
          padding: 11px 14px;
          border-radius: 10px;
          border: 1.5px solid #ddd;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
          background: #fff;
        }
        .dc-input:focus, .dc-textarea:focus {
          border-color: var(--primary, #023B5B);
        }
        .dc-input.filled, .dc-textarea.filled {
          border-color: var(--primary, #023B5B);
          background: #f8fbff;
        }
        .dc-textarea { resize: vertical; }

        /* Chips */
        .dc-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .dc-chip {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1.5px solid #ddd;
          background: #fff;
          color: #555;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .dc-chip:hover {
          border-color: #aaa;
        }
        .dc-chip.selected {
          border: 2px solid var(--primary, #023B5B);
          background: rgba(2,59,91,0.06);
          color: var(--primary, #023B5B);
          font-weight: 600;
        }

        /* Navigation */
        .dc-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .dc-btn-back {
          padding: 10px 24px;
          border-radius: 10px;
          border: 1.5px solid var(--primary, #023B5B);
          background: #fff;
          color: var(--primary, #023B5B);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
        }
        .dc-btn-back:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .dc-btn-next, .dc-btn-submit {
          padding: 10px 28px;
          border-radius: 10px;
          border: none;
          background: var(--primary, #023B5B);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s;
        }
        .dc-btn-next:disabled, .dc-btn-submit:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .dc-btn-submit {
          background: #10B981;
          font-weight: 700;
        }
        .dc-btn-submit.copied {
          background: #10B981;
        }

        /* Testimonials */
        .dc-testimonials {
          margin-top: 32px;
        }
        .dc-testimonial-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f8fafb;
          border-radius: 10px;
          padding: 12px 16px;
          border-left: 3px solid var(--primary, #023B5B);
          margin-bottom: 8px;
          text-decoration: none;
          transition: box-shadow 0.2s;
        }
        .dc-testimonial-card:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .dc-testimonial-name {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          flex: 1;
        }
        .dc-testimonial-result {
          font-size: 13px;
          color: #555;
          flex: 2;
        }
        .dc-testimonial-play {
          font-size: 12px;
          color: var(--primary, #023B5B);
        }

        /* Success */
        .dc-success {
          text-align: center;
          padding: 40px 20px;
        }
        .dc-success-icon { font-size: 56px; margin-bottom: 12px; }
        .dc-success h2 {
          font-size: 26px;
          font-weight: 700;
          color: var(--primary, #023B5B);
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-success p {
          font-size: 15px;
          color: #555;
          max-width: 460px;
          margin: 0 auto 24px;
        }
        .dc-success .btns { margin-bottom: 16px; }
        .dc-testimonials-mini { 
          margin-top: 40px; 
          max-width: 500px; 
          margin-left: auto; 
          margin-right: auto; 
          text-align: left; 
        }
        .dc-testimonials-mini h4 {
          font-size: 15px;
          font-weight: 700;
          color: var(--primary, #023B5B);
          margin-bottom: 12px;
          text-align: center;
        }

        /* SOP Sidebar */
        .dc-sidebar {
          background: #fff;
          border-radius: 14px;
          padding: 10px;
          box-shadow: 0 1px 10px rgba(0,0,0,0.06);
          position: sticky;
          top: 100px;
        }
        .dc-lead-summary {
          background: rgba(2,59,91,0.05);
          border-radius: 8px;
          padding: 10px 12px;
          margin-bottom: 8px;
          font-size: 12px;
          line-height: 1.5;
          color: #333;
        }
        .dc-lead-summary strong { color: var(--primary, #023B5B); }
        .dc-sidebar-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 9px 10px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          margin-bottom: 1px;
          font-family: inherit;
        }
        .dc-sidebar-btn.active { background: rgba(2,59,91,0.06); }
        .dc-sidebar-btn.skipped { opacity: 0.4; }
        .dc-sidebar-icon { font-size: 15px; }
        .dc-sidebar-info { flex: 1; }
        .dc-sidebar-label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: #333;
        }
        .dc-sidebar-btn.active .dc-sidebar-label {
          font-weight: 700;
          color: var(--primary, #023B5B);
        }
        .dc-sidebar-prog {
          font-size: 10px;
          color: #bbb;
        }
        .dc-sidebar-prog.done { color: #10B981; }
        .dc-sidebar-check { color: #10B981; font-size: 13px; }
        .dc-copy-btn {
          width: 100%;
          padding: 11px 14px;
          border-radius: 8px;
          border: none;
          background: var(--primary, #023B5B);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 8px;
          font-family: inherit;
          transition: background 0.2s;
        }
        .dc-copy-btn.copied { background: #10B981; }

        /* Section Header */
        .dc-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .dc-section-icon { font-size: 26px; margin-right: 10px; }
        .dc-section-title {
          display: inline;
          font-size: 19px;
          font-weight: 700;
          color: var(--primary, #023B5B);
          font-family: var(--font-rajdhani), sans-serif;
        }
        .dc-hint {
          font-size: 11px;
          color: #F59E0B;
          font-weight: 500;
          margin: 3px 0 0;
        }
        .dc-skip-btn {
          padding: 5px 14px;
          border-radius: 6px;
          font-size: 11px;
          border: 1px solid #ddd;
          background: #f5f5f5;
          color: #666;
          cursor: pointer;
          font-family: inherit;
        }
        .dc-skipped {
          text-align: center;
          padding: 36px 0;
          color: #bbb;
        }

        /* Preview */
        .dc-preview { margin-top: 16px; }
        .dc-preview summary {
          font-size: 12px;
          color: #aaa;
          cursor: pointer;
          padding: 8px 0;
        }
        .dc-preview pre {
          background: #1a1a2e;
          color: #e0e0e0;
          padding: 18px;
          border-radius: 10px;
          font-size: 11px;
          line-height: 1.6;
          white-space: pre-wrap;
          max-height: 360px;
          overflow: auto;
          margin-top: 6px;
        }

        /* Internal access */
        .dc-internal-access {
          text-align: center;
          padding: 20px 0 40px;
        }
        .dc-lock-btn {
          background: none;
          border: none;
          color: #ddd;
          font-size: 10px;
          cursor: pointer;
        }
        .dc-pw-row {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 8px;
        }
        .dc-pw-input {
          padding: 7px 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 12px;
          width: 150px;
          font-family: inherit;
        }
        .dc-pw-submit {
          padding: 7px 14px;
          border-radius: 8px;
          border: none;
          background: var(--primary, #023B5B);
          color: #fff;
          font-size: 12px;
          cursor: pointer;
        }
        .dc-back-public {
          background: none;
          border: none;
          color: #aaa;
          font-size: 11px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .dc-hero h1 { font-size: 1.6rem; }
          .dc-card { padding: 20px 16px; }
          .dc-sidebar { position: static; margin-bottom: 16px; }
          .dc-testimonial-card { flex-direction: column; align-items: flex-start; gap: 4px; }
          .dc-section-header { flex-direction: column; gap: 8px; }
        }
      `}</style>

      {/* PUBLIC: Lead Form */}
      {mode === "lead" && !auth && (
        <section>
          <div className="dc-hero">
            <div className="container">
              <span className="dc-badge">Kostenlos & Unverbindlich</span>
              <h1>Ihre kostenlose Recruiting-Potenzialanalyse</h1>
              <p>2 Minuten ausfüllen – wir bereiten Ihr Erstgespräch optimal vor.</p>
              <div className="dc-trust-row">
                <span>✓ 100% kostenlos</span>
                <span>✓ Unverbindlich</span>
                <span>✓ Ergebnisse in 48h</span>
              </div>
            </div>
          </div>
          <div className="container" style={{ maxWidth: 620, paddingBottom: 60 }}>
            <div className="dc-card">
              <LeadForm onDone={(d) => { setLead(d); setMode("success"); }} />
            </div>
            <div className="dc-testimonials">
              {TESTIMONIALS.map((c) => (
                <a key={c.firma} href={c.link} target="_blank" rel="noopener noreferrer" className="dc-testimonial-card">
                  <span className="dc-testimonial-name">{c.emoji} {c.firma}</span>
                  <span className="dc-testimonial-result">{c.result}</span>
                  <span className="dc-testimonial-play">▶</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUCCESS */}
      {mode === "success" && !auth && (
        <section>
          <div className="container" style={{ maxWidth: 620, paddingTop: 60, paddingBottom: 60 }}>
            <div className="dc-card">
              <Success data={lead} />
            </div>
          </div>
        </section>
      )}

      {/* INTERNAL SOP TOOL */}
      {auth && (
        <section style={{ paddingTop: 40, paddingBottom: 60 }}>
          <div className="container">
            <SopTool lead={lead} />
          </div>
        </section>
      )}

      {/* Hidden Internal Access */}
      <div className="dc-internal-access">
        {!auth ? (
          <>
            <button onClick={() => setMode(mode === "pw" ? "lead" : "pw")} className="dc-lock-btn">🔒</button>
            {mode === "pw" && (
              <div className="dc-pw-row">
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === "Enter" && pw === "talentsuite2026" && setAuth(true)} placeholder="Passwort" className="dc-pw-input" />
                <button onClick={() => pw === "talentsuite2026" && setAuth(true)} className="dc-pw-submit">→</button>
              </div>
            )}
          </>
        ) : (
          <button onClick={() => { setAuth(false); setMode("lead"); }} className="dc-back-public">← Zurück zur öffentlichen Ansicht</button>
        )}
      </div>
    </>
  );
}
