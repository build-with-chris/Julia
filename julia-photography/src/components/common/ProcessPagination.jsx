import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProcessPagination = ({ title, description, steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const currentStepData = steps[currentStep];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {title && (
              <h2 className="text-anthracite mb-6 md:mb-8">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Step Content */}
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-offwhite p-8 md:p-10 lg:p-12 rounded-lg border border-border-soft/50 hover:shadow-lg transition-shadow"
              >
                {currentStepData?.title && (
                  <h3 className="text-2xl md:text-3xl font-bold text-anthracite mb-5 md:mb-6">
                    {currentStepData.title}
                  </h3>
                )}

                {currentStepData?.content && (
                  <div className="prose prose-lg max-w-none text-anthracite/80 space-y-4">
                    {Array.isArray(currentStepData.content) ? (
                      currentStepData.content.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="leading-relaxed">{currentStepData.content}</p>
                    )}
                  </div>
                )}

                {currentStepData?.list && (
                  <ul className="list-disc list-inside text-anthracite/75 space-y-2 ml-4 mt-4">
                    {currentStepData.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {currentStepData?.button && (
                  <div className="mt-8">
                    <button
                      onClick={() => navigate(currentStepData.button.href || '/kontakt')}
                      className="inline-block px-8 py-4 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-colors duration-200 font-medium text-base md:text-lg min-h-[52px] shadow-md hover:shadow-lg"
                    >
                      {currentStepData.button.label}
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStep
                      ? 'bg-warm-accent w-8'
                      : 'bg-border-soft hover:bg-warm-accent/50'
                  }`}
                  aria-label={`Gehe zu Schritt ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-sm font-medium transition-colors duration-200 min-h-[48px] ${
                  currentStep === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-offwhite hover:bg-warm-accent/10 text-anthracite border border-border-soft'
                }`}
                aria-label="Vorheriger Schritt"
              >
                ← Zurück
              </button>
              
              <span className="text-anthracite/70 text-sm md:text-base font-medium">
                {currentStep + 1} / {steps.length}
              </span>

              <button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-sm font-medium transition-colors duration-200 min-h-[48px] ${
                  currentStep === steps.length - 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-warm-accent hover:bg-warm-accent-dark text-white shadow-md hover:shadow-lg'
                }`}
                aria-label="Nächster Schritt"
              >
                Weiter →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPagination;

