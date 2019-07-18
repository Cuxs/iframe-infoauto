const withSass = require('@zeit/next-sass')
const isProd = process.env.NODE_ENV !== 'production'

module.exports =withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  // assetPrefix: '/iframeInfoAuto', //para el deploy
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
