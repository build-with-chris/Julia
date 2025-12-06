import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialCarousel = ({ testimonials = testimonialsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Always show only one card at a time
  const itemsPerView = 1;

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FAF8F5] to-[#F5F0EA]">
      <div className="container-custom">
        <div className="space-y-2 mb-8 md:mb-10">
          <p className="text-sm uppercase tracking-wider text-warm-accent font-medium">
            Was meine Kunden sagen
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-anthracite">
            Echte Stimmen
          </h2>
          <p className="text-anthracite/75 max-w-md text-sm md:text-base leading-relaxed">
            Echte Erfahrungen von Menschen, deren besondere Momente ich festhalten durfte.
          </p>
        </div>

        <div className="relative mt-6 md:mt-8">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-full flex justify-center px-4"
                  >
                    <div className="w-2/3 max-w-3xl mx-auto">
                      {/* Quote Section - 2/3 of card (top) */}
                      <div className="mb-6 md:mb-8">
                        <blockquote className="text-anthracite text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      {/* Author Info Section - 1/3 of card (bottom) */}
                      <div className="pt-4 border-t border-border-soft/30">
                        <div className="space-y-1">
                          <div className="text-sm md:text-base font-semibold text-anthracite">
                            {testimonial.author}
                          </div>
                          {testimonial.location && (
                            <div className="text-anthracite/70 text-xs md:text-sm">
                              {testimonial.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex gap-3 justify-center">
            <button
              onClick={prevSlide}
              className="size-9 md:size-10 rounded-full border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="size-9 md:size-10 rounded-full border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex gap-2 justify-center">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-8 bg-warm-accent'
                    : 'w-2 bg-border-soft hover:bg-warm-accent/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

