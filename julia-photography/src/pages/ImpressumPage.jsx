import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';

const ImpressumPage = () => {
  return (
    <Layout>
      <div className="bg-offwhite">
        {/* Page Header */}
        <PageHeader
          headline="Impressum"
          subline="Angaben gemäß § 5 TMG"
          imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Impressum"
          overlayOpacity="medium"
          textPosition="center"
          minHeight="md"
        />

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm space-y-8">
                {/* Angaben gemäß § 5 TMG */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    Angaben gemäß § 5 TMG
                  </h2>
                  <div className="text-muted space-y-2">
                    <p className="font-semibold">Julia Mayr Fotografie</p>
                    <p>Brucker Straße 6a</p>
                    <p>82281 Egenhofen</p>
                  </div>
                </div>

                {/* Kontakt */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
                    Kontakt
                  </h2>
                  <div className="text-muted space-y-2">
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
                  <p className="text-muted">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                {/* Quelle */}
                <div className="pt-8 border-t border-border-soft">
                  <p className="text-sm text-muted">
                    Quelle:{' '}
                    <a
                      href="https://www.e-recht24.de/impressum-generator.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-accent hover:text-warm-accent-dark transition-colors"
                    >
                      https://www.e-recht24.de/impressum-generator.html
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

export default ImpressumPage;

