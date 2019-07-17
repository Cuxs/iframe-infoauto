const withSass = require('@zeit/next-sass')

module.exports =withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
