/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn-old.brawlify.com'
      }
    ]
  }
}

export default nextConfig
