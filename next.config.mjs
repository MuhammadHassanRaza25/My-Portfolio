/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: 'avatars.githubusercontent.com' },
          { hostname: 'assets.aceternity.com'},
          { hostname: 'images.unsplash.com'},
        ],
      },
};

export default nextConfig;

