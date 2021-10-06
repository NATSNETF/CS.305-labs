function aveOfMultiFour(arr){
    let counter=0;
    let sum=0;

    for(let j=0; j < arr.length;j++){
        if(arr[j]% 4==0){
            counter++;
            sum+=arr[j];
        } 
    }
    return(sum/counter);
}
console.log(aveOfMultiFour([1,4,5,15,16]));