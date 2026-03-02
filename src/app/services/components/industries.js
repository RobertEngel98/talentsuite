"use client";
import React from "react";

const Industries = ({ title, description, industries }) => {
  return (
    <section className="steps_section" aria-label="Branchen" data-track-section="industries" data-track-section-name="Branchen">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <span className="section-label" style={{ justifyContent: "center" }}>Branchen</span>
            <h2 className="text-white mb-3">{title}</h2>
            {description && (
              <p className="text-white mb-5" style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.7" }}>
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {industries.map((industry, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="text-center p-3" style={{ background: "var(--surface-color)", borderRadius: "16px", border: "1px solid var(--border-color)", transition: "transform 0.3s ease, border-color 0.3s ease" }}>
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
