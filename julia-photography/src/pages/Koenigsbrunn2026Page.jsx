import { useState, useRef, useEffect } from 'react';
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
    startNumber: '',
    dressColor: '',
    email: '',
    phone: '',
    consentWhatsApp: false,
    directPurchase: false,
    watermarkOption: false,
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [paypalCopied, setPaypalCopied] = useState(false);
  const successRef = useRef(null);

  const PAYPAL_EMAIL = 'juliamayr.photo@gmail.com';

  const copyPaypalEmail = async () => {
    try {
      await navigator.clipboard.writeText(PAYPAL_EMAIL);
      setPaypalCopied(true);
      setTimeout(() => setPaypalCopied(false), 2000);
    } catch {
      setPaypalCopied(false);
    }
  };

  useEffect(() => {
    if (submitSuccess && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitSuccess]);

  const scrollToBezahlung = () => {
    document.getElementById('bezahlung')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const details = document.getElementById('bezahlung');
    if (details && details.tagName === 'DETAILS') details.open = true;
  };

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
    if (!formData.category.trim()) next.category = 'Bitte Kategorie angeben.';
    if (!formData.startNumber.trim()) next.startNumber = 'Bitte Startnummer angeben.';
    if (!formData.dressColor.trim()) next.dressColor = 'Bitte Farbe des Kleids angeben.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) next.email = 'Bitte E-Mail angeben.';
    else if (!emailRegex.test(formData.email)) next.email = 'Bitte gültige E-Mail angeben.';
    if (!formData.directPurchase && !formData.watermarkOption) {
      next.packageChoice = 'Bitte wähle eine Option: Direktkauf oder Fotos mit Wasserzeichen.';
    }
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
          category: formData.category.trim(),
          startNumber: formData.startNumber.trim(),
          dressColor: formData.dressColor.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          consentWhatsApp: formData.consentWhatsApp,
          directPurchase: formData.directPurchase,
          watermarkOption: formData.watermarkOption,
          watermarkPackage: formData.watermarkOption ? 'Alle Fotos (30€)' : undefined,
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
        startNumber: '',
        dressColor: '',
        email: '',
        phone: '',
        consentWhatsApp: false,
        directPurchase: false,
        watermarkOption: false,
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
        description="Wettkampfbilder Königscup – Königsbrunn 2026. Eislauf-Fotos von Julia Mayr Photography."
      />
      <section className="min-h-[calc(90vh-64px)] bg-offwhite py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-2">
              Eislauf Königsbrunn 2026
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-anthracite mb-4">
              Wettkampfbilder Königscup
            </h1>
            <p className="text-anthracite/80 text-base md:text-lg mb-8">
              Melde dich an und erhalte Bescheid, sobald die Fotos bereit sind – ob du direkt bestellen möchtest oder dich erst in Ruhe informieren willst.
            </p>

            {/* Preise */}
            <div className="mb-10 p-6 bg-white border border-border-soft/50 rounded-lg">
              <h2 className="text-lg font-medium text-anthracite mb-3">Preise</h2>
              <ul className="space-y-2 text-anthracite/90 text-sm md:text-base">
                <li><strong>Direktkauf</strong> (alle Fotos): 25€</li>
                <li><strong>Mit Wasserzeichen</strong> (alle Fotos): 30€</li>
              </ul>
            </div>

            {/* Infos-Akkordion */}
            <div className="mb-10 space-y-2" role="region" aria-label="Informationen Galerie und Bezahlung">
              <details className="group bg-white border border-border-soft/50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-3 list-none cursor-pointer py-4 px-5 md:py-5 md:px-6 text-anthracite font-medium text-base md:text-lg hover:bg-offwhite/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Allgemeine Infos</span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-warm-accent/10 text-warm-accent transition-transform group-open:rotate-180" aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-6 border-t border-border-soft/50">
                  <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">
                    Fotos können in einer kostenlosen Online-Galerie angesehen und bei Interesse erworben werden. Hierzu füllt ihr einfach oben stehendes Formular aus und erhaltet danach den Zugang zur Galerie, sobald die Bilder verfügbar sind.
                  </p>
                </div>
              </details>

              <details id="bezahlung" className="group bg-white border border-border-soft/50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-3 list-none cursor-pointer py-4 px-5 md:py-5 md:px-6 text-anthracite font-medium text-base md:text-lg hover:bg-offwhite/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Bezahlung</span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-warm-accent/10 text-warm-accent transition-transform group-open:rotate-180" aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-6 border-t border-border-soft/50 space-y-4">
                  <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">
                    Bezahlung möglich über PayPal („Friends & Family“) oder Überweisung.
                  </p>
                  <p className="text-anthracite/90 text-sm md:text-base">
                    <strong className="text-anthracite">Verwendungszweck:</strong> Name der Läuferin + Kategorie
                  </p>
                  <div className="grid gap-3 text-sm md:text-base">
                    <p className="text-anthracite/90">
                      <strong className="text-anthracite">PayPal:</strong>{' '}
                      <button
                        type="button"
                        onClick={copyPaypalEmail}
                        className="text-warm-accent hover:underline break-all text-left bg-transparent border-0 cursor-pointer p-0 font-inherit"
                        aria-label="E-Mail-Adresse kopieren"
                      >
                        {PAYPAL_EMAIL}
                      </button>
                      {paypalCopied && (
                        <span className="ml-2 text-warm-accent text-sm font-medium" role="status">
                          Kopiert!
                        </span>
                      )}
                    </p>
                    <p className="text-anthracite/90">
                      <strong className="text-anthracite">Kontoverbindung:</strong><br />
                      <span className="block mt-1">Julia Mayr</span>
                      <span className="block font-mono tracking-wide">DE33 7016 9186 0000 1413 99</span>
                    </p>
                  </div>
                </div>
              </details>

              <details className="group bg-white border border-border-soft/50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-3 list-none cursor-pointer py-4 px-5 md:py-5 md:px-6 text-anthracite font-medium text-base md:text-lg hover:bg-offwhite/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Erklärung zur Galerie</span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-warm-accent/10 text-warm-accent transition-transform group-open:rotate-180" aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-6 border-t border-border-soft/50">
                  <p className="text-anthracite/90 text-sm md:text-base leading-relaxed space-y-3">
                    Für die private, dem Teilnehmer bestimmte Galerie findet nur eine einfache Vorauswahl statt. Ihr habt 14 Tage Zeit, euch die Galerie in Ruhe anzusehen und eure Bilder auszuwählen. Dies kann entweder direkt über die Galerie geschehen oder ihr schreibt mir eine E-Mail mit der bzw. den Bildnummer/n – ich lade euch die gekauften Bilder dann erneut ohne Wasserzeichen in die Galerie hoch. Dort könnt ihr sie downloaden und zur privaten bzw. nicht kommerziellen Nutzung verwenden.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-border-soft/50 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-3 list-none cursor-pointer py-4 px-5 md:py-5 md:px-6 text-anthracite font-medium text-base md:text-lg hover:bg-offwhite/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>Q&A</span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-warm-accent/10 text-warm-accent transition-transform group-open:rotate-180" aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-6 border-t border-border-soft/50 space-y-5">
                  <div>
                    <p className="text-anthracite font-medium text-sm md:text-base mb-1">Wie schnell werden Anfragen bearbeitet?</p>
                    <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">Alle Anfragen werden zeitnah bearbeitet.</p>
                  </div>
                  <div>
                    <p className="text-anthracite font-medium text-sm md:text-base mb-1">Wie teile ich meine finale Auswahl mit?</p>
                    <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">Bitte teilt mir eure finale Auswahl per Mail oder über die Galerie mit.</p>
                  </div>
                  <div>
                    <p className="text-anthracite font-medium text-sm md:text-base mb-1">Die Bilder werden nicht angezeigt – was kann ich tun?</p>
                    <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">Nicht vergessen, den Browser zu aktualisieren, falls die Bilder nicht zu sehen sind.</p>
                  </div>
                  <div>
                    <p className="text-anthracite font-medium text-sm md:text-base mb-1">Ich habe keine oder eine späte Antwort erhalten.</p>
                    <p className="text-anthracite/90 text-sm md:text-base leading-relaxed">Antworte ich nicht oder zu spät, erinnert mich bitte jederzeit.</p>
                  </div>
                </div>
              </details>
            </div>

            {submitSuccess && (
              <div
                ref={successRef}
                className="mb-8 p-6 md:p-8 bg-warm-accent/10 border-2 border-warm-accent rounded-lg shadow-sm"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-warm-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-anthracite text-lg md:text-xl mb-2">Anmeldung gesendet!</h3>
                    <p className="text-anthracite/90 text-base md:text-lg leading-relaxed">
                      Deine Anfrage ist bei uns eingegangen. Du wirst benachrichtigt, sobald die Fotos bereitstehen und du die Vorauswahl ansehen kannst.
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

              <div>
                <label htmlFor="koenigsbrunn-category" className="block text-anthracite mb-1.5 text-sm md:text-base">
                  Kategorie *
                </label>
                <input
                  type="text"
                  id="koenigsbrunn-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass(!!errors.category)}
                  placeholder="z. B. Parcours Eismäuse, Elemente III D"
                  aria-required="true"
                />
                <p className="mt-1.5 text-xs text-anthracite/70">z. B. Parcours Eismäuse, Elemente III D, Figurenläufer C</p>
                {errors.category && <p className="mt-1 text-xs text-warm-accent" role="alert">{errors.category}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="koenigsbrunn-dress" className="block text-anthracite mb-1 text-sm md:text-base">
                    Farbe Kleid der Läuferin *
                  </label>
                  <input
                    type="text"
                    id="koenigsbrunn-dress"
                    name="dressColor"
                    value={formData.dressColor}
                    onChange={handleChange}
                    className={`${inputClass(!!errors.dressColor)} text-sm md:text-base`}
                    placeholder="z. B. Weiß, Blau"
                    aria-required="true"
                  />
                  {errors.dressColor && <p className="mt-1 text-xs text-warm-accent" role="alert">{errors.dressColor}</p>}
                </div>
                <div>
                  <label htmlFor="koenigsbrunn-startnumber" className="block text-anthracite mb-1 text-sm md:text-base">
                    Startnummer *
                  </label>
                  <input
                    type="text"
                    id="koenigsbrunn-startnumber"
                    name="startNumber"
                    value={formData.startNumber}
                    onChange={handleChange}
                    className={`${inputClass(!!errors.startNumber)} text-sm md:text-base`}
                    placeholder="z. B. 12"
                    aria-required="true"
                  />
                  {errors.startNumber && <p className="mt-1 text-xs text-warm-accent" role="alert">{errors.startNumber}</p>}
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
                <fieldset className="space-y-3">
                  <legend className="text-anthracite font-medium text-sm md:text-base mb-3 block">
                    Bitte wähle eine Option *
                  </legend>
                  {errors.packageChoice && (
                    <p className="text-xs text-warm-accent mb-2" role="alert">{errors.packageChoice}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, directPurchase: true, watermarkOption: false }));
                        if (errors.packageChoice) setErrors((prev) => ({ ...prev, packageChoice: '' }));
                      }}
                      className={`w-full text-left px-5 py-4 md:px-6 md:py-5 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 ${
                        formData.directPurchase
                          ? 'border-warm-accent bg-warm-accent/10 text-anthracite'
                          : 'border-border-soft bg-white hover:border-warm-accent/50 text-anthracite'
                      }`}
                      aria-pressed={formData.directPurchase}
                    >
                      <span className="block font-medium text-base md:text-lg">Direktkauf der Serie (alle Fotos) – 25€</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, watermarkOption: true, directPurchase: false }));
                        if (errors.packageChoice) setErrors((prev) => ({ ...prev, packageChoice: '' }));
                      }}
                      className={`w-full text-left px-5 py-4 md:px-6 md:py-5 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 ${
                        formData.watermarkOption
                          ? 'border-warm-accent bg-warm-accent/10 text-anthracite'
                          : 'border-border-soft bg-white hover:border-warm-accent/50 text-anthracite'
                      }`}
                      aria-pressed={formData.watermarkOption}
                    >
                      <span className="block font-medium text-base md:text-lg">Zusenden aller Fotos mit Wasserzeichen</span>
                    </button>
                  </div>
                  {formData.directPurchase && (
                    <div className="p-4 bg-warm-accent/10 border border-warm-accent/30 rounded-lg">
                      <p className="text-anthracite/90 text-sm mb-3">
                        Du kannst jetzt gleich bezahlen. Alle Bezahlmöglichkeiten findest du oben im Abschnitt „Bezahlung“.
                      </p>
                      <button
                        type="button"
                        onClick={scrollToBezahlung}
                        className="text-warm-accent font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 rounded px-2 py-1"
                      >
                        Zu den Bezahlmöglichkeiten →
                      </button>
                    </div>
                  )}
                </fieldset>
                <div className="flex items-start gap-2 pt-1">
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
