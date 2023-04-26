/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
  module.exports = withPWA({
    pwa: {
      dest: "public",
      // disable: process.env.NODE_ENV === 'development',
      disable: false,
      register: true,
      skipWaiting: true,
    },
  });
} else {
  module.exports = nextConfig;
}


