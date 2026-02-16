"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const Testimonials = ({ title, description, link, linkText, testimonialData }) => {
  return (
    <section className="testimonial_section pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-12 col-lg-12 col-xl-4">
            <div className="about_content">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={link}>
                  {linkText}
                  <span className="btn_arrows">
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-telephone"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-8">
            <Swiper
              spaceBetween={30}
              grabCursor={true}
              keyboard={{ enabled: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                1200: { slidesPerView: 1 },
                1199: { slidesPerView: 1 },
              }}
              scrollbar={true}
              modules={[Autoplay, Keyboard, Scrollbar]}
              className="mySwiper"
            >
              {testimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial_card">
                    <div className="card_left">
                      <div>
                        <img src={testimonial.img} className="mb-3 client_img" alt="Client image" />
                        <div className="client_name">
                          <h3>{testimonial.name}</h3>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                      <img src="/assets/bx_shape.svg" className="grid_bx" alt="Grid Box image" />
                      <div className="verified">
                        <span>
                          <i className="bi bi-check-lg"></i>
                        </span>
                        Verified
                      </div>
                    </div>
                    <div className="card_right">
                      <div className="ratings">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                      <p>“{testimonial.review}”</p>
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
                  </div>
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
