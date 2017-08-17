// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');  //补全前缀的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');//引入htmlwebpack

//webpack --display-modules --display-chunks --config build/webpack.config.js 打包模式
// dev-conf 开发模式

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, '../app/index/index.js'),
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
	            test: /\.less$/,
	            use: [{
	                loader: "style-loader" // creates style nodes from JS strings
	            }, {
	                loader: "css-loader" // translates CSS into CommonJS
	            }, {
	                loader: "less-loader" // compiles Less to CSS
	            },
	            {
	                loader: 'postcss-Loader' // 补全前缀的插件
	            }
	            ]
	        },
            {
                test: /\.js$/, // babel 转换为兼容性的 js ES6
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            },
            {
	            test: /\.(png|jpg)$/,
	            loader: 'url-loader?limit=10000&name=img/[name][hash:8].[ext]'
	        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        }),
        new webpack.LoaderOptionsPlugin({ //浏览器加前缀
            options: {
                postcss: [require('autoprefixer')({browsers:['last 5 versions']})]
            }
        })
    ]
}

