const ShootingDetails = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              Was ihr wissen solltet
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              Alles rund um euer Shooting
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Der Ort */}
            <div className="bg-offwhite p-8 rounded-lg border border-border-soft/50">
              <h3 className="text-2xl font-bold text-anthracite mb-4">Der Ort</h3>
              <p className="text-muted leading-relaxed">
                Beim 1. Kennenlernen, persönlich oder telefonisch, wählen wir unter anderem gemeinsam einen Ort, der eure Persönlichkeit widerspiegelt. Das machen wir ganz nach euren Wünschen. Möglich wäre also ein abgelegenes Naturstück, die Stadt, ein angemietetes Studio oder, wer etwas ganz aufregendes/besonderes sucht, z.B. in die Berge oder zu besonderen Plätzen außerhalb meines Gebietes zu fahren, können wir das sicher auch arrangieren. Mir ist es wichtig, dass ihr euch so frei und ungestellt fühlen könnt wie möglich.
              </p>
            </div>

            {/* Outfit Wahl */}
            <div className="bg-offwhite p-8 rounded-lg border border-border-soft/50">
              <h3 className="text-2xl font-bold text-anthracite mb-4">Outfit-Wahl</h3>
              <p className="text-muted leading-relaxed">
                Gerne berate ich euch im Vorfeld zu geeigneten Outfits für das Shooting. Zusammen finden wir dann das passende. Auch hier gilt wieder: Wählt am besten etwas, in dem ihr euch wohl fühlt und ihr selbst sein könnt.
              </p>
            </div>

            {/* Das Shooting */}
            <div className="bg-offwhite p-8 rounded-lg border border-border-soft/50 md:col-span-2">
              <h3 className="text-2xl font-bold text-anthracite mb-4">Das Shooting</h3>
              <p className="text-muted leading-relaxed">
                Meine Shootings sind immer stressfrei und ich nehme mir ausreichend Zeit für euch. Je nach Wunsch können wir hier authentisch und ungestellte Fotos machen, ich fotografiere euch dann in Bewegung, gebe euch kleine Aufgaben damit ihr lockerer werdet und Spaß habt. So entstehen natürliche und emotionale Bilder über die ihr euch lange freuen könnt. Ich vermeide klassische Studiofotografie, wenn ihr aber diesbezüglich einen konkreten Wunsch habt, können wir darüber gerne sprechen.
              </p>
            </div>

            {/* Eure Bilder */}
            <div className="bg-offwhite p-8 rounded-lg border border-border-soft/50 md:col-span-2">
              <h3 className="text-2xl font-bold text-anthracite mb-4">Eure Bilder</h3>
              <p className="text-muted leading-relaxed">
                Wenn wir das Shooting beendet haben werde ich mich gleich an die Nachbearbeitung machen damit ihr so schnell es geht eure Bilder in den Händen halten könnt. Die bekommt ihr von mir innerhalb 1-2 Wochen in einer schönen Online-Galerie zum Download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShootingDetails;

