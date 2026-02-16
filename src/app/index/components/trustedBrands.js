"use client";

import Image from "next/image";

export default function TrustedBrands() {
  const logos = [
    "/logos/4D-Elements.svg",
    "/logos/cre8ify.svg",
    "/logos/deutsche.svg",
    "/logos/hk_logo.svg",
    "/logos/Jonuschies.svg",
    "/logos/lds.svg",
    "/logos/lebenswert.svg",
    "/logos/Rohrer-Group.svg",
    "/logos/Schlaf-Platz.svg",
    "/logos/SP.svg",
    "/logos/Specht-Immobilien.svg",
    "/logos/Culture_Station_Logo.svg",
    "/logos/frangipani-logo-300x158.svg",
    "/logos/Handyklinik-Iserlohn.svg",
  ];
  const logos1 = [
    "/logos/happy-buns.svg",
    "/logos/IEC_Roosters-Logo.svg",
    "/logos/Just-Virtual-Food-Brands.svg",
    "/logos/Kundenlogos.svg",
    "/logos/logo_Hagebaumarkt.svg",
    "/logos/Logo_UME_RLK.svg",
    "/logos/MAD_Logo.svg",
    "/logos/MD_Physio_Logo.svg",
    "/logos/menges.svg",
    "/logos/Pizza_logo.svg",
    "/logos/softwash-logo.svg",
    "/logos/Volksbank_Logo.svg.svg",
    "/logos/Volvo_Logo.svg",
    "/logos/walendzik.svg",
  ];

  return (
    <section className="trusted_brands">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10">
            <div className="titles text-center">
              <h2 className="text-center text-white mb-4">Diese Brands setzen auf uns.</h2>
              <Image src="/assets/btm-bdr.svg" width={100} height={100} className="btm_bdr" alt="Divider" />
            </div>
          </div>
          <div className="col-12">
            <div className="brands_logos">
              {/* Top Row (scrolls left) */}
              <div className="overflow-hidden py-1 position-relative">
                <div className="scroll-row scroll-left">
                  {[...logos, ...logos].map((logo, index) => (
                    <div key={`top-${index}`} className="scroll-item">
                      <Image src={logo} alt={`Logo ${index}`} width={100} height={100} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row (scrolls right) */}
              <div className="overflow-hidden py-1 position-relative mt-3">
                <div className="scroll-row scroll-right">
                  {[...logos1, ...logos1].map((logo1, index) => (
                    <div key={`bottom-${index}`} className="scroll-item">
                      <Image src={logo1} alt={`Logo ${index}`} width={100} height={100} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
