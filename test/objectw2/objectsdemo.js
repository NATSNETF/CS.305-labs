// const user={
//     name:null,
//     age:30,
// };

// user.name="john";
// console.log(user.name);
// console.log(user.age);
// let user1=user;
// console.log(user1.name,user1.age);

    function makeUser(){
return{
    name: "john",
    ref:this
};
    }
    let user= makeUser();
    console.log(user.ref);

    
        