import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InternalNavigation = ({ items = [] }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero (first section should be visible)
      const firstSection = document.getElementById(items[0]?.id);
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth < 1024;
      
      // Show navigation when scrolled past hero area
      // On mobile, show earlier (40vh) for better UX
      const threshold = isMobile ? window.innerHeight * 0.4 : window.innerHeight * 0.6;
      if (scrollPosition > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPositionWithOffset = scrollPosition + 150; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPositionWithOffset) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Navigation - Right Side */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-30"
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          >
            <div className="bg-white/95 backdrop-blur-sm border border-border-soft/30 rounded-lg p-3 shadow-sm">
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`text-xs font-medium transition-all duration-200 w-full text-left px-3 py-2 rounded-sm ${
                        activeSection === item.id
                          ? 'text-warm-accent bg-warm-accent/10'
                          : 'text-anthracite/60 hover:text-anthracite hover:bg-offwhite'
                      }`}
                      aria-label={`Zu ${item.label} springen`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>

          {/* Mobile Navigation - Bottom Fixed */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/98 backdrop-blur-sm border-t border-border-soft/50 shadow-lg"
            style={{ position: 'fixed' }}
          >
            <div className="container-custom px-4 py-3">
              <ul className="flex justify-around items-center gap-2 overflow-x-auto">
                {items.map((item, index) => (
                  <li key={item.id} className="flex-shrink-0">
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`text-xs font-medium transition-all duration-200 px-3 py-2 rounded-sm whitespace-nowrap ${
                        activeSection === item.id
                          ? 'text-warm-accent bg-warm-accent/10 font-semibold'
                          : 'text-anthracite/80 active:text-anthracite'
                      }`}
                      aria-label={`Zu ${item.label} springen`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default InternalNavigation;

