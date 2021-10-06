let users=[
    {id:1,name:"jo"},
    {id:2,name:"pe"},
    {id:3,name:"mary"}
];
// //1.get users who will have id of greater than 1.
// for(let i =0; i<users.length; i++){
//     //console.log(users[i].id)
//     if(users[i].id>1){
//         console.log(users[i]) 
//     }
// }
// filter based on condition
// let userId= users.filter(id=>{
//     console.log(id)
//     return id>1;
// })
//console.log(userId)

// console.log([1,5,3,4,6].find(n=> n%2===0))
// //return 1 value
let user=users.filter(function(us){
    //console.log(us)
    return us.id>1;
});
console.log(user);

// // find index of element
 let names = ['abc', 'dsc', 'sww', 'bbd']

//     for(let i=0; i<names.length; i++){   
//     name
// }

// // index of elements
//     for(let i=0; i<names.length; i++){
//    console.log(names[i], i) // elements of array
//     if(names[i]==='sww'){
//         console.log('here you go '+ i)
//     }
// }
// map
 names.map((name,i,ele)=>{ console.log(name,i,ele)}) 
//indexOf()
console.log(names.indexOf)

// // // sort
let num = [1,2,3]
console.log('sort ' + num.sort((a, b)=> a-b))

let arr = [1,2,23,4,5]
let sum = 0;
for(let n of arr){
    sum+=n
}
console.log(sum)
//reduce
let sumNu= arr.reduce((val, ele)=>{
    //console.log(val, ele)
    return val+= ele
}, 0)

//console.log(sumNu)
// find max
let max= arr.reduce((val, ele)=>{
    return Math.min(val, ele)
})
console.log(max)


