// //a.create a timer function that increments and prints the counter until stoped
// //run..increments and print the counter from 0 or previous counter value if present
// //stop.. stop timer and rest the counter to 0 if rest is true.
// //b.create scheduler function to run the above timer every 10 ms and stop it after one second

function createTimer(){
    let counter=0;
    return{
        run:function(){
            console.log(counter++);
        },
        stop:function(timerId,reset){
            console.log(" stop ");
            clearInterval(timerId);
            if(reset)
            counter=0
        }
    }
}

// function scheduler(){
//     let timer = createTimer();
//     let timerId= setInterval(timer.run,100);
//     setTimeout(timer.stop,1000,timerId);
//     setInterval(timer.run,1500,10);
// }
// scheduler();


//biuld a timer that print a counter and true or false. alternativly after evry 1 secound
//and stop after 5 second
function perform() {
    let toggle = true;
    let Counter = 1;
    return {
        toggle: function () {
            toggle = !toggle;
            console.log("run ", Counter++, " ", toggle);
        }
    }
}

//or use object 
// let timer = {toggle:true,counter:1, run:function(){
//     this.toggle = !this.toggle;
//     console.log("Run ", this.counter++, " ", this.toggle);
// }}
function build() {
    let timerId = setInterval(perform().toggle, 1000);
   //  timerId = setInterval(timer.run.bind(timer),1000);
    setTimeout(function () {
        clearInterval(timerId);
    }, 5000);
}
build();
