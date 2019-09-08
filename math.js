const x = (n, fn, initValue) => n.reduce((prev, next) => fn(prev, next), initValue);

const add = (x= 0, y = 0) => {
  return Number(x) + Number(y);
};

const sum = (...n) => x(n, add, 0);

const multiply = (x = 1, y = 1) => {
  return Number(x) * Number(y);
};

const product = (...n) => x(n, multiply, 1);

module.exports = {
  add,
  sum,
  multiply,
  product
}