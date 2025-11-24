import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import ProcessSteps from '../components/common/ProcessSteps';
import { Ratecard2 } from '../components/ratecard2';
import Gallery25 from '../components/common/Gallery25';
import ShootingDetails from '../components/common/ShootingDetails';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTASection from '../components/sections/CTASection';
import { testimonialsData } from '../data/testimonialsData';

const FamiliePage = () => {
  const navigate = useNavigate();
  // Process Steps Data
  const shootingSteps = [
    {
      icon: '💌',
      iconLabel: 'Anfrage',
      title: 'Anfrage',
      description: 'Schreibt mir über das Kontaktformular oder Instagram. Erzählt mir von eurer Familie und euren Wünschen.',
    },
    {
      icon: '☕',
      iconLabel: 'Kennenlernen',
      title: 'Kennenlernen',
      description: 'Wir lernen uns per Videocall oder bei einem Kaffee kennen. Ich möchte eure Familie und eure Geschichte verstehen.',
    },
    {
      icon: '📸',
      iconLabel: 'Shooting',
      title: 'Das Shooting',
      description: 'Entspannt und ohne Zeitdruck. Wir nehmen uns Zeit für eure Familie und die besonderen Momente zwischen euch.',
    },
    {
      icon: '🖼️',
      iconLabel: 'Bilderauswahl',
      title: 'Eure Bilder',
      description: 'Innerhalb von 1-2 Wochen erhaltet ihr eure professionell bearbeiteten Bilder in einer schönen Online-Galerie zum Download.',
    },
  ];

  // Package Data
  const packages = [
    {
      title: 'Essential',
      price: 'Ab 300€',
      duration: '1 Stunde Shooting',
      description: 'Perfekt für ein entspanntes Familien-Shooting an eurem Lieblingsort.',
      features: [
        'Vorgespräch & Location-Beratung',
        'Ca. 1 Stunde Shooting-Zeit',
        'Mindestens 40 bearbeitete Bilder',
        'Online-Galerie zum Download',
        'Nutzungsrechte für private Zwecke',
      ],
      buttonLabel: 'Essential anfragen',
    },
    {
      title: 'Extended',
      price: 'Ab 500€',
      duration: '2 Stunden Shooting',
      description: 'Für alle, die mehr Zeit und verschiedene Locations möchten.',
      features: [
        'Alles aus Essential',
        'Ca. 2 Stunden Shooting-Zeit',
        'Mindestens 80 bearbeitete Bilder',
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
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1887&auto=format&fit=crop',
      alt: 'Glückliche Familie',
      orientation: 'landscape',
      priority: true,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1887&auto=format&fit=crop',
      alt: 'Familie in der Natur',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1887&auto=format&fit=crop',
      alt: 'Familienmoment',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1887&auto=format&fit=crop',
      alt: 'Zusammenhalt',
      orientation: 'landscape',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1887&auto=format&fit=crop',
      alt: 'Familienliebe',
      orientation: 'portrait',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1887&auto=format&fit=crop',
      alt: 'Natürliche Familienmomente',
      orientation: 'landscape',
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
        headline="Familienshootings voller Leben & Emotion."
        subline="Ehrlich, lebendig, authentisch"
        imageSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Glückliche Familie beim Fotoshooting"
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
                Eure Familie, festgehalten
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-anthracite/80 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Bei meinen Familienshootings geht es nicht um perfekte Posen, sondern um eure echte Verbindung.
                Ich möchte die besonderen Momente zwischen euch einfangen – das Lachen, die Umarmungen, die kleinen Gesten der Zuneigung.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Ob in der Natur, zuhause oder an einem Ort, der euch bedeutet – 
                ich begleite euch achtsam und schaffe eine entspannte Atmosphäre, in der sich alle wohlfühlen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Meine Familienbilder sind lebendig, ehrlich und voller Emotion.
                Sie zeigen euch, wie schön eure Familie ist – für Erinnerungen, die ein Leben lang halten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shooting Details */}
      <ShootingDetails />

      {/* Process Steps */}
      <ProcessSteps
        title="So läuft euer Familien-Shooting ab"
        description="Von der ersten Nachricht bis zu euren fertigen Bildern – ich begleite euch durch den gesamten Prozess."
        steps={shootingSteps}
        variant="vertical"
      />

      {/* Packages Section */}
      <Ratecard2
        eyebrow="Packages"
        title="Findet euer Package"
        description="Flexible Pakete, die zu euren Wünschen passen. Alle Preise verstehen sich inklusive Anfahrt im Raum München."
        packages={packages}
        onButtonClick={handlePackageClick}
      />

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
            <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
              Ein kleiner Einblick in meine Familienfotografie
            </p>
          </div>
          <Gallery25
            images={galleryImages}
            enableLightbox={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={[testimonialsData[0], testimonialsData[1], testimonialsData[3]]} />

      {/* CTA Section */}
      <CTASection
        eyebrow="Familien-Shooting buchen"
        headline="Bereit für lebendige & authentische Familienbilder?"
        subline="Lasst uns gemeinsam eure Familie festhalten – ehrlich, lebendig und voller Emotion."
        buttonLabel="Shooting anfragen"
      />
    </Layout>
  );
};

export default FamiliePage;

