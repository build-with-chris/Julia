import { useState } from 'react';
import LightboxModal from './LightboxModal';

const PhotoGallery = ({
  images = [],
  columns = 3, // 2, 3, or 4
  gap = 'md', // 'sm', 'md', 'lg'
  aspectRatio = 'mixed', // 'square', 'portrait', 'landscape', 'mixed'
  enableLightbox = true,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gap size mapping
  const gapClasses = {
    sm: 'gap-2 md:gap-3',
    md: 'gap-3 md:gap-4',
    lg: 'gap-4 md:gap-6',
  };

  // Column classes mapping
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    mixed: '', // No fixed aspect ratio
  };

  const handleImageClick = (index) => {
    if (enableLightbox) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-muted">
        Keine Bilder verfügbar
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${columnClasses[columns] || columnClasses[3]} ${gapClasses[gap] || gapClasses.md}`}>
        {images.map((image, index) => {
          // Determine aspect ratio: use image-specific or fallback to gallery default
          const imageAspectRatio = image.orientation
            ? aspectRatioClasses[image.orientation]
            : aspectRatioClasses[aspectRatio];

          // Priority loading for first few images
          const isPriority = image.priority || index < 4;

          return (
            <div
              key={image.id || index}
              className={`relative overflow-hidden rounded-sm bg-border-soft/30 group ${
                imageAspectRatio || 'aspect-[3/4]'
              }`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                loading={isPriority ? 'eager' : 'lazy'}
                decoding="async"
                fetchpriority={isPriority ? 'high' : 'auto'}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  enableLightbox ? 'cursor-pointer group-hover:scale-105' : ''
                }`}
                onClick={() => handleImageClick(index)}
              />

              {/* Hover Overlay */}
              {enableLightbox && (
                <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 text-anthracite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Optional Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-anthracite/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {enableLightbox && lightboxOpen && (
        <LightboxModal
          image={images[currentImageIndex]}
          onClose={handleCloseLightbox}
          onNext={images.length > 1 ? handleNextImage : null}
          onPrev={images.length > 1 ? handlePrevImage : null}
          currentIndex={currentImageIndex}
          totalImages={images.length}
        />
      )}
    </>
  );
};

export default PhotoGallery;
