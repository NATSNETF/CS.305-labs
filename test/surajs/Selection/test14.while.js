const prompt=require('prompt-sync')();
//while loop the condition tested at the beginning of the loop
//and if the condition is true, statment inside the loop 
//will execute. while loop excutes the code block only if the condition is true.
// let input=prompt('enter a comand');

// while(input !== 'stop'){
//     console.log('your command was ' + input);
//      input=prompt('enter a comand again');
//     //this helps to write stop
//     //ctrl c helps to stop the reptation when we print 

// }
// console.log('existing.....');


// do while loop
//it test the condition first then do while execute the statments in the code block 
//at least once even if the condition fails.
let user_input;
do{
    user_input=prompt('please enter a command');
    console.log('your command was : ' + user_input);
}
while(user_input !== 'stop');
console.log('existing;;;;;;;');

