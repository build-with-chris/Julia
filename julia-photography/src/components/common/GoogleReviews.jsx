import { useState, useEffect } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState({
    rating: 5.0,
    totalReviews: 4,
    loading: false,
    error: null,
  });

  // Fetch reviews from API (optional - falls Google Places API konfiguriert ist)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviews((prev) => ({ ...prev, loading: true }));
        const response = await fetch('/api/google-reviews');
        
        if (response.ok) {
          const data = await response.json();
          setReviews({
            rating: data.rating || 5.0,
            totalReviews: data.totalReviews || 4,
            loading: false,
            error: null,
          });
        } else {
          // Fallback to default values if API fails
          setReviews((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        // Fallback to default values if API fails
        setReviews((prev) => ({ ...prev, loading: false }));
      }
    };

    // Fetch reviews from API (falls konfiguriert)
    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-5 h-5 text-warm-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-5 h-5 text-warm-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              fill="url(#half-star)"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-5 h-5 text-anthracite/20"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-3">
      {renderStars(reviews.rating)}
      <div className="flex items-center gap-2">
        <span className="text-base md:text-lg font-semibold text-anthracite">
          {reviews.rating.toFixed(1)}
        </span>
        <span className="text-sm md:text-base text-anthracite/70">
          ({reviews.totalReviews} {reviews.totalReviews === 1 ? 'Bewertung' : 'Bewertungen'})
        </span>
      </div>
      <a
        href="https://share.google/Xaa2l7kcxdswFrMTw"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-sm text-anthracite/70 hover:text-warm-accent transition-colors duration-200 underline"
      >
        Alle ansehen
      </a>
    </div>
  );
};

export default GoogleReviews;

