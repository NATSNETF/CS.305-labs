// /*
// Write a function, double, that takes a number and returns 2 times the number.
// */
// // we can call anonumos
// let double = function (num) {
//   return 2 * num;
// };
// console.log("value expectetion is 10 = ", double(5));
// //number2.
// let times100 = function (num) {
//   return 100 * num;
// };
// console.log("value expectation 200 = ", times100(2));
// //3
// /*
// Write a function, myMap, that takes an array and a function and returns a new array that has
// the function applied to each element of the input array. Use your myMap function with your
// double and times100 functions.
// */

let arr = [5, 10, 15];
let arr2 = [4, 5, 6];
// let newArray = arr.map(function (ele) {
//   return ele * 100;
// });
// console.log(newArray);
/**---3--- */
// const triple = function (n) { // anonoms
//   return n * 3;
// };

// const double = (n) => { // arrow
//   return n * 2;
// };

const m = function(array){
  let temp = [];
  for (let item of array) {
    temp.push(item * 3);
  }
  return temp;
};

console.log(m(arr));

//4
// let mytriple=function(array){
//     for(let i=0;i < array.length; i++){
//         array[i]*=3;
//     }
//     return array;
// }
// console.log(mytriple([1,3,4]));

// let a = [1, 2, 3];
// let newMe = a.map(function (ele) {
//   return ele * 3;
// });
// console.log("expecting value is 3,6,9 ", newMe);

// //4.arrow
// let useaArrow = (arrays) => {
//   for (let i = 0; i < arrays.length; i++) {
//     arrays[i] *= 3;
//   }
//   return arrays;
// };
// console.log(useaArrow([2, 3, 4]));

// // arr.forEach(function(element){
// //     console.log(element * 3)
// // });

