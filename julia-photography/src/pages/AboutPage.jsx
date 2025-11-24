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

  return (
    <Layout>
      {/* Hero Section with Portrait */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-offwhite to-[#F5F0EA]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Portrait Image */}
              <div className="order-2 md:order-1">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-xl">
                  <img
                    src="/JM006204.JPG"
                    alt="Julia Mayr Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Headline */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-anthracite mb-6 leading-tight">
                  Hey, ich bin Julia
                </h1>
                <p className="text-xl md:text-2xl text-anthracite/85 leading-relaxed">
                  Fotografin aus dem Herzen Bayerns, verliebt in echte Momente und natürliches Licht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
              {/* Story (2 columns) */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                    Meine Geschichte
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-anthracite mb-6">
                    Wie alles begann
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-base md:text-lg text-anthracite/80 leading-relaxed">
                    Meine Geschichte beginnt mit einem Ende. Das bedeutet, ich habe sehr viele verschiedene Jobs ausprobiert und mich nirgendwo 'angekommen' gefühlt. Von der Arbeit in einem Industrieunternehmen bis zur Fitnesstrainerin. Ich habe mit Kindern zusammen gearbeitet und gekellnert.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/80 leading-relaxed">
                    Das einzige was ich immer wusste war, ich wollte die Freiheit haben meine Stunden selbst einzuteilen, nach draußen zu gehen wann ich wollte und in irgendeiner Hinsicht etwas schönes für die Welt erschaffen.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/80 leading-relaxed">
                    Seit ich mit 16 meine erste Spiegelreflexkamera bekommen habe, träume ich davon mit Fotografie Geld zu verdienen. Nach jahrelangen gescheiterten Versuchen einen Job für mich zu finden, der zu mir passt, bin ich für ein Studium an die Bayerische Akademie für Fernsehen und Digitale Medien gegangen und habe mich danach endlich selbstständig gemacht und bisher keinen Tag davon bereut.
                  </p>
                  <p className="text-base md:text-lg text-anthracite/80 leading-relaxed">
                    Ich möchte die Welt ein kleines bisschen besser machen – wenn ich Menschen mit meiner Arbeit ein Lächeln aufs Gesicht zaubern kann, komme ich diesem Ziel schon ein großes Stück näher.
                  </p>
                </div>
              </div>

              {/* Mission Box (1 column) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-warm-accent/10 border-2 border-warm-accent/30 rounded-lg p-8">
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
                      Meine Mission
                    </p>
                    <h3 className="text-2xl font-bold text-anthracite">
                      Deine Geschichte erzählen
                    </h3>
                  </div>
                  <p className="text-base text-anthracite/80 leading-relaxed">
                    Ob Hochzeitsreportage, Paar- oder Portraitshooting. Mir ist es wichtig so authentisch, persönlich und mit so viel Freude und Leidenschaft wie möglich deine Geschichte zu erzählen – denn jeder von uns hat eine eigene und individuelle, die es verdient hat gesehen und festgehalten zu werden.
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
                Ein paar Fragen an Julia
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Wenn du nur eine Sache essen könntest für eine Woche, was wäre das?
                </h3>
                <p className="text-anthracite/75 italic">
                  "Wahrscheinlich Porridge. Ohne das starte ich nicht in den Tag."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Top 3 Destinationen, die du immer wieder besuchen würdest?
                </h3>
                <p className="text-anthracite/75 italic">
                  "Hawai'i, den Wald, meinen eigenen Verstand"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Eines Tages will ich...?
                </h3>
                <p className="text-anthracite/75 italic">
                  "Einen Husky haben, in einem kleinen Haus mitten in der Natur wohnen, Fotografien auf einer Ausstellung zeigen"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Was magst du an Menschen besonders gerne?
                </h3>
                <p className="text-anthracite/75 italic">
                  "Ich liebe humorvolle Menschen und sympathisch sind mir die, die auch mal über sich selbst lachen können. Außerdem find ich es beeindruckend wenn Menschen wirklich zuhören können"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Was ist deine große Leidenschaft?
                </h3>
                <p className="text-anthracite/75 italic">
                  "Eiskunstlaufen. Dabei kann ich alles um mich herum vergessen, es gibt keine bessere Möglichkeit Stress abzubauen"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border-soft/50">
                <h3 className="text-lg font-semibold text-anthracite mb-3">
                  Was inspiriert dich am meisten?
                </h3>
                <p className="text-anthracite/75 italic">
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
            <p className="text-lg md:text-xl text-anthracite/80 leading-relaxed mb-6">
              Du findest hier einen Einblick in meine Arbeit und vielleicht ja auch ein paar Inspirationen! :)
            </p>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
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
