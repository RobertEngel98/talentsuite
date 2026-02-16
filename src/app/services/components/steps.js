"use client";
import React from "react";

const Steps = ({ title, stepsData }) => {
  return (
    <section className="process_section" aria-label={title}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              <h2 className="text-white mb-4">{title}</h2>
              <img src="/assets/btm-bdr.svg" alt="" aria-hidden="true" className="btm_bdr" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              {Array.isArray(stepsData) && stepsData.length > 0 ? (
                stepsData.map((step, index) => (
                  <div key={index} className="process">
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
