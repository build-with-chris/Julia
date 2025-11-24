import { useState } from 'react';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection = ({
  eyebrow = 'Worte von meinen Paaren',
  title = 'Was meine Paare sagen',
  description,
  testimonials = [],
  variant = 'grid', // 'grid' or 'slider'
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {eyebrow && (
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              {eyebrow}
            </p>
          )}
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

        {/* Grid Variant */}
        {variant === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        )}

        {/* Slider Variant */}
        {variant === 'slider' && testimonials.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      location={testimonial.location}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={prevSlide}
                className="p-3 rounded-full border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      currentSlide === index
                        ? 'bg-warm-accent w-8'
                        : 'bg-warm-accent/30 hover:bg-warm-accent/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="p-3 rounded-full border-2 border-warm-accent text-warm-accent hover:bg-warm-accent hover:text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
