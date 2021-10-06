//Q1..to get ave of each poins
const player1={name:"naxa",points:[1,2,3]}
const player2={name:"rehana",points:[4,5,6]}
const player3={name:"jojo",points:[7,8,3]}
const player4={name:"nipsi",points:[1,8.5]}

const players=[player1,player2,player3,player4];

function averagePoints(players){
//with reduce
return players.reduce(function(acc,current){
   let sum=current.points.reduce(function(sum,item){
        return sum + item;
    },0);
    //console.log(current.name);//it is holding all the names
    //console.log(current.points);holding all the point
    let average=sum/current.points.length;
    acc[current.name]=average;
    return acc;
},{});
}
console.log(averagePoints(players));

//////////////////////////////////////////2Q
//a.implement the ask function which should callBack the yes function if the user answers yes to the question,
//else calls back the no function.

function ask(question,yes,no){
if(question)
    return yes();
else
return no();
}
/////////////////////b.replace the showcancel and showOk function with arrow functions in the ask call
function showOk(){
    console.log("you agree...");
}
function showCancel(){
    console.log("you cancel it")
}
// let showOk=() => console.log("you agree");
// let showCancel=()=> console.log("you canceled the excution")

ask("do you agree?" ,showCancel,showOk);

///////////////////////////////////////Q3
//write function excutor,add and mult as defined by the test below
// //describe("excutor",function()){
//     it("tests add",function(){
//        assert.strictEqual(excutor(add,10,5)15)
//     })
// 
// function add(a,b){
// return a +b;
// }
// function multi(a,b){
//     return a * b;
// }
// console.log("excuttor 15 ",add(5,10))
// console.log("excuttor 50 ",multi(5,10))

//or
function excutor(fn,a,b){
    return fn(a,b);
}
  
let add=(a,b)=>a + b;
let mul=(a,b)=> a * b;

console.log(excutor(add,5,10));
console.log(excutor(mul,5,10));

//4Q
//a.creat an OBJ name calculater, with two method using an object literal.
//
let calculator={
    op1:0,
    op2:0,
    getValues:function(op1,op2){
        this.op1=op1;
        this.op2=op2;
        //here we can add properties as much as we wanted

    },
    sum:function(){
        return this.op1 + this.op2;
    },
    multi:function(){
        return this.op1 * this.op2;
    }
    }
    calculator.getValues(4,5);
    console.log(calculator.sum());
    console.log(calculator.multi());

    //constractor.

    // function calcu(){
    //     this.getValue=function(opera1,opera2){
    //         this.opera1=opera1;
    //         this.opera2=opera2;
    //     }
    //     this.sum=function(){
    //         return this.opera1 + this.opera2;
    //     }
    //     this.mul=function(){
    //         return this.opera1*this.opera2;
    //     }
    // }
    // let calcula=new calcu(3,4);
    // console.log(calcula.sum());
    // console.log(calcula.mul());

///////////////////////////////////////////////////////////////////////
//Q5
const number=[1,5,18,2,27,108];
//use filter, find and findindex 
//
//fun expre..
// number.filter(function(item){
//     if(item%2===0)
//     console.log(item)
// })
//ths is arrow
console.log(number.filter(item=>item%2==0)); //just filter(all even numbers)
console.log(number.find(item=>item%2==0));// finds the first element which is even
console.log(number.findIndex(item=>item%2==0)); //find the first index which is even number
console.log("-----------------");
// number.find(function(item){
//     if(item%2===0)
//     console.log(item)
// }) why it is printing all even number?

// number.findIndex(function(item){
//     if(item%2===0)
//     console.log(item);
// })
const num=[[1,2],[3,4],[6,9]];
let myArray=[];
num.forEach(function(item){ //[1,2]
    myArray.push(item.filter(item => item %2==0));
});
console.log(myArray);//[[2],[4],[6]]

//6Q.
function reorder(str){
    let arr=str.split(" ");
    arr.sort((a,b)=>a.length-b.length);
    console.log(arr.join(" "));
}
reorder("javascript is the  world's most popular programing ")

//Q6........................................................................................

//a)get average age, round the result to keep only two decimals.
//b)find the oldest man
let array=[{name:"ram",age:29},{name:"syam",age:40},{name:"dani",age:19}];

let summ=array.reduce((sum,item)=>sum + item.age,0);
console.log((summ/array.length).toFixed(2));

let maxi=array.reduce((max,current)=>{
    //if(!max.age)return current;
    if(max.age>current.age)
    return max;
    return current;
},{});
console.log(maxi);









