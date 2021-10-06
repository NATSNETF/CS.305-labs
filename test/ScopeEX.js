function f() { 
    let a = 1, b = 20, c; 
    console.log(a + " " + b + " " + c); // 1 20 undefined 
    function g() { 
    let b = 300, c = 4000; 
    console.log(a + " " + b + " " + c); // 1 300 4000 
    a = a + b + c; 
    console.log(a + " " + b + " " + c); // 4301 300 4000 
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined 
    g(); 
    console.log(a + "1 " + b + " 1 " + c); // 4301 20 undefined 
    g();
    } 
    f();
//     /////////////////////////////////////////////////////////
//      let x = 10;
// function main() {
// let x = 0;
// console.log("x1 is " + x); //0
// x = 20;
// console.log("x2 is " + x);//20
// if (x > 0) {
// x = 30;
// console.log("x3 is " + x); //30
// }
// console.log("x4 is " + x);//30 

// function f(x) {
// console.log("x5 is " + x);//50
// }
// f(50);
// console.log("x6 is " + x);//30
// }
// main();
// console.log("x7 is " + x);//10
// //Draw the  chain
// //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

// let s = 10; //---->>>>>>>> global
// //////////////////////////
// function main() {
// let s;
// console.log("x1: " + s);
// if (s > 0) {
// let s = 30;
// console.log("x2: " + s);
// }
// x= 40;
// let f1 = function(s) {
//      console.log("x3: " + s); }
// f1(50);
// }
// ////////////////////////////////// block scope
// main();
///////////////////
/////////////////////////////////////////////////////////////////////////////////
let x = "global_x"

function outer(outer_param) {
  let y = "outer_local_y";
  // x,y and outer_param are accessible here i.e x,y and outer_param are in scope here
  console.log(x, y, outer_param);

  // inner_param and z are out of scope
  // console.log(inner_param, z)  
  function inner(inner_param) {
    let z = "inner_local_z";
    // x,y,z and outer_param all are accebile here
    console.log(z, inner_param, y, x);
  }
  console.log(x, y, outer_param);
  // inner_param and z are out of scope
  // console.log(inner_param, z) 

//   inner("inner_parameter");

//   console.log(z);
 }

outer("outer_parameter");

// console.log(y);
// Why the order or output different? 