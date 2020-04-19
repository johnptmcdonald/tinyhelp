/**
 * * Sieve of Eratosthenes **
 * A function to return an array of primes up to the number argument passed
 * @param number - The number argument
 * @return - array of prime numbers
 */

const sieveOfE = number => {
  let primes = [];
  // array indexed from 0 to number
  let array = Array(number + 1).fill(true);

  // 0 and 1 are not prime
  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 0; i <= Math.sqrt(number); i++) {
    if (i < 2) array[i] = false;
    if (array[i]) {
      for (let j = i * i; j <= number; j += i) {
        array[j] = false;
      }
    }
  }
  // All array[i] set to true are primes
  for (let i = 0; i <= number; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }
  return primes;
};

module.exports = sieveOfE;
