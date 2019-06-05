//using node's internal emitter listener function 
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

//calling emitter and storing the function along with the message in arry
emtr.on(eventConfig.GREET, function() {
	console.log('somewhare someone said something');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred !');
});

console.log('hello');
// calling emitter to emit what is stored in the array
emtr.emit(eventConfig.GREET);