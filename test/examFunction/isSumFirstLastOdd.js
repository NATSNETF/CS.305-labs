function isSumFirstLastOdd(number){
       let first=number[0]+number.length;
        if(first%2!==0){
        return true;
        }
        return false;
    }
console.log(isSumFirstLastOdd([3,2,9,5]));
    