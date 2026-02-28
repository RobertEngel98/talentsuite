export const metadata = {
  title: "Kostenloser Recruiting-Plan für Pflegekräfte | TalentSuite",
  description:
    "In 15 Minuten zeigen wir Ihnen, wie viele Pflegekräfte Sie in den nächsten 30 Tagen gewinnen können. Kostenlos und unverbindlich.",
  keywords:
    "Recruiting Analyse Pflege, Pflegekräfte finden Beratung, kostenlose Recruiting Beratung Pflege, Performance Recruiting Pflege Termin",
  alternates: { canonical: "https://talentsuite.io/lp/pflege-termin" },
  openGraph: {
    title: "Kostenloser Recruiting-Plan für Pflegekräfte | TalentSuite",
    description: "15 Minuten. Kostenlos. Ihr individueller Plan für Pflegekräfte.",
    url: "https://talentsuite.io/lp/pflege-termin",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenloser Recruiting-Plan für Pflegekräfte | TalentSuite",
    description: "15 Minuten. Kostenlos. Ihr individueller Plan für Pflegekräfte.",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Kostenlose Recruiting-Analyse für Pflegeeinrichtungen",
            url: "https://talentsuite.io/lp/pflege-termin",
            description: "15-minütige kostenlose Recruiting-Analyse für Pflegeeinrichtungen mit individuellem Recruiting-Plan.",
            provider: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
            areaServed: { "@type": "Country", name: "Germany" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlos und unverbindlich" },
          }),
        }}
      />
      {children}
    </>
  );
}
