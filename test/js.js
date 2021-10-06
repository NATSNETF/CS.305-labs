// // Array & Objects
// let a =1;
// let person = {
//     name: 'Naxi',
//     age: 20,
//     // method
//     nameAge: function(){
//         console.log('my name is ' +this.name + this.age + ' years old' )
//     }
// }
// console.log(person.nameAge())
 //let arr = [1,2,3,4,5]

// for(let i=0; i<arr.length; i++){
//     //console.log(i)
// }
// // map, filter, reduce, sort
// function add(a,b){
//     return a+b;
// }
// let add1= ()=> a+b;
// //console.log(add(3,5))
// //add1(3,5)

// // map
// arr.map(num=>{
//     console.log(num *2)
// })
// arr.filter(num=>{
//     console.log(num, num%2!==0)
// })
// // method => function that resides inside object
// // function 
// function name(){
//     console.log('Naxza')
// }
// name()

// let a= [6,2,4,3].sort((a,b)=>{
//    return b-a
// })
// let red= [6,2,4,3].reduce((i, cul)=>{
//     return cul+=i
// })
// console.log(red)
// let arr= [6,2,4,3];
// let sum = 10;
// for(let i=0; i<arr.length; i++){
    
//      sum+=i
//     return sum
// }
//console.log(sum)

//OOP
class Person{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    ageName(){ console.log(`my name is ${this.name} and am ${this.age} yrs old`)}
}
const p1 = new Person('Naxa', 22)
console.log(p1.ageName())

// DOM Manuplation Document Object 
// html, css , js => connection 
const click = document.getElementById('click')

function hello(){
    console.log(Math.floor(Math.random() *10))
}
