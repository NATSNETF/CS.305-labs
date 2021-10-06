//3.create another object
//let swimming={ring:"optional",goggles:"required"};
let swimming=["ring","googles"]
let swimmingObj={};
[swimmingObj.ring,swimmingObj.googles]=swimming;
console.log("expect ring== ",swimmingObj.ring);
console.log("expect ring== ",swimmingObj.googles);

//4.create another object
//when you distracting an object//and you need ()..when ever declaring variable outside
let javelin={distance:133};
let myDistance;
({distance:myDistance}=javelin);
console.log("expect 133 ",myDistance);

//5.when distructuring array.[]
let football=["shoes"];
let myShoes;
[myShoes]=football;
console.log("expect shoes== ", myShoes);

//6.distructure array into variables with default values
let twoElements=[1,2];
let[oneKey]=twoElements;//here only oneKey will be assigned 
console.log("expect 1== ",oneKey);

//7
let singleElementArray=[1];
let[base,code]=singleElementArray;
console.log("expect 1 ",base);
console.log("expect undefined ",code);

//8 Destrructing array into variables with default values.

let numberArray=[,,1,2];
let[one=true,two="second",third="four",fourth="two"]=numberArray;
console.log("expect true ",one);//it was undefined (,)
console.log("expect second ",two);//it was undefined (,)
console.log("expect 1 ",third);//(1)
console.log("expect 2 ",fourth);
//9destructrure array into variables, second, fifth
let multipleItems=[45, "maharashi",{consciousnes:{inner:true}},777,"bye"];
let[,second,,,fifth]=multipleItems;
console.log("expect maharashi ",second);

//10 destucture object into variables,innerValue,message

let obj={a:1,b:"hi",c:true,d:{inner:"object"}}
let{d:innerValue,b:message}=obj
console.log("expect{inner:'object'} ",innerValue);
console.log("expect hi ",message);







