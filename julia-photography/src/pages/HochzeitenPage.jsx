import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import HighlightList from '../components/common/HighlightList';
import PackageCard from '../components/common/PackageCard';
import FaqSection from '../components/common/FaqSection';
import CTASection from '../components/sections/CTASection';

const HochzeitenPage = () => {
  const navigate = useNavigate();
  // Highlights Data
  const highlights = [
    {
      icon: '🤝',
      iconLabel: 'Unaufdringliche Begleitung',
      title: 'Unaufdringliche Begleitung',
      description: 'Ich bin da, ohne im Mittelpunkt zu stehen. Ihr könnt euren Tag genießen, während ich die Momente festhalte.',
    },
    {
      icon: '☀️',
      iconLabel: 'Natürliches Licht',
      title: 'Natürliches Licht & Farben',
      description: 'Ich arbeite mit dem Licht, das da ist – warm, weich und authentisch. Keine künstlichen Effekte.',
    },
    {
      icon: '🎬',
      iconLabel: 'Storytelling-Reportage',
      title: 'Storytelling-Reportage',
      description: 'Eure Hochzeit erzählt eine Geschichte. Ich halte sie fest – von den Vorbereitungen bis zum letzten Tanz.',
    },
    {
      icon: '💝',
      iconLabel: 'Echte Emotionen',
      title: 'Echte Emotionen',
      description: 'Lachen, Tränen, Berührungen – ich fange die Momente ein, die ihr für immer bewahren möchtet.',
    },
  ];

  // Packages Data
  const packages = [
    {
      title: 'Halbtag',
      price: 'Ab 1.200€',
      duration: '6 Stunden Begleitung',
      description: 'Perfekt für kleinere Feiern oder wenn ihr nur einen Teil des Tages festhalten möchtet.',
      features: [
        'Vorgespräch & Planung',
        'Ca. 6 Stunden Reportage',
        'Mindestens 300 bearbeitete Bilder',
        'Online-Galerie zum Download',
        'Druck- & Nutzungsrechte',
      ],
      buttonLabel: 'Halbtag anfragen',
    },
    {
      title: 'Ganztag',
      price: 'Ab 1.800€',
      duration: '10+ Stunden Begleitung',
      description: 'Von den Vorbereitungen bis zur Party – ich begleite euren gesamten Hochzeitstag.',
      features: [
        'Alles aus Halbtag',
        'Ca. 10+ Stunden Reportage',
        'Mindestens 500 bearbeitete Bilder',
        'Getting Ready & Zeremonie',
        'Empfang & Party',
        'Hochzeitsalbum optional',
      ],
      highlight: true,
      buttonLabel: 'Ganztag anfragen',
    },
    {
      title: 'Elopement',
      price: 'Ab 800€',
      duration: '3-4 Stunden',
      description: 'Nur ihr zwei? Perfekt. Ich begleite eure intime Zeremonie mit viel Liebe zum Detail.',
      features: [
        'Persönliche Beratung',
        'Ca. 3-4 Stunden Begleitung',
        'Mindestens 150 bearbeitete Bilder',
        'Location-Vorschläge',
        'Online-Galerie',
        'Schnelle Bearbeitung (1 Woche)',
      ],
      buttonLabel: 'Elopement anfragen',
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'Wie viele Bilder bekommen wir?',
      answer: 'Das hängt vom gewählten Package ab. Beim Halbtag sind es mindestens 300, beim Ganztag mindestens 500 professionell bearbeitete Bilder. Ich gebe euch alle Bilder, die ich für zeigenswert halte – oft sind es mehr als angegeben.',
    },
    {
      question: 'Wann bekommen wir die Bilder?',
      answer: 'Innerhalb von 4-6 Wochen nach eurer Hochzeit erhaltet ihr eure fertig bearbeiteten Bilder in einer schönen Online-Galerie. Bei Elopements geht es oft schneller (1-2 Wochen). Einige Sneak Peeks bekommt ihr bereits nach wenigen Tagen.',
    },
    {
      question: 'Können wir ein Kennenlernen vereinbaren?',
      answer: 'Absolut! Ich finde es wichtig, dass die Chemie stimmt. Wir können uns per Videocall oder bei einem Kaffee treffen, damit ihr mich kennenlernt und wir eure Wünsche besprechen können. Völlig unverbindlich.',
    },
    {
      question: 'Reist du auch zu anderen Locations?',
      answer: 'Ja, sehr gerne! Im Raum München, Augsburg und Landshut ist die Anfahrt inklusive. Für Hochzeiten in anderen Regionen oder im Ausland erstelle ich euch gerne ein individuelles Angebot.',
    },
    {
      question: 'Was ist, wenn das Wetter nicht mitspielt?',
      answer: 'Regen kann wunderschön sein! Ich habe immer einen Plan B und bin auf alle Wetterbedingungen vorbereitet. Manche meiner schönsten Bilder sind bei Regen entstanden – mit Schirmen, im goldenen Licht oder in gemütlichen Indoor-Momenten.',
    },
  ];

  const handlePackageClick = () => {
    // Navigate to contact page
    navigate('/kontakt');
  };

  return (
    <Layout>
      {/* Page Header */}
      <PageHeader
        headline="Eure Hochzeitsgeschichte in Bildern, die bleiben."
        subline="Cinematisch, emotional, echt"
        imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Emotionale Hochzeitsfeier"
        overlayOpacity="medium"
        textPosition="center"
        minHeight="lg"
      />

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                Meine Mission
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-8">
                Echte Momente, keine Posen
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Ich setze nicht auf perfekt gestellte Gruppenfotos oder steife Posen.
                Stattdessen halte ich die echten Momente fest – das Lachen zwischen Mutter und Tochter
                beim Getting Ready, die Tränen des Bräutigams, wenn er euch zum ersten Mal sieht,
                die zärtliche Berührung während eures ersten Tanzes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Meine Hochzeitsreportagen sind cinematisch, emotional und zeitlos.
                Ich arbeite mit natürlichem Licht, warmen Farben und einem Hauch Nostalgie.
                Das Ergebnis sind Bilder, die sich anfühlen wie Filmstills – Kunstwerke,
                die eure Geschichte erzählen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Ich begleite euch achtsam und unaufdringlich durch euren Tag.
                Ihr könnt entspannen, lachen, weinen und feiern – während ich dafür sorge,
                dass jeder besondere Moment für immer bleibt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <HighlightList
        title="Was euch erwartet"
        description="So arbeite ich an eurem Hochzeitstag"
        highlights={highlights}
        columns={4}
      />

      {/* Packages Section */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Mein Angebot
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              Findet euer Package
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Flexible Pakete für euren perfekten Tag. Alle Preise verstehen sich inklusive Anfahrt im Raum München.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                duration={pkg.duration}
                description={pkg.description}
                features={pkg.features}
                highlight={pkg.highlight}
                buttonLabel={pkg.buttonLabel}
                onButtonClick={handlePackageClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Häufige Fragen"
        description="Alles, was ihr wissen müsst"
        faqs={faqs}
      />

      {/* CTA Section */}
      <CTASection
        eyebrow="Hochzeitsreportage buchen"
        headline="Bereit, eure Hochzeitsgeschichte festzuhalten?"
        subline="Von den ersten Vorbereitungen bis zum letzten Tanz – ich bin dabei und halte jeden emotionalen Moment fest."
        buttonLabel="Verfügbarkeit anfragen"
      />
    </Layout>
  );
};

export default HochzeitenPage;
