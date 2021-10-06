let isEven = (a) => {return a%2===0;}
console.log(isEven(9));
let isOdd = (a) => a%2 !== 0;
console.log(isOdd(6));
let sayHello = () => console.log('HI'); // with out parameter
sayHello();
/// rewrite to function expression
let isEvenEx=function(a){
    return (a %2===0);
}
console.log(isEvenEx(2))

let isOddEx=function(b){
    return (b%2 !==0);
}
console.log(isOddEx(3));

///function declaration
function isEvenDec(c){
    return (c%2===0);
}
console.log(isEvenDec(4));