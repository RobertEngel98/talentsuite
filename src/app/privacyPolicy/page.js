"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="appointment_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="appointment_content align-items-center">
                <h1 className="text-center py-4">Datenschutzerklärung</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policies pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-3xl font-bold mb-6">Datenschutz bei Talentsuite</h2>

              <p className="mb-4">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein zentrales Anliegen. Wir verarbeiten Ihre Daten
                ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung
                informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Verantwortlicher</h3>
                <address className="not-italic text-sm leading-relaxed">
                  <p className="mb-4">
                    <strong>Talentsuite</strong>
                    <br />
                    Musterstraße 123, 12345 Berlin
                    <br />
                    E-Mail:{" "}
                    <a href="mailto:datenschutz@talentsuite.de" className="text-blue-600 underline">
                      datenschutz@talentsuite.de
                    </a>
                  </p>
                </address>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Welche Daten werden erhoben?</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Vor- und Nachname, E-Mail-Adresse (bei Kontaktaufnahme)</li>
                  <li>IP-Adresse, Browsertyp und -version, Betriebssystem</li>
                  <li>Nutzungsverhalten auf unserer Website (z. B. besuchte Seiten, Verweildauer)</li>
                  <li>Sonstige Informationen, die Sie freiwillig übermitteln</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Zweck der Datenverarbeitung</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Zur Kontaktaufnahme und Kommunikation mit Ihnen</li>
                  <li>Zur Analyse und Optimierung unseres Online-Angebots</li>
                  <li>Zur Vertragserfüllung, falls Sie unsere Leistungen nutzen</li>
                  <li>Nur mit Ihrer Einwilligung: für Marketing- und Werbezwecke</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Weitergabe an Dritte</h3>
                <p className="text-sm">
                  Ihre Daten werden nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben – es sei denn, wir
                  sind gesetzlich dazu verpflichtet oder es ist zur Vertragserfüllung erforderlich (z. B. Dienstleister).
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cookies & Tracking</h3>
                <p className="text-sm mb-2">
                  Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Sie können die Speicherung
                  von Cookies in Ihrem Browser deaktivieren. Details finden Sie in unserer{" "}
                  <Link href="/cookie-richtlinie" className="underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Ihre Rechte laut DSGVO</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Recht auf Auskunft über gespeicherte Daten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung („Recht auf Vergessenwerden“)</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Recht auf Widerspruch gegen Datenverarbeitung</li>
                </ul>
              </div>

              <p className="text-sm">
                Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte ausüben möchten, schreiben Sie uns an{" "}
                <a href="mailto:datenschutz@talentsuite.de" className="underline text-blue-600">
                  datenschutz@talentsuite.de
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
