const prompts = require('prompts');

const {
  add,
  multiply,
  sum,
  product
} = require('./math');
const { firstPrimeNumbers } = require('./primes');
const { firstFibonacciNumbers } = require('./fibonacci');

function help() {
  console.log('Commands:');
  console.log('add <x> <y>');
  console.log('sum <x1> <x2> ... <xn>');
  console.log('multiply <x> <y>');
  console.log('product <x1> <x2> ... <xn>');
  console.log('primes <n>');
  console.log('fibonacci <n>');
}

function run (command, params) {
  console.log({ command, params });
  const result = command(...params);
  console.log(result.length > 1 ? result.join(', ') : result);
}

(function main() {
  const args = process.argv;
  const command = args[2];
  const params = args.slice(3);
  switch (command) {
    case 'add':
      run(add, params);
      break;
    case 'sum':
      run(sum, params);
      break;
    case 'multiply':
      run(multiply, params)
      break;
    case 'product':
      run(product, params);
      break;
    case 'primes':
      run(firstPrimeNumbers, params);
      break;
    case 'fibonacci':
      run(firstFibonacciNumbers, params);
      break;
    default: {
      help();
      break;
    };
  }
})();