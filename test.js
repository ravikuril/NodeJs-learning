//Testing nodejs basic code snippet 


function test() {
	console.log('testing the nodejs function');
	}
test();
//function inside funtion 

function second_function(fun) {
	console.log('nested function called ');
	fun();
}
second_function(test);

//function expression 

var testfunction_expression = function() {
	console.log('\nfunction expression called');
}
testfunction_expression();
second_function(testfunction_expression);

//function_expression on the fly
second_function(function() {
	console.log('\nOn the fly function');
});

//INTRODUCING MODULES 
var module_function = function() {
	console.log('imported module from test');
};

module.exports = module_function;


/*
var http = require("http");
var static = require("node-static");
var file = new static.Server();
http.createServer (function (request, response) {
file.serve (request, response);
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Hello World!");
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");*/