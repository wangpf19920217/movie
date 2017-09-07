// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var path = require('path')
var opn = require('opn');//开启浏览器并进入指定url
var config = require('./webpack.dev.conf')
var GetDate = require('../data/movieinfo')
var router = express.Router();
// 创建一个express实例
var app = express()
var post = 8888;

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用 webpack-hot-middleware 中间件  热更新配合上面的插件来 比较文件变化 
 var hotMiddleware = require('webpack-hot-middleware')(compiler)





// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(router);
app.use(GetDate);

// 监听 8888端口，开启服务器
app.listen(post, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:'+post)
    opn('http://localhost:'+post+'/app/index/index.html');
})

