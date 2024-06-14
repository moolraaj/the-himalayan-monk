/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true
    },
    trailingSlash:true,
    async rewrites() {
        return [
          {
            source: '/about-us',
            destination: '/new',
          },
        ];
      },
};

export default nextConfig;
