const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = isDev =>
  !isDev ? {} : {
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      contentBase: path.join(__dirname, 'public'),
    }
  }

module.exports = (develop) => ({
  mode: develop ? 'development' : 'production',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  ...devServer(develop),
})
