"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import LightboxModal from "./common/LightboxModal";

/**
 * Gallery25 - Masonry Gallery Component
 * 
 * Verwendet CSS-Columns für ein automatisches Masonry-Layout (Pinterest-Style).
 * 
 * Änderungen:
 * - CSS-Columns statt Grid: `columns-2 md:columns-4` für automatische Spaltenverteilung
 * - Keine festen Höhen mehr: Bilder behalten ihr natürliches Seitenverhältnis
 * - Einheitliche Abstände: `gap-4` für Spalten, `mb-4` für vertikale Abstände zwischen Bildern
 * - `break-inside-avoid` verhindert, dass Bilder zwischen Spalten geteilt werden
 * 
 * Neue Bilder hinzufügen:
 * - Einfach das `images`-Array erweitern mit Objekten: { src: '/path/to/image.webp', alt: 'Beschreibung' }
 * - Optional: { id: 1, src: '...', alt: '...', priority: true } für frühes Laden
 * - Keine Höhen oder Orientierungen mehr nötig - das Layout passt sich automatisch an
 */
const Gallery25 = ({ images = [], enableLightbox = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (imageIndex) => {
    if (!enableLightbox) return;
    setSelectedImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const getImageSrc = (image) => {
    if (typeof image === 'string') return image;
    return image.src || image.url;
  };

  const getImageAlt = (image) => {
    if (typeof image === 'string') return 'Gallery Image';
    return image.alt || 'Gallery Image';
  };

  const allImages = images.map(img => ({
    src: getImageSrc(img),
    alt: getImageAlt(img),
  }));

  return (
    <>
      {/* 
        CSS-Columns Masonry Layout:
        - columns-2: 2 Spalten auf Mobile
        - md:columns-4: 4 Spalten auf Desktop
        - gap-4: Einheitlicher Abstand zwischen Spalten
      */}
      <div className="columns-2 md:columns-4 gap-4">
        {images.map((image, imageIndex) => {
          const imageSrc = getImageSrc(image);
          const imageAlt = getImageAlt(image);
          
          return (
            <motion.div
              key={image.id || imageIndex}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: imageIndex * 0.1,
              }}
              viewport={{ once: true, margin: '-50px' }}
              className={`
                break-inside-avoid mb-4 w-full overflow-hidden rounded-2xl bg-muted
                ${enableLightbox ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}
              `}
              onClick={() => handleImageClick(imageIndex)}
            >
              {/* 
                Bild behält natürliches Seitenverhältnis:
                - w-full: Volle Breite der Spalte
                - h-auto: Automatische Höhe basierend auf Seitenverhältnis
                - object-cover: Füllt den Container, behält Seitenverhältnis
              */}
              <img
                className="w-full h-auto rounded-2xl object-cover"
                src={imageSrc}
                alt={imageAlt}
                loading={image.priority ? 'eager' : 'lazy'}
              />
            </motion.div>
          );
        })}
      </div>

      {enableLightbox && lightboxOpen && allImages[selectedImageIndex] && (
        <LightboxModal
          image={allImages[selectedImageIndex]}
          onClose={() => setLightboxOpen(false)}
          onNext={selectedImageIndex < allImages.length - 1 ? () => setSelectedImageIndex(selectedImageIndex + 1) : null}
          onPrev={selectedImageIndex > 0 ? () => setSelectedImageIndex(selectedImageIndex - 1) : null}
          currentIndex={selectedImageIndex}
          totalImages={allImages.length}
        />
      )}
    </>
  );
};

export { Gallery25 };
