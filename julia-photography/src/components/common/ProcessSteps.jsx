const ProcessSteps = ({
  title = 'So läuft euer Shooting ab',
  description,
  steps = [],
  variant = 'vertical', // 'vertical' or 'horizontal'
}) => {
  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className={`
          ${variant === 'horizontal'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            : 'max-w-4xl mx-auto space-y-12 md:space-y-16'
          }
        `}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                ${variant === 'vertical' ? 'flex gap-6 md:gap-8' : 'flex flex-col'}
              `}
            >
              {/* Number/Icon */}
              <div className="flex-shrink-0">
                {step.icon ? (
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-warm-accent/10 rounded-full">
                    <span className="text-3xl md:text-4xl" role="img" aria-label={step.iconLabel}>
                      {step.icon}
                    </span>
                  </div>
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-warm-accent text-white rounded-full">
                    <span className="text-2xl md:text-3xl font-bold">{index + 1}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${variant === 'horizontal' ? 'mt-6' : ''}`}>
                <h3 className="text-xl md:text-2xl font-bold text-anthracite mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
