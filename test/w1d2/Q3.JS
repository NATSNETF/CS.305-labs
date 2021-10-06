
function calculatedownPayment(cost){
    if(cost < 50000){
        console.log( 0.05 * cost);
    }else if(cost  > 50000 && cost < 100000){
        console.log("your Down Payment is  " + 2500 + 0.10 * cost - 50000);
    }else if(cost > 100000 && cost < 200000){
        console.log("your Down Payment is " + 7500 + 0.15 * cost - 100000);
    }else{
        console.log(5000 + 0.10 * cost - 200000);
    }
    calculatedownPayment(2000);


    


}

