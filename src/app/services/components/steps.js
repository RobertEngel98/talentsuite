"use client";
import React from "react";

const Steps = ({ title, stepsData }) => {
  return (
    <section className="process_section" aria-label={title} data-track-section="steps" data-track-section-name="Schritte">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              <span className="section-label" style={{ justifyContent: "center" }}>Ergebnisse</span>
              <h2 className="text-white mb-4">{title}</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              {Array.isArray(stepsData) && stepsData.length > 0 ? (
                stepsData.map((step, index) => (
                  <div key={index} className="process">
                    <span className="stat-number" style={{ fontSize: "clamp(2.5rem, 3vw, 3rem)", color: "rgba(27, 152, 224, 0.12)", fontWeight: 900, display: "block", marginBottom: "8px" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="process_icon">
                      <img src={step.image} alt={step.desc} loading="lazy" />
                    </div>
                    <p>{step.desc}</p>
                  </div>
                ))
              ) : (
                <p className="text-white text-center">Keine Schritte verfügbar.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
