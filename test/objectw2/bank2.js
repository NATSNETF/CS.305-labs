

/* You need the module.exports when testing in node. Comment it out when you send your file to the browser */

/* must be at end of file if are exporting an object so the export is after the definition */

module.exports = {Bank }; //add all of

"use strict";
//1. creat bank object , bank , with methods
//the bank object should have a transactionDB property,which will be an array of
const Bank={
    transactionDb:[],
};
//customer object should will have properties cutoId and custotransaction
Bank.transactionDb=[
    {customerId: 1,customerTransactions:[10,50,-40]},
    {customerId: 1,customerTransactions:[10,50,-40]},
    {customerId: 1,customerTransactions:[10,50,-40]}
];

//d.saveTransaction(i,amout)saves this transaction amount to the customer list
Bank.saveTransction=function(id,amount){
    const customer=Bank.transactionDb.find(customer => customer.customerId===id);
    customer.customerTransactions.push(amount);
};
//debit add negative amount to customer transaction list
Bank.debit=function(id,amount){
    //make sure current balance  is > amount
    let balance=this.getBanalnce(id);
    if(balance.balnce > amount){
        this.saveTransction(id,-amount);
    }
};

Bank.getBanalnce=function(id){
    const customers=Bank.transactionDb.find(customer=>customer.customerId===id);
    let balance=0;
    for(let element of customers.customerTransactions){
        balance+=element;
    }
    return balance;
};
//cedit(id,amount)adds positive amount to customer transaction list

Bank.credit=function(id,amount){
    //const balance=this.getBalance(id);
    amount=Math.abs(amount);
    this.saveTransction(id,amount);

};
//return number .. return sum of all elements

Bank.bankBalance=function(){
    let balance=0;
    for(let customer of Bank.transactionDb){
        for(let element of customer.customerTransactions){
            balance+=element;
        }
    }
    return balance;
};

console.log("total Balance should be : ", Bank.bankBalance());
Bank.credit(1,20);
Bank.debit(1,1000);
console.log("total should be 105: ", Bank.bankBalance())