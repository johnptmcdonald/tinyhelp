const v8 = require('v8'); // Node v11 and onwards

/**
 * A function to deeply copy an object
 * (circular references will break it).
 * @param {(Object | Array)} o - The object or array you want to copy
 * @return {(Object | Array)} - The new, cloned object or array
 */
const deepCopy = (o) => {
    return v8.deserialize(v8.serialize(o));
};

module.exports = deepCopy;
