/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

export default nextConfig;