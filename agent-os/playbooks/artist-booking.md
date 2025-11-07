Erzeuge eine mobile-first Booking-Page für Künstler basierend auf briefs/<kunde>.yaml.

## Standards
- ./agent-os/standards/frontend/styling.md
- ./agent-os/standards/frontend/mobile-menu.md
- ./agent-os/standards/global/code-style.md
- ./agent-os/standards/global/best-practices.md

## Deliverables
1) [SUMMARY] Brief + offene Fragen (USP).
2) [TOKENS] earth + minimal, Kontrast AA.
3) [WIREFRAME] Hero, Work, About, Booking (Form + Kalender-Platzhalter), Contact.
4) [COPY] Deutsche Kurztexte, playful; CTAs: „Jetzt anfragen“, „Terminvorschlag senden“.
5) [CODE] index.html, styles.css, script.js
   - HTML: semantisch, SEO-Head (title/meta/og), A11y.
   - CSS: Tokens, responsive Grid, States; kein !important.
   - JS: Mobile-Menu (Overlay 100vw/100vh, ESC/Off-Click, aria-expanded).
   - Booking-Form: Name, E-Mail, Eventdatum, Ort, Budget, Nachricht; Validation; Feedback.
   - Kalender-Platzhalter: <div id="calendar-embed">.
   - Tracking: data-utm Hooks an CTAs.
6) [LEGAL] Kurz-Datenschutz-Hinweis + Link (Platzhalter).
7) [QA] Mobile 320–428, Fokus-Reihenfolge, Form-Validation, Menü, Lighthouse.
8) [HANDOFF] Offene Punkte (USP, Referenzen, Bilder), nächste Schritte, To-Dos.
