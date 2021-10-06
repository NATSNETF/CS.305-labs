function reverse(num){
    let str = num.toString();
    let result = str.split("");
    let newResult="";

    for(let i = result.length-1; i>=0; i--){
        newResult += [i];
    }
    let final = parseInt(newResult);
    return final;
    
}console.log(reverse(5678));