import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/', isPage: true },
    { id: 'paare', label: 'Paare', path: '/paare', isPage: true },
    { id: 'hochzeiten', label: 'Hochzeiten', path: '/hochzeiten', isPage: true },
    { id: 'about', label: 'Über mich', path: '/about', isPage: true },
    { id: 'kontakt', label: 'Kontakt', path: '/kontakt', isPage: true },
  ];

  // Update active section based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    if (currentItem) {
      setActiveSection(currentItem.id);
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    // If it's a separate page, navigate to it
    if (item.isPage) {
      navigate(item.path);
      setActiveSection(item.id);
      setMobileMenuOpen(false);
    } else {
      // Otherwise scroll to section (for same-page anchors)
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
        setMobileMenuOpen(false);
      }
    }
  };

  // Detect active section on scroll (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      // Only check sections that exist on the home page
      // Note: 'kontakt' section exists on home page but should not activate the 'kontakt' nav item
      // since 'kontakt' is a separate page
      const homePageSections = ['home', 'services', 'kontakt'];
      const current = homePageSections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        // Map both 'services' and 'kontakt' to 'home' for navigation highlighting
        // since they are sections on the home page, not separate pages
        if (current === 'services' || current === 'kontakt') {
          setActiveSection('home');
        } else {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[102] bg-offwhite/95 backdrop-blur-sm border-b border-border-soft shadow-sm relative">
      <nav className="w-full py-3 md:py-4 relative z-[102]">
        <div className="flex items-center justify-between relative w-[80%] mx-auto">
          {/* Logo */}
          <button
            onClick={() => handleNavClick({ id: 'home', path: '/', isPage: true })}
            className="relative z-[103] flex items-center transition-opacity duration-200 hover:opacity-80"
            aria-label="Zur Startseite"
          >
            <img
              src="/Logo Julia.avif"
              alt="Julia Mayr Photography"
              className="h-9 md:h-11 w-auto"
            />
          </button>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-2 tracking-wide uppercase
                    ${activeSection === item.id
                      ? 'text-warm-accent'
                      : 'text-anthracite hover:text-warm-accent'
                    }
                  `}
                >
                  {item.label}
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-warm-accent" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-[103] md:hidden p-2 rounded-sm text-anthracite hover:bg-border-soft/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-warm-accent"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </header>
  );
};

export default Header;
