var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: "./main.js",
    output: { path: __dirname +'/output' },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'vue-style-loader','css-loader', 'sass-loader' ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
