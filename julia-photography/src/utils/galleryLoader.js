/**
 * Utility function to load and sort gallery images by filename pattern
 * Expected filename format: "spalte-zeile.jpg" (e.g., "1-1.jpg", "2-3.jpg")
 * 
 * @param {string} folderPath - Path to the folder containing images (e.g., "/Paare")
 * @param {string} subfolder - Optional subfolder (e.g., "Paarshooting", "Zeremonie")
 * @returns {Array} Sorted array of image objects
 */
export function loadGalleryImages(folderPath, subfolder = '') {
  // This is a static list that will be populated at build time
  // In a real app, you might want to use Vite's import.meta.glob for dynamic loading
  
  // For now, we'll define the images statically based on the folder structure
  // The actual implementation will parse the filenames and sort them
  
  const basePath = subfolder ? `${folderPath}/${subfolder}` : folderPath;
  
  // This function will be used to sort images by their filename pattern
  // Images should be sorted: first by column (first number), then by row (second number)
  
  return {
    basePath,
    sortByFilename: (images) => {
      return images.sort((a, b) => {
        // Extract filename from src path
        const getFilename = (src) => {
          const parts = src.split('/');
          return parts[parts.length - 1];
        };
        
        const filenameA = getFilename(a.src || a);
        const filenameB = getFilename(b.src || b);
        
        // Extract column and row numbers from filename (format: "spalte-zeile.jpg")
        const parseFilename = (filename) => {
          // Remove extension
          const nameWithoutExt = filename.replace(/\.(jpg|jpeg|JPG|JPEG|webp|WEBP)$/i, '');
          // Extract numbers (handles formats like "1-1", "2-5 + dieses bild...", etc.)
          const match = nameWithoutExt.match(/^(\d+)-(\d+)/);
          if (match) {
            return {
              column: parseInt(match[1], 10),
              row: parseInt(match[2], 10),
            };
          }
          // Fallback: if pattern doesn't match, use a high number to sort to end
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
    },
  };
}

/**
 * Generate image objects from a list of filenames
 * @param {Array<string>} filenames - Array of filenames
 * @param {string} basePath - Base path for the images
 * @returns {Array} Array of image objects with id, src, alt
 */
export function generateImageObjects(filenames, basePath) {
  return filenames.map((filename, index) => {
    const src = `${basePath}/${filename}`;
    // Extract base name for alt text
    const baseName = filename.replace(/\.(jpg|jpeg|JPG|JPEG|webp|WEBP)$/i, '').replace(/\d+-\d+\s*/g, '');
    const alt = baseName || `Gallery image ${index + 1}`;
    
    return {
      id: index + 1,
      src,
      alt,
      priority: index < 4, // First 4 images are priority
    };
  });
}

/**
 * Get sorted gallery images for a specific folder
 * This function expects you to provide the list of filenames
 * @param {Array<string>} filenames - Array of image filenames
 * @param {string} folderPath - Path to the folder (e.g., "/Paare")
 * @param {string} subfolder - Optional subfolder
 * @returns {Array} Sorted array of image objects
 */
export function getSortedGalleryImages(filenames, folderPath, subfolder = '') {
  const basePath = subfolder ? `${folderPath}/${subfolder}` : folderPath;
  const { sortByFilename } = loadGalleryImages(folderPath, subfolder);
  
  // Generate image objects
  let images = generateImageObjects(filenames, basePath);
  
  // Sort by filename pattern
  images = sortByFilename(images);
  
  return images;
}


