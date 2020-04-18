/**
 * * Random Integer **
 * A function that generate a random integer from a minimum and maximum value
 * @param {Integer} - The minimum value
 * @param {Integer} - The maximum value
 * @return {Integer} - A random integer
 */

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

module.exports = randomNumber;
