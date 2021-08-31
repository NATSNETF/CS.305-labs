let promote = require('prompt-sync')();
let cost = promote("Please enter the cost of the house");
if (cost < 50) {
    console.log("your down Payment is " + 0.05 * cost);
} else if (cost > 50 && cost < 100) {
    console.log("your down payment is " + 1000 + 0.10 * cost - 50);
} else if (cost > 100 && cost < 200) {
    console.log("your down Payment is " + 2000 + 0.15 * cost - 100);
} else (cost > 200)
console.log("your down Payment is " + 5000 + 0.10 * cost - 200);


let amount = promote("Please enter the amount");
let rate = promote("Please enter the interest rate");
let yrs = promote("number of years");

