var fork = require('child_process').fork;
var cpus = require('os').cpus();

for (var i = 0, l = cpus.length; i < l; i++) {
	fork('./slave.js');
}