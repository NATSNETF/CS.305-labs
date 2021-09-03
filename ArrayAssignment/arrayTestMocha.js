"use strict";

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const myExports = require("./q1.maxnumber");  //with node need the name of your file with your functions here
const maxOfThree = myExports.maxOfThree;  //do this for all of the functions used in the Mocha tests
const multiply = myExports.multiply;
const sum = myExports.sum;
const longestWord=myExports.longestWord;
const reverseArrayInPlace=myExports.reverseArrayInPlace;
const reverse=myExports.reverse;
const scoreExams=myExports.scoreExams;


/* global assert maxOfThree sum multiply findLongestWord reverseArray reverseArrayInPlace scoreExams generateArray */

/* 1.	1.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.  */
describe("maxOfThree", function () {
    it("tests 1 2 3", function () {
        assert.strictEqual(maxOfThree(1, 2, 3), 3);
    });
    it("tests 10, 20, 30", function () {
        assert.strictEqual(maxOfThree(10, 30, 20), 30);
    });
    it("tests 2 1 3", function () {
        assert.strictEqual(maxOfThree(2, 1, 3), 3);
    });
    it("tests 2 3 1", function () {
        assert.strictEqual(maxOfThree(22, 33, 11), 33);
    });
    it("tests 3 2 1", function () {
        assert.strictEqual(maxOfThree(3, 2, 1), 3);
    });
    it("tests 3 1 2", function () {
        assert.strictEqual(maxOfThree(333, 111, 222), 333);
    });
    it("tests -1 -2 -3", function () {
        assert.strictEqual(maxOfThree(-1, -2, -3), -1);
    });
    it("tests -1 -2 -2", function () {
        assert.strictEqual(maxOfThree(-1, -2, -2), -1);
    });
    it("tests 5 5 -1", function () {
        assert.strictEqual(maxOfThree(5, 5, -1), 5);
    });
    it("tests -2 0 -2", function () {
        assert.strictEqual(maxOfThree(-2, 0, -2), 0);
    });
    it("tests 6 6 6", function () {
        assert.strictEqual(maxOfThree(6, 6, 6), 6);
    });
});

/*
2.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
describe("sum and multiply", function () {
    it("tests sum of 1 2 3", function () {
        assert.strictEqual(sum([1, 2, 3]), 6);
    });
    it("tests multiply 3 2 10", function () {
        assert.strictEqual(multiply([3, 2, 10]), 60);
    });
    it("tests multiply -3 -2 -10", function () {
        assert.strictEqual(multiply([-3, -2, -10]), -60);
    });
    it("tests sum -3 -2 -10", function () {
        assert.strictEqual(sum([-3, -2, -10]), -15);
    });
});


/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(longestWord(["this", "is", "a", "test", "longest"]), "longest");
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(longestWord(["this", "is", "a word with spaces", "test", "longest"]), "a word with spaces");
    });
    it("tests longest with equal length words", function () {
        assert.strictEqual(longestWord(["is", "is", "is", "is a function", "is"]), "is a function");
    });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(longestWord(["this", "is", "this is fun", "is", "is"]), "this is fun");
    });
});


/*
4.	Reverse an Array 
*/
describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.deepEqual(reverseArray(["x", "y", "z"]), ["z", "y", "x"]);
    });
    it("tests reverseArray even number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
    it("tests reverseArrayInPlace even number elements", function () {
        assert.deepEqual(reverseArrayInPlace(["x", "y", "z"]), ["z", "y", "x"]);
    });
    it("tests reverseArrayInPlace odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});
describe("score exam", function () {
    const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
    const correctAnswers = [3, 1, 2,4];
    it("exam with 3 students", function () {
        assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3,2,3]);
    });
    it("exam with 3 students: one student has all incorrect answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [1,2, 3,1]], correctAnswers), [3,2,0]);
    });
    it("exam with 3 students: one student has all correct answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2],[3, 1, 2,4]], correctAnswers), [3,2,4]);
    });
});
