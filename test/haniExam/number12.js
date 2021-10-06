// // let counter = 0
// // function timerCount(input){
// //     if(counter%2 == 0){
// //         console.log(input + "(input) + " + counter + "(counter is even) = " + (input + counter) );
// //     }
// //     else if(counter%2 != 0){
// //         console.log(input + "(input) - " + counter + "(counter is odd) = " + (input - counter) );
// //     }

// //     if(counter == 5)
// //     clearTimeout(timerId)

// //     counter++;
// // }

// // const timerId = setInterval(
// //     timerCount,
// //     1000, 10
// // )

// function makeSecureStack() {
//     let ar = [];
//     return function (num, fun) {
//       if (fun === "push") {
//         ar.push(num);
//       }
//       else if(fun === 'pop'){
//           let yohana = ar.pop()
//           return yohana;
//       }
//       else if(fun==='view'){
//           return ar;
//       }
//     };
//   }
  
//   const secure = makeSecureStack()
//   secure(1, 'push')
//   secure(2, 'push')
//   secure(3, 'push')
  
//   console.log('expect 3', secure(null,'pop'));
//   console.log('expect undifined', secure(55,'push'));
//   console.log('expect [1,2,55]', secure(null,'view'));


  function Sensor(id, name, type, manufacturer, events) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
    this.events = events;
}

let frontDoor = new Sensor(1, "Front Door Sensor", 34, "Climax", [
    { time: "100", name: "door Closed" },
    { time: "101", name: "door Opened" },
]);

let motionSensor = new Sensor(2, "Motion Sensor", 43, "NYCE", [
    { time: "100", name: "Motion Detected" },
]);

let porticoLight = new Sensor(3, "Portico Light", 54, "Osram", [
    { time: "100", name: "Light off" },
]);

let mainEnterance = new Sensor(4, "Main Enterance", 34, "Climax", [
    { time: "100", name: "door Closed" }
]);

let list = [frontDoor, motionSensor, porticoLight, mainEnterance]
console.log(list[0]);

