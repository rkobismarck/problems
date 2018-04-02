'use strict';
var search     = require('./binarysearch');
var assert     = require('assert');



describe('Validate the correct search of elements inside an ordered array.', () => {
  it('It should be find the number contained inside the array.', () => {
    assert.equal(true, search.binary([1,2,4,6,8,10,15,16,24,30],15));
  });
});

describe('Validate the correct search of elements inside an ordered array.', () => {
  it('It should be find the number contained inside the array.', () => {
    assert.equal(true, search.binary([1,2,3],2));
  });
});

describe('Validate the correct search of elements inside an ordered array.', () => {
  it('It should be find the number contained inside the array.', () => {
    assert.equal(true, search.binary([1,2],2));
  });
});

describe('Validate the correct search of elements inside an ordered array.', () => {
  it('It should not be able to find the number inside the array.', () => {
    assert.equal(false, search.binary([1,2],100));
  });
});

describe('Validate the correct search of elements inside an ordered array.', () => {
  it('It should not be able to find the number inside the array.', () => {
    assert.equal(false, search.binary([1],100));
  });
});


describe('Validate the correct ordering of elements inside an unordered array.', () => {
  it('It should be able to perform the sorting inside the array.', () => {
    assert.deepEqual([1,2,3,4,5,6], search.quicksort([1,4,2,3,6,5]));
  });
});


describe('Validate the correct ordering of elements inside an unordered array.', () => {
  it('It should be able to perform the sorting inside the array.', () => {
    assert.deepEqual([5,10,33], search.quicksort([33,5,10]));
  });
});