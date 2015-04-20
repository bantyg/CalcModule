var assert = require('assert');
var calcFuncs = require('../index.js');
describe('calcTests',function(){
    describe('add',function(){
        it('add function should add two numbers',function(){
            assert.equal(calcFuncs.add(2,3),5);
        });
    });
    describe('subtract',function(){
        it('add function should subtract two numbers',function(){
            assert.equal(calcFuncs.subtract(3,1),2);
        });
    });
    describe('add',function(){
        it('add function should multiply two numbers',function(){
            assert.equal(calcFuncs.multiply(2,3),6);
        });
    });
    describe('add',function(){
        it('add function should divide two numbers',function(){
            assert.equal(calcFuncs.divide(6,2),3);
        });
    });
});


