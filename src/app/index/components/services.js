"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const serviceData = [
  {
    title: "Performance Recruiting",
    desc: "Ø 40+ qualifizierte Bewerbungen in 30 Tagen — ohne Headhunter, ohne Stellenbörsen. Über bewährte Social Media Funnels, die nachweislich funktionieren.",
    link: "/services/performanceRecruiting",
    badge: "ø 40+ Bewerbungen / Monat",
  },
  {
    title: "Neukundengewinnung",
    desc: "Planbar 15–40 qualifizierte Kundenanfragen pro Monat — automatisiert über Ads, Funnels und intelligente Follow-Up-Systeme. Messbar ab Woche 1.",
    link: "/services/customerAcquisition",
    badge: "15–40 Leads / Monat",
  },
  {
    title: "Fullservice E-Commerce",
    desc: "Von 0 auf Shop oder vom Shop zum Umsatzrekord — wir bauen, optimieren und skalieren deinen Online-Handel. Strategie bis Technik aus einer Hand.",
    link: "/services/ecommerce",
    badge: "Ø 3x ROI",
  },
  {
    title: "Social Media Management",
    desc: "Deine Marke auf Autopilot: Strategie, Content & Community-Management, das Reichweite und Engagement nachweislich steigert.",
    link: "/services/socialMediaManagement",
    badge: "5+ Plattformen",
  },
  {
    title: "Content Produktion",
    desc: "Videos, Ads & Social Formate, die konvertieren — professionell produziert und exakt auf deine Zielgruppe zugeschnitten.",
    link: "/services/contentProduktion",
    badge: "Ø 3x mehr Engagement",
  },
  {
    title: "Web & App Development",
    desc: "Individuelle Websites und Plattformen, die verkaufen — schnell, skalierbar und auf maximale Conversion optimiert.",
    link: "/services/webDevelopment",
    badge: "Conversion-optimiert",
  },
];

const Services = () => {
  return (
    <section className="services_section" aria-label="Unsere Dienstleistungen" data-track-section="services" data-track-section-name="Dienstleistungen">
      <Image src="/assets/circle.png" width={100} height={100} className="blur_image" alt="" aria-hidden="true" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="titles text-center">
              <span className="section-label" style={{ justifyContent: "center" }}>Dienstleistungen</span>
              <h2 className="text-white mb-4">Alles aus einer Hand — für planbares Wachstum</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {serviceData.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4">
              <div className="service_card h-100 p-4">
                {/* Verkaufspsychologie: Ergebnis-Badge */}
                <span className="badge-v3">
                  {service.badge}
                </span>
                <h3 className="mb-2">{service.title}</h3>
                <p>{service.desc}</p>
                <div className="hero_buttons mt-3">
                  <Link className="btn-outline-v3" href={service.link || "#"} style={{ width: "100%", justifyContent: "space-between" }}>
                    So funktioniert&apos;s
                    <i className="bi bi-arrow-right" style={{ fontSize: "14px" }}></i>
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
