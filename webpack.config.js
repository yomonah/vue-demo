/**
 * Created by yumengya on 2017/3/20
 * 配置的打包文件
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    //插件项
    plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('common.js'),
    //     new ExtractTextPlugin("style.css", {
    //         allChunks: true
    //     }),
    new webpack.NoErrorsPlugin()
  ],
    entry:[
        'webpack/hot/dev-server',
        path.resolve(__dirname,'./src/app.js'),
    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.less/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015','vue']
                } //备注：es2015用于支持ES6语法
            },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        less: ExtractTextPlugin.extract("css!less-loader")
    },
    devServer:{
        inline:true,
        hot:true,
        port:8080,
    }
};