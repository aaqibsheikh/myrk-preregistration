import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Block analytics page from being accessed without proper authentication
  if (pathname.startsWith('/analytics')) {
    // Check for authentication token in cookies or headers
    const authToken = request.cookies.get('analytics_auth')?.value;
    
    if (!authToken || authToken !== 'authenticated') {
      // Redirect to a 404 page or return unauthorized
      return new NextResponse('Access Denied', { 
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  }
  
  // Block analytics API from being accessed without proper token
  if (pathname.startsWith('/api/analytics')) {
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.ANALYTICS_API_TOKEN;
    
    if (!expectedToken || !authHeader || authHeader !== `Bearer ${expectedToken}`) {
      return new NextResponse('Unauthorized', { 
        status: 401,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/analytics/:path*',
    '/api/analytics/:path*',
  ],
};
