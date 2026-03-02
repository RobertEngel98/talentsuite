export const metadata = {
  title: "Mitarbeiter-Bindungs-Toolkit — Onboarding-Checkliste, Gesprächsleitfaden & Quick Wins | TalentSuite",
  description:
    "Kostenloses Toolkit für Mitarbeiterbindung: Onboarding-Checkliste (erste 90 Tage), Mitarbeitergespräch-Leitfaden und 15 Quick Wins gegen Fluktuation. Für Handwerk, Pflege & KMU.",
  keywords:
    "Mitarbeiterbindung Maßnahmen, Mitarbeiter halten, Fluktuation senken, Onboarding Checkliste, Mitarbeitergespräch Leitfaden, Mitarbeiterbindung KMU, Retention Management, Arbeitgeberattraktivität",
  alternates: { canonical: "https://www.talentsuite.io/mitarbeiter-bindung" },
  openGraph: {
    title: "Mitarbeiter-Bindungs-Toolkit — Kostenlos herunterladen",
    description: "3 sofort einsetzbare Werkzeuge gegen Fluktuation: Onboarding-Checkliste, Gesprächsleitfaden und Quick Wins für KMU.",
    url: "https://www.talentsuite.io/mitarbeiter-bindung", siteName: "TalentSuite", locale: "de_DE", type: "website",
    images: [{ url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Mitarbeiter-Bindungs-Toolkit | TalentSuite", description: "3 Tools gegen Fluktuation — kostenlos." },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        name: "Mitarbeiterbindung verbessern — Toolkit für KMU",
        description: "Kostenloses Toolkit mit 3 Werkzeugen zur Senkung der Fluktuation und Steigerung der Mitarbeiterbindung in kleinen und mittleren Unternehmen.",
        step: [
          { "@type": "HowToStep", name: "Onboarding-Checkliste nutzen", text: "Strukturiertes Onboarding in den ersten 90 Tagen senkt die Frühfluktuation um bis zu 82%." },
          { "@type": "HowToStep", name: "Mitarbeitergespräche führen", text: "Vierteljährliche Check-ins mit 10 bewährten Fragen stärken die Bindung und beugen inneren Kündigungen vor." },
          { "@type": "HowToStep", name: "Quick Wins umsetzen", text: "15 sofort umsetzbare Maßnahmen, die die Arbeitgeberattraktivität steigern — ohne großes Budget." },
        ],
        provider: { "@type": "Organization", name: "TalentSuite", url: "https://www.talentsuite.io" },
      }) }} />
      {children}
    </>
  );
}
