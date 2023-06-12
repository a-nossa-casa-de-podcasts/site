// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
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
  webpack5: true,
  webpack: function (config, options) {
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  }
})
