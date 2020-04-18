/**
 * A function to deeply compare objects
 * @param {Object} obj - Object to examine
 * @param {String} level - path of keys as seperated strings
 * @return {Boolean}
 */
const checkNested = (obj, level, ...parameters) => {
  if (obj === undefined) return false;
  if (parameters.length == 0 && obj.hasOwnProperty(level)) return true;
  return checkNested(obj[level], ...parameters);
};

module.exports = checkNested;
