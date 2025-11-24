import Layout from '../components/layout/Layout';
import useContactForm from '../hooks/useContactForm';

const ContactPage = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <Layout>
      {/* Hero Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-gradient-to-br from-offwhite to-[#F5F0EA]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-anthracite mb-6 leading-tight">
              Lass uns reden!
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Erzähl mir von deinen Plänen, deinen Wünschen und Vorstellungen.
              Ich freue mich darauf, dich kennenzulernen!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
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
                    <p className="text-muted text-sm">
                      Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Intro */}
            <div className="mb-10 text-center">
              <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
                Kontaktformular
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-anthracite mb-4">
                Termin anfragen
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Fülle das Formular aus und ich melde mich innerhalb von 48 Stunden bei dir.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-anthracite mb-2"
                >
                  Name <span className="text-[#C65D4F]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name
                      ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                      : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                  }`}
                  placeholder="Dein Name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-[#C65D4F]" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-anthracite mb-2"
                >
                  E-Mail <span className="text-[#C65D4F]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email
                      ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                      : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                  }`}
                  placeholder="deine@email.de"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-[#C65D4F]" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Inquiry Type Dropdown */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-semibold text-anthracite mb-2"
                >
                  Art der Anfrage <span className="text-[#C65D4F]">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 bg-white ${
                    errors.inquiryType
                      ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                      : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                  }`}
                  aria-required="true"
                  aria-invalid={errors.inquiryType ? 'true' : 'false'}
                  aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                >
                  <option value="">Bitte wählen...</option>
                  <option value="paare">Paarshooting</option>
                  <option value="hochzeit">Hochzeitsreportage</option>
                  <option value="elopement">Elopement</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
                {errors.inquiryType && (
                  <p id="inquiryType-error" className="mt-2 text-sm text-[#C65D4F]" role="alert">
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              {/* Two Column: Date & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-semibold text-anthracite mb-2"
                  >
                    Wunschdatum
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent/20 focus:border-warm-accent transition-all duration-200"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-anthracite mb-2"
                  >
                    Ort
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-soft rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-accent/20 focus:border-warm-accent transition-all duration-200"
                    placeholder="München, Chiemsee, ..."
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-anthracite mb-2"
                >
                  Nachricht <span className="text-[#C65D4F]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-y ${
                    errors.message
                      ? 'border-[#C65D4F] focus:ring-[#C65D4F]/20'
                      : 'border-border-soft focus:ring-warm-accent/20 focus:border-warm-accent'
                  }`}
                  placeholder="Erzähl mir von deinen Plänen und Wünschen..."
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-[#C65D4F]" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-[#C65D4F]/10 border border-[#C65D4F] rounded-sm">
                  <p className="text-sm text-[#C65D4F]">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-warm-accent hover:bg-warm-accent-dark text-white rounded-sm transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-warm-accent/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  'Termin anfragen'
                )}
              </button>

              {/* Response Time Note */}
              <p className="text-center text-sm text-muted mt-4">
                Ich melde mich in der Regel innerhalb von <strong>48 Stunden</strong> bei dir.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-anthracite mb-6">
              Oder schreib mir direkt
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-muted">
                <strong>E-Mail:</strong>{' '}
                <a
                  href="mailto:juliamayr.photo@gmail.com"
                  className="text-warm-accent hover:text-warm-accent-dark transition-colors duration-200"
                >
                  juliamayr.photo@gmail.com
                </a>
              </p>
              <p className="text-lg text-muted">
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://instagram.com/moanayulia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-accent hover:text-warm-accent-dark transition-colors duration-200"
                >
                  @moanayulia
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
