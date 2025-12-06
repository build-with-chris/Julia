import useContactForm from "../hooks/useContactForm";

const Contact19 = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="min-h-[calc(90vh-64px)] md:min-h-[calc(90vh-72px)] lg:h-[calc(90vh-72px)] bg-offwhite relative overflow-hidden flex items-center py-8 md:py-12 lg:py-0">
      <div className="w-full relative z-10 h-full lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch h-full">
          {/* Left Side - Form - Half Width, Full Left */}
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10 pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 flex flex-col justify-center overflow-visible lg:h-full">
            <div className="max-w-xl xl:max-w-2xl mx-auto lg:mx-0 w-full">
              <div className="flex justify-end mb-4 md:mb-6">
                <h1 className="text-anthracite text-2xl md:text-3xl lg:text-4xl font-bold">
                  Jetzt kontaktieren.
                </h1>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-8 p-6 bg-white border-2 border-border-soft rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-warm-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-anthracite mb-1">
                        Vielen Dank für deine Nachricht!
                      </h3>
                      <p className="text-anthracite/90 text-sm">
                        Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form - Helles Design */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4" noValidate>
                {/* Vorname / Nachname - 2 Spalten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-anthracite mb-1.5 text-sm md:text-base">
                      Vorname*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-offwhite border-b-2 text-anthracite placeholder-muted focus:outline-none transition-colors duration-200 pb-1.5 text-sm md:text-base ${
                        errors.firstName
                          ? 'border-warm-accent focus:border-warm-accent'
                          : 'border-border-soft focus:border-warm-accent'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-warm-accent" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-anthracite mb-1.5 text-sm md:text-base">
                      Nachname*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-offwhite border-b-2 text-anthracite placeholder-muted focus:outline-none transition-colors duration-200 pb-1.5 text-sm md:text-base ${
                        errors.lastName
                          ? 'border-warm-accent focus:border-warm-accent'
                          : 'border-border-soft focus:border-warm-accent'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-warm-accent" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-Mail / Telefon - 2 Spalten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-anthracite mb-1.5 text-sm md:text-base">
                      E-Mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-offwhite border-b-2 text-anthracite placeholder-muted focus:outline-none transition-colors duration-200 pb-1.5 text-sm md:text-base ${
                        errors.email
                          ? 'border-warm-accent focus:border-warm-accent'
                          : 'border-border-soft focus:border-warm-accent'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-warm-accent" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-anthracite mb-1.5 text-sm md:text-base">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-offwhite border-b-2 border-border-soft text-anthracite placeholder-muted focus:outline-none focus:border-warm-accent transition-colors duration-200 pb-1.5 text-sm md:text-base"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Nachricht - volle Breite */}
                <div>
                  <label htmlFor="message" className="block text-anthracite mb-1.5 text-sm md:text-base">
                    Nachricht*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full bg-offwhite border-b-2 text-anthracite placeholder-muted focus:outline-none transition-colors duration-200 pb-1.5 resize-none text-sm md:text-base ${
                      errors.message
                        ? 'border-warm-accent focus:border-warm-accent'
                        : 'border-border-soft focus:border-warm-accent'
                    }`}
                    placeholder=""
                    aria-required="true"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-warm-accent" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Checkbox für Datenschutz */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mt-0.5 w-4 h-4 border-2 border-border-soft bg-offwhite focus:ring-0 focus:ring-offset-0 cursor-pointer accent-warm-accent checked:bg-warm-accent checked:border-warm-accent"
                    required
                  />
                  <label htmlFor="privacy" className="text-anthracite text-xs md:text-sm cursor-pointer">
                    Ich habe die Datenschutzerklärung gelesen und akzeptiert.*
                  </label>
                </div>

                {/* Pflichtfeld Hinweis */}
                <p className="text-muted text-xs">*Pflichtfeld</p>

                {errors.submit && (
                  <div className="p-3 bg-white border border-border-soft rounded-sm">
                    <p className="text-xs text-warm-accent">{errors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-warm-accent text-warm-accent uppercase tracking-wider font-medium hover:bg-warm-accent hover:text-offwhite transition-all duration-200 text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'WIRD GESENDET...' : 'SENDEN'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Image - Full Width Right */}
          <div className="hidden lg:block h-full w-full overflow-hidden">
            <img
              src="/Kontakt.webp"
              alt="Julia Mayr - Fotografin"
              className="h-full w-full object-cover"
              style={{ objectPosition: '50% 40%' }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact19 };
