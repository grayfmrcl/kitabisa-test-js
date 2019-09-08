const vorpal = require('vorpal')();
const rl = require('readline');
const chalk = require('chalk');

const { sum, product } = require('./math');
const { firstPrimeNumbers } = require('./primes');
const { firstFibonacciNumbers } = require('./fibonacci');

function run (instance, command, ...params) {
  try {
    const result = command(...params);
    instance.log(chalk.green(result));
  } catch (err) {
    const message = chalk.red(err.message);
    instance.log(message);
  }
}

vorpal
  .command('sum [n...]', 'Sum of the n values')
  .action(function(args, cb) {
    run(this, sum, ...args.n);
    cb();
  });

vorpal
  .command('product [n...]', 'Product of the n values')
  .action(function(args, cb) {
    run(this, product, ...args.n);
    cb();
  })

vorpal
  .command('primes [n]', 'Find first n prime numbers')
  .action(function(args, cb) {
    run(this, firstPrimeNumbers, args.n);
    cb();
  });

vorpal
  .command('fibonacci [n]', 'Find first n fibonacci sequence')
  .action(function(args, cb) {
    run(this, firstFibonacciNumbers, args.n)
    cb();
  });

vorpal
  .delimiter('kitabisa$')
  .show();