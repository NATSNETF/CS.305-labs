let promote=require('prompt-sync')();
// let age=promote("enter your age");

//  while(age < 18){
//     console.log("your age is invalid " + age);
//     age=promote("enter your age");
//  }
//   console.log(" valid age " + age);


 
 
//let age;
do{
   let age=promote("please enter your age");
    console.log("your age is " + age);
}
while(age < 18);
console.log("stop")


 
