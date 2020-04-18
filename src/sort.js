// pre conditions:
// array is defined
// elements in array are all numbers

// post conditions:
// will sort array in order provided (defaults to asc)
// 1 denotes ascending
// -1 denotes descending
// 0 denotes randomize the order
// any other value will be ignored
// returns sorted array without mutating original

const sort = (array, order = 1) => {
  if (array.length <= 1) return array;
  let copy = [...array];

  if (order === 1) {
  } else if (order === -1) {
  } else if (order === 0) {
  }
};

const split = array => {
  const [firstHalf, secondHalf] = [
    array.slice(0, Math.floor(array.length / 2)),
    array.slice(Math.floor(array.length / 2), array.length),
  ];

  return [firstHalf, secondHalf];
};
