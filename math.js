const x = (n, fn) => n.reduce((prev, next) => fn(prev, next));

const add = (x, y) => {
  return Number(x) + Number(y);
};

const sum = (...n) => x(n, add);

const multiply = (x, y) => {
  return Number(x) * Number(y);
};

const product = (...n) => x(n, multiply);

module.exports = {
  add,
  sum,
  multiply,
  product
}