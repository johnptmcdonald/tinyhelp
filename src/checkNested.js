/**
 * A function to deeply compare objects
 * @param {Object} obj - Object to examine
 * @param {String} key you are searching for
 * @return {Boolean}
 */

const checkNested = (object, searchKey) => {
  // If bad input, return false:
  if (object === null || object === undefined) {
    return false;
  }

  for (let key of Object.keys(object)) {
    // Iterate through keys for match:
    if (key === searchKey) {
      return true;
    } else {
      const aNestedObject = object[key];

      // If key isn't a match, try to see if the key's value is an object.
      // if it is, we need to search through it's keys:
      if (typeof aNestedObject === 'object') {
        // We can recursively search for our searchKey in
        // nested value, passing in objectSubKey (nested object) this time:
        if (checkNested(aNestedObject, searchKey) === true) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = checkNested;
