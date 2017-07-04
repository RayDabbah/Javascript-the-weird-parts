

var newObj = {};
// dot notation with space
newObj .banana = 'green';

// needs brackets bec it's not a valid identifier (starts with a number)
newObj['12things'] = 'שבטים';

// needs brackets bec it's not a valid identifier (it's a string)
newObj[''] = 'nothing';

// needs brackets bec it's not a valid identifier (has spaces)
newObj['how are you'] = 'today'

// dot notation works since it's coerced into a string
newObj.true = true

// needs brackets bec it's not a valid identifier (is an array)
newObj[[1,2,3]] = 'array turned string'

// needs brackets bec it's not a valid identifier (is an Object [and will be coerced into one])
newObj[{yankel: 35}] = 'Object key'

var rand = `random number: ${Math.random()}`;

// needs brackets bec it would otherwise becom a a string instead of a variable
newObj[rand] = 'weird number';

console.log(newObj);
console.log(newObj['12things'])
console.log(newObj[''])
console.log(newObj['1,2,3'])
console.log(newObj['[object Object]'])