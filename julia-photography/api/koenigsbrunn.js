import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      category,
      startNumber,
      dressColor,
      email,
      phone,
      consentWhatsApp,
      directPurchase,
      watermarkOption,
      watermarkPackage,
    } = req.body;

    if (!name || !name.trim() || !email || !email.trim()) {
      return res.status(400).json({ error: 'Name und E-Mail sind Pflichtfelder.' });
    }
    if (!category || !category.trim()) {
      return res.status(400).json({ error: 'Kategorie ist ein Pflichtfeld.' });
    }
    if (!startNumber || !String(startNumber).trim()) {
      return res.status(400).json({ error: 'Startnummer ist ein Pflichtfeld.' });
    }
    if (!dressColor || !dressColor.trim()) {
      return res.status(400).json({ error: 'Farbe des Kleids ist ein Pflichtfeld.' });
    }
    if (!directPurchase && !watermarkOption) {
      return res.status(400).json({ error: 'Bitte wähle Direktkauf oder Fotos mit Wasserzeichen.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Ungültige E-Mail-Adresse.' });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP environment variables');
      return res.status(500).json({ error: 'Server-Konfigurationsfehler' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: SMTP_PORT === '465',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const escapeHtml = (text) => {
      if (text == null || text === '') return '';
      const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
      return String(text).replace(/[&<>"']/g, (m) => map[m]);
    };

    const yesNo = (v) => (v ? 'Ja' : 'Nein');

    const emailSubject = `Königsbrunn 2026 – Anmeldung: ${escapeHtml(name.trim())}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6; color: #333;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <tr>
                  <td style="background: linear-gradient(135deg, #8B7355 0%, #6B5844 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">
                      Königsbrunn 2026 – Neue Anmeldung
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.9; font-size: 14px;">
                      Julia Mayr Photography
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 40px 30px;">
                    <div style="background-color: #fafafa; border-left: 4px solid #8B7355; padding: 20px; margin-bottom: 20px; border-radius: 4px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong><br><span style="color: #2D2A26; font-size: 16px;">${escapeHtml(name)}</span></td></tr>
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Kategorie</strong><br><span style="color: #2D2A26; font-size: 16px;">${escapeHtml(category)}</span></td></tr>
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Startnummer</strong><br><span style="color: #2D2A26; font-size: 16px;">${escapeHtml(String(startNumber))}</span></td></tr>
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Farbe Kleid</strong><br><span style="color: #2D2A26; font-size: 16px;">${escapeHtml(dressColor)}</span></td></tr>
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</strong><br><a href="mailto:${escapeHtml(email)}" style="color: #8B7355; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
                        <tr><td style="padding: 6px 0;"><strong style="color: #2D2A26; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Handynummer</strong><br><span style="color: #2D2A26; font-size: 16px;">${escapeHtml(phone || '–')}</span></td></tr>
                      </table>
                    </div>
                    <div style="margin-top: 24px;">
                      <h2 style="margin: 0 0 12px 0; color: #2D2A26; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Optionen</h2>
                      <table role="presentation" style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2D2A26;">
                        <tr><td style="padding: 4px 0;">WhatsApp-Benachrichtigung bei Fotos:</td><td style="padding: 4px 0;">${yesNo(consentWhatsApp)}</td></tr>
                        <tr><td style="padding: 4px 0;">Direktkauf Serie (25€):</td><td style="padding: 4px 0;">${yesNo(directPurchase)}</td></tr>
                        <tr><td style="padding: 4px 0;">Fotos mit Wasserzeichen:</td><td style="padding: 4px 0;">${yesNo(watermarkOption)}${watermarkOption && watermarkPackage ? ` – ${escapeHtml(watermarkPackage)}` : ''}</td></tr>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0; color: #888; font-size: 12px;">Anmeldung über Königsbrunn 2026 (juliamayr.photo).</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Julia Mayr Photography" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      text: `Königsbrunn 2026 – Anmeldung\n\nName: ${name}\nKategorie: ${category}\nStartnummer: ${startNumber}\nFarbe Kleid: ${dressColor}\nE-Mail: ${email}\nHandy: ${phone || '–'}\nWhatsApp: ${yesNo(consentWhatsApp)}\nDirektkauf Serie (25€): ${yesNo(directPurchase)}\nMit Wasserzeichen: ${yesNo(watermarkOption)}${watermarkOption && watermarkPackage ? ` (${watermarkPackage})` : ''}`,
      html: emailHtml,
    });

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error: dbError } = await supabase.from('koenigsbrunn_anmeldungen').insert({
        name: name.trim(),
        category: category.trim(),
        start_number: String(startNumber).trim(),
        dress_color: dressColor?.trim() || null,
        email: email.trim(),
        phone: phone?.trim() || null,
        consent_whatsapp: !!consentWhatsApp,
        direct_purchase: !!directPurchase,
        watermark_option: !!watermarkOption,
        watermark_package: watermarkOption && watermarkPackage ? watermarkPackage : null,
      });
      if (dbError) {
        console.error('Koenigsbrunn DB insert error:', dbError);
      }
    }

    return res.status(200).json({ success: true, message: 'Anmeldung gesendet.' });
  } catch (error) {
    console.error('Koenigsbrunn form error:', error);
    return res.status(500).json({
      error: 'Ein Fehler ist aufgetreten. Bitte später erneut versuchen.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
