function a(){
  console.log("print me");
  return function(){
    console.log("i am inner");
  
  return function(){
    console.log("i am here");
  }
}
}
setTimeout(a()(),0)//just to print after the sec we give
//console.log(a);
setTimeout(function(){
  console.log("print me after 2 sec");
},2000);
//setInterval(a(),1000); //countinue until u stop,

let timerout=setInterval(a(),1000)
clearTimeout(timerout);


  function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
  }
  let timerId=setTimeout(sayHi, 2000, "Hello", "John"); // Hello, John
  console.log(timerId);
  //clearTimeout(timerId)
  setTimeout(a(),1000,timerId)


//important
  let count=1;
  function interval(){
    console.log("i am here with u ",count);
    count++;
    if(count > 5)
      clearInterval(this);
    
  }
  //}
  setInterval(interval,1000);
  
  