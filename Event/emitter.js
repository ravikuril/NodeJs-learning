
function Emitter() {
	this.events = {};
}

//stores function in the array of type 
Emitter.prototype.on = function(type ,listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

//checking if the type is in the array the loop array and invoke all the functions inside it
Emitter.prototype.emit = function(type) {
	if(this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = Emitter;