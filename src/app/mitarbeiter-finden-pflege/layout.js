export const metadata = {
  title: "Pflegekräfte finden — Personal Pflege gesucht? | TalentSuite",
  description: "Pflegefachkräfte, Altenpfleger oder Pflegehelfer gesucht? Social Media Recruiting erreicht die 72%, die nicht auf Jobbörsen suchen. Kostenlose Recruiting-Analyse.",
  keywords: "Pflegekräfte finden, Personal Pflege gesucht, Pflegefachkraft finden, Altenpfleger gesucht, Mitarbeiter Pflege, Pflegepersonal finden, Krankenpfleger gesucht",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-pflege" },
  openGraph: {
    title: "Pflegekräfte finden — Personal Pflege gesucht?",
    description: "Pflegefachkräfte, Altenpfleger oder Pflegehelfer gesucht? Social Media Recruiting erreicht die 72%, die nicht auf Jobbörsen suchen. Kostenlose Recruiting-Analys",
    url: "https://www.talentsuite.io/mitarbeiter-finden-pflege",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Pflegekräfte finden — Personal Pflege gesucht?", description: "Pflegefachkräfte, Altenpfleger oder Pflegehelfer gesucht? Social Media Recruiting erreicht die 72%, die nicht auf Jobbör" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Pflege & Gesundheit",
        url: "https://www.talentsuite.io/mitarbeiter-finden-pflege",
        description: "Pflegefachkräfte, Altenpfleger oder Pflegehelfer gesucht? Social Media Recruiting erreicht die 72%, die nicht auf Jobbörsen suchen. Kostenlose Recruiting-Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
