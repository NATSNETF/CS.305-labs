// // //create literal object 
// // let student={id:1,
// //     name:"fana",
// //     score:[1,2,3,4],
// // getAverage : function(){
// //     this.score.reduce(function(sum,current){
// //         return sum + current;
// //     },0);
// // }
// // };

// //lets create constructor function

function Student(id,name,score){
    this.id=id;
    this.name=name;
    this.score=score;

    this.getAverage=function(){
        this.score.reduce(function(sum,current){
            return sum + current;
        },0);
    }
    
}
//how do we creat object from this function
let st1=new Student(11,"mario",[1,2,3,4,]);
let st2=new Student(12,"makda",[5,6,7,8]);
let arr=[st1,st2]
console.log(arr.getAverage());
