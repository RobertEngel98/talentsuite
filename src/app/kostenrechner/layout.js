export const metadata = {
  title: "Vakanzkosten-Rechner — Was kostet eine unbesetzte Stelle? | TalentSuite",
  description:
    "Berechnen Sie Ihre tatsächlichen Vakanzkosten in 60 Sekunden: Produktivitätsverlust, Überstunden und entgangener Umsatz pro unbesetzter Stelle. Kostenloser Online-Rechner für Handwerk, Pflege & KMU.",
  keywords:
    "Vakanzkosten berechnen, Kosten unbesetzte Stelle, Fachkräftemangel Kosten, Vakanzkosten Rechner, Personalkosten Kalkulator, Kosten offene Stelle, Recruiting ROI berechnen",
  alternates: { canonical: "https://www.talentsuite.io/kostenrechner" },
  openGraph: {
    title: "Vakanzkosten-Rechner — Was kostet Ihre unbesetzte Stelle?",
    description: "In 60 Sekunden berechnen, was unbesetzte Stellen Ihren Betrieb wirklich kosten. Kostenloser Online-Rechner.",
    url: "https://www.talentsuite.io/kostenrechner", siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Vakanzkosten-Rechner | TalentSuite", description: "Was kostet eine unbesetzte Stelle? In 60 Sekunden berechnen." },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebApplication",
        name: "Vakanzkosten-Rechner",
        url: "https://www.talentsuite.io/kostenrechner",
        description: "Kostenloser Online-Rechner: Berechnen Sie in 60 Sekunden, was unbesetzte Stellen Ihren Betrieb kosten.",
        applicationCategory: "BusinessApplication", operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
      }) }} />
      {children}
    </>
  );
}
