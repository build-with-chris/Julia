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
      {/* Mobile Menu Panel - rendered immediately when open */}
      <div
        ref={menuRef}
        className="fixed top-[64px] left-0 right-0 w-full h-[60vh] z-[101] md:hidden flex flex-col bg-offwhite/98 backdrop-blur-sm shadow-xl border-b border-border-soft"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-end p-3 border-b border-border-soft flex-shrink-0">
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
        <nav className="flex-1 flex flex-col justify-center items-center px-4 py-4 overflow-y-auto min-h-0">
          <ul className="space-y-1.5 w-full max-w-xs">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`w-full text-center px-4 py-2.5 rounded-sm text-base font-semibold transition-all duration-200 uppercase ${
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
      </div>
    </>
  );
};

export default MobileMenu;
