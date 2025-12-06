import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import HighlightList from '../components/common/HighlightList';
import { Ratecard2 } from '../components/ratecard2';
import { Gallery25 } from '../components/gallery25';
import ProcessPagination from '../components/common/ProcessPagination';
import FaqSection from '../components/common/FaqSection';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTASection from '../components/sections/CTASection';
import InternalNavigation from '../components/common/InternalNavigation';
import SEO from '../components/common/SEO';
import { testimonialsData } from '../data/testimonialsData';

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
      title: 'Standesamt',
      price: 'Ab 600€',
      duration: '2-3 Stunden Begleitung',
      description: 'Perfekt für eure Standesamt-Zeremonie – ich halte diesen besonderen Moment mit viel Liebe zum Detail fest.',
      features: [
        'Vorgespräch & Planung',
        'Ca. 2-3 Stunden Reportage',
        'Ca. 200-300 bearbeitete Bilder',
        'Online-Galerie zum Download',
      ],
      buttonLabel: 'Standesamt anfragen',
    },
    {
      title: 'Halbtag',
      price: 'Ab 1.800€',
      duration: '6 Stunden Begleitung',
      description: 'Perfekt für kleinere Feiern oder wenn ihr nur einen Teil des Tages festhalten möchtet.',
      features: [
        'Vorgespräch & Planung',
        'Ca. 6 Stunden Reportage',
        'Ca. 500-600 bearbeitete Bilder',
        'Online-Galerie zum Download',
      ],
      buttonLabel: 'Halbtag anfragen',
    },
    {
      title: 'Ganztag',
      price: 'Ab 2.700€',
      duration: '9 Stunden Begleitung',
      description: 'Von den Vorbereitungen bis zur Party – ich begleite euren gesamten Hochzeitstag.',
      features: [
        'Alles aus Halbtag',
        'Ca. 9 Stunden Reportage',
        'Ca. 800-900 bearbeitete Bilder',
        'Getting Ready & Zeremonie',
        'Empfang & Party',
        'Hochzeitsalbum optional',
      ],
      highlight: true,
      buttonLabel: 'Ganztag anfragen',
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'Wie viele Bilder bekommen wir?',
      answer: 'Das hängt vom gewählten Package ab. Ihr könnt mir ungefähr 100 bearbeiteten Bildern pro Stunde rechnen. Ich gebe euch alle Bilder, die ich für zeigenswert halte – oft sind es mehr als angegeben.',
    },
    {
      question: 'Wann bekommen wir die Bilder?',
      answer: 'Innerhalb von 4-6 Wochen nach eurer Hochzeit erhaltet ihr eure fertig bearbeiteten Bilder in einer schönen Online-Galerie. Bei Standesamt-Shootings geht es oft schneller (1-2 Wochen). Einige Sneak Peeks bekommt ihr bereits nach wenigen Tagen.',
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

  // Gallery Images - Getting Ready
  const gettingReadyImages = [
    {
      id: 1,
      src: '/GettingReady/Annika & Markus-52.webp',
      alt: 'Getting Ready Moment',
      priority: true,
    },
    {
      id: 2,
      src: '/GettingReady/Annika & Markus-77.webp',
      alt: 'Braut beim Anziehen',
      priority: true,
    },
    {
      id: 3,
      src: '/GettingReady/Martin und Melli_Paarshooting-140.webp',
      alt: 'Details',
    },
    {
      id: 4,
      src: '/GettingReady/Restaurant-25.webp',
      alt: 'Emotionale Momente',
    },
    {
      id: 5,
      src: '/GettingReady/untitled-117-2.webp',
      alt: 'Vorbereitungen',
    },
    {
      id: 6,
      src: '/GettingReady/untitled-129-2.webp',
      alt: 'Intime Momente',
    },
    {
      id: 7,
      src: '/GettingReady/untitled-151-2.webp',
      alt: 'Getting Ready',
    },
    {
      id: 8,
      src: '/GettingReady/untitled-160-2.webp',
      alt: 'Vorbereitungen',
    },
    {
      id: 9,
      src: '/GettingReady/untitled-361.webp',
      alt: 'Getting Ready Moment',
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

  // Gallery Images - Paarshooting (from Hochzeiten/Paarshooting folder)
  const paarshootingFilenames = [
    '1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg',
    '2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg',
    '3-1.jpg', '3-2.jpg', '3-3.jpg', '3-4.jpg',
    '4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.JPG',
  ];

  const paarshootingImages = sortByFilename(
    paarshootingFilenames.map((filename, index) => {
      const src = `/Hochzeiten/Paarshooting/${filename}`;
      return {
        id: index + 1,
        src,
        alt: `Brautpaarfotos ${index + 1}`,
        priority: index < 4,
      };
    })
  );

  // Gallery Images - Zeremonie (from Hochzeiten/Zeremonie folder)
  const zeremonieFilenames = [
    '1-1.jpg', '1-2.jpg', '1-3.jpg',
    '2-1.jpg', '2-2.jpg', '2-3.jpg',
    '3-1.jpg', '3-2.jpg', '3-3.jpg',
    '4-1.jpg', '4-2.jpg',
  ];

  const ceremonyImages = sortByFilename(
    zeremonieFilenames.map((filename, index) => {
      const src = `/Hochzeiten/Zeremonie/${filename}`;
      return {
        id: index + 1,
        src,
        alt: `Hochzeitszeremonie ${index + 1}`,
        priority: index < 4,
      };
    })
  );

  // Process Steps for Pagination
  const processSteps = [
    {
      title: 'Der 1. Eindruck',
      content: [
        'Für mich ist es wichtig, dass zwischen Brautpaar und Fotograf:in eine Grundharmonie besteht.',
        'Beim 1. Gespräch lernen wir uns kennen, wir besprechen die Eckdaten eurer Hochzeit, klären Preis-Fragen und ob eure und meine Wünsche und Vorstellungen vereinbar sind.',
      ],
      button: {
        label: 'Unverbindliches Erstgespräch vereinbaren',
        href: '/kontakt',
      },
    },
    {
      title: 'Planung',
      content: [
        'Falls ihr euch dazu entschieden habt, dass ich euren Tag begleiten darf, werden wir im zweiten Schritt den Ablauf genau besprechen, um euren Tag so reibungslos und schön wie möglich zu gestalten. So könnt ihr sicher sein, dass jeder wichtige Moment eures besonderen Tages auf Bildern festgehalten wird.',
      ],
    },
    {
      title: 'Specials*',
      content: [
        'Natürlich gibt es die Möglichkeit auch weitere Specials, je nach Interesse, zu buchen:',
        'Falls ihr noch andere besondere Wünsche habt, teilt mir diese gerne mit. Ich bin immer offen für neue Vorschläge und Ideen.',
      ],
      list: [
        'Verlobungsshooting',
        'Fotobuch',
        'Prints',
      ],
    },
    {
      title: 'Hochzeitstag',
      content: [
        'Jetzt ist es endlich so weit!',
        'Die meisten Brautpaare sind an diesem Tag sehr nervös. Dadurch, dass wir im Vorfeld den Zeitplan besprochen haben, werdet ihr mich kaum mitbekommen.',
        'Mein Ziel ist es, die vielen Emotionen des Tages in meinem dokumentarischen und authentischen Fotostil festzuhalten.',
      ],
    },
    {
      title: 'Bilderausgabe',
      content: [
        'Der Tag ist vorbei und ihr könnt es wahrscheinlich kaum erwarten eure Bilder zu sehen.',
        'Deshalb bemühe ich mich darum die Bilder so schnell es geht bereit zu stellen. Ihr bekommt einen Link zu einer schönen Online-Galerie, die ihr mit eurer Familie und Freunden teilen und downloaden könnt.',
      ],
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
    { id: 'ablauf', label: 'Ablauf' },
    { id: 'angebot', label: 'Angebot' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <Layout>
      <SEO
        title="Hochzeitsfotografie"
        description="Authentische Hochzeitsreportagen in München und Umgebung. Cinematisch, emotional und echt. Von Getting Ready bis zur Party – eure Hochzeitsgeschichte in Bildern, die bleiben. Jetzt anfragen!"
        image="/HeroHochzeit.webp"
      />
      {/* Internal Navigation */}
      <InternalNavigation items={navItems} />

      {/* Page Header */}
      <PageHeader
        headline="Authentische Hochzeitsmomente"
        imageSrc="/HeroHochzeit.webp"
        imageAlt="Emotionale Hochzeitsfeier"
        overlayOpacity="medium"
        textPosition="center"
        minHeight="lg"
        verticalPosition="lower-third"
        grayscale={true}
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
                Eure Hochzeitsfotografin
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-anthracite mb-8">
                Aus München, Bayern und eigentlich der ganzen Welt
              </h2>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none text-anthracite/80 space-y-6" variants={fadeInUp}>
              <p className="text-lg md:text-xl leading-relaxed">
                Ich fotografiere Hochzeiten, aber auch Paare, Familien und People. Ich liebe es besonders Hochzeiten zu begleiten und halte Schönheit und Momente in ganz ehrlicher und individueller Weise fest. So entstehen zeitlose, emotionale Erinnerungen zu Momenten, die sonst verloren wären.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Ich lege großen Wert darauf, den Charakter und Persönlichkeit jedes Brautpaares einzufangen und dafür ist mir auch kein Aufwand zu groß.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Gerne nehme ich mir bei einem unverbindlichen und kostenlosen Gespräch Zeit alle eure Fragen zu beantworten und stehe euch beratend zur Seite. Zusammen mit euch kreiere ich einen Stil, eine Idee, die euren Wünschen entspricht und sich auf euren Fotos widerspiegelt.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section - All Galleries Together */}
      <section id="gallery" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container-custom">
          {/* Gallery - Getting Ready */}
          <div className="mb-20 md:mb-32">
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
                Getting Ready
              </h2>
              <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
                Die ersten Momente des Tages – voller Vorfreude und Emotionen
              </p>
            </motion.div>
            <Gallery25 images={gettingReadyImages} enableLightbox={true} />
          </div>

          {/* Gallery - Zeremonie */}
          <div className="mb-20 md:mb-32">
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
                Die Zeremonie
              </h2>
              <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
                Euer Ja-Wort – der Moment, auf den alles hinausläuft
              </p>
            </motion.div>
            <Gallery25 images={ceremonyImages} enableLightbox={true} />
          </div>

          {/* Gallery - Brautpaarfotos */}
          <div>
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
                Brautpaarfotos
              </h2>
              <p className="text-lg md:text-xl text-anthracite/80 max-w-3xl mx-auto leading-relaxed">
                Intime Momente zu zweit – eure Verbindung in authentischen Bildern festgehalten
              </p>
            </motion.div>
            <Gallery25 images={paarshootingImages} enableLightbox={true} />
          </div>
        </div>
      </section>

      {/* Hochzeitsprozess with Pagination */}
      <section id="ablauf" className="scroll-mt-24">
        <ProcessPagination
          title="Von der ersten Nachricht bis zu euren Bildern"
          description="So läuft es ab"
          steps={processSteps}
        />
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
            eyebrow="Mein Angebot"
            title="Findet euer Package"
            description="Flexible Pakete für euren perfekten Tag. Alle Preise verstehen sich inklusive Anfahrt im Raum München."
            packages={packages}
            onButtonClick={handlePackageClick}
          />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FaqSection
          title="Häufige Fragen"
          description="Alles, was ihr wissen müsst"
          faqs={faqs}
        />
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={[testimonialsData[0], testimonialsData[1], testimonialsData[3]]} />

    </Layout>
  );
};

export default HochzeitenPage;
