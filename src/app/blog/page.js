"use client";
import React from "react";
import Link from "next/link";
const serviceData = [
  {
    id: 1,
    reading: "5 Min. Lesezeit",
    title: "Wie eine Digitalagentur Ihr Unternehmen voranbringen kann",
    desc: "Unsere Digitalagentur unterstützt Branding-Unternehmen mit ganzheitlichen Strategien. Wir liefern maßgeschneiderte Lösungen, die Sichtbarkeit, Reichweite und Wachstum messbar steigern.",
    link: "blog/marketing",
  },
  {
    id: 2,
    reading: "5 Min. Lesezeit",
    title: "Die neuesten Trends und Strategien mit einer Digitalagentur",
    desc: "Unsere Agentur bleibt stets am Puls der Zeit. Mit innovativen Methoden und fundierter Marktkenntnis entwickeln wir digitale Strategien, die exakt auf Ihr Business zugeschnitten sind.",
    link: "blog/trends",
  },
  {
    id: 3,
    reading: "5 Min. Lesezeit",
    title: "Maximierung des ROI mit der Expertise einer Digitalagentur",
    desc: "Durch transparente Prozesse und enge Zusammenarbeit erzielen wir messbare Ergebnisse. Unsere Experten sorgen dafür, dass jede Maßnahme den maximalen Nutzen für Ihr Unternehmen bringt.",
    link: "blog/roi",
  },
];

const page = () => {
  return (
    <>
      <section className="blogs_section">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-12 col-md-12 col-lg-10">
              <div className="about_content">
                <h2>Online Marketing & SEO, die dich nach vorn bringen messbar und nachhaltig.</h2>
                <p>
                  Wir sind eine spezialisierte Digitalagentur für wachstumsstarke Marken. Mit unserem ganzheitlichen Ansatz im SEO bringen wir deine Marke auf das nächste Level: aus einer Hand, strategisch durchdacht und messbar erfolgreich. Mehr
                  Sichtbarkeit. Mehr Reichweite. Mehr Wachstum. Und das nachhaltig.
                </p>
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

export default page;
