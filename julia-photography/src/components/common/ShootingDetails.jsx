const ShootingDetails = () => {
  const details = [
    {
      icon: '📍',
      title: 'Der Ort',
      description: 'Gemeinsam wählen wir einen Ort, der euch entspricht – Natur, Stadt oder Studio. Alles ist möglich.',
    },
    {
      icon: '👗',
      title: 'Outfit-Wahl',
      description: 'Ich berate euch gerne. Wichtig ist nur: Wählt etwas, in dem ihr euch wohlfühlt.',
    },
    {
      icon: '📸',
      title: 'Das Shooting',
      description: 'Stressfrei und entspannt. Ich fotografiere euch natürlich in Bewegung – authentisch und mit viel Spaß.',
    },
    {
      icon: '🖼️',
      title: 'Eure Bilder',
      description: 'Innerhalb von 1-2 Wochen erhaltet ihr eure bearbeiteten Bilder in einer Online-Galerie zum Download.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-anthracite mb-4">
              Alles rund um euer Shooting
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="bg-offwhite p-5 md:p-6 rounded-lg border border-border-soft/30 hover:border-warm-accent/50 transition-colors duration-200 text-center"
              >
                <div className="text-3xl md:text-4xl mb-3">{detail.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-anthracite mb-2">
                  {detail.title}
                </h3>
                <p className="text-sm md:text-base text-anthracite/90 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShootingDetails;

