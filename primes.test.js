const assert = require('assert');

const { firstPrimeNumbers } = require('./primes');

describe('firstPrimeNumber(n)', () => {
  it('should return the first prime numbers of n', () => {
    assert.deepEqual(firstPrimeNumbers(4), [2, 3, 5, 7]);
  });
  it('should return empty array if n < 1', () => {
    assert.deepEqual(firstPrimeNumbers(0), []);
    assert.deepEqual(firstPrimeNumbers(-1), []);
  })
});