import { useState } from 'react';

const ShootingDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Wo findet das Shooting statt?',
      answer: 'Gemeinsam wählen wir einen Ort, der euch entspricht – Natur, Stadt oder Studio. Alles ist möglich.',
    },
    {
      question: 'Was sollen wir anziehen?',
      answer: 'Ich berate euch gerne bei der Outfit-Wahl. Wichtig ist nur: Wählt etwas, in dem ihr euch wohlfühlt.',
    },
    {
      question: 'Wie läuft das Shooting ab?',
      answer: 'Stressfrei und entspannt. Ich fotografiere euch natürlich in Bewegung – authentisch und mit viel Spaß.',
    },
    {
      question: 'Wann bekommen wir unsere Bilder?',
      answer: 'Innerhalb von 1-2 Wochen erhaltet ihr eure bearbeiteten Bilder in einer Online-Galerie zum Download.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
              Alles rund um euer Shooting
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border-soft last:border-b-0">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:text-warm-accent transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-anthracite pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 text-warm-accent transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
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
                    openIndex === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="text-base md:text-lg text-anthracite/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShootingDetails;

