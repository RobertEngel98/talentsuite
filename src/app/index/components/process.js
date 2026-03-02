"use client";
import React from "react";

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
    <section className="process_section" aria-label="Unser Prozess in 4 Schritten" data-track-section="process" data-track-section-name="Prozess">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              <span className="section-label" style={{ justifyContent: "center" }}>So funktioniert&apos;s</span>
              <h2 className="text-white mb-4">In 4 Schritten zu messbarem Wachstum</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              {processData.map((process, index) => (
                <div key={index} className="process">
                  <span className="stat-number" style={{ fontSize: "clamp(2.5rem, 3vw, 3rem)", color: "rgba(27, 152, 224, 0.12)", fontWeight: 900, display: "block", marginBottom: "8px" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="process_icon">
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
    </section>
  );
};

export default Process;
