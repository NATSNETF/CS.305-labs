// let Simo = class User {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         return `hello ${this.name}`;
//     }
//  }


// // let hi = new Simo("naxi")
// // console.log(hi.hello());

// function are(){
//     console.log(this);
// }
// const squarel={side:5,area:are};
// console.log(squaral.area());
// console.log(area());

// let myArea= squarel.area;
// console.log(myArea);


// //function wrapper
// setTimeout(function(){squarel.are()},100);



function makeCalculator(){
    return {
        add:function(...more){
            return more.reduce((sum,current)=>sum + current)
        },
        sub:function(...more){
            return more.reduce((minu,current)=>minu - current)
        },
        multi:function(...more){
            return more.reduce((pro,current)=>pro * current)
        }
    }
}
console.log(makeCalculator().add(1,3,4));
console.log(makeCalculator().sub(2,4,5));
