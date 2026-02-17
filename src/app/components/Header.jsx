"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="header"
      ref={headerRef}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-130px)",
        transition: "transform 0.3s ease",
      }}
    >
      <nav className="navbar navbar-expand-lg">
        <Link href="/" aria-label="TalentSuite Startseite">
          <img className="logo" src="/logo.png" alt="TalentSuite Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Navigation öffnen"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Startseite</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dienstleistungen
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/services/performanceRecruiting">Performance Recruiting</Link></li>
                <li><Link className="dropdown-item" href="/services/customerAcquisition">Neukundengewinnung</Link></li>
                <li><Link className="dropdown-item" href="/services/ecommerce">Fullservice E-Commerce</Link></li>
                <li><Link className="dropdown-item" href="/services/socialMediaManagement">Social Media Management</Link></li>
                <li><Link className="dropdown-item" href="/services/contentProduktion">Content Produktion</Link></li>
                <li><Link className="dropdown-item" href="/services/webDevelopment">Webentwicklung</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="https://made-by-mee.vercel.app/" target="_blank" rel="noopener noreferrer">MadeByMEE</a></li>
              </ul>
            </li>
          </ul>
          <Link href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" className="btns" aria-label="Erstgespräch vereinbaren">
            Erstgespräch vereinbaren
          </Link>
        </div>
      </nav>
    </header>
  );
}
