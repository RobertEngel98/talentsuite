"use client";
import React from "react";
import Link from "next/link";

const MainSection = ({ title, description, buttonText, buttonLink = "https://calendar.app.google/CQpLAnRw8tzQUEQz5", imageSrc, imageAlt, trustBadges = true }) => {
  return (
    <section className="hero-section" aria-label={imageAlt || "Service Hero"}>
      <div className="hero_content container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hero-left">
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={buttonLink} target="_blank" rel="noopener noreferrer">
                  {buttonText}
                  <span className="btn_arrows">
                    <i className="bi bi-arrow-up-right"></i>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              {trustBadges && (
                <p className="hero-trust-signals" style={{ fontSize: "14px", opacity: 0.6, marginTop: "12px" }}>
                  ✓ Kostenlos & unverbindlich &nbsp; ✓ Erste Ergebnisse in 30 Tagen &nbsp; ✓ Kein Risiko
                </p>
              )}
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">
            <div className="hero_right">
              <img src={imageSrc} className="services_img" alt={imageAlt} loading="eager" />
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1 col-xl-1">
            <div className="hero_right">
              <nav className="social_icons" aria-label="Social Media">
                <a href="https://www.tiktok.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="https://www.instagram.com/talentsuite.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/talentsuiteio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
