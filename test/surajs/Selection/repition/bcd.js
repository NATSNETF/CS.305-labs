let prompt = require("prompt-sync")();
let age = prompt("please enter your age :");

while(age !== 18)
    console.log("age is " + age);
    age = prompt("please enter your age :");
    
console.log("...exiting..");
