export const metadata = {
  title: "Stellenanzeige schreiben — Kostenloser Generator für Handwerk, Pflege & mehr | TalentSuite",
  description:
    "Stellenanzeige schreiben leicht gemacht: Kostenloser Generator erstellt in 60 Sekunden eine professionelle Stellenanzeige für Handwerk, Pflege, Gastro & Logistik. Mit Vorlage und SEO-Optimierung.",
  keywords:
    "Stellenanzeige schreiben, Stellenanzeige Vorlage, Stellenanzeige Muster, Stellenanzeige erstellen, Stellenanzeige Handwerk, Stellenanzeige Pflege, Job Anzeige Generator, Stellenausschreibung Vorlage kostenlos",
  alternates: { canonical: "https://www.talentsuite.io/stellenanzeigen-generator" },
  openGraph: {
    title: "Stellenanzeige schreiben — Kostenloser Generator | TalentSuite",
    description: "In 60 Sekunden eine professionelle Stellenanzeige erstellen. Kostenlos, mit Branchenvorlagen für Handwerk, Pflege, Gastro & mehr.",
    url: "https://www.talentsuite.io/stellenanzeigen-generator",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Kostenloser Stellenanzeigen-Generator | TalentSuite", description: "Professionelle Stellenanzeige in 60 Sekunden erstellen." },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Stellenanzeigen-Generator",
            url: "https://www.talentsuite.io/stellenanzeigen-generator",
            description: "Kostenloser Online-Generator für professionelle Stellenanzeigen. Branchenspezifische Vorlagen für Handwerk, Pflege, Gastronomie und mehr.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
          }),
        }}
      />
      {children}
    </>
  );
}
