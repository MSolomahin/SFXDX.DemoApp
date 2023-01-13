const {
  useBabelRc,
  override,
} = require('customize-cra')

module.exports = function override(config, env) {
  useBabelRc(),
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      loader: "@linaria/webpack-loader",
      options: {
        cacheDirectory: "./src/.linaria_cache",
        sourceMap: process.env.NODE_ENV !== "production"
      }
    });

  return config;
};