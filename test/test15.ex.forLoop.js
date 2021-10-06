//write a loop that print all even number between 1-20
//for loop
for(let i=2; i < 20; i++){
    if(i % 2==0){
        console.log(i);
    }
}
//while to print all even number 1-20
// let i=2;
// while(i <=20){
//     if(i%2=== 0){
//         console.log(i)
//     }
//     i++;
// }
//continue 

// for(let j=0;j < 20; j++){
//     if(j % 2==0){
//         continue;
// }
//     console.log(i);
  
// }
// //continue inside a while loop

// let k=0;
// while(k++ <= 20){
//     if(k % 2 !== 0){
//         continue;
//     }
//         console.log(k);
//     }

    //nested loop for multiplication table 
    // for(let i=1; i<=10; i++){
    //     let row="  ";
    //     for(let j=1; j <= 10; j++){
    //         row += i* j + "\t";
    //     }
    //     console.log(row);
    // }

    //how many times will the computer display the word "flowers"?

    for(let i=3; i< 7; i++){
        console.log('flowers');
    }
    // for(let i=0; i< 5; i++){
    //     console.log('APPLE');
    // }
    //using two variable  in a while loop and increment by 2 every time it will add by 2 the print 
    // let i=0;
    // let limit=5;
    // while(i < limit){
    //     console.log('apple');
    //     i+=2;
    // }
    for(let j=0; j > 3; j++){
        j++;
    }
        console.log('goodbye');  
        // the output is 0.... becouse it never enters to loop.and never get printed
    

    let l=0;
    while(l < 3){
        console.log('snow');
        l++; 
       //if we dnt increment l++ it will print infinity

    }
    //write a while loop to count from 1 to 10
    let t=0;
    while(t < 10){
        console.log(t);
        t++;
    }
    //write a for loop to count from 1 to 10
    for(let b=0; b <= 10; b++){
        console.log(b + " for loop one to ten");
    }
// loo to count backwards from 90-81.after the loop is finished, 
// your counting variable should hold the value 81
    for(let w=90; w >= 81; w--){
        console.log(w);
        // we can use both adding if statment or simple loop
        // if(w===81){
        //     break;
        // }
    }
    
    //7. write a loop to count by three from zero to nine. after the loop is finished,
    // your counting variable should hold the value
    for(let p=0; p<=9; p +=3){
        if(p===9){
            break;
        }
        console.log(p);
    }
    
    let first=0;
    for(; first < last; first+=2){
        console.log(first);
    }

    
       