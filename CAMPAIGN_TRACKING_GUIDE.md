# Email Campaign Tracking - Implementation Guide

## Overview
The MYRK landing page now has full email campaign tracking capabilities. This allows you to track registrations from email blasts and other marketing campaigns.

## What Was Implemented

### 1. **UTM Parameter Tracking**
- Automatically captures campaign data when users visit via tracked links
- Data persists for 30 days in browser storage
- Tracks: source, medium, campaign name, content, and referrer

### 2. **Firebase Data Model**
- Enhanced registration data to include campaign information
- All new registrations automatically capture campaign data
- Backward compatible - existing registrations still work

### 3. **Analytics Dashboard**
- New "Campaigns" tab showing all campaign performance
- Campaign vs. Organic traffic breakdown
- Individual campaign statistics with conversion rates
- Traffic source analysis

### 4. **Automatic Capture**
- No manual work needed after setup
- Campaign data automatically attached to registrations
- Works across all pages on the site

---

## How To Use Campaign Tracking

### For Email Blasts (SendGrid, Mailchimp, etc.)

Instead of using the regular URL:
```
https://www.myrkechoes.com/
```

Use this format:
```
https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=YOUR_CAMPAIGN_NAME
```

### Example Campaign Links

**Friday Launch Email:**
```
https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=friday_launch_oct2024
```

**Week 2 Email:**
```
https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=week2_follow_up
```

**VIP Email List:**
```
https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=vip_early_access
```

**Social Media Post:**
```
https://www.myrkechoes.com/?utm_source=twitter&utm_medium=social&utm_campaign=launch_announcement
```

### UTM Parameter Breakdown

- **utm_source**: Where the traffic comes from (email, facebook, twitter, google, etc.)
- **utm_medium**: The type of marketing channel (blast, social, cpc, banner, etc.)
- **utm_campaign**: Your specific campaign name (use descriptive names)
- **utm_content** (optional): For A/B testing different versions
- **utm_term** (optional): For paid search keywords

---

## Setting Up in Email Platforms

### SendGrid
1. In your email template, replace all website links with the tracked version
2. The link will look normal to users, but includes tracking parameters

### Mailchimp
1. Mailchimp can automatically add UTM parameters
2. Go to Campaign Settings → Tracking → Google Analytics
3. Enable tracking and set your parameters

### Manual Emails
- Simply use the full URL with parameters when creating links

---

## Viewing Campaign Results

### Access the Analytics Dashboard
1. Go to: `https://www.myrkechoes.com/analytics`
2. Enter the password
3. Click on the "Campaigns" tab

### What You'll See
- **Campaign Performance Card**: Overview of campaign vs. organic traffic
- **Individual Campaign Stats**: 
  - Total registrations per campaign
  - First and last registration dates
  - Share of campaign traffic
  - Source and medium breakdown
- **Traffic Sources**: Which sources (email, social, etc.) perform best

### Key Metrics
- **Campaign Registrations**: Total people who registered via campaign links
- **Organic Registrations**: People who found the site directly
- **Campaign Rate**: Percentage of registrations from campaigns
- **Conversion Timeline**: When people registered after clicking

---

## Best Practices

### Naming Conventions
Use clear, descriptive campaign names:
- ✅ `friday_launch_oct2024`
- ✅ `influencer_collab_dec`
- ✅ `reddit_ama_promo`
- ❌ `campaign1`
- ❌ `test`

### Link Testing
Before sending the email:
1. Click your tracking link
2. Complete a test registration
3. Check the analytics dashboard to confirm it appears

### Multiple Campaigns
You can run multiple campaigns simultaneously:
- Each gets its own tracking
- Compare performance side-by-side in dashboard
- Track which campaigns convert best

---

## Technical Details

### Data Persistence
- Campaign data stored in browser for 30 days
- If user returns within 30 days, original campaign is credited
- After 30 days, new campaign data overwrites old

### Privacy & Compliance
- UTM parameters are standard marketing tracking
- No personal data collected through tracking
- Fully GDPR and privacy-compliant

### Compatibility
- Works on all browsers (desktop and mobile)
- No cookies required (uses localStorage)
- Falls back gracefully if tracking fails

---

## Testing the Implementation

### Test Scenario
1. Visit: `https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=test_campaign`
2. Complete the registration form
3. Go to the analytics dashboard
4. Check the "Campaigns" tab
5. You should see "test_campaign" with 1 registration

---

## Support & Questions

If you need help:
- Testing campaign links before Friday
- Setting up tracking in your email platform
- Understanding the analytics data
- Creating custom tracking for specific channels

Just let me know!

---

## Quick Reference

**Your Friday Email Link:**
```
https://www.myrkechoes.com/?utm_source=email&utm_medium=blast&utm_campaign=myrk_early_access
```

**Analytics Dashboard:**
```
https://www.myrkechoes.com/analytics
```

---

*Implementation Date: October 20, 2025*  
*Ready for Friday Email Blast*

