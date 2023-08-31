const { withCoalescedInvoke } = require("next/dist/lib/coalesced-function")

const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  },
}

module.exports = nextConfig
