/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'i1.sndcdn.com', 'i.ytimg.com'],
  },
}

module.exports = nextConfig
