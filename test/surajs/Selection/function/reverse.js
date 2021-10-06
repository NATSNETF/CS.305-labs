function reverseDigits (){

let prompt = require('prompt-sync')();


let user_input=prompt("enter a number")
let reversed = 0;

do {
  
  console.log("the reversed numbers are : " + (user_input)/10);

} 
while (user_input !== 0); 
    reversed = reversed * 10;
    reversed = reversed + user_input % 10;
    user_input = user_input/10;



}
reverseDigits();


