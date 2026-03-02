export const metadata = {
  title: "Performance Recruiting Agentur — Ø 40+ Bewerbungen in 30 Tagen | TalentSuite",
  description:
    "Qualifizierte Bewerbungen über Social Media statt Jobbörsen. 50+ Unternehmen vertrauen auf unser Performance Recruiting System. Kostenlose Analyse sichern.",
  keywords:
    "Performance Recruiting, Social Media Recruiting, Personalgewinnung, Bewerberfunnel, Recruiting Agentur, Fachkräftemangel, Social Recruiting DACH",
  alternates: { canonical: "https://www.talentsuite.io/services/performanceRecruiting" },
  openGraph: {
    title: "Performance Recruiting — Ø 40+ Bewerbungen in 30 Tagen",
    description:
      "Qualifizierte Bewerbungen über Social Media Ads. Datenbasiert, messbar, planbar.",
    url: "https://www.talentsuite.io/services/performanceRecruiting",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.talentsuite.io" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://www.talentsuite.io/services" },
              { "@type": "ListItem", position: 3, name: "Performance Recruiting" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
