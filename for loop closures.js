var arr = [];
for (var i = 52; i < 77; i+2){
    arr.push(function(){
        console.log(i);
    })
}
console.log(arr);
console.log('Hello')