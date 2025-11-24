const FactCard = ({ title, description, icon, iconLabel }) => {
  return (
    <div className="group p-6 md:p-8 bg-white rounded-lg border border-border-soft hover:border-warm-accent hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      {icon && (
        <div className="mb-4 flex justify-center md:justify-start">
          <div className="w-14 h-14 flex items-center justify-center bg-warm-accent/10 rounded-full group-hover:bg-warm-accent/20 transition-colors duration-300">
            <span className="text-3xl" role="img" aria-label={iconLabel}>
              {icon}
            </span>
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-anthracite mb-3 text-center md:text-left">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg text-anthracite leading-relaxed text-center md:text-left">
        {description}
      </p>
    </div>
  );
};

export default FactCard;
