/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js to use SWC compiler instead of Babel
  swcMinify: true,
  // Disabling webpack5 cache may help if there's a caching issue
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  // Using transpilePackages to ensure everything is compiled with SWC
  transpilePackages: [],
  experimental: {
    // Explicitly force SWC for all transformations
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
