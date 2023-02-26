const padArray = require("./padArray")
const pad = padArray.pad
let {shallowEqualArrays} = require('shallow-equal');

console.log(shallowEqualArrays(pad([1,2,3], 5), [1,2,3, null, null]))
console.log(shallowEqualArrays(pad([1,2,3], 5, 'apple'), [1,2,3, 'apple', 'apple']))
console.log(shallowEqualArrays(pad([1,2,3], 3), [1,2,3]))