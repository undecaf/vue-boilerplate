// Uncomment this to run the Bundle Analyzer after each production build
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// Whether or not to include the Vue runtime compiler
const runtimeCompiler = false


const common = {
    publicPath: './',

    configureWebpack: {
        output: {
            devtoolModuleFilenameTemplate,
            devtoolFallbackModuleFilenameTemplate: 'webpack-fallback:///[resource-path]?[hash]',
        },
    },

    chainWebpack: config => {
    },

    productionSourceMap: false,
    runtimeCompiler,
}

const configs = {
    development: extend(common,
        {
            devtool: 'eval-source-map',
            module: {
                rules: [
                    {
                        use: ['source-map-loader'],
                        enforce: 'pre',
                        test: /\.js$/,
                        exclude: [
                            // Avoid warnings about sourcemaps that are missing in some packages
                            RegExp('/vue-material/'),
                        ],
                    },
                ],
            },
        },
        config => config.plugins.delete('prefetch')),

    test: common,

    production: extend(common,
        {
            plugins: typeof BundleAnalyzerPlugin !== 'undefined' ? [new BundleAnalyzerPlugin()] : [],
            optimization: {
                splitChunks: {
                    maxSize: 250000,
                }
            }
        }),
}


// Returns an extended base configuration
function extend(base, configureWebpack = {}, chainWebpack = () => {}) {
    return {
        ...base,
        configureWebpack: {
            ...base.configureWebpack,
            ...configureWebpack,
            plugins: [
                ...(base.configureWebpack.plugins || []),
                ...(configureWebpack.plugins || [])
            ],
        },
        chainWebpack: config => {
            base.chainWebpack(config)
            chainWebpack(config)
        },
    }
}

// Preserves source file paths in browser devtools
function devtoolModuleFilenameTemplate(info) {
    if (info.resourcePath.match(/\.(vue|css)$/) && info.allLoaders) {
        return `webpack:///${info.resourcePath}?${info.hash}`

    } else {
        // Make sure no file ends up outside 'sources://'
        let here = info.resourcePath.startsWith('./') ? '' : './'
        return `sources://${here}${info.resourcePath}`
    }
}


module.exports = configs[process.env.NODE_ENV] || configs.production
