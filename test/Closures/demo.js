// //CALL BACK WITH REFERENCE TO OUTER VARIABLE

// let name = "John";
// // sayHi(); it will show john
// function sayHi() {
// console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi();
// //b/c it is modified
//  // what will it show: "John" or "Pete"? #pete

// function makeWorker() {
//     let name1 = "John";
//     return function() {
//     console.log(name1);
//     };
//     }

//     let name1 = "Pete";
//     // create a function
//     let work = makeWorker();
//     // call it
//     work(); // what will it show? “John" (name where created) or “Pete" (name where called)?

    
//     //simon
//     function makeCounter(){
//         let count =0;
//         //value of counter before increment
//         return function(){
//             return count ++;
//         }
//     }
//     const counter1 = makeCounter()
//     //const counter1 = makeCounter()
//     const counter2 = makeCounter()
//      console.log(counter1())
//      console.log(counter1())

//     ///////////////////////////////SCOPE EXAMPLE 1
//     function a() {
//         console.log(x); // consult 
//        // Global for x and print 20 
//         //from Global 
//         }
//         function b() {
//         const x = 0;
//         console.log(x);
//         a(); // consult Global for a 
//         }
      
//         const x = 20;
//         b();


//         ///////////////////////////////////////SCOPE EXAMPLE 2:INNER FUNCTION
//         function b() {
//             //const x1 = 20;//if we want to call from global..it should initialize before we call a()
//             function a() {
//             console.log("x1 " +x1);
//             }
//             const x1 = 10;
//             a();
//            // const x1 = 20;//we cant call here, why? b/c can not access x1.. before initialization
//            }
//            const x1 = 20;
//             b(); 


//             function makeCounter() {
//                 let count = 0;
//                 return function() {
//                 return ++count; 
//                 };
//                 }
//                 let counter = makeCounter();
//                 console.log( counter() ); // 0
//                 console.log( counter() ); // 1
//                 console.log( counter() ); // 2
//                 //console.log( counter() );
//                 //console.log( counter() );

//                 function doaddition(x){
//                     return function(y){ //reference
//                         return x + y;
//                     };
//                 }
//                 let addN =doaddition(3); //reference
//                 console.log(addN(5));


 // nasted

 let global=60
 function a(){
      global++;
}
 function b(){
     global++;
}
 //console.log(global);//60
     a();
 console.log(global);//61
    b();
console.log(global);//62

// function makeCounter(){
//     let count=0;
//     console.log(++count);
//     return function(){
//         let j= 0;
//         console.log(++count,++j);
//     }
// }
// let counter = makeCounter();
// counter();
// counter();
// counter();
// //

function makeCount(){
    let cou=0;
    console.log("the first one ",++cou);
    return function(){
        console.log("the second ",++cou);
    }
}
let maker=makeCount();
maker();//1
maker();//2
maker();//3

let maker1=makeCount();
maker1();
maker();
maker1();
maker1();




// //add one variable, x,inner function y, retun x + y;

// let q=10;
// let u=6;///global scope

// let v=8
// function r(){   //functional scope
//     let s=20;
//     console.log(q,s);//it has both access inner and global
//     function t(u){ //t has access to all
//      //   let v=9;
//         //console.log(q,s,u,v);
//     }
//     console.log(u,v);//here if we print v we canot access unless we have to declare in a global
//     t(30)
// }

// r();

// let w=3;
// function ab(){
//     let s=20;
//     console.log(w,s);
//     function bc(t){
//         let d=7;
//         console.log(d,s);
//         //let y=90; //we can accesse the block from glabal too
//         //block scope
//         if(true){
//             let y=90; 
//             console.log(y);
//             if(true){
//                 let x=60;
//                 console.log(x);
//             }
//             //console.log(x);//if we try to ptint here x will nt be defined
//         }
//     }
//     bc();
// }
// ab()

