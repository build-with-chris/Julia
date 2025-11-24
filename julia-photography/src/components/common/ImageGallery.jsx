const ImageGallery = ({
  title,
  description,
  images = [],
  columns = 3, // 2 or 3
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-4 md:gap-6`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-lg group cursor-pointer
                ${image.tall ? 'row-span-2' : ''}
              `}
              style={{
                aspectRatio: image.tall ? '3/4' : image.wide ? '16/9' : '4/3',
              }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/20 transition-all duration-300" />

              {/* Optional Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-anthracite/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm md:text-base font-medium">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
