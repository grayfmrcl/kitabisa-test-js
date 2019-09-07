const assert = require('assert');

const { add } = require('./index');

describe('add(x, y)', () => {
  it('should return the sum of x and y', () => {
    const x = 1, y = 2;
    const expected = 3;
    const result = add(x, y);
    assert.strictEqual(expected, result);
  });
});