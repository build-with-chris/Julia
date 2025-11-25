import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // All navigation items including Portrait and Familie - split into 2 columns
  const navItemsColumn1 = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'paare', label: 'Paare', path: '/paare' },
    { id: 'hochzeiten', label: 'Hochzeiten', path: '/hochzeiten' },
    { id: 'portrait', label: 'Portrait', path: '/portrait' },
  ];

  const navItemsColumn2 = [
    { id: 'familie', label: 'Familie', path: '/familie' },
    { id: 'about', label: 'Über mich', path: '/about' },
    { id: 'kontakt', label: 'Kontakt', path: '/kontakt' },
  ];

  const handleNavClick = (path) => {
    if (path === '/kontakt' && location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const scrollToContact = () => {
    handleNavClick('/kontakt');
  };

  return (
    <footer className="bg-white text-anthracite py-0 mt-auto">
      {/* Instagram Gallery - zuerst */}
      <div className="w-full py-8 md:py-12 border-b border-border-soft">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-anthracite/70 font-medium mb-2">
            FOLLOW ME ON INSTAGRAM
          </p>
          <a
            href="https://instagram.com/moanayulia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-semibold text-anthracite hover:text-warm-accent transition-colors duration-200"
          >
            @moanayulia
          </a>
        </div>
        <div className="w-full grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-4 px-0">
          {[
            { src: '/footer/1-nicht mobil.webp', mobile: false },
            { src: '/footer/2.webp', mobile: true },
            { src: '/footer/3.webp', mobile: true },
            { src: '/footer/4.webp', mobile: true },
            { src: '/footer/5.webp', mobile: true },
            { src: '/footer/6nicht mobil.webp', mobile: false },
          ].map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/moanayulia"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative aspect-square overflow-hidden group cursor-pointer ${
                !image.mobile ? 'hidden md:block' : ''
              }`}
            >
              <img
                src={image.src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/20 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Navigation */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 text-anthracite">Navigation</h3>
            <nav>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {/* Column 1 */}
                <ul className="space-y-2">
                  {navItemsColumn1.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className="text-anthracite hover:text-warm-accent transition-colors duration-200 text-sm text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Column 2 */}
                <ul className="space-y-2">
                  {navItemsColumn2.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className="text-anthracite hover:text-warm-accent transition-colors duration-200 text-sm text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* CTA Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-anthracite">Bereit für euer Shooting?</h3>
            <p className="text-sm text-anthracite/80 mb-6">
              Bereit, eure Geschichte festzuhalten?
            </p>
            <button
              onClick={scrollToContact}
              className="inline-block px-6 py-3 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-colors duration-200 font-medium"
            >
              Termin anfragen
            </button>
          </div>

          {/* Social Links & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-anthracite">Kontakt</h3>
            <div className="space-y-4">
              <div>
                <a
                  href="mailto:juliamayr.photo@gmail.com"
                  className="text-anthracite hover:text-warm-accent transition-colors duration-200 text-sm block mb-2"
                >
                  juliamayr.photo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://instagram.com/moanayulia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-anthracite hover:text-warm-accent transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://pinterest.com/juliamayrphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-anthracite hover:text-warm-accent transition-colors duration-200"
                  aria-label="Pinterest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              {/* Logo */}
              <div className="mt-4">
                <img
                  src="/Logo Julia.avif"
                  alt="Julia Mayr Photography"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-8 border-t border-border-soft">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex gap-6">
              <button
                onClick={() => navigate('/impressum')}
                className="text-sm text-anthracite/70 hover:text-warm-accent transition-colors duration-200"
              >
                Impressum
              </button>
              <button
                onClick={() => navigate('/datenschutz')}
                className="text-sm text-anthracite/70 hover:text-warm-accent transition-colors duration-200"
              >
                Datenschutz
              </button>
            </div>
            <p className="text-sm text-anthracite/70 text-center md:text-right">
              &copy; {new Date().getFullYear()} Julia Mayr Photography. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
