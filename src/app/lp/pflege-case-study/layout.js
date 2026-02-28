export const metadata = {
  title: "Case Study: 12 Pflegekräfte in 4 Wochen – ohne Jobportale | TalentSuite",
  description:
    "Wie ein Pflegeheim in NRW in 4 Wochen 63 Bewerbungen erhielt und 12 Pflegekräfte einstellte. Ohne Jobportale, ohne Zeitarbeit. Mit Social Media Recruiting.",
  keywords:
    "Pflege Case Study, Pflegekräfte recruiting Erfolg, Social Media Recruiting Pflege Ergebnis, Pflegefachkräfte finden Beispiel",
  alternates: { canonical: "https://talentsuite.io/lp/pflege-case-study" },
  openGraph: {
    title: "Case Study: 12 Pflegekräfte in 4 Wochen | TalentSuite",
    description: "63 Bewerbungen. 28 qualifiziert. 12 Einstellungen. 208€ pro Einstellung.",
    url: "https://talentsuite.io/lp/pflege-case-study",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 12 Pflegekräfte in 4 Wochen | TalentSuite",
    description: "63 Bewerbungen. 12 Einstellungen. 208€ pro Einstellung.",
  },
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
            headline: "Wie ein Pflegeheim in 4 Wochen 12 Pflegekräfte rekrutiert hat",
            description: "Case Study: Social Media Recruiting für die Pflege. 63 Bewerbungen, 12 Einstellungen in 4 Wochen.",
            author: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
            publisher: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
          }),
        }}
      />
      {children}
    </>
  );
}
