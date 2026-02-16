"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";

const blogArticles = [
  // Performance Recruiting Cluster
  { id: 1, reading: "8 Min.", title: "Performance Recruiting: Was ist das und wie funktioniert es?", desc: "Performance Recruiting einfach erklärt: Definition, Ablauf, Kosten und warum 80% der Fachkräfte nur über Social Media erreichbar sind.", link: "/blog/performance-recruiting-was-ist-das", category: "Performance Recruiting" },
  { id: 2, reading: "7 Min.", title: "Was kostet Performance Recruiting? Preise, Modelle & ROI", desc: "Transparente Kostenübersicht: Agenturhonorar, Werbebudget, Kosten pro Bewerbung und ROI-Vergleich mit Headhuntern und Jobbörsen.", link: "/blog/performance-recruiting-kosten", category: "Performance Recruiting" },
  { id: 3, reading: "10 Min.", title: "Social Media Recruiting: Der komplette Leitfaden", desc: "Social Media Recruiting von A bis Z: Plattformen, Strategien, häufige Fehler und der optimale Prozess für erfolgreiche Personalgewinnung.", link: "/blog/social-media-recruiting-leitfaden", category: "Social Recruiting" },
  { id: 4, reading: "8 Min.", title: "Bewerberfunnel erstellen: Mobile Recruiting-Funnels", desc: "Schritt-für-Schritt Anleitung: Aufbau, Best Practices und Conversion-Tipps für Bewerberfunnels im Performance Recruiting.", link: "/blog/bewerberfunnel-erstellen", category: "Recruiting Technik" },
  { id: 5, reading: "8 Min.", title: "Recruiting ROI berechnen: Erfolg messbar machen", desc: "Die wichtigsten KPIs: Cost-per-Hire, Cost-per-Application, Time-to-Hire und Quality-of-Hire mit konkreten Benchmarks.", link: "/blog/recruiting-roi-berechnen", category: "HR-Wissen" },
  
  // Branchenspezifisch
  { id: 6, reading: "9 Min.", title: "Mitarbeiter finden im Handwerk: 7 Strategien", desc: "7 bewährte Strategien gegen den Fachkräftemangel im Handwerk: Von Social Recruiting über Employer Branding bis Google.", link: "/blog/mitarbeiter-finden-handwerk", category: "Recruiting Handwerk" },
  { id: 7, reading: "8 Min.", title: "Pflegekräfte finden: Personal für Kliniken und Pflege", desc: "Strategien für Kliniken, Pflegeheime und ambulante Dienste: Social Recruiting, Employer Branding und internationales Recruiting.", link: "/blog/pflegekraefte-finden", category: "Recruiting Pflege" },
  { id: 8, reading: "8 Min.", title: "Mitarbeiter finden in der Gastronomie", desc: "Trotz Personalmangel einstellen: Recruiting-Strategien für Restaurants, Hotels und die Gastronomie.", link: "/blog/mitarbeiter-finden-gastronomie", category: "Recruiting Gastronomie" },
  { id: 9, reading: "8 Min.", title: "Mitarbeiter finden in der Logistik", desc: "LKW-Fahrer, Lageristen und Disponenten gewinnen: Social Recruiting Strategien für die Logistikbranche.", link: "/blog/mitarbeiter-finden-logistik", category: "Recruiting Logistik" },

  // Employer Branding
  { id: 10, reading: "7 Min.", title: "Employer Branding im Handwerk", desc: "5 Säulen für eine starke Arbeitgebermarke: Authentische Einblicke, Benefits, Mitarbeiter-Botschafter und mehr.", link: "/blog/employer-branding-handwerk", category: "Employer Branding" },
  { id: 11, reading: "8 Min.", title: "Employer Branding Video: Recruiting-Videos produzieren", desc: "Formate, Kosten und Best Practices für überzeugende Employer Branding und Recruiting Videos.", link: "/blog/employer-branding-video", category: "Employer Branding" },

  // Social Media & Recruiting Plattformen
  { id: 12, reading: "8 Min.", title: "TikTok Recruiting: Azubis und junge Fachkräfte", desc: "Wie Unternehmen über TikTok die Gen Z erreichen: Strategie, Content-Ideen und Best Practices.", link: "/blog/tiktok-recruiting", category: "Social Recruiting" },
  { id: 13, reading: "8 Min.", title: "LinkedIn Recruiting: Fach- und Führungskräfte gewinnen", desc: "LinkedIn Recruiting Strategie: Active Sourcing, Content und Ads für qualifizierte Kandidaten.", link: "/blog/linkedin-recruiting-strategie", category: "Social Recruiting" },

  // Neukundengewinnung
  { id: 14, reading: "10 Min.", title: "Neukundengewinnung: 10 digitale Strategien", desc: "10 bewährte Strategien für planbare Kundenanfragen: Meta Ads, Google Ads, SEO, E-Mail Marketing und mehr.", link: "/blog/neukundengewinnung-strategien", category: "Neukundengewinnung" },
  { id: 15, reading: "8 Min.", title: "Meta Ads für Leadgenerierung", desc: "Facebook und Instagram Ads richtig einsetzen: Targeting, Budget, Anzeigen und Lead-Qualifikation.", link: "/blog/meta-ads-leadgenerierung", category: "Performance Marketing" },
  { id: 16, reading: "8 Min.", title: "B2B Leadgenerierung: Strategien für Geschäftskontakte", desc: "LinkedIn, Content Marketing, Cold Outreach und Marketing Automation für planbare B2B-Leads.", link: "/blog/b2b-leadgenerierung", category: "B2B Marketing" },
  { id: 17, reading: "8 Min.", title: "Digitale Neukundengewinnung für Handwerker", desc: "Wie Handwerksbetriebe online Kundenanfragen generieren: Von Google Ads bis Social Media.", link: "/blog/digitale-neukundengewinnung-handwerk", category: "Neukundengewinnung" },
  { id: 18, reading: "8 Min.", title: "Facebook Werbung Kosten 2026", desc: "Was Facebook Werbung wirklich kostet: CPC, CPM, Budget-Empfehlungen und Branchen-Benchmarks.", link: "/blog/facebook-werbung-kosten", category: "Performance Marketing" },

  // Conversion & Technik
  { id: 19, reading: "8 Min.", title: "Landingpage Optimierung: 12 Conversion-Tipps", desc: "12 bewährte Tipps für höhere Conversion Rates: Headline, CTA, Formulardesign und mobile UX.", link: "/blog/landing-page-optimierung", category: "Conversion" },
  { id: 20, reading: "8 Min.", title: "Conversion Rate Optimierung", desc: "Mehr Kunden und Bewerbungen aus dem gleichen Traffic: CRO Strategien und Best Practices.", link: "/blog/conversion-rate-optimierung", category: "Conversion" },

  // Content & Social Media
  { id: 21, reading: "8 Min.", title: "Social Media Marketing für KMU", desc: "Leitfaden für kleine Unternehmen: Plattformen, Strategien und Budgettipps für Social Media.", link: "/blog/social-media-marketing-kmu", category: "Social Media" },
  { id: 22, reading: "8 Min.", title: "Was kostet Social Media Marketing?", desc: "Preise und Budgets im Überblick: Agenturbetreuung, Content-Produktion und Werbeanzeigen.", link: "/blog/was-kostet-social-media-marketing", category: "Social Media" },
  { id: 23, reading: "8 Min.", title: "Content Marketing Strategie für KMU", desc: "Von der Planung über SEO-Content bis zur Distribution: Content Marketing Schritt für Schritt.", link: "/blog/content-marketing-strategie", category: "Content Marketing" },

  // Web & E-Commerce
  { id: 24, reading: "8 Min.", title: "Website erstellen lassen: Kosten und Anbieter", desc: "Was eine professionelle Website kostet, wie lange es dauert und worauf du achten musst.", link: "/blog/website-erstellen-lassen-kosten", category: "Webentwicklung" },
  { id: 25, reading: "8 Min.", title: "Shopify Shop erstellen: Komplett-Guide", desc: "Schritt-für-Schritt Anleitung für deinen erfolgreichen Online-Shop mit Shopify.", link: "/blog/shopify-shop-erstellen", category: "E-Commerce" },

  // SEO & Google
  { id: 26, reading: "8 Min.", title: "SEO für Handwerker: Bei Google gefunden werden", desc: "Wie Handwerksbetriebe über Google neue Kunden gewinnen: Lokales SEO Schritt für Schritt.", link: "/blog/seo-fuer-handwerker", category: "SEO" },
  { id: 27, reading: "8 Min.", title: "Google Ads für Handwerksbetriebe", desc: "Kunden und Mitarbeiter über Google Werbung finden: Budget, Keywords und Praxistipps.", link: "/blog/google-ads-handwerk", category: "Online Marketing" },

  // HR-Wissen
  { id: 28, reading: "8 Min.", title: "Fachkräftemangel Deutschland 2026", desc: "Aktuelle Zahlen, am stärksten betroffene Branchen und konkrete Lösungsansätze für Unternehmen.", link: "/blog/fachkraeftemangel-deutschland", category: "HR-Wissen" },
  { id: 29, reading: "8 Min.", title: "Personalgewinnung 2026: Trends und Strategien", desc: "Die wichtigsten Trends und Strategien für erfolgreiche Mitarbeitergewinnung im Jahr 2026.", link: "/blog/personalgewinnung-2026", category: "HR-Wissen" },
  { id: 30, reading: "8 Min.", title: "Recruiting Agentur Vergleich: Den richtigen Partner finden", desc: "Worauf du bei der Auswahl einer Recruiting Agentur achten musst: Leistungen, Kosten und Warnsignale.", link: "/blog/recruiting-agentur-vergleich", category: "HR-Wissen" },
];

const categories = [...new Set(blogArticles.map(a => a.category))];

const page = () => {
  const [filter, setFilter] = React.useState("Alle");
  const filtered = filter === "Alle" ? blogArticles : blogArticles.filter(a => a.category === filter);

  return (
    <>
      <Head>
        <title>Blog: Recruiting, Marketing & Digitales Wachstum | TalentSuite</title>
        <meta name="description" content="Praxiswissen zu Performance Recruiting, Neukundengewinnung, Social Media Marketing und Employer Branding. Strategien und Tipps für KMU im DACH-Raum." />
        <meta name="keywords" content="Performance Recruiting Blog, Neukundengewinnung, Social Media Recruiting, Employer Branding, Fachkräftemangel, Digitales Marketing KMU" />
      </Head>

      <section className="blogs_section">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-4">
            <div className="col-12 col-lg-10">
              <div className="about_content">
                <h1>Blog: Recruiting, Marketing &amp; Digitales Wachstum</h1>
                <p>Praxiswissen aus über 100 Projekten: Performance Recruiting, Neukundengewinnung, Social Media Marketing und Employer Branding für KMU im DACH-Raum.</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="row mb-4">
            <div className="col-12">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <button onClick={() => setFilter("Alle")} style={{ padding: "6px 16px", borderRadius: "20px", border: filter === "Alle" ? "2px solid #023B5B" : "1px solid rgba(0,0,0,0.15)", background: filter === "Alle" ? "#023B5B" : "white", color: filter === "Alle" ? "white" : "#333", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }}>Alle ({blogArticles.length})</button>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setFilter(cat)} style={{ padding: "6px 16px", borderRadius: "20px", border: filter === cat ? "2px solid #023B5B" : "1px solid rgba(0,0,0,0.15)", background: filter === cat ? "#023B5B" : "white", color: filter === cat ? "white" : "#333", fontWeight: "500", fontSize: "0.85rem", cursor: "pointer" }}>{cat}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {filtered.map((article, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="service_card h-100">
                  <div className="blog_reading">
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ background: "rgba(2,59,91,0.1)", color: "#023B5B", padding: "2px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" }}>{article.category}</span>
                      <span className="reading">{article.reading}</span>
                    </div>
                    <div className="hero_buttons">
                      <Link className="btns web_btns" href={article.link}>
                        <span className="btn_arrows">
                          <i className="bi bi-arrow-up-right"></i>
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <h3 className="mb-2">{article.title}</h3>
                  <p>{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
