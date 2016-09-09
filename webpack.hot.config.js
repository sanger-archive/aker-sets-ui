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