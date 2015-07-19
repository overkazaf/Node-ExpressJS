var o = Object.create(null);
o.name = 'John';

console.log(o);

console.log([] == []);

// crypto
var crypto = require('crypto');
var ciphers = crypto.getCiphers();

console.log(crypto.getHashes());

// os

// var os = require('os');
// console.log(os.tmpdir());
// console.log(os.endianness());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus());


var swap = function (a, b){
	return [b, a];
}

// pass an array to swap values
// var a = 1;
// var b = 2;
// var c  = [a, b];
// c = swap(a,b);
// console.log(c);
// 
// 
//console.log(require.extensions);

// nextTick and setImmediate tests

var log = console.log;

process.nextTick(function (){
	console.log('nextTick calling 1');
});

process.nextTick(function() {
	console.log('nextTick calling 2');
});

setImmediate(function (){
	console.log('setImmediate calling1');

	process.nextTick(function (){
		console.log('force insert nextTick in immediate');
	});
});

setImmediate(function (){
	console.log('setImmediate calling2');
});

console.log('normal');