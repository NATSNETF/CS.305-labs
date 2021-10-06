function computeGrade (mid,Final){
    let average = (mid + Final)/2*2;

    if(average >= 92){
        return ("A");
    }else if(average >= 85 && average < 92){
        return("B");
    }else if (average >=75 && average < 85){
        return ("C");
    } else{
        return ("NC");
    }
} 
let prompt = require("prompt-sync")();
let Mid_term = parseFloat(prompt("please enter the mid term exam score :"));
let Final_score = parseFloat(prompt("please enter the final exam score :"));


console.log(computeGrade(Mid_term,Final_score));

