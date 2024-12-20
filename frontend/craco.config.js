// craco.config.js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.plugins = [
        ...(webpackConfig.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json',
        }),
      ];
      return webpackConfig;
    },
  },
};
