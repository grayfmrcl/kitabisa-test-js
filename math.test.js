const assert = require('assert');

const {
  add,
  multiply,
  sum,
  product
} = require('./math');

describe('add(x, y)', () => {
  it('should return the addition of x and y', () => {
    assert.strictEqual(add(1, 2), 3);
    assert.strictEqual(add(628.1416, 78932.141592), 79560.283192);
    assert.strictEqual(add(-251, -634), -885);
  });
  it('should return the addtion of x and y even though the value is string ', () => {
    assert.strictEqual(add('-3', '4'), 1);
    assert.strictEqual(add(392.25, '153.5'), 545.75);
  });
  it('should default with 0 if there is no value of y', () => {
    assert.strictEqual(add(), 0);
    assert.strictEqual(add(13), 13);
  });
});

describe('sum(...n)', () => {
  it('should return the sum of the values in n', () => {
    const n = [32, 53, 72.5, 832.1232, -732];
    assert.strictEqual(sum(...n), 257.6232);
  });
  it('should return the sum of the values even though the value is string', () => {
    const n = [3, '15', 42.25, '32.25', '-12.5'];
    assert.strictEqual(sum(...n), 80);
  });
  it('should default return 0 when there is no parameter', () => {
    assert.strictEqual(sum(), 0);
  });
});

describe('multiply(x, y)', () => {
  it('should return the product of x and y', () => {
    assert.strictEqual(multiply(1, 2), 2);
    assert.strictEqual(multiply(327.94, 982.63), 322243.6822);
    assert.strictEqual(multiply(-1, 32), -32);
  });
  it('should return the product of x and y even though the value is string ', () => {
    assert.strictEqual(multiply('-3', '4'), -12);
    assert.strictEqual(multiply(12.25, '4.5'), 55.125);
  });
  it('should default with 1 if there is no value of y', () => {
    assert.strictEqual(multiply(), 1);
    assert.strictEqual(multiply(13), 13);
  });
});

describe('product(...n)', () => {
  it('should return the product of the values', () => {
    assert.strictEqual(product(2, 16, 32), 1024);
    assert.strictEqual(product(4, 17.25, -15, -1), 1035);
  });
  it('should default return 1 when there is no parameter', () => {
    assert.strictEqual(product(), 1);
  });
});