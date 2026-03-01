"use client";
import React, { useState, useEffect } from "react";
import { trackLead } from "../components/Analytics";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const branches = [
  {
    id: "shk", icon: "🔧", name: "SHK & Elektro",
    stellen: "65.000+", vakanz: "165 Tage", luecke: "12.000 Fachkräfte",
    cpa: "15-22 €", conv: "12-16%", costMonth: "7.200 €",
    pain: "Energiewende treibt Nachfrage — aber es fehlen Installateure für Wärmepumpen und PV-Anlagen. Betriebe lehnen wöchentlich Aufträge ab.",
    strategy: "Social Media Recruiting über Facebook & Instagram mit Geotargeting im 30km-Umkreis. Authentische Mitarbeiter-Videos sind der stärkste Hebel.",
    fact: "Die SHK-Branche verliert geschätzt 9 Mrd. € Umsatz jährlich durch unbesetzte Stellen.",
  },
  {
    id: "pflege", icon: "🏥", name: "Pflege & Gesundheit",
    stellen: "46.000+", vakanz: "200+ Tage", luecke: "Über 46.000 rechnerisch unbesetzt",
    cpa: "18-28 €", conv: "14-18%", costMonth: "9.500 €",
    pain: "Höchste Vakanzzeiten aller Branchen. Überlastung der bestehenden Teams führt zu Abwärtsspirale aus Kündigungen und noch mehr Überlastung.",
    strategy: "Latent wechselwillige Pflegekräfte über Instagram & Facebook erreichen. Employer Branding mit echten Team-Einblicken und konkreten Benefits.",
    fact: "72% der Pflegekräfte sind nicht aktiv auf Jobsuche, aber offen für bessere Angebote.",
  },
  {
    id: "gastro", icon: "🍽️", name: "Gastronomie & Hotellerie",
    stellen: "38.000+", vakanz: "130 Tage", luecke: "Massiver Exodus seit COVID",
    cpa: "12-18 €", conv: "10-14%", costMonth: "5.800 €",
    pain: "Seit COVID haben tausende Fachkräfte die Branche dauerhaft verlassen. Die Rückgewinnung ist schwieriger als Neugewinnung.",
    strategy: "TikTok und Instagram Reels für junge Zielgruppe. Authentische Behind-the-Scenes-Content zeigt, warum die Branche Spaß machen kann.",
    fact: "58% der Gastro-Betriebe können ihr Angebot wegen Personalmangel nicht voll aufrechterhalten.",
  },
  {
    id: "logistik", icon: "🚛", name: "Logistik & Transport",
    stellen: "30.000+", vakanz: "140 Tage", luecke: "Dramatisch bei LKW-Fahrern",
    cpa: "14-20 €", conv: "11-15%", costMonth: "6.500 €",
    pain: "Überalterung der Belegschaft — Durchschnittsalter bei LKW-Fahrern liegt über 50. Nachwuchs fehlt komplett.",
    strategy: "Facebook Ads mit klarer Benefit-Kommunikation: Gehalt, Tourenplanung, Fahrzeugqualität. Regionales Targeting entlang der Logistikrouten.",
    fact: "Bis 2030 fehlen in Deutschland geschätzt 185.000 LKW-Fahrer.",
  },
  {
    id: "bau", icon: "🏗️", name: "Bau & Ausbau",
    stellen: "55.000+", vakanz: "155 Tage", luecke: "Über 55.000 offene Stellen",
    cpa: "16-24 €", conv: "10-14%", costMonth: "8.100 €",
    pain: "Auftragsbücher voll, aber keine Kapazität. Fachkräftemangel bremst Infrastrukturprojekte und Wohnungsbau.",
    strategy: "Facebook-Kampagnen mit Projekt-Highlights und Team-Einblicken. Gezielte Ansprache von Baufachkräften über Interessen-Targeting.",
    fact: "62% der Handwerksbetriebe müssen Aufträge ablehnen, weil Personal fehlt.",
  },
  {
    id: "industrie", icon: "⚙️", name: "Industrie & Produktion",
    stellen: "45.000+", vakanz: "175 Tage", luecke: "Besonders bei Meistern und Technikern",
    cpa: "18-26 €", conv: "12-16%", costMonth: "7.800 €",
    pain: "Digitalisierung und Transformation erfordern neue Qualifikationen, aber die Fachkräfte mit dem nötigen Know-how sind extrem rar.",
    strategy: "LinkedIn für Fach- und Führungskräfte, Facebook für gewerbliche Mitarbeiter. Kombination aus Employer Branding und Performance Ads.",
    fact: "83% der Industrieunternehmen erwarten in den nächsten Jahren negative Folgen durch Fachkräftemangel.",
  },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^(\+?[0-9]{7,15})$/;

export default function BranchenRecruitingReport() {
  const mob = useIsMobile();
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);

  const cleanPhone = (p) => p.replace(/[\s\-\/\(\)]/g, "");
  const emailValid = emailRe.test(form.email);
  const phoneValid = form.phone === "" || phoneRe.test(cleanPhone(form.phone));
  const canSubmit = form.name && emailValid && dsgvo;

  const branch = branches.find(b => b.id === selected);

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "branchen-report",
          name: form.name, email: form.email, phone: form.phone || undefined,
          company: form.company || undefined,
          industry: branch?.name,
          extra: { selectedBranch: branch?.name, stellen: branch?.stellen, vakanz: branch?.vakanz },
        }),
      });
    } catch (e) { console.error(e); }
    trackLead({ formName: "branchen-recruiting-report", category: "leadmagnet", value: 100 });
  };

  const Stat = ({ label, value, color }) => (
    <div style={{ textAlign: "center", padding: mob ? 10 : 14 }}>
      <div style={{ fontSize: mob ? 22 : 28, fontWeight: 800, color: color || A }}>{value}</div>
      <div style={{ fontSize: 12, color: `${B}90`, marginTop: 4 }}>{label}</div>
    </div>
  );

  return (
    <>
      {/* ── SEO Hero Section ── */}
      <div style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`, padding: mob ? "40px 16px 48px" : "64px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: `${A}20`, color: A, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            Kostenlos · Aktuell · Datenbasiert
          </span>
          <h1 style={{ color: W, fontSize: mob ? 28 : 42, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Branchen-Recruiting-Report 2026
          </h1>
          <p style={{ color: `${W}80`, fontSize: mob ? 16 : 19, lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
            Aktuelle Arbeitsmarktdaten, Vakanzzeiten und bewährte Recruiting-Strategien — zugeschnitten auf Ihre Branche.
          </p>
        </div>
      </div>

      {/* ── SEO Content + Branch Selector ── */}
      <div style={{ background: L, padding: mob ? "32px 16px 48px" : "48px 24px 72px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* SEO intro text */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 20 : 24, fontWeight: 700, margin: "0 0 12px" }}>
              Fachkräftemangel in Deutschland: Die Zahlen sprechen eine klare Sprache
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Mit einer Mangelquote von 86% steht Deutschland international an der Spitze beim Fachkräftemangel. Über 387.000 Stellen bleiben unbesetzt — bei durchschnittlichen Vakanzzeiten von bis zu 280 Tagen in Engpassberufen. Besonders betroffen sind Handwerk, Pflege, Gastronomie, Logistik und Industrie.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Der entscheidende Punkt: <strong>72% der Fachkräfte sind nicht aktiv auf Jobsuche</strong>. Klassische Stellenanzeigen auf Jobbörsen erreichen nur 20% des Marktes. Wer die restlichen 80% erreichen will, braucht Social Media Recruiting — und branchenspezifisches Know-how.
            </p>
          </div>

          {/* Branch selector */}
          <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>
            Wählen Sie Ihre Branche
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
            {branches.map(b => (
              <button key={b.id} onClick={() => { setSelected(b.id); setShowForm(false); setSent(false); }}
                style={{
                  padding: mob ? "16px 10px" : "20px 16px", background: selected === b.id ? A : W, border: `2px solid ${selected === b.id ? A : "#E2E8F0"}`,
                  borderRadius: 12, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit", textAlign: "center",
                }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 6 }}>{b.icon}</span>
                <span style={{ fontSize: mob ? 13 : 15, fontWeight: 600, color: selected === b.id ? W : B }}>{b.name}</span>
              </button>
            ))}
          </div>

          {/* Branch detail */}
          {branch && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {/* Stats grid */}
              <div style={{ background: W, borderRadius: 16, padding: mob ? 16 : 24, marginBottom: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <h3 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>
                  {branch.icon} {branch.name} — Arbeitsmarkt 2026
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 8, background: L, borderRadius: 12, padding: 12 }}>
                  <Stat label="Offene Stellen" value={branch.stellen} />
                  <Stat label="Ø Vakanzzeit" value={branch.vakanz} color={R} />
                  <Stat label="Fachkräftelücke" value={branch.luecke} />
                  <Stat label="Kosten pro Monat" value={branch.costMonth} color={R} />
                </div>
              </div>

              {/* Pain + Strategy */}
              <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div style={{ background: W, borderRadius: 14, padding: mob ? 18 : 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <h4 style={{ color: R, fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>🔴 Die Herausforderung</h4>
                  <p style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{branch.pain}</p>
                </div>
                <div style={{ background: W, borderRadius: 14, padding: mob ? 18 : 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <h4 style={{ color: G, fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>✅ Bewährte Strategie</h4>
                  <p style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{branch.strategy}</p>
                </div>
              </div>

              {/* Fact callout */}
              <div style={{ background: `${A}08`, border: `1px solid ${A}20`, borderRadius: 14, padding: mob ? 18 : 24, marginBottom: 20, textAlign: "center" }}>
                <p style={{ color: B, fontSize: mob ? 15 : 17, fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
                  💡 {branch.fact}
                </p>
              </div>

              {/* Performance metrics */}
              <div style={{ background: W, borderRadius: 14, padding: mob ? 18 : 24, marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <h4 style={{ color: B, fontSize: 16, fontWeight: 700, margin: "0 0 14px" }}>📊 Social Recruiting Benchmarks für {branch.name}</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: L, borderRadius: 10, padding: 14, textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: A }}>{branch.cpa}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>Kosten pro Bewerbung</div>
                  </div>
                  <div style={{ background: L, borderRadius: 10, padding: 14, textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: G }}>{branch.conv}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>Conversion-Rate</div>
                  </div>
                </div>
              </div>

              {/* CTA / Form */}
              {!showForm && !sent ? (
                <div style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16, padding: mob ? "28px 18px" : "36px 32px", textAlign: "center" }}>
                  <h3 style={{ color: W, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 10px" }}>
                    Vollständigen Report für {branch.name} erhalten
                  </h3>
                  <p style={{ color: `${W}70`, fontSize: 15, margin: "0 0 20px" }}>
                    Inklusive detaillierter Fallstudien, Vorlagen und konkretem Aktionsplan.
                  </p>
                  <button onClick={() => setShowForm(true)} style={{
                    padding: "16px 40px", background: W, border: "none", borderRadius: 10,
                    color: B, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                  }}>
                    Kostenlosen Report anfordern →
                  </button>
                </div>
              ) : sent ? (
                <div style={{ background: `${G}10`, border: `1px solid ${G}30`, borderRadius: 16, padding: mob ? "28px 18px" : "36px 32px", textAlign: "center" }}>
                  <span style={{ fontSize: 48 }}>✅</span>
                  <h3 style={{ color: B, fontSize: 20, fontWeight: 700, margin: "12px 0 8px" }}>Report wird zugestellt!</h3>
                  <p style={{ color: "#4A5568", fontSize: 15, margin: "0 0 20px" }}>Wir senden Ihnen den vollständigen {branch.name}-Report an {form.email}.</p>
                  <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-block", padding: "14px 32px", background: `linear-gradient(135deg, ${A}, #0F7BC0)`, borderRadius: 10, color: W, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                    Kostenlose Recruiting-Analyse buchen →
                  </a>
                </div>
              ) : (
                <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ color: B, fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>Report für {branch.name} anfordern</h3>
                  {[
                    { label: "Name *", key: "name", ph: "Max Mustermann" },
                    { label: "E-Mail *", key: "email", ph: "max@firma.de", type: "email" },
                    { label: "Telefon", key: "phone", ph: "+49 170 1234567", type: "tel" },
                    { label: "Firma", key: "company", ph: "Firmenname" },
                  ].map(f => (
                    <div key={f.key} style={{ marginBottom: 14 }}>
                      <label style={{ display: "block", color: "#64748B", fontSize: 13, marginBottom: 4, fontWeight: 500 }}>{f.label}</label>
                      <input type={f.type || "text"} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.ph}
                        style={{ width: "100%", padding: "11px 14px", border: `1px solid #E2E8F0`, borderRadius: 8, fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" }} />
                      {f.key === "email" && form.email && !emailValid && <span style={{ color: R, fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
                      {f.key === "phone" && form.phone && !phoneValid && <span style={{ color: R, fontSize: 12 }}>Bitte gültige Telefonnummer eingeben</span>}
                    </div>
                  ))}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, margin: "12px 0 16px", cursor: "pointer" }}>
                    <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: A }} />
                    <span style={{ color: "#94A3B8", fontSize: 12, lineHeight: 1.5 }}>
                      Ich stimme der <a href="/datenschutz" target="_blank" rel="noopener" style={{ color: A }}>Datenschutzerklärung</a> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden.
                    </span>
                  </label>
                  <button onClick={submit} disabled={!canSubmit} style={{
                    width: "100%", padding: "14px", background: canSubmit ? `linear-gradient(135deg, ${A}, #0F7BC0)` : "#CBD5E1",
                    border: "none", borderRadius: 10, color: W, fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit", opacity: canSubmit ? 1 : 0.5,
                  }}>
                    Kostenlosen Report erhalten →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bottom SEO content */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginTop: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              Warum Jobbörsen nicht mehr ausreichen
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Laut aktuellen Studien sind 72% aller Fachkräfte nicht aktiv auf Jobsuche — sie scrollen nicht auf StepStone oder Indeed. Diese passiven Kandidaten, oft die qualifiziertesten und erfahrensten, erreicht man nur dort, wo sie tatsächlich ihre Zeit verbringen: auf Social Media.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Performance Recruiting über Plattformen wie Facebook und Instagram ermöglicht es, exakt definierte Zielgruppen anzusprechen — nach Beruf, Alter, Region und Interessen. Die Ergebnisse sprechen für sich: 15-25 € pro qualifizierte Bewerbung bei einer Conversion-Rate von 12-18%.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Der Schlüssel zum Erfolg liegt in der Branchenexpertise. Ein Elektriker reagiert auf andere Ansprache als eine Pflegekraft. Deshalb hat TalentSuite branchenspezifische Kampagnen-Templates entwickelt, die nachweislich funktionieren.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
