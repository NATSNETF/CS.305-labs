// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
//     console.log( message );
//     }
//     showMessage(); // Hello, I'm JavaScript!
// console.log( message ); // <-- Error! The variable is local to the function
    

//////////////////////
//outer variable
let userName = 'John';
function showMessage() {
let message = 'Hello, ' + userName;
console.log(message);
}
showMessage(); // Hello, John

////////////////scope 1
function a(){ 
    console.log(w); // consult Global for x and print 20 from Global
    }
    function b(){ 
    let w = 10; 
    a(); // consult Global for a
    console.log(w); 
    } 
    let w = 20; 
    b();

    ////////////////////////scope 2
    function b(){ 
        function a(){ 
        console.log(x); 
        }
        let x = 10; 
        a(); 
        console.log(x);
        } 
        let x = 20; 
        b(); 
    