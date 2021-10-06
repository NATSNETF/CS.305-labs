function sumRecursiveWay(arr){
    if(arr.length==1){
        return arr[0];
    }
    else{
        return arr[0]+ sumRecursiveWay(arr.splice(1))
    }
}
console.log(sumRecursiveWay([2,3,4,5]));
///////////////////////////////////
//find min number in array.

function findMinNumber(array){
    if(array.length==1){
        return array[0];
    }else{
        let previousMin=findMinNumber(array.slice(1));
       return array[0]<previousMin ? array[0] : previousMin ;
    }
}
console.log(findMinNumber([12,34,23,45]));



let company = { 
    sales: [{name: 'John', salary: 1000 },
            {name: 'Alice', salary: 600 }],
    development: {
         sites: [{name: 'Peter', salary: 2000},
                {name: 'Alex', salary: 1800 }], //subdepartments

        internals: [{name: 'Jack', salary: 1300}]
    }
    };

    function totalSalary(company){
        let total=0;
        for(let key in company){
            console.log(key,company[key]);
        
        let obj=company[key];

        if(Array.isArray(obj)){
           total+= obj.reduce((sum,current)=>
                sum + current.salary,0);
        }else{
            for(let key2 in obj){
               total+= obj[key2].reduce((sum,current)=> 
               sum +current.salary,0);
            }
        } 
    }
        return total; 
    }

    function run(){
    console.log(totalSalary(company));

    }
    run();
    

    function findMax() {
        let max = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
        max = arguments[i];
        }
        }
        return max;
        }
        const max1 = findMax(1, 123, 500, 115, 66, 88);
        const max2 = findMax(3, 6, 8);
        
        console.log(findMax())