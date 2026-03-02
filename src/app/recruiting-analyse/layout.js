export const metadata = {
  title: "Kostenlose Recruiting-Analyse — Fachkräfte finden in 30 Tagen | TalentSuite",
  description:
    "Kostenlose 20-Minuten-Analyse Ihrer Recruiting-Situation: Wir zeigen Ihnen, wie Sie in 30 Tagen qualifizierte Bewerbungen erhalten — für Handwerk, Pflege, Gastro & Logistik. Unverbindlich.",
  keywords:
    "Recruiting Analyse kostenlos, Fachkräfte finden, Mitarbeiter finden Handwerk, Social Recruiting Beratung, Performance Recruiting, Personalgewinnung Beratung, Recruiting Agentur Handwerk",
  alternates: { canonical: "https://www.talentsuite.io/recruiting-analyse" },
  openGraph: {
    title: "Kostenlose Recruiting-Analyse | TalentSuite",
    description: "In 20 Minuten zeigen wir Ihnen, wie Sie in 30 Tagen qualifizierte Bewerbungen erhalten. Für Handwerk, Pflege, Gastro & Logistik.",
    url: "https://www.talentsuite.io/recruiting-analyse", siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Kostenlose Recruiting-Analyse | TalentSuite", description: "20 Min. Analyse — unverbindlich. Fachkräfte finden in 30 Tagen." },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Kostenlose Recruiting-Analyse",
        url: "https://www.talentsuite.io/recruiting-analyse",
        description: "Kostenlose 20-minütige Analyse der Recruiting-Situation mit konkreten Handlungsempfehlungen für den Mittelstand.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose und unverbindliche Erstberatung" },
      }) }} />
      {children}
    </>
  );
}
