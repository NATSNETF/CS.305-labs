"use strict";
/* global assert bank */

/* comment out the following for the browser */
const assert = require("assert");  //always need this with node
const myExports = require("./bank2.js");  //with node need the name of your file with your functions here
const Bank = myExports.Bank;  //do this for all of the functions used in the Mocha tests

describe("bank tests", function () {

    it("checks initial balance", function () {
        assert.strictEqual(Bank.bankBalance(), 85);
    });

    /* the credit and debit are made in the bank.js file */
    it("balance after credit of 20 and debit of 1000 for customer 1", function () {
        assert.strictEqual(Bank.bankBalance(), 60);
        Bank.credit(1, 20);
        Bank.debit(1, 1000);
        assert.strictEqual(Bank.bankBalance(), 80);
    });

});