"use client";

export default function Impressum() {
  return (
    <>
      <section className="appointment_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="appointment_content align-items-center">
                <h1 className="text-center py-4">Impressum</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policies pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-3xl font-bold mb-6">Angaben gemäß § 5 TMG</h2>

              <address className="not-italic text-sm leading-relaxed mb-6" style={{ fontStyle: "normal" }}>
                <p style={{ opacity: 1 }}>
                  <strong>Engel & Mühlhof GbR</strong><br />
                  (Marke: TalentSuite)<br /><br />
                  {/* TODO: Echte Adresse einfügen */}
                  Musterstraße 1<br />
                  58636 Iserlohn<br />
                  Deutschland
                </p>
              </address>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Vertreten durch</h3>
                <p>
                  {/* TODO: Echte Namen der Gesellschafter einfügen */}
                  Robert Engel, [Name Mühlhof]
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
                <p>
                  {/* TODO: Echte Kontaktdaten einfügen */}
                  Telefon: +49 (0) XXX XXXXXXX<br />
                  E-Mail:{" "}
                  <a href="mailto:info@talentsuite.io" style={{ color: "#4da6d9", textDecoration: "underline" }}>
                    info@talentsuite.io
                  </a>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Umsatzsteuer-Identifikationsnummer</h3>
                <p>
                  {/* TODO: USt-IdNr. einfügen wenn vorhanden */}
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                  DE XXXXXXXXX
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p>
                  {/* TODO: Echten Namen einfügen */}
                  Robert Engel<br />
                  Musterstraße 1<br />
                  58636 Iserlohn
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">EU-Streitschlichtung</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "#4da6d9", textDecoration: "underline" }}>
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                  Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
