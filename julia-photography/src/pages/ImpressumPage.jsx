import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';

const ImpressumPage = () => {
  return (
    <Layout>
      <SEO
        title="Impressum - Julia Mayr Photography"
        description="Impressum und rechtliche Angaben gemäß § 5 TMG für Julia Mayr Photography. Kontaktinformationen und Verantwortliche Stelle."
      />
      <div className="bg-offwhite">
        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="container-custom mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-4">
                Impressum
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80">
                Angaben gemäß § 5 TMG
              </p>
            </div>
          </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-8">
                {/* Angaben gemäß § 5 TMG */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    Angaben gemäß § 5 TMG
                  </h2>
                  <div className="text-anthracite/90 space-y-2">
                    <p className="font-semibold">Julia Mayr</p>
                    <p>Einzelunternehmen</p>
                    <p>Kiebitzweg 12a</p>
                    <p>85464 Finsing</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                {/* Kontakt */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    Kontakt
                  </h2>
                  <div className="text-anthracite/90 space-y-2">
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

                {/* Verbraucherstreitbeilegung */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                  </h2>
                  <p className="text-anthracite/90">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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

export default ImpressumPage;
