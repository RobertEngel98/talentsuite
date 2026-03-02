import Link from "next/link";

const Appointment = ({ heading, buttonText, buttonLink = "https://calendar.app.google/QFoADWcRwwuYUoky8" }) => {
  return (
    <section className="appointment_section" aria-label="Termin vereinbaren" data-track-section="appointment" data-track-section-name="Termin vereinbaren">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="appointment_content">
              <h2>{heading}</h2>
              <div className="hero_buttons">
                <Link className="btn-primary" href={buttonLink} target="_blank" rel="noopener noreferrer" data-track-click={buttonText} data-track-location="appointment-section">
                  {buttonText}
                  <i className="bi bi-arrow-up-right" style={{ fontSize: "14px" }}></i>
                </Link>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "16px" }}>
                100% kostenlos · Unverbindlich · Nächster Termin in 48h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
