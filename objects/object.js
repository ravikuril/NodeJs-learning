var persion = {
	fname: 'tom',
	sname: 'jerry',
	Nfunction: function() {
		console.log('This is ' + this.fname + ' and ' + this.sname);
	}
};

persion.Nfunction();
console.log( persion['fname'])