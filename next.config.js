// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
    webpack(config) {
      config.resolve.alias['@'] = __dirname;
      return config;
    },
  };
  
  module.exports = nextConfig;
   
