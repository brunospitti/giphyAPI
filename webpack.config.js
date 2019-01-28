var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'App'),
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
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