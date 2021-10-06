// // //1.write a function that prints"hello" to the console and schedule it to run after 10 secounds

function sayHi(){
    console.log("hello");
}
//setTimeout(sayHi,1000);

// // ////2.write a function that stores a counter and increments it by 1 and prints it after every one second until counter is less than 5

 function incrementCounter(){
    let counter=0; //------------->store the counter the return function is the one that count n prints
    return function(){
    counter++;
    console.log(counter);
    if(counter>=5)//--------------------->until 5 
    clearInterval(this);
    }
 }
setInterval(incrementCounter,1000)

// // //3 create an object with two properties,city default value is fairfield and state default value is lowa using object literal

let obj={
    city:"fairfield",
    state:"Iowa",
    
}
// // //4 update property pin to 500081 and add property state  (value=TE)to the following object
let adress={city:"asmara",pin:5000083}
console.log(adress);
let x=adress.pin=500081;
let y=adress.state="zoba makel";
console.log(("pin "+ x),("state " + y));

// // //5 
function run(caller,counter){
    console.log("caller",caller);
    console.log(counter++);
}
setTimeout(run,100,"timer",5)
//Schedule the above function to run after 100ms with arguments, caller="timer" and counter=5

// //6 create a deep copy( when orginal object is changed, it shuld not change the copied object) of the given object(do not use destructure assignment);
// let phone={area:1, number:6194676980,countryCode:81};
// let ph=phone;
// console.log(ph);
// phone.area=2
// phone.countryCode=8;
// console.log(phone);

// //using for loop to copy
// let duplicate={};
// for(let key in phone){
//     duplicate[key]=phone[key];
// }
// console.log("duplicate "+ duplicate);

// //7 create a new object, newCategory that has properties name(with value copied from category in book) 
// //and numberOfBooks(with value copied from numberOfBooks in category)object

// let book={category:"science",price:100}
// let category={title:"science",numberOfBooks:3}
// book.category="maths";
// //console.log(book.category); 
// let newCategory={name:book.category,numberOfBooks:category.numberOfBooks};
// console.log(newCategory);
// //console.log(book.category);


// //8 what will appear in the console when this program runs

function modify() {
    ship.part2 = "Main Mast";
    console.log(ship);
  
  }
  
  let ship = { part1: "rudder", part: "Captain's Cabin" };
 modify();
 //ship.par2="hello";....we can modifiy here since it is global n get the
  console.log(ship);

// //9write an exprssion to remove traversal1 property from tree
let tree={traversal1:"depth-first",traversal2:"breadth-first"}
delete tree.traversal1;
console.log(tree);

//what will be the output

function update(rocket){
    rocket.nozzle="funnel shaped";
    d=8
    console.log(rocket,d);
}
let rocketOuter={ejection:"front part "};
let d=9;
update(rocketOuter);
console.log(rocketOuter,d);


