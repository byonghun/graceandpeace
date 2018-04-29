var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.jsx'),
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: parentDir + '/build',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/build'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loaders: ["style-loader", "css-loader", "less-loader"]
    }]
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.graphql', '.gql', '.web.js', '.js', '.jsx', '.css']
  }
};
