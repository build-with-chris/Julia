const HomeHero = ({
  backgroundImage = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
  kicker = 'Cinematische & emotionale Hochzeits- und Paarfotografie',
  headline = 'Your love story, captured like a movie.',
  subtitle = 'Natürlich, achtsam und mit einem Hauch Nostalgie – ich halte eure wertvollsten Momente fest.',
  primaryButtonText = 'Paare entdecken',
  secondaryButtonText = 'Hochzeiten entdecken',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      // Navigate to Paare page
      if (window.navigateTo) {
        window.navigateTo('paare');
      }
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      // Navigate to Hochzeiten page
      if (window.navigateTo) {
        window.navigateTo('hochzeiten');
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Hero background"
      />

      {/* Gradient Overlay - dark bottom to transparent top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/90 via-[#2D2A26]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          {/* Kicker */}
          <p className="text-white/80 text-sm md:text-base font-medium tracking-wide uppercase mb-4 md:mb-6">
            {kicker}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {headline}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" aria-label="Hero navigation">
            <button
              onClick={handlePrimaryClick}
              className="px-8 py-4 bg-[#8B7355] hover:bg-[#6B5844] text-white rounded-sm transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={handleSecondaryClick}
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2D2A26] rounded-sm transition-all duration-300 font-medium text-base md:text-lg"
            >
              {secondaryButtonText}
            </button>
          </nav>
        </div>
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
