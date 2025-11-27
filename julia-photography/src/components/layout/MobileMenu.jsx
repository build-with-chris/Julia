import { useEffect, useRef } from 'react';

const MobileMenu = ({ isOpen, onClose, navItems, activeSection, onNavClick }) => {
  const menuRef = useRef(null);

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
        className="fixed top-[64px] left-0 right-0 w-full h-[calc(55vh-64px)] z-[101] md:hidden flex flex-col bg-offwhite/98 backdrop-blur-sm shadow-xl border-b border-border-soft"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col justify-start items-center px-4 pt-6 pb-6 overflow-y-auto min-h-0">
          <ul className="space-y-2 w-full max-w-xs">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`w-full text-center px-4 py-3 rounded-sm text-base transition-all duration-200 ${
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
