let prompt=require('prompt-sync')();
let age=prompt("how old are you");
a=parseInt(age);
let max_rate=220;
let max_rate_for_this_person=max_rate-a;
let Min_rate=0.65*a;
let Max_rate=0.85*a;

console.log('slowest heart rate is' + Min_rate + 'the fastest heart rate is ' + Max_rate);