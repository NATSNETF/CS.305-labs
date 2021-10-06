function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(4));

///loop
// function facto(){
//     let pro=1;
//     while(n>0){
//         pro *= n;
//         n--;
//     }
//     return pro;
// }

function countletter(str){
    console.log(str);//showing how it count from the buttom till end
    if(str===""){
        return 0;
    }
    else{
       return 1 + countletter(str.substr(1))
    }
}
console.log(countletter("world"));
//////////////////////////////////////////////////////////////////////////////
function arraySumRecursion(array){
    if(array.length==1){
    return array[0];
}else{
    return array[0]+ arraySumRecursion(array.splice(1))
}
}
console.log("array sum recursion ",arraySumRecursion([2,3,4,5,6,7]));
///////////////////////////////////////////////////////////////////
function findmin(arr){
    let min= Infinity;
    for(let value of arr){
        if(value < min)
        min=value;
    }
    return min;
}
console.log("find min ",findmin([3,1,67]));

//in recursive
function findMinRecusive(arr){
    if(arr.length==1){
        return arr[0];
    }
let previousMin=findMinRecusive(arr.slice(1));
        return arr[0]<previousMin ? arr[0] :previousMin;
    
}
console.log("recursive way to find min ",findMinRecusive([3,1,67,30]))






/////////////// fibonacci
function fibonacci(n){
    if(n===0){
        return 0;
    } if(n===1){
        return 1
    }
    else{
        const nextFib = fibonacci(n-1)+ fibonacci(n-2);
        return nextFib; 
    }
}
console.log(fibonacci(7))


let company = { 
    sales: [{name: 'John', salary: 1000 },
            {name: 'Alice', salary: 600 }],
    development: {
         sites: [{name: 'Peter', salary: 2000},
                {name: 'Alex', salary: 1800 }], //subdepartments

        internals: [{name: 'Jack', salary: 1300}]
    }
    };

    function sumSalaries(department) {
        if (Array.isArray(department)){ // case (1)

          return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
        }else{ 
             // case (2)

          let sum = 0;
          for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
          }
          return sum;
        }
    }
      
      console.log(sumSalaries(company)); // 7700
    
      
// /////////////////////////////
// // function sumTotal(company){
// //     let totalSalary=0;
// //     for(let key in company){
// //         console.log(key,company[key]);
// //         let obj=company[key];
// //         if(Array.isArray(company[key])){
// //         obj.reduce((sum,current)=>
// //         sum + current.salary,0);
// //     }
// //     else{
// //         for(let keys in obj){
// //             obj[key2].reduce((sum,current)=>{
// //             sum + current.salary},0)
            
// //         }
// //     }
// // }
// // return totalSalary;

// function sumTotal(company){

//     let names = [];
    
//     for(let key in company){
    
//     let obj = company[key]
    
//     if(Array.isArray(obj)){
    
//     names.push(obj.map((current)=>
    
//     current.name));
    
//     }
    
//     else{
    
//     names=names + " " +sumTotal(company[key]);
    
//     }
    
//     }
    
//     return names;
    
//     }
//     console.log();



//     let list = { value: "A" };

// list.next = { value: "B" };

// list.next.next = { value: "C" };

// console.log(list);

// console.log(list.null);




// list.next = null;

// list.next = { value: "C" };

// list.next.next = { value: "B" };

// console.log(list);

// list.next.next = null;

// list.next.next = { value: "Z" }

// list.next.next.next = { value: "B" };



// console.log(list);



//reverse
function reversWord(str){
    if(str===""){
        return "";
    }
    else{
    return reversWord(str.substr(1)) + str.charAt(0);
    
}
}
console.log(reversWord("hello world"));

//counting degit

function countingDigit(n){
    if(n==0){
        return 0;
    }
    else{
        return 1 + countingDigit(parseInt(n/10));
    }
    
}
console.log(countingDigit(1234));
