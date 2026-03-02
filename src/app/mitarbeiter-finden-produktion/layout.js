export const metadata = {
  title: "Produktionsmitarbeiter gesucht — Personal Produktion finden | TalentSuite",
  description: "Produktionsmitarbeiter, Maschinenführer oder Industriemechaniker gesucht? Wir finden qualifizierte Fachkräfte für Ihre Fertigung. Kostenlose Analyse.",
  keywords: "Produktionsmitarbeiter gesucht, Personal Produktion finden, Maschinenführer gesucht, Industriemechaniker finden, CNC Fachkraft gesucht, Mitarbeiter Fertigung",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-produktion" },
  openGraph: {
    title: "Produktionsmitarbeiter gesucht — Personal Produktion finden",
    description: "Produktionsmitarbeiter, Maschinenführer oder Industriemechaniker gesucht? Wir finden qualifizierte Fachkräfte für Ihre Fertigung. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-produktion",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Produktionsmitarbeiter gesucht — Personal Produktion finden", description: "Produktionsmitarbeiter, Maschinenführer oder Industriemechaniker gesucht? Wir finden qualifizierte Fachkräfte für Ihre F" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Industrie & Produktion",
        url: "https://www.talentsuite.io/mitarbeiter-finden-produktion",
        description: "Produktionsmitarbeiter, Maschinenführer oder Industriemechaniker gesucht? Wir finden qualifizierte Fachkräfte für Ihre Fertigung. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
