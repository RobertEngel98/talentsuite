export const metadata = {
  title: "Fullservice E-Commerce Agentur — Mehr Umsatz, weniger Aufwand | TalentSuite",
  description:
    "Von Strategie über Shop-Aufbau bis Skalierung — wir betreuen Ihren E-Commerce ganzheitlich. Conversion-Optimierung, Paid Ads und datengetriebenes Wachstum für Ihren Online-Shop.",
  keywords:
    "E-Commerce Agentur, Online-Shop, Shopify, WooCommerce, Shop Optimierung, Conversion Rate, E-Commerce Beratung, Online-Shop erstellen, E-Commerce Skalierung",
  alternates: {
    canonical: "https://www.talentsuite.io/services/ecommerce",
  },
  openGraph: {
    title: "Fullservice E-Commerce Agentur — Mehr Umsatz, weniger Aufwand",
    description:
      "Von Strategie über Shop-Aufbau bis Skalierung — wir betreuen Ihren E-Commerce ganzheitlich. Conversion-Optimierung und datengetriebenes Wachstum.",
    url: "https://www.talentsuite.io/services/ecommerce",
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
                name: "E-Commerce",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
