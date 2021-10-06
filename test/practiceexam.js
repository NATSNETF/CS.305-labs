// // let letters=['a','b','c'];
// // for(let x of letters){
// //     console.log(x);
// // }

// function somethingOdd(s){
//     let product=1;
//     for(let e of s){
//         if(e%2 !==0){
//         product*=e;
//         }
    
//     return product;
    
// }
// console.log(somethingOdd([1,3,2]));
// }

// function naxa(m){
//     let sum=0;
//     for(let x of m){
//         sum+=x;
//     }
//     return sum;
// }
// console.log(naxa([1,2,3]))

// function multiple(m){
//     let pro=1;
//     for(let ele of m){
//         pro*=ele;
//     }
//     return pro;
// }
// console.log(multiple([2,3,4]));


// let longest="";
// function longestWord(long){
//     for(let i=0;i< long.length; i++){
//         if(longest < long[i].length){
//             longest=long[i];
//     }
//     return longest;
        
//     }
//     console.log(longestWord(["www","eeeee","tttt"]));

// }

// let array1=[[1,2,3],
//         [4,5,6],
//         [9,5,4],
//         [3,4,5]];
// let s=1;
// for(let x of array1){
//     for(let y of x){
        
//         console.log([x]*[y])
//     }
// }


 function leng(s){
     for(let x of s ){
         return x;
     }
     
 }
 console.log(["l","m","n"].length);

 ////////////////////////////

 function averageOfMultiple(s){
     let pro=1;
     let ave=0
     for(let i=0;i< s.length;i++){
         pro*=i;
     }
     
     return pro;
 }
 console.log("expect: 10", averageOfMultiple([1,4,5,15,16]))