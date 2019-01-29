var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: path.join(__dirname, 'src', 'App'),
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ],
          plugins: [ 'transform-class-properties' ]
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};