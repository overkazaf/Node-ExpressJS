var http = require('http');
var server = http.createServer(function (req, res){
	res.writeHead({'text/html': 200});
	res.end('<p>Bye!</p>');
});

server.listen(3333);
console.log('listening at port 3333');