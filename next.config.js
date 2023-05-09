module.exports = {
    pageExtensions: ['js'],
    webpack: (config) => {
      config.resolve.alias['~'] = __dirname;
      return config;
    },
  };