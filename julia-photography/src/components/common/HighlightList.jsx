const HighlightList = ({
  title,
  description,
  highlights = [],
  columns = 3, // 2, 3, or 4
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Highlights Grid */}
        <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-8 md:gap-12`}>
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              {highlight.icon && (
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-warm-accent/10 rounded-full">
                    <span className="text-3xl md:text-4xl" role="img" aria-label={highlight.iconLabel}>
                      {highlight.icon}
                    </span>
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-anthracite mb-4">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightList;
