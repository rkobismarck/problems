'use strict';
var operations    = require('./operations');
var recursive     = require('./recursive');
var app           = recursive(operations)
var assert        = require('assert');


describe('Validate the correct summarization of elements inside an array.', () => {
  it('It should be able to perform a sum of elements contained in the array.', () => {
    assert.equal(3, app.summarize([1,2]));
  });
});

describe('Validate the correct multiplication of elements inside an array.', () => {
  it('It should be able to perform a multiply all the elements contained in the array.', () => {
    assert.equal(6, app.multiplier([1,2,3]));
  });
});