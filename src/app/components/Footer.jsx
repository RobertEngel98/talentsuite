"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-Footer CTA Section */}
      <section aria-label="Jetzt starten" className="pre-footer-cta-section" data-track-section="pre-footer-cta" data-track-section-name="Pre-Footer CTA">
        {/* Glow decoration */}
        <div className="glow" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(27, 152, 224, 0.12) 0%, transparent 70%)" }}></div>
        <div className="container pre-footer-cta" style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "60px", height: "2px", background: "var(--accent-color)", marginBottom: "32px", borderRadius: "2px" }}></div>
          <h2>Bereit für <span style={{ color: "var(--accent-color)" }}>messbares Wachstum?</span></h2>
          <p className="pre-footer-cta-text">
            In einem kostenlosen 20-Minuten-Gespräch analysieren wir deine Situation und zeigen dir konkret,
            welche Hebel für dein Unternehmen den größten Impact haben — mit einer individuellen Roadmap.
          </p>
          <Link
            className="btn-primary"
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 auto" }}
            data-track-click="Kostenlose Potenzialanalyse buchen"
            data-track-location="footer"
          >
            Kostenlose Potenzialanalyse buchen
            <i className="bi bi-arrow-up-right" style={{ fontSize: "16px" }}></i>
          </Link>
          <p className="pre-footer-cta-small" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <span>100% kostenlos</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }}></span>
            <span>Unverbindlich</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }}></span>
            <span>Nächster Termin in 48h</span>
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

            {/* Regionen */}
            <div className="col-12">
              <div className="footer_regionen" style={{ padding: "24px 0 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  Mitarbeitergewinnung in der Region
                </p>
                <nav aria-label="Regionale Seiten" style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                  <Link href="/blog/mitarbeitergewinnung-maerkischer-kreis" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Märkischer Kreis</Link>
                  <Link href="/blog/mitarbeitergewinnung-suedwestfalen" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Südwestfalen</Link>
                  <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                  <Link href="/blog/mitarbeitergewinnung-iserlohn" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Iserlohn</Link>
                  <Link href="/blog/mitarbeitergewinnung-hemer" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Hemer</Link>
                  <Link href="/blog/mitarbeitergewinnung-menden" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Menden</Link>
                  <Link href="/blog/mitarbeitergewinnung-hagen" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Hagen</Link>
                  <Link href="/blog/mitarbeitergewinnung-luedenscheid" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Lüdenscheid</Link>
                  <Link href="/blog/mitarbeitergewinnung-dortmund" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Dortmund</Link>
                  <Link href="/blog/mitarbeitergewinnung-arnsberg" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Arnsberg</Link>
                  <Link href="/blog/mitarbeitergewinnung-unna" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Unna</Link>
                  <Link href="/blog/mitarbeitergewinnung-schwerte" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Schwerte</Link>
                  <Link href="/blog/mitarbeitergewinnung-altena" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Altena</Link>
                </nav>
              </div>
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
