# MYRK Deployment Guide

This guide covers the deployment of the restructured MYRK application with separate frontend and email backend services.

## Architecture Overview

- **Frontend**: Next.js static site deployed on SiteGround
- **Email Backend**: Node.js + Express.js service deployed on Heroku
- **Database**: Firebase Firestore (unchanged)

## Email Backend Deployment (Heroku)

### 1. Prepare the Email Backend

1. Navigate to the email backend directory:
   ```bash
   cd email-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

### 2. Deploy to Heroku

1. Create a new Heroku app:
   ```bash
   heroku create myrk-email-backend
   ```

2. Set environment variables:
   ```bash
   heroku config:set SENDGRID_API_KEY=your_sendgrid_api_key_here
   heroku config:set NODE_ENV=production
   ```

3. Deploy the app:
   ```bash
   git add .
   git commit -m "Initial email backend deployment"
   git push heroku main
   ```

4. Verify deployment:
   ```bash
   heroku open
   ```
   Visit: `https://your-app-name.herokuapp.com/api/health`

### 3. Update Frontend Configuration

Update the email backend URL in `lib/email-config.ts`:

```typescript
export const EMAIL_BACKEND_CONFIG = {
  development: 'http://localhost:3001',
  production: 'https://your-actual-heroku-app-name.herokuapp.com', // Update this
  // ... rest of config
};
```

## Frontend Deployment (SiteGround)

### 1. Build the Frontend

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Export static files:
   ```bash
   npm run export
   ```

### 2. Deploy to SiteGround

1. Upload the contents of the `out` directory to your SiteGround hosting
2. Configure your domain to point to the uploaded files
3. Set up SSL certificate if needed

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### Email Backend (Heroku)
```
SENDGRID_API_KEY=your_sendgrid_api_key
NODE_ENV=production
```

## Testing the Integration

### 1. Test Email Backend

1. Health check:
   ```bash
   curl https://your-heroku-app.herokuapp.com/api/health
   ```

2. Test email sending:
   ```bash
   curl -X POST https://your-heroku-app.herokuapp.com/api/send-test-email \
     -H "Content-Type: application/json" \
     -d '{"testEmail": "your-test-email@example.com"}'
   ```

### 2. Test Frontend Integration

1. Visit your deployed frontend
2. Submit a pre-registration form
3. Check that:
   - Data is saved to Firebase
   - Confirmation email is sent via the Heroku backend
   - Success modal appears

## Monitoring and Maintenance

### Email Backend Monitoring

1. **Heroku Logs**:
   ```bash
   heroku logs --tail
   ```

2. **Health Check**: Monitor the `/api/health` endpoint

3. **SendGrid Dashboard**: Monitor email delivery rates

### Frontend Monitoring

1. **SiteGround Analytics**: Monitor site performance
2. **Firebase Console**: Monitor database usage
3. **Browser Console**: Check for any frontend errors

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the Heroku app URL is in the CORS allowed origins
2. **Email Not Sending**: Check SendGrid API key and quota
3. **Build Failures**: Verify all dependencies are installed
4. **Deployment Issues**: Check Heroku build logs

### Debug Steps

1. Check Heroku logs:
   ```bash
   heroku logs --tail
   ```

2. Test email backend locally:
   ```bash
   cd email-backend
   npm run dev
   ```

3. Test frontend locally:
   ```bash
   npm run dev
   ```

## Security Considerations

1. **API Keys**: Never commit API keys to version control
2. **CORS**: Restrict CORS origins to your actual domains
3. **Rate Limiting**: The email backend includes rate limiting
4. **HTTPS**: Ensure all production URLs use HTTPS

## Backup and Recovery

1. **Database**: Firebase provides automatic backups
2. **Code**: Use Git for version control
3. **Environment Variables**: Document all environment variables
4. **Deployment**: Keep deployment scripts and configurations

## Performance Optimization

1. **Email Backend**: Monitor Heroku dyno usage
2. **Frontend**: Optimize images and assets
3. **Database**: Monitor Firebase usage and costs
4. **CDN**: Consider using a CDN for static assets

## Support

For issues or questions:
1. Check the logs first
2. Review this deployment guide
3. Check the README files in both frontend and email-backend directories
4. Contact the development team
