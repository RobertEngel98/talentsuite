export const metadata = {
  title: "Dachdecker gesucht — Dachdecker & Spengler finden | TalentSuite",
  description: "Dachdecker, Spengler oder Dachdeckermeister gesucht? Einer der am stärksten betroffenen Handwerksberufe. Social Recruiting findet passende Fachkräfte. Kostenlose Analyse.",
  keywords: "Dachdecker gesucht, Dachdecker finden, Spengler gesucht, Dachdeckermeister finden, Personal Dachdecker, Mitarbeiter Dachdecker, Dachdecker Fachkräftemangel",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-finden-dachdecker" },
  openGraph: {
    title: "Dachdecker gesucht — Dachdecker & Spengler finden",
    description: "Dachdecker, Spengler oder Dachdeckermeister gesucht? Einer der am stärksten betroffenen Handwerksberufe. Social Recruiting findet passende Fachkräfte. Kostenlos",
    url: "https://www.talentsuite.io/mitarbeiter-finden-dachdecker",
    siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Dachdecker gesucht — Dachdecker & Spengler finden", description: "Dachdecker, Spengler oder Dachdeckermeister gesucht? Einer der am stärksten betroffenen Handwerksberufe. Social Recruiti" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Social Recruiting für Dachdeckerhandwerk",
        url: "https://www.talentsuite.io/mitarbeiter-finden-dachdecker",
        description: "Dachdecker, Spengler oder Dachdeckermeister gesucht? Einer der am stärksten betroffenen Handwerksberufe. Social Recruiting findet passende Fachkräfte. Kostenlose Analyse.",
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
        areaServed: { "@type": "Country", name: "Germany" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Recruiting-Analyse" },
        serviceType: "Social Media Recruiting",
      }) }} />
      {children}
    </>
  );
}
