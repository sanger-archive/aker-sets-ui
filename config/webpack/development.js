process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const webpack = require('webpack')

environment.plugins.append('Define', new webpack.DefinePlugin({
  'SET_SERVICE_API': JSON.stringify('/set_service/api/v1'),
  'STAMP_SERVICE_API': JSON.stringify('/permission_service/api/v1'),
  'MATERIAL_SERVICE': JSON.stringify('/material_service')
}))

module.exports = environment.toWebpackConfig()
