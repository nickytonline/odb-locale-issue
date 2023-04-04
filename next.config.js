/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: true,
    // These are all the locales you want to support in
    // your application
    locales: ["en", "fr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    domains: [
      {
        domain: "en.iamdev.fyi",
        defaultLocale: "en",
        locales: [],
      },
      {
        domain: "fr.iamdev.fyi",
        defaultLocale: "fr",
        locales: [],
      },
    ],
  },
};

module.exports = nextConfig;
