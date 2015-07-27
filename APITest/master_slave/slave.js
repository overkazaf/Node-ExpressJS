var http = require('http');
var port = Math.round(Math.random() * 1000) + 1;
var server = http.createServer(function (req, res){
	res.writeHead(200, {'content-type' : 'text/html'});
	res.end('<p>Port:' + port + 'Hello Kitty</p>');
}).listen(port, '127.0.0.1');


console.log("Server has been listened at port:" + port);