const prompt = require("prompt-sync")();
let initialAmount = parseInt(prompt("please inter initial amount : "));
let interestRate = parseFloat((prompt("please inter interest rate in % : ")/100));
let numberOfYears = parseInt(prompt("please inter number of years : "));
 
function savingAccount(){     
 
    let ratemonthly = (1+ interestRate/12);
    let simplifiedRate =Math.pow(ratemonthly,numberOfYears*12)
 
    let compoundedInterst = initialAmount *(simplifiedRate) - initialAmount;
    return ( initialAmount + compoundedInterst);
 
}     
console.log(savingAccount());