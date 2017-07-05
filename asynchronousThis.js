
// nested arrow function should return the local scope but asynchronous changes that.
// Not sure what happened to closures.
var person = {
    name: 'חזיר',
    food: 'mechshi',
    message: (setTimeout(() => {
        console.log('Nested arrow function/asynchronous')
        console.log(`Hello!, my name is ${this.name} and I like asynchronous ${this.food}!`);
    }, 1000))
}
person.message

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