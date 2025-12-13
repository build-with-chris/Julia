import { useEffect, useRef } from 'react';

const LightboxModal = ({ image, onClose, onNext, onPrev, currentIndex, totalImages }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Focus trap: focus close button on mount
  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  // Prevent body scroll when modal is open and hide header
  useEffect(() => {
    if (!image) return;
    
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('data-lightbox-open', 'true');
    
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-lightbox-open');
    };
  }, [image]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!image) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-anthracite/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Image Counter */}
      {totalImages > 1 && (
        <div className="absolute top-4 left-4 z-[105] px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
          {currentIndex + 1} / {totalImages}
        </div>
      )}

      {/* Previous Button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[105] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[105] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image Container - Relative positioning for close button */}
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4 md:p-8">
        {/* Close Button - Positioned at top-right corner of the image */}
        <button
          ref={closeButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-[110] p-2 md:p-3 rounded-full bg-white/90 hover:bg-white text-anthracite transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg backdrop-blur-sm"
          aria-label="Schließen"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={image.src}
          alt={image.alt || ''}
          className="max-w-full max-h-full object-contain"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default LightboxModal;
