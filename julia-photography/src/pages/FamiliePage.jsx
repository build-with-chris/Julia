import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import { Ratecard2 } from '../components/ratecard2';
import { Gallery25 } from '../components/gallery25';
import ShootingDetails from '../components/common/ShootingDetails';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTASection from '../components/sections/CTASection';
import InternalNavigation from '../components/common/InternalNavigation';
import { testimonialsData } from '../data/testimonialsData';

const FamiliePage = () => {
  const navigate = useNavigate();

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

  // FAQ Data
  const faqs = [
    {
      question: 'Wie viele Bilder bekommen wir?',
      answer: 'Das hängt vom gewählten Package ab. Beim Essential sind es mindestens 40, beim Extended mindestens 80 professionell bearbeitete Bilder. Ich gebe euch alle Bilder, die ich für zeigenswert halte – oft sind es mehr als angegeben.',
    },
    {
      question: 'Wann bekommen wir die Bilder?',
      answer: 'Innerhalb von 1-2 Wochen nach dem Shooting erhaltet ihr eure fertig bearbeiteten Bilder in einer schönen Online-Galerie. Einige Sneak Peeks bekommt ihr bereits nach wenigen Tagen.',
    },
    {
      question: 'Können wir ein Kennenlernen vereinbaren?',
      answer: 'Absolut! Ich finde es wichtig, dass die Chemie stimmt. Wir können uns per Videocall oder bei einem Kaffee treffen, damit ihr mich kennenlernt und wir eure Wünsche besprechen können. Völlig unverbindlich.',
    },
    {
      question: 'Wo findet das Shooting statt?',
      answer: 'Gemeinsam finden wir den perfekten Ort für euer Familien-Shooting. Ob in der Natur, zuhause oder an einem Ort, der euch bedeutet – ich berate euch gerne bei der Location-Wahl.',
    },
    {
      question: 'Was sollen wir anziehen?',
      answer: 'Am besten tragt ihr etwas, in dem ihr euch wohlfühlt und das eure Persönlichkeit widerspiegelt. Ich berate euch gerne bei der Outfit-Wahl und helfe euch, einen harmonischen Look zu finden.',
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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: '-50px' }
  };

  // Navigation items
  const navItems = [
    { id: 'gallery', label: 'Gallery' },
    { id: 'angebot', label: 'Angebot' },
  ];

  return (
    <Layout>
      {/* Internal Navigation */}
      <InternalNavigation items={navItems} />

      {/* Page Header */}
      <PageHeader
        headline="Eure Bande in Bildern"
        imageSrc="/HeroFamilie.webp"
        imageAlt="Glückliche Familie beim Fotoshooting"
        overlayOpacity="medium"
        textPosition="center"
        minHeight="lg"
        verticalPosition="lower-third"
      />

      {/* Intro Section with Animation */}
      <motion.section 
        className="py-20 md:py-28 bg-offwhite"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                Was euch erwartet
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-anthracite mb-8">
                Eure Familie, festgehalten
              </h2>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none text-anthracite/80 space-y-6" variants={fadeInUp}>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Shooting Details */}
      <ShootingDetails />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-anthracite mb-6">
              Bisherige Arbeiten
            </h2>
            <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
              Ein kleiner Einblick in meine Familienfotografie
            </p>
          </motion.div>
          <Gallery25
            images={galleryImages}
            enableLightbox={true}
          />
        </div>
      </section>

      {/* Packages Section */}
      <section id="angebot" className="bg-gradient-to-br from-offwhite to-[#F5F0EA] scroll-mt-24">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Ratecard2
            eyebrow="Packages"
            title="Findet euer Package"
            description="Flexible Pakete, die zu euren Wünschen passen. Alle Preise verstehen sich inklusive Anfahrt im Raum München."
            packages={packages}
            onButtonClick={handlePackageClick}
          />
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={[testimonialsData[0], testimonialsData[1], testimonialsData[3]]} />

      {/* CTA Section */}
      <div className="pb-20 lg:pb-0">
        <CTASection
          eyebrow="Familien-Shooting buchen"
          headline="Bereit für lebendige & authentische Familienbilder?"
          subline="Lasst uns gemeinsam eure Familie festhalten – ehrlich, lebendig und voller Emotion."
          buttonLabel="Shooting anfragen"
        />
      </div>
    </Layout>
  );
};

export default FamiliePage;

