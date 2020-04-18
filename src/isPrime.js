/**
 * A function to test if a number is a prime number
 * @param number - The number you want to test
 * @return - boolean for whether or not a number is prime
 */

const isPrime = number => {
  if (!Number.isInteger(number)) return false
  if (number <= 1) return false
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) return false;
  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

module.exports = isPrime;
