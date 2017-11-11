var express = require("express");
var http = require("http")
var app = express();

app.get("/index", function(request, response) {
	//服务器代理
	http.get("http://m2.qiushibaike.com/article/list/suggest?page=1&type=refresh&count=30", function(res) {
		var data = "";
		res.on("data", function(chunk) {
			data += chunk
		})
		res.on("end", function() {
			console.log(data)
			//CORS 服务端给权限我们去请求
			response.append('Access-Control-Allow-Origin', '*');
			response.send(data)
		})
	})
})
app.listen(8888)