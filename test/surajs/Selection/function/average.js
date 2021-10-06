function grade(m,f){
    let average = (m + f)/2*2;

    if(average >= 92){
        return ("A");
    } else if(average >= 85 && average < 92){
        return ("B");
    } else if (average >=75 && average < 85){
        return ("C");
    } else{
        return ("NC");
    }
}

let prompt = require("prompt-sync")();
let value1 = parseFloat(prompt("please enter the first value : "));
let value2 = parseFloat(prompt("please enter the second value : "));

console.log(grade(value1,value2));

      
