/*
 * 开发环境 
 * 
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
config.entry = ['webpack-hot-middleware/client', path.resolve(__dirname, '../app/index/index.js')];
config.plugins = [
	//webpack.optimize.OccurenceOrderPlugin is not a constructor
	//此问题一般出现在webpack 2中，解决办法很简单，将OccurenceOrderPlugin改为OccurrenceOrderPlugin即可。
	new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
    
];
// 动态向入口配置中注入 webpack-hot-middleware/client
		// var devClient = 'webpack-hot-middleware/client';
//var devClient = './build/dev-client';
//Object.keys(config.entry).forEach(function (name, i) {
//  var extras = [devClient]
//  config.entry[name] = extras.concat(config.entry[name])
//})

module.exports = config;