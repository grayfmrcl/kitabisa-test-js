const fibonacci = (n) => {
  if (n <= 1) 
    return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

const firstFibonacciNumbers = (n) => {
  const result = [];
  for(let i = 0; i < n; i++) {
    result.push(fibonacci(i));
  }
  return result;
}

module.exports = {
  fibonacci,
  firstFibonacciNumbers
}