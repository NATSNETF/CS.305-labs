const arr1=[1,10];
const arr2=[1,10];
const arr3=arr1;

console.log(arr1===arr2);//f .
console.log(arr2===arr3);//f .
console.log(arr1===arr3);//t .
console.log(arr1==arr2);//f /
console.log(arr2==arr3);//f
console.log(arr1==arr3);//t
console.log(arr2[1]===arr3[1]);//t
console.log(arr2[1]==arr3[1]);//t

