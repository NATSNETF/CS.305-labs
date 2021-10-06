const DAYS_WEEK=7;
weather="sunny";

if(DAYS_WEEK < 7 && weather ==="cold"){
    console.log("steep till noon")
}else{
    (DAYS_WEEK=== 7 && weather==="sunny")
        console.log("go for a walk");
    }
////////////////////////? 

let prompt=require("prompt-sync")();
let days=prompt("enter days between 1 to 7");

let message= days > 5 ? "weekend" : "weekday";
console.log(message);