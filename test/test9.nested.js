const prompt= require('prompt-sync')();
let number = prompt('please enter numbers between 1-5:');
number = parseInt(number);
//if else statment 
// if(number===1){
//     console.log('one');
// }
// else if(number===2){
//     console.log('two');
// }
// else if(number===3){
//     console.log('three');
// }
// else if(number===4){
//     console.log('four');
// }
// else{
//     console.log('five');
// }
//switch statments
let num;
switch(number){
    case 1 :
        num='one'
        break;
    case 2:
        num='two';
        break;
    case 3:
        num='three'
        break;
        case 4:
            num='four';
            break;
            case 5:
                num='five';
                break;
                default:
                    num='i dont know how to spell it';

}
console.log(num);

    
   