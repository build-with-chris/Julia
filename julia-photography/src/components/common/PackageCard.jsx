const PackageCard = ({
  title,
  price,
  duration,
  description,
  features = [],
  highlight = false,
  buttonLabel = 'Anfragen',
  onButtonClick,
}) => {
  return (
    <div
      className={`
        relative p-8 md:p-10 lg:p-12 rounded-lg border-2 transition-all duration-300
        ${highlight
          ? 'border-warm-accent bg-white shadow-xl scale-105'
          : 'border-border-soft bg-offwhite hover:border-warm-accent hover:shadow-lg'
        }
      `}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-block px-4 py-1.5 bg-warm-accent text-white text-sm font-medium rounded-full">
            Beliebt
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-anthracite mb-3 md:mb-4">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-4 md:mb-5">
        <span className="text-3xl md:text-4xl font-bold text-warm-accent">
          {price}
        </span>
      </div>

      {/* Duration */}
      {duration && (
        <p className="text-sm md:text-base text-anthracite/70 mb-6 font-medium">
          {duration}
        </p>
      )}

      {/* Description */}
      <p className="text-base md:text-lg text-anthracite/80 mb-6 md:mb-8 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-warm-accent flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base md:text-lg text-anthracite leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Button */}
      <button
        type="button"
        onClick={onButtonClick}
        className={`
          w-full px-6 md:px-8 py-4 md:py-5 rounded-sm font-medium text-base md:text-lg transition-all duration-300 min-h-[52px]
          ${highlight
            ? 'bg-warm-accent text-white hover:bg-warm-accent-dark shadow-md hover:shadow-lg'
            : 'border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white'
          }
        `}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PackageCard;
