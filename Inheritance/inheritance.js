function Persion(fname, lname) {
	this.firstname = fname;
	this.lastname = lname;

}

//function prototype
//defining greet property in fucntion 
Persion.prototype.greet = function() {
	console.log('Hello' + this.firstname + ' ' + this.lastname);
};


var john = new Persion('Tom', 'Jerry');
john.greet();
var jene = new Persion('Tom2', 'Jerry2');
jene.greet();

//checking proptotype of function 

console.log(john.__proto__);
console.log(jene.__proto__);

/*console.log(john);
console.log(Persion['firstname'],Persion['lastname']);*/