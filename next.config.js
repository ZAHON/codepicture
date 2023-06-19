/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

module.exports = nextConfig;
