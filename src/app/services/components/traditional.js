"use client";
import Image from "next/image";

const Traditional = ({ title, description, data }) => {
  return (
    <section className="traditional_section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-12 col-lg-7 col-xl-6">
            <div className="traditional_content">
              {data.map((item, index) => (
                <div className="traditional_card" key={index}>
                  <img src="/assets/bx_shape.svg" className="grid_bx" alt="Grid Box image" />
                  <img src={item.img} className="mb-3 client_img" alt="Client image" />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-5">
            <h2 className="mt-4">{title}</h2>
            <Image src="/assets/btm-bdr.svg" width={100} height={100} className="btm_bdr" alt="Divider" />
            <h3 className="traditional_text">{description}</h3>
          </div>
        </div>
      </div>
      <Image src="/assets/circle-bdr.svg" width={100} height={100} className="circle_bdr" alt="Circle" />
    </section>
  );
};

export default Traditional;
