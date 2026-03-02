export const metadata = {
  title: "Personal Gastronomie finden — Koch & Servicekraft gesucht? | TalentSuite",
  description: "Koch, Servicekraft oder Hotelfachfrau gesucht? Nach COVID hat die Gastro 275.000 Fachkräfte verloren. Wir finden neue über Social Media. Kostenlose Analyse.",
  keywords: "Personal Gastronomie finden, Koch gesucht, Servicekraft finden, Mitarbeiter Gastronomie, Personal Hotel finden, Küchenpersonal gesucht, Gastro Personal Mangel",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-gastronomie" },
  openGraph: {
    title: "Personal Gastronomie finden — Koch & Servicekraft gesucht?",
    description: "Koch, Servicekraft oder Hotelfachfrau gesucht? Nach COVID hat die Gastro 275.000 Fachkräfte verloren. Wir finden neue über Social Media. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-gastronomie",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Personal Gastronomie finden — Koch & Servicekraft gesucht?", description: "Koch, Servicekraft oder Hotelfachfrau gesucht? Nach COVID hat die Gastro 275.000 Fachkräfte verloren. Wir finden neue üb" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Gastronomie & Hotellerie",
        url: "https://www.talentsuite.io/mitarbeiter-finden-gastronomie",
        description: "Koch, Servicekraft oder Hotelfachfrau gesucht? Nach COVID hat die Gastro 275.000 Fachkräfte verloren. Wir finden neue über Social Media. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
