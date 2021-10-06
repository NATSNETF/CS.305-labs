// //let x=20;
// function a(){
//     console.log("x1 " + x);
// }
// function b(){
//     let x=10;
// a();
//     console.log("x2 " + x)
// }
// b();
///////////////////////////////////////////////////////2
// function b1(){ 
//  function a1(){ 
//     console.log("a1 " + x1); 
//      }
//     let x1 = 10; 
//     //a1(); 
//     console.log("b1 " + x1); 
//     } 
//     let x1 = 20; 
//     b1(); // 10 

// function b2(){ 
//     function a2(){ 
//     console.log(x2); //a20
//     }
//     a2(); 

//     console.log(x2); //b20
//     } 
//     let x2 = 20; 
//     b2(); // 20
    
function f() { 
    let a = 1, b = 20, c; 
    console.log(a + " " + b + " " + c); 
    function g() { 
    let b = 300, c = 4000; 
    console.log(a + " " + b + " " + c); 
    a = a + b + c; 
    console.log(a + " " + b + " " + c); 
    }
    console.log(a + " " + b + " " + c); 
    g(); 
    console.log(a + " " + b + " " + c); 
    } 
    f();
    