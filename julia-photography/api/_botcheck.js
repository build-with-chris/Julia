/**
 * Bot-Erkennung fuer die Formular-Endpunkte.
 *
 * Drei unsichtbare Huerden, alle im Backend geprueft:
 *
 * 1. Honeypot: ein verstecktes Feld, das kein Mensch sieht und kein Mensch
 *    ausfuellt. Ist es gefuellt, war es ein Skript.
 * 2. Zeitfalle: der Client meldet, wie viele Millisekunden zwischen dem
 *    Aufbau des Formulars und dem Absenden vergangen sind. Ein Mensch
 *    braucht fuer Name, Mail und Nachricht laenger als die Mindestzeit,
 *    ein Skript ist sofort fertig. Gemessen wird eine Zeitspanne, nicht
 *    ein Zeitpunkt, damit eine falsch gestellte Uhr niemanden aussperrt.
 * 3. Herkunft: der Origin-Header muss zur eigenen Seite passen. Wer den
 *    Endpunkt direkt anspricht, kommt nicht durch.
 *
 * Wer haengen bleibt, bekommt trotzdem die normale Erfolgsantwort. Das ist
 * Absicht: ein Bot, der eine Fehlermeldung sieht, probiert es anders.
 */

// Namen der beiden Zusatzfelder. Bewusst unauffaellig, damit Bots sie fuellen.
export const HONEYPOT_FIELD = 'website';
export const ELAPSED_FIELD = 'formTime';

// Mindestzeit zwischen Formularaufbau und Absenden.
export const MIN_ELAPSED_MS = 3000;

const ALLOWED_HOSTS = [
  'juliamayr-photo.com',
  'www.juliamayr-photo.com',
];

function isAllowedOrigin(origin) {
  if (!origin) return false;

  let host;
  try {
    host = new URL(origin).hostname;
  } catch {
    return false;
  }

  if (ALLOWED_HOSTS.includes(host)) return true;

  // Das Deployment, das gerade laeuft (Vercel setzt das ohne Protokoll).
  if (process.env.VERCEL_URL && host === process.env.VERCEL_URL) return true;

  // Preview-Deployments und lokale Entwicklung, aber nie in Produktion.
  if (process.env.VERCEL_ENV !== 'production') {
    if (host === 'localhost' || host === '127.0.0.1') return true;
    if (host.endsWith('.vercel.app')) return true;
  }

  return false;
}

/**
 * Prueft einen eingehenden Request.
 *
 * @returns {{ ok: boolean, reason?: string }} ok:false heisst verwerfen,
 *   ohne dem Absender zu verraten, warum.
 */
export function checkSubmission(req) {
  const body = req.body || {};

  const honeypot = body[HONEYPOT_FIELD];
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return { ok: false, reason: 'honeypot' };
  }

  const elapsed = Number(body[ELAPSED_FIELD]);
  if (!Number.isFinite(elapsed) || elapsed < MIN_ELAPSED_MS) {
    return { ok: false, reason: 'too-fast' };
  }

  if (!isAllowedOrigin(req.headers?.origin)) {
    return { ok: false, reason: 'origin' };
  }

  return { ok: true };
}
