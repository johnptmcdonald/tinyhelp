/**
 * A function that converts a sentence into camel casing.
 * @param {String} str - The sentence you want to camel case.
 * @return {*} - One combined word where the first word in the sentence is lowercased and the following words are uppercase.
 */

const camelCase = str => {
    return str.split(' ').map((word, index) => {

    if (index == 0) {
      return word.toLowerCase();
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

module.exports = camelCase;
