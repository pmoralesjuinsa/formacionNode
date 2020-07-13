var upperCase = require('upper-case');
console.log(upperCase.upperCase("hello world!"));

var factorial = require('factorial');
var numbers = process.argv.slice(2);
console.log(factorial(numbers[0]));