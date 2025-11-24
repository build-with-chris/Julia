import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Hero234 } from '../components/hero234';

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
      {/* Hero Section - Hero234 Block */}
      <div className="-mt-12 md:-mt-16 -mb-12 md:-mb-16">
        <Hero234
          kicker="Cinematische & emotionale Fotografie"
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
      </div>

      {/* Services - kompakte Übersicht */}
      <section id="services" className="pt-12 md:pt-16 pb-16 md:pb-24 lg:pb-32 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-anthracite mb-8">
              Für jeden Moment das richtige Shooting
            </h2>
            <p className="text-lg md:text-xl text-anthracite/80 leading-relaxed max-w-3xl mx-auto">
              Ob romantisches Paarshooting, euer besonderer Hochzeitstag, ein persönliches Portrait oder ein Familienshooting – 
              ich begleite euch mit meiner Kamera und halte die Momente fest, die euer Herz berühren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div
              onClick={() => navigate('/paare')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/paare');
                }
              }}
              className="bg-white p-8 md:p-10 rounded-lg border border-border-soft/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-anthracite mb-4 group-hover:text-warm-accent transition-colors">Paarshootings</h3>
              <p className="text-anthracite/75 leading-relaxed mb-6 text-base md:text-lg">
                Echte Verbindung statt perfekte Posen. Ich halte eure Liebe und Intimität fest – 
                natürlich, emotional und zeitlos.
              </p>
              <div className="text-warm-accent group-hover:text-anthracite font-medium transition-colors text-base md:text-lg">
                Mehr erfahren →
              </div>
            </div>
            <div
              onClick={() => navigate('/hochzeiten')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/hochzeiten');
                }
              }}
              className="bg-white p-8 md:p-10 rounded-lg border border-border-soft/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-anthracite mb-4 group-hover:text-warm-accent transition-colors">Hochzeiten</h3>
              <p className="text-anthracite/75 leading-relaxed mb-6 text-base md:text-lg">
                Eure wichtigsten Momente dokumentiert – zeitlos, emotional, ehrlich. 
                Von den Vorbereitungen bis zum letzten Tanz.
              </p>
              <div className="text-warm-accent group-hover:text-anthracite font-medium transition-colors text-base md:text-lg">
                Mehr erfahren →
              </div>
            </div>
            <div
              onClick={() => navigate('/portrait')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/portrait');
                }
              }}
              className="bg-white p-8 md:p-10 rounded-lg border border-border-soft/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-anthracite mb-4 group-hover:text-warm-accent transition-colors">Portraitshootings</h3>
              <p className="text-anthracite/75 leading-relaxed mb-6 text-base md:text-lg">
                Individuell, authentisch und voller Persönlichkeit. Ich zeige euch, wie schön ihr seid – 
                natürlich und ohne Maskerade.
              </p>
              <div className="text-warm-accent group-hover:text-anthracite font-medium transition-colors text-base md:text-lg">
                Mehr erfahren →
              </div>
            </div>
            <div
              onClick={() => navigate('/familie')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/familie');
                }
              }}
              className="bg-white p-8 md:p-10 rounded-lg border border-border-soft/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-anthracite mb-4 group-hover:text-warm-accent transition-colors">Familienshootings</h3>
              <p className="text-anthracite/75 leading-relaxed mb-6 text-base md:text-lg">
                Die besonderen Momente eurer Familie festgehalten – ehrlich, lebendig und voller Emotion. 
                Für Erinnerungen, die ein Leben lang halten.
              </p>
              <div className="text-warm-accent group-hover:text-anthracite font-medium transition-colors text-base md:text-lg">
                Mehr erfahren →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section - prominent und einfach */}
      <section id="kontakt" className="pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-10 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-anthracite mb-6">
                Bereit für euer Shooting?
              </h2>
              <p className="text-lg md:text-xl text-anthracite/80 leading-relaxed">
                Schreibt mir und wir finden gemeinsam den perfekten Termin für euch.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-sm border border-border-soft">
              <form className="space-y-6 md:space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Euer Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent text-base"
                    placeholder="Anna & Tom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent text-base"
                    placeholder="eure@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="shooting-type" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Art des Shootings
                  </label>
                  <select
                    id="shooting-type"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent text-base"
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
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 md:px-5 py-3 md:py-4 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent focus:border-transparent text-base resize-none"
                    placeholder="Erzählt mir von euren Plänen und eurem Wunschtermin..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 md:px-10 py-4 md:py-5 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-colors duration-200 font-medium text-base md:text-lg shadow-md hover:shadow-lg min-h-[52px]"
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
