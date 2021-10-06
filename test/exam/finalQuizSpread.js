// //spread and rest
/*
The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. 
The rest operator also allows us in destructuring array or objects.
The spread operator (…) allows us to expand an iterable like array into its individual elements.
*/
// function foo(){
//     for(let i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
// foo();//nothing

// function argumentsParams(a,b) {
//     for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i],a,b); }
//     }
//     argumentsParams(1,2);
//     //3. What will appear in console when this code runs?
//      function restParam(a,b,...more) {
//     for (let i = 0; i < more.length; i++) {
//          console.log(more[i],a,b);
//     } 
//      }
//     restParam(" " + 1,2);

    //4. What will appear in the console when this code runs? 
    function restOnly(...x) {
        for (let i = 0; i < x.length; i++) {
             console.log(x[i]);
        } 
    }
        restOnly();//we didnt pass parameter


    //5.What will appear in the console when this code runs? 
   function restMix(...x) {
     for (let i = 0; i < x.length; i++) {
       console.log(x[i]);
  }
      }
     restMix({a:1,b:2},[1,2,3]);

    //6 What will appear in the console when this program runs?
      function argsRest(a,...x) {
        console.log(arguments===x) //false
        console.log(arguments.length,x.length) //4,4
        console.log(typeof arguments, typeof x);//object object
        } argsRest(1,2,true,"hello",false);

       // 7. What will appear in the console when this program runs?
        function agrsRestParams(a,...x) {
            console.log(`args length ${arguments.length} , x.length ${x.length}`);
        //console.log(arguments);
            //console.log(arguments.length===x.length)
            } agrsRestParams([1,2],true,"hello","naxa","hanio");

// 8. What will appear in the console when this code runs?
let a = [1,2,3,4];
let b = {...a};
console.log(b);
//console.log(a,b);
console.log(a===b);

//9What will appear in the console when this code runs? 
//let str="hello Me";
// let stry=[...str].join("**");
// console.log(stry);
// console.log(str);


//10. What will appear in the console when this code runs?
// let obj = {a:2,b:3}
// let spreadObj = [...obj];//obj is not iterable
// console.log(spreadObj);
// console.log(obj);

//11. What will appear in the console when this code runs? 
let myObj={a:2,b:3}
let MyotherObj={...myObj}
console.log(MyotherObj);
myObj.c="it's still me";
console.log(myObj);
console.log(MyotherObj);

let str = "Hello";
for(let ax of str){
    console.log(ax);
}
// Array.from converts an iterable into an array
console.log( Array.from(str) ); // H,e,l,l,o