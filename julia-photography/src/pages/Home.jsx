import Layout from '../components/layout/Layout';
import HomeHero from '../components/sections/HomeHero';
import ServicesTeaser from '../components/sections/ServicesTeaser';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import { testimonialsData } from '../data/testimonialsData';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HomeHero />

      {/* Services Teaser */}
      <ServicesTeaser />

      {/* Testimonials */}
      <TestimonialsSection
        eyebrow="Worte von meinen Paaren"
        title="Was meine Paare sagen"
        description="Echte Stimmen von Menschen, deren besondere Momente ich festhalten durfte"
        testimonials={testimonialsData}
        variant="grid"
      />

      {/* CTA Section */}
      <CTASection
        eyebrow="Lass uns reden"
        headline="Bereit, eure Geschichte festzuhalten?"
        subline="Ob Paarshooting oder Hochzeit – ich freue mich darauf, eure besonderen Momente mit euch zu erleben und festzuhalten."
        buttonLabel="Jetzt anfragen"
      />

      {/* About Section */}
      <section id="about" className="py-24 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-border-soft/30 rounded-lg flex items-center justify-center text-muted">
                [Platzhalter für Portrait]
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-anthracite mb-6">
                  Hey, ich bin Julia!
                </h2>
                <p className="text-lg text-muted mb-4 leading-relaxed">
                  Fotografin aus Leidenschaft. Ich liebe es, echte Momente einzufangen
                  und Geschichten zu erzählen.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  Ob spontane Schnappschüsse oder sorgfältig geplante Shootings –
                  ich bringe eure Vision aufs Bild.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-gradient-to-br from-border-soft/20 to-offwhite">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-anthracite mb-6">
              Lass uns zusammenarbeiten!
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              Bereit für euer nächstes Shooting? Schreibt mir!
            </p>
            <div className="bg-offwhite p-8 rounded-lg shadow-sm border border-border-soft">
              <form className="space-y-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-medium text-anthracite mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="Euer Name"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium text-anthracite mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="eure@email.de"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="message" className="block text-sm font-medium text-anthracite mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="Erzählt mir von euren Plänen..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-warm-accent hover:bg-warm-accent-dark text-offwhite rounded-sm transition-colors duration-200 font-medium text-lg"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
