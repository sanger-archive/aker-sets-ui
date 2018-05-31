process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const webpack = require('webpack')

environment.plugins.append('Define', new webpack.DefinePlugin(Object.assign({}, environment.service_api_urls, {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'RELATIVE_URL_ROOT': JSON.stringify('/set-shaper'),
})))

environment.plugins.append('UglifyJs', new webpack.optimize.UglifyJsPlugin())

module.exports = environment.toWebpackConfig()
