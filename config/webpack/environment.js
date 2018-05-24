const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

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

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

environment.plugins.append('NoEmitOnErrors', new webpack.NoEmitOnErrorsPlugin())

environment.service_api_urls = {
  'SET_SERVICE_API': JSON.stringify('/set_service/api/v1'),
  'STAMP_SERVICE_API': JSON.stringify('/permission_service/api/v1'),
  'MATERIAL_SERVICE': JSON.stringify('/material_service')
}

module.exports = environment
