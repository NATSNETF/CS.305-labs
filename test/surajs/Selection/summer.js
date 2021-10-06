  let prompt = require("prompt-sync")();

let childage = prompt("please enter the age of the child :");
let season = prompt("please enter the season :");

childage = parseInt(childage);

//let bed_time;

if(childage <= 5){
    if(season === "summer" || season === "fall" ){
       console.log("time to bed will be 8:30pm ");
    
    } else if(season === "winter" || season === "spring" ){
        console.log("time to bed will be 8:00pm ");
    }        
}      
if(childage < 12){
    if(season === "summer"){
        console.log("time to bed will be 9:30pm ");
    } else if(season === "winter" || season ==="spring" || season === "fall" ){
        console.log("time to bed will be 8:30pm ");
    }
}

if(childage >= 13){
    if(season === "summer"){
        console.log("time to bed will be 10:30pm ");
    } else if(season === "winter" || season === "spring" || season === "fall "){
        console.log("time to bed will be 9:30pm ");
    }
}

