/**
 * compares two objects or arrays
 * @param {Array or Object} a - The Array or Object to compare
 * @param {Array or Object} b - The Array or Object to compare
 * @return {boolean}
 */
const isEqual = (a, b) => {
  // Assumes that both params will be of the same data structure type.
  // If arrays:
  if (Array.isArray(a)) {
    for (let i = 0; i <= a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } else {
        return true;
      }
    }
    // If objects:
  } else {
    // Grab the keys:
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // if !same # of keys, return false:
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    // Shallow check. If length of values is the same, return true:
    if (Object.values(a).length === Object.values(b).length) {
      return true;
    }
  }
};

module.exports = isEqual;
