# Komponenten-Richtlinien
## Struktur
- Max. eine Verantwortung pro Komponente.
- Props klar typisieren (TS bevorzugt). Default-Props statt `||`-Tricks.

## Muster
- Präsentation (UI) vs. Container (Daten/State) trennen.
- Keine Side-Effects im Render; Effekte aufräumen.

## Docs
- Jede exportierte Komponente: kurzer Kommentar zu Zweck/Props.
