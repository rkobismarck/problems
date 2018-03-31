'use strict';
var app    = require('./reverseString');
var assert = require('assert');

describe('Reverse the content of the string.', () => {
  it('It should be able to reverse the content inside a string, reversed result is expected.', () => {
    assert.equal("dcba", app.performReverse("abcd"));
  });
});

describe('Reverse the content of the string.', () => {
    it('It should be able to reverse the content inside a string, reversed result is expected.', () => {
      assert.equal("ddcba", app.performReverse("abcdd"));
    });
  });

