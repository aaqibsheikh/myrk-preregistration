// Email backend configuration
export const EMAIL_BACKEND_CONFIG = {
  // Development URL (when running locally)
  development: 'http://localhost:3001',
  
  // Production URL (Heroku app URL - replace with your actual Heroku app URL)
  production: 'https://myrk-email-backend.herokuapp.com',
  
  // Get the appropriate URL based on environment
  getUrl: () => {
    if (typeof window !== 'undefined') {
      // Client-side: use production URL for deployed frontend
      return EMAIL_BACKEND_CONFIG.production;
    } else {
      // Server-side: use environment-based URL
      return process.env.NODE_ENV === 'production' 
        ? EMAIL_BACKEND_CONFIG.production 
        : EMAIL_BACKEND_CONFIG.development;
    }
  }
};

// API endpoints
export const EMAIL_ENDPOINTS = {
  sendPreRegistrationEmail: `${EMAIL_BACKEND_CONFIG.getUrl()}/api/send-preregistration-email`,
  sendTestEmail: `${EMAIL_BACKEND_CONFIG.getUrl()}/api/send-test-email`,
  healthCheck: `${EMAIL_BACKEND_CONFIG.getUrl()}/api/health`
};
