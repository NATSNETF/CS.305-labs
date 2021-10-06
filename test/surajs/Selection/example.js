 let prompt = require("prompt-sync")();
// let distanceinkm = prompt("please enter a distance in km: ");
// let distanceinmilles = 0.6214*parseFloat(distanceinkm);

// console.log(`distance in Miles ${distanceinmilles}`);



let boxes = prompt("please enter the number of boxes");

let stacks = Math.ceil(boxes/6);
console.log('number of stacks will be :' + stacks);




let quarts = prompt('please enter the volume in quarts: ');
let litres = 0.946353*parseFloat(quarts);

console.log (litres);


let age = prompt('please enter your age');
age = 220-parseInt(age);

let max_rate = 0.85*age;
let Min_rate = 0.65*age ;

console.log(`the slowest heart rate is ${Min_rate} the fastest heart rate is ${max_rate}`);

let hours_worked = prompt("please enter the number of regular hours you work");
let wage = prompt("please enter your wage per hour");

let gross_pay = parseFloat(hours_worked*wage);
let tax = 0.22*gross_pay;
let net_pay = gross_pay-tax;

console.log("employee net pay is "+ net_pay);
