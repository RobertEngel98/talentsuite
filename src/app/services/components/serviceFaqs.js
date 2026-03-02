"use client";
import React from "react";

const ServiceFaqs = ({ title, description, faqData, accordionId }) => {
  const id = accordionId || "accordionServiceFAQ";

  return (
    <section className="faqs_section" aria-label="Häufig gestellte Fragen" data-track-section="service-faqs" data-track-section-name="FAQ">
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
          <div className="col-12 col-md-12 col-lg-8">
            <div className="titles text-center">
              <span className="section-label" style={{ justifyContent: "center" }}>FAQ</span>
              <h2 className="text-white mb-3">{title || "Häufig gestellte Fragen"}</h2>
              {description && (
                <p className="text-white mb-4" style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7" }}>
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="accordion" id={id}>
              {faqData.map((faq, index) => {
                const collapseId = `${id}_collapse${index}`;
                const headingId = `${id}_heading${index}`;
                return (
                  <div key={index} className="accordion-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="accordion-header" id={headingId}>
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
                    </h3>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent={`#${id}`}
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

export default ServiceFaqs;
