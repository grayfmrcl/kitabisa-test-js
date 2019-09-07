const sum = (...n) => n.reduce((prev, next) => prev + Number(next), 0);

const multiply = (x, y) => x * y;

module.exports = {
  sum,
  multiply
}

