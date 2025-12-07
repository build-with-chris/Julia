import { Check } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const Ratecard2 = ({ 
  packages = [],
  onButtonClick,
  eyebrow,
  title,
  description 
}) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        {(eyebrow || title || description) && (
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {eyebrow && (
              <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-warm-accent font-medium mb-4 md:mb-6">
                {eyebrow}
              </p>
            )}
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
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {packages.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-offwhite flex w-full flex-col justify-between gap-4 md:gap-5 rounded-lg p-6 md:p-8 border-2 transition-all duration-300 ${
                plan.highlight
                  ? 'border-warm-accent shadow-xl scale-105'
                  : 'border-border-soft hover:border-warm-accent hover:shadow-lg'
              }`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-block px-3 py-1 bg-warm-accent text-white text-xs font-medium rounded-full">
                    Beliebt
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-anthracite mb-2 md:mb-3 text-xl md:text-2xl">
                  {plan.title}
                </h3>
                {plan.duration && (
                  <p className="text-xs md:text-sm text-anthracite/70 mb-3 font-medium">
                    {plan.duration}
                  </p>
                )}
                <p className="text-sm md:text-base text-anthracite/80 leading-relaxed mb-4 md:mb-5">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-2 md:space-y-2.5 mb-4 md:mb-5">
                {plan.features && plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-warm-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-anthracite leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-accent">
                    {plan.price}
                  </h1>
                </div>
                <Button
                  onClick={() => onButtonClick && onButtonClick(plan)}
                  className={`w-full px-5 md:px-6 py-3 md:py-4 rounded-sm font-medium text-sm md:text-base transition-all duration-300 min-h-[44px] md:min-h-[48px] ${
                    plan.highlight
                      ? 'bg-warm-accent text-white hover:bg-warm-accent-dark shadow-md hover:shadow-lg'
                      : 'bg-white border-2 border-warm-accent/40 text-warm-accent hover:border-warm-accent hover:bg-warm-accent/10'
                  }`}>
                  {plan.buttonLabel || 'Anfragen'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Ratecard2 };
