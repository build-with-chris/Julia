"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import LightboxModal from "./common/LightboxModal";

const Gallery25 = ({ images = [], enableLightbox = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Distribute images across 4 columns with masonry layout
  const distributeImages = (images) => {
    const columns = [[], [], [], []];
    const heights = [0, 0, 0, 0];
    
    images.forEach((image, index) => {
      // Find column with minimum height
      const minHeightIndex = heights.indexOf(Math.min(...heights));
      
      // Estimate height based on orientation or use provided height
      let estimatedHeight;
      if (image.height) {
        // Convert rem to number for calculation
        estimatedHeight = parseFloat(image.height) * 16; // 1rem = 16px
      } else if (image.orientation === 'portrait') {
        estimatedHeight = 450; // ~28rem
      } else {
        estimatedHeight = 300; // ~18rem
      }
      
      columns[minHeightIndex].push({
        ...image,
        height: image.height || (image.orientation === 'portrait' ? '28rem' : '18rem'),
        estimatedHeight,
      });
      heights[minHeightIndex] += estimatedHeight;
    });
    
    return columns;
  };

  const columns = images.length > 0 ? distributeImages(images) : [[], [], [], []];

  const handleImageClick = (columnIndex, imageIndex) => {
    if (!enableLightbox) return;
    
    // Calculate global index
    let globalIndex = 0;
    for (let i = 0; i < columnIndex; i++) {
      globalIndex += columns[i].length;
    }
    globalIndex += imageIndex;
    
    setSelectedImageIndex(globalIndex);
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columns.map((columnImages, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {columnImages.map((image, imageIndex) => {
              const height = image.height || (image.orientation === 'portrait' ? '28rem' : '18rem');
              
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: columnIndex % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: (columnIndex * 0.1) + (imageIndex * 0.1),
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  key={image.id || imageIndex}
                  className={`bg-muted w-full overflow-hidden rounded-2xl ${
                    enableLightbox ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
                  }`}
                  style={{ height }}
                  onClick={() => handleImageClick(columnIndex, imageIndex)}
                >
                  <img
                    className="h-full w-full rounded-2xl object-cover"
                    src={getImageSrc(image)}
                    alt={getImageAlt(image)}
                    loading={image.priority ? 'eager' : 'lazy'}
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
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
