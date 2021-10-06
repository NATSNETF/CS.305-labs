let prompt = require("prompt-sync")();

let weather = prompt('please enter the weather of today ');

if(weather === 'hot'){
    console.log('sandal');
}else if(weather === 'rain'){
    console.log('galoshes');
}else if(weather === 'snow'){
    console.log('boots');
}else{
    console.log('shoes');
}

let name = prompt("please enter your name ");
let credit = prompt("please enter the credit you completed ");
credit = parseFloat(credit);

let school_year;

if(credit < 30){
    school_year = "freshmen";
} else if (credit < 60){
    school_year = "sophomore";
} else if (credit < 90){
    school_year = "junior";
} else {
    school_year = "senior";
}
console.log("My name is " + (name) + " and my year in school is " + (school_year));

let cost = prompt("please enter cost of the house :");
cost = parseInt(cost);

let down_payment;

if(cost < 50000){
    down_payment = 0.5*cost;
} else if(cost < 100000){
    down_payment = 2000+0.10*(cost-50000);
} else if(cost < 200000){
    down_payment = 7500+0.20*(cost-100000);
} else {
    down_payment = 27500+0.25*(cost-200000);
}
console.log("Down payment will be :" + down_payment);