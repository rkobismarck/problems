'use strict';
var counter    = require('./listcount');
var assert        = require('assert');


describe('Validate the correct counting of elements inside an array.', () => {
  it('It should be able to perform a counting of the elements contained in the array.', () => {
    assert.equal(2, counter.getSize([1,2]));
  });
});

describe('Validate the correct counting of elements inside an array.', () => {
  it('It should be able to perform a counting of the elements contained in the array.', () => {
    assert.equal(3, counter.getSize([1,2,3]));
  });
});

describe('Validate the correct counting of elements inside an array.', () => {
  it('It should be able to perform a counting of the elements contained in the array.', () => {
    assert.equal(1, counter.getSize([1]));
  });
});

describe('Validate the ability of this function to find the max number inside an array.', () => {
  it('It should be able to return the max number contained in the array.', () => {
    assert.equal(53, counter.maxNumber([1,2,15,3,2,4,10,19,25,23,53,-1]));
  });
});

describe('Validate the ability of this function to find the max number inside an array.', () => {
  it('It should be able to return the max number contained in the array.', () => {
    assert.equal(0, counter.maxNumber([0,0,0,0,0,0,0,0,0,0,0,-1]));
  });
});

describe('Validate the ability of this function to find the max number inside an array.', () => {
  it('It should be able to return the max number contained in the array.', () => {
    assert.equal(0, counter.maxNumber([0,0,0,0,0,0,0,0,0,0,0,0]));
  });
});

describe('Validate the ability of this function to find the max number inside an array.', () => {
  it('It should be able to return the max number contained in the array.', () => {
    assert.equal(15, counter.maxNumber([0,0,0,0,0,0,0,0,0,0,0,15]));
  });
});