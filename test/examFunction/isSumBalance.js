let array=[2,3,4,3];
function isSumBalanced(arr){
    if(array.length=== 0)return false;
    let evenSum=0;
    let oddSum=0;

    for(let n in array){
        if(n%2===0){
            evenSum += n;
        }
        else{
            oddSum += n;
        }
    }
    return evenSum===oddSum;
}
console.log(isSumBalanced(array))