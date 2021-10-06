function Bank(accNo,name,balanceAmount){
    this.accNo=accNo;
    this.name=name;
    this.balanceAmount;

}
this.withdraw=function(amount){
    this.balanceAmount=this.balanceAmount+this.balanceAmount

}
let getBalance= function(){
    return balanceAmount;

}
let b1=new Bank(134,"naxa",56748);
let b2=new Bank(126,"abel",56865);
let b3=new Bank(190,"dani",74865);

let arr=[b1,b2,b3];
let sum=0;

for(let value of arr){
    sum+=value.getbalance()
}
//i want to know the balance person names 
//i want to know the balance person amned naxa
// change name abel of person to sami with the accountnumber
// let balance=arr.reduce(function(sum,current){
//     return sum +current;
// },0);
// console.log(balance);

//   this.deposit=function(balanceAmount,amount){
//       this.balanceAmount=this.balanceAmount+amount;
//   }
    

//change name
function changeName(accNumbers){
    for(let value of arr){
        if(value.accNo==accNumbers)
        value.name=newName;
    }
}

    //working on array....
    //create the length array of names[]

    arr.map(function(item){
        return item.name.length;
    })

    //reduce
    console.log(arr.reduce(function(accumlator,current){
return accumlator + current.getBalance();
    }),0)


    //filter....
    //i want have a account that have greater than 500... arr > 500
let account=[];
    for(let value of arr){
        if(value.getBalance()>500)
account.push(value);
    }
//using filter now
arr.filter(function(item){
    return item.getBalance()>500;
})
//using arrow.
console.log(arr.filter(item => item.getBalance()>500));

//banks that are > 500 and return the array of
//account holder names length




//arrow and /function expre
// let arrow=aco=> aco.getBalance()>500;
// function arrowfn(aco){
//     return accNo.getBalance()>500;

// }
// console.log(arr.find(arrowfn));


