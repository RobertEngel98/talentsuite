"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Newsletter-Anmeldung mit Double-Opt-In implementieren
    alert("Vielen Dank! Du erhältst in Kürze eine Bestätigungsmail (Double-Opt-In).");
    setEmail("");
  };

  return (
    <>
      {/* Verkaufspsychologie: Pre-Footer CTA Section */}
      <section
        aria-label="Jetzt starten"
        style={{
          padding: "60px 0 0",
          textAlign: "center",
          position: "relative",
          width: "99.2vw",
        }}
      >
        <div className="container" style={{
          background: "linear-gradient(135deg, rgba(2, 59, 91, 0.4), rgba(9, 22, 34, 0.8))",
          borderRadius: "40px",
          padding: "60px 40px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(30px)",
          marginBottom: "40px",
        }}>
          <h2 style={{ marginBottom: "16px" }}>Bereit für messbares Wachstum?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 30px", fontSize: "18px" }}>
            In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir,
            welche Hebel für dein Unternehmen den größten Impact haben.
          </p>
          <a
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
          </a>
          <p style={{ fontSize: "13px", opacity: 0.4, marginTop: "16px" }}>
            ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
          </p>
        </div>
      </section>

      <footer>
        <img src="/assets/circle.png" className="blur_image" alt="" aria-hidden="true" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-5">
              <a href="/" aria-label="TalentSuite Startseite">
                <img src="/logo.png" alt="TalentSuite Logo" className="logo" />
              </a>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-xl-7">
              <div>
                <nav className="social_icons" aria-label="Social Media">
                  <a href="https://www.tiktok.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <i className="bi bi-tiktok"></i>TikTok
                  </a>
                  <a href="https://www.youtube.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>YouTube
                  </a>
                  <a href="https://www.instagram.com/talentsuite.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>Facebook
                  </a>
                  <a href="https://www.linkedin.com/company/talentsuiteio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>LinkedIn
                  </a>
                </nav>
              </div>
              {/* DSGVO: Newsletter mit Einwilligungshinweis + Double-Opt-In */}
              <div className="newsletter_box">
                <form className="d-flex flex-wrap gap-2" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Deine E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="E-Mail-Adresse für Newsletter"
                  />
                  <button type="submit" className="btns web_btns">
                    Anmelden
                  </button>
                </form>
              </div>
              <p style={{ fontSize: "12px", opacity: 0.35, marginTop: "10px", textAlign: "right" }}>
                Mit der Anmeldung stimmst du unserer{" "}
                <a href="/datenschutz" style={{ color: "inherit", textDecoration: "underline" }}>
                  Datenschutzerklärung
                </a>{" "}
                zu. Du erhältst eine Bestätigungsmail (Double-Opt-In).
              </p>
            </div>
            <div className="col-12 col-md-12">
              <div className="devider">
                <span></span>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <nav className="social_icons footer_menu" aria-label="Services Navigation">
                <a href="/services/performanceRecruiting">Performance Recruiting</a>
                <a href="/services/customerAcquisition">Neukundengewinnung</a>
                <a href="/services/ecommerce">Fullservice E-Commerce</a>
                <a href="/services/socialMediaManagement">Social Media Management</a>
                <a href="/services/contentProduktion">Content Produktion</a>
                <a href="/services/webDevelopment">Web Development</a>
              </nav>
            </div>
            <div className="col-12 col-md-12">
              <div className="btm_bar">
                {/* Fix: Dynamisches Jahr */}
                <p>Copyright © {currentYear} TalentSuite – Alle Rechte vorbehalten.</p>
                <p>
                  {/* DSGVO: Korrekte Links auf deutsche URLs */}
                  <a href="/datenschutz">Datenschutzerklärung</a> •{" "}
                  <a href="/agb">Allgemeine Geschäftsbedingungen</a> •{" "}
                  <a href="/impressum">Impressum</a>
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
