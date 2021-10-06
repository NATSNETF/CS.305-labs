// function linkedlist(){
//     let c ={value:"C",next:null}
//     let b ={value:"B",next:c}
//     let a ={value:"A",next:b};

//     console.log(a);
//     a.next=a.next.next;
//     console.log(a);

//     delete b.next;
//     a.next.next=b;
//     c.next={value:"2"}; //we can set a value in c 
//     //console.log(a);
//     c.next.next={value:"B"};
//     console.log(JSON.stringify(a));
    
// }
// linkedlist();


function listNode(){
    
    let c={value:"C",next:null};
    let b={value:"B",next:c}
    let a={value:"A",next:b}
console.log(a);
a.next=a.next.next; // to delete b.
b.next=null;
a.next.next=b; // b is added end (c=b)
c.next={value:"z"};
c.next.next=b;
console.log(JSON.stringify(a));
}
listNode();

function fn(x){
    console.log(x)
}
fn(1,2);//• Extra arguments are ignored//it will print only 1
fn()//undefined