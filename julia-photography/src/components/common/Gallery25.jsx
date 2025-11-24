import { motion } from "framer-motion";
import React, { useState } from "react";
import LightboxModal from "./LightboxModal";

const Gallery25 = ({ images = [], enableLightbox = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Distribute images across 4 columns
  const distributeImages = (images) => {
    const columns = [[], [], [], []];
    const heights = [0, 0, 0, 0];
    
    images.forEach((image, index) => {
      // Find column with minimum height
      const minHeightIndex = heights.indexOf(Math.min(...heights));
      
      // Estimate height based on orientation
      const estimatedHeight = image.orientation === 'portrait' ? 400 : 300;
      
      columns[minHeightIndex].push({
        ...image,
        height: estimatedHeight,
      });
      heights[minHeightIndex] += estimatedHeight;
    });
    
    return columns;
  };

  const columns = distributeImages(images);

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
              const isPortrait = image.orientation === 'portrait';
              const height = image.height || (isPortrait ? '28rem' : '20rem');
              
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

      {enableLightbox && (
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={allImages}
          currentIndex={selectedImageIndex}
        />
      )}
    </>
  );
};

export default Gallery25;
