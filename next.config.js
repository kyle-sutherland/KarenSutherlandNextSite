const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n: {
    locales: ["en"], 
    defaultLocale: "en", 
  },
}

module.exports = withBundleAnalyzer({});
module.exports = nextConfig

