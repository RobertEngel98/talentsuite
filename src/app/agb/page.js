"use client";

export default function AGB() {
  return (
    <>
      <section className="appointment_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="appointment_content align-items-center">
                <h1 className="text-center py-4">Allgemeine Geschäftsbedingungen</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policies pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
                Engel &amp; Mühlhof GbR (nachfolgend „TalentSuite" oder „Agentur") und dem Auftraggeber
                (nachfolgend „Kunde") über die Erbringung von Marketing-, Recruiting- und
                Digitalisierungsdienstleistungen.
              </p>
              <p>
                Abweichende AGB des Kunden werden nur anerkannt, wenn TalentSuite diesen
                ausdrücklich schriftlich zugestimmt hat.
              </p>

              <h2>§ 2 Vertragsgegenstand</h2>
              <p>
                TalentSuite erbringt Dienstleistungen in den Bereichen Performance Recruiting,
                Neukundengewinnung, E-Commerce, Social Media Management, Content Produktion
                und Webentwicklung. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen
                individuellen Angebot oder Vertrag.
              </p>

              <h2>§ 3 Leistungserbringung</h2>
              <p>
                TalentSuite erbringt die vereinbarten Leistungen nach bestem Wissen und unter
                Einsatz bewährter Methoden. Es handelt sich um eine Dienstleistung im Sinne
                eines Dienstvertrags (§§ 611 ff. BGB). Eine Erfolgsgarantie (z.B. bestimmte
                Anzahl an Bewerbungen oder Leads) wird nicht geschuldet, sofern nicht
                ausdrücklich anders vereinbart.
              </p>

              <h2>§ 4 Mitwirkungspflichten des Kunden</h2>
              <p>
                Der Kunde stellt alle für die Durchführung erforderlichen Informationen,
                Materialien und Zugänge rechtzeitig zur Verfügung. Verzögerungen durch
                fehlende Mitwirkung des Kunden gehen nicht zulasten von TalentSuite.
              </p>

              <h2>§ 5 Vergütung und Zahlungsbedingungen</h2>
              <p>
                Die Vergütung richtet sich nach dem individuellen Angebot. Rechnungen sind
                innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar, sofern
                nicht anders vereinbart. Bei Zahlungsverzug gelten die gesetzlichen Regelungen.
              </p>

              <h2>§ 6 Vertragslaufzeit und Kündigung</h2>
              <p>
                Die Vertragslaufzeit ergibt sich aus dem individuellen Vertrag. Sofern keine
                abweichende Regelung getroffen wurde, gilt eine Kündigungsfrist von 30 Tagen
                zum Monatsende. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
                bleibt unberührt.
              </p>

              <h2>§ 7 Haftung</h2>
              <p>
                TalentSuite haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit.
                Bei leichter Fahrlässigkeit haftet TalentSuite nur bei Verletzung wesentlicher
                Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren,
                typischerweise eintretenden Schaden.
              </p>

              <h2>§ 8 Urheberrecht und Nutzungsrechte</h2>
              <p>
                An den von TalentSuite erstellten Werken (Designs, Texte, Videos, Konzepte)
                werden dem Kunden nach vollständiger Bezahlung die einfachen Nutzungsrechte
                für den vereinbarten Zweck eingeräumt. Darüber hinausgehende Nutzungsrechte
                bedürfen einer gesonderten schriftlichen Vereinbarung.
              </p>

              <h2>§ 9 Vertraulichkeit und Datenschutz</h2>
              <p>
                Beide Parteien verpflichten sich, vertrauliche Informationen der jeweils
                anderen Partei nicht an Dritte weiterzugeben. Die Verarbeitung personenbezogener
                Daten erfolgt in Übereinstimmung mit der DSGVO. Sofern TalentSuite im Auftrag
                des Kunden personenbezogene Daten verarbeitet, wird ein Auftragsverarbeitungsvertrag
                (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              </p>

              <h2>§ 10 Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                UN-Kaufrechts.
              </p>
              <p>
                {/* Fix: Korrekter Gerichtsstand (nicht Berlin!) */}
                Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem
                Vertrag ist – soweit gesetzlich zulässig – Iserlohn bzw. das zuständige
                Amtsgericht Iserlohn / Landgericht Hagen.
              </p>
              <p>
                Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die
                Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>

              <p style={{ marginTop: "40px", opacity: 0.4 }}>
                <em>
                  Stand: Februar 2026 – Diese AGB sind ein Entwurf und sollten vor
                  Veröffentlichung von einem Rechtsanwalt geprüft werden.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
