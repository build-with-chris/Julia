# Code-Style & Architektur (global)
**Scope:** Frontend-lastige Webprojekte mit optionalem Backend.
**Warum:** Lesbarer, wartbarer, wiederverwendbarer Code.

## Standards
- **Benennung:** camelCase für Variablen/Funktionen; `is/has/should` für Booleans; klare, sprechende Namen.
- **Komponenten:** Eine Verantwortung pro Komponente. Keine Duplikate; Shared-Logik in Utils/Hooks.
- **Dokumentation:** Kurzer Header-Docstring je Modul/Funktion. Kommentare nur für *Warum*, nicht *Was*.
- **Datenfluss:** Explizite Props/Interfaces. Keine versteckte Magie.
- **Fehlerbehandlung:** Defensive Defaults; klare Fallbacks für fehlende Daten.

## Checks (vor Merge)
- [ ] Dateistruktur passt ins Projekt (components/, hooks/, utils/).
- [ ] Jede Exportfunktion hat Docstring.
- [ ] Keine Copy-Paste-Duplikate.
