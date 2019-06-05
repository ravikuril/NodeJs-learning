var EventEmitter = require('events');
var util = require('util');

//function constructor 
function Greeter() {
	this.greeting = 'hello world';
}
// declaring that any object created from greeter 
// should also have access of the methods and properties of
// eventemitter
util.inherits(Greeter, EventEmitter);

// adding more fuction in greeter

Greeter.prototype.greet = function(data) {
	console.log(this.greeting + ':' + data);
	this.emit('greet', data); 

}

var greeter1 = new Greeter();

greeter1.on('greet' , function(data) {
	console.log('Someone greeted !:' + data);
});

// greeter1 points to Greeter.prototypeobject and that points to EventEmitter.prototype
//creating the protype chain
greeter1.greet('Ravi');