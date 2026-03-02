export const metadata = {
  title: "Arbeitgeber-Schnellcheck — Wie attraktiv ist Ihr Betrieb für Bewerber? | TalentSuite",
  description:
    "Kostenloser Arbeitgeber-Schnellcheck: In 2 Minuten erfahren Sie, wie recruiting-fähig Ihr Betrieb wirklich ist. 10 Fragen, sofortiges Ergebnis mit konkretem Maßnahmenplan.",
  keywords:
    "Arbeitgeberattraktivität, Employer Branding KMU, Arbeitgeber Check, Recruiting Check, Fachkräftemangel Handwerk, Mitarbeiter finden, Arbeitgebermarke, Personalgewinnung",
  alternates: { canonical: "https://www.talentsuite.io/arbeitgeber-schnellcheck" },
  openGraph: {
    title: "Arbeitgeber-Schnellcheck — Wie sichtbar ist Ihr Betrieb?",
    description:
      "10 Fragen, 2 Minuten: Finden Sie heraus, ob Fachkräfte sich bei Ihnen bewerben würden. Kostenlos & sofort.",
    url: "https://www.talentsuite.io/arbeitgeber-schnellcheck",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbeitgeber-Schnellcheck | TalentSuite",
    description: "In 2 Minuten wissen, wie recruiting-fähig Ihr Betrieb ist.",
    images: ["https://www.talentsuite.io/og-image.jpg"],
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
            "@type": "WebApplication",
            name: "Arbeitgeber-Schnellcheck",
            url: "https://www.talentsuite.io/arbeitgeber-schnellcheck",
            description:
              "Kostenloses Online-Tool: Prüfen Sie in 2 Minuten, wie attraktiv Ihr Betrieb für Bewerber ist und erhalten Sie einen konkreten Maßnahmenplan.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            provider: {
              "@type": "Organization",
              name: "TalentSuite",
              url: "https://www.talentsuite.io",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
