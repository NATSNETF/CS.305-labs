
//  function setLatLong() {
//     this.lat = 41.00;
//     this.long = -92.96;
//     console.log(this);
//   }

//   const setLL = setLatLong(); // undefined
//   console.log("lat : ", lat);
//   console.log("setLL : ", setLL);

let ladder={
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
    },
    showStep: function(){
        console.log(this.step);
    }
};
ladder.up();// -1
console.log(ladder.up())
console.log(ladder.step);
ladder.up().down();
//console.log(ladder.step);

let x={}
let y={}
function A(){
    return y;
}
function B(){
    return x;
}
let a = new A();
let b = new B();
console.log( a == b);