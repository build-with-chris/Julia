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
        relative p-8 md:p-10 rounded-lg border-2 transition-all duration-300
        ${highlight
          ? 'border-warm-accent bg-white shadow-xl scale-105'
          : 'border-border-soft bg-offwhite hover:border-warm-accent hover:shadow-lg'
        }
      `}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-block px-4 py-1 bg-warm-accent text-white text-sm font-medium rounded-full">
            Beliebt
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-anthracite mb-2">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl md:text-4xl font-bold text-warm-accent">
          {price}
        </span>
      </div>

      {/* Duration */}
      {duration && (
        <p className="text-sm text-muted mb-6">
          {duration}
        </p>
      )}

      {/* Description */}
      <p className="text-base text-muted mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-warm-accent flex-shrink-0 mt-0.5"
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
              <span className="text-base text-anthracite">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Button */}
      <button
        type="button"
        onClick={onButtonClick}
        className={`
          w-full px-6 py-4 rounded-sm font-medium text-base transition-all duration-300
          ${highlight
            ? 'bg-warm-accent text-white hover:bg-warm-accent-dark'
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
