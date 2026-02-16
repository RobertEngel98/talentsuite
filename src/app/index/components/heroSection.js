"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const playBtn = useRef(null);
  const pauseBtn = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoContainer = document.querySelector(".hero-section");

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Autoplay blocked:", error);
      });
    }

    const handleMouseMove = (e) => {
      const targetBtn = video.paused ? playBtn.current : pauseBtn.current;
      gsap.to(targetBtn, {
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const updateButtonsVisibility = () => {
      if (video.paused) {
        gsap.to(playBtn.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.to(pauseBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      } else {
        gsap.to(pauseBtn.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.to(playBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      }
    };

    const handleHoverIn = () => updateButtonsVisibility();
    const handleHoverOut = () => {
      gsap.to([playBtn.current, pauseBtn.current], {
        opacity: 0, y: 20, duration: 0.4, ease: "power3.in",
      });
    };

    videoContainer.addEventListener("mouseenter", handleHoverIn);
    videoContainer.addEventListener("mouseleave", handleHoverOut);
    videoContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      videoContainer.removeEventListener("mouseenter", handleHoverIn);
      videoContainer.removeEventListener("mouseleave", handleHoverOut);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) { video.play(); } else { video.pause(); }
    setTimeout(() => {
      if (video.paused) {
        gsap.to(playBtn.current, { opacity: 1, y: 0, duration: 0.3 });
        gsap.to(pauseBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      } else {
        gsap.to(pauseBtn.current, { opacity: 1, y: 0, duration: 0.3 });
        gsap.to(playBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      }
    }, 100);
  };

  return (
    <>
      <section className="hero-section" aria-label="Startbereich">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
          poster="/assets/hero-poster.jpg"
          preload="metadata"
          aria-hidden="true"
        >
          <source src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className="video-buttons">
          <button ref={playBtn} className="control-btn" onClick={togglePlay} aria-label="Video abspielen">
            <i className="bi bi-play-fill"></i>
          </button>
          <button ref={pauseBtn} className="control-btn" onClick={togglePlay} aria-label="Video pausieren">
            <i className="bi bi-pause-fill"></i>
          </button>
        </div>

        <div className="hero_content container">
          <div className="row">
            <div className="col-12 col-md-11 col-lg-9 col-xl-6">
              <div className="hero-left">
                {/* SEO: Optimierte H1 mit Ziel-Keywords + Verkaufspsychologie */}
                <h1>Keine Bewerber?<br />Keine Neukunden?<br />Wir ändern das – mit System.</h1>
                <p>
                  50+ Unternehmen im DACH-Raum vertrauen auf TalentSuite als ihre Fullservice-Agentur
                  für Performance Recruiting, Neukundengewinnung und E-Commerce.
                  Messbar, planbar und ab Woche 1 ergebnisorientiert.
                </p>
                <div className="hero_buttons">
                  {/* Verkaufspsychologie: Ergebnis-orientierter CTA + Risikoumkehr */}
                  <Link className="btns web_btns" href="https://calendly.com/talentsuite" target="_blank" rel="noopener noreferrer">
                    Kostenlose Potenzialanalyse sichern
                    <span className="btn_arrows">
                      <i className="bi bi-arrow-up-right"></i>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
                {/* Verkaufspsychologie: Risikoumkehr + Micro-Commitment */}
                <p style={{ fontSize: "14px", opacity: 0.5, marginTop: "12px", marginBottom: "8px" }}>
                  ✓ Kostenlos & unverbindlich &nbsp; ✓ Erste Ergebnisse in 30 Tagen &nbsp; ✓ Kein Risiko
                </p>
                <div className="trusted_partner">
                  <img src="/assets/meta-logo.svg" alt="Offizieller Meta Business Partner" width="120" height="60" />
                  <img src="/assets/google-logo.svg" alt="Google Partner Agentur" width="120" height="60" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-3 col-xl-6">
              <div className="hero_right">
                <nav className="social_icons" aria-label="Social Media Links">
                  <a href="https://www.tiktok.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="TalentSuite auf TikTok">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a href="https://www.youtube.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="TalentSuite auf YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/talentsuite.io/" target="_blank" rel="noopener noreferrer" aria-label="TalentSuite auf Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="TalentSuite auf Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/talentsuiteio/" target="_blank" rel="noopener noreferrer" aria-label="TalentSuite auf LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-12 col-md-12 col-lg-7">
              {/* SEO: Stats als spans statt h3 (semantisch korrekt) */}
              <div className="stats_section" aria-label="Unsere Ergebnisse in Zahlen">
                <div className="stats">
                  <div className="text-center">
                    <span className="stat-number" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "1px", fontSize: "50px", display: "block", color: "rgba(255,255,255,0.9)" }}>50+</span>
                    <span>Unternehmen aus DACH</span>
                  </div>
                  <span className="bdr"></span>
                  <div className="text-center">
                    <span className="stat-number" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "1px", fontSize: "50px", display: "block", color: "rgba(255,255,255,0.9)" }}>5M+</span>
                    <span>Ausgelieferte Impressionen</span>
                  </div>
                  <span className="bdr"></span>
                  <div className="text-center">
                    <span className="stat-number" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "1px", fontSize: "50px", display: "block", color: "rgba(255,255,255,0.9)" }}>6M+ €</span>
                    <span>Verwaltetes Werbebudget</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
