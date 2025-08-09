import * as sgMail from '@sendgrid/mail';
import { generateSimpleEmailTemplate } from './email-template';

if (!process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  throw new Error("NEXT_PUBLIC_SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export interface PreRegistrationEmailData {
  fullName: string;
  email: string;
  platform?: string; // Made optional since dropdown is hidden
  registrationDate: string;
}

export async function sendPreRegistrationEmail(
  userData: PreRegistrationEmailData
): Promise<boolean> {
  try {
    const htmlContent = generateSimpleEmailTemplate(userData);
    
    const msg = {
      to: userData.email,
      from: {
        email: 'hello@penguinpixelworks.com',
        name: 'MYRK Game Team'
      },
      subject: '🎮 Welcome to MYRK: Echoes of the Forgotten!',
      html: htmlContent,
      text: `Welcome to MYRK, ${userData.fullName}! Your pre-registration has been confirmed. Prepare to awaken as a forgotten hero in a world torn by elemental chaos!`
    };

    await sgMail.send(msg);
    console.log('Pre-registration email sent successfully to:', userData.email);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}