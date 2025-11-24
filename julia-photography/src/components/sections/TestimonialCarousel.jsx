import { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - itemsPerView);

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
          <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
            Echte Erfahrungen von Menschen, deren besondere Momente ich festhalten durfte.
          </p>
        </div>

        <div className="relative mt-6 md:mt-8">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonialsData.map((testimonial, index) => {
                const itemWidth = 100 / itemsPerView;
                
                return (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-2 md:px-3"
                    style={{ width: `${itemWidth}%` }}
                  >
                    <div className="bg-offwhite h-full overflow-hidden border border-border-soft/50 rounded-lg shadow-sm">
                      <div className="flex h-full flex-col">
                        {/* Image Placeholder - kleiner */}
                        <div className="h-[120px] md:h-[160px] lg:h-[180px] bg-gradient-to-br from-warm-accent/20 to-warm-accent/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-warm-accent/30 flex items-center justify-center">
                              <svg className="w-6 h-6 md:w-8 md:h-8 text-warm-accent" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content - kompakter */}
                        <div className="flex flex-1 flex-col justify-between gap-4 p-4 md:p-5 bg-white">
                          <blockquote className="text-anthracite text-sm md:text-base font-medium leading-relaxed line-clamp-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="space-y-0.5 pt-2 border-t border-border-soft/30">
                            <div className="text-xs md:text-sm font-semibold text-anthracite">
                              {testimonial.author}
                            </div>
                            {testimonial.location && (
                              <div className="text-muted text-xs">
                                {testimonial.location}
                              </div>
                            )}
                          </div>
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

