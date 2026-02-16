"use client";
import React from "react";
import Image from "next/image";

const faqData = [
  {
    question: "Was kostet die Zusammenarbeit mit TalentSuite?",
    answer:
      "Unsere Preise richten sich nach dem Leistungsumfang und deinen Zielen. In einem kostenlosen Erstgespräch analysieren wir deine Situation und erstellen ein individuelles Angebot – transparent, ohne versteckte Kosten. Die Investition rechnet sich in der Regel innerhalb der ersten Wochen durch messbare Ergebnisse.",
  },
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "Erste Ergebnisse – etwa qualifizierte Bewerbungen oder Kundenanfragen – sind bei den meisten Projekten bereits in den ersten 2–4 Wochen sichtbar. Unsere Systeme sind auf schnelle Umsetzung ausgelegt. Die volle Performance entfaltet sich erfahrungsgemäß nach 6–8 Wochen, wenn die Kampagnen durchoptimiert sind.",
  },
  {
    question: "Warum sollten wir mit einer Agentur arbeiten, statt eine Inhouse-Lösung aufzubauen?",
    answer:
      "Eine Inhouse-Marketingabteilung bedeutet hohe Fixkosten, lange Einarbeitungszeiten und Abhängigkeit von einzelnen Personen. Mit TalentSuite bekommt ihr sofort Zugriff auf ein komplettes, eingespieltes Team aus Experten – ohne Vorlaufzeit. Unsere Prozesse sind erprobt, skalierbar und liefern ab Woche 1 Ergebnisse.",
  },
  {
    question: "Funktioniert das auch in unserer Branche?",
    answer:
      "Ja – unsere Systeme funktionieren branchenübergreifend. Wir betreuen Unternehmen aus Handwerk, Gastronomie, Immobilien, E-Commerce, Gesundheitswesen und vielen weiteren Branchen. Die Strategie wird immer individuell auf deine Zielgruppe und dein Geschäftsmodell zugeschnitten.",
  },
  {
    question: "Wie stellt ihr sicher, dass die Maßnahmen zu unserem Unternehmen passen?",
    answer:
      "Wir arbeiten datenbasiert, nicht nach Bauchgefühl. Vor jedem Projekt analysieren wir Zielgruppe, Marktposition und Schwachstellen. Daraus entwickeln wir eine individuelle Strategie mit klaren KPIs – kein Copy-Paste, sondern maßgeschneiderte Umsetzung.",
  },
  {
    question: "Können wir die Ergebnisse wirklich messen?",
    answer:
      "Absolut. Unsere Arbeit ist voll durchgetrackt – von der ersten Anzeige bis zur Bewerbung oder Kundenanfrage. Ihr seht in Echtzeit, welche Kampagnen performen, wie viele Leads generiert werden und was eine Conversion kostet. Volle Transparenz, keine Blackbox.",
  },
  {
    question: "Was, wenn wir schon mit einer Agentur schlechte Erfahrungen gemacht haben?",
    answer:
      "Genau deshalb wurde TalentSuite gegründet. Bei uns läuft alles über strukturierte Prozesse, klare Projektpläne und transparente Kommunikation – mit einem festen Ansprechpartner und definierten Zielen. Unser Anspruch ist es, genau das zu bieten, was andere Agenturen versprechen – aber nicht halten.",
  },
];

const Faqs = () => {
  return (
    <section className="faqs_section" aria-label="Häufig gestellte Fragen">
      <Image src="/assets/circle.png" width={100} height={100} className="blur_image" alt="" aria-hidden="true" />

      {/* Schema.org FAQPage Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              <h2 className="text-white mb-4">Häufig gestellte Fragen</h2>
              <Image src="/assets/btm-bdr.svg" width={100} height={100} className="btm_bdr" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="accordion" id="accordionFAQ">
              {faqData.map((faq, index) => {
                const collapseId = `collapse${index}`;
                const headingId = `heading${index}`;
                return (
                  <div key={index} className="accordion-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={collapseId}
                        itemProp="name"
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent="#accordionFAQ"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="accordion-body">
                        <p itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
