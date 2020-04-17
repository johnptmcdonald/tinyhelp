/**
 * A function to flatten an array
 * @param {Array} arr - The array to flatten
 * @return {Array} - The flattened array
 */
const flatten = (arr, acc = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], acc);
    } else {
      acc.push(arr[i]);
    }
  }
  return acc;
};

module.exports = flatten;
