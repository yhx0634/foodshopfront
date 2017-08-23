var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
