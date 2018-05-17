const webpack = require('webpack');
const config = require('./webpack.common.js');

const buildEntryPoint = function(entryPoint){
  return [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    entryPoint
  ]
}

let entry = Object.keys(config.entry)
              .reduce(function(memo, entry) {
                if (entry == 'common') {
                  memo[entry] = config.entry[entry];
                } else {
                  memo[entry] = buildEntryPoint(config.entry[entry]);
                }

                return memo;
              }, {})

module.exports = Object.assign({}, config, { entry: entry });

module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env.SETS_SERVICE_API': '"set_service/api/v1"',
    'process.env.STAMPS_SERVICE_API': '"permission_service/api/v1"',
    'process.env.MATERIAL_SERVICE': '"material_service"'
  })
)
