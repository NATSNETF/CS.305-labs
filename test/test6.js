
//Write a program that computes volume of a cylinder based on user inputs for 
//radius and height of a cylinder, using formula v = πr2h//
const prompt=require('prompt-sync')();

let radius= prompt("please enter radius value: ");
let height= prompt("please enter height value: ");

radius= parseFloat(radius);
height= parseFloat(height);
let valume=Math.PI * radius * height; //------///v = πr2h


 console.log(valume);
///////////////////////////
//relational operation

let u=5;
// let bar ="four";
// let p="7";
// console.log(u < 9);
// console.log(u <= 5);
// console.log(u > 5);
// console.log(u >= 5);
// console.log(u ==p);
// console.log(u== bar);
// console.log(u===p);
// console.log(u < "five");
// console.log(1==true);
// console.log(1===true);


// ///////////////////////////////
// //short circut//// like if and else
// let x=false;
// let y= x || 5;  
// console.log(y);//5
// /////////////////////
// let f=true;
// let j=f || 10;
// console.log(j);
// /////////////////////////////assignment 1///////////////
// let a=3, k=3, r=5;
// let s=(a + k + r)/2;
// console.log(s);
// console.log('new line.......................................')

// let w= 2, n=4, p=2;
// let q=2*w + (6 - n)/3*Math.pow(2);
// console.log(q)
// console.log('new line.......................................')
// let b= 9, z=2, e=1;
// console.log(b*= z -e);

// ////////////////////////////
// let age ="2";
// console.log(age+2);


// //////////////////////////////////////////selection/////////////////////////////////////////  
// const day_of_week=7;
// let weather = "sunny";

// if (day_of_week >  5){
//     alert('sleep till noon');
// }

// if(day_of_week === 7 || weather=== "sunny"){
//     alert("lets go for swimming");
// }