/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: false
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;