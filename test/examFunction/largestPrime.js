

function largestPrimeFactor(n){
    let largePFactor=2;
    for(let i=2;i <=n;i++){
        if(n%i==0){
            if(isPrime(i)){
                largePFactor=i;
            }
        }
    }
    return largePFactor;
}

 function isPrime(nu){
     for(let i=2;i< nu;i++){
         if(nu%i==0){
         return false;
         }
     }
    
 }
 console.log(largestPrimeFactor(10))