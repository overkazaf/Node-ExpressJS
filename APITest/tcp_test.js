var net = require('net');

var server = net.createServer(function (socket){
	var buffer = [],
		size = 0;
	socket.on('data', function (chunk){
		buffer.push(chunk);
		size += chunk.length;
		
		var str = Buffer.concat(buffer, size);
		if (str == 'cmd'){
			socket.write('\n\rRunning commands:\n\r');

			for (var i=0;i<100;i++){
				console.log(i+':   写啊写啊写啊:::');
			}
		}
	});

	socket.on('end', function (){
		console.log('连接断开');
	});

	socket.write('Welcome\n\r');
});

server.listen(3000);