"use strict";

class Calculator {
    add(numbers) {
        if (this._isEmpty(numbers)) {
            return 0;
        }

        if (this._isSingleNumber(numbers)) {
            return this._getOneNumberSum(numbers);
        }

        return this._getSeveralNumbersSum(numbers);
    }

    _getSeveralNumbersSum(numbers) {
        return numbers.split(',').reduce((a, b) => {
            return this._getOneNumberSum(a) + this._getOneNumberSum(b);
        });
    }

    _isSingleNumber(numbers) {
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