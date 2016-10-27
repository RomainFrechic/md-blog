

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname +'/public'));

app.listen(2000, function () {
	console.log('Example app listening on port 2000!');
});
