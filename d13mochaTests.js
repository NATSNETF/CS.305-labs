const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;
const covertFahrenheit = methods.covertFahrenheit;
const distance=methods.distance;
const calulateBalance=methods.calulateBalance;

describe("computeSalesCommission",function(){ 
   // it("computeSalesCommission",function(){ 
      it("tests salary and 200 sales", function(){

          assert.strictEqual(computeSalesCommission(true,200),0)
          });  
        it("tests not salarird and 200 sales",function(){
            assert.strictEqual(computeSalesCommission(false,200),6)
        });
        it("tests salaried and 300 sales",function(){
            assert.strictEqual(computeSalesCommission(true,300),0)
        });
        it("tests salaried and 300 sales",function(){
            assert.strictEqual(computeSalesCommission(true,300),0)
        });
        it("tests salaried and 3500 sales",function(){
            assert.strictEqual(computeSalesCommission(true,3500),0)
        });
        it("tests salaried and 3500 sales",function(){
            assert.strictEqual(computeSalesCommission(false,3500),105)
        });
       // })
    });



// 

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

describe("calcDownpayment",function(){
    //it("calcDownpayment",function(){
       // assert.equal(calcDownpayment())
   // });
    it("calcDownpayment",function(){
        assert.equal(calcDownpayment(40000),2000)
    });
    it("calcDownpayment",function(){
        assert.equal(calcDownpayment(50000),2500)
    });
    it("calcDownpayment",function(){
        assert.equal(calcDownpayment(100000),7500)
    });
    it("calcDownpayment",function(){
        assert.equal(calcDownpayment(250000),10000)
    });
    
})
describe("covertFahrenheit",function(){

    it("convertFahrenheit",function(){
        assert.equal(covertFahrenheit(32),0)
    });
    it("convertFahrenheit",function(){
        assert.equal(covertFahrenheit(0),-17.7778)
    });
    it("convertFahrenheit",function(){
        assert.equal(covertFahrenheit(212),100)
    });
    it("convertFahrenheit",function(){
        assert.equal(covertFahrenheit(100),37.7778)
    });

})

describe("distance",function(){
    it("distance",function(){
        assert.equal(distance(0,0,5,5), 7.07)
    });

});

describe("calulateBalance",function(){
it("calulateBalance", function(){
    assert.equal(calulateBalance(100,10,1),110.47)
});
    it("calulateBalance", function(){
        assert.equal(calulateBalance(10000, 5, 10), 16470.0949769028)
})
})
