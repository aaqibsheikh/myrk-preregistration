import { NextApiRequest, NextApiResponse } from 'next';
import { sendPreRegistrationEmail, PreRegistrationEmailData } from '../../lib/email-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, platform } = req.body;

    // Validate required fields (platform is now optional)
    if (!fullName || !email) {
      return res.status(400).json({ 
        message: 'Missing required fields: fullName, email' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      });
    }

    // Prepare email data
    const emailData: PreRegistrationEmailData = {
      fullName,
      email,
      platform: platform || 'Not specified', // Default value if platform is not provided
      registrationDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    // Send email
    const emailSent = await sendPreRegistrationEmail(emailData);

    if (emailSent) {
      res.status(200).json({ 
        message: 'Pre-registration email sent successfully' 
      });
    } else {
      res.status(500).json({ 
        message: 'Failed to send email' 
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
}