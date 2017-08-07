var hotClient = require('webpack-hot-middleware/client')

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
/*这里我们除了引入 ‘webpack-hot-middleware/client’ 之外订阅了一个事件，当 event.action === ‘reload’ 时触发，还记得我们在 dev-server.js 中发布的事件吗：
 	hotMiddleware.publish({ action: 'reload' })
 * */
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})