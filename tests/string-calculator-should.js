"use strict";

let assert = require('chai').assert;
let Calculator = require('../src/calculator');

suite('String calculator should', function () {
    test('return 0 if input is empty string', function () {
        let calculator = new Calculator();

        let result = calculator.add('');

        assert.equal(0, result);
    })
});
