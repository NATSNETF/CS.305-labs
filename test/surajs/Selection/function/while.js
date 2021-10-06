let pr = require("prompt-sync")();
let input = pr("Please enter your command ");

while (input !== 'stop') {
  console.log("You command was: " + input);
  input = prompt("Please enter your command ");
}
console.log("exiting...");
