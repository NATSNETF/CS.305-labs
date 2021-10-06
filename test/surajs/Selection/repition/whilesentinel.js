const prompt = require('prompt-sync')();
let user_input = prompt("Please enter your command:");


while (user_input !== 'stop') {
  console.log("Your command was: " + user_input);
 user_input = prompt("Please enter your command:");
}
console.log("exiting...");