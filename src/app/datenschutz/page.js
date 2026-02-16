"use client";

export default function Datenschutz() {
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
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                unserer nachfolgenden Datenschutzerklärung.
              </p>

              <h2>2. Verantwortliche Stelle</h2>
              <p>
                {/* TODO: Echte Daten einfügen – WICHTIG für DSGVO */}
                Engel &amp; Mühlhof GbR<br />
                (Marke: TalentSuite)<br />
                Musterstraße 1<br />
                58636 Iserlohn<br />
                Deutschland<br /><br />
                Telefon: +49 (0) XXX XXXXXXX<br />
                E-Mail: info@talentsuite.io
              </p>

              <h2>3. Datenerfassung auf dieser Website</h2>

              <h3>Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
                die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind technisch notwendig
                (essenzielle Cookies), andere werden für Analysezwecke und zur Optimierung
                eingesetzt (Analyse-Cookies). Sie können über unser Cookie-Banner selbst entscheiden,
                welche Cookies Sie zulassen möchten.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für
                Analyse-Cookies, Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für
                essenzielle Cookies.
              </p>

              <h3>Google Tag Manager</h3>
              <p>
                Diese Website nutzt den Google Tag Manager (GTM-N7J9WLXF). Der Google Tag Manager
                selbst setzt keine Cookies und erfasst keine personenbezogenen Daten. Er dient
                lediglich als Verwaltungstool für andere Tags (z.B. Google Analytics, Meta Pixel),
                die erst nach Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner geladen werden.
              </p>
              <p>
                Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.<br />
                Datenübermittlung in die USA auf Basis der EU-Standardvertragsklauseln.
              </p>

              <h3>Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in
                sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an der technisch fehlerfreien Darstellung und Sicherheit der Website).
              </p>

              <h2>4. Hosting und Content Delivery Networks</h2>
              <p>
                {/* TODO: Hosting-Provider angeben (z.B. Vercel) */}
                Diese Website wird bei [Hosting-Provider einfügen] gehostet. Beim Besuch der Website
                erfasst der Server automatisch technische Zugriffsdaten (Server-Logfiles).
              </p>
              <p>
                Videos werden über DigitalOcean Spaces (CDN) bereitgestellt. Dabei wird Ihre
                IP-Adresse an Server von DigitalOcean übertragen. DigitalOcean, LLC,
                101 Avenue of the Americas, New York, NY 10013, USA.
                Datenübermittlung in die USA auf Basis der EU-Standardvertragsklauseln.
              </p>

              <h2>5. Analyse-Tools und Werbung</h2>

              <h3>Google Analytics</h3>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics
                (sofern Sie dem über das Cookie-Banner zugestimmt haben). Anbieter: Google Ireland Limited.
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.
              </p>
              <p>
                Wir haben die IP-Anonymisierung aktiviert. Ihre IP-Adresse wird innerhalb der EU
                vor der Übermittlung an Google gekürzt.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner).
              </p>

              <h3>Meta Pixel (Facebook Pixel)</h3>
              <p>
                Diese Website nutzt das Meta Pixel (sofern Sie zugestimmt haben) zur Conversion-Messung.
                Anbieter: Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner).
              </p>

              <h2>6. Newsletter</h2>
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir
                Ihre E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten,
                dass Sie der Inhaber der angegebenen E-Mail-Adresse sind (Double-Opt-In-Verfahren).
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                Sie können Ihre Einwilligung jederzeit widerrufen, z.B. über den Abmeldelink
                in jedem Newsletter.
              </p>

              <h2>7. Ihre Rechte (Art. 15-21 DSGVO)</h2>
              <p>
                Sie haben jederzeit das Recht auf:<br />
                – Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)<br />
                – Berichtigung unrichtiger Daten (Art. 16 DSGVO)<br />
                – Löschung Ihrer Daten (Art. 17 DSGVO)<br />
                – Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
                – Datenübertragbarkeit (Art. 20 DSGVO)<br />
                – Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)<br />
                – Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)
              </p>
              <p>
                Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und
                Informationsfreiheit Nordrhein-Westfalen, Kavalleriestr. 2-4, 40213 Düsseldorf.
              </p>

              <h2>8. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht. Die aktuelle Version gilt ab dem
                Besuch unserer Website.
              </p>

              <p style={{ marginTop: "40px", opacity: 0.4 }}>
                <em>
                  Hinweis: Diese Datenschutzerklärung ist ein Entwurf und muss vor Veröffentlichung
                  juristisch geprüft werden. Wir empfehlen die Nutzung eines DSGVO-Generators
                  (z.B. eRecht24 oder IT-Recht Kanzlei) und anschließende anwaltliche Prüfung.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
