let a = {};
let b = a; // copy the reference
console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true
//And here two independent objects are not equal, even though both are empty:
let a1 = {};
let b1 = {}; // two independent objects
console.log( a1 == b1 ); // false
let pt1 = {x:1 , y:2};
let pt2 = {x:1 , y:2}; // two independent objects
pt1=pt2;//if we assign it it will be true
console.log( pt1 == pt2); // ??
console.log(pt1 === pt2) // ??
//////////////////////////////////
//nested Object

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
    father: man,
    mother: woman
    }}
    let family = marry({ name: "John"}, 
    { name: "Ann"});
    delete family.father
    ;
    delete family.mother.husband
    ;
    