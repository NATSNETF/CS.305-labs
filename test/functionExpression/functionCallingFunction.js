function A(){
    console.log("A is called");
    console.log("Before B is called");
    B();
    console.log("After B is called") //puse
    }
    function B(){
    console.log("B is called");
    console.log("Before C is called");
    C();
    console.log("After C is called"); //last in first out
    }
    function C(){
    console.log("C is called");
    }
    A();
    console.log("1 After A is called");


    function funA(a,n){
        let something;
        something = "something.";
        funB(something, n);
        }
        function funB(a,b){
        let thing;
        thing = "a thing.";
        console.log("What is on the stack when we're here?");
        }
        function main(){
        let test;
        let n;
        test = "Hello";
        n = 5;
        funA(n, 10);
        }
        main();
        