import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';

const DatenschutzPage = () => {
  return (
    <Layout>
      <div className="bg-offwhite">
        {/* Page Header */}
        <PageHeader
          headline="Datenschutzerklärung"
          subline="Ihre Privatsphäre ist uns wichtig"
          imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Datenschutz"
          overlayOpacity="medium"
          textPosition="center"
          minHeight="md"
        />

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-8">
                {/* 1. Datenschutz auf einen Blick */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-muted">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Datenerfassung auf dieser Website
                  </h3>

                  <h4 className="text-lg md:text-xl font-semibold text-anthracite mb-2 mt-4">
                    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                  </h4>
                  <p className="text-muted">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <h4 className="text-lg md:text-xl font-semibold text-anthracite mb-2 mt-4">
                    Wie erfassen wir Ihre Daten?
                  </h4>
                  <p className="text-muted">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-muted">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>

                  <h4 className="text-lg md:text-xl font-semibold text-anthracite mb-2 mt-4">
                    Wofür nutzen wir Ihre Daten?
                  </h4>
                  <p className="text-muted">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>

                  <h4 className="text-lg md:text-xl font-semibold text-anthracite mb-2 mt-4">
                    Welche Rechte haben Sie bezüglich Ihrer Daten?
                  </h4>
                  <p className="text-muted">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                  <p className="text-muted">
                    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                {/* 2. Hosting */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    2. Hosting
                  </h2>
                  <p className="text-muted mb-4">
                    Wir hosten unsere Website bei Wix.com Ltd., 40 Namal Tel Aviv St., Tel Aviv 6350671, Israel (nachfolgend „WIX").
                  </p>
                  <p className="text-muted mb-4">
                    WIX ein Tool zum Erstellen und zum Hosten von Webseiten. Wenn Sie unsere Website besuchen, werden mit Hilfe von WIX das Nutzerverhalten, die Besucherquellen, die Region der Websitebesucher und die Besucherzahlen analysiert. WIX speichert Cookies auf Ihrem Browser, die für die Darstellung der Website und zur Gewährleistung der Sicherheit erforderlich sind (notwendige Cookies).
                  </p>
                  <p className="text-muted mb-4">
                    Die Daten werden auf den Servern von WIX in Israel gespeichert. Israel gilt als datenschutzrechtlich sicherer Drittstaat. Das bedeutet, dass Israel ein Datenschutzniveau aufweist, das dem Datenschutzniveau in der Europäischen Union entspricht.
                  </p>
                  <p className="text-muted mb-4">
                    Details entnehmen Sie der Datenschutzerklärung von WIX:{' '}
                    <a
                      href="https://de.wix.com/about/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://de.wix.com/about/privacy
                    </a>
                  </p>
                  <p className="text-muted">
                    Die Verwendung von WIX erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                  </p>
                </div>

                {/* 3. Allgemeine Hinweise */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    3. Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Datenschutz
                  </h3>
                  <p className="text-muted">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-muted">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-muted">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <div className="text-muted space-y-2 mb-4">
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="pl-4">
                      <p className="font-semibold">Julia Mayr</p>
                      <p>Brucker Straße 6a</p>
                      <p>82281 Egenhofen</p>
                      <p>Telefon: +49 172 7816052</p>
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
                  <p className="text-muted">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Speicherdauer
                  </h3>
                  <p className="text-muted">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
                  </h3>
                  <p className="text-muted">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-muted">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h3>
                  <p className="text-muted">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                  </p>
                  <p className="text-muted">
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-muted">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-muted">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    SSL- bzw. TLS-Verschlüsselung
                  </h3>
                  <p className="text-muted">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="text-muted">
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Auskunft, Löschung und Berichtigung
                  </h3>
                  <p className="text-muted">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-anthracite mb-3 mt-6">
                    Recht auf Einschränkung der Verarbeitung
                  </h3>
                  <p className="text-muted">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                  </p>
                  <ul className="text-muted list-disc list-inside space-y-2 ml-4">
                    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  </ul>
                  <p className="text-muted mt-4">
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                  </p>
                </div>

                {/* Quelle */}
                <div className="pt-8 border-t border-border-soft">
                  <p className="text-sm text-muted">
                    Quelle:{' '}
                    <a
                      href="https://www.e-recht24.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://www.e-recht24.de
                    </a>
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

