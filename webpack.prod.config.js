const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const config = require('./webpack.common.js');

module.exports = Object.assign({}, config, {

  output: {
    path: __dirname + '/public/assets',
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[id]-[chunkhash].js',
    publicPath: 'http://localhost:8080/'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.NoErrorsPlugin(), // Pauses execution on error
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[chunkhash].js'
    }), // Builds a common.js of code shared between entry points
    new ChunkManifestPlugin({ // Allows exporting a JSON file that maps chunk ids to their resulting asset files
      filename: 'webpack-common-manifest.json',
      manfiestVariable: 'webpackBundleManifest',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'RELATIVE_URL_ROOT': '"/set-shaper"'
    })
  ]
});
