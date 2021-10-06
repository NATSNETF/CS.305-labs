// let x=[1];
// let y=x;
// console.log(x===y);
// console.log([1]===[1]);
// let myvar;
// console.log(myvar);
//  let father=null;
//  let mother;
//  console.log(father,mother)
//  console.log('banana'>'apple');
// //14 
// function moreFun(){
//     const x=2;
//     if(x>2){
//         return 100;
//     }else{
//         return;
//     }
//     const returnVal=moreFun();
// }
// let myArray=[[1,2],[3,4],[5,6]];
// console.log(myArray[2][1])

// /////////////
// if('false'){
//     console.log(0);
// }
// else{
//     console.log(1);
// }
// function myfun(){
//     console.log("oh happy day !");
// }
// const retunval=myfun();


let array=[1,2,3,4,5,];
let arrsum=0;

for(let x of array){
    arrsum+=x;
}
console.log(arrsum)

function arsum(arr){
    let s=0;
    for(let y of arr){
        s+=y;
    }
    return s;

}
console.log("expected value 6 = " + arsum([1,2,3]))




