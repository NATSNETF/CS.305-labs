
// // Create a function to replace key with value in an object. Assume the property values are only strings.
// // convertKeyToValue({key1:"value1",key2:"value2",key3:"value3"})->
// //{ value1: 'key1', value2: 'key2', value3: 'key3' }
// let convertKeyToValue = { key1: "value1", key2: "value2", key3: "value3" };
// let value1 = {};

// Object.entries(convertKeyToValue).forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];

//   value1[value] = key;
// });

// console.log(value1);
// //Create a function makeCaluculator that returns the inner functions to perform the addition,subtraction and multiplication.
// //Inner function can take any number of arguments (use spread operator). (use reduce )
// console.log("expect 10:",makeCaluculator().add(1,2,3,4));
// console.log("expect -19:",makeCaluculator().subtract(3,1,8,9,4));
// console.log("expect 3:",makeCaluculator().multiply(3));//


// // [
// //     { name: 'Finance Manager', children: 0 },    
// //     { name: 'HR Manager', children: 0 },
// //     { name: 'Administration VP', children: 2 },  
// //     { name: 'Research Director', children: 0 },  
// //     { name: 'Investment VP', children: 1 },      
// //     { name: 'President', children: 2 }
// //   ]
//   function TreeNode(value){
//       this.value=value;
//       this.presdents=[];
      

//       const presdent=new TreeNode("presdents");
//       const InvestmentVp=new TreeNode("InvestmentVp");
//       const administrationVp= new TreeNode("administrationVp");
//       const ResearchDirector=new TreeNode("Research Director");
//       const HRManager= new TreeNode('HR Manager');
//       const FinanceManager= new TreeNode("Finance Manager");

//      presdents.presdent.push(administrationVp,InvestmentVp);
//      presdents.administrationVp.push(FinanceManager,HRManager);
//     presdents.InvestmentVp.push(ResearchDirector);
//     

function makeCalculator(){
    return{
        add:function(...more){
            return more.reduce((sum,current)=>sum + current)
        },
        subtract:function(...more){
            return more.reduce((sum,current)=>sum - current)
        },
        multiply:function(...more){
            return more.reduce((sum,current)=>sum * current)
        },
    }
}
console.log(makeCalculator().add(1,2,3,4,8))


//let json=
function converkey(json){
    for(let key in json){
        let value=json[key];
        json[value]=key;
        delete json[key]
    }
    console.log(json);
}
let json={key1:"value1",key2:"value2",key3:"value3"};







