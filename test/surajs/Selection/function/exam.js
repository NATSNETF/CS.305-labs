let prompt = require("prompt-sync")();
function tellMyPersonality(num)
//     if(num % 2 === 0){
//         return ("fair!");
//     } else{
//         return ("Baised!");
//     }

// }
(num % 2===0) ? 'fair' :'baised'

let sura = prompt("please enter number : ");
    
    console.log(tellMyPersonality(sura));


