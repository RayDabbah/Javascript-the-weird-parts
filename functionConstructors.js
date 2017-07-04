function Person(firstname, lastname, age, favFood){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.favFood = favFood;
    return 'Reset the function\'s value w/o ruining the constructor';
}
    console.log(Person())
var Shmerel = new Person('Yankel', 'Kreibovitch', 77, 'Shlishkes');
var  Abdo = new Person('Abdo', 'Arazi', 21, 'Baklawa');
Person.prototype.message = function(){
   return console.log(`My name is ${this.firstname} ${this.lastname} and I love ${this.favFood}`)
}
console.log(Shmerel);
console.log(Shmerel.message());
console.log(Abdo);
console.log(Abdo.message());

var mendel = {
    firstname: 'Mendel',
    lastname: 'Blezherheim'
}
// mendel.prototype.message2 = function(){
//     console.log(`My name is ${this.firstname} and my lastname is ${this.lastname}`);
// }
// console.log(mendel.message())