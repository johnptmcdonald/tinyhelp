/**
 * * Random Integer **
 * A function that generate a random integer from a minimum and maximum value
 * @param {Integer} - The minimum value
 * @param {Integer} - The maximum value
 * @return {Integer} - A random integer
 */

const randomInteger = (min, max) => {
  let innerMin = min;
  let innerMax = max;
  if (innerMin > innerMax) {
    const temp = innerMax;
    innerMax = innerMin;
    innerMin = temp;
  }
  return Math.floor(Math.random() * (innerMax - innerMin + 1) + innerMin);
};

module.exports = randomInteger;
