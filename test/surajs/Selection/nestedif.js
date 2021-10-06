let prompt = require('prompt-sync')();
let weather = prompt("Please enter weather outside:");
let temp = prompt("Please enter current temperature:");

if (weather == 'sunny') {
if (temp < 80) {
console.log("Good day for outdoor running");
} else {
console.log("Better used trade mill at home.");
}
}

let x = 1;
let y = 7;
let message = "welcome";

if(x < 2){
    if(y > 10){
        console.log(message);
    }else {
        console.log("good bye ");
    }
}
console.log(message);
