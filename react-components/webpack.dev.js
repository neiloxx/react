const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
