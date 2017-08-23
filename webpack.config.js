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
    },
    //使用 ant-design 的配置文件
    { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  }
};
