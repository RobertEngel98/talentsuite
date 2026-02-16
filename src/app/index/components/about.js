"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about_section" aria-label="Über TalentSuite">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="about_content">
                {/* Verkaufspsychologie: Neugier wecken + Differenzierung */}
                <h2>Warum Unternehmen von anderen Agenturen zu uns wechseln</h2>
                <h3>Weil wir nicht bunt präsentieren, sondern messbar liefern.</h3>
                <p>
                  In den letzten 24 Monaten haben wir für über 50 Unternehmen im DACH-Raum
                  nachweislich Fachkräfte gewonnen, Neukunden-Pipelines aufgebaut und
                  E-Commerce-Umsätze gesteigert. Nicht mit Bauchgefühl, sondern mit
                  skalierbaren Systemen, die ab Woche 1 Ergebnisse liefern.
                </p>
                <p>
                  Transparent. Messbar. Reproduzierbar. Wir setzen auf strukturierte Abläufe,
                  klare KPIs und echte Performance – statt leere Versprechen.
                </p>
                <div className="hero_buttons">
                  <Link className="btns web_btns" href="https://calendly.com/talentsuite" target="_blank" rel="noopener noreferrer">
                    Jetzt kennenlernen
                    <span className="btn_arrows">
                      <i className="bi bi-arrow-up-right"></i>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="image_column">
                <div className="image_row">
                  {/* SEO: Beschreibende Alt-Texte */}
                  <img src="/assets/about-1.png" className="img3" alt="TalentSuite Team bei der Strategieentwicklung für Kunden" loading="lazy" />
                  <img src="/assets/about-2.png" className="img3" alt="Datengetriebenes Marketing-Dashboard mit Kampagnen-Ergebnissen" loading="lazy" />
                </div>
                <div className="image_row full">
                  <img src="/assets/about-3.png" className="img3" alt="Erfolgreiche Recruiting-Kampagne Ergebnisse auf Social Media" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
