# MYRK Landing Page - replit.md

## Overview

This is a React-based landing page for a game called MYRK, built with modern web technologies. The application uses Next.js 15 with React 18 and TypeScript, featuring a gaming-themed design with shadcn/ui components and Tailwind CSS styling.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with React 18 and TypeScript
- **Routing**: Next.js Pages Router for client-side and server-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS v3 with custom color variables and gradients
- **State Management**: React hooks and Firebase for state management
- **Build Tool**: Next.js with optimized builds and SSR support

### Backend Architecture
- **Framework**: Next.js API Routes (serverless functions)
- **Database**: Firebase Firestore for real-time data storage
- **Authentication**: Firebase Auth for user management
- **Development**: Next.js development server with hot module replacement

## Key Components

### Landing Page Sections
1. **Header**: Navigation with logo and menu items
2. **Hero**: Main banner with game title and call-to-action
3. **Game Features**: Showcase of key game mechanics
4. **Trailer/Gameplay**: Video preview section
5. **Exclusive Rewards**: Pre-registration incentives
6. **Pre-Registration**: User signup form
7. **Countdown Timer**: Launch countdown display
8. **Community Engagement**: Social media links and newsletter
9. **Storyline**: Game narrative and statistics
10. **Optional Features**: Creator profiles
11. **Footer**: Links and company information

### UI Component System
- Complete shadcn/ui component library with Radix UI primitives
- Custom Tailwind configuration with CSS variables for theming
- Responsive design with mobile-first approach
- Gradient backgrounds and gaming-themed styling

### Database Schema
- User management with username/password authentication
- Drizzle ORM with PostgreSQL dialect for type safety
- Zod validation schemas for data integrity

## Data Flow

1. **Frontend Requests**: React components make API calls using TanStack Query
2. **Backend Processing**: Express.js handles requests and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe data flow from database to frontend
5. **State Management**: TanStack Query caches and synchronizes server state

## External Dependencies

### Core Technologies
- React 18 with TypeScript for frontend development
- Express.js for backend API server
- PostgreSQL (Neon Database) for data persistence
- Drizzle ORM for database operations

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- shadcn/ui component library
- Lucide React for icons
- Custom fonts: Orbitron and Oxanium from Google Fonts

### Development Tools
- Vite for development server and build process
- ESBuild for backend bundling
- TypeScript for type safety
- PostCSS with Tailwind and Autoprefixer

## Deployment Strategy

### Development
- **Command**: `next dev -p 5000`
- **Process**: Runs Next.js development server with HMR on port 5000
- **Database**: Uses Firebase Firestore for real-time data storage

### Production Build
- **Build Command**: `next build`
- **Process**: Next.js builds optimized static and server-side pages
- **Start Command**: `next start -p 5000` runs the production server

### Database Management
- **Firebase**: Uses Firestore collections for data storage
- **Authentication**: Firebase Auth for user management
- **Real-time**: Firestore provides real-time data synchronization

### Environment Configuration
- **NEXT_PUBLIC_FIREBASE_API_KEY**: Required for Firebase connection
- **NEXT_PUBLIC_FIREBASE_PROJECT_ID**: Firebase project identifier
- **NEXT_PUBLIC_FIREBASE_APP_ID**: Firebase app identifier
- **NODE_ENV**: Controls development vs production behavior

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 30, 2025. Initial setup
- June 30, 2025. Added mobile-specific character images and fixed desktop positioning to match exact Figma designs for both desktop (node-id=60-2) and mobile (node-id=124-3) layouts
- June 30, 2025. Fixed logo to match exact Figma design, created active navigation pages (Features, Gameplay, Rewards, Community) with beautiful designs, activated all social media links with dummy URLs, and enhanced visual effects for 100% pixel-perfect matching
- July 3, 2025. Migrated from Express.js to Next.js 15 framework with proper SEO implementation, converted to Tailwind CSS v3, integrated Firebase for pre-registration form with validation, implemented functional countdown timer, added social media links to header and footer sections, created individual pages for Features/Gameplay/Rewards/Community with proper meta tags
- July 3, 2025. Removed Express.js completely, cleaned up project structure to use only Next.js 15 with Pages Router, removed unused dependencies (tsx, express, vite, drizzle), fixed next.config.js deprecation warnings, application now runs on port 5000 with pure Next.js architecture
- July 3, 2025. Fixed app startup issue by creating bridge script in server/index.ts that properly launches Next.js while maintaining compatibility with existing workflow configuration, installed missing tsx dependency, app now runs successfully on port 5000
- July 3, 2025. Completed cleanup by removing server folder and Express dependencies, updated package.json scripts to use proper Next.js commands, converted next.config.js and postcss.config.js to CommonJS syntax, app now runs with pure Next.js architecture on port 5000
- July 3, 2025. Fixed image loading issues by moving figmaAssets folder to public directory for proper Next.js static asset serving, all images now accessible and loading correctly, application fully functional
- July 3, 2025. Completed all navigation pages (Features, Gameplay, Rewards, Community) with comprehensive content including hero sections, detailed feature grids, interactive cards, statistics, call-to-action buttons, and proper SEO meta tags, all pages fully functional with consistent design
- July 4, 2025. Implemented comprehensive design consistency improvements: added global typography system with Orbitron/Oxanium fonts, enhanced CSS utility classes for consistent spacing/margins, created interactive pre-registration modal with form validation and smooth animations, optimized button interactivity with hover effects and shine animations, added performance optimizations to Next.js configuration including image optimization and caching headers, implemented GPU-accelerated animations and smooth transitions across all pages
- July 4, 2025. Fixed design inconsistencies across all navigation pages: standardized headline sizes with responsive typography classes (heading-primary, heading-secondary, heading-tertiary), implemented uniform spacing system with section-padding and container-padding classes, created consistent icon styling with icon-container and icon-image classes for uniform colors and sizing, resolved header overlap issue on home page hero section by adjusting positioning, applied consistent text-body classes for typography uniformity across Features, Gameplay, Rewards, and Community pages
- July 4, 2025. Completed comprehensive typography and spacing fixes across all pages: resolved hero section banner text overlap with header by adjusting positioning, systematically updated all section containers to use consistent content-max-width and container-padding classes, standardized all typography to use proper CSS utility classes (heading-primary, heading-secondary, heading-tertiary, text-body, text-body-large), ensured uniform spacing with section-padding classes, fixed icon colors and sizing consistency throughout all navigation pages, all pages now have consistent design and responsive layout
- July 8, 2025. Completed migration from Replit Agent to Replit environment: resolved PostCSS configuration issues with Tailwind CSS v3, optimized Node.js memory usage with resource constraints, added missing gamified features including Frozen Vault section with interactive task completion, Signal from the Void newsletter signup with cosmic transmission theme, floating chatbot "Myrk the Prophet" with mystical design, all components integrate seamlessly with existing design system and maintain responsive layout