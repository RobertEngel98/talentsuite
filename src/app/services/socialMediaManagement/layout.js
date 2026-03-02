export const metadata = {
  title: "Social Media Management — Mehr Reichweite auf allen Plattformen | TalentSuite",
  description:
    "Professionelles Social Media Management für Instagram, TikTok, LinkedIn & Co. Strategie, Content-Erstellung und Community Management aus einer Hand. Jetzt kostenlose Analyse sichern.",
  keywords:
    "Social Media Management, Instagram Marketing, TikTok Agentur, LinkedIn Marketing, Content Strategie, Community Management, Social Media Agentur, Reichweite steigern",
  alternates: {
    canonical: "https://www.talentsuite.io/services/socialMediaManagement",
  },
  openGraph: {
    title: "Social Media Management — Mehr Reichweite auf allen Plattformen",
    description:
      "Professionelles Social Media Management für Instagram, TikTok, LinkedIn & Co. Strategie, Content-Erstellung und Community Management aus einer Hand.",
    url: "https://www.talentsuite.io/services/socialMediaManagement",
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
                name: "Social Media Management",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
