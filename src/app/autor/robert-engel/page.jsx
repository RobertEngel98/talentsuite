"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";

const AuthorPage = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robert Engel",
    "jobTitle": "Gründer & Geschäftsführer",
    "url": "https://talentsuite.io/autor/robert-engel",
    "sameAs": [
      "https://www.linkedin.com/in/robert-engel",
      "https://www.instagram.com/talentsuite.io",
      "https://www.tiktok.com/@talentsuite"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "TalentSuite",
      "alternateName": "Engel & Mühlhof GbR",
      "url": "https://talentsuite.io",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Iserlohn",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      }
    },
    "knowsAbout": [
      "Performance Recruiting",
      "Social Media Recruiting",
      "Employer Branding",
      "Fachkräftegewinnung",
      "Social Media Marketing",
      "Meta Ads",
      "LinkedIn Recruiting",
      "TikTok Recruiting",
      "Personalgewinnung Handwerk",
      "Recruiting Pflege",
      "Recruiting Gastronomie",
      "Content Produktion",
      "Videomarketing"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universität"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Iserlohn",
      "addressRegion": "Nordrhein-Westfalen",
      "postalCode": "58636",
      "addressCountry": "DE"
    }
  };

  const expertise = [
    { area: "Performance Recruiting", detail: "Datengetriebene Social-Media-Kampagnen zur Fachkräftegewinnung über Meta, Instagram, TikTok und LinkedIn" },
    { area: "Social Media Marketing", detail: "Strategische Kampagnen für KMU und Mittelstand mit messbaren Ergebnissen und klarem ROI-Fokus" },
    { area: "Employer Branding & Video", detail: "Professionelle Arbeitgebermarken-Entwicklung durch Videomarketing und Content-Produktion (MadebyMEE)" },
    { area: "Digitale Neukundengewinnung", detail: "Lead-Generierung und Kundenakquise über Meta Ads, Google Ads, LinkedIn und E-Mail-Marketing" },
    { area: "Webentwicklung & SEO", detail: "Conversion-optimierte Landingpages und Karriereseiten mit datengetriebener Suchmaschinenoptimierung" }
  ];

  const results = [
    { metric: "100+", label: "Erfolgreiche Recruiting-Kampagnen" },
    { metric: "500+", label: "Qualifizierte Bewerbungen generiert" },
    { metric: "15+", label: "Branchen erfolgreich betreut" },
    { metric: "< 30 Tage", label: "Durchschnittliche Zeit bis erste Bewerbungen" }
  ];

  const industries = [
    "SHK & Sanitärtechnik", "Elektroinstallation", "Metallverarbeitung", "Maschinenbau",
    "Pflege & Gesundheitswesen", "Gastronomie & Hotellerie", "Logistik & Transport",
    "Automobilzulieferer", "Bau & Tiefbau", "Industrieunternehmen"
  ];

  const recentArticles = [
    { title: "Performance Recruiting: Was ist das und wie funktioniert es?", href: "/blog/performance-recruiting-was-ist-das" },
    { title: "Social Media Recruiting Leitfaden 2026", href: "/blog/social-media-recruiting-leitfaden" },
    { title: "Mitarbeiter finden im Handwerk", href: "/blog/mitarbeiter-finden-handwerk" },
    { title: "Mitarbeitergewinnung im Märkischen Kreis", href: "/blog/mitarbeitergewinnung-maerkischer-kreis" },
    { title: "Pflegekräfte finden: Der komplette Guide", href: "/blog/pflegekraefte-finden" },
    { title: "Performance Recruiting Kosten: Transparenter Überblick", href: "/blog/performance-recruiting-kosten" },
    { title: "Employer Branding durch Video", href: "/blog/employer-branding-video" },
    { title: "Mitarbeitergewinnung in Südwestfalen", href: "/blog/mitarbeitergewinnung-suedwestfalen" },
  ];

  return (
    <>
      <Head>
        <title>Robert Engel – Performance Recruiting Experte | TalentSuite</title>
        <meta name="description" content="Robert Engel ist Gründer von TalentSuite und Experte für Performance Recruiting, Social Media Marketing und Fachkräftegewinnung für den Mittelstand in Südwestfalen." />
        <link rel="canonical" href="https://talentsuite.io/autor/robert-engel" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", color: "white", padding: "4rem 0 3rem" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <div style={{
                  width: "100px", height: "100px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.2rem", fontWeight: "700", flexShrink: 0,
                  border: "3px solid rgba(255,255,255,0.3)"
                }}>RE</div>
                <div>
                  <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, marginBottom: "4px" }}>Autor & Experte</div>
                  <h1 style={{ fontSize: "2rem", fontWeight: "800", margin: "0 0 6px" }}>Robert Engel</h1>
                  <p style={{ fontSize: "1.1rem", opacity: 0.85, margin: 0 }}>Gründer & Geschäftsführer bei TalentSuite</p>
                  <p style={{ fontSize: "0.95rem", opacity: 0.65, margin: "4px 0 0" }}>Engel & Mühlhof GbR · Iserlohn, Nordrhein-Westfalen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">

              {/* About */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Über Robert Engel</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                  Robert Engel ist Gründer und Geschäftsführer von TalentSuite, einer Performance Recruiting Agentur mit Sitz in Iserlohn. 
                  Unter der Marke TalentSuite (Engel & Mühlhof GbR) unterstützt er mittelständische Unternehmen in Südwestfalen und dem 
                  Märkischen Kreis dabei, qualifizierte Fachkräfte über datengetriebene Social-Media-Kampagnen zu gewinnen.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                  Sein Ansatz verbindet tiefes Verständnis des regionalen Arbeitsmarktes mit modernsten Performance-Marketing-Methoden. 
                  Statt auf klassische Stellenanzeigen zu setzen, die in Zeiten des Fachkräftemangels kaum noch funktionieren, erreicht 
                  TalentSuite auch passiv suchende Kandidaten dort, wo sie täglich unterwegs sind: auf Social Media.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Neben TalentSuite betreibt Robert die Videomarke MadebyMEE, die auf Employer-Branding-Videos und Social-Media-Content 
                  für KMU spezialisiert ist. Diese Kombination aus Recruiting-Expertise und professioneller Content-Produktion ermöglicht 
                  es seinen Kunden, sich als attraktive Arbeitgeber zu positionieren und gleichzeitig messbare Bewerbungsergebnisse zu erzielen.
                </p>
              </div>

              {/* Results / Authority Proofs */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Ergebnisse & Erfolge</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  {results.map((r, i) => (
                    <div key={i} style={{
                      background: "rgba(2,59,91,0.04)", border: "1px solid rgba(2,59,91,0.1)",
                      borderRadius: "12px", padding: "1.25rem", textAlign: "center"
                    }}>
                      <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#023B5B", marginBottom: "4px" }}>{r.metric}</div>
                      <div style={{ fontSize: "0.88rem", opacity: 0.7 }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Fachgebiete & Expertise</h2>
                {expertise.map((e, i) => (
                  <div key={i} style={{
                    padding: "1rem 1.25rem", marginBottom: "0.75rem",
                    background: i % 2 === 0 ? "rgba(2,59,91,0.03)" : "transparent",
                    borderRadius: "10px", borderLeft: "3px solid #023B5B"
                  }}>
                    <div style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "4px" }}>{e.area}</div>
                    <div style={{ fontSize: "0.92rem", opacity: 0.75, lineHeight: "1.6" }}>{e.detail}</div>
                  </div>
                ))}
              </div>

              {/* Industries */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Branchenerfahrung</h2>
                <p style={{ fontSize: "0.95rem", opacity: 0.7, marginBottom: "0.75rem" }}>
                  Robert Engel und sein Team haben erfolgreich Recruiting-Kampagnen in folgenden Branchen umgesetzt:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {industries.map((ind, i) => (
                    <span key={i} style={{
                      background: "rgba(2,59,91,0.08)", color: "#023B5B",
                      padding: "6px 14px", borderRadius: "8px", fontSize: "0.88rem", fontWeight: "500"
                    }}>{ind}</span>
                  ))}
                </div>
              </div>

              {/* Regional Focus */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Regionale Expertise</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                  Mit Sitz in Iserlohn kennt Robert den Arbeitsmarkt in Südwestfalen und dem Märkischen Kreis aus erster Hand. 
                  Er versteht die besonderen Herausforderungen der Region: eine starke Industriebasis mit über 150 Weltmarktführern, 
                  aber gleichzeitig wachsender Fachkräftemangel, insbesondere in den Bereichen Handwerk, Pflege und Gastronomie.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Seine Kunden kommen aus dem gesamten Märkischen Kreis – von Iserlohn, Hemer und Menden über Lüdenscheid und Altena 
                  bis nach Plettenberg und Werdohl – sowie aus dem erweiterten Einzugsgebiet einschließlich Hagen, Dortmund, Arnsberg, 
                  Unna und Schwerte. Diese lokale Verankerung ermöglicht es TalentSuite, Kampagnen mit präzisem Geo-Targeting zu 
                  erstellen, die genau die Menschen in der Region erreichen.
                </p>
              </div>

              {/* Services at TalentSuite */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Leistungen bei TalentSuite</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                  Als Gründer von TalentSuite verantwortet Robert die strategische Ausrichtung und Qualitätssicherung aller 
                  Recruiting-Kampagnen. Das Leistungsportfolio umfasst:
                </p>
                <div style={{ fontSize: "1rem", lineHeight: "2" }}>
                  <p>→ <strong>Performance Recruiting</strong> – Datengetriebene Kampagnen auf Meta, Instagram, TikTok und LinkedIn zur gezielten Fachkräftegewinnung</p>
                  <p>→ <strong>Employer Branding</strong> – Entwicklung einer authentischen Arbeitgebermarke durch professionelle Videos und Content-Strategien</p>
                  <p>→ <strong>Content Produktion (MadebyMEE)</strong> – Employer-Branding-Videos, Social-Media-Content und Imagefilme für KMU</p>
                  <p>→ <strong>Neukundengewinnung</strong> – Lead-Generierung und digitale Akquise-Strategien für B2B-Dienstleister und Handwerksbetriebe</p>
                  <p>→ <strong>Webentwicklung</strong> – Conversion-optimierte Karriereseiten und Landingpages für maximale Bewerbungsquoten</p>
                </div>
              </div>

              {/* Social / Contact */}
              <div style={{
                background: "rgba(2,59,91,0.04)", border: "1px solid rgba(2,59,91,0.1)",
                borderRadius: "16px", padding: "1.75rem", marginBottom: "3rem"
              }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Kontakt & Profile</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a href="https://www.linkedin.com/in/robert-engel" target="_blank" rel="noopener noreferrer" style={{
                    padding: "10px 20px", background: "#0A66C2", color: "white", borderRadius: "8px",
                    textDecoration: "none", fontWeight: "600", fontSize: "0.92rem"
                  }}>LinkedIn Profil</a>
                  <a href="https://www.instagram.com/talentsuite.io" target="_blank" rel="noopener noreferrer" style={{
                    padding: "10px 20px", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "white", borderRadius: "8px",
                    textDecoration: "none", fontWeight: "600", fontSize: "0.92rem"
                  }}>Instagram</a>
                  <Link href="/contact" style={{
                    padding: "10px 20px", background: "#023B5B", color: "white", borderRadius: "8px",
                    textDecoration: "none", fontWeight: "600", fontSize: "0.92rem"
                  }}>Kontakt aufnehmen</Link>
                </div>
              </div>

              {/* Published Articles */}
              <div style={{ marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#023B5B" }}>Veröffentlichte Artikel</h2>
                <p style={{ fontSize: "0.95rem", opacity: 0.65, marginBottom: "1rem" }}>
                  Robert teilt sein Wissen regelmäßig im TalentSuite Blog. Hier eine Auswahl seiner Fachbeiträge:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.75rem" }}>
                  {recentArticles.map((a, i) => (
                    <Link key={i} href={a.href} style={{
                      display: "block", padding: "0.85rem 1rem",
                      background: "rgba(2,59,91,0.03)", borderRadius: "10px",
                      textDecoration: "none", color: "#023B5B", fontWeight: "600",
                      fontSize: "0.92rem", border: "1px solid rgba(2,59,91,0.08)",
                      transition: "background 0.2s"
                    }}>→ {a.title}</Link>
                  ))}
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Link href="/blog" style={{ color: "#023B5B", fontWeight: "600", fontSize: "0.95rem" }}>Alle Artikel ansehen →</Link>
                </div>
              </div>

              {/* CTA */}
              <div style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", borderRadius: "16px", padding: "2.5rem", textAlign: "center" }}>
                <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Kostenloses Erstgespräch mit Robert</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
                  Lass uns gemeinsam herausfinden, wie du mit Performance Recruiting qualifizierte Fachkräfte für dein Unternehmen gewinnst.
                </p>
                <a href="https://calendar.app.google/mU29snzEsgqsnMXy8" style={{
                  display: "inline-block", background: "white", color: "#023B5B",
                  padding: "14px 36px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem"
                }}>Jetzt Termin buchen</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
