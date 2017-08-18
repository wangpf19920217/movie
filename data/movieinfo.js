var express = require('express');
var app = express();
var router = express.Router();
var url = require('url');
var http = require('http');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
//	res.setHeader('content-type', 'text/html;charset=utf8');
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write(new Buffer('网站名', 'utf8').toString() +'：' + params.name);
    res.write("\n");
    res.write(new Buffer('网站URl', 'utf8').toString() +"：" + params.url);
    res.end();
 
}).listen(4444);
// 请求的url
//var url = "https://movie.douban.com/j/search_subjects?type=movie&tag=豆瓣高分&page_limit=100&page_start=0";

//app.get('/', function(req, res){
//res.send('hello world');
//});
//
//app.listen(4444);