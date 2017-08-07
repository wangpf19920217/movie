// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');//引入htmlwebpack

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
//  entry: path.resolve(__dirname, '../app/index/index.js'),  
//	添加 热更新 
    entry:['webpack-hot-middleware/client', path.resolve(__dirname, '../app/index/index.js')],
    
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '/',
        filename: 'build.js',
        chunkFilename: '[id].[chunkhash].js'
    }, 
    resolve: {  // Can't resolve 'Vue' 添加resolve
         extensions: ['.js', '.vue']
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
        		loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}