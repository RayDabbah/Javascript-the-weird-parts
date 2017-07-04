function eat(food){
    return function(name){
        console.log(`${name} eats ${food}`)
    }
}
eat('kibbe')('Aslan');
var fress = eat('chulent');
fress('Shmerel');
console.log(eat)