var WebSocketServer = require('ws').Server;
var server = new WebSocketServer({port:3000});
console.log(server);
server.on('connection', function (socket) {
	console.log('onConnection:', socket);

	server.on('message', function (data){
		
		console.log('recieve:', data);

		server.broadcast(data);
	});
});

console.log('Listening at port 3000');