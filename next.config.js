/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Performance optimizations for Replit environment
  experimental: {
    // optimizeCss: true, // Disabled due to missing critters dependency
    workerThreads: false, // Disable worker threads to reduce resource usage
    cpus: 1, // Limit to single CPU core
  },
  
  // Image optimization
  images: {
    domains: ['localhost', 'cdn.jsdelivr.net'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/figmaAssets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Enable webpack optimizations with resource limits
  webpack: (config, { dev, isServer }) => {
    // Limit memory usage and threads
    config.optimization.minimize = !dev;
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 10,
      maxAsyncRequests: 10,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all',
        },
      },
    };
    
    // Reduce resource consumption
    config.parallelism = 1;
    config.cache = false;
    
    return config;
  },
}

module.exports = nextConfig