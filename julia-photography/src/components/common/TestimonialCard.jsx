const TestimonialCard = ({ quote, author, location }) => {
  return (
    <div className="group p-8 md:p-10 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border-soft">
      {/* Quote Icon */}
      <div className="mb-6">
        <svg
          className="w-10 h-10 text-warm-accent/30"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Text */}
      <blockquote className="mb-6">
        <p className="text-lg md:text-xl text-anthracite leading-relaxed font-light italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="flex flex-col">
        <cite className="not-italic">
          <span className="text-base font-semibold text-anthracite">
            {author}
          </span>
        </cite>
        {location && (
          <span className="text-sm text-muted mt-1">
            {location}
          </span>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
