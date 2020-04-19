/**
 * A function to shuffle an array
 * @param {Array} arr - The array to shuffle
 * @return {Array} - The shuffled array
 */

//Fisher-Yates Shuffle Algorithm for in place shuffle (faster than regularShuffle)
const inPlaceShuffle = (array) => {
  let pointer = array.length;
  let temp;
  //While there are still remaining elements in the array to be shuffled
  while (pointer) {
    //Pick a remaining element's index
    let idx = Math.floor(Math.random() * pointer--);
    //Set temp variable =  array at pointer value
    temp = array[pointer];
    //Set array at pointer value = array at remaining element value
    array[pointer] = array[idx];
    //Set array at remaining element value = temp value
    array[idx] = temp;
  }

  return array;
};
module.exports = inPlaceShuffle;
