
// function in a setTimeout returns global (don't know why)
// if it's considered nested then it should work if cahnged to an arrow-but it doesn't-see below.
var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: (setTimeout(function(){
        console.log('function/asynchronous')
        console.log(`Hello!, my name is ${this.name} and I like asynchronous ${this.food}!`);
    }, 1000))}

// nested arrow function should return the local scope but for some reason doesn't.
// Not sure what happened to closures.
var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: (setTimeout(()=>{
        console.log('Nested arrow function/asynchronous')
        console.log(`Hello!, my name is ${this.name} and I like asynchronous ${this.food}!`);
    }, 1000))}

person.message
//nested arrow function in a setTimeout which is nested in a regular function works.
var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: function(){
    (setTimeout(()=>{
        console.log('Nested arrow function/asynchronous in a regular function')
        console.log(`Hello!, my name is ${this.name} and I like asynchronous ${this.food}!`);
    }, 1000))}
}
person.message()







// nested regular function returns global; Javascript quack
// 
var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: function () {
        return function () {
            console.log('Nested function/synchronous')
            console.log(`Hello!, my name is ${this.name} and I like ${this.food}!`);
        }
    }
}
person.message()()

// nested arrow function returning local

var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: function () {
        return () => {
            console.log('Nested arrow/synchronous')
            console.log(`Hello!, my name is ${this.name} and I like ${this.food}!`);
        }
    }
}
person.message()()