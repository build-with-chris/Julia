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
    <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-0 lg:min-h-screen bg-white relative overflow-hidden flex items-center">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
          {/* Left Side - Form */}
          <div className="flex w-full flex-col justify-between">
            <div className="relative w-fit mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-none tracking-tight text-anthracite mb-8">
                Bereit für euer Shooting?
              </h1>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-8 p-6 bg-[#6B8E5F]/10 border-2 border-[#6B8E5F] rounded-lg">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#6B8E5F] flex-shrink-0 mt-0.5"
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
                    <p className="text-anthracite/70 text-sm">
                      Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-offwhite p-8 md:p-10 rounded-lg shadow-sm border border-border-soft">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Euer Name <span className="text-[#C65D4F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 md:px-5 py-3 md:py-4 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 text-base ${
                      errors.name
                        ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                        : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                    }`}
                    placeholder="Anna & Tom"
                    aria-required="true"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-[#C65D4F]" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    E-Mail <span className="text-[#C65D4F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 md:px-5 py-3 md:py-4 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 text-base ${
                      errors.email
                        ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                        : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                    }`}
                    placeholder="eure@email.de"
                    aria-required="true"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-[#C65D4F]" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Art des Shootings <span className="text-[#C65D4F]">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-4 md:px-5 py-3 md:py-4 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 text-base bg-white ${
                      errors.inquiryType
                        ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                        : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                    }`}
                    aria-required="true"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="paare">Paarshooting</option>
                    <option value="hochzeit">Hochzeit</option>
                    <option value="portrait">Portraitshooting</option>
                    <option value="familie">Familienshooting</option>
                    <option value="anderes">Anderes</option>
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-2 text-sm text-[#C65D4F]" role="alert">
                      {errors.inquiryType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-anthracite mb-3">
                    Nachricht <span className="text-[#C65D4F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 md:px-5 py-3 md:py-4 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 text-base resize-none ${
                      errors.message
                        ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                        : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                    }`}
                    placeholder="Erzählt mir von euren Plänen und eurem Wunschtermin..."
                    aria-required="true"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-[#C65D4F]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {errors.submit && (
                  <div className="p-4 bg-[#C65D4F]/10 border border-[#C65D4F] rounded-sm">
                    <p className="text-sm text-[#C65D4F]">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 md:px-10 py-4 md:py-5 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-colors duration-200 font-medium text-base md:text-lg shadow-md hover:shadow-lg min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Image - Full Width */}
          <div className="h-[400px] md:h-[500px] lg:h-[calc(100vh-8rem)] w-full lg:sticky lg:top-0">
            <img
              src="/Kontakt.webp"
              alt="Julia Mayr - Fotografin"
              className="h-full w-full object-cover rounded-lg"
              loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact19 };
