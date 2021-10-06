// a function that takes a parameter and return a value
let prompt = require("prompt-sync")();

function isOdd(n){
	return n%2!==0;
}

let input = prompt("Please enter a number to test.");

// funciton is called and returned result is saved in a variable.
//input = parseInt(input);

//let result = isOdd(test_number);
console.log(isOdd(input));

// a funciton without exlicit return type and no parameter

