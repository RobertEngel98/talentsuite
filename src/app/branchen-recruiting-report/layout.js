export const metadata = {
  title: "Branchen-Recruiting-Report 2026 — Fachkräfte finden in Handwerk, Pflege & Gastro | TalentSuite",
  description:
    "Kostenloser Recruiting-Report für Ihre Branche: Aktuelle Arbeitsmarktdaten, Vakanzzeiten, Recruiting-Kosten und bewährte Strategien für Handwerk, Pflege, Gastro, Logistik & Industrie.",
  keywords:
    "Recruiting Report, Fachkräftemangel Handwerk 2026, Pflegekräfte finden, Personal Gastronomie, Mitarbeiter finden Logistik, Vakanzzeiten, Recruiting Kosten Branche, Arbeitsmarkt Handwerk",
  alternates: { canonical: "https://www.talentsuite.io/branchen-recruiting-report" },
  openGraph: {
    title: "Branchen-Recruiting-Report 2026 — Zahlen, Strategien & Lösungen",
    description: "Aktuelle Daten zu Vakanzzeiten, Recruiting-Kosten und Fachkräftelücken in Ihrer Branche. Jetzt kostenlos herunterladen.",
    url: "https://www.talentsuite.io/branchen-recruiting-report",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Branchen-Recruiting-Report 2026 | TalentSuite", description: "Fachkräftemangel-Zahlen & Recruiting-Strategien für Ihre Branche." },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Branchen-Recruiting-Report 2026",
            description: "Aktuelle Arbeitsmarktdaten, Recruiting-Strategien und Branchenbenchmarks für den deutschen Mittelstand.",
            author: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
            publisher: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io", logo: { "@type": "ImageObject", url: "https://www.talentsuite.io/logo.png" } },
            datePublished: "2026-02-01",
            dateModified: "2026-02-21",
            mainEntityOfPage: "https://www.talentsuite.io/branchen-recruiting-report",
          }),
        }}
      />
      {children}
    </>
  );
}
