const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
    }
    const properties = ["one", "two", "three", "four"];

    function pro(){
        for(let value of properties){
            console.log(value,numbers[value]);
        }
    }
    pro();

//     let user = {name:"he"};
// console.log( user.name === undefined );
    
let user1 = { name: "John", age: 30 };
user1.isjob=true;
user1.name="naxa";
console.log(user1);
console.log( "age" in user1 ); // true, user.age exists
console.log( "blabla" in user1 ); // false, user.blabla doesn't exist

console.log(user1.name);
console.log("naxa" in user1);

// let user3 = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//     };
//     for (let key in user3) {
//     // keys
//     console.log( key ); // name, age, isAdmin
//     // values for the keys
//     console.log( user3[key] ); // John, 30, true 
//     }

