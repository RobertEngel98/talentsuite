"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Anton Specht",
      role: "CEO - SPECHT IMMOBILIEN",
      from: "Frankfurt",
      to: "Deutschland",
      img: "/assets/Anton.png",
      review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater über Social Recruiting gewinnen. Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen.",
    },
    {
      name: "Joel Schüssler",
      role: "COO - Just Virtual Food Brands",
      from: "Zürich",
      to: "Schweiz",
      img: "/assets/Joel.png",
      review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse.",
    },
    {
      name: "Viktor Brehm",
      role: "CEO Schlafplatz",
      from: "München",
      to: "Deutschland",
      img: "/assets/Viktior.png",
      review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig.",
    },
    {
      name: "Jan Röhrig",
      role: "Leitung Merchandise & E-Commerce - Iserlohn Roosters",
      from: "Iserlohn",
      to: "Deutschland",
      img: "/assets/jan.png",
      review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
    },
    {
      name: "Jessica Pacha-Mollé",
      role: "Head of HR Heizkurier GmbH",
      from: "Köln/Bonn",
      to: "Deutschland",
      img: "/assets/Jessicas.png",
      review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
    },
  ];

  return (
    <section className="testimonial_section" aria-label="Kundenstimmen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            "name": "TalentSuite",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "ratingCount": testimonialData.length.toString(),
            },
            "review": testimonialData.map((t) => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": t.review,
            })),
          }),
        }}
      />

      <div className="container">
        {/* Text + Button centered above */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="about_content" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2>Kundenstimmen</h2>
              <p style={{ maxWidth: "600px" }}>
                Was unsere Kunden über die Zusammenarbeit sagen – echte Ergebnisse,
                echte Stimmen aus Handwerk, E-Commerce und Dienstleistung.
              </p>
              <div className="hero_buttons">
                <Link className="btns web_btns" href="https://calendar.app.google/mU29snzEsgqsnMXy8" target="_blank" rel="noopener noreferrer">
                  Auch so wachsen? Jetzt Termin sichern
                  <span className="btn_arrows">
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-telephone"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper full width below */}
        <div className="row">
          <div className="col-12">
            <Swiper
              spaceBetween={20}
              grabCursor={true}
              keyboard={{ enabled: true }}
              loop={true}
              speed={800}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 1 },
                1200: { slidesPerView: 3, slidesPerGroup: 1 },
              }}
              modules={[Autoplay, Keyboard]}
              className="testimonialSwiper"
            >
              {testimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <article className="testimonial_card" aria-label={`Bewertung von ${testimonial.name}`}>
                    <div className="card_left">
                      <div>
                        <img src={testimonial.img} className="mb-3 client_img" alt={`${testimonial.name}, ${testimonial.role}`} loading="lazy" />
                        <div className="client_name">
                          <h3>{testimonial.name}</h3>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                      <img src="/assets/bx_shape.svg" className="grid_bx" alt="" aria-hidden="true" />
                      <div className="verified">
                        <span>
                          <i className="bi bi-check-lg"></i>
                        </span>
                        Verifiziert
                      </div>
                    </div>
                    <div className="card_right">
                      <div className="ratings" aria-label="5 von 5 Sternen">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>&ldquo;{testimonial.review}&rdquo;</p>
                      <div className="location">
                        <span>
                          <i className="bi bi-geo-alt"></i>
                          {testimonial.from}
                        </span>
                        <i className="bi bi-arrow-right-short"></i>
                        <span>
                          <i className="bi bi-geo-alt"></i>
                          {testimonial.to}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
