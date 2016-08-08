const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app/client',

  entry: {
    'babel-polyfill': 'babel-polyfill',
    inbox: './inbox',
    'set-shaper': './set_shaper',
    'work-orders': './work_orders'
  },

  output: {
      path: __dirname + '/app/assets/javascripts',
      filename: '[name].js',
      publicPath: 'http://localhost:8080/'
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  },

  module: {
    loaders: [
      {
        test: /\.es6$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.NoErrorsPlugin(), // Pauses execution on error
    new webpack.optimize.CommonsChunkPlugin('common.js') // Builds a common.js of code shared between entry points
  ]

}