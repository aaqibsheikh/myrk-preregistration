import { NextApiRequest, NextApiResponse } from 'next';
import { sendPreRegistrationEmail, PreRegistrationEmailData } from '../../lib/email-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { testEmail } = req.body;

    if (!testEmail) {
      return res.status(400).json({ 
        message: 'Test email address is required' 
      });
    }

    // Create test data with Figma design context
    const testData: PreRegistrationEmailData = {
      fullName: 'Test Player',
      email: testEmail,
      platform: 'PC',
      registrationDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    // Send test email with new Figma-based template
    const emailSent = await sendPreRegistrationEmail(testData);

    if (emailSent) {
      res.status(200).json({ 
        message: 'Figma-based email sent successfully',
        testData,
        templateUsed: 'figma-based-template'
      });
    } else {
      res.status(500).json({ 
        message: 'Failed to send test email' 
      });
    }
  } catch (error) {
    console.error('Test API Error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error
    });
  }
}