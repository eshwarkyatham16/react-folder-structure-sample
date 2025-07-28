const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@app': path.resolve(__dirname, 'src/app'),
    '@core': path.resolve(__dirname, 'src/app/core'),
    '@features': path.resolve(__dirname, 'src/app/features'),
    '@shared': path.resolve(__dirname, 'src/app/shared'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@environments': path.resolve(__dirname, 'src/environments')
  })
);
