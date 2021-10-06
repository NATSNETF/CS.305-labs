'use strict';
function sum(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function product(a,b){
    return a * b;
}
const prompt= require('prompt-sync')();
const operation= prompt("please select a operation from +, -,* ");
const op1= parseFloat(prompt("please enter value for first operand "));
const op2= parseFloat(prompt("please enter value for secound operand "));

if(operation=== '+'){
    alert(sum(op1,op2)) 
}else if(operation=== '-'){
    alert(subtract(op1,op2));
}
else if(operation=== '*'){
alert(product(op1,op2));
}

    
