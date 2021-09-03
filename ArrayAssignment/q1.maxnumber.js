module.exports={maxOfThree,sum,multiple,longestWord,reverseArray,reverseArrayInPlace,scoreExams};
// /**
//  * 
//  * @param {string} string   vowel checking
//  * @returns {boolean}        true or false
//  */ 
function maxOfThree(a,b,c){
    if(a >= b && a >= c){
        return a;
    }else if(b >= a && b >=c){
        return b;
    }else{
        return c;
    }
}
console.log("expected 3", maxOfThree(1,2,3));
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        

let s=0;
function sum(sm){                                                                                                                                                                                                                                                                    
    for( let n of sm){
        s+=n;
    }
    return s;
}
//sum();
console.log("expected 6",sum([1,2,3,]));
///////////////////////////////////////////////////////////////////////////////////////////
//b.
function multiple(mp){
let product=1;
for(let x of mp){
    product*=x;
}
return product;
}
console.log("expected value = 24 ",multiple([1,2,3,4]));

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//let words=["samu","joan","mario"];
let longest="";
function longestWord(words){
for(let i=0; i< words.length;i++){
    if(longest.length < words[i].length){
        longest=words[i];
    }
}
return longest;
}
console.log("expected value is = mario ",longestWord(["samu","joan","mario"]));


// // ////////////////////////////////////////////////////

// // //1 ReverseArray
// // let arr1 = [1,2,3,4,5]
// // console.log(arr1)
let revArray=[];
function reverseArray(a){
    for(let i=a.length-1; i >= 0;i--){
        revArray.push(a[i])
    }
    return revArray;
}
console.log("expected C B A",reverseArray(["A","B","C"]));

//let arr1 = [1,2,3,4,5]
function reverseArrayInPlace(arr){
  let temp = 0;
   for(let i=0;i<arr.length/2; i++){
      temp = arr[i];
      arr[i] = arr[arr.length-1-i] ;
       arr[arr.length-1-i] = temp;
   }
   return arr;
}
console.log("expected value= 5,4,3,2,1",reverseArrayInPlace([1,2,3,4,5]));
// // console.log("expected C B A",reverse(["A","B","C","D"]));
// // console.log(arr1)
////////////////////////////////////////////////////////////////////////////////////////////////////
const correctAnswers = [3, 1, 2,4];
 //  = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

function scoreExams(arr){
     let result =[];
     for(let i =0; i<arr.length; i++){
        let count = 0;
         for(let j=0; j<arr[i].length; j++){
             
             if(arr[i][j] === correctAnswers[j]){
                 count++;
             }
         }
         result.push(count);
     }
     return result;
    }
console.log("expected value=3,2,3",scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]]))

    
