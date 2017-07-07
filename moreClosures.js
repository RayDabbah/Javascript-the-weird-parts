function counter() {
    var count = 0
    return function () {
        return ++count
    }
}
var c = counter()
console.log(c()); console.log(c()); console.log(c()); console.log(c()); 
var d = counter(); 
console.log(d()); console.log(d()); console.log(d()); console.log(d())

var people = function () {
    // If you make 'names' global it'll overwrite everytime. Now that it's local it means
    // different values to different variables.
     var names = ['Greg', 'Sean', 'Grouch'];
    return function (addName) {
        names.push(addName);
    //    delete names[0];
        console.log(names)
    }
}

const newPerson = people();
newPerson('Robert B.');
// console.log(newPerson());
const morePeople = people();
morePeople('Franky Man')
newPerson('Barney C.');
// console.log(names)