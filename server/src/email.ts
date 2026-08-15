import { Resend } from 'resend';

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactEmailParams) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not defined.');
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.TO_EMAIL || 'sahilsheikh261204@gmail.com';

  const data = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: toEmail,
    replyTo: email,
    subject: `Portfolio Contact — ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; background-color: #050505; color: #F5F5F5; border-radius: 8px;">
        <h2 style="color: #0AFFE7; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-top: 0;">
          NEW CONTACT SUBMISSION
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #888888; width: 100px; font-weight: bold;">NAME:</td>
            <td style="padding: 8px 0; color: #F5F5F5;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888888; font-weight: bold;">EMAIL:</td>
            <td style="padding: 8px 0; color: #0AFFE7;"><a href="mailto:${email}" style="color: #0AFFE7; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 16px; border-radius: 6px;">
          <p style="margin: 0 0 8px 0; color: #888888; font-size: 12px; font-family: monospace;">MESSAGE:</p>
          <p style="margin: 0; color: #F5F5F5; whitespace: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 11px; color: #555555; font-family: monospace;">
          Sent from sahilsheikh portfolio contact form. Hit reply to respond directly to ${name}.
        </p>
      </div>
    `,
  });

  return data;
}
