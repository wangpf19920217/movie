var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/data/movie', function(req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        //"https://movie.douban.com/j/search_subjects?type=movie&tag=豆瓣高分&page_limit=100&page_start=0";
		res.jsonp({status: 200, message: "这是一个JSONP接口", data:[]});
    } else {
        res.json({status: 200, message: "这是一个JSON接口", data:[]});
    }
});
 
module.exports = router;