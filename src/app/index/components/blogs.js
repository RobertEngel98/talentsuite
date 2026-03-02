"use client";
import React from "react";
import Link from "next/link";

const serviceData = [
  {
    id: 1,
    reading: "5 Min. Lesezeit",
    title: "Warum 72% der Unternehmen mit ihrer Agentur unzufrieden sind",
    desc: "Die häufigsten Fehler im digitalen Marketing — und wie du sie vermeidest. Ganzheitliche Strategien, die Sichtbarkeit, Reichweite und Wachstum messbar steigern.",
    link: "blog/marketing",
  },
  {
    id: 2,
    reading: "5 Min. Lesezeit",
    title: "Die 5 Marketing-Trends, die 2025 den Unterschied machen",
    desc: "Von KI-gestütztem Targeting bis Social Commerce: Die Strategien, die Top-Unternehmen jetzt einsetzen — und wie du davon profitierst.",
    link: "blog/trends",
  },
  {
    id: 3,
    reading: "5 Min. Lesezeit",
    title: "ROI verdreifachen: So maximierst du dein Werbebudget",
    desc: "Transparente Prozesse, datenbasierte Entscheidungen und enge Zusammenarbeit — der Weg zu messbaren Ergebnissen mit maximalem Return.",
    link: "blog/roi",
  },
];

const Blogs = () => {
  return (
    <>
      <section className="blogs_section" data-track-section="blogs" data-track-section-name="Blog">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="about_content">
                <span className="section-label">Blog</span>
                <h2>Wissen, das dein Marketing auf das nächste Level bringt.</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p>
                Wir sind eine spezialisierte Digitalagentur für wachstumsstarke Marken. Mit unserem ganzheitlichen Ansatz im SEO bringen wir deine Marke auf das nächste Level: aus einer Hand, strategisch durchdacht und messbar erfolgreich. Mehr
                Sichtbarkeit. Mehr Reichweite. Mehr Wachstum. Und das nachhaltig.
              </p>
              <div className="hero_buttons mt-4">
                <Link className="btn-outline-v3" href="/blog">
                  Alle Artikel
                  <i className="bi bi-arrow-right" style={{ fontSize: "14px" }}></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {serviceData.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="service_card h-100">
                  <div className="blog_reading">
                    <span className="reading">{service.reading}</span>
                    <div className="hero_buttons">
                      <Link className="btns web_btns" href={service.link}>
                        <span className="btn_arrows">
                          <i className="bi bi-arrow-up-right"></i>
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
