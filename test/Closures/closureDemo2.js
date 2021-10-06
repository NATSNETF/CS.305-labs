
//scope
// //1
// let x=9;
// function hi(x){
//     console.log(x);
// }
// hi(x)//9

// //2
// let x=9;
// function hi(x){
//     console.log(x);
// }
// hi();//undefined

// //3
// let x=9;
// function hi(x){ //x is undefined 
//     console.log(x);
//     function inner(){
//         console.log(x);
//         //all is undefined
//     }
//     inner();
// }
// hi();

//4
//notes.
//function can create daynamically
let j=8;
function hi(x){
    let k=10;
    console.log(x);//6
    return function inner(x){ // <- function can create dynamically
        console.log(x,j);//9
       
    }
}
let innerCall=hi(6)(9);
//function expression<- copied to another variable
let hi3=function(fn){
fn();
}
//and passed as an arguments to another function
function hi2(){
    console.log(k);
}
hi3(hi2);
