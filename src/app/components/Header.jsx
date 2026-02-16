"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    gsap.fromTo(header, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(header, { y: -130, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef} role="banner">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Hauptnavigation">
          <a className="navbar-brand" href="/" aria-label="TalentSuite - Zur Startseite">
            <img src="/logo.png" className="logo" alt="TalentSuite Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Navigation öffnen"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/" aria-current="page">
                  Startseite
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dienstleistungen
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/services/performanceRecruiting">
                      <i className="bi bi-arrow-right-short"></i> Performance Recruiting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/customerAcquisition">
                      <i className="bi bi-arrow-right-short"></i> Neukundengewinnung
                    </Link>
                  </li>
                  <li>
                    {/* Fix: Tippfehler korrigiert eComerce -> ecommerce */}
                    <Link className="dropdown-item" href="/services/ecommerce">
                      <i className="bi bi-arrow-right-short"></i> Fullservice E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/socialMediaManagement">
                      <i className="bi bi-arrow-right-short"></i> Social Media Management
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/contentProduktion">
                      <i className="bi bi-arrow-right-short"></i> Content Produktion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/webDevelopment">
                      <i className="bi bi-arrow-right-short"></i> Webentwicklung
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="https://made-by-mee.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-arrow-right-short"></i> MadeByMEE
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Verkaufspsychologie: Stärkerer CTA mit echtem Link */}
          <Link href="https://calendly.com/talentsuite" target="_blank" rel="noopener noreferrer" className="btns">
            <span className="btn_arrows">
              <i className="bi bi-telephone"></i>
              <i className="bi bi-telephone"></i>
            </span>
            Erstgespräch vereinbaren
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
