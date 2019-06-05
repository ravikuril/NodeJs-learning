//uses strict standard in the code good for production
'use strict';

class Person {
	constructor(firstname , lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	// public function avialble for evryone just like function prototype
	greet() {
	console.log('hello' + ' ' + this.firstname + ' ' + this.lastname);
	}
}

/*Person.prototype.greet = function() {
	console.log('hello' + this.firstname + ' ' + this.lastname);

}
*/
var john = new Person('John', 'Doe');
john.greet();


var jane = new Person('Jahe', 'Doe');
jane.greet();

console.log(john.__proto__);

console.log(jane.__proto__);
//comparing both prototypes 
console.log(john.__proto__===jane.__proto__);