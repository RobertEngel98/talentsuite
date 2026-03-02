"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const serviceData = [
  {
    title: "Social Media Wachstum",
    desc: "Mehr Follower, mehr Engagement, mehr Sichtbarkeit — mit Strategien, die nachweislich Reichweite aufbauen.",
  },
  {
    title: "Werbefilme & Kurzvideos",
    desc: "Fesselnde Kurzvideos, die in den ersten 3 Sekunden Aufmerksamkeit erzeugen und auf allen Plattformen konvertieren.",
  },
  {
    title: "Performance Marketing",
    desc: "Datengetriebene Kampagnen auf Meta und Google, die jeden Euro Werbebudget in messbaren ROI verwandeln.",
  },
  {
    title: "Copywriting & Social Strategie",
    desc: "Überzeugende Botschaften, die nicht nur gelesen werden — sondern zum Handeln motivieren.",
  },
  {
    title: "Neukundengewinnung",
    desc: "Planbar neue Geschäftskontakte aufbauen — durch gezielte Online-Sichtbarkeit und automatisierte Lead-Systeme.",
  },
];

const Campaigns = () => {
  return (
    <section className="campaigns_section" data-track-section="campaigns" data-track-section-name="Kampagnen">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-9">
            <div className="social_icos_bx">
              <div className="social_icons">
                <a href="#">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <Image src="/assets/round-bdr.svg" width={100} height={100} alt="Round Border" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-6 col-xl-5">
            <div className="titles text-center">
              <span className="section-label" style={{ justifyContent: "center" }}>Kampagnen</span>
              <h2 className="text-white mb-4">Kampagnen, die Ergebnisse liefern — nicht nur Klicks</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {serviceData.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="service_card h-100">
                <h3 className="mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Internal Links: Branchen-Recruiting */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "12px" }}>Wir gewinnen Fachkräfte in diesen Branchen:</p>
            <nav aria-label="Branchen-Recruiting Seiten" style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              {[
                { href: "/mitarbeiter-finden-pflege", label: "Pflege" },
                { href: "/mitarbeiter-finden-kfz", label: "KFZ" },
                { href: "/mitarbeiter-finden-bau", label: "Bau" },
                { href: "/mitarbeiter-finden-elektro", label: "Elektro" },
                { href: "/mitarbeiter-finden-gastronomie", label: "Gastronomie" },
                { href: "/mitarbeiter-finden-shk", label: "SHK" },
                { href: "/mitarbeiter-finden-logistik", label: "Logistik" },
                { href: "/mitarbeiter-finden-maler", label: "Maler" },
                { href: "/mitarbeiter-finden-dachdecker", label: "Dachdecker" },
                { href: "/mitarbeiter-finden-produktion", label: "Produktion" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} style={{ padding: "6px 16px", background: "rgba(27,152,224,0.08)", border: "1px solid rgba(27,152,224,0.15)", borderRadius: "100px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "all 0.2s ease" }}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
