function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      console.log('Do you have permission from your parents?');
    }
  }
  let prompt= require('prompt-sync')();
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }

  function showPrimes(n) {
    //nextPrime:
     for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }

  function getPow(x,n){
      console.log(Math.pow(x,n));

  }
  getPow(3,2);
   
  function getSum(x,y,w){
      console.log(x + y + w)
  }
  getSum(2,8,1)

  function getMin(a,b){
      if(a < b){
          console.log(a);
      }else{
          console.log(b);
      }
  }
  getMin(3,2);




//   function max(a, b) {
//     return a > b ? a : b;
//   }
//   console.log(m(4,9))

////////////////
//with ternary operator ?
  function checkage(ages) {
    return (ages > 18) ? 'pass' : 'fail'
    
  }
  console.log(checkage(16));


