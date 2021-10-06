let prompt = require('prompt-sync')();
// let weather = prompt('what is the weather of today:');

// if(weather==='rainy'){
//     console.log('get an umbrella');
//}

// let num = prompt('please enter a number 1 to 10:');

// if(num==='7'){
//     console.log('Bingo!');
// }else{
//     console.log('try again !');
// }

let gpa= prompt('please enter your gpa');
let grade;
if(gpa=== 4.0){
grade='A';
}
else if(gpa >= 3.8){
    grade='B';
}
else if(gpa >=3.6){
    grade='c';
}else{
    grade= 'NC';
}
alert('your grade is ' + grade);
