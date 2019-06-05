var persion = {

	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

// creating the object
var john = Object.create(persion);
john.firstname = 'John';
john.lastname = 'Doe'; 

var jene = Object.create(persion);
jene.firstname = 'Jene';
jene.lastname = 'Doe';

// both object has access to the greet function 
console.log(john.greet());
console.log(jene.greet());