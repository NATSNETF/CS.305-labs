console.log('hello');
let m = ['hi', [], {}, 9, null]
console.log(m);
console.log('test2')
// alert("helooooooo!!!!")

function weather(){
    let response =prompt('what is the weather today?')
    if(response === "sunny"){
    alert('its good to take a walk')
    } else {
        if(response === 'rainy'){
            alert('take an umbrella!')
        }
    }
}
weather();
