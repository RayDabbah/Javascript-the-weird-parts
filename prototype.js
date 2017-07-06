var a = new String('eat chicken tzonight!')
console.log(a)
var b = 'Yankel';
console.log(b)
String.prototype.checkForZZs = function(){
    if(this.includes('z')){
        return 'You have the letter z!'
    }else{
        "No z's today!! :'-("
    }
}
console.log('Without function\n')
console.log(a==b);
console.log('With Function\n');
console.log('eat chickennight!'.checkForZZs());
console.log(a.checkForZZs());
console.log(b.checkForZZs());
console.log(a.prototype)
console.log(b.prototype)

Object.prototype.addProperty= function(){
    this.yankel = 97
}
var moshe = {
    age: 23,
    name: 'moshe'
}
moshe.addProperty()
console.log(moshe)
Array.prototype.pushing = function(){
    this.push('Shmerel')
}
var list = ['cheese', 'lemons', 'apples']
list.pushing();
console.log(list);