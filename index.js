const x = (n, fn) => n.reduce((prev, next) => fn(prev, next), 0);

const add = (x, y) => {
  return Number(x) + Number(y);
};

const sum = (...n) => x(n, add);

const multiply = (x, y) => x * y;

module.exports = {
  sum,
  multiply
}

