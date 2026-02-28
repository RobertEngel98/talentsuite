export const metadata = {
  title: "Kostenloser Recruiting-Plan für KFZ-Fachkräfte | TalentSuite",
  description:
    "In 15 Minuten zeigen wir Ihnen, wie viele KFZ-Fachkräfte Sie in den nächsten 30 Tagen gewinnen können. Kostenlos und unverbindlich.",
  keywords:
    "Recruiting Analyse KFZ, KFZ Fachkräfte finden Beratung, kostenlose Recruiting Beratung KFZ, Performance Recruiting KFZ Termin",
  alternates: { canonical: "https://talentsuite.io/lp/kfz-termin" },
  openGraph: {
    title: "Kostenloser Recruiting-Plan für KFZ-Fachkräfte | TalentSuite",
    description: "15 Minuten. Kostenlos. Ihr individueller Plan für KFZ-Fachkräfte.",
    url: "https://talentsuite.io/lp/kfz-termin",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [{ url: "https://talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenloser Recruiting-Plan für KFZ-Fachkräfte | TalentSuite",
    description: "15 Minuten. Kostenlos. Ihr individueller Plan für KFZ-Fachkräfte.",
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
            "@type": "Service",
            name: "Kostenlose Recruiting-Analyse für KFZ-Betriebe",
            url: "https://talentsuite.io/lp/kfz-termin",
            description: "15-minütige kostenlose Recruiting-Analyse für KFZ-Betriebe mit individuellem Recruiting-Plan.",
            provider: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
            areaServed: { "@type": "Country", name: "Germany" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlos und unverbindlich" },
          }),
        }}
      />
      {children}
    </>
  );
}
