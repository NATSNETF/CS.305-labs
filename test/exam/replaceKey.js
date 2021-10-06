//create a function to replace key with value in an object.Assume the property values are only strings.

function convertKey(json){
    for(let key in json){
        let value=json[key];
        json[value]=key;
        delete json[key];
    }
    console.log(json);
}
var json={key1:"value1",key2:"value2",key3:"value3"}
//convertkey(json);

//to distructure
let{key1,key2,key3}=json;
console.log(key1,key2,key3);