/*
 但是这样开发模式下的确是成功了，
 可是我们直接修改了 webpack.config.js 文件，这就意味着当我们执行 构建命令 的时候，配置变了，那么我们的构建也跟着变了，
 所以，一个好的方式是，不去修改webpack.config.js文件，
 我们在build目录下新建一个 webpack.dev.conf.js文件，
 意思是开发模式下要读取的配置文件
 
 简言： 这个是开发模式 不去修改webpage.config全局数据
 * 
 * */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');

// 引入基本配置
var config = require('./webpack.config');


config.output.publicPath = '/';

config.plugins = [
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
    
];

module.exports = config;