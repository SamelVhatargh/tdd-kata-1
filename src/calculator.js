"use strict";

class Calculator {
    add(numbers) {
        if (this._isEmpty(numbers)) {
            return 0;
        }

        if (this._isOneDigitNumber(numbers)) {
            return this._parseNumber(numbers);
        }

        return this._parseNumber(numbers[0]) + this._parseNumber(numbers[2]);
    }

    _isOneDigitNumber(numbers) {
        return numbers.indexOf(',') === -1;
    }

    _parseNumber(numbers) {
        return parseInt(numbers);
    }

    _isEmpty(numbers) {
        return numbers === '';
    }
}

module.exports = Calculator;