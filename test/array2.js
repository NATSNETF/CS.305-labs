 //get users who have id of greater than 1,
 let customer=[
    {id:1,name:'naxa'},
    {id:2,name:'sami'},
    {id:3,name:'john'}];

    let cust=customer.filter(function(c){
        
        return c.id >1;
    });
    console.log(cust);
//find return only one value from the elements
    let custfind=customer.find(function(f){
        return f.id > 1;
    });
    console.log(custfind)

    // map
    //printing the list of employee names with the index
    //we can loop them but shortcut using with map
    let employers=['jona','lala','wawi'];

    employers.map((names,index,ele)=>{console.log(names,index,ele)})
    console.log(employers.indexOf);

    //sort
    //accending and decending 
    //we compare the first ele in 0 index to the next to it
    // then we write them in accending or decending order
    let numbers=[7,0,2,1];
//decending order while using sort
    console.log(numbers.sort((a,b)=>b-a))
    //accending order 
    console.log(numbers.sort((a,b)=>a-b))

    //reduce 
    //calculating the sum of numbers
    let add=numbers.reduce((index,ele)=>{
        return index+=ele
    },0)
    console.log(add)

    //max to find the maxmum number from the elemnts
    //instead of using a loop to find the max or min number from the elements.
    let maxi=numbers.reduce((i,ele)=>{
        return Math.max(i,ele)
    })
    console.log(maxi)