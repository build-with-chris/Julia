# Component Usage Examples

## CTASection Component

Die `CTASection` ist eine wiederverwendbare Call-to-Action-Komponente, die auf verschiedenen Seiten eingesetzt werden kann.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `eyebrow` | string | - | No | Kleiner Text über der Headline (optional) |
| `headline` | string | "Bereit, eure Geschichte festzuhalten?" | No | Hauptüberschrift |
| `subline` | string | - | No | Beschreibender Text unter der Headline (optional) |
| `buttonLabel` | string | "Termin anfragen" | No | Button-Text |
| `onButtonClick` | function | scroll to #kontakt | No | Click-Handler für den Button |
| `variant` | string | "default" | No | "default" oder "compact" |

### Verwendungsbeispiele

#### Home-Seite
```jsx
<CTASection
  eyebrow="Lass uns reden"
  headline="Bereit, eure Geschichte festzuhalten?"
  subline="Ob Paarshooting oder Hochzeit – ich freue mich darauf, eure besonderen Momente mit euch zu erleben und festzuhalten."
  buttonLabel="Jetzt anfragen"
/>
```

#### Paare-Seite
```jsx
<CTASection
  eyebrow="Paarshooting buchen"
  headline="Bereit für natürliche & authentische Paarbilder?"
  subline="Lasst uns gemeinsam eure Verbindung festhalten – ohne Posen, nur echte Momente."
  buttonLabel="Shooting anfragen"
/>
```

#### Hochzeiten-Seite
```jsx
<CTASection
  eyebrow="Hochzeitsreportage buchen"
  headline="Bereit euer Fotoalbum mit wunderschönen & natürlichen Hochzeitsbildern zu füllen?"
  subline="Von den ersten Vorbereitungen bis zum letzten Tanz – ich bin dabei und halte jeden emotionalen Moment fest."
  buttonLabel="Verfügbarkeit anfragen"
/>
```

#### Über mich-Seite
```jsx
<CTASection
  headline="Klingt das nach dem Fotografen, den ihr sucht?"
  subline="Dann lasst uns kennenlernen! Schreibt mir und erzählt von euren Plänen."
  buttonLabel="Kontakt aufnehmen"
  variant="compact"
/>
```

#### Mit Custom Click Handler
```jsx
<CTASection
  headline="Noch Fragen?"
  subline="Schaut in meinen FAQ-Bereich oder schreibt mir direkt."
  buttonLabel="Zu den FAQs"
  onButtonClick={() => navigate('/faq')}
/>
```

### Styling

Die Komponente verwendet:
- Gradient-Hintergrund (offwhite)
- Responsive Layout (Column → Row auf Desktop)
- Outline-Button mit Hover-Effekt
- Arrow-Icon mit Animation
- Barrierefreie ARIA-Labels

### Accessibility Features

- `type="button"` auf Button-Element
- Sinnvolle `aria-label` mit Kontext
- `aria-hidden="true"` auf dekorativem SVG-Icon
- Keyboard-Navigation funktioniert out-of-the-box
- Fokus-States für Button vorhanden (via Tailwind)
