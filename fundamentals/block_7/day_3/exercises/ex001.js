const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

let statement = sum(4, 5);
        assert.strictEqual(statement, 9, 'Soma não dá esse valor')
    statement = sum(0, 0)
        assert.strictEqual(statement, 0, 'Soma não dá esse valor')