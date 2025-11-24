import { useNavigate, useLocation } from 'react-router-dom';

const CTASection = ({
  eyebrow,
  headline = 'Bereit, eure Geschichte festzuhalten?',
  subline,
  buttonLabel = 'Termin anfragen',
  onButtonClick,
  variant = 'default', // 'default' or 'compact'
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // Default: Navigate to contact page or scroll to contact section
      if (location.pathname === '/') {
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/kontakt');
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F5] to-[#F5F0EA]">
      <div className="container-custom">
        <div className={`${variant === 'compact' ? 'max-w-3xl' : 'max-w-4xl'} mx-auto`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Eyebrow */}
              {eyebrow && (
                <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-3">
                  {eyebrow}
                </p>
              )}

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-4 leading-tight">
                {headline}
              </h2>

              {/* Subline */}
              {subline && (
                <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {subline}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0 text-center md:text-right">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white rounded-sm transition-all duration-300 font-medium text-base md:text-lg group"
                aria-label={`${buttonLabel} - Kontaktformular öffnen`}
              >
                <span>{buttonLabel}</span>
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
