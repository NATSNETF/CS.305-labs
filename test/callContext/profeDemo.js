"use strict"
function context(){
    console.log(this);
}
let myObj={a:1};
myObj.context=context;  //add context to object
//myObj.context(); //how to call function from the object
//console.log(myObj.context);//this will give us (function)

let obj1={a:"hello"};
obj1.context=context;
obj1.context()
//console.log(obj1.context);
//setTimeout(obj1.context.bind(context),1000);


const abc={a:2,b:4,multipl:function(){
    console.log(this.a * this.b);
}}
abc.multipl();
setTimeout(abc.multipl.bind(abc),1000)

// let asma={city:"asmara", country:"Eritrea",display:function(){
//     console.log(this.city,this.country);
// }}
// asma.display();
// setTimeout(asma.display.bind(asma),10000);


// const def={a:3,b:2};
// // function yo(){
// //     console.log(this);//{ a: 7, b: 6 }
// //     console.log(this.r -this.k);//44
// // }
// setTimeout(abc.multipl.bind(def),1000) //we can also bind other function and print togather
// //setInterval(function(){abc.multipl.call(def)},1000); //it will print non stop


//this
function a(){
    console.log(this);//window ,,,b/c it is global
}
const b ={
    dog:'fido',
    log: function(){
        console.log(this);
    }

}
//console.log(this);--->>>> {}
//a();
 //b.log();//{ dog: 'fido', log: [Function: log] }
 let myLog=b.log;
 //myLog();//same like a(). when we assign to myLog...it is global so it will print window


 let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }};
    setTimeout(function() { user.sayHi(); }, 1000); //wrapped versus just “user.sayHi”
    //Or
    setTimeout(() => user.sayHi(), 10000);


    //////////////////////////////////////call apply
    const me = {
        first: 'titi',
        last: 'tomas',
        getFullName: function() {
        return this.first + ' ' + this.last;
        }
        }
        const log = function(height, weight) { // ‘this’ refers to the invoker
        console.log(this.getFullName() + height + ' ' + weight);
        }
        const logMe = log.bind(me);
        logMe('180cm', '70kg'); // titi tomas 180cm 70kg 
        log.call(me, '180cm', '70kg'); // titi tomas 180cm 70kg 
        log.apply(me, ['180cm', '70kg']); // titi tomas 180cm 70kg //array
        log.bind(me, '180cm', '70kg')(); // titi tomas 180cm 70kg 