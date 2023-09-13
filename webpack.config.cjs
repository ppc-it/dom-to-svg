const { resolve } = require('path')
module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'dom2svg.js',
        path: resolve(__dirname, 'dist'),
        library: 'dom2svg'
    },
    devServer: {
        static: {
            directory: resolve(__dirname, '')
        }
    },
    target: 'browserslist',
    mode: 'production'
}