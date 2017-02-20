"use strict";

let assert = require('chai').assert;
let expect = require('chai').expect;
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

    test('return sum of newline-separated and comma-separated numbers', function () {
        let calculator = createCalculator();

        let result = calculator.add('1\n2,3');

        assert.equal(result, 1 + 2 + 3);
    });

    test('return sum of numbers separated by custom delimiter', function () {
        let calculator = createCalculator();

        let result = calculator.add('//;\n1;2');

        assert.equal(result, 1 + 2);
    });

    test('throw negative number exception if input has negative number', function () {
        let calculator = createCalculator();

        let action = () => calculator.add('2,-2,3');

        expect(action).to.throw('negatives not allowed: -2');
    });

    test('throw exception with list of all negative numbers if input has negative numbers', function () {
        let calculator = createCalculator();

        let action = () => calculator.add('2,-2,-3');

        expect(action).to.throw('negatives not allowed: -2,-3');
    });
});
