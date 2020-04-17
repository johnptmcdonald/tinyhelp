/**
 * A function to deeply copy an object
 * (circular references will break it).
 * @param {(Object | Array)} o - The object or array you want to copy
 * @return {(Object | Array)} - The new, cloned object or array
 */
const deepCopy = (o) => {
  return JSON.parse(JSON.stringify(o));
};

module.exports = deepCopy;
