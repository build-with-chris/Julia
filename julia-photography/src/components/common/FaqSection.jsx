import { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-border-soft last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-warm-accent transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-semibold text-anthracite pr-4">
          {question}
        </h3>
        <svg
          className={`w-6 h-6 flex-shrink-0 text-warm-accent transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-base md:text-lg text-muted leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({
  title = 'Häufige Fragen',
  description,
  faqs = [],
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
