// // const array=["apple","orange"];
// // console.log(array);
// // console.log(array.length);


// ////////////////////////////////////////
// let number=[10,20,30,40,50];
// let sum=0;
// let average=0;
// for(let i=0;i< number.length;i++){
//    // console.log(number[i]);
//     sum+=number[i];
// }
// console.log(sum)
// console.log("average " + sum/number.length); //150

// ///////////////////////////// for of
// for(let x of number){
//     console.log(x) // 10,20,30,40,50
// } 

// ///////compare bn two object

let array1=[1,2,3];
let array2=[1,2,3];
let array3=array1;
console.log(typeof array2)//object
console.log(array1===array2);//false
console.log(array1===array3);//true
 let index=0;
 for(let arrNum1 of array1){
    if(arrNum1 !==array2[index]){
    console.log("not equal");
    break;
 }
}
 index++;
//shift and unshift
let fruit=["aple","banana","orange"];
console.log(fruit,fruit.length);
fruit.shift();
console.log(fruit,fruit.length);

fruit.unshift("pear");
fruit[1]="pear"; // replacing 

console.log(fruit,fruit.length);
console.log(fruit.pop());
console.log(fruit.length);
console.log(fruit.push());

// ////////diamentinal array

// ////copy elements to other array

// let arrays=[1,3,4];
// let arrayss=arrays;
// console.log(arrayss);////// we just copy it all.

// // let animals=["dog","cat",23,40,"elephant"]
// // console.log(animals)
// // //we can replace or add new ???????
// // const scores = [];
// // for (let i=0; i<10; i++){
// // scores[i] = Math.ceil(Math.random()*100);
// // }
// // console.log(scores); //???????????????????


    
// let scores=[10,20,30,40,50];
// console.log(scores);

// //function findAverage([scores]){
//     let sum=0
//     for(let i=0;i< scores.length; i++){
//         sum+=scores[i];
//     }
//     console.log(sum/scores.length);
// console.log(Math.random(30,100));
// //console.log(findAverage[ave]);


///////////////////////////////////numbe 2...slid 9

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    console.log( matrix[2][2] ); 


// /////////////////////////Exercises/////slid 19


// // console.log(test2.length);






