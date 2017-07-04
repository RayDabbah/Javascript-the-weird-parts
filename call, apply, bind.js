var a = {
    name: 'Treyvon',
    sport: 'soccer',
    message: function(){
        console.log(`${this.name} loves to play ${this.sport}.`);
    }
};
var b = {
    name: 'Peter',
    sport: 'Backgammon'
}
a.message.call(b);
var personB = a.message.bind(b);
personB();
(function(name, sport){
    console.log(`${this.name} is the greatest ${this.sport} player in Jackson!`)
}).call(a)

function multiply(a,b,c){
    return a * b * c;
}
multiply2 = multiply.bind(this, 2);
multiply2(3,3);
multiply2x2 = multiply2.bind(this, 2);
multiply2x2(3);
