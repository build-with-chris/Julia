import { motion } from 'framer-motion';

const HighlightList = ({
  title,
  description,
  highlights = [],
  columns = 3, // 2, 3, or 4
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: '-50px' }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Highlights Grid */}
        <motion.div 
          className={`grid grid-cols-1 ${columnClasses[columns]} gap-8 md:gap-12`}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={fadeInUp}
            >
              {/* Icon */}
              {highlight.icon && (
                <motion.div 
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-warm-accent/10 rounded-full hover:bg-warm-accent/20 transition-colors">
                    <span className="text-3xl md:text-4xl" role="img" aria-label={highlight.iconLabel}>
                      {highlight.icon}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-anthracite mb-4">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightList;
