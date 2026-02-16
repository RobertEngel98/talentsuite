"use client";
import React from "react";
import Image from "next/image";

const Solution = ({ title, description, items }) => {
  return (
    <section className="solutions_section">
      <Image src="/assets/circle.png" width={100} height={100} className="blur_image" alt="circle image" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="titles text-center">
              <h2 className="text-white mb-4">{title}</h2>
              <p>{description}</p>
              <Image src="/assets/btm-bdr.svg" width={100} height={100} className="btm_bdr" alt="Divider" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 col-xl-3">
              <div className="solution_card h-100">
                <span><h3>{item.number}</h3></span>
                <h4 className="mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
