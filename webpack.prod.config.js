const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = {
  context: __dirname + '/app/client',

  entry: {
    'babel-polyfill': 'babel-polyfill',
    inbox: './inbox',
    'set-shaper': './set_shaper',
    'work-orders': './work_orders'
  },

  output: {
      path: __dirname + '/public/assets',
      filename: '[name]-[chunkhash].js',
      chunkFilename: '[id]-[chunkhash].js',
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
    new webpack.optimize.CommonsChunkPlugin({
      // name: ['inbox', 'set-shaper', 'work-orders'],
      name: 'common',
      filename: 'common-[chunkhash].js',
      children: true
    }), // Builds a common.js of code shared between entry points
    new ChunkManifestPlugin({ // Allows exporting a JSON file that maps chunk ids to their resulting asset files
      filename: 'webpack-common-manifest.json',
      manfiestVariable: 'webpackBundleManifest',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]

}