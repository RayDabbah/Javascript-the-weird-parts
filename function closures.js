var foo = nationality=> {
    return (person, foo)=> console.log(`${person} is a ${nationality} that loves to eat ${foo}!`);
}

var syFood = foo('ספרדי');
var ashkenaz = foo('אשכנזי');

syFood('Moshe Safdieh', 'Kibbe');

ashkenaz('Yankel Schiff', 'Chulepchus');
