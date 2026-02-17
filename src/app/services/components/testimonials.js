"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

const Testimonials = ({ title, description, link, linkText, testimonialData }) => {
  return (
    <section className="testimonial_section" aria-label="Kundenstimmen">
      <div className="container">
        {/* Text centered above */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="about_content" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2>{title}</h2>
              <p style={{ maxWidth: "600px" }}>{description}</p>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={link || "https://calendar.app.google/CQpLAnRw8tzQUEQz5"} target="_blank" rel="noopener noreferrer">
                  {linkText || "Jetzt Termin sichern"}
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
                1200: { slidesPerView: 2, slidesPerGroup: 1 },
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
                        <span><i className="bi bi-check-lg"></i></span>
                        Verifiziert
                      </div>
                    </div>
                    <div className="card_right">
                      <div className="ratings" aria-label="5 von 5 Sternen">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                      <p>&ldquo;{testimonial.review}&rdquo;</p>
                      <div className="location">
                        <span><i className="bi bi-geo-alt"></i>{testimonial.from}</span>
                        <i className="bi bi-arrow-right-short"></i>
                        <span><i className="bi bi-geo-alt"></i>{testimonial.to}</span>
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
