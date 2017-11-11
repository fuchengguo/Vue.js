var express = require("express");
var app = express();
app.get("/index", function(req, res) {
	res.send('callback({name: "qd"})')
})
app.listen(8888)