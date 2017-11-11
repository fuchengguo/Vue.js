var express = require("express");
var app = express();
app.set('views', './views')
app.set('view engine', 'ejs');
app.get("/index",function(req,res){
	//CORS 服务端给权限我们去请求
	res.append('Access-Control-Allow-Origin', '*');
	//res.send("123")
	res.render("index",{
		title:"hello world"
	})
})
app.get("/gettitle",function(req,res){
	//CORS 服务端给权限我们去请求
	res.append('Access-Control-Allow-Origin', '*');
	//res.send("123")
	/*res.render("index",{
		title:"hello world"
	})*/
	res.send({
		title:"hello world"
	})
})
app.listen(8888)