"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-Footer CTA Section */}
      <section aria-label="Jetzt starten" className="pre-footer-cta-section">
        <div className="container pre-footer-cta">
          <h2>Bereit für messbares Wachstum?</h2>
          <p className="pre-footer-cta-text">
            In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir,
            welche Hebel für dein Unternehmen den größten Impact haben.
          </p>
          <Link
            className="btns web_btns"
            href="https://calendly.com/talentsuite"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            Kostenlose Potenzialanalyse buchen
            <span className="btn_arrows">
              <i className="bi bi-arrow-up-right"></i>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
          <p className="pre-footer-cta-small">
            ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
          </p>
        </div>
      </section>

      <footer>
        <img src="/assets/circle.png" className="blur_image" alt="" aria-hidden="true" />
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-12 col-lg-5">
              <Link href="/" aria-label="TalentSuite Startseite">
                <img src="/logo.png" alt="TalentSuite Logo" className="logo" />
              </Link>
            </div>
            {/* Social Icons */}
            <div className="col-12 col-lg-7">
              <nav className="social_icons" aria-label="Social Media" style={{ flexDirection: "row", justifyContent: "flex-end", gap: "12px", flexWrap: "wrap" }}>
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

            {/* Divider */}
            <div className="col-12">
              <div className="devider">
                <span></span>
              </div>
            </div>

            {/* Service Links */}
            <div className="col-12">
              <nav className="footer_menu" aria-label="Services Navigation">
                <Link href="/services/performanceRecruiting">Performance Recruiting</Link>
                <Link href="/services/customerAcquisition">Neukundengewinnung</Link>
                <Link href="/services/ecommerce">Fullservice E-Commerce</Link>
                <Link href="/services/socialMediaManagement">Social Media Management</Link>
                <Link href="/services/contentProduktion">Content Produktion</Link>
                <Link href="/services/webDevelopment">Web Development</Link>
              </nav>
            </div>

            {/* Bottom Bar */}
            <div className="col-12">
              <div className="btm_bar">
                <p>Copyright © {currentYear} TalentSuite – Alle Rechte vorbehalten.</p>
                <p>
                  <Link href="/datenschutz">Datenschutzerklärung</Link> •{" "}
                  <Link href="/agb">Allgemeine Geschäftsbedingungen</Link> •{" "}
                  <Link href="/impressum">Impressum</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
