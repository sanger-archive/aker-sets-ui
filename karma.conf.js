// Karma configuration
// Generated on Tue Aug 09 2016 10:44:30 GMT+0100 (BST)
var webpack = require('webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/js/test_loader.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/client/**/*.es6': ['webpack', 'sourcemap'],
      'spec/js/test_loader.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        noParse: [
            /\/sinon\.js/
        ],
        loaders: [
          {
            test: /[\.es6, \.js]$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.json$/,
            loader: 'json',
          }
        ]
      },
      // This is allow enzyme to work
      // https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      plugins: [
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })
      ],
      resolve: { alias: { sinon: 'sinon/pkg/sinon.js' } }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
        noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
