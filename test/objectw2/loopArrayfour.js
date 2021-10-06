// //write a function that loops array and check each number is multiply of four.
// let a=[40,20,5,7];
// function loopArray(array){
//     let sum2=0;
// for(let value of array){
//     if(check(value)){
//         sum2+=value;
//     }
// }
// return sum2;
// }
// function check(num){
//     let counter=0;
//      return (num%4==0);
     
// }
// console.log(loopArray(a));

// ///////////////////////////////////////////////////
// //adding every element with other array
// let array1=[1,2,3], array2=[4,5,6];
// //console.log(a===b);
// let sum=0;
// for(let num of array1){
//     for(let num2 of array2){
//         sum+=num+num2
//     }
// }
// console.log("nested loop sum ",sum)//128
// ///////////////////////////////////////////////////////////
// //equality

// // function equal(arr1,arr2){
// // let flag=false;
// //  for(let i=0;i< array1.length;i++){
// //      for(let j=0;j<array2.length;j++){
// //          if(array1[i]===array2[j]){
// // return true;
// //          }
// //      }
// //  }
// // }
// //  console.log(equal());
// function sum1(arr1,arr2){
//     let i=0;
//     for(let num of arr1){
//         sum+=num+arr2[i++];
//     }
//     console.log("passing parameter ",sum1);
// }

//// adding each elemets in arr1 to arr2 if there are more elements that dont mach will be push in new arr



function sumSum(array1,array2){
    let newArray=[];
let leng=array1.length >array2.length ? array1 : array2;
for(let i=0;i<leng;i++){
    if(array1[i]==undefined){
        newArray.push((array2[i]));
    }else if(array2[i]==undefined){
        newArray.push((array1[i]));
    }else{
    newArray.push(individualSum(array1[i],array2[i]))
}
return newArray;
}
function individualSum(c,d){
    return c + d;
}
}
let c=[1,2,3,3], d=[5,6,7,8,9,3];
console.log(sumSum(d,c));



