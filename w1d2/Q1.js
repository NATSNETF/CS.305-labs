function salesCommission(x,sale){
    
    if(x===true){
            console.log("no commission");
        }else if(sales > 300 && sales < 500){
            console.log(sales * 0.01);
        }else if(sales > 500){
            console.log(sales * 0.02);
        }
        if(x===false){
            if(sales >= 300 && sales <= 500){
                confirm.log(sales * 0.02);
            }else if(sales > 500){
                console.log(sales * 0.03);

        }
    }

}