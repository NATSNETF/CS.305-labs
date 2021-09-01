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


