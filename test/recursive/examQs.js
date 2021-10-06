// 1. Create Tree Node for the tree(refer attachment)
// 2. Write a program to count number of nodes in the trees(excluding root node).
// console.log("expect 5:",countNodes(root));
// 3. Write a program to add property , parent with value 'true' to the nodes that have children( not to the leaf nodes).
// 4. Write a program to return list all leaf nodes( that have no children).
// console.log(" expect [ 'Finance Manager', 'HR Manager', 'Research Director' ]",listAllLeaves(root));
// 5. Create an array of objects with count of children and  name of the node as properties
// flattenTree(root) ->
// [
//   { name: 'Finance Manager', children: 0 },    
//   { name: 'HR Manager', children: 0 },
//   { name: 'Administration VP', children: 2 },  
//   { name: 'Research Director', children: 0 },  
//   { name: 'Investment VP', children: 1 },      
//   { name: 'President', children: 2 }
// ]
function TreeNode(name,children){
    this.name= name;
    this.children=children;
}

let leaf3 = new TreeNode("leaf2");
let leaf2 = new TreeNode("leaf2",leaf3);
let leaf1 = new TreeNode("leaf1",[leaf2]);
//1.create 
let FinanceManager= new TreeNode("Finance Manager");
let HRManager = new TreeNode("HR Manager");
let ResearchDirector= new TreeNode("Research Director");
let AdministrationVP= new TreeNode("Administration VP",[FinanceManager,HRManager]);
let InvestmentVP = new TreeNode("Investment VP",[ResearchDirector]);
let root= new TreeNode("President",[AdministrationVP,InvestmentVP]);


//Write a program to count number of nodes in the trees(excluding root node).
function countNode(tree){
   let count=0;
   if(!tree.children || tree.children.length===0){
        return null;
   }
   for(let child of tree.children){
       count += countNode(child);
   }
   return count + tree.children.length;
}
console.log(countNode(root));


let leaves=[];
function listAllLeaves(tree){
    if(!tree.children || tree.children.length==0)
    return null;
    for(let child of tree.children){
leaves.push(listAllLeaves(child));
    }
    return leaves;
}
console.log(listAllLeaves(leaves.length));

//5. Create an array of objects with count of children and  name of the node as properties
// flattenTree(root) ->
function flattenTree(tree){
    let array=[];
    if(!tree.children || tree.children.length==0)
    return null;
    for(let child of tree.children){
        array=array.concat(flattenTree(child));
    }
    array=array.concat({name : tree.name,children: tree.children})
    return array;
}
console.log(flattenTree(root));