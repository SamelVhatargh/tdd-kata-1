"use strict";

let assert = require('chai').assert;
let Calculator = require('../src/calculator');

suite('String calculator should', function () {
    let createCalculator = function () {
        return new Calculator();
    };

    test('return 0 if input is empty string', function () {
        let calculator = createCalculator();

        let result = calculator.add('');

        assert.equal(0, result);
    });

    test('return 1 if input is 1', function () {
        let calculator = createCalculator();

        let result = calculator.add('1');

        assert.equal(1, result);
    });

    test('return one-digit number if input is that number', function () {
        let calculator = createCalculator();

        let result = calculator.add('3');

        assert.equal(3, result);
    });

    test('return sum of two ond-digit numbers', function () {
        let calculator = createCalculator();

        let result = calculator.add('3,2');

        assert.equal(3 + 2, result);
    });
});
