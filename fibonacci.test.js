const assert = require('assert');

const { fibonacci, firstFibonacciNumbers } = require('./fibonacci');

describe('fibonacci', () => {
  it('should get result of fibonacci', () => {
    assert.strictEqual(fibonacci(0), 0);
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(3), 2);
  });
});

describe('firstFibonacciNumbers', () => {
  it('should return the sequence of n number fibonacci sequence', () => {
    assert.deepEqual(firstFibonacciNumbers(4), [0, 1, 1, 2]);
    assert.deepEqual(firstFibonacciNumbers(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});