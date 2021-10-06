let userName = 'John';
// outor variable.
//a function can access an outer variable as well and it can modify it as well 
function showMessage() {
     userName='petty' //we can modify the outer variable here too
  let message = 'Hello, ' + userName; //userName is an outor variable and we can access it too
  
  console.log(message);
}

showMessage(); // Hello, John
////////////////////////////////////////////////////////////
//passing parameter
function showMessage1(From, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    console.log( from + ': ' + text );
  }
  
  let from = "Ann";
  
  
  showMessage1(from); // *Ann*: Hello

  //////////////////////////////////////////////
  function showMessage3(text) {
    // ...
  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    console.log(text);
  }
  
  showMessage3(); // empty message
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from ); // Ann