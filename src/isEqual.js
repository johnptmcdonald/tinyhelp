/**
 * compares two objects or arrays
 * @param {Array or Object} a - The Array or Object to compare
 * @param {Array or Object} b - The Array or Object to compare
 * @return {boolean}
 */

// Helper returns a value's internal object [[Class]];
const getClass = (obj) => {
  return Object.prototype.toString.call(obj);
};

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
    // If a and b reference the same value, return true:
    if (a === b) return true;

    // If a and b are !both Objects, return false:
    if (typeof a != typeof b) return false;

    // If type is number:
    // TODO

    // Get internal [[class]]:
    const aClass = getClass(a);
    const bClass = getClass(b);
    // If classes are different, return false:
    if (aClass != bClass) return false;

    // If String, Number, or Boolean objects:
    if (
      aClass == '[object Boolean]' ||
      aClass == '[object String]' ||
      aClass == '[object Error]'
    ) {
      if (a.toString() != b.toString()) return false;
    }

    // Grab the keys:
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // if !same # of keys, return false:
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    // Check if they have the same keys:
    if (
      !aKeys.every((key) => {
        return b.hasOwnProperty(key);
      })
    ) {
      return false;
    }

    // Check key values - recursion:
    return aKeys.every((key) => {
      return isEqual(a[key], b[key]);
    });
  }
  return false;
};

module.exports = isEqual;
