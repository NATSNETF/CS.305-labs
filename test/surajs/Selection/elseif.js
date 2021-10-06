let prompt = require('prompt-sync')();
let gpa = prompt('please enter your gpa:');
gpa = parseFloat(gpa);

let Grade;

if (gpa === 4.0){
    Grade = 'A';
}else if (gpa >= 3.8){
    Grade = 'B';
}else if (gpa >= 3.6){
    Grade = 'C';
}else{
    Grade = 'NC';
}
console.log(`Your Grade is ${Grade}`);


// let Age = prompt('please enter your age');
// Age = parseInt(Age);
// let print;

// if (Age <= 0){
//    print = 'please enter a valid age';
// }else if (Age <= 14){
//     print = 'You cant drive yet';
// }else if (Age <= 18){
//     print = 'You can drive under supervision';
// }else {
//     print = 'You can drive';

// }
// console.log(print);


// let sales = prompt("please enter your sales");
// sales = parseFloat(sales);

// let rate;


// if(sales<300){
//     rate = 0;
// }else if(sales<600){
//     rate= 0.02;
// }else if(sales<1000){
//     rate = 0.025;
// }else {
//     rate = 0.03;
// }
// let commission = sales*rate;

// console.log("the employee earned" + commission);

