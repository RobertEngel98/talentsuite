export const metadata = {
  title: "Elektriker gesucht — Elektroniker finden in 30 Tagen | TalentSuite",
  description: "Elektroniker, Elektroinstallateure oder Elektrotechniker gesucht? Wir finden qualifizierte Elektro-Fachkräfte über Social Media Recruiting. Kostenlose Analyse.",
  keywords: "Elektriker gesucht, Elektroniker finden, Elektrofachkraft gesucht, Elektroinstallateur finden, Personal Elektro, Mitarbeiter finden Elektro, Elektriker Fachkräftemangel",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-elektro" },
  openGraph: {
    title: "Elektriker gesucht — Elektroniker finden in 30 Tagen",
    description: "Elektroniker, Elektroinstallateure oder Elektrotechniker gesucht? Wir finden qualifizierte Elektro-Fachkräfte über Social Media Recruiting. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-elektro",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Elektriker gesucht — Elektroniker finden in 30 Tagen", description: "Elektroniker, Elektroinstallateure oder Elektrotechniker gesucht? Wir finden qualifizierte Elektro-Fachkräfte über Socia" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Elektrohandwerk",
        url: "https://www.talentsuite.io/mitarbeiter-finden-elektro",
        description: "Elektroniker, Elektroinstallateure oder Elektrotechniker gesucht? Wir finden qualifizierte Elektro-Fachkräfte über Social Media Recruiting. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
