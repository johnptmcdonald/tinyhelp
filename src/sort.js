
/**
 * A function to sort numbers in an array in ascending order
 * @param array - an array
 * @return - a new sorted array
 */
const sort = array => {
  const copiedArray = array.slice()
  return copiedArray.sort((a,b) => a-b)
}
module.exports = sort;
