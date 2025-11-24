import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomeHero from '../components/sections/HomeHero';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';

const Home = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section - vereinfacht mit klarem Buchungs-CTA */}
      <HomeHero
        kicker="Cinematische & emotionale Fotografie"
        headline="Eure Geschichte, festgehalten"
        subtitle="Natürlich, achtsam und mit einem Hauch Nostalgie – ich halte eure wertvollsten Momente fest. Ob Paarshooting, Hochzeit, Portrait oder Familie."
        primaryButtonText="Jetzt Shooting buchen"
        secondaryButtonText="Mehr erfahren"
        onPrimaryClick={handleBookingClick}
        onSecondaryClick={() => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Services - kompakte Übersicht */}
      <section id="services" className="py-20 md:py-28 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Meine Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-anthracite mb-6">
              Für jeden Moment das richtige Shooting
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Ob romantisches Paarshooting, euer besonderer Hochzeitstag, ein persönliches Portrait oder ein Familienshooting – 
              ich begleite euch mit meiner Kamera und halte die Momente fest, die euer Herz berühren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg border border-border-soft/50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-anthracite mb-3">Paarshootings</h3>
              <p className="text-muted leading-relaxed mb-4">
                Echte Verbindung statt perfekte Posen. Ich halte eure Liebe und Intimität fest – 
                natürlich, emotional und zeitlos.
              </p>
              <button
                onClick={() => navigate('/paare')}
                className="text-warm-accent hover:text-anthracite font-medium transition-colors"
              >
                Mehr erfahren →
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border-soft/50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-anthracite mb-3">Hochzeiten</h3>
              <p className="text-muted leading-relaxed mb-4">
                Eure wichtigsten Momente dokumentiert – zeitlos, emotional, ehrlich. 
                Von den Vorbereitungen bis zum letzten Tanz.
              </p>
              <button
                onClick={() => navigate('/hochzeiten')}
                className="text-warm-accent hover:text-anthracite font-medium transition-colors"
              >
                Mehr erfahren →
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border-soft/50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-anthracite mb-3">Portraitshootings</h3>
              <p className="text-muted leading-relaxed mb-4">
                Individuell, authentisch und voller Persönlichkeit. Ich zeige euch, wie schön ihr seid – 
                natürlich und ohne Maskerade.
              </p>
              <button
                onClick={() => navigate('/portrait')}
                className="text-warm-accent hover:text-anthracite font-medium transition-colors"
              >
                Mehr erfahren →
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border-soft/50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-anthracite mb-3">Familienshootings</h3>
              <p className="text-muted leading-relaxed mb-4">
                Die besonderen Momente eurer Familie festgehalten – ehrlich, lebendig und voller Emotion. 
                Für Erinnerungen, die ein Leben lang halten.
              </p>
              <button
                onClick={() => navigate('/familie')}
                className="text-warm-accent hover:text-anthracite font-medium transition-colors"
              >
                Mehr erfahren →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Kontakt Section - prominent und einfach */}
      <section id="kontakt" className="py-24 md:py-32 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-anthracite mb-4">
                Bereit für euer Shooting?
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Schreibt mir und wir finden gemeinsam den perfekten Termin für euch.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-border-soft">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-anthracite mb-2">
                    Euer Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="Anna & Tom"
                  />
                </div>
                <div>
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
                <div>
                  <label htmlFor="shooting-type" className="block text-sm font-medium text-anthracite mb-2">
                    Art des Shootings
                  </label>
                  <select
                    id="shooting-type"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="paare">Paarshooting</option>
                    <option value="hochzeit">Hochzeit</option>
                    <option value="portrait">Portraitshooting</option>
                    <option value="familie">Familienshooting</option>
                    <option value="anderes">Anderes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-anthracite mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent"
                    placeholder="Erzählt mir von euren Plänen und eurem Wunschtermin..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-colors duration-200 font-medium text-lg shadow-md hover:shadow-lg"
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
