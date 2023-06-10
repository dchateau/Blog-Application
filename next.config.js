const { language } = require("./constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: [language.en.route],
    defaultLocale: language.en.route,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://links.services.disqus.com/api/ping",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.youtube.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
