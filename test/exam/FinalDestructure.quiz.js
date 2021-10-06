/*
2 most used data structures in js are object and array
Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.
*/
//1.Destructure object into variables cruise,ocean. 
let ship = {cruise:"Titan",ocean:"Atlantic"};
console.log("expect Titan",ship.cruise) 
console.log("expect Atlantic",ship.ocean);

//2. What is the output when this code runs?
 let carObject = {car:"Toyota",make:2020};
  let{make,car} = carObject;
  console.log(make)//2020


//3. Destructing swimming and store the values in the given swimmingObj. 
let swimming = ["ring","goggles"]
let swimmingObj={};

// console.log("expect ring ",ring);
//  console.log("expect goggles ",swimmingObj.goggles)


// 4. Destructure javelin into myDistance. 
let javelin = {distance:133};
let myDistance; 
 console.log("expect 133 ",myDistance)//undefined


//5. Destructure football into given myShoes variable .

let football = ["shoes"];
let [j]=football;

console.log("expect shoes ",j)//un
//example
// let basket=["egg","apple","banana"];
// let [a,b,c,d]=basket;
// console.log(a,c);




//6. Destructure twoElements into 'onekey' variable.
 let twoElements = [1,2];
//console.log("expect 1 ",onekey)//1

//7.
 //let singleElementArray = [1]; 
 
 //let[base,code] = smallArray;
 // console.log(base)//1
  // console.log(code);//undefined
//8.
 let numberArray= [,,1,2];
  let[one=true,two="second",third = "four"] = numberArray;
   console.log(one);//____
console.log(two);//____
console.log(third);//____

//9. Destructure array into varibles, second and fifth.
let multipleItems = [45, "Maharishi",{consciousnes:{inner:true}},777,"Bye"]; 
let [first,second,th,fourth,fifth]=multipleItems;
console.log("expect Maharishi ",second)
console.log("expect Bye",th);

//10. Destructure object into variables, innerValue, message

// let obj = {a:1, b: "hi",c:true, d:{inner:"object"}} 
//  console.log("expect {inner:'object'} ",obj.d.inner) 
//  console.log("expect hi",obj.b);

 //11. What is the output when this code runs? 
 let nestedObj = {nested:{inner:"object"}}
let {nested:{inner:print}} = nestedObj ;
 console.log(print);//

 //9. What will appear in the console when the below program runs?

function river(){
   function ribbon(){
console.log(this);
 }
return {ribbon:ribbon} 
}
function flow(){
   river().ribbon();
} 
flow();