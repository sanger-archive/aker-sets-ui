const webpack = require('webpack');

var buildEntryPoint = function(entryPoint){
  return [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    entryPoint
  ]
}

module.exports = {
  context: __dirname + '/app/client',

  entry: {
    'babel-polyfill': 'babel-polyfill',
    inbox: buildEntryPoint('./inbox'),
    'set-shaper': buildEntryPoint('./set_shaper'),
    'work-orders': buildEntryPoint('./work_orders')
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
        loaders: ['react-hot', 'babel-loader'],
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