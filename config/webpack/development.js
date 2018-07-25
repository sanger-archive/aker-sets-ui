process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const webpack = require('webpack')

environment.plugins.append('Define', new webpack.DefinePlugin(environment.service_api_urls))

module.exports = environment.toWebpackConfig()
