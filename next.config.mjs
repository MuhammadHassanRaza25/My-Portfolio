/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: 'avatars.githubusercontent.com' },
          { hostname: 'assets.aceternity.com'},
        ],
      },
};

export default nextConfig;
