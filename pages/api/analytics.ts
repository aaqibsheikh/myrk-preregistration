import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';

interface PreRegistrationData {
  fullName: string;
  email: string;
  platform?: string;
  agreeToUpdates: boolean;
  registeredAt: string;
}

interface AnalyticsResponse {
  success: boolean;
  data?: {
    totalRegistrations: number;
    recentRegistrations: number;
    emailDomains: { [key: string]: number };
    dailyRegistrations: { [key: string]: number };
    registrations: PreRegistrationData[];
  };
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyticsResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  // Note: Authentication is handled on the frontend
  // This API route is protected by the fact that it's not publicly accessible

  try {
    const preregistrationsRef = collection(db, "preregistrations");
    const snapshot = await getDocs(preregistrationsRef);
    
    const registrations: PreRegistrationData[] = [];
    const emailDomains: { [key: string]: number } = {};
    const dailyRegistrations: { [key: string]: number } = {};
    
    let totalCount = 0;
    let recentCount = 0;
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    snapshot.forEach((doc) => {
      const data = doc.data() as PreRegistrationData;
      registrations.push(data);
      totalCount++;
      
      // Check if registration is within last 7 days
      const registrationDate = new Date(data.registeredAt);
      if (registrationDate >= sevenDaysAgo) {
        recentCount++;
      }
      
      // Email domain analysis
      const domain = data.email.split('@')[1];
      emailDomains[domain] = (emailDomains[domain] || 0) + 1;
      
      // Daily registration tracking
      const dateKey = registrationDate.toISOString().split('T')[0];
      dailyRegistrations[dateKey] = (dailyRegistrations[dateKey] || 0) + 1;
    });
    
    // Sort by registration date (newest first)
    registrations.sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());
    
    res.status(200).json({
      success: true,
      data: {
        totalRegistrations: totalCount,
        recentRegistrations: recentCount,
        emailDomains,
        dailyRegistrations,
        registrations
      }
    });
    
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch analytics data' 
    });
  }
}
