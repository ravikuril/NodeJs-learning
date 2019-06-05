var Emitter = require('./emitter');

var emtr = new Emitter();

//calling emitter and storing the function along with the message in arry
emtr.on('greet', function() {
	console.log('somewhare someone said something');
});

emtr.on('greet', function() {
	console.log('A greeting occurred !');
});

console.log('hello');
// calling emitter to emit what is stored in the array
emtr.emit('greet');