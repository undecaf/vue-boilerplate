const webpackConfig = require('./node_modules/@vue/cli-service/webpack.config.js')

module.exports = function(config) {
    config.set({

        // Base path for all patterns (eg. files, exclude)
        basePath: '',

        // Test frameworks (https://npmjs.org/browse/keyword/karma-adapter)
        frameworks: ['mocha', 'chai'],

        // Files to load into the browser (including required() files)
        files: [
            'tests/unit/**/*.spec.js',
        ],

        // Excluded files
        exclude: [
        ],

        // Files to preprocess before being served (including required() files)
        // (https://npmjs.org/browse/keyword/karma-preprocessor)
        preprocessors: {
            'tests/unit/**/*.js': ['webpack'],
            '**/*.js': ['sourcemap'],
        },

        webpack: {
            ...webpackConfig,
            entry: undefined,   // use preprocessed files as entry points
            devtool: 'inline-source-map',
        },

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only',
        },

        // Test result reporters (https://npmjs.org/browse/keyword/karma-reporter)
        reporters: ['mocha'],

        // Web server port
        port: 9876,

        // Show colors in reporter and log output
        colors: true,

        // Log level: config.{LOG_DISABLE,LOG_ERROR,LOG_WARN,LOG_INFO,LOG_DEBUG}
        logLevel: config.LOG_INFO,

        // Watch files and execute tests on change
        autoWatch: false,

        // Launch these browsers (https://npmjs.org/browse/keyword/karma-launcher)
        browsers: [
            // 'Chrome',
            // 'Chromium',
            // 'Firefox',
            // 'ChromeHeadless',
            'ChromiumHeadless',
            // 'FirefoxHeadless',
        ],

        // Exit after running the tests
        singleRun: true,

        // Number of browsers to be launched simultaneously
        concurrency: Infinity,
    })
}
