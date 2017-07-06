var arr = ['hi', 'bye', 'good morning', 'good night'];
// This is needed to get an answer otherwise you  get an object since an array is really an object.
console.log(arr.toString())
var emptyArr = [];
console.log(Object.prototype.toString.call(emptyArr))
var obj = {
    mood: 'Super',
    fun: function(mood){
        console.log(`I am in a ${mood} today!!!
        How about you?`);
    }
}
var nisht = null;
console.log(typeof obj)
console.log(typeof obj.mood)
console.log(typeof obj.fun)
var emptyObj= {};
console.log(typeof emptyObj)
var funFun = () => console.log('I am a function');
console.log(typeof funFun)
var num = 2;
console.log(typeof num)
var str = 'I am a string!'
console.log(typeof str)
var bool = true;
console.log(typeof bool)
// returns object-strange bug
console.log(typeof nisht)