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
};

module.exports = nextConfig;
