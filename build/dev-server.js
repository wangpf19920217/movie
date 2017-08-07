var opn = require('opn');//开启浏览器并进入指定url
var path = require('path'); //路径工具
var express = require('express'); //利用express开启服务
var webpack = require('webpack');// 打包编译工具
var config = require('./webpack.dev.conf');

var app = express();

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件  将打包好的脚本写在内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,  
    stats: {
        colors: true,
        chunks: true
    }
})


// 注册中间件
app.use(devMiddleware);

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})
