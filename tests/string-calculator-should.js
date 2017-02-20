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

        assert.equal(result, 0);
    });

    test('return one-digit number if input is that number', function () {
        let calculator = createCalculator();

        let result = calculator.add('3');

        assert.equal(result, 3);
    });

    test('return sum of any two comma-separated numbers', function () {
        let calculator = createCalculator();

        let result = calculator.add('11,22');

        assert.equal(result, 11 + 22);
    });

    test('return sum of any number of comma-separated numbers', function () {
        let calculator = createCalculator();

        let result = calculator.add('1,2,3,4,5,6');

        assert.equal(result, 1 + 2 + 3 + 4 + 5 + 6);
    });

    test('return sum of newline-separated numbers', function () {
        let calculator = createCalculator();

        let result = calculator.add('1\n2');

        assert.equal(result, 1 + 2);
    });
});
