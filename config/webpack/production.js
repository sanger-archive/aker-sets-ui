process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const webpack = require('webpack')

environment.plugins.append('Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
  'RELATIVE_URL_ROOT': JSON.stringify('/set'),
  'SET_SERVICE_API': JSON.stringify('/set_service/api/v1'),
  'STAMP_SERVICE_API': JSON.stringify('/permission_service/api/v1'),
  'MATERIAL_SERVICE': JSON.stringify('/material_service')
}))

environment.plugins.append('UglifyJs', new webpack.optimize.UglifyJsPlugin())

module.exports = environment.toWebpackConfig()
