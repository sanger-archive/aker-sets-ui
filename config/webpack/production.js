process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

// Config for building a "Common Chunk" file
// From https://github.com/rails/webpacker/blob/master/docs/webpack.md
environment.plugins.append(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  })
)

environment.plugins.append(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
)

environment.plugins.append('UglifyJs', new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"production"',
  'RELATIVE_URL_ROOT': '"/set-shaper"'
}))

environment.plugins.append('Define', new webpack.UglifyJsPlugin())

module.exports = environment.toWebpackConfig()
