let promote=require('prompt-sync')();
let salary=promote("eneter your salary");
let sales=promote("enter  sales ");
if(salary <= 0){
    if(sales  >= 300 && sales <= 500){
    console.log(sales * 0.02);   
    }else(sales > 500)
    console.log(sales * 0.03);
    
}else{
    if(sales < 300){
        console.log("No Commission");
    }else if(sales >= 300 && sales <= 500){
        console.log("your Commision is" + sales * 0.01);
    }else if(sales > 500){
        console.log("your Salary is" + (sales * 0.02 ));
    }

}


