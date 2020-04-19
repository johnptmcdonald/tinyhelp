/**
 * A function to shuffle an array
 * @param {Array} arr - The array to shuffle
 * @return {Array} - The shuffled array
 */

//Shuffle an array and put elements into new array
const regularShuffle = (array) => {
  let shuffledArray = [];
  let temp;
  //While there are still values in the array
  while (array.length) {
    //Choose a random index
    let randIdx = Math.floor(Math.random() * (array.length - 1));
    //Assign temp variable to value of array at random index
    temp = array[randIdx];
    //push temp variable into the new array
    shuffledArray.push(temp);
    //Remove the value at the random index
    array.splice(randIdx, 1);
  }
  return shuffledArray;
};

module.exports = regularShuffle;
