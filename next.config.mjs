/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "6500",
        pathname: "/static/images/**",
      },
      {
        protocol: "https",
        hostname: "torino-api-ecru.vercel.app",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
