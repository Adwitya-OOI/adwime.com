const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});