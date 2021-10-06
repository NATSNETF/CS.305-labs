//using an arrow =>
let sum=(a,b)=> a +b;
console.log(sum(2,5))

let double=(n)=> n*0.2;
console.log(double(2))

function double1(n){
    return n*2;
}
console.log(double1(3))

///////////////////////////////
//if no argument in ()
let sayHi=()=> console.log('hello');
sayHi();
/////////////////////////////////////////
let prompt=require('prompt-sync')();
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome(); 

///////////////////////////
// multiLine arrow functions

let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(1, 2) ); // 3

  ///////////////////////////
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
  );
