let promote=require('prompt-sync')();
let age=promote("enter your age");

 while(age < 18){
    console.log("your age is invalid " + age);
    age=promote("enter your age");
 }
  console.log(" valid age " + age);


 
 
//let age1;
do{
   let age1=promote("please enter your age");
    console.log("your age is " + age1);
}
while(age1 < 18);
console.log("stop")


 
