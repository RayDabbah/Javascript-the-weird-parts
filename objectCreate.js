//make an object template

var proto = {
	name: 'Please add your name',
	age: 'Please add your age',
	hairColor: 'Please state your hair color',
	favFood: 'Please tell us your favorite food',
}

// using Object.create to make a new object based on the previous function.
var yankel = Object.create(proto);
yankel.name = 'Yankel';
yankel.age = 49;
yankel.favFood = 'Gala mit herring';
var shmerel = {};
shmerel.name = 'Shmerel Belkins';

Object.prototype.fun = function(){
	this.addition = 'I added something to your Object!!';
}
shmerel.fun();
yankel.fun();

console.log(proto);
console.log(yankel);
console.log('This is shmerel.prototype')
console.log(shmerel.prototype);
console.log('This is shmerel.__proto__')
console.log(shmerel.__proto__);
console.log('This is shmerel')
console.log(shmerel);
