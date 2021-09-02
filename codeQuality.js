module.exports={isVowel,computeSalesCommission,calcDownpayment,covertFahrenheit,distance,calulateBalance};
/**
 * 
 * @param {string} string   vowel checking
 * @returns {boolean}        true or false
 */
function isVowel(string){
    if(string =='a' || string == 'e' || string == 'u' || string == 'o' || string == 'i'){
        return true;
    }else{
         false;
    }
}

    ///////////////////////////////////
// number 1. function compute Sales Commission 

/**
 * 
 * @param {boolean} x 
 * @param {number} sale 
 * @returns number
 */
function computeSalesCommission(x,sale){
    if(x === false){
        if( sale >= 300 && sale <= 500){
            return sale * 0.02;
        }else(sale > 500)
        return sale * 0.03;
    }else 
    if(x=== true){
        return 0;
    }else if(sale >= 300 && sale <= 500){
       return  sale * 0.01;
    }else if(sale > 500){
       return sale * 0.02;
    }

 }

function calcDownpayment(cost){
    if(cost < 50000){
        return (0.05 * cost);
    }else if(cost  >= 50000 && cost < 100000){
        return  2500 + (0.10 * (cost - 50000));
    }else if(cost >= 100000 && cost < 200000){
        return 7500 + (0.15 * (cost - 100000));
    }else{
        return 5000 + (0.10 * (cost - 200000));
    }
}
function covertFahrenheit(temp){
    return (temp - 32) *5/9;
}
console.log(covertFahrenheit(0));

function distance(x1,y1,x2,y2){
    
    return Math.sqrt(Math.pow(x2-x1,2) + (Math.pow(y2-y1,2)));
    
}

//console.log(distance(0,0,5,5));

function calulateBalance(p,r,t){
    let cInter=0;
 
    let m=12*t

    for(let i=1; i<=m;i++){
        cInter = (p*(1 + ((r/100)/12))**m);
    }
    return cInter;
}
