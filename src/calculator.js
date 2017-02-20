"use strict";

class Calculator {
    add(numbers) {
        return this._isEmpty(numbers) ? 0 : numbers;
    }

    _isEmpty(numbers) {
        return numbers === '';
    }
}

module.exports = Calculator;