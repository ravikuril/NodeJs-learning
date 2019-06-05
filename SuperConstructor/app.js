var util = require ('util');

function persion() {
	this.fname = 'Ravi';
	this.lname = 'kuril';
}

persion.prototype.greet = function() {
	console.log('Hello' + ' ' + this.fname + ' ' + this.lname);

}

function Policeman() {
	// without below line undefined undefine is the output coz persion in not found
	persion.call(this); // creates empty object 
	this.badgenumber = '1234';
}
//policeman will have methods and properties of persion
util.inherits(Policeman, persion);
// for inheritence in prototype chain function constructor should be called 
var officer = new Policeman();
// calling prototype of perison which is inherited by officer
officer.greet();