'use strict';
var app    = require('./stringAnalizer');
var assert = require('assert');

describe('Validate the uniqueness of characters inside a string.', () => {
  it('It should be able to demonstrate the uniqueness of the content in the string, true result is expected.', () => {
    assert.equal(true, app.validateUniquenessInString("Hola"));
  });
});

describe('Validate the uniqueness of characters inside a string.', () => {
    it('It should be able to demonstrate the non uniqueness of the content in the string, false result is expected.', () => {
      assert.equal(false, app.validateUniquenessInString("Holaa"));
  });
});
