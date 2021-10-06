//rule
//when you print outside the function= {}
//when you try to access as a value for a property-- {}
// inside function-- global object
//arrow is different it is always lexical environment
console.log(this);
// when (this) is used in a method
function outside(){
    //console.log(this);
    return this;
}
console.log(outside());

5//
function returnobj(){
    function inner(){
        console.log(this);
    }
}
inner();
return{}

