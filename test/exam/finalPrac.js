// 1. [5] Write your own version of Array.find. Write a function, myFind that takes 2 arguments, an 
// array and a function to apply to the array. It should work like Array.find. I.e., the input (callback)
// function returns true or false for each element in the original array. It should return the first
// element of the array for which the callback function returns true. It should not change the input 
// array. For example,
// const numArray = [5, 11, 1, 33];
// console.log(myFind(numArray, element => element > 10)) 

// 1.	Write your own version of map.  Write a function, myMap that takes 2 arguments, 
//an array and a function to apply to the array. 
// It should return a new array of the same size with the function applied to each element of the input array. 
// It should not change the input array.

// 2.	Write your own version of filter.  Write a function, myFilter that takes 2 arguments, an array and a function to apply to the array.  
//It should return a new array with the function applied to each element of the input array.  It should not change the input array. 
// It should work like Array.filter.  
//I.e., the input function returns true or false for each element in the original array, and the true elements are included in the returned array.

// 3.	Write your own version of reduce.

// 4.	Write a constructor function to replace the Class given for the Simpsons tree recursion exercise.

// 5.	Write a constructor function to create nodes for the HTML DOM tree recursion exercise from the W1D3 recursion assignment.

// 6.	EC:  Write your Mocha-like framework.  You will need to implement your own Describe and It functions, and an assert-equals function.  Do not worry about all the other assert functions that come with Chai.  Your framework should work the same way as Mocha in terms of writing outputs to a target div on a webpage.  Color the text red for any tests that fail and green for those that succeed.  

//Fix the code below using an arrow function and then using bind
// let group = {
//  title: "Our Group",
//  students: ["John", "Pete", "Alice"],
//  showList() {
//  this.students.forEach(function(student) {
//  // Error: Cannot read property 'title' of undefined
//  console.log(this.title + ': ' + student)
//  });
//  }
// };
// group.showList()


function naxi(name,age){
    this.name=name;
    this.age=age;

}
let obj=new naxi("dani",12)
console.log(obj.age);

