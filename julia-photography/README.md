# Julia Mayr Photography - React Website

Eine minimalistische, elegante Single-Page-Website für die Fotografin Julia Mayr.

## 🎨 Design-Prinzipien

- **Clean & Minimalistisch**: Viel Weißraum, klare Typografie
- **Warme Farbpalette**: Off-White, Anthrazit, warme Akzentfarben
- **Responsive**: Optimiert für alle Geräte
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen

## 🛠 Tech Stack

- **React 19** - Moderne UI-Bibliothek
- **Vite** - Schneller Build-Tool
- **Tailwind CSS** - Utility-First CSS Framework
- **Funktionale Komponenten** - Clean Code mit React Hooks

## 📁 Projektstruktur

```
src/
├── components/
│   └── layout/
│       ├── Header.jsx      # Sticky Navigation mit Active State
│       ├── Footer.jsx       # Footer mit CTA und Social Links
│       └── Layout.jsx       # Main Layout Wrapper
├── pages/
│   └── Home.jsx            # Home Page mit allen Sektionen
├── App.jsx                 # Main App Component
├── main.jsx                # Entry Point
└── index.css               # Tailwind Config & Custom Styles
```

## 🎯 Features

### Navigation
- Sticky Header mit subtiler Shadow
- Active Link Highlighting mit Unterstreichung
- Smooth Scroll zu Sektionen
- Automatische Section Detection beim Scrollen

### Layout
- Flexbox-basiertes Layout (Header → Main → Footer)
- Responsive Container mit max-width
- Optimierte Abstände und Padding

### Sektionen
1. **Hero** - Großer Titel mit CTA
2. **Paare** - Paarshooting Präsentation
3. **Hochzeiten** - Hochzeitsreportage
4. **Über mich** - About Section
5. **Kontakt** - Kontaktformular

### Footer
- CTA Button "Termin anfragen"
- Social Media Links (Instagram, Pinterest)
- Copyright-Hinweis

## 🚀 Development

```bash
# Installation
npm install

# Dev Server starten
npm run dev

# Build für Production
npm build

# Preview Production Build
npm run preview
```

Der Dev-Server läuft auf: **http://localhost:5173/**

## 🎨 Farben

- **Off-White**: `#FAF8F5` (Hintergrund)
- **Anthracite**: `#2D2A26` (Text)
- **Warm Accent**: `#8B7355` (Buttons, Links)
- **Warm Accent Dark**: `#6B5844` (Hover States)
- **Muted**: `#5C5550` (Secondary Text)
- **Border Soft**: `#E0D5C7` (Borders)

## 📝 Fonts

- **Heading**: Termina (via Tailwind: `font-heading`)
- **Body**: Roc Grotesk (via Tailwind: `font-body`)
- *Hinweis: Aktuell wird Inter als Platzhalter verwendet*

## 🔄 Next Steps

- [ ] Echte Bilder einbinden
- [ ] Fonts Termina & Roc Grotesk integrieren
- [ ] Mobile Navigation Hamburger Menu
- [ ] Kontaktformular Backend anbinden
- [ ] Bildergalerie mit Lightbox
- [ ] Animationen beim Scroll
- [ ] SEO Meta Tags
- [ ] Performance Optimierung

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

**Entwickelt mit ❤️ für Julia Mayr Photography**
