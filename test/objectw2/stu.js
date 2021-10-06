function Student(firstName,lastname,score){
    this.firstName=firstName;
    this.lastname=lastname;
    this.score=score;

}
let s1= new Student("Keith", "Levi",[1,2,3]);
let s2= new Student("Umur","Inan",[4,5,6]);

//printing name with foreach and with index
let arr=[s1,s2];
arr.forEach(function(item,index){
    console.log(item,index)
})
//print all item using map
arr.map(function(sum,item){
    return su
})
