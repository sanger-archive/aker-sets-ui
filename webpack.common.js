const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app/client',

  entry: {
    common: ['babel-polyfill'],
    'set-shaper': './set_shaper',
    'search': './search'
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
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'), // Builds a common.js of code shared between entry points
    new webpack.DefinePlugin({
      'process.env.SETS_SERVICE_API': '"set_service/api/v1"',
      'process.env.STAMPS_SERVICE_API': '"permission_service/api/v1"',
      'process.env.MATERIAL_SERVICE': '"material_service"'
    })
  ]
}
