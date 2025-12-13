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
import SEO from '../components/common/SEO';
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
      answer: 'Das hängt vom gewählten Package ab. Beim Essential sind es mindestens 20, beim Extended mindestens 40 professionell bearbeitete Bilder. Ich gebe euch alle Bilder, die ich für zeigenswert halte – oft sind es mehr als angegeben.',
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
      answer: 'Gemeinsam finden wir den perfekten Ort für euer Portrait-Shooting. Ob im Studio, in der Natur, in der Stadt oder an einem Ort, der euch bedeutet – ich berate euch gerne bei der Location-Wahl.',
    },
    {
      question: 'Was soll ich anziehen?',
      answer: 'Am besten tragt ihr etwas, in dem ihr euch wohlfühlt und das eure Persönlichkeit widerspiegelt. Ich berate euch gerne bei der Outfit-Wahl und helfe euch, den perfekten Look zu finden.',
    },
  ];

  // Sort function to order images by column (first number) then row (second number)
  const sortByFilename = (images) => {
    return images.sort((a, b) => {
      const getFilename = (src) => {
        const parts = src.split('/');
        return parts[parts.length - 1];
      };
      
      const filenameA = getFilename(a.src);
      const filenameB = getFilename(b.src);
      
      // Extract column and row numbers from filename (format: "spalte-zeile.jpg")
      const parseFilename = (filename) => {
        const nameWithoutExt = filename.replace(/\.(jpg|jpeg|JPG|JPEG|webp|WEBP)$/i, '');
        const match = nameWithoutExt.match(/^(\d+)-(\d+)/);
        if (match) {
          return {
            column: parseInt(match[1], 10),
            row: parseInt(match[2], 10),
          };
        }
        return { column: 999, row: 999 };
      };
      
      const { column: colA, row: rowA } = parseFilename(filenameA);
      const { column: colB, row: rowB } = parseFilename(filenameB);
      
      // Sort: first by column, then by row
      if (colA !== colB) {
        return colA - colB;
      }
      return rowA - rowB;
    });
  };

  // Gallery Images - from Portrait folder - use .webp optimized versions
  const portraitFilenames = [
    '1-1.webp', '1-2.webp', '1-3.JPG.webp', '1-4.webp',
    '2-1.webp', '2-2.webp', '2-3.webp', '2-4.webp',
    '3-1.JPG.webp', '3-2.webp', '3-3.JPG.webp', '3-4.webp',
    '4-1.JPG.webp', '4-2.webp', '4-3.webp', '4-4.webp',
  ];

  const galleryImages = sortByFilename(
    portraitFilenames.map((filename, index) => {
      const src = `/Portrait/${filename}`;
      return {
        id: index + 1,
        src,
        alt: `Portrait ${index + 1}`,
        orientation: 'portrait',
        priority: index < 4,
      };
    })
  );

  const handlePackageClick = (packageData) => {
    // Navigate to contact page with package information
    const params = new URLSearchParams({
      package: packageData.title,
      service: 'portrait',
    });
    navigate(`/kontakt?${params.toString()}`);
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
      <SEO
        title="Portraitfotografie"
        description="Individuelle Portraitshootings in München. Authentisch, natürlich und voller Persönlichkeit. Zeigt euch, wie schön ihr wirklich seid – ohne Maskerade. Jetzt Shooting buchen!"
        image="/LP_Portrait.webp"
      />
      {/* Internal Navigation */}
      <InternalNavigation items={navItems} />

      {/* Page Header */}
      <PageHeader
        headline="Portraitfotografie, die euch zeigt, wie schön ihr seid."
        subline="Individuell, authentisch, natürlich"
        imageSrc="/Portrait/Hero_portrait.webp"
        imageAlt="Portrait im natürlichen Licht"
        overlayOpacity="medium"
        textPosition="center"
        minHeight="lg"
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
                Eure Persönlichkeit, festgehalten
              </h2>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none text-anthracite/80 space-y-6" variants={fadeInUp}>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Ein kleiner Einblick in meine Portraitfotografie
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
      <TestimonialCarousel testimonials={[testimonialsData[2], testimonialsData[4]]} />

      {/* Shooting Details */}
      <ShootingDetails />
    </Layout>
  );
};

export default PortraitPage;

