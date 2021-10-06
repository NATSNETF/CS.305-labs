// let calculater={
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     },
//     read(){
//         this.a = +prompt('a?',0);
//         this.b = +prompt('b?',0);

//     }

// };
// calculater.read();
// console.log(calculater.sum());
// console.log(calculater.mul());

let obj={
    name:"sami",
    name1:"naxa",
    name2:"kiki",
    age:30
}
for(let value of obj) {
    console.log(obj[value]);
}