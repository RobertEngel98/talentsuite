export const metadata = {
  title: "Case Study: 6 KFZ-Mechatroniker in 5 Wochen – ohne Jobportale | TalentSuite",
  description:
    "Wie ein Autohaus in NRW in 5 Wochen 42 Bewerbungen erhielt und 6 KFZ-Fachkräfte einstellte. Ohne Jobportale, ohne teure Vermittler. Mit Social Media Recruiting.",
  keywords:
    "KFZ Case Study, KFZ Mechatroniker recruiting Erfolg, Social Media Recruiting KFZ Ergebnis, KFZ Fachkräfte finden Beispiel",
  alternates: { canonical: "https://talentsuite.io/lp/kfz-case-study" },
  openGraph: {
    title: "Case Study: 6 KFZ-Mechatroniker in 5 Wochen | TalentSuite",
    description: "42 Bewerbungen. 18 qualifiziert. 6 Einstellungen. 195€ pro Einstellung.",
    url: "https://talentsuite.io/lp/kfz-case-study",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 6 KFZ-Mechatroniker in 5 Wochen | TalentSuite",
    description: "42 Bewerbungen. 6 Einstellungen. 195€ pro Einstellung.",
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
            headline: "Wie Autohaus Müller in 5 Wochen 6 KFZ-Mechatroniker rekrutiert hat",
            description: "Case Study: Social Media Recruiting für das KFZ-Gewerbe. 42 Bewerbungen, 6 Einstellungen in 5 Wochen.",
            author: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
            publisher: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
          }),
        }}
      />
      {children}
    </>
  );
}
