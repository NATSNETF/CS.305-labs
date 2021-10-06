//give an array of mixed datatypes string bollean and number return new array of 
//elements type along with index numbers.
// if the element is boolean or number and length if the element is string

function createNewArray(array){
    return array.map(function(item,index){
        return (typeof item == "string" ? "string:" + item.length : typeof item + ":" + index)
    })
}
console.log(createNewArray([1,"hello",true,2,"bye"]));

let array=[4,"heo",true,2,"bye"];
array.map(function(item,index){
     console.log(typeof item == " string " ? "string " + item.length : typeof item +" : " + index);
    })

    let planet=["jupiter","venus","saturn"];
    planet.forEach(function(item,index,array){
        planet.splice(1);
        console.log(planet);
    });

    console.log(this); //{}
    let a={b:this, c:function(){console.log(this)}}
    console.log(a);
