'use strict';
var decorate    = require('./decorator');
var assert        = require('assert');


describe('Validate the correct implementation of decorator pattern.', () => {
  it('It should be able to perform a implementation of decorator pattern.', () => {
    assert.equal("Hello World 3", decorate.helloWorldAdd(1,2));
  });
});
