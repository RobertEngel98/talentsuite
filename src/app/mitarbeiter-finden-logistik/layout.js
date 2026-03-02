export const metadata = {
  title: "LKW Fahrer gesucht — Personal Logistik finden in 30 Tagen | TalentSuite",
  description: "LKW-Fahrer, Lageristen oder Disponenten gesucht? Bis 2030 fehlen 185.000 Fahrer. Wir finden Logistik-Personal über Social Media. Kostenlose Analyse.",
  keywords: "LKW Fahrer gesucht, Personal Logistik finden, Lagerist gesucht, Mitarbeiter Logistik, Fahrer finden, Disponent gesucht, Spedition Personal finden",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-logistik" },
  openGraph: {
    title: "LKW Fahrer gesucht — Personal Logistik finden in 30 Tagen",
    description: "LKW-Fahrer, Lageristen oder Disponenten gesucht? Bis 2030 fehlen 185.000 Fahrer. Wir finden Logistik-Personal über Social Media. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-logistik",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "LKW Fahrer gesucht — Personal Logistik finden in 30 Tagen", description: "LKW-Fahrer, Lageristen oder Disponenten gesucht? Bis 2030 fehlen 185.000 Fahrer. Wir finden Logistik-Personal über Socia" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Logistik & Transport",
        url: "https://www.talentsuite.io/mitarbeiter-finden-logistik",
        description: "LKW-Fahrer, Lageristen oder Disponenten gesucht? Bis 2030 fehlen 185.000 Fahrer. Wir finden Logistik-Personal über Social Media. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
