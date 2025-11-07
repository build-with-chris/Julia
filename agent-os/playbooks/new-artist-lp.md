# Playbook: New Artist Landing Page (One-Command)
## Zweck
Erzeuge eine mobile-first, visuell stimmige Onepager-Landingpage für Künstler anhand von briefs/<kunde>.yaml.

## Quellen/Standards (streng befolgen)
- ./agent-os/standards/frontend/styling.md
- ./agent-os/standards/frontend/mobile-menu.md
- ./agent-os/standards/global/code-style.md
- ./agent-os/standards/global/best-practices.md

## Deliverables (in Reihenfolge, je eigener Block)
1) [SUMMARY] Kurzüberblick Brief + offene Fragen.
2) [TOKENS] Design-Tokens (Farben, Typo, Spacing), Kontrast AA.
3) [WIREFRAME] Sektionen: Hero, Portfolio, About, Contact.
4) [COPY] Deutsche Kurztexte, klare CTAs.
5) [CODE] index.html, styles.css, script.js
   - HTML: semantisch, SEO-Head (title/meta/og), A11y.
   - CSS: Tokens, responsive Grid, States (hover/focus/active), kein !important.
   - JS: Mobile-Menu gem. mobile-menu.md (Overlay 100vw/100vh, ESC/Off-Click, aria-expanded).
6) [ASSETS] Platzhalter + Alt-Texte, Ratio-Hinweise.
7) [QA] Mobile-Checks (320–428), Lighthouse-Hinweise, Fokus-Reihenfolge.
8) [HANDOFF] Nächste Schritte, offene Punkte, To-Dos für Kunde.
