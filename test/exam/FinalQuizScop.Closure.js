//Variable Scopes and Closures Quiz
//1.
 let grapes = "green";
function fruits(){
    return function(message){
    return grapes;
 }
    }
     console.log(fruits()());

    //  a.nothing
    // b.error
    // c.undefined
    // d.green
    //2.
     let x = 10; function globalVar(){
    return function(){
    
    return x; }
    }
    x = 20;
    let fn = globalVar(); 
    console.log(fn ());
    //  a.undefined 
    //  b.error
    // c.20
    // d.nothing
    //3.
     function sport(message){ message = "Hi";
    return function(message){
    return message; }
    }
    let sportFn = sport("Hello");
     console.log(sportFn ());
    //   a.Hello
    // b.Hi
    // c.Undefined
    // d.nothing
    //4.
     function test(x){
          x = 10;
    x++;
    return function(){
     
    return x++; 
    }
    } 
    console.log(test(2)()) 
    // a.Error
    // b.Undefined
    // c.11
    // d.12
    //5.
     function makeAdder(x){
          return function add(y){
    return x+y; }
    }
    let adder1 = makeAdder(2);
     console.log(adder1(10));
     //____________ console.log(adder1(14));//______________
    let adder2 = makeAdder(5); 
    console.log(adder2(10));
    //______________ console.log(adder2(14));//_____________
    //6.
     function callMe(){
          console.log("callMe") 
    
          function inner(){
    console.log("Inside") }
    
    inner();
     }
    callMe();//_____________
    //7.
     function outer(){
          console.log("outer")
           function innerCall(){
    console.log("innerCall") }
    innerCall();
     }
    outer().innerCall();//____________
    //8.
     function car(){
    let color = "white"; function seat(){
    let color = "brown";
     }
    console.log(color)
     }
    car("black")
    //a.white b.brown c.undefined d.black
    //9.
     function department(){
    
    let numberOfDepartments = 5; 
    function software(){
    let language = "javascript";
     }
    console.log(language)
     }
    department() 
    // a.Undefined b.javascript c.Error
    //10.
     function department(language){
         let numberOfDepartments = 5;
          function software(){
    let language = "javascript"; 
    }
    console.log(language)
     }
    department("java");
    //  a.Error
    // b.javascript
    // c.java