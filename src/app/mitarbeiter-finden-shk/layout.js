export const metadata = {
  title: "Mitarbeiter finden SHK — Anlagenmechaniker & Monteure gesucht? | TalentSuite",
  description: "Sie suchen SHK-Fachkräfte? Anlagenmechaniker, Kundendiensttechniker oder Meister — wir finden passende Bewerber in 30 Tagen über Social Media. Kostenlose Recruiting-Analyse.",
  keywords: "Mitarbeiter finden SHK, Anlagenmechaniker gesucht, SHK Fachkräfte finden, Monteur SHK gesucht, Personal SHK, Kundendiensttechniker finden, Heizungsmonteur gesucht",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-shk" },
  openGraph: {
    title: "Mitarbeiter finden SHK — Anlagenmechaniker & Monteure gesucht?",
    description: "Sie suchen SHK-Fachkräfte? Anlagenmechaniker, Kundendiensttechniker oder Meister — wir finden passende Bewerber in 30 Tagen über Social Media. Kostenlose Recrui",
    url: "https://www.talentsuite.io/mitarbeiter-finden-shk",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Mitarbeiter finden SHK — Anlagenmechaniker & Monteure gesucht?", description: "Sie suchen SHK-Fachkräfte? Anlagenmechaniker, Kundendiensttechniker oder Meister — wir finden passende Bewerber in 30 Ta" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für SHK-Handwerk",
        url: "https://www.talentsuite.io/mitarbeiter-finden-shk",
        description: "Sie suchen SHK-Fachkräfte? Anlagenmechaniker, Kundendiensttechniker oder Meister — wir finden passende Bewerber in 30 Tagen über Social Media. Kostenlose Recruiting-Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
