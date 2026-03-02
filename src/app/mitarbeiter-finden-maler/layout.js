export const metadata = {
  title: "Maler gesucht — Maler und Lackierer finden in 30 Tagen | TalentSuite",
  description: "Maler und Lackierer, Fahrzeuglackierer oder Malermeister gesucht? Wir finden qualifizierte Maler über Social Media Recruiting. Kostenlose Analyse.",
  keywords: "Maler gesucht, Maler und Lackierer finden, Malermeister gesucht, Lackierer finden, Personal Maler, Mitarbeiter Malerbetrieb, Maler Fachkräftemangel",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-maler" },
  openGraph: {
    title: "Maler gesucht — Maler und Lackierer finden in 30 Tagen",
    description: "Maler und Lackierer, Fahrzeuglackierer oder Malermeister gesucht? Wir finden qualifizierte Maler über Social Media Recruiting. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-maler",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Maler gesucht — Maler und Lackierer finden in 30 Tagen", description: "Maler und Lackierer, Fahrzeuglackierer oder Malermeister gesucht? Wir finden qualifizierte Maler über Social Media Recru" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Maler- & Lackiererhandwerk",
        url: "https://www.talentsuite.io/mitarbeiter-finden-maler",
        description: "Maler und Lackierer, Fahrzeuglackierer oder Malermeister gesucht? Wir finden qualifizierte Maler über Social Media Recruiting. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
