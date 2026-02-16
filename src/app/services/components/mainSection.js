"use client";
import React from "react";
import Link from "next/link";

const MainSection = ({ title, description, buttonText, buttonLink = "#", imageSrc, imageAlt, showSocialIcons = true }) => {
  return (
    <section className="hero-section">
      <div className="hero_content container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hero-left">
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={buttonLink}>
                  {buttonText}
                  <span className="btn_arrows">
                    <i className="bi bi-arrow-up-right"></i>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">
            <div className="hero_right">
              <img src={imageSrc} className="services_img" alt={imageAlt} />
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1">
            <div className="hero_right">
              {showSocialIcons && (
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/talentsuite.io/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/talentsuiteio/?originalSubdomain=de">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
