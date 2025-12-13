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

const PaarePage = () => {
  const navigate = useNavigate();

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
      answer: 'Das hängt vom gewählten Package ab. Beim Essential sind es mindestens 30, beim Extended mindestens 60 professionell bearbeitete Bilder. Ich gebe euch alle Bilder, die ich für zeigenswert halte – oft sind es mehr als angegeben.',
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
      answer: 'Gemeinsam finden wir den perfekten Ort für euer Paar-Shooting. Ob im goldenen Licht des Sonnenuntergangs, in der Natur oder an eurem Lieblingsort in der Stadt – ich berate euch gerne bei der Location-Wahl.',
    },
    {
      question: 'Was sollen wir anziehen?',
      answer: 'Am besten tragt ihr etwas, in dem ihr euch wohlfühlt und das eure Persönlichkeit widerspiegelt. Ich berate euch gerne bei der Outfit-Wahl und helfe euch, einen harmonischen Look zu finden.',
    },
  ];

  // Gallery Images - sorted by filename pattern (spalte-zeile)
  // Sort function to order images by column (first number) then row (second number)
  const sortByFilename = (images) => {
    return images.sort((a, b) => {
      const getFilename = (src) => {
        const parts = src.split('/');
        return parts[parts.length - 1];
      };
      
      const filenameA = getFilename(a.src);
      const filenameB = getFilename(b.src);
      
      // Extract column and row numbers from filename (format: "spalte-zeile.jpg" or "spalte-zeile + text.jpg")
      // The regex looks for digits at the start, then a dash, then more digits
      const parseFilename = (filename) => {
        // Remove file extension first
        const nameWithoutExt = filename.replace(/\.(jpg|jpeg|JPG|JPEG|webp|WEBP)$/i, '');
        // Match pattern: start of string, digits, dash, digits (may be followed by other text)
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

  // Generate gallery images from Paare folder - use .webp optimized versions
  const paareFilenames = [
    '1-1.webp', '1-2.webp', '1-3.JPG.webp', '1-4.webp', '1-5.webp', '1-6.webp', '1-7.webp',
    '2-1.webp', '2-2.webp', '2-3.webp', '2-4.webp', '2-5 + dieses bild als Paarshooting Bild auf die Landiungpage.JPG.webp', '2-6.webp', '2-7.JPG.webp',
    '3-1.webp', '3-2.webp', '3-3.webp', '3-4.webp', '3-5.webp', '3-6.webp', '3-7.webp',
    '4-1.webp', '4-2.webp', '4-3.webp', '4-4.webp', '4-5.webp', '4-6.JPG.webp', '4-7.JPG.webp',
  ];

  const galleryImages = sortByFilename(
    paareFilenames.map((filename, index) => {
      // Use filename directly - Vite handles static assets from public folder
      const src = `/Paare/${filename}`;
      // Use empty alt text to avoid showing names in lightbox
      const alt = '';
      return {
        id: index + 1,
        src,
        alt,
        priority: index < 4,
      };
    })
  );

  const handlePackageClick = (packageData) => {
    // Navigate to contact page with package information
    const params = new URLSearchParams({
      package: packageData.title,
      service: 'paare',
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
        title="Paarshootings"
        description="Authentische Paarshootings in München und Umgebung. Natürlich, achtsam und voller Emotionen. Eure Verbindung in ehrlichen Bildern festgehalten. Jetzt Shooting buchen!"
        image="/HeroPaar.webp"
      />
      {/* Internal Navigation */}
      <InternalNavigation items={navItems} />

      {/* Page Header */}
      <PageHeader
        headline="Eure Verbindung, ehrlich festgehalten"
        imageSrc="/HeroPaar.webp"
        imageAlt="Romantisches Paar beim Fotoshooting"
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
                Eure Liebe, festgehalten
              </h2>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none text-anthracite/80 space-y-6" variants={fadeInUp}>
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
              Ein kleiner Einblick in meine Paarfotografie
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

      {/* Shooting Details */}
      <ShootingDetails />
    </Layout>
  );
};

export default PaarePage;
