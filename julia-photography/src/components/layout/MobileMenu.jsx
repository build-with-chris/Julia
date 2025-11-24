import { useEffect, useRef } from 'react';

const MobileMenu = ({ isOpen, onClose, navItems, activeSection, onNavClick }) => {
  const menuRef = useRef(null);
  const firstFocusableRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first focusable element
      if (firstFocusableRef.current) {
        firstFocusableRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavItemClick = (item) => {
    onNavClick(item);
    // Close menu immediately for better UX
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - rendered immediately when open */}
      <div
        className="fixed inset-0 bg-anthracite/95 backdrop-blur-sm z-[100] md:hidden"
        onClick={onClose}
        aria-hidden="true"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100dvh'
        }}
      />

      {/* Mobile Menu Panel - rendered immediately when open */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[101] md:hidden flex flex-col bg-offwhite"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100dvh',
          maxWidth: '100vw',
          maxHeight: '100dvh',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          willChange: 'auto'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-soft">
          <img
            src="/Logo Julia.avif"
            alt="Julia Mayr Photography"
            className="h-8 w-auto"
          />
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-2 rounded-sm hover:bg-border-soft/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-warm-accent"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-anthracite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col justify-center px-6 py-8 overflow-y-auto">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`w-full text-left px-6 py-4 rounded-sm text-xl md:text-2xl font-semibold transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-warm-accent text-white'
                      : 'text-anthracite hover:bg-border-soft/50 hover:text-warm-accent'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-border-soft bg-gradient-to-br from-offwhite to-[#F5F0EA]">
          <div className="space-y-3">
            <p className="text-sm text-muted text-center">Kontakt</p>
            <div className="flex flex-col gap-2 text-center">
              <a
                href="mailto:juliamayr.photo@gmail.com"
                className="text-sm text-warm-accent hover:text-warm-accent-dark transition-colors duration-200"
              >
                juliamayr.photo@gmail.com
              </a>
              <a
                href="https://instagram.com/moanayulia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-accent hover:text-warm-accent-dark transition-colors duration-200"
              >
                @moanayulia
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
