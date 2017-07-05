function Vehicle(year, make, model){
	    this.year = year;
	    this.make = make;
	    this.model = model;
}
Vehicle.prototype.isRunning = false
Vehicle.prototype.turnOn = function(){
	    if(this.isRunning=== false){
		            this.isRunning = true;
		            this.honk = 'beep';
		        }
}
Vehicle.prototype.turnOff = function(){
	    if(this.isRunning=== true){
		            this.isRunning = false;
		            delete this.honk;
		        }
}
myCar = new Vehicle(1989, 'Ford', 'Taurus');
myCar.turnOn()
console.log(myCar);
myCar.turnOff()
console.log(myCar);
