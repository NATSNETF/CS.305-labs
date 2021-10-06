//literals and properties
// an object
//by key "name" store value "naxa"
//by key "age" store value 20
let user1 = {
    names: "naxa",
    age: 20
};
console.log(user1.name)

// //use existing variables as value for prperty name
// //the use case of making a property from a variable is so common,
// // that there is a special property value shorthand to make it shorter

// let makeUser = function (name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// //let us=makeUser("delina",18); 
// console.log(makeUser("delina", 18))
//  console.log(makeUser("kiko",16))
// //property names limitation:
// //as we already know, variable can not have a name equal to one of language reserved words like "for","let","return"
// //but for an object property, there are no such restriction ,we can use any string or symbol
// // let obj = {
// //     for: 2,
// //     $: 3,
// //     return: 4
// // };
// // console.log(obj.for + obj.$ + obj.return);

// // //for instance, a number 0 becomes a string "0" when used as a property key;
// // let objc = {
// //     0: "test"
// // };
// // // the number 0 is converted to string.
// // //console.log(objc["0"]);
// // console.log(objc[0]);

// ////1./Object references and copying
let message='my name is naxa and i am from california ';
//let phrase=message;
console.log(message);

// //2. one object with 2 variable.We can use either variable to access the object and modify its contents:
// //It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user),
// // we are still opening the same cabinet and can access the changed contents.
// //here is some example.
// let person={name3:'john',age:30};
// let admin=person;

// admin.name3 ='pet';
//  console.log(person.age)

//  let a = {firstName:'rodas'};
//  let b=a;// copy the reference
 
//  //b.firstName='ferdos'
//  console.log(a.firstName)
//  console.log(b.firstName)
//  console.log( a == b ); // true, both variables reference the same object
//  console.log( a === b ); // true

//  //3And here two independent objects are not equal,
//  // even though they look alike (both are empty):
//  let a1 = {};
// let b1 = {}; // two independent objects

// console.log( a1 == b1 ); // false
// //************************************************** */
// //Cloning and merging, Object.assign
// //  we need to create a new object and
// // replicate the structure of the existing one by iterating over its properties
// // and copying them on the primitive level.
// let user1 = {
//     name: "John",
//     age: 30,

//   };
  
//  // let clone = {}; // the new empty object
  
//   //let's copy all user properties into it
//   for (let index in user1) {
//     clone[index] = user1[index];
//   }
  
//   // now clone is a fully independent object with the same content
//  // clone.name = "Pete"; // changed the data in it
//  // clone.age=20;
//   console.log(clone.name)
//   console.log(clone.age)
//   console.log(user1.name)
//   console.log(user1.age)                     
//  // console.log( user.name ); // still John in the original object

//copying the properties with out looping(clone)
let user = { name: "John" };

let permissions1 ={behaviour:'is a good student'};
let permissions2 = {gpa: 'he has 4:00 gpa'};

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// console.log(Object.assign(user, permissions1, permissions2));

// ///////////////////////////////////////
// //We also can use Object.assign to replace for..in loop for simple cloning:
// let user3 = {
//     name4: "John",
//     age0: 30
//   };
//   //the user3 is copied and we also add new value with in
//   let clone = Object.assign({name:'samra',salary:300}, user3);
//   console.log(clone)
////////////////////////////////////////
//Nested cloning Until now we assumed that all properties of user are primitive. 
//But properties can be references to other objects.
// What to do with them?
let user5 = {
    name: "abrham",
    sizes: {
      height: 182,
      width: 60
    }
  };
  
  console.log( user5.sizes.height); // 182

  ///////////////////////////////////////////////////
  let user6 = {
    name: "John",
    sizes: {
      height: 182,
      width1: 50
    }
  };
  
  let clone = Object.assign({}, user6);
  
  console.log( user6.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user6.sizes.width1++;       // change a property from one place
  console.log(clone.sizes.width1); // 51, see the result from the other one