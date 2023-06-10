// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'cloudinary.com',
      'source.unsplash.com',
      'ancp-r3q36.ondigitalocean.app',
      'ondigitalocean.app'
    ]
  },
  webpack5: false,
  webpack: function (config, options) {
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  }
});
module.exports = nextConfig;
