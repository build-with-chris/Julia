import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';

const DatenschutzPage = () => {
  return (
    <Layout>
      <SEO
        title="Datenschutzerklärung - Julia Mayr Photography"
        description="Datenschutzerklärung gemäß DSGVO für Julia Mayr Photography. Informationen zur Datenverarbeitung, Cookies und Ihren Rechten als betroffene Person."
      />
      <div className="bg-offwhite">
        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="container-custom mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-4">
                Datenschutzerklärung
              </h1>
            </div>
          </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-8">
                
                {/* 1. Verantwortliche Stelle */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    1. Verantwortliche Stelle
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                  </p>
                  <div className="text-anthracite/90 space-y-2 pl-4">
                    <p className="font-semibold">Julia Mayr</p>
                    <p>Einzelunternehmen</p>
                    <p>Kiebitzweg 12a</p>
                    <p>85464 Finsing</p>
                    <p>Deutschland</p>
                    <p>
                      E-Mail:{' '}
                      <a
                        href="mailto:juliamayr.photo@gmail.com"
                        className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                      >
                        juliamayr.photo@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* 2. Allgemeine Hinweise zur Datenverarbeitung */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    2. Allgemeine Hinweise zur Datenverarbeitung
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    2.1 Umfang der Verarbeitung
                  </h3>
                  <p className="text-anthracite/90">
                    Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung von Anfragen und zur Durchführung vorvertraglicher bzw. vertraglicher Maßnahmen erforderlich ist.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    2.2 Rechtsgrundlagen
                  </h3>
                  <p className="text-anthracite/90 mb-4">
                    Soweit in dieser Datenschutzerklärung nicht ausdrücklich anders angegeben, erfolgt die Verarbeitung personenbezogener Daten auf Basis der folgenden Rechtsgrundlagen:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4">
                    <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen)</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z. B. sichere und effiziente Bereitstellung der Website, Beantwortung von Anfragen)</li>
                    <li>Art. 6 Abs. 1 lit. c DSGVO (Erfüllung gesetzlicher Pflichten)</li>
                  </ul>
                  <p className="text-anthracite/90 mt-4">
                    Wenn im Einzelfall eine Einwilligung erforderlich ist, erfolgt die Verarbeitung zusätzlich auf Basis von Art. 6 Abs. 1 lit. a DSGVO.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    2.3 Empfänger von Daten / Auftragsverarbeiter
                  </h3>
                  <p className="text-anthracite/90">
                    Teilweise setzt die Verantwortliche Dienstleister (z. B. Hoster, E-Mail-Provider) ein, die personenbezogene Daten im Auftrag verarbeiten. Mit diesen wurden – soweit rechtlich erforderlich – Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.
                  </p>
                </div>

                {/* 3. Hosting und Server-Logfiles */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    3. Hosting und Server-Logfiles
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Diese Website wird über die Plattform des Anbieters Vercel Inc. bereitgestellt.
                  </p>
                  <div className="text-anthracite/90 space-y-2 pl-4 mb-4">
                    <p className="font-semibold">Vercel Inc.</p>
                    <p>440 N Barranca Ave #4133</p>
                    <p>Covina, CA 91723</p>
                    <p>USA</p>
                  </div>
                  <p className="text-anthracite/90 mb-4">
                    Beim Aufruf der Website werden durch Vercel automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser automatisch übermittelt. Dies können insbesondere sein:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit der Anfrage</li>
                    <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                    <li>Inhalt der Anforderung (konkrete Seite)</li>
                    <li>Zugriffsstatus/HTTP-Statuscode</li>
                    <li>jeweils übertragene Datenmenge</li>
                    <li>Website, von der die Anforderung kommt (Referrer-URL)</li>
                    <li>Browsertyp, inklusive Sprache und Version</li>
                    <li>Betriebssystem</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Die Verarbeitung dieser Daten erfolgt zum Zweck der sicheren und effizienten Bereitstellung der Website, zur Fehleranalyse und zur Gewährleistung der Systemsicherheit und -stabilität. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    Eine Speicherung dieser Logdaten durch die Verantwortliche über die durch Vercel vorgesehenen Fristen hinaus erfolgt nicht.
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    Es kann nicht ausgeschlossen werden, dass Daten in die USA übertragen werden. Vercel trifft hierfür geeignete Garantien nach Art. 46 DSGVO (z. B. Standardvertragsklauseln). Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{' '}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://vercel.com/legal/privacy-policy
                    </a>
                  </p>
                </div>

                {/* 4. Kontaktaufnahme */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    4. Kontaktaufnahme
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    4.1 Kontaktformular
                  </h3>
                  <p className="text-anthracite/90 mb-4">
                    Auf der Website steht ein Kontaktformular zur Verfügung. Die dort abgefragten Pflichtfelder sind:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Vorname*</li>
                    <li>Nachname*</li>
                    <li>E-Mail-Adresse*</li>
                    <li>Nachricht*</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Optional:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Telefonnummer</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Die über das Formular eingegebenen Daten werden per E-Mail an die Verantwortliche übermittelt und nicht auf dem Webserver dauerhaft gespeichert (außer in Logfiles, siehe oben).
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    <strong>Zwecke der Verarbeitung:</strong>
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Bearbeitung Ihrer Anfrage</li>
                    <li>Angebotserstellung</li>
                    <li>Vorbereitung und Durchführung von Fototerminen und Verträgen</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    <strong>Rechtsgrundlage:</strong>
                  </p>
                  <p className="text-anthracite/90">
                    Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen / Vertragserfüllung) sowie ggf. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kommunikation).
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    4.2 Kontakt per E-Mail (mailto-Link)
                  </h3>
                  <p className="text-anthracite/90 mb-4">
                    Wenn Sie die Verantwortliche direkt per E-Mail kontaktieren (z. B. über den im Footer angegebenen mailto-Link), werden die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht) zum Zweck der Bearbeitung der Anfrage verarbeitet.
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    Die E-Mails werden über den Dienst Gmail versendet und empfangen. Diensteanbieterin ist:
                  </p>
                  <div className="text-anthracite/90 space-y-2 pl-4 mb-4">
                    <p className="font-semibold">Google Ireland Limited</p>
                    <p>Gordon House, Barrow Street</p>
                    <p>Dublin 4, D04 E5W5</p>
                    <p>Irland</p>
                  </div>
                  <p className="text-anthracite/90 mb-4">
                    Es ist möglich, dass Google Daten in Drittländer (insbesondere die USA) überträgt. Weitere Informationen zu der Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google:{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </p>
                  <p className="text-anthracite/90">
                    <strong>Rechtsgrundlage:</strong>
                  </p>
                  <p className="text-anthracite/90">
                    Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kommunikation).
                  </p>
                </div>

                {/* 5. Verwendung von Adobe Fonts */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    5. Verwendung von Adobe Fonts
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Zur einheitlichen und ansprechenden Darstellung von Schriftarten werden auf dieser Website Adobe Fonts (früher „Typekit") verwendet. Dienstanbieter ist:
                  </p>
                  <div className="text-anthracite/90 space-y-2 pl-4 mb-4">
                    <p className="font-semibold">Adobe Systems Software Ireland Limited</p>
                    <p>4–6 Riverwalk</p>
                    <p>Citywest Business Campus</p>
                    <p>Dublin 24</p>
                    <p>Irland</p>
                  </div>
                  <p className="text-anthracite/90 mb-4">
                    Beim Aufruf der Website lädt Ihr Browser die benötigten Webfonts von den Servern von Adobe. Hierbei können u. a. folgende Daten verarbeitet werden:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>IP-Adresse des aufrufenden Endgerätes</li>
                    <li>Informationen zum eingesetzten Browser und Betriebssystem</li>
                    <li>Hostname und URL der aufrufenden Seite</li>
                    <li>Zeitstempel der Anfrage</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Adobe gibt an, dass die Fonts ohne Cookies bereitgestellt werden. Für die Bereitstellung des Dienstes kann die IP-Adresse jedoch verarbeitet werden.
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    Es kann nicht ausgeschlossen werden, dass in diesem Zusammenhang Daten in die USA übertragen werden. Adobe setzt hierfür datenschutzrechtliche Garantien (z. B. Standardvertragsklauseln, EU-U.S. Data Privacy Framework) ein. Weitere Informationen:{' '}
                    <a
                      href="https://www.adobe.com/privacy/policies/adobe-fonts.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://www.adobe.com/privacy/policies/adobe-fonts.html
                    </a>
                  </p>
                  <p className="text-anthracite/90">
                    <strong>Rechtsgrundlage:</strong>
                  </p>
                  <p className="text-anthracite/90">
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen und ansprechenden Darstellung der Website).
                  </p>
                </div>

                {/* 6. Cookies und lokale Speicherung */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    6. Cookies und lokale Speicherung
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Auf der Website wird ein selbst entwickelter Cookie-Hinweis / Cookie-Banner eingesetzt.
                  </p>
                  <p className="text-anthracite/90 mb-4">
                    Nach aktuellem Stand werden nur technisch notwendige Cookies bzw. vergleichbare Technologien verwendet, z. B.:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>zur Darstellung des Cookie-Hinweises bzw. zur Speicherung Ihrer Auswahl (Einblendung/ Ausblendung)</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Soweit in Zukunft weitere, nicht technisch notwendige Dienste (z. B. Analyse- oder Marketing-Tools) ergänzt werden, ist ggf. eine vorherige Einwilligung über den Cookie-Banner erforderlich.
                  </p>
                  <p className="text-anthracite/90">
                    <strong>Rechtsgrundlage für technisch notwendige Cookies:</strong>
                  </p>
                  <p className="text-anthracite/90">
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien Bereitstellung der Website) und ggf. § 25 Abs. 2 TTDSG / TDDDG.
                  </p>
                </div>

                {/* 7. Einbindung externer Inhalte, Social Media */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    7. Einbindung externer Inhalte, Social Media
                  </h2>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Auf der Website werden derzeit keine Videos (z. B. YouTube, Vimeo), Karten (z. B. Google Maps) oder vergleichbare externe Inhalte eingebettet.</li>
                    <li>Social-Media-Profile (z. B. Instagram) werden ausschließlich über einfache Links (Icons mit Verlinkung) eingebunden. Beim bloßen Aufruf der Website werden daher keine Daten an diese Dienste übertragen. Eine Datenverarbeitung findet erst statt, wenn Sie auf den entsprechenden Link klicken und die jeweilige Plattform in einem neuen Tab/Fenster öffnen.</li>
                  </ul>
                  <p className="text-anthracite/90">
                    <strong>Rechtsgrundlage:</strong>
                  </p>
                  <p className="text-anthracite/90">
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen Auffindbarkeit der Social-Media-Profile).
                  </p>
                </div>

                {/* 8. Analyse-Tools und Tracking */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    8. Analyse-Tools und Tracking
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Es werden derzeit keine eigenständigen Analyse- oder Tracking-Tools wie z. B. Google Analytics, Matomo, Vercel Analytics oder vergleichbare Dienste eingesetzt.
                  </p>
                  <p className="text-anthracite/90">
                    Es findet lediglich die unter Ziffer 3 beschriebene Verarbeitung von Server-Logfiles durch den Hosting-Anbieter statt.
                  </p>
                </div>

                {/* 9. Speicherdauer */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    9. Speicherdauer
                  </h2>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4">
                    <li><strong>Server-Logfiles:</strong> werden durch den Hosting-Anbieter für einen begrenzten Zeitraum gespeichert, um die Stabilität und Sicherheit der Website zu gewährleisten und danach automatisch gelöscht.</li>
                    <li><strong>Kontaktanfragen:</strong> werden gespeichert, solange dies zur Bearbeitung der Anfrage erforderlich ist. Darüber hinaus können die Daten für die Dauer der gesetzlichen Verjährungsfristen (in der Regel bis zu 3 Jahre ab Ende des Jahres, in dem die Anfrage abschließend bearbeitet wurde) aufbewahrt werden, um rechtliche Ansprüche abzuwehren oder geltend zu machen.</li>
                    <li>Gesetzliche Aufbewahrungsfristen (z. B. handels- und steuerrechtliche Aufbewahrungsfristen von bis zu 10 Jahren) bleiben unberührt.</li>
                  </ul>
                </div>

                {/* 10. Ihre Rechte als betroffene Person */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    10. Ihre Rechte als betroffene Person
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                  </p>
                  <ul className="text-anthracite/90 list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO), insbesondere gegen eine Verarbeitung auf Basis von Art. 6 Abs. 1 lit. f DSGVO</li>
                    <li>Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
                  </ul>
                  <p className="text-anthracite/90 mb-4">
                    Zur Ausübung Ihrer Rechte können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.
                  </p>
                  <p className="text-anthracite/90">
                    Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Zuständig ist insbesondere die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                  </p>
                </div>

                {/* 11. Pflicht zur Bereitstellung von Daten */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    11. Pflicht zur Bereitstellung von Daten
                  </h2>
                  <p className="text-anthracite/90 mb-4">
                    Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Für die Nutzung der Website ohne Kontaktaufnahme ist keine Angabe personenbezogener Daten erforderlich.
                  </p>
                  <p className="text-anthracite/90">
                    Wenn Sie das Kontaktformular nutzen oder per E-Mail Kontakt aufnehmen, sind bestimmte Angaben (insbesondere Name, E-Mail-Adresse, Nachricht) erforderlich, um Ihre Anfrage sinnvoll bearbeiten zu können. Ohne diese Angaben ist eine Beantwortung in der Regel nicht möglich.
                  </p>
                </div>

                {/* 12. Aktualität und Änderung dieser Datenschutzerklärung */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    12. Aktualität und Änderung dieser Datenschutzerklärung
                  </h2>
                  <p className="text-anthracite/90">
                    Diese Datenschutzerklärung kann an geänderte rechtliche Vorgaben, Änderungen der Website oder bei Einsatz neuer Technologien angepasst werden. Es gilt stets die auf dieser Website veröffentlichte aktuelle Fassung der Datenschutzerklärung.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DatenschutzPage;
