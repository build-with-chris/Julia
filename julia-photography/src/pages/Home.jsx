import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Hero234 } from '../components/hero234';
import SEO from '../components/common/SEO';
import useContactForm from '../hooks/useContactForm';
import VoiceMemos from '../components/sections/VoiceMemos';

const Home = () => {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const handleBookingClick = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <SEO
        title="Julia Mayr Photography - Hochzeits-, Paar- & Portraitshootings München"
        description="Authentische Hochzeits-, Paar- und Portraitshootings in München und Umgebung. Cinematische, emotionale Fotografie mit natürlichem Licht. Jetzt unverbindliches Shooting buchen!"
        image="/LP_Hochzeit.webp"
      />
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

      {/* Königsbrunn 2026 – Auffällige CTA-Section (Abstand wegen Hero neg. margin) */}
      <section className="bg-anthracite py-6 md:py-8 mt-12 md:mt-16">
        <div className="container-custom">
          <button
            onClick={() => navigate('/koenigsbrunn-2026')}
            className="w-full group flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 text-left sm:text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-accent focus:ring-offset-anthracite rounded-sm py-1"
            aria-label="Zu Eislaufen Königsbrunn 2026 – Wettkampf-Fotos"
          >
            <span className="text-offwhite font-medium text-lg md:text-xl tracking-tight">
              Eislaufen Königsbrunn 2026
            </span>
            <span className="text-warm-accent text-sm md:text-base font-normal group-hover:text-warm-accent/80 transition-colors">
              Wettkampf-Fotos →
            </span>
          </button>
        </div>
      </section>

      {/* Services - Anschauliche Kategorien */}
      <section id="services" className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 bg-offwhite">
        <div className="w-[80%] mx-auto">
          {/* Paarshootings - Bild links, Text rechts */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
              {/* Bild - Klickbare Kachel mit Hover-Effekt */}
              <div className="w-full lg:w-[45%] mb-6 lg:mb-0 order-2 lg:order-1">
                <button
                  onClick={() => navigate('/paare')}
                  className="group relative w-full overflow-hidden rounded-lg aspect-[2.5/2] shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2"
                  aria-label="Zum Paarshooting"
                >
                  {/* Bild mit Hover-Effekt */}
                  <div className="absolute inset-0">
                    <img
                      src="/LP_Paar.JPG"
                      alt="Romantisches Paarshooting im goldenen Licht - Julia Mayr Photography"
                      className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-90 group-active:scale-105 group-active:brightness-90"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                  
                  {/* Glassmorphism CTA-Balken */}
                  <div className="absolute left-0 right-0 bottom-0 px-6 py-4 bg-white/65 backdrop-blur-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-anthracite font-medium text-sm md:text-base tracking-wide">
                      Zum Paarshooting
                    </p>
                  </div>
                </button>
              </div>
              {/* Text Block */}
              <div className="w-full lg:w-[50%] lg:pl-8 xl:pl-12 order-1 lg:order-2 mb-8 md:mb-0">
                <p className="text-xs md:text-sm uppercase tracking-wider text-warm-accent font-medium mb-3 md:mb-4">
                  Natürlich, achtsam, authentisch
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-anthracite mb-6 md:mb-8">
                  Paarshootings
                </h2>
                <button
                  onClick={() => navigate('/paare')}
                  className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-anthracite text-anthracite uppercase tracking-wider text-xs md:text-sm font-medium hover:bg-anthracite hover:text-offwhite transition-all duration-200"
                >
                  Galerie Paare
                </button>
              </div>
            </div>
          </div>

          {/* Hochzeiten - Text links, Bild rechts */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
              {/* Text Block */}
              <div className="w-full lg:w-[50%] mb-6 lg:mb-0 lg:pr-8 xl:pr-12">
                <p className="text-xs md:text-sm uppercase tracking-wider text-warm-accent font-medium mb-3 md:mb-4">
                  Eure wichtigsten Momente dokumentiert
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-anthracite mb-6 md:mb-8">
                  Hochzeiten
                </h2>
                <button
                  onClick={() => navigate('/hochzeiten')}
                  className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-anthracite text-anthracite uppercase tracking-wider text-xs md:text-sm font-medium hover:bg-anthracite hover:text-offwhite transition-all duration-200"
                >
                  Galerie Hochzeiten
                </button>
              </div>
              {/* Bild - Klickbare Kachel mit Hover-Effekt */}
              <div className="w-full lg:w-[45%]">
                <button
                  onClick={() => navigate('/hochzeiten')}
                  className="group relative w-full overflow-hidden rounded-lg aspect-[2.5/2] shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2"
                  aria-label="Zur Hochzeitsreportage"
                >
                  {/* Bild mit Hover-Effekt */}
                  <div className="absolute inset-0">
                    <img
                      src="/LP_Hochzeit.webp"
                      alt="Authentische Hochzeitsreportage - Emotionale Momente festgehalten"
                      className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  
                  {/* Glassmorphism CTA-Balken */}
                  <div className="absolute left-0 right-0 bottom-0 px-6 py-4 bg-white/65 backdrop-blur-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-anthracite font-medium text-sm md:text-base tracking-wide">
                      Zur Hochzeitsreportage
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Portraitshootings - Bild links, Text rechts */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
              {/* Bild - Klickbare Kachel mit Hover-Effekt */}
              <div className="w-full lg:w-[45%] mb-6 lg:mb-0 order-2 lg:order-1">
                <button
                  onClick={() => navigate('/portrait')}
                  className="group relative w-full overflow-hidden rounded-lg aspect-[2.5/2] shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2"
                  aria-label="Zum Portraitshooting"
                >
                  {/* Bild mit Hover-Effekt */}
                  <div className="absolute inset-0">
                    <img
                      src="/LP_Portrait.webp"
                      alt="Individuelles Portraitshooting - Authentisch und natürlich"
                      className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  
                  {/* Glassmorphism CTA-Balken */}
                  <div className="absolute left-0 right-0 bottom-0 px-6 py-4 bg-white/65 backdrop-blur-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-anthracite font-medium text-sm md:text-base tracking-wide">
                      Zum Portraitshooting
                    </p>
                  </div>
                </button>
              </div>
              {/* Text Block */}
              <div className="w-full lg:w-[50%] lg:pl-8 xl:pl-12 order-1 lg:order-2 mb-8 md:mb-0">
                <p className="text-xs md:text-sm uppercase tracking-wider text-warm-accent font-medium mb-3 md:mb-4">
                  Individuell, authentisch, natürlich
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-anthracite mb-6 md:mb-8">
                  Portraitshootings
                </h2>
                <button
                  onClick={() => navigate('/portrait')}
                  className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-anthracite text-anthracite uppercase tracking-wider text-xs md:text-sm font-medium hover:bg-anthracite hover:text-offwhite transition-all duration-200"
                >
                  Galerie Portrait
                </button>
              </div>
            </div>
          </div>

          {/* Familienshootings - Text links, Bild rechts */}
          <div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
              {/* Text Block */}
              <div className="w-full lg:w-[50%] mb-6 lg:mb-0 lg:pr-8 xl:pr-12">
                <p className="text-xs md:text-sm uppercase tracking-wider text-warm-accent font-medium mb-3 md:mb-4">
                  Familienbilder, die mit jedem Jahr wertvoller werden
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-anthracite mb-6 md:mb-8">
                  Familienshootings
                </h2>
                <button
                  onClick={() => navigate('/familie')}
                  className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-anthracite text-anthracite uppercase tracking-wider text-xs md:text-sm font-medium hover:bg-anthracite hover:text-offwhite transition-all duration-200"
                >
                  Galerie Familie
                </button>
              </div>
              {/* Bild - Klickbare Kachel mit Hover-Effekt */}
              <div className="w-full lg:w-[45%]">
                <button
                  onClick={() => navigate('/familie')}
                  className="group relative w-full overflow-hidden rounded-lg aspect-[2.5/2] shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2"
                  aria-label="Zum Familienshooting"
                >
                  {/* Bild mit Hover-Effekt */}
                  <div className="absolute inset-0">
                    <img
                      src="/LP_Family.webp"
                      alt="Lebendiges Familienshooting - Echte Emotionen und Verbindungen"
                      className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  
                  {/* Glassmorphism CTA-Balken */}
                  <div className="absolute left-0 right-0 bottom-0 px-6 py-4 bg-white/65 backdrop-blur-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-anthracite font-medium text-sm md:text-base tracking-wide">
                      Zum Familienshooting
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Memos Section */}
      <VoiceMemos />

      {/* Kontakt Section - Graustufen, breit, ohne Box */}
      <section id="kontakt" className="pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 bg-[#2a2a2a]">
        <div className="w-[80%] mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-end mb-8 md:mb-12">
            <h2 className="text-[#e8e8e8] text-3xl md:text-4xl lg:text-5xl font-bold">
              Jetzt kontaktieren.
            </h2>
          </div>
          
          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-8 p-6 bg-white/10 border-2 border-[#b0b0b0] rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#b0b0b0] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-[#e8e8e8] mb-1">
                    Vielen Dank für deine Nachricht!
                  </h3>
                  <p className="text-[#e8e8e8] text-sm">
                    Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" noValidate>
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
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                    errors.firstName
                      ? 'border-[#b0b0b0] focus:border-[#b0b0b0]'
                      : 'border-[#666666] focus:border-[#b0b0b0]'
                  }`}
                  placeholder=""
                  aria-required="true"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  Nachname*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                    errors.lastName
                      ? 'border-[#b0b0b0] focus:border-[#b0b0b0]'
                      : 'border-[#666666] focus:border-[#b0b0b0]'
                  }`}
                  placeholder=""
                  aria-required="true"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                    {errors.lastName}
                  </p>
                )}
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                    errors.email
                      ? 'border-[#b0b0b0] focus:border-[#b0b0b0]'
                      : 'border-[#666666] focus:border-[#b0b0b0]'
                  }`}
                  placeholder=""
                  aria-required="true"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 resize-none text-base md:text-lg ${
                  errors.message
                    ? 'border-[#b0b0b0] focus:border-[#b0b0b0]'
                    : 'border-[#666666] focus:border-[#b0b0b0]'
                }`}
                placeholder=""
                aria-required="true"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                  {errors.message}
                </p>
              )}
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

            {errors.submit && (
              <div className="p-4 bg-white/10 border border-[#b0b0b0] rounded-sm">
                <p className="text-sm text-[#b0b0b0]">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 md:px-12 py-3 md:py-4 border-2 border-[#b0b0b0] text-[#d0d0d0] uppercase tracking-wider font-medium hover:bg-[#b0b0b0] hover:text-[#2a2a2a] transition-all duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'WIRD GESENDET...' : 'SENDEN'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
