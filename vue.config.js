const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    publicPath: './',
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    productionSourceMap: false,
    devServer: {
        port: 8081,
        hot: true,
        open: 'Google Chrome',
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://101.132.144.179:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'css': resolve('src/assets/css'),
                'images': resolve('src/assets/images'),
                'views': resolve('src/views'),
                'components': resolve('src/components'),
                'api': resolve('src/api'),
                'mixins': resolve('src/mixins'),
                'store': resolve('src/store'),
                'service': resolve('src/service'),
                'util': resolve('src/util'),
                'middleware': resolve('src/middleware'),
                'form': resolve('src/form')
            }
        }
    }
}