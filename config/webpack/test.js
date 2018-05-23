process.env.NODE_ENV = process.env.NODE_ENV || 'test'

const environment = require('./environment')

// https://github.com/rails/webpacker/blob/master/docs/testing.md
environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'

module.exports = environment.toWebpackConfig()
