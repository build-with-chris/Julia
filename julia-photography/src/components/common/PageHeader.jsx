const PageHeader = ({
  headline,
  subline,
  imageSrc,
  imageAlt = '',
  overlayOpacity = 'medium', // 'light', 'medium', 'dark'
  textPosition = 'center', // 'center', 'left', 'right'
  minHeight = 'lg', // 'sm', 'md', 'lg'
}) => {
  const heightClasses = {
    sm: 'h-[50vh] min-h-[400px]',
    md: 'h-[60vh] min-h-[500px]',
    lg: 'h-[70vh] min-h-[600px]',
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

  return (
    <section className={`relative w-full ${heightClasses[minHeight]} flex items-end overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`} />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24 px-4 md:px-0">
        <div className="container-custom">
          <div className={`flex flex-col ${textAlignClasses[textPosition]} max-w-4xl ${textPosition === 'center' ? 'mx-auto' : ''}`}>
            {/* Headline */}
            <h1 className="text-white mb-6 md:mb-8 drop-shadow-lg">
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
