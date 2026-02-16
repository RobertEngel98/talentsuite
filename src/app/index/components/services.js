"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const serviceData = [
  {
    title: "Performance Recruiting",
    desc: "Innerhalb von 30 Tagen qualifizierte Bewerbungen auf deinem Tisch – ohne Headhunter, ohne Stellenbörsen. Über Social Media Funnels, die funktionieren.",
    link: "/services/performanceRecruiting",
    badge: "ø 40+ Bewerbungen",
  },
  {
    title: "Neukundengewinnung",
    desc: "Planbar 15–40 qualifizierte Kundenanfragen pro Monat – automatisiert über Ads, Funnels und intelligente Follow-Up-Systeme.",
    link: "/services/customerAcquisition",
    badge: "Planbar skalierbar",
  },
  {
    title: "Fullservice E-Commerce",
    desc: "Von 0 auf Shop oder vom Shop zum Umsatzrekord – wir bauen, optimieren und skalieren deinen Online-Handel. Strategie bis Technik.",
    link: "/services/ecommerce",
    badge: "Ganzheitlich",
  },
  {
    title: "Social Media Management",
    desc: "Deine Marke auf Autopilot: Strategie, Content & Community-Management, das Engagement und Reichweite messbar steigert.",
    link: "/services/socialMediaManagement",
    badge: "Kanalübergreifend",
  },
  {
    title: "Content Produktion",
    desc: "Videos, Ads & Social Formate, die konvertieren – professionell produziert und auf deine Zielgruppe zugeschnitten.",
    link: "/services/contentProduktion",
    badge: "Conversionstark",
  },
  {
    title: "Web & App Development",
    desc: "Individuelle Websites, Plattformen und Apps, die verkaufen – schnell, skalierbar und auf Conversion optimiert.",
    link: "/services/webDevelopment",
    badge: "Maßgeschneidert",
  },
];

const Services = () => {
  return (
    <section className="services_section" aria-label="Unsere Dienstleistungen">
      <Image src="/assets/circle.png" width={100} height={100} className="blur_image" alt="" aria-hidden="true" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="titles text-center">
              <h2 className="text-white mb-4">Unsere Kernleistungen</h2>
              <Image src="/assets/btm-bdr.svg" width={100} height={100} className="btm_bdr" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {serviceData.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4">
              <div className="service_card h-100 p-4">
                {/* Verkaufspsychologie: Ergebnis-Badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: 600,
                    backgroundColor: "rgba(2, 59, 91, 0.5)",
                    border: "1px solid rgba(2, 59, 91, 0.8)",
                    color: "#4da6d9",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    marginBottom: "12px",
                    opacity: 1,
                  }}
                >
                  {service.badge}
                </span>
                <h3 className="mb-2">{service.title}</h3>
                <p>{service.desc}</p>
                <div className="hero_buttons mt-3">
                  <Link className="btns web_btns" href={service.link || "#"}>
                    So funktioniert&apos;s
                    <span className="btn_arrows ms-2">
                      <i className="bi bi-arrow-up-right"></i>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
