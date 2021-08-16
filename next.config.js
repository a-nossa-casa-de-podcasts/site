// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'source.unsplash.com']
  },
  webpack5: true,
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
})
