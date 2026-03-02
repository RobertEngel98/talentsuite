export const metadata = {
  title: "Pflegefachkräfte finden – ohne Jobportale | TalentSuite",
  description:
    "In 30 Tagen qualifizierte Bewerbungen von Pflegekräften über Social Media. Ohne Jobportale, ohne Zeitarbeit. Kostenlose Analyse für Ihre Einrichtung.",
  keywords:
    "Pflegepersonal finden, Pflegekräfte recruiting, Pflegefachkraft suchen, Social Media Recruiting Pflege, Performance Recruiting Pflege, Alternative Zeitarbeit Pflege",
  alternates: { canonical: "https://www.talentsuite.io/lp/pflege-recruiting" },
  openGraph: {
    title: "Pflegefachkräfte finden – ohne Jobportale | TalentSuite",
    description:
      "In 30 Tagen qualifizierte Bewerbungen von Pflegekräften. Über Social Media. Ab 15€ pro Bewerbung.",
    url: "https://www.talentsuite.io/lp/pflege-recruiting",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
    images: [
      { url: "https://www.talentsuite.io/og-image.jpg", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pflegefachkräfte finden – ohne Jobportale | TalentSuite",
    description:
      "47+ Bewerbungen pro Monat. In 30 Tagen. Ab 15€ pro Bewerbung.",
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
            name: "Performance Recruiting für die Pflege",
            url: "https://www.talentsuite.io/lp/pflege-recruiting",
            description:
              "Social Media Recruiting für Pflegeeinrichtungen. Qualifizierte Bewerbungen von Pflegekräften in 30 Tagen.",
            provider: {
              "@type": "Organization",
              name: "TalentSuite",
              url: "https://www.talentsuite.io",
            },
            areaServed: { "@type": "Country", name: "Germany" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Kostenlose und unverbindliche Recruiting-Analyse",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wie funktioniert Social Media Recruiting für die Pflege?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "80% der Pflegekräfte sind nicht aktiv auf Jobportalen unterwegs – aber sie sind täglich auf Facebook und Instagram. Wir schalten gezielte Anzeigen, die genau diese passiven Kandidaten ansprechen und zu einer einfachen Bewerbung führen.",
                },
              },
              {
                "@type": "Question",
                name: "Was kostet Social Media Recruiting für Pflegekräfte?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die Kosten liegen durchschnittlich bei 15-25€ pro qualifizierter Bewerbung. Das ist ein Bruchteil der Kosten von Zeitarbeitsfirmen oder klassischen Stellenanzeigen. In der kostenlosen Analyse berechnen wir Ihnen Ihr individuelles Budget.",
                },
              },
              {
                "@type": "Question",
                name: "Wie schnell bekomme ich die ersten Bewerbungen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die meisten unserer Kunden erhalten die ersten qualifizierten Bewerbungen innerhalb von 7-14 Tagen nach Kampagnenstart.",
                },
              },
              {
                "@type": "Question",
                name: "Funktioniert das auch in meiner Region?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Wir werben gezielt im Umkreis Ihrer Einrichtung und erreichen Pflegekräfte die in Ihrer Nähe wohnen oder bereit sind, für die richtige Stelle umzuziehen.",
                },
              },
              {
                "@type": "Question",
                name: "Muss ich lange Verträge abschließen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nein. Wir arbeiten Performance-basiert. Sie sehen die Ergebnisse und entscheiden selbst, ob Sie weitermachen möchten.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
