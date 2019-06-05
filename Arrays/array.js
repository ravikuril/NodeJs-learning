//fuction and array
var arr = [];

arr.push(function() {
	console.log('first item');
});

arr.push(function() {
	console.log('second item');
});
arr.push(function() {
	console.log('third item');
});

arr.forEach(function(item) {
	item();
});