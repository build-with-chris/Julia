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
      <div className="mt-8 md:-mt-16 -mb-12 md:-mb-16">
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
      <section id="services" className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 bg-offwhite">
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

      {/* Kontakt Section - Graustufen, breit, ohne Box */}
      <section id="kontakt" className="pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 bg-[#2a2a2a]">
        <div className="w-[80%] mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-end mb-8 md:mb-12">
            <h2 className="text-[#e8e8e8] text-3xl md:text-4xl lg:text-5xl font-bold">
              Jetzt kontaktieren.
            </h2>
          </div>
          
          <form className="space-y-6 md:space-y-8">
            {/* Vorname / Nachname - 2 Spalten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div>
                <label htmlFor="firstName" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  Vorname*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 text-base md:text-lg"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  Nachname*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 text-base md:text-lg"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* E-Mail / Telefon - 2 Spalten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div>
                <label htmlFor="email" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  E-Mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 text-base md:text-lg"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 text-base md:text-lg"
                  placeholder=""
                />
              </div>
            </div>

            {/* Nachricht - volle Breite */}
            <div>
              <label htmlFor="message" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                Nachricht*
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 resize-none text-base md:text-lg"
                placeholder=""
                required
              />
            </div>

            {/* Checkbox für Datenschutz */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="mt-1 w-4 h-4 border-2 border-[#888888] bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#b0b0b0] checked:bg-[#b0b0b0] checked:border-[#b0b0b0]"
                required
              />
              <label htmlFor="privacy" className="text-[#c0c0c0] text-sm md:text-base cursor-pointer">
                Ich habe die Datenschutzerklärung gelesen und akzeptiert.*
              </label>
            </div>

            {/* Pflichtfeld Hinweis */}
            <p className="text-[#888888] text-xs md:text-sm">*Pflichtfeld</p>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-8 md:px-12 py-3 md:py-4 border-2 border-[#b0b0b0] text-[#d0d0d0] uppercase tracking-wider font-medium hover:bg-[#b0b0b0] hover:text-[#2a2a2a] transition-all duration-200 text-sm md:text-base"
              >
                SENDEN
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
