import { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import FactCard from '../components/common/FactCard';
import CTASection from '../components/sections/CTASection';

const AboutPage = () => {
  // Facts Data
  const facts = [
    {
      icon: '🏡',
      iconLabel: 'Tiny House',
      title: 'Leben im Tiny House',
      description: 'Seit 2 Jahren lebe ich in meinem eigenen Tiny House – minimalistisch, nachhaltig und mitten in der Natur.',
    },
    {
      icon: '🐺',
      iconLabel: 'Husky',
      title: 'Husky-Mama',
      description: 'Mein treuer Begleiter Askara ist überall dabei. Sie liebt die Natur genauso wie ich. (Sie wird beim Shooting aber nicht dabei sein.)',
    },
    {
      icon: '⛸️',
      iconLabel: 'Eiskunstlauf',
      title: 'Eiskunst & Eiskunsttanz',
      description: 'Seit 2020 laufe ich Eiskunst und seit 2025 Eiskunsttanz. Die Disziplin und Leidenschaft nehme ich bis heute mit.',
    },
    {
      icon: '🧘',
      iconLabel: 'Achtsamkeit',
      title: 'Achtsamkeit & Yoga',
      description: 'Morgenroutinen, Meditation und Yoga helfen mir, im Moment zu bleiben – auch während eurer Shootings.',
    },
    {
      icon: '🌲',
      iconLabel: 'Natur',
      title: 'Naturliebhaberin',
      description: 'Die Berge, Wälder und Seen Bayerns sind meine Inspiration. Hier fühle ich mich zuhause.',
    },
  ];

  // Refs for scroll effect
  const heroRef = useRef(null);
  const storySectionRef = useRef(null);
  const missionBoxRef = useRef(null);
  const heroMissionBoxRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !storySectionRef.current) return;

      const scrollY = window.scrollY;
      const heroRect = heroRef.current.getBoundingClientRect();
      const storyRect = storySectionRef.current.getBoundingClientRect();
      const heroBottom = heroRect.bottom;
      const storyTop = storyRect.top;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress from hero end to story section start
      const heroEnd = heroBottom;
      const storyStart = storyTop;
      const scrollRange = storyStart - heroEnd;

      if (scrollY < heroEnd) {
        // Still in hero section
        setScrollProgress(0);
        setIsSticky(false);
      } else if (scrollY >= heroEnd && scrollY < storyStart) {
        // Scrolling between hero and story section
        const progress = Math.min((scrollY - heroEnd) / scrollRange, 1);
        setScrollProgress(progress);
        setIsSticky(false);
      } else {
        // In story section - make sticky
        setScrollProgress(1);
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Portrait */}
      <section ref={heroRef} className="py-16 md:py-24 bg-gradient-to-br from-offwhite to-[#F5F0EA] relative">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Portrait Image */}
              <div className="order-2 md:order-1">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-xl">
                  <img
                    src="/About.webp"
                    alt="Julia Mayr Portrait"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              {/* Text and Mission Box Column */}
              <div className="order-1 md:order-2 text-center md:text-left">
                {/* Headline */}
                <div className="mb-12 md:mb-16">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl text-anthracite mb-6 leading-tight">
                    Hey, ich bin Julia
                  </h1>
                  <p className="text-xl md:text-2xl text-anthracite leading-relaxed">
                    Fotografin aus dem Herzen Bayerns, verliebt in echte Momente und natürliches Licht.
                  </p>
                </div>

                {/* Mission Box in Hero - smooth layout integration, fades out when scrolling, hidden on mobile */}
                <div 
                  ref={heroMissionBoxRef}
                  className="hidden lg:block bg-warm-accent/10 border-2 border-warm-accent/30 rounded-lg p-8 transition-opacity duration-300"
                  style={{ 
                    opacity: scrollProgress < 0.3 ? 1 - scrollProgress * 2 : 0,
                    pointerEvents: scrollProgress < 0.3 ? 'auto' : 'none',
                    display: scrollProgress > 0.3 ? 'none' : 'block'
                  }}
                >
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
                      Meine Mission
                    </p>
                    <h3 className="text-2xl text-anthracite">
                      Unverstellt. Echt. Du.
                    </h3>
                  </div>
                  <p className="text-base text-anthracite/90 leading-relaxed">
                    Ich fotografiere dich so, wie du bist – ohne steife Anweisungen, dafür mit viel Leichtigkeit, Humor und Feingefühl. Egal ob Hochzeitsreportage, Paar- oder Portraitshooting: Mir ist wichtig, dass du dich wohlfühlst und wir gemeinsam Bilder schaffen, die deine Persönlichkeit und eure Verbindung sichtbar machen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section ref={storySectionRef} className="py-20 md:py-28 bg-offwhite relative">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
              {/* Story (2 columns) */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                    Meine Geschichte
                  </p>
                  <h2 className="text-3xl md:text-4xl text-anthracite mb-6">
                    Warum ich heute lieber Licht einfange als Stempelzeiten
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-base md:text-lg text-anthracite/90 leading-relaxed">
                    Meine Geschichte beginnt mit einem Ende. Das bedeutet, ich habe sehr viele verschiedene Jobs ausprobiert und mich nirgendwo 'angekommen' gefühlt.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/90 leading-relaxed">
                    Das einzige was ich immer wusste war, ich wollte die Freiheit haben meine Stunden selbst einzuteilen, nach draußen zu gehen wann ich wollte und in irgendeiner Hinsicht etwas schönes für die Welt erschaffen.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/90 leading-relaxed">
                    Seit ich mit 16 meine erste Spiegelreflexkamera bekommen habe, träume ich davon mit Fotografie Geld zu verdienen. Nach jahrelangen gescheiterten Versuchen einen Job für mich zu finden, der zu mir passt, bin ich für ein Studium an die Bayerische Akademie für Fernsehen und Digitale Medien gegangen und habe mich danach endlich selbstständig gemacht und bisher keinen Tag davon bereut.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/90 leading-relaxed">
                    Ich möchte die Welt ein kleines bisschen besser machen – wenn ich Menschen mit meiner Arbeit ein Lächeln aufs Gesicht zaubern kann, komme ich diesem Ziel schon ein großes Stück näher
                  </p>
                </div>
              </div>

              {/* Mission Box (1 column) - Sticky positioned, appears when scrolling */}
              <div className="lg:col-span-1 flex">
                <div 
                  ref={missionBoxRef}
                  className={`${isSticky ? 'sticky top-24' : 'relative'} bg-warm-accent/10 border-2 border-warm-accent/30 rounded-lg p-8 transition-all duration-300 w-full self-start`}
                  style={{ 
                    opacity: scrollProgress > 0.3 ? 1 : 0,
                    transform: scrollProgress > 0.3 ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
                      Meine Mission
                    </p>
                    <h3 className="text-2xl text-anthracite">
                      Unverstellt. Echt. Du.
                    </h3>
                  </div>
                  <p className="text-base text-anthracite/90 leading-relaxed">
                    Ich fotografiere dich so, wie du bist – ohne steife Anweisungen, dafür mit viel Leichtigkeit, Humor und Feingefühl. Egal ob Hochzeitsreportage, Paar- oder Portraitshooting: Mir ist wichtig, dass du dich wohlfühlst und wir gemeinsam Bilder schaffen, die deine Persönlichkeit und eure Verbindung sichtbar machen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              5 Dinge über mich
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-anthracite mb-6">
              Was mich ausmacht
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            {facts.map((fact, index) => (
              <FactCard
                key={index}
                icon={fact.icon}
                iconLabel={fact.iconLabel}
                title={fact.title}
                description={fact.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-offwhite to-[#F5F0EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                Q & A
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-anthracite mb-6">
                Ein paar Fragen an Julia
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Wenn du nur eine Sache essen könntest für eine Woche, was wäre das?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Wahrscheinlich Porridge. Ohne das starte ich nicht in den Tag."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Top 3 Destinationen, die du immer wieder besuchen würdest?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Hawai'i, den Wald, meinen eigenen Verstand"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Eines Tages will ich...?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Einen Husky haben, in einem kleinen Haus mitten in der Natur wohnen, Fotografien auf einer Ausstellung zeigen"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Was magst du an Menschen besonders gerne?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Ich liebe humorvolle Menschen und sympathisch sind mir die, die auch mal über sich selbst lachen können. Außerdem find ich es beeindruckend wenn Menschen wirklich zuhören können"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Was ist deine große Leidenschaft?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Eiskunstlaufen. Dabei kann ich alles um mich herum vergessen, es gibt keine bessere Möglichkeit Stress abzubauen"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg text-anthracite mb-3">
                  Was inspiriert dich am meisten?
                </h3>
                <p className="text-anthracite/90 italic">
                  "Sonnenuntergänge, das Meer, die Vielfältigkeit der Natur, ein kreatives Umfeld und ästhetische Räume oder Dinge."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Text */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-anthracite/90 leading-relaxed mb-6">
              Du findest hier einen Einblick in meine Arbeit und vielleicht ja auch ein paar Inspirationen! :)
            </p>
            <p className="text-lg md:text-xl text-anthracite/90 leading-relaxed">
              Danke für's Vorbeischauen und für deine Unterstützung!!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Klingt das nach dem Fotografen, den ihr sucht?"
        subline="Dann lasst uns kennenlernen! Schreibt mir und erzählt von euren Plänen."
        buttonLabel="Kontakt aufnehmen"
      />
    </Layout>
  );
};

export default AboutPage;
