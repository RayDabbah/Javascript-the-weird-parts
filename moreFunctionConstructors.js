function Car(year, make, model){
	    this.year = year;
	    this.make = make;
	    this.model = model;
	    this.wheels = 4;
}
function Motorcycle(year, make, model){
	    Car.apply(this, arguments)
	    this.wheels = 2;
}
var junkyCar = new Car(1987, 'Ford', 'Taurus')
var coolBiker = new Motorcycle(2017, 'Harley', 'Touring')
console.log(junkyCar);
console.log(coolBiker);

