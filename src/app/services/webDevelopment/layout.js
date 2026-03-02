export const metadata = {
  title: "Web Development — Websites & Apps die verkaufen | TalentSuite",
  description:
    "Moderne Websites und Web-Apps mit Fokus auf Conversion und Performance. Von der Landingpage bis zur komplexen Webanwendung — entwickelt für messbare Ergebnisse.",
  keywords:
    "Web Development, Website erstellen, App Entwicklung, Webdesign, Landingpage, Next.js, React, Conversion Optimierung, Webentwicklung Agentur",
  alternates: {
    canonical: "https://www.talentsuite.io/services/webDevelopment",
  },
  openGraph: {
    title: "Web Development — Websites & Apps die verkaufen",
    description:
      "Moderne Websites und Web-Apps mit Fokus auf Conversion und Performance. Von der Landingpage bis zur komplexen Webanwendung.",
    url: "https://www.talentsuite.io/services/webDevelopment",
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
                name: "Web Development",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
