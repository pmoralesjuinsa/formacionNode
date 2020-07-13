var tripleNumber = require('./triple.js');
var numbers = process.argv.slice(2);
var result = tripleNumber(numbers[0]);
console.log(result);