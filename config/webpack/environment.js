const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

environment.plugins.append('NoEmitOnErrors', new webpack.NoEmitOnErrorsPlugin())

module.exports = environment
