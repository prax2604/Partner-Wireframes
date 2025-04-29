/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  typescript: {
    // Ignore TypeScript errors during development and build
    ignoreBuildErrors: true
  },
  // Add this to disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true
  },
  // Enable static exports
  output: 'export',
  // Configure static export options
  trailingSlash: true,
  // Ensure we copy the public directory content as-is
  distDir: 'out',
  async redirects() {
    return [
      {
        source: '/partners',
        destination: '/partners.html',
        permanent: false,
      },
      {
        source: '/partners/:path*',
        destination: '/partners.html',
        permanent: false,
      },
      {
        source: '/partner-hub',
        destination: '/partner-hub/index.html',
        permanent: false,
      }
    ]
  }
};

module.exports = nextConfig; 