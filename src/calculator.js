"use strict";

class Calculator {
    add(numbers) {
        if (this._isEmpty(numbers)) {
            return 0;
        }

        if (this._isOneDigitNumber(numbers)) {
            return this._getOneNumberSum(numbers);
        }

        return this._getSeveralNumbersSum(numbers);
    }

    _getSeveralNumbersSum(numbers) {
        let splitNumbers = numbers.split(',');

        return this._getOneNumberSum(splitNumbers[0])
            + this._getOneNumberSum(splitNumbers[1]);
    }

    _isOneDigitNumber(numbers) {
        return numbers.indexOf(',') === -1;
    }

    _getOneNumberSum(numbers) {
        return parseInt(numbers);
    }

    _isEmpty(numbers) {
        return numbers === '';
    }
}

module.exports = Calculator;