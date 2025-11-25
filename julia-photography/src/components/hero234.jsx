import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const galleryImages = [
  [
    "/Hero234/1oben.webp",
    "/Hero234/2oben.webp",
    "/Hero234/3oben.webp",
    "/Hero234/4oben.webp",
    "/Hero234/5oben.webp",
    "/Hero234/6oben.webp",
  ],
  [
    "/Hero234/1unten.webp",
    "/Hero234/2unten.webp",
    "/Hero234/3unten.webp",
    "/Hero234/4unten.webp",
    "/Hero234/5unten.webp",
    "/Hero234/6unten.webp",
  ],
];

const Hero234 = ({
  kicker = "Cinematische & emotionale Fotografie",
  headline = "Eure Geschichte, festgehalten",
  subtitle,
  primaryButtonText = "Jetzt Shooting buchen",
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-background relative h-[70vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center gap-4">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 will-change-transform"
            animate={{
              x: rowIndex === 1 ? [-1920, 0] : [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}>
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <motion.div
                key={`${rowIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: rowIndex === 1 ? "280px" : "240px",
                  height: rowIndex === 1 ? "350px" : "300px",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                  loading={rowIndex === 0 && imageIndex < 6 ? "eager" : "lazy"} />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* Left side masks */}
      <div className="from-offwhite absolute left-0 top-0 z-10 h-full w-[160px] bg-gradient-to-r to-transparent md:w-[200px]" />
      {/* Right side masks */}
      <div className="from-offwhite absolute right-0 top-0 z-10 h-full w-[160px] bg-gradient-to-l to-transparent md:w-[200px]" />
      <div className="relative z-20 flex h-full md:min-h-screen items-center justify-center px-4">
        <motion.div
          className="hidden md:block rounded-lg bg-anthracite/85 backdrop-blur-md p-8 md:p-10 lg:p-12 max-w-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          {kicker && (
            <motion.p
              className="text-sm md:text-base lg:text-lg uppercase tracking-[0.15em] text-white mb-6 md:mb-8 font-medium text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              {kicker}
            </motion.p>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}>
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              className="flex-1 bg-warm-accent hover:bg-warm-accent-dark text-white border-0 min-h-[48px] md:min-h-[52px] text-sm md:text-base font-medium shadow-lg hover:shadow-xl">
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button
                size="lg"
                onClick={handleSecondaryClick}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white min-h-[48px] md:min-h-[52px] text-sm md:text-base font-medium backdrop-blur-sm">
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234 };
