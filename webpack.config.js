var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './_js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  watch: true,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};
