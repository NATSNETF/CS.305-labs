// let x =2;
// let y= "7";
// // let g=false;
// // console.log(x==g)// x 1== g 0
// let test= true;
let b=true;
let n =5;
console.log(typeof b, typeof n);
let s1 = String(b);
let s2 = String(n);
console.log(typeof s1, typeof s2);
// let result= x + y;
// console.log(result);
// console.log(typeof result);

// console.log(",,,,,,,,,,,,new line,,,,,,,,,,,,,,,,")

// result= x + test;
// console.log(result);
// console.log(typeof result)
// console.log(",,,,new line,,,,");
// //implicity_type converting
// //it is what javasc do it convert 

// result= test + y;
// console.log(result)
// console.log(typeof result);

// console.log(",,,,new line.....")
// result = y / 2;
// console.log(result);
// console.log(typeof result)

// console.log("........................")
// // excplicity converting integer to string... when u do manually
// let num=5;
// let string_num= 5 + '';
// console.log(string_num);
// console.log(typeof string_num)

//////////////////////////////////////////////////////
//increment and decrement
// let count1 =1;
// let count2=2
// //console.log(count1)
// //console.log(++count1)//preincrement
// console.log(count1)//1
// console.log(count1++)//1
// console.log(count1)//2
// // console.log(count2++) //2. first the number will be called then after get printed it increment
// // console.log(count2)//3 the result shows here
// // console.log(++count2)

// let result2= --count1 * 2 + 5; // 1st call the number multiply with 2 + 5 then decrement
// console.log(result2) //9
// console.log(count1)//1

//testing if else statments.
// let x=1, y= 7;
// let message='welcome';
// if(x < 2){
//     if(y > 10){
//         message='hello';
//     }
//     else{
//         message='goodbye';
//     }
// }
//the following statment contains a logic error and not sytax error
// let age=21;
// if(18 < age && age < 30){
//     console.log('adult');
// }
// // logic error and not syntax error
// if(age== 18 && age== 19){
//     console.log('adult')
// }

//after the following code excutes, what value will the variable result hold?
let x= 2, y= 8, z=5;
let result=(x < 3 && (y < 7 ^ z != 8));
console.log(result);