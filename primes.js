const generatePrimes = (MAX) => {
  const primes = [];
  for (let i = 0; i <= MAX; i++) {
    primes.push(true);
  };
  primes[0] = false;
  primes[1] = false;
  for (let j = 2; j * j <= MAX; j++) {
    for (let k = j * 2; k <= MAX; k += j)  
        primes[k] = false;
  }
  return primes;
}

const firstPrimeNumbers = (n) => {
  const result = [];
  const MAX = 10000;
  const primes = generatePrimes(MAX);
  for (let i = 1; i < MAX; i++) {
    if (result.length < n) {
      if (primes[i]) {
        result.push(i);
      }
    }
  }
  return result;
}

module.exports = {
  firstPrimeNumbers
}