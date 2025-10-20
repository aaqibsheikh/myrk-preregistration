import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Campaign tracking utilities
export interface CampaignData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page?: string;
  referrer?: string;
}

/**
 * Extracts UTM parameters from URL
 */
export const getUTMParams = (url: string): CampaignData => {
  try {
    const urlObj = new URL(url);
    const params = urlObj.searchParams;
    
    return {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_content: params.get('utm_content') || undefined,
      utm_term: params.get('utm_term') || undefined,
    };
  } catch (error) {
    console.error('Error parsing UTM parameters:', error);
    return {};
  }
};

/**
 * Saves campaign data to localStorage
 */
export const saveCampaignData = (campaignData: CampaignData): void => {
  try {
    // Only save if we have at least one UTM parameter
    if (campaignData.utm_source || campaignData.utm_medium || campaignData.utm_campaign) {
      localStorage.setItem('campaign_data', JSON.stringify(campaignData));
      // Set expiry (30 days)
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 30);
      localStorage.setItem('campaign_data_expiry', expiry.toISOString());
    }
  } catch (error) {
    console.error('Error saving campaign data:', error);
  }
};

/**
 * Retrieves campaign data from localStorage
 */
export const getCampaignData = (): CampaignData => {
  try {
    // Check if data has expired
    const expiry = localStorage.getItem('campaign_data_expiry');
    if (expiry && new Date(expiry) < new Date()) {
      localStorage.removeItem('campaign_data');
      localStorage.removeItem('campaign_data_expiry');
      return {};
    }

    const storedData = localStorage.getItem('campaign_data');
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error('Error retrieving campaign data:', error);
  }
  return {};
};

/**
 * Captures and saves campaign tracking data from current URL
 */
export const captureCampaignData = (): CampaignData => {
  if (typeof window === 'undefined') return {};
  
  try {
    const utmParams = getUTMParams(window.location.href);
    const campaignData: CampaignData = {
      ...utmParams,
      landing_page: window.location.pathname,
      referrer: document.referrer || undefined,
    };
    
    // Save to localStorage if we have UTM params
    if (utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign) {
      saveCampaignData(campaignData);
    }
    
    return campaignData;
  } catch (error) {
    console.error('Error capturing campaign data:', error);
    return {};
  }
};
