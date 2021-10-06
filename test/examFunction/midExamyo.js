//q1
console.log(typeof({key:1}));//object
console.log(parseInt("42px3e45"));//42
//q2.
let a=[1,2,3,4,5];
console.log(a.splice(2,2,"hello"));
console.log(a);//[ 1, 2, 'hello', 5 ] ?
//q3
let pattern={color:"blue",shape:"square",height:10};
delete pattern.color;
console.log(pattern);//{ shape: 'square', height: 10 }
//q4
let numberArray=[1,2,3,4];
console.log(numberArray[4]+6);//NAN
//q5
function role(){
    return "student";
}
console.log(role);//[Function: role]
//q6
let ab=50.2;
console.log(ab.toFixed(3));//50.200
//q7
var planets=["jupiter","venus","saturn"]; //
planets.forEach(function(item,index,array){
    planets.splice(1,1);
    console.log(planets);
});
//[ 'jupiter', 'saturn' ]
//[ 'jupiter' ]
//q8
let user={a:50,b:60,c:"string"};
function myfunction(){
    for(let key in user){
        console.log(key);
    }
}
myfunction(); //a b c

//6
const a2={name:"john",age:10};
const b=a2;
b.name="alex";
b.age=65;
console.log(a2===b);//t
console.log(a2.name);//alex

//7
//rewrite to arrow
// function printMe(){
//     console.log("hello");
// }
//printMe();
//arrow
let printme=()=>{
    console.log("hello");
}
printme();

//8?
let array=[1,"hello",true,2,"bye"];
array.map(function(item){
     console.log(typeof(item),item.length);
    })
    
