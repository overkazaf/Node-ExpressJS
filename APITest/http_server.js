var http = require('http');
var server = http.createServer(function (req, res){
	res.writeHead(200, req.headers);
	res.end();
});

server.listen('1234');