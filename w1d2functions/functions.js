///////////////////////////////////
// number 1. function compute Sales Commission 
function SalesCommission(x,sale){
    if(x === false){
        if( sale >= 300 && sale <= 500){
            console.log( sale * 0.02);
        }else(sale > 500)
        console.log(sale * 0.03);
    }else 
    if(x=== true){
        console.log("no commission");
    }else if(sale >= 300 && sale <= 500){
        console.log("yir commission is " + sale * 0.01);
    }else if(sale > 500){
        console.log("your salary is " + (sale * 0.02));
    }

 }
 SalesCommission(true, 200);

///////////////number 2
//2 defining table and function

function calulateBalance(p,r,t){
    let cInter=0;
 
    let m=12*t

    for(let i=1; i<=m;i++){
        cInter = (p*(1 + ((r/100)/12))**m);
    }
    return cInter;


}
console.log(calulateBalance(100,10,1));
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//3 cost of house down Payment
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
}
    calculatedownPayment(2000);
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //4. a) sum Digits 
function num(numbers){
    let sum=0;
    let result=numbers;
    while(result > 0){
        sum+=result%10;
        result=Math.floor(result/10)
    }
    return sum;
}
console.log(num(1234));

////////////////////////////////////////////////////////////////////////////////////

//b) multi Digits
function products(nums){
    let product=1;
    let result1=nums;
    while(result1 > 1){
        product*=result1%10;
        result1=Math.floor(result1/10)
    }
    return product;
}
console.log(products(1234));

//////////////////////////////////////////
function sum2(num2){
    let sum=0;
    let r=num2;
    while(r > 0){
        sum += r % 10;
        r=Math.floor(r/10)

    }
    return sum;
}
console.log(sum2(102));
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function covertFahrenheit(temp){
    return (temp - 32) *5/9;
}
console.log(covertFahrenheit(0));
//-17.77777777777778 if it is 0
//0 if it is 32......
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
////// number 6
function distance(x2,x1,y2,y1){
    
    return Math.sqrt(Math.pow(x2-x1,2) + (Math.pow(y2-y1,2)));
    
}

console.log(distance(0,0,5,5));
