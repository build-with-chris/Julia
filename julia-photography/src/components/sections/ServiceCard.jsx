const ServiceCard = ({
  label,
  title,
  description,
  imageSrc,
  imageAlt = '',
  linkText = 'Zum Angebot',
  onLinkClick,
  imagePosition = 'left', // 'left' or 'right'
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        {/* Label */}
        <p className="text-sm uppercase tracking-wider text-warm-accent font-medium">
          {label}
        </p>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>

        {/* Link/Button */}
        <button
          onClick={onLinkClick}
          className="inline-flex items-center gap-2 text-warm-accent hover:text-anthracite font-medium transition-colors duration-200 group mt-4"
        >
          <span>{linkText}</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
  );
};

export default ServiceCard;
