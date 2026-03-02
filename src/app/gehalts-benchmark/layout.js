export const metadata = {
  title: "Gehalts- & Benefits-Benchmark 2026 — Was verdienen Fachkräfte in Ihrer Branche? | TalentSuite",
  description:
    "Kostenloser Gehaltsvergleich für Handwerk, Pflege, Gastro & Logistik: Durchschnittsgehälter, empfohlene Benefits und was Top-Arbeitgeber bieten. Datenbasiert & regional.",
  keywords:
    "Gehalt Handwerk, Gehalt Pflege, Gehalt Gastronomie, Benefits Arbeitgeber, Gehaltsvergleich Branche, Was verdient ein Elektriker, Gehalt SHK, Gehalt Pflegefachkraft, 4-Tage-Woche Handwerk",
  alternates: { canonical: "https://www.talentsuite.io/gehalts-benchmark" },
  openGraph: {
    title: "Gehalts- & Benefits-Benchmark 2026 | TalentSuite",
    description: "Was verdienen Fachkräfte in Ihrer Branche? Vergleichen Sie Gehälter und Benefits — kostenlos und datenbasiert.",
    url: "https://www.talentsuite.io/gehalts-benchmark", siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Gehalts-Benchmark 2026 | TalentSuite", description: "Gehälter & Benefits vergleichen — für Handwerk, Pflege, Gastro & mehr." },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebApplication",
        name: "Gehalts- & Benefits-Benchmark",
        url: "https://www.talentsuite.io/gehalts-benchmark",
        description: "Kostenloser Gehaltsvergleich und Benefits-Check für Fachkräfte in Handwerk, Pflege, Gastronomie, Logistik und Industrie.",
        applicationCategory: "BusinessApplication", operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
      }) }} />
      {children}
    </>
  );
}
