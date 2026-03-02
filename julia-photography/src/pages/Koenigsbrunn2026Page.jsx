import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';

const inputClass = (hasError) =>
  `w-full bg-offwhite border-b-2 text-anthracite placeholder-muted focus:outline-none transition-colors duration-200 pb-1.5 text-sm md:text-base ${
    hasError ? 'border-warm-accent focus:border-warm-accent' : 'border-border-soft focus:border-warm-accent'
  }`;

const Koenigsbrunn2026Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    dressColor: '',
    email: '',
    phone: '',
    consentWhatsApp: false,
    directPurchase: false,
    watermarkOption: false,
    watermarkPackage: '',
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Bitte Name angeben.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) next.email = 'Bitte E-Mail angeben.';
    else if (!emailRegex.test(formData.email)) next.email = 'Bitte gültige E-Mail angeben.';
    if (!formData.privacy) next.privacy = 'Bitte Datenschutz akzeptieren.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: '' }));

    try {
      const res = await fetch('/api/koenigsbrunn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          category: formData.category.trim() || undefined,
          dressColor: formData.dressColor.trim() || undefined,
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          consentWhatsApp: formData.consentWhatsApp,
          directPurchase: formData.directPurchase,
          watermarkOption: formData.watermarkOption,
          watermarkPackage: formData.watermarkOption ? formData.watermarkPackage : undefined,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten.');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        category: '',
        dressColor: '',
        email: '',
        phone: '',
        consentWhatsApp: false,
        directPurchase: false,
        watermarkOption: false,
        watermarkPackage: '',
        privacy: false,
      });
      setErrors({});
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (err) {
      setErrors((prev) => ({ ...prev, submit: err.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Königsbrunn 2026 – Foto-Anmeldung"
        description="Anmeldung für Fotonachricht und Vorauswahl – Königsbrunn 2026. Eislauf-Fotos von Julia Mayr Photography."
      />
      <section className="min-h-[calc(90vh-64px)] bg-offwhite py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
              Eislauf Königsbrunn 2026
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-anthracite mb-4">
              Anmeldung für Fotonachricht
            </h1>
            <p className="text-anthracite/80 text-base md:text-lg mb-8">
              Trag dich hier ein, wenn du benachrichtigt werden möchtest, sobald die Fotos verfügbar sind und du die Vorauswahl ansehen kannst.
            </p>

            {/* Preise */}
            <div className="mb-10 p-6 bg-white border border-border-soft/50 rounded-lg">
              <h2 className="text-lg font-medium text-anthracite mb-3">Preise</h2>
              <ul className="space-y-2 text-anthracite/90 text-sm md:text-base">
                <li><strong>Direktkauf Serie</strong> (alle Fotos): 20€</li>
                <li><strong>Mit Wasserzeichen:</strong> 1 Foto 5€ · 4 Fotos 15€ · Alle Fotos 25€</li>
              </ul>
            </div>

            {submitSuccess && (
              <div className="mb-8 p-6 bg-white border-2 border-border-soft rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-warm-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-anthracite mb-1">Anmeldung erhalten!</h3>
                    <p className="text-anthracite/90 text-sm">
                      Du wirst benachrichtigt, sobald die Fotos bereitstehen und du die Vorauswahl ansehen kannst.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
              <div>
                <label htmlFor="koenigsbrunn-name" className="block text-anthracite mb-1.5 text-sm md:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  id="koenigsbrunn-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass(!!errors.name)}
                  placeholder="Name der Läuferin / Erziehungsberechtigte"
                  aria-required="true"
                />
                {errors.name && <p className="mt-1 text-xs text-warm-accent" role="alert">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="koenigsbrunn-category" className="block text-anthracite mb-1.5 text-sm md:text-base">
                    Kategorie der Läuferin
                  </label>
                  <input
                    type="text"
                    id="koenigsbrunn-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={inputClass(false)}
                    placeholder="z. B. Schüler, Jugend"
                  />
                </div>
                <div>
                  <label htmlFor="koenigsbrunn-dress" className="block text-anthracite mb-1.5 text-sm md:text-base">
                    Farbe Kleid der Läuferin
                  </label>
                  <input
                    type="text"
                    id="koenigsbrunn-dress"
                    name="dressColor"
                    value={formData.dressColor}
                    onChange={handleChange}
                    className={inputClass(false)}
                    placeholder="z. B. Weiß, Blau"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="koenigsbrunn-email" className="block text-anthracite mb-1.5 text-sm md:text-base">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="koenigsbrunn-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass(!!errors.email)}
                    placeholder=""
                    aria-required="true"
                  />
                  {errors.email && <p className="mt-1 text-xs text-warm-accent" role="alert">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="koenigsbrunn-phone" className="block text-anthracite mb-1.5 text-sm md:text-base">
                    Handynummer
                  </label>
                  <input
                    type="tel"
                    id="koenigsbrunn-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass(false)}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consentWhatsApp"
                    name="consentWhatsApp"
                    checked={formData.consentWhatsApp}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 border-2 border-border-soft bg-offwhite focus:ring-0 cursor-pointer accent-warm-accent"
                  />
                  <label htmlFor="consentWhatsApp" className="text-anthracite text-sm cursor-pointer">
                    Ich willige ein, per WhatsApp kontaktiert zu werden, wenn die Fotos verfügbar sind.
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="directPurchase"
                    name="directPurchase"
                    checked={formData.directPurchase}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 border-2 border-border-soft bg-offwhite focus:ring-0 cursor-pointer accent-warm-accent"
                  />
                  <label htmlFor="directPurchase" className="text-anthracite text-sm cursor-pointer">
                    Direktkauf der Serie (alle Fotos) – 20€
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="watermarkOption"
                      name="watermarkOption"
                      checked={formData.watermarkOption}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 border-2 border-border-soft bg-offwhite focus:ring-0 cursor-pointer accent-warm-accent"
                    />
                    <label htmlFor="watermarkOption" className="text-anthracite text-sm cursor-pointer">
                      Zusenden der Fotos mit Wasserzeichen (1 Foto 5€, 4 Fotos 15€, alle Fotos 25€)
                    </label>
                  </div>
                  {formData.watermarkOption && (
                    <div className="ml-6">
                      <label htmlFor="watermarkPackage" className="sr-only">Paket wählen</label>
                      <select
                        id="watermarkPackage"
                        name="watermarkPackage"
                        value={formData.watermarkPackage}
                        onChange={handleChange}
                        className={`${inputClass(false)} block w-full max-w-xs mt-1 py-2 cursor-pointer`}
                      >
                        <option value="">Paket wählen</option>
                        <option value="1 Foto (5€)">1 Foto – 5€</option>
                        <option value="4 Fotos (15€)">4 Fotos – 15€</option>
                        <option value="Alle Fotos (25€)">Alle Fotos – 25€</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 border-2 border-border-soft bg-offwhite focus:ring-0 cursor-pointer accent-warm-accent"
                  required
                />
                <label htmlFor="privacy" className="text-anthracite text-xs md:text-sm cursor-pointer">
                  Ich habe die <a href="/datenschutz" className="text-warm-accent underline hover:no-underline">Datenschutzerklärung</a> gelesen und akzeptiert. *
                </label>
              </div>
              {errors.privacy && <p className="text-xs text-warm-accent" role="alert">{errors.privacy}</p>}

              <p className="text-muted text-xs">* Pflichtfeld</p>

              {errors.submit && (
                <div className="p-3 bg-white border border-border-soft rounded-sm">
                  <p className="text-xs text-warm-accent">{errors.submit}</p>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-warm-accent text-warm-accent uppercase tracking-wider font-medium hover:bg-warm-accent hover:text-offwhite transition-all duration-200 text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'WIRD GESENDET...' : 'ANMELDUNG ABSENDEN'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Koenigsbrunn2026Page;
