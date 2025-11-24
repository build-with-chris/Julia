import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import { Ratecard2 } from '../components/ratecard2';
import { Gallery25 } from '../components/gallery25';
import ShootingDetails from '../components/common/ShootingDetails';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTASection from '../components/sections/CTASection';
import { testimonialsData } from '../data/testimonialsData';

const PortraitPage = () => {
  const navigate = useNavigate();

  // Package Data
  const packages = [
    {
      title: 'Essential',
      price: 'Ab 200€',
      duration: '45 Minuten Shooting',
      description: 'Perfekt für ein entspanntes Portrait-Shooting an eurem Lieblingsort.',
      features: [
        'Vorgespräch & Location-Beratung',
        'Ca. 45 Minuten Shooting-Zeit',
        'Mindestens 20 bearbeitete Bilder',
        'Online-Galerie zum Download',
        'Nutzungsrechte für private Zwecke',
      ],
      buttonLabel: 'Essential anfragen',
    },
    {
      title: 'Extended',
      price: 'Ab 350€',
      duration: '1,5 Stunden Shooting',
      description: 'Für alle, die mehr Zeit und verschiedene Looks möchten.',
      features: [
        'Alles aus Essential',
        'Ca. 1,5 Stunden Shooting-Zeit',
        'Mindestens 40 bearbeitete Bilder',
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
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
      alt: 'Portrait im natürlichen Licht',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
      alt: 'Authentisches Portrait',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
      alt: 'Natürliches Portrait',
      orientation: 'portrait',
      priority: true,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
      alt: 'Persönliches Portrait',
      orientation: 'portrait',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop',
      alt: 'Individuelles Portrait',
      orientation: 'portrait',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
      alt: 'Charaktervolles Portrait',
      orientation: 'portrait',
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
        headline="Portraitfotografie, die euch zeigt, wie schön ihr seid."
        subline="Individuell, authentisch, natürlich"
        imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Portrait im natürlichen Licht"
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
                Eure Persönlichkeit, festgehalten
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-anthracite/80 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Bei meinen Portraits geht es nicht um Perfektion, sondern um eure echte Ausstrahlung.
                Ich möchte euch so zeigen, wie ihr seid – authentisch, natürlich und voller Persönlichkeit.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Ob im Studio, in der Natur oder an einem Ort, der euch bedeutet – 
                ich begleite euch achtsam und schaffe eine entspannte Atmosphäre, in der ihr euch wohlfühlt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Meine Portraits sind zeitlos, ehrlich und mit einem Hauch Nostalgie.
                Sie zeigen euch, wie schön ihr wirklich seid – ohne Maskerade, nur euch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shooting Details */}
      <ShootingDetails />

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
              Ein kleiner Einblick in meine Portraitfotografie
            </p>
          </div>
          <Gallery25
            images={galleryImages}
            enableLightbox={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={[testimonialsData[2], testimonialsData[4]]} />

      {/* CTA Section */}
      <CTASection
        eyebrow="Portrait-Shooting buchen"
        headline="Bereit für authentische & natürliche Portraits?"
        subline="Lasst uns gemeinsam eure Persönlichkeit festhalten – ohne Maskerade, nur euch."
        buttonLabel="Shooting anfragen"
      />
    </Layout>
  );
};

export default PortraitPage;

