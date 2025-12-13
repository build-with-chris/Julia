import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  // Maximum width for web images (maintains aspect ratio)
  maxWidth: 1920,
  // Maximum height for web images
  maxHeight: 1920,
  // WebP quality (0-100, 85 is a good balance)
  webpQuality: 85,
  // JPEG quality if keeping JPEG format
  jpegQuality: 85,
  // Public directory path
  publicDir: join(__dirname, '..', 'public'),
  // File size threshold in bytes (3MB = 3145728 bytes)
  sizeThreshold: 3145728,
  // Supported image formats
  supportedFormats: ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG'],
};

/**
 * Recursively find all image files in a directory
 */
async function findImages(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await findImages(filePath, fileList);
    } else {
      const ext = extname(file).toLowerCase();
      if (CONFIG.supportedFormats.includes(ext) || CONFIG.supportedFormats.includes(extname(file))) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

/**
 * Get file size in bytes
 */
async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath) {
  try {
    const originalSize = await getFileSize(inputPath);
    const ext = extname(inputPath).toLowerCase();
    const baseName = basename(inputPath, ext);
    const dir = dirname(inputPath);
    
    // Output path: same directory, .webp extension
    const outputPath = join(dir, `${baseName}.webp`);
    
    console.log(`\n📸 Processing: ${inputPath}`);
    console.log(`   Original size: ${formatBytes(originalSize)}`);
    
    // Only optimize if file is larger than threshold or if it's not already WebP
    if (originalSize < CONFIG.sizeThreshold && ext === '.webp') {
      console.log(`   ⏭️  Skipping (already optimized)`);
      return { optimized: false, reason: 'already_optimized' };
    }
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Calculate new dimensions
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > CONFIG.maxWidth || height > CONFIG.maxHeight) {
      if (width > height) {
        width = CONFIG.maxWidth;
        height = Math.round((metadata.height / metadata.width) * CONFIG.maxWidth);
      } else {
        height = CONFIG.maxHeight;
        width = Math.round((metadata.width / metadata.height) * CONFIG.maxHeight);
      }
    }
    
    // Optimize and convert to WebP
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: CONFIG.webpQuality })
      .toFile(outputPath);
    
    const newSize = await getFileSize(outputPath);
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ Optimized: ${outputPath}`);
    console.log(`   New size: ${formatBytes(newSize)}`);
    console.log(`   Saved: ${formatBytes(savings)} (${savingsPercent}%)`);
    console.log(`   Dimensions: ${metadata.width}x${metadata.height} → ${width}x${height}`);
    
    return {
      optimized: true,
      inputPath,
      outputPath,
      originalSize,
      newSize,
      savings,
      savingsPercent,
    };
  } catch (error) {
    console.error(`   ❌ Error processing ${inputPath}:`, error.message);
    return { optimized: false, error: error.message };
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Scanning directory: ${CONFIG.publicDir}`);
  console.log(`📏 Max dimensions: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
  console.log(`🎨 WebP quality: ${CONFIG.webpQuality}%\n`);
  
  try {
    // Find all images
    const images = await findImages(CONFIG.publicDir);
    
    if (images.length === 0) {
      console.log('✅ No images found to optimize.');
      return;
    }
    
    console.log(`Found ${images.length} image(s) to process...\n`);
    
    // Process all images
    const results = [];
    for (const imagePath of images) {
      const result = await optimizeImage(imagePath);
      if (result.optimized) {
        results.push(result);
      }
    }
    
    // Summary
    if (results.length > 0) {
      const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
      const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
      const totalSavings = totalOriginal - totalNew;
      const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);
      
      console.log('\n' + '='.repeat(60));
      console.log('📊 Optimization Summary');
      console.log('='.repeat(60));
      console.log(`✅ Optimized: ${results.length} image(s)`);
      console.log(`📦 Original total: ${formatBytes(totalOriginal)}`);
      console.log(`📦 New total: ${formatBytes(totalNew)}`);
      console.log(`💾 Total savings: ${formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
      console.log('='.repeat(60));
      console.log('\n💡 Tip: Update your code to use .webp files instead of .jpg/.jpeg');
      console.log('   Original files are kept - you can delete them manually if needed.\n');
    } else {
      console.log('\n✅ All images are already optimized!\n');
    }
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

// Run the script
main();




