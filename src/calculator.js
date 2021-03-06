"use strict";

class Calculator {
    constructor() {
        this._defaultDelimiter = ',';
        this._customDelimiter = null;
        this._negativeNumbers = [];
    }

    add(numbers) {
        if (this._isEmpty(numbers)) {
            return 0;
        }

        numbers = this._extractCustomDelimiter(numbers);
        numbers = this._replaceCustomDelimitersWithDefaultDelimiter(numbers);

        if (this._isSingleNumber(numbers)) {
            return this._getOneNumberSum(numbers);
        }

        let sum = this._getSeveralNumbersSum(numbers);
        if (this._negativeNumbers.length > 0) {
            throw 'negatives not allowed: ' + this._negativeNumbers.join(',');
        }
        return sum;
    }

    _replaceCustomDelimitersWithDefaultDelimiter(numbers) {
        let delimitersToReplace = '\n';
        if (this._customDelimiter) {
            delimitersToReplace += this._customDelimiter;
        }
        numbers = numbers.replace(
            new RegExp('[' + delimitersToReplace + ']'),
            this._defaultDelimiter
        );
        return numbers;
    }

    _extractCustomDelimiter(numbers) {
        let customDelimiterPattern = /\/\/(.)\n/;

        let match = numbers.match(customDelimiterPattern);
        if (match !== null) {
            this._customDelimiter = match[1];
        }
        numbers = numbers.replace(customDelimiterPattern, '');
        return numbers;
    }

    _getSeveralNumbersSum(numbers) {
        return numbers.split(this._defaultDelimiter).reduce((a, b) => {
            return this._getOneNumberSum(a) + this._getOneNumberSum(b);
        });
    }

    _isSingleNumber(numbers) {
        return numbers.indexOf(',') === -1;
    }

    _getOneNumberSum(numbers) {
        if (numbers < 0) {
            this._negativeNumbers.push(numbers);
        }
        return parseInt(numbers);
    }

    _isEmpty(numbers) {
        return numbers === '';
    }
}

module.exports = Calculator;