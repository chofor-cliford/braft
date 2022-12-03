/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig
