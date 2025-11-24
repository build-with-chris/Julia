import ServiceCard from './ServiceCard';

const ServicesTeaser = () => {
  const services = [
    {
      label: 'Paare',
      title: 'Natürliche & nahe Paarfotografie',
      description: 'Echte Verbindung statt perfekte Posen. Ich halte eure Liebe und Intimität fest – natürlich, emotional und zeitlos. Ob im goldenen Licht des Sonnenuntergangs oder in eurem Lieblingsort.',
      imageSrc: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1887&auto=format&fit=crop',
      imageAlt: 'Romantisches Paar beim Fotoshooting',
      imagePosition: 'left',
      onLinkClick: () => {
        // Navigation zu Paare-Seite
        if (window.navigateTo) {
          window.navigateTo('paare');
        }
      },
    },
    {
      label: 'Hochzeiten',
      title: 'Emotionale Hochzeitsreportage',
      description: 'Eure wichtigsten Momente dokumentiert – zeitlos, emotional, ehrlich. Von den Vorbereitungen bis zum letzten Tanz halte ich alle unvergesslichen Augenblicke eures besonderen Tages fest.',
      imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Brautpaar bei Hochzeitsfeier',
      imagePosition: 'right',
      onLinkClick: () => {
        // Navigation zu Hochzeiten-Seite
        if (window.navigateTo) {
          window.navigateTo('hochzeiten');
        }
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-offwhite">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
            Meine Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anthracite mb-6">
            Eure Geschichte, festgehalten
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Ob als Paar oder an eurem Hochzeitstag – ich begleite euch mit meiner Kamera
            und halte die Momente fest, die euer Herz berühren.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              label={service.label}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              imagePosition={service.imagePosition}
              onLinkClick={service.onLinkClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
