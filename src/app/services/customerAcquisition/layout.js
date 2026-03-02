export const metadata = {
  title: "Neukundengewinnung — 15–40 qualifizierte Leads pro Monat | TalentSuite",
  description:
    "Planbare Neukundengewinnung über Ads, Funnels und Follow-Up-Systeme. Wir generieren 15–40 qualifizierte Leads pro Monat für Ihr Unternehmen. Kostenlose Analyse sichern.",
  keywords:
    "Neukundengewinnung, Leadgenerierung, Kundenakquise, B2B Leads, Funnel Marketing, Online Kundengewinnung, Ads Agentur, Performance Marketing, Vertriebsautomatisierung",
  alternates: {
    canonical: "https://www.talentsuite.io/services/customerAcquisition",
  },
  openGraph: {
    title: "Neukundengewinnung — 15–40 qualifizierte Leads pro Monat",
    description:
      "Planbare Neukundengewinnung über Ads, Funnels und Follow-Up-Systeme. Wir generieren 15–40 qualifizierte Leads pro Monat für Ihr Unternehmen.",
    url: "https://www.talentsuite.io/services/customerAcquisition",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
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
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.talentsuite.io",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.talentsuite.io/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Neukundengewinnung",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
