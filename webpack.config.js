var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
   module: {
    loaders: [
      {
        test: /\/.js$/|/\.jsx$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      }
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  }
}
