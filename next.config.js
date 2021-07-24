module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes packages that depend on fs/module module
      if (!isServer) {
        config.node = { fs: 'empty', module: 'empty' }
      }
  
      return config
    },
    webpack5: false,
    images: {
      domains: ['s3-us-west-2.amazonaws.com'],
    },
  }
  