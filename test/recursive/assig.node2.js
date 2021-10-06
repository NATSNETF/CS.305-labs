function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer,brat);
   homer.descendents.push(bart, lisa, maggie);
   
//Log to the console the names of everyone in the tree.
   function printNames(abe){
       console.log(abe.value && abe.descendents);
       if(abe.descendents && abe.descendents.length>0){
           abe.descendents.forEach(function(child){
               printNames(child)
           })
       }
   }
   printNames(abe);

   //2.Given a target value, return true or false if there is a node in the tree with the target value. E.g., 
// contains(tree, “Lisa”) → true
// contains(tree, “Crusty”) → false
function contains(tree,name){
if(tree.value===name)
    return true;
    console.log("parent "+ tree.value);
if(tree.descendents && tree.descendents.length>0){
    for(let item of tree.descendents){
        console.log("parent " + tree.value + " child " + item.value);
        contains(item,name);
        if(contains(item,name))
        return true;
    }
}
return false;
}
console.log(contains(abe, "lisa")) //→ false
//console.log(contains(abe,"Lisa"));

//3. Given a target value, return the subtree with the found node or null if no match. Extend the 
// tree to have a more interesting test. Create a mocha test to run at least 2 or 3 tests on your 
// tree. 
// findSubtree(tree, “Homer”) → subtree with Homer as the root

function misMachingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    console.log("parent " + tree.value);
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
            console.log("parent " + tree.value + "child " + item.value);
            let matchingNode=misMachingTree(item,name);
            if(matchingNode){
                return matchingNode;
            }
        }
    }
    return null;
}
console.log("here ", misMachingTree(abe,"Lisa"));

//4.Create a new constructor function ListNode (based on TreeNode below) and use it to generate a 
//linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.  
function ListNode(value,next){
    this.value=value;
    //this.next=next;

} 
// let listNode=new ListNode(abe.value,);
// let maggieNode=new ListNode(maggie.value,null);
// let lisaNode=new ListNode(lisa.value,maggieNode);
// let bartNode=new ListNode(bart.value,lisaNode);
// let homerNode=new ListNode(homer.value,bartNode);
// let abeNode=new ListNode(abe.value,homerNode);

function createLinkedList(abe){
    let listNode=new ListNode(abe.value);
    listNode.next=new ListNode(homer.value);
     listNode.next.next=new ListNode(bart.value);
     listNode.next.next.next=new ListNode(lisa.value);
     listNode.next.next.next.next=new ListNode(maggie.value);
     console.log(JSON.stringify(listNode));
}
createLinkedList(abe)



