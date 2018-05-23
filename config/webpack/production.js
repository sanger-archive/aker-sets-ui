process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.plugins.append('UglifyJs', new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"production"',
  'RELATIVE_URL_ROOT': '"/set-shaper"'
}))

environment.plugins.append('Define', new webpack.UglifyJsPlugin())

module.exports = environment.toWebpackConfig()
