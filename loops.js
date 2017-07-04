function build(){

var arr = [];
for(var i = 23; i < 30; i++){
  arr.push(
    (function(j){
    return function(){
      console.log(j)
    }
    }(i)))
}
return arr;
}
var ret = build()
ret[1]()
console.log(ret)