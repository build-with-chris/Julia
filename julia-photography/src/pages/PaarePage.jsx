import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import ProcessSteps from '../components/common/ProcessSteps';
import PackageCard from '../components/common/PackageCard';
import PhotoGallery from '../components/common/PhotoGallery';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import { testimonialsData } from '../data/testimonialsData';

const PaarePage = () => {
  // Process Steps Data
  const shootingSteps = [
    {
      icon: '💌',
      iconLabel: 'Anfrage',
      title: 'Anfrage',
      description: 'Schreibt mir über das Kontaktformular oder Instagram. Erzählt mir von euch und euren Wünschen.',
    },
    {
      icon: '☕',
      iconLabel: 'Kennenlernen',
      title: 'Kennenlernen',
      description: 'Wir lernen uns per Videocall oder bei einem Kaffee kennen. Ich möchte euch und eure Geschichte verstehen.',
    },
    {
      icon: '📸',
      iconLabel: 'Shooting',
      title: 'Das Shooting',
      description: 'Entspannt und ohne Zeitdruck. Wir nehmen uns Zeit für eure Verbindung und besondere Momente.',
    },
    {
      icon: '🖼️',
      iconLabel: 'Bilderauswahl',
      title: 'Eure Bilder',
      description: 'Innerhalb von 2-3 Wochen erhaltet ihr eure professionell bearbeiteten Bilder in einer Online-Galerie.',
    },
  ];

  // Package Data
  const packages = [
    {
      title: 'Essential',
      price: 'Ab 250€',
      duration: '1 Stunde Shooting',
      description: 'Perfekt für ein entspanntes Paar-Shooting an eurem Lieblingsort.',
      features: [
        'Vorgespräch & Location-Beratung',
        'Ca. 1 Stunde Shooting-Zeit',
        'Mindestens 30 bearbeitete Bilder',
        'Online-Galerie zum Download',
        'Nutzungsrechte für private Zwecke',
      ],
      buttonLabel: 'Essential anfragen',
    },
    {
      title: 'Extended',
      price: 'Ab 450€',
      duration: '2 Stunden Shooting',
      description: 'Für alle, die mehr Zeit und verschiedene Locations möchten.',
      features: [
        'Alles aus Essential',
        'Ca. 2 Stunden Shooting-Zeit',
        'Mindestens 60 bearbeitete Bilder',
        '1-2 Locations eurer Wahl',
        'Outfit-Wechsel möglich',
        'Print-Release für Social Media',
      ],
      highlight: true,
      buttonLabel: 'Extended anfragen',
    },
    {
      title: 'Premium',
      price: 'Auf Anfrage',
      duration: 'Individuell',
      description: 'Ein maßgeschneidertes Erlebnis, ganz nach euren Vorstellungen.',
      features: [
        'Alles aus Extended',
        'Ganztägiges Shooting',
        'Mehrere Locations',
        'Besondere Wünsche & Ideen',
        'Premium-Bearbeitung',
        'Prints & Fotoalbum optional',
      ],
      buttonLabel: 'Premium anfragen',
    },
  ];

  // Gallery Images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1887&auto=format&fit=crop',
      alt: 'Paar beim Sonnenuntergang',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1522673607167-38967e70f98e?q=80&w=1887&auto=format&fit=crop',
      alt: 'Romantischer Moment',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1887&auto=format&fit=crop',
      alt: 'Verliebtes Paar',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1524617205305-99f76f178c81?q=80&w=1887&auto=format&fit=crop',
      alt: 'Inniger Moment',
      orientation: 'landscape',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1512163143273-bde2e3595b1e?q=80&w=1887&auto=format&fit=crop',
      alt: 'Natürliches Lachen',
      orientation: 'portrait',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1887&auto=format&fit=crop',
      alt: 'Gemeinsamer Spaziergang',
      orientation: 'portrait',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1887&auto=format&fit=crop',
      alt: 'Zärtliche Umarmung',
      orientation: 'portrait',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1606216794079-c6273cbdee1a?q=80&w=1887&auto=format&fit=crop',
      alt: 'Glückliches Paar',
      orientation: 'landscape',
    },
  ];

  const handlePackageClick = () => {
    // Navigate to contact page
    if (window.navigateTo) {
      window.navigateTo('kontakt');
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <PageHeader
        headline="Paarfotografie, die sich anfühlt wie ihr."
        subline="Natürlich, achtsam, authentisch"
        imageSrc="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Romantisches Paar beim Fotoshooting"
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
                Was euch erwartet
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-8">
                Eure Liebe, festgehalten
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Bei mir gibt es keine steifen Posen oder gestellte Momente. Ich möchte eure echte Verbindung einfangen –
                die Art, wie ihr euch anschaut, berührt und miteinander lacht.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Ob im goldenen Licht des Sonnenuntergangs, in der Natur oder an eurem Lieblingsort in der Stadt –
                ich begleite euch achtsam und halte die Momente fest, die eure Geschichte erzählen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Meine Bilder sind natürlich, zeitlos und mit einem Hauch Nostalgie.
                Sie fühlen sich an wie ein Film – cinematisch, emotional, echt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps
        title="So läuft euer Shooting ab"
        description="Von der ersten Nachricht bis zu euren fertigen Bildern – ich begleite euch durch den gesamten Prozess."
        steps={shootingSteps}
        variant="vertical"
      />

      {/* Packages Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Packages
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              Findet euer Package
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Flexible Pakete, die zu euren Wünschen passen. Alle Preise verstehen sich inklusive Anfahrt im Raum München.
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

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              Bisherige Arbeiten
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Ein kleiner Einblick in meine Paarfotografie
            </p>
          </div>
          <PhotoGallery
            images={galleryImages}
            columns={3}
            gap="md"
            aspectRatio="mixed"
            enableLightbox={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        eyebrow="Worte von meinen Paaren"
        title="Was meine Paare sagen"
        testimonials={testimonialsData.slice(0, 3)}
        variant="slider"
      />

      {/* CTA Section */}
      <CTASection
        eyebrow="Paarshooting buchen"
        headline="Bereit für natürliche & authentische Paarbilder?"
        subline="Lasst uns gemeinsam eure Verbindung festhalten – ohne Posen, nur echte Momente."
        buttonLabel="Shooting anfragen"
      />
    </Layout>
  );
};

export default PaarePage;
