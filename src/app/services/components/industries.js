"use client";
import React from "react";

const Industries = ({ title, description, industries }) => {
  return (
    <section className="steps_section" aria-label="Branchen" data-track-section="industries" data-track-section-name="Branchen">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="text-white mb-3">{title}</h2>
            {description && (
              <p className="text-white mb-5" style={{ opacity: 0.8, fontSize: "1.05rem", lineHeight: "1.7" }}>
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {industries.map((industry, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="text-center p-3" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{industry.icon}</div>
                <h3 className="text-white" style={{ fontSize: "1rem", fontWeight: "600" }}>{industry.name}</h3>
                {industry.detail && (
                  <p className="text-white" style={{ opacity: 0.7, fontSize: "0.85rem", margin: 0 }}>{industry.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
