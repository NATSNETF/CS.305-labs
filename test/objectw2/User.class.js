function User(id,name,isadmin,age){
    this.id =id;
    this.name = name;
    this.isadmin= isadmin;
    this.aga=age;
}
let user1 = new User(1,"naxa",true,20);
let user2 = new User(2,"sami",true,30);
let user3 = new User(3,"hagos",true,60);
let user4 = new User(4,"mario",true,50);


let user6={name:"hello",age:60}
let user8={name:"hello",age:80}

let array=[user6,user8];
let sum=0;
for(let value of array){
    
    console.log(value);
    sum+=value.age;
}
console.log(sum)
console.log(sum/array.length);
