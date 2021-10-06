function sum(a,b){
    return a*b;
}

//function expression

let s=function(a,b){
    return a*b;
}
console.log(s(2,3));

let d=(a,b)=>{return a * b}
console.log(s(2,3));

//2 annms
function squarRoot(element,fun){
    let x= fun(element);
    console.log(x)
    return Math.sqrt(x)
    
};
squarRoot(2,function(element){return element*2});
//3

function a(x){
    let b=function(){
        console.log(x);}
        console.log(b());
        return x;
    }
    a(5)

//4
