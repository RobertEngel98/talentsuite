import Link from "next/link";

const Appointment = ({ heading, buttonText, buttonLink = "#" }) => {
  return (
    <section className="appointment_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="appointment_content">
              <h2>{heading}</h2>
              <div className="hero_buttons">
                <Link className="btns web_btns" href={buttonLink}>
                  {buttonText}
                  <span className="btn_arrows">
                    <i className="bi bi-arrow-up-right"></i>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
