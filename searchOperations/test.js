'use strict';
var app    = require('./searchOperations')();
var assert = require('assert');

const array = [10,20,30,40,50,60,70,80];

describe('Binary-Search Algorithm.', () => {
  it('It should be able to find a number inside the array, and return a true result.', () => {
    assert.equal(true, app.binarySearch(30,array));
  });
});

describe('Binary-Search Algorithm.', () => {
    it('It should not be able to find the number inside the array, and return a false result.', () => {   
      assert.equal(false, app.binarySearch(100,array));
    });
});


describe('Binary-Search Algorithm.', () => {
    it('It should halt an error of undefined input as array argument.', () => {   
      assert.equal("ERROR, the input array can't be empty", app.binarySearch(100,undefined));
    });
});