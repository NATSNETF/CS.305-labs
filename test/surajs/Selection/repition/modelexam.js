function tellMyPersonality(n){
    if(n % 2 === 0){
        return ("Fair!");
    }else{
        return ("Biased!");
    }
}
let prompt = require("prompt-sync")();
let number = prompt("please enter any number: ");

console.log(tellMyPersonality(number));


