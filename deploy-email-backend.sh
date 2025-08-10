#!/bin/bash

# MYRK Email Backend Deployment Script
# This script helps deploy the email backend to Heroku

set -e

echo "🚀 MYRK Email Backend Deployment Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "email-backend/package.json" ]; then
    echo "❌ Error: email-backend directory not found. Please run this script from the project root."
    exit 1
fi

# Navigate to email backend directory
cd email-backend

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

echo "🧪 Running tests..."
npm test

echo "✅ Build completed successfully!"

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "❌ Heroku CLI not found. Please install it first:"
    echo "   https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Check if user is logged into Heroku
if ! heroku auth:whoami &> /dev/null; then
    echo "🔐 Please log in to Heroku:"
    heroku login
fi

echo "🌐 Deploying to Heroku..."
echo "   Note: Make sure you have set the SENDGRID_API_KEY environment variable:"
echo "   heroku config:set SENDGRID_API_KEY=your_api_key_here"

# Deploy to Heroku
git add .
git commit -m "Deploy email backend $(date)"
git push heroku main

echo "✅ Deployment completed!"
echo "🔗 Your email backend is now available at:"
heroku info -s | grep web_url | cut -d= -f2

echo ""
echo "📋 Next steps:"
echo "1. Test the health endpoint: $(heroku info -s | grep web_url | cut -d= -f2)/api/health"
echo "2. Update the frontend configuration with the new URL"
echo "3. Test the email functionality"

cd ..
