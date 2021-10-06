function makeArray(){
let shooters=[];
let i=0;

while(i < 10){
    let shooter= function(){ //create a shooter function,
        console.log(i);//that should show its number
    };
    shooters.push(shooter); //and add it to the array
    
}
return shooters; //and return the array of shooters
}
let army=makeArray();
army[0]();
