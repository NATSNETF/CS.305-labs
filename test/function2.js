 let prompt=require('prompt-sync')();
 //a function that takes a parameter and return a value
 function isOdd(n){
    return n%2 !==0;
}
let input=prompt("please enter a number to see if it is odd number");

//inbuilt function is called are returned result is saved in a variable
let test_number= parseInt(input);


//user defined function is called and returned result is saved in a variable
let result= isOdd(test_number);
console.log(result);