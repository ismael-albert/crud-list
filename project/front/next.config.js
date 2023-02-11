/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
//  rewrites() {
//     return [
//       {
//         source: ':path*',
//         destination: ':path*', // Proxy to Backend
//       },
//     ]
//   }

}

module.exports = nextConfig
