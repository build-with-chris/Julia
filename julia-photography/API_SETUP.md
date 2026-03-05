# Kontaktformular API Setup

## Benötigte Environment Variables in Vercel

Das Kontaktformular verwendet SMTP (Gmail) für den E-Mail-Versand. Folgende Environment Variables müssen in Vercel konfiguriert werden:

### Erforderliche Variablen:

1. **SMTP_HOST**
   - Der SMTP-Server Hostname
   - Für Gmail: `smtp.gmail.com`

2. **SMTP_PORT**
   - Der SMTP-Port
   - Für Gmail mit TLS: `587`
   - Für Gmail mit SSL: `465`

3. **SMTP_USER**
   - Deine E-Mail-Adresse für die SMTP-Authentifizierung
   - Format: `juliamayr.photo@gmail.com`

4. **SMTP_PASS**
   - Dein Gmail App-Passwort (nicht dein normales Passwort!)
   - Erstelle ein App-Passwort unter: https://myaccount.google.com/apppasswords
   - Format: `wrqybstausbgpdaj` (16 Zeichen)

5. **TO_EMAIL** (optional)
   - Die E-Mail-Adresse, an die Kontaktanfragen gesendet werden sollen
   - Standard: Verwendet `SMTP_USER` wenn nicht gesetzt
   - Format: `juliamayr.photo@gmail.com`

## Gmail App-Passwort Setup

1. Gehe zu deinem Google Account: https://myaccount.google.com
2. Sicherheit → 2-Schritt-Verifizierung (muss aktiviert sein)
3. App-Passwörter → App auswählen → "Mail" → Gerät auswählen → "Andere"
4. Kopiere das generierte 16-stellige Passwort
5. Füge es als `SMTP_PASS` in Vercel hinzu

## Vercel Setup

1. Gehe zu deinem Projekt in Vercel
2. Settings → Environment Variables
3. Füge alle SMTP-Variablen hinzu
4. Stelle sicher, dass sie für "Production", "Preview" und "Development" gesetzt sind

## API Endpoint

Das Kontaktformular sendet POST-Requests an `/api/contact` mit folgendem Format:

```json
{
  "firstName": "Max",
  "lastName": "Mustermann",
  "email": "max@example.com",
  "phone": "+49 123 456789",
  "message": "Ich interessiere mich für ein Shooting..."
}
```

---

## Königsbrunn 2026 Anmeldung (`/api/koenigsbrunn`)

Die Anmeldungen werden per E-Mail versendet (gleiche SMTP-Variablen wie oben) und zusätzlich in Supabase gespeichert.

### Supabase (optional, für DB-Speicherung)

Falls gesetzt, wird jede Anmeldung in die Tabelle `koenigsbrunn_anmeldungen` geschrieben:

1. **SUPABASE_URL**
   - Projekt-URL, z. B. `https://erviwtqmxaoczqewrffc.supabase.co`

2. **SUPABASE_SERVICE_ROLE_KEY**
   - Service-Role-Key aus dem Supabase Dashboard: Project Settings → API → `service_role` (secret).  
   - Nur im Backend (Vercel) verwenden, nie im Frontend.

Ohne diese Variablen funktioniert die Anmeldung weiterhin (nur E-Mail, kein DB-Eintrag).

---

## Fehlerbehebung

- Stelle sicher, dass alle Environment Variables in Vercel gesetzt sind
- Prüfe die Vercel Logs für Fehlermeldungen
- Stelle sicher, dass die FROM_EMAIL Domain in Resend verifiziert ist

