"use client";

const Traditional = ({ title, description, data }) => {
  return (
    <section className="traditional_section" aria-label="Herausforderungen" data-track-section="traditional" data-track-section-name="Vergleich">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-12 col-lg-7 col-xl-6">
            <div className="traditional_content">
              {data.map((item, index) => (
                <div className="traditional_card" key={index}>
                  <img src="/assets/bx_shape.svg" className="grid_bx" alt="" aria-hidden="true" />
                  <img src={item.img} className="mb-3 client_img" alt={item.name} loading="lazy" />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-5">
            <h2 className="mt-4">{title}</h2>
            <img src="/assets/btm-bdr.svg" width={100} height={4} className="btm_bdr" alt="" aria-hidden="true" />
            <p className="traditional_text" style={{ fontSize: "18px", lineHeight: 1.7, opacity: 0.8 }}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traditional;
