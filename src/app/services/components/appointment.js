import Link from "next/link";

const Appointment = ({ heading, buttonText, buttonLink = "https://calendar.app.google/CQpLAnRw8tzQUEQz5" }) => {
  return (
    <section className="appointment_section" aria-label="Termin vereinbaren">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="appointment_content">
              <h2>{heading}</h2>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={buttonLink} target="_blank" rel="noopener noreferrer">
                  {buttonText}
                  <span className="btn_arrows">
                    <i className="bi bi-arrow-up-right"></i>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              <p style={{ fontSize: "14px", opacity: 0.5, marginTop: "16px" }}>
                ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
