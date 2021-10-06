function grade(m,f){
    return (m + f)/2 * 2;
}
const prompt = require("prompt-sync")();
const value1 = parseFloat(prompt("please enter the first value : "));
const value2 = parseFloat(prompt("please enter the second value : "));

console.log(grade(value1,value2));

    