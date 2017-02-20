"use strict";

let assert = require('chai').assert;
let Calculator = require('../src/calculator');

suite('String calculator should', function () {
    test('return 0 if input is empty string', function () {
        let calculator = new Calculator();

        let result = calculator.add('');

        assert.equal(0, result);
    });

    test('return 1 if input is 1', function () {
        let calculator = new Calculator();

        let result = calculator.add('1');

        assert.equal(1, result);
    });
});
