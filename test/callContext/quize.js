// // // // //1.
// // // // //print with strict
// // // // //print without strict

// // 'use strict'


// // function print(){
// //     console.log(this);
// //     function inner(){
// //         console.log(this);
// //     }
// //     inner();
// // }
// // print();


// // //2 
// // console.log(this); //{}
// // let a ={b:this}; //{b:{}}
// // let b = this;
// // console.log(b);
// // console.log(a);

// // // //4
// function printMe(){
//     console.log(this);
//     console.log(this.setTimeout); //??????????
// }
// printMe();

// // //5 with strict 
// function returnObject(){
//     function inner(caller){
//         console.log(caller,this);
//     }
//     let obj={innerFn:inner,a:1,b:2}
//     inner("without object");
//     obj.innerFn("with object")

// return 
// }
// let obj=returnObject();

// // // function returnObject(){
// // //     function inner(){
// // //         console.log(this);
// // //     }
// // //     inner();

// // // return {innerFn:inner}
// // // }
// // // returnObject().innerFn();


// // //7
// let gameOfChance={
//     dice:2,
//     spinningTops:false,
//     playerOne:function(){
//         let gameOfSkill={
//             playerTwo:function(){
//                 console.log(this);
//             }
//         }
        
//         gameOfSkill.playerTwo();//[Function: playerTwo] }
//     }
// }
// gameOfChance.playerOne();

//"use strict";
function area(){
    console.log(this); 
    console.log(this.side);
    return this.side * this.side;
    }
    const square1 = {side: 5, area: area};
    console.log(area.apply.square1);

    //object lit