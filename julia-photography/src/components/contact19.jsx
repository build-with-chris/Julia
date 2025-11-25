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
    <section className="min-h-[calc(90vh-64px)] md:min-h-[calc(90vh-72px)] lg:h-[calc(90vh-72px)] bg-[#2a2a2a] relative overflow-hidden flex items-center py-8 md:py-12 lg:py-0">
      <div className="w-full relative z-10 h-full lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch h-full">
          {/* Left Side - Form - Half Width, Full Left */}
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 pt-4 md:pt-6 lg:pt-[calc(7vh+32px)] pb-4 md:pb-6 lg:pb-8 flex flex-col justify-start overflow-y-auto lg:h-full">
            <div className="max-w-2xl mx-auto lg:mx-0 w-full">
              <div className="flex justify-end mb-6 md:mb-8">
                <h1 className="text-[#e8e8e8] text-3xl md:text-4xl lg:text-5xl font-bold">
                  Jetzt kontaktieren.
                </h1>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-8 p-6 bg-[#4a4a4a] border-2 border-[#666666] rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#b0b0b0] flex-shrink-0 mt-0.5"
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
                      <h3 className="font-semibold text-[#e8e8e8] mb-1">
                        Vielen Dank für deine Nachricht!
                      </h3>
                      <p className="text-[#c0c0c0] text-sm">
                        Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form - Graustufen Stil */}
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
                {/* Vorname / Nachname - 2 Spalten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                      Vorname*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                        errors.firstName
                          ? 'border-[#888888] focus:border-[#b0b0b0]'
                          : 'border-[#666666] focus:border-[#b0b0b0]'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                      Nachname*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                        errors.lastName
                          ? 'border-[#888888] focus:border-[#b0b0b0]'
                          : 'border-[#666666] focus:border-[#b0b0b0]'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-Mail / Telefon - 2 Spalten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                      E-Mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 text-base md:text-lg ${
                        errors.email
                          ? 'border-[#888888] focus:border-[#b0b0b0]'
                          : 'border-[#666666] focus:border-[#b0b0b0]'
                      }`}
                      placeholder=""
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#666666] text-[#e8e8e8] placeholder-[#888888] focus:outline-none focus:border-[#b0b0b0] transition-colors duration-200 pb-2 text-base md:text-lg"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Nachricht - volle Breite */}
                <div>
                  <label htmlFor="message" className="block text-[#d0d0d0] mb-2 text-sm md:text-base">
                    Nachricht*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full bg-transparent border-b-2 text-[#e8e8e8] placeholder-[#888888] focus:outline-none transition-colors duration-200 pb-2 resize-none text-base md:text-lg ${
                      errors.message
                        ? 'border-[#888888] focus:border-[#b0b0b0]'
                        : 'border-[#666666] focus:border-[#b0b0b0]'
                    }`}
                    placeholder=""
                    aria-required="true"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-[#b0b0b0]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Checkbox für Datenschutz */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mt-1 w-4 h-4 border-2 border-[#888888] bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#b0b0b0] checked:bg-[#b0b0b0] checked:border-[#b0b0b0]"
                    required
                  />
                  <label htmlFor="privacy" className="text-[#c0c0c0] text-sm md:text-base cursor-pointer">
                    Ich habe die Datenschutzerklärung gelesen und akzeptiert.*
                  </label>
                </div>

                {/* Pflichtfeld Hinweis */}
                <p className="text-[#888888] text-xs md:text-sm">*Pflichtfeld</p>

                {errors.submit && (
                  <div className="p-4 bg-[#4a4a4a] border border-[#666666] rounded-sm">
                    <p className="text-sm text-[#b0b0b0]">{errors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 md:px-12 py-3 md:py-4 border-2 border-[#b0b0b0] text-[#d0d0d0] uppercase tracking-wider font-medium hover:bg-[#b0b0b0] hover:text-[#2a2a2a] transition-all duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
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
              style={{ objectPosition: '50% 30%' }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact19 };
