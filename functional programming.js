var arr1 = [1,2,3,4];
function mapper(item, fn){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        newArr.push(fn(item[i]));
    }
    return newArr;
}
function multiply(item){
    return item * 2;
}

var arr2 = mapper(arr1, multiply);
console.log('arr2: ', arr2);
function easyLimiter(limiter){
    return (function limiter(limiter, item){
    return item < limiter;}).bind(this, limiter)
}

var arr3 = mapper(arr2, easyLimiter(5));
console.log('arr3: ', arr3);
