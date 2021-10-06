// // // //‘this’ inside vs outside object
// //  'use strict'
// // function foo() { console.log(this); }
// // const bob = {
// // log: function() {
// // console.log(this);
// // }
// // };
// // console.log(this); // this is window in browser (‘global’ in node)
// // foo(); //foo() is called by global or window object 
// // //bob.log();//log() is called by the object, bob

// "use strict";
// function a() {
//     console.log(this);}
//     const b = {
//     dog: 'fido',
//     log: function() {
//     console.log("hello"); }}
//     console.log(this); 
//     a(); 
//     b.log(); 
//     // let mylog = b.log;
//     // mylog();//----> for the 2nd this


// //    //////////////////////important note. using this
// //   // Problem with ‘this’ inside timeout
// // //➢ There is a problem if you call a function using ‘this’ inside a timeout

// const abc = {a:1, b:2, add: function() { console.log("1+2 = 3?",this.a + this.b); }}
// abc.add(); //works 
// setTimeout(abc.add, 2000); //problem!

// // // ➢‘this’ represents the object calling the function
// // // ➢ setTimeout is a global function, which means it is a method of window (or global in Node.js)
// // // ➢ abc.add is a reference to the add function
// // // ➢ it has now been passed as an argument (callback) to the setTimeout method 
// // // ➢ when it is called inside setTimeout the lexical context and value of ‘this’ will be window

// // // 7
// // // Can be solved by setting the ‘this’ context
// // // ➢ several techniques to set the ‘this’ context parameter
// const abc = {a:1, b:2, add: function() { console.log("1+2 = 3?",this.a + this.b); }}
// abc.add(); //works 
// setTimeout(abc.add, 2000); //problem!
//  setTimeout(abc.add.bind(abc), 2000); //works 
//  setTimeout(function() {abc.add.call(abc)}, 2000); //works 
//  setTimeout(function() {abc.add.apply(abc)}, 2000); //works 

// //  //function binding
// //  let user = {
// //     firstName: "John",
// //     sayHi() {
// //     console.log(`Hello, ${this.firstName}!`);
// //     }
// //     };
// //     setTimeout(user.sayHi.bind(user), 1000); // Hello, undefined!


// //this inside event handler
// const changeMyColorButton1 = document.getElementById("btn1");
// const changeMyColorButton2 = document.getElementById("btn2");
// const myTextBox = document.getElementById("txtbox1");
// changeMyColorButton1.onclick = changeMyColor;
// changeMyColorButton2.onclick = changeMyColor;
// myTextBox.onmouseover = changeMyColor;
// function changeMyColor() {
// this.style.backgroundColor = "red";
// }


function context(){
    console.log(this.a);
}
let myObj={a:1,context}
//add context to object
myObj.context=context;
console.log(myObj);
context();

myobj={a:"hello"}
myobj.context=context;
context();









//"use strict";
// function area(){
//     console.log(this); 
//     return this.side * this.side;
// }
// const square1 = {side: 5, area: area};
// console.log(square1.area()); 
