// // // //2
function printParams(a,...x){
    console.log(a,x);
    console.log(arguments.length);

}
printParams(1,"a","b","c");

// // // //3
// // // let numberArray=[1];
// // // let[one,two]=numberArray;
// // // console.log(one);//1
// // // console.log(two);//undefined

// // // function displayName(name){
// // //     name="Madhusudhan";
// // //     return function(name){
// // //         return name;
// // //     }
// // // }
// // // let innerFun=displayName("Govida");
// // // console.log(innerFun());//undefined
// // // //6
// let magicNumber=10;
// function callMe(){
//     return function(){
//         return magicNumber;
//     }
// }
// magicNumber=20;
// let fn=callMe();
// console.log(fn());

// //7
// let upanishad={
//     name:"Isha",
//     print:()=>{
//         console.log(this.name);
//     }
// }
// upanishad.print();//undefined

// "use Strict"
// function languages(){
//     function english(){
//         console.log(this);
//     }
//     return{english:english}
// }
// languages().english();

//4
let narayana={alias:"krishna",element:"water"};
let{alias:a,element,alternate="casudeva"}=narayana;
console.log(element);
console.log(alternate);
console.log(a);
//console.log(alias);