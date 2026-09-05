import nodemailer from 'nodemailer';
import { checkSubmission } from './_botcheck.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Bot-Pruefung vor allem anderen. Wer haengen bleibt, bekommt die normale
    // Erfolgsantwort, damit ein Skript nicht merkt, dass es erkannt wurde.
    const check = checkSubmission(req);
    if (!check.ok) {
      console.log('Contact form: submission verworfen, Grund:', check.reason);
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get environment variables
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing environment variables:', {
        hasHost: !!SMTP_HOST,
        hasUser: !!SMTP_USER,
        hasPass: !!SMTP_PASS,
      });
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Prepare email content
    const emailSubject = `Neue Kontaktanfrage von ${firstName} ${lastName}`;
    const emailText = `
Neue Kontaktanfrage von der Website:

Name: ${firstName} ${lastName}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ''}

Nachricht:
${message}
    `.trim();

    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    };

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
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #8B7355 0%, #6B5844 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">
                      Neue Kontaktanfrage
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.9; font-size: 14px;">
                      Julia Mayr Photography
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <!-- Contact Information -->
                    <div style="background-color: #fafafa; border-left: 4px solid #8B7355; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #2D2A26; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Name</strong>
                            <span style="color: #2D2A26; font-size: 16px;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #2D2A26; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">E-Mail</strong>
                            <a href="mailto:${escapeHtml(email)}" style="color: #8B7355; text-decoration: none; font-size: 16px;">${escapeHtml(email)}</a>
                          </td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #2D2A26; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Telefon</strong>
                            <span style="color: #2D2A26; font-size: 16px;">${escapeHtml(phone)}</span>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>
                    
                    <!-- Message -->
                    <div style="margin-top: 30px;">
                      <h2 style="margin: 0 0 15px 0; color: #2D2A26; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Nachricht
                      </h2>
                      <div style="background-color: #fafafa; padding: 20px; border-radius: 4px; border: 1px solid #e5e5e5;">
                        <p style="margin: 0; color: #2D2A26; font-size: 15px; white-space: pre-wrap; line-height: 1.8;">${escapeHtml(message)}</p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
                    <p style="margin: 0; color: #888; font-size: 12px;">
                      Diese E-Mail wurde automatisch über das Kontaktformular auf juliamayr.photo gesendet.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Julia Mayr Photography" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

