// next.config.js
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination: `${process.env.SERVER_URL}/graphql`,
      }
    ];
  },

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;
