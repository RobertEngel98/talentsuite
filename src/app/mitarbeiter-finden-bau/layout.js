export const metadata = {
  title: "Mitarbeiter Bau gesucht — Maurer & Zimmerer finden | TalentSuite",
  description: "Maurer, Zimmerer, Betonbauer oder Bauleiter gesucht? 55.000+ offene Stellen im Bau. Wir finden Baufachkräfte über Social Media. Kostenlose Analyse.",
  keywords: "Mitarbeiter Bau gesucht, Maurer gesucht, Zimmerer finden, Bauleiter finden, Bauarbeiter gesucht, Personal Bau finden, Fachkräfte Bau",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-bau" },
  openGraph: {
    title: "Mitarbeiter Bau gesucht — Maurer & Zimmerer finden",
    description: "Maurer, Zimmerer, Betonbauer oder Bauleiter gesucht? 55.000+ offene Stellen im Bau. Wir finden Baufachkräfte über Social Media. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-bau",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Mitarbeiter Bau gesucht — Maurer & Zimmerer finden", description: "Maurer, Zimmerer, Betonbauer oder Bauleiter gesucht? 55.000+ offene Stellen im Bau. Wir finden Baufachkräfte über Social" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Bau & Ausbau",
        url: "https://www.talentsuite.io/mitarbeiter-finden-bau",
        description: "Maurer, Zimmerer, Betonbauer oder Bauleiter gesucht? 55.000+ offene Stellen im Bau. Wir finden Baufachkräfte über Social Media. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
