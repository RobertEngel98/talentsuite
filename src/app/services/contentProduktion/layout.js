export const metadata = {
  title: "Content Produktion — Videos & Ads die konvertieren | TalentSuite",
  description:
    "Professionelle Content Produktion für Social Media, Werbeanzeigen und Unternehmensvideos. Vom Konzept bis zum fertigen Creative — Content der Ergebnisse liefert.",
  keywords:
    "Content Produktion, Video Marketing, Social Media Content, Werbevideos, Ad Creatives, UGC Content, Videoproduktion, Content Agentur, Reels Produktion",
  alternates: {
    canonical: "https://www.talentsuite.io/services/contentProduktion",
  },
  openGraph: {
    title: "Content Produktion — Videos & Ads die konvertieren",
    description:
      "Professionelle Content Produktion für Social Media, Werbeanzeigen und Unternehmensvideos. Vom Konzept bis zum fertigen Creative.",
    url: "https://www.talentsuite.io/services/contentProduktion",
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
                name: "Content Produktion",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
