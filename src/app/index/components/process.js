"use client";
import React from "react";
import Image from "next/image";

const processData = [
  {
    image: "/assets/step1.svg",
    heading: "Analyse & Audit",
    desc: "Wir analysieren deine aktuelle Situation, Zielgruppe und Wettbewerb – und identifizieren die größten Wachstumshebel für dein Unternehmen.",
  },
  {
    image: "/assets/step2.svg",
    heading: "Strategie & Konzept",
    desc: "Auf Basis der Daten entwickeln wir eine maßgeschneiderte Strategie mit klaren KPIs und messbaren Meilensteinen.",
  },
  {
    image: "/assets/step3.svg",
    heading: "Umsetzung & Launch",
    desc: "Unser Team setzt Kampagnen, Content und Systeme um – professionell und schnell. Erste Ergebnisse ab Woche 1.",
  },
  {
    image: "/assets/step4.svg",
    heading: "Optimierung & Skalierung",
    desc: "Durch laufende Datenanalyse optimieren wir kontinuierlich und skalieren, was nachweislich funktioniert.",
  },
];

const Process = () => {
  return (
    <section className="process_section" aria-label="Unser Prozess in 4 Schritten">
      <img src="/assets/step-img1.png" className="process_img" alt="" aria-hidden="true" loading="lazy" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              {/* SEO: Generischere H2 die alle Services abdeckt */}
              <h2 className="text-white mb-4">In 4 Schritten zu messbarem Wachstum</h2>
              <img src="/assets/btm-bdr.svg" alt="" aria-hidden="true" className="btm_bdr" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              {processData.map((process, index) => (
                <div key={index} className="process">
                  <div className="process_icon">
                    {/* SEO: Beschreibende Alt-Texte */}
                    <img src={process.image} alt={`Schritt ${index + 1}: ${process.heading}`} />
                  </div>
                  <h3>{process.heading}</h3>
                  <p>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/step-img2.png" className="process_img" alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
};

export default Process;
