// var msg;

// exports.setMessage = function(message){
// 	msg = message;
// }

// exports.getMessage = function(){
// 	console.log(msg);
// }

function Person (){

};

Person.prototype.setName = function(name){
	this.name = name;
}
Person.prototype.getName = function(){
	console.log(this.name);
}

module.exports = Person;