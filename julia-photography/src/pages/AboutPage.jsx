import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/common/SEO';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  // Facts Data
  const facts = [
    {
      id: 1,
      title: 'Leben im Tiny House',
      description: 'Seit 2 Jahren lebe ich in meinem eigenen Tiny House – minimalistisch, nachhaltig und mitten in der Natur.',
      bgColor: 'bg-warm-accent/10',
      numberPosition: 'left-[40%] lg:left-[30%]',
    },
    {
      id: 2,
      title: 'Husky-Mama',
      description: 'Mein treuer Begleiter Askara ist überall dabei. Sie liebt die Natur genauso wie ich. (Sie wird beim Shooting aber nicht dabei sein.)',
      bgColor: 'bg-warm-accent/15',
      numberPosition: 'left-[52%] lg:left-[42%]',
    },
    {
      id: 3,
      title: 'Eiskunst & Eistanz',
      description: 'Seit 2020 laufe ich Eiskunst und seit 2025 Eistanz. Die Disziplin und Leidenschaft nehme ich bis heute mit.',
      bgColor: 'bg-warm-accent/20',
      numberPosition: 'left-[62%] lg:left-[58%]',
    },
    {
      id: 4,
      title: 'Achtsamkeit & Yoga',
      description: 'Morgenroutinen, Meditation und Yoga helfen mir, im Moment zu bleiben – auch während eurer Shootings.',
      bgColor: 'bg-warm-accent/25',
      numberPosition: 'left-[75%] lg:left-[72%]',
    },
    {
      id: 5,
      title: 'Naturliebhaberin',
      description: 'Die Berge, Wälder und Seen Bayerns sind meine Inspiration. Hier fühle ich mich zuhause.',
      bgColor: 'bg-warm-accent/30',
      numberPosition: 'left-[85%] lg:left-[82%]',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Über mich - Julia Mayr Photography | Fotografin München"
        description="Julia Mayr – Fotografin aus dem Herzen Bayerns, verliebt in echte Momente und natürliches Licht. Authentische Hochzeits-, Paar- und Portraitshootings. Erfahre mehr über meine Geschichte und Vision."
        image="/About.webp"
      />
      {/* Hero Section with Portrait */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-offwhite to-[#F5F0EA] relative">
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

              {/* Text and Vision Box Column */}
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

                {/* Vision Box in Hero - hidden on mobile */}
                <div className="hidden lg:block bg-warm-accent/10 border-2 border-warm-accent/30 rounded-lg p-8">
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
                      Meine Vision
                    </p>
                    <h3 className="text-2xl text-anthracite mb-4">
                      Mehr Selbstliebe durch echte Fotografie
                    </h3>
                  </div>
                  <p className="text-base text-anthracite/90 leading-relaxed">
                    Ich glaube daran, dass Fotografie ein Weg zu mehr Selbstannahme sein kann. Meine Vision ist es, Menschen zu zeigen, wie schön sie in ihrer Echtheit sind – fern von Filtern, Idealen und Perfektionsdruck. Wenn jemand durch meine Bilder liebevoller auf sich selbst schaut, bin ich meinem Ziel ein Stück näher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 md:py-28 bg-offwhite relative">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center">
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

              {/* Mission Box (1 column) - Sticky positioned, vertically centered */}
              <div className="lg:col-span-1 flex items-center">
                <div className="sticky top-24 bg-warm-accent/10 border-2 border-warm-accent/30 rounded-lg p-8 w-full">
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

      {/* Facts Section - Process3 Layout */}
      <section
        className="bg-white pt-20 md:pt-32 pb-0"
        style={{
          "--font-mono": "ui-monospace, monospace"
        }}
      >
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl px-2 text-center">
              <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                5 Dinge über mich
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-anthracite">
                Was mich ausmacht
              </h2>
            </div>
          </div>
          <div className="mt-20">
            {facts.map((fact, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                key={fact.id}
                className="relative w-full mb-8 md:mb-12 last:mb-0"
              >
                <div
                  className={cn("absolute left-1/2 w-screen -translate-x-1/2 h-full", fact.bgColor)}
                ></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 lg:gap-12 w-full px-6 md:px-8 py-8 md:py-10">
                  {/* Linke Spalte: Überschrift */}
                  <div className="lg:flex lg:items-start">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-anthracite leading-tight">
                      {fact.title}
                    </h3>
                  </div>
                  {/* Rechte Spalte: Fließtext - beginnt immer an derselben vertikalen Linie */}
                  {fact.description && (
                    <div className="lg:flex lg:items-start">
                      <p className="text-base md:text-lg lg:text-xl text-anthracite/80 leading-relaxed font-light">
                        {fact.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
