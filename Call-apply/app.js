var obj = {

	firstname: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.firstname}`);
	}
}

obj.greet();
//modifying the values of obj 
obj.greet.call({ firstname: 'Jene Doe'});
obj.greet()
obj.greet.apply({ firstname: 'Jene Doe'});
//obj.greet.apply(obj['Jene Doe', 'doe']);
