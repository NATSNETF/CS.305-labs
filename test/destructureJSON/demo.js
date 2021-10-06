// let arr = ["Ilya", "Kantor","Almond"]
// //sets firstName = arr[0] and surname = arr[1]
// //shortcut
// let [surname,firstName,myA] = arr;
// console.log(surname,firstName,myA);
// //string destructure
// let string=" natsnet estifanos fessehaye ";
// let[firstname, midelName,lastname]=string.split(" ");
// console.log(firstname,midelName,lastname);
// //destructure 2
// let [,,firstName1,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(firstName1, title, ); // Consul

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(" ");
// console.log(user.name,user.surname); // Ilya
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //mixed
// let arr1 = [[1, 2], 3, 4, "hello", { a: 1 }];
// let [num1, , greet] = arr1;
// let [num11, num22] = num1;//1 2

// console.log("num11 mixed  "+ num11,num22);
// let mixedArray=[[1,2],3,4,"hello",{a:1}];
// let[key1,key2,key3,key4]=mixedArray;
// console.log(typeof key1,typeof key2,typeof key3,typeof key4);



// // // let[varMore1,k,m,s,varMore2]=[1,26,8,4,54];
// // // console.log(s);

let team = [ "Bob", "Fred", "Jim"];
// destructure the team array onto variables with the same names as the elements, but all lower case
[bob,fred,jim]=team;
console.log(bob );
console.log(fred);
console.log( jim);

// // // // //➢destructuring assignment also works with objects
// // // // let options = {
// // // // title: "Menu",
// // // // width: 100,
// // // // height: 200
// // // // };
// // // // let {title, width, height} = options;
// // // // console.log(title); // Menu
// // // // console.log(width); // 100
// // // // console.log(height); // 200
// // // // //➢Properties are assigned to the corresponding variables. 
// // // // //➢order does not matter
// // // // let {height, width, title} = { title: "Menu", height: 200, width: 100 }


// // // const team1 = { one: "Bob", two: "Fred", four: "Jim", small: "Al", center: "Big Sleep" }
// // // // 1. destructure the team object onto variables with the same names as the properties
// // // console.log("expect Big Sleep", center);
// // // console.log("expect Jim", power);
// // // // 2. destructure the team onto variables: one (point guard), two (shooting guard), three (small 
// // // //forward), four (power forward) and five (center)
// // // console.log("expect Jim: ", four);
// // // console.log("expect Bob: ", one)


// // const data = {
// //     window: {
// //     title: "Sample Widget",
// //     width: 500,
// //     height: 500
// //     },
// //     image: {
// //     src: "images/logo.png",
// //     coords: [250, 150, 350, 400],
// //     alignment: "center"
// //     },
// //     messages: [
// //     {text: "Save", "offset": [10, 30]}, //[0] to get 30...
// //     {text: "Help", "offset": [ 0, 50]}, //[1]
// //     {text: "Quit", "offset": [30, 10]}, //[2]
// //     ],
// //     debug: true
// // };
// //     //const data = JSON.parse(jsonString)
// //     //what is the expression to get the tittle
// //     console.log(data.window.height);
// //     console.log(data.messages[1].offset[1]);//to get 30
// //     console.log(data.messages.length);


// // let john = {
// //     name: "John",
// //     surname: "Smith",
// //     isAdmin: false,
// //     birthday: { year: 2000, month: "February", day: 3 },
// //     friends: [0, 1, 2, 3],
// //    };
    
// //    let test = JSON.stringify(john);
// //    console.log(typeof test);
// //    console.log(test);
    
// //    //JSON Parse
// //    let test1 = JSON.parse(test);
// //    console.log(test1);
// //    console.log(typeof test1);

// let nestedObj={nested:{inner:{i:"object"},another:"hello"}}
// let{nested:{inner:i,another:a}}=nestedObj;
// console.log(i,a);


// let salaries={
//     "john":100,
//     "pete":300,
//     "mary":250
// };
// function topsalary(salaries){
// let maxSalary=0;
// let maxName=null;
// for(const [name, salary] of Object.entries(salaries)){
//     if(maxSalary < salary){
//         maxSalary=salary;
//         maxName=name
//     }
// }
// return maxName;

// }
// topsalary();
