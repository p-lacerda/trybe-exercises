const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4);

assert.equal(expected, 9, `a soma é diferente de 9`);
