"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const serviceData = [
  {
    title: "Social Media Wachstum",
    desc: "Steigere deine Online-Präsenz mit gezielten Strategien, die Follower und Engagement erhöhen.",
  },
  {
    title: "Werbefilme",
    desc: "Erstelle fesselnde Kurzvideos, die Aufmerksamkeit erregen und auf allen Plattformen Ergebnisse liefern.",
  },
  {
    title: "Performance Marketing",
    desc: "Optimiere dein Werbebudget mit datengetriebenen Kampagnen auf Meta und Google für maximalen ROI.",
  },
  {
    title: "Werbetexte und Social Strategien",
    desc: "Erstelle überzeugende Inhalte und strategische Botschaften, die bei deiner Zielgruppe Anklang finden.",
  },
  {
    title: "Neukundengewinnung",
    desc: "Werde online sichtbar und baue nachhaltige Geschäftsbeziehungen mit potenziellen Neukunden auf.",
  },
];

const Campaigns = () => {
  return (
    <section className="campaigns_section">
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
              <h2 className="text-white mb-4">Wir entwickeln Kampagnen die performen</h2>
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
      </div>
    </section>
  );
};

export default Campaigns;
