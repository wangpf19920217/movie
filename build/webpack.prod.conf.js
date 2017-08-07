/*
	 生产环境 / 打包环境
 * 
 * */



var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将css提取出来打包
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');


config.output.publicPath = 'static/';
//https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html 
//将 .vue里的css 提取出来
config.module.rules =  [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
      }
    ]

config.plugins = [
    // 提取css为单文件
    new ExtractTextPlugin("../static/css/[name].css"),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;