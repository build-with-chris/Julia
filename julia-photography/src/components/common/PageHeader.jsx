import { useEffect } from 'react';

const PageHeader = ({
  headline,
  mobileHeadline,
  subline,
  imageSrc,
  imageAlt = '',
  overlayOpacity = 'medium', // 'light', 'medium', 'dark'
  textPosition = 'center', // 'center', 'left', 'right'
  minHeight = 'lg', // 'sm', 'md', 'lg'
  verticalPosition = 'bottom', // 'bottom', 'lower-third'
  grayscale = false, // Apply grayscale filter to image
  backgroundPosition = 'center', // CSS background-position value
}) => {
  // Preload Hero-Bild für bessere SEO und Performance
  useEffect(() => {
    if (imageSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      link.fetchPriority = 'high';
      link.setAttribute('data-hero-preload', 'true');
      document.head.appendChild(link);

      return () => {
        // Cleanup: Remove preload link on unmount
        const existingLink = document.querySelector(`link[data-hero-preload="true"][href="${imageSrc}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      };
    }
  }, [imageSrc]);
  const heightClasses = {
    sm: 'h-[40vh] md:h-[50vh] min-h-[320px] md:min-h-[400px]',
    md: 'h-[48vh] md:h-[60vh] min-h-[400px] md:min-h-[500px]',
    lg: 'h-[56vh] md:h-[70vh] min-h-[480px] md:min-h-[600px]',
  };

  const overlayClasses = {
    light: 'bg-gradient-to-t from-anthracite/40 via-anthracite/20 to-transparent',
    medium: 'bg-gradient-to-t from-anthracite/70 via-anthracite/40 to-transparent',
    dark: 'bg-gradient-to-t from-anthracite/90 via-anthracite/60 to-transparent',
  };

  const textAlignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  // Padding classes based on vertical position
  // For lower-third: Hero is 70vh, lower third is ~23.33vh, center of lower third is ~11.67vh from bottom
  const paddingClasses = verticalPosition === 'lower-third' 
    ? 'pb-[12vh] md:pb-[12vh] lg:pb-[12vh]' 
    : 'pb-16 md:pb-20 lg:pb-24';

  return (
    <section className={`relative w-full ${heightClasses[minHeight]} flex items-end justify-center overflow-hidden`}>
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat ${grayscale ? 'grayscale' : ''}`}
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: backgroundPosition
        }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`} />

      {/* Content */}
      <div className={`relative z-10 w-full ${paddingClasses} px-4 md:px-0`}>
        <div className="container-custom">
          <div className={`flex flex-col ${textAlignClasses[textPosition]} max-w-4xl ${textPosition === 'center' ? 'mx-auto' : ''}`}>
            {/* Headline */}
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 drop-shadow-lg">
              {headline}
            </h1>

            {/* Subline */}
            {subline && (
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                {subline}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
