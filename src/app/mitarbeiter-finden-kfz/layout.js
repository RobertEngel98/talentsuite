export const metadata = {
  title: "KFZ Mechatroniker gesucht — Mechaniker & Meister finden | TalentSuite",
  description: "KFZ-Mechatroniker, KFZ-Mechaniker oder Meister gesucht? E-Mobilität braucht neue Skills. Wir finden KFZ-Fachkräfte über Social Recruiting. Kostenlose Analyse.",
  keywords: "KFZ Mechatroniker gesucht, KFZ Mechaniker finden, Autohaus Personal, Werkstatt Mitarbeiter gesucht, KFZ Meister finden, Mitarbeiter KFZ Werkstatt",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-kfz" },
  openGraph: {
    title: "KFZ Mechatroniker gesucht — Mechaniker & Meister finden",
    description: "KFZ-Mechatroniker, KFZ-Mechaniker oder Meister gesucht? E-Mobilität braucht neue Skills. Wir finden KFZ-Fachkräfte über Social Recruiting. Kostenlose Analyse.",
    url: "https://www.talentsuite.io/mitarbeiter-finden-kfz",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "KFZ Mechatroniker gesucht — Mechaniker & Meister finden", description: "KFZ-Mechatroniker, KFZ-Mechaniker oder Meister gesucht? E-Mobilität braucht neue Skills. Wir finden KFZ-Fachkräfte über " },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für KFZ-Handwerk",
        url: "https://www.talentsuite.io/mitarbeiter-finden-kfz",
        description: "KFZ-Mechatroniker, KFZ-Mechaniker oder Meister gesucht? E-Mobilität braucht neue Skills. Wir finden KFZ-Fachkräfte über Social Recruiting. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
