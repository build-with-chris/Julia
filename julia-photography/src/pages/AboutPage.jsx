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
      description: 'Mein treuer Begleiter Yuki ist überall dabei. Er liebt die Natur genauso wie ich.',
    },
    {
      icon: '⛸️',
      iconLabel: 'Eiskunstlauf',
      title: 'Früher Eiskunstläuferin',
      description: '12 Jahre lang war Eiskunstlauf mein Leben. Die Disziplin und Leidenschaft nehme ich bis heute mit.',
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
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
                <p className="text-xl md:text-2xl text-muted leading-relaxed">
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
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    Vor ein paar Jahren stand ich an einem Wendepunkt. Nach meiner Karriere als Eiskunstläuferin
                    suchte ich nach etwas Neuem – etwas, das meine Kreativität und meine Liebe zu echten,
                    emotionalen Momenten verbindet.
                  </p>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    Die Fotografie fand mich fast von selbst. Ich begann, Freunde zu fotografieren, dann Paare,
                    und schließlich Hochzeiten. Mit jeder Session lernte ich mehr – nicht nur über Technik
                    und Licht, sondern auch darüber, wie man Menschen ihre Schönheit spüren lässt.
                  </p>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    2022 wagte ich den Schritt in die Selbstständigkeit. Ich zog in mein Tiny House,
                    nahm meinen Husky Yuki mit und startete mein eigenes Business. Heute lebe ich den Traum:
                    Ich arbeite mit wundervollen Menschen, halte ihre wichtigsten Momente fest und tue das,
                    was ich liebe – jeden einzelnen Tag.
                  </p>
                  <p className="text-base md:text-lg text-muted leading-relaxed">
                    Meine Arbeit ist mehr als nur Fotografie. Es geht um Verbindung, Achtsamkeit und darum,
                    die Schönheit im Alltäglichen zu sehen. Ich möchte Bilder schaffen, die ihr auch in
                    20 Jahren noch gerne anschaut – Bilder, die euch an das Gefühl erinnern, nicht nur an den Moment.
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
                      Authentisch. Emotional. Zeitlos.
                    </h3>
                  </div>
                  <p className="text-base text-muted leading-relaxed mb-6">
                    Meine Mission ist es, eure Geschichte in Bildern zu erzählen, die sich echt anfühlen.
                    Keine Posen, keine Perfektion – nur ihr, so wie ihr seid.
                  </p>
                  <p className="text-base text-muted leading-relaxed">
                    Ich glaube daran, dass die schönsten Momente dann entstehen, wenn man vergisst,
                    dass eine Kamera dabei ist. Wenn ihr einfach ihr selbst seid.
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
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Ein paar persönliche Einblicke in mein Leben abseits der Kamera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
