var dgram = require('dgram');


var message = new Buffer('Hello dude');
var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, 1234, "localhost", function (err, bytes){
	client.close();
});