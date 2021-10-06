//number 1.
let double = function (num) {
    return 2 * num;
  };
  console.log("value expectetion is 10 = ", double(5));
  //2.
  let times100 = function (num) {
    return 100 * num;
  };
  console.log("value expectation 200 = ", times100(2));

  //3.
//   let arr1 = [1, 2, 3];
// let newArray = arr.map(function (ele) {
//   return ele * 100;
// });
// console.log(newArray);
/**---3--- */
let arr = [1, 2, 3];
function myfun(n){
    return n * 2;

}
function m(arry,fn){
    let temp=[];
    for(let item of arry){
        temp.push(fn(item))
    }
    return temp;
}

console.log(m(arr,myfun));

//4.
let mp=function(arrays){
    let tem=[];
    for(let items of arrays){
        tem.push(items * 3)
    }
    return tem;
}
console.log(mp(arr));

let mprow=(arrayss)=>{
    let tempo=[];
    for(let items of arrayss){
        tempo.push(items * 3);
    }
    return tempo;
}
console.log(mprow(arr));