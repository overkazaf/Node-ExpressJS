// var http = require('http');

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write('<h1>Welcome</h1>');
// 	res.end('<p>Byebbb</p>');
// }).listen(2014);

// console.log('Server is fflistening at port 2014');

var fs = require('fs');

// fs.readFile('demo.html', 'utf-8', function(err, data){
// 	if(err){
// 		throw err;
// 	} else {
// 		console.log(data);
// 	}
// });

// var data = fs.readFileSync('demo.html', 'utf-8');
// console.log(data);
// 
// var modulea = require('./modulea');
// modulea.setMessage('John Doe');
// modulea.getMessage();
// 
	var Person = require('./modulea');
	var person = new Person();
	person.setName('John Doe');
	person.getName();