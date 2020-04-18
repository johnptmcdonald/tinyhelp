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

const merge = (arrayA, arrayB) => {
  let idxA = 0;
  let idxB = 0;
  const mergedArray = [];

  while (idxA < arrayA.length || idxB < arrayB.length) {
    if (arrayA[idxA] < arrayB[idxB]) {
      mergedArray.push(arrayA[idxA]);
      idxA++;
    } else {
      mergedArray.push(arrayB[idxB]);
      idxB++;
    }
  }

  return mergedArray;
};

const reverse = array => {
  const copy = [...array];
  let leftIdx = 0;
  let rightIdx = copy.length - 1;

  while (leftIdx < rightIdx) {
    [copy[leftIdx], copy[rightIdx]] = [copy[rightIdx], copy[leftIdx]];
    leftIdx++;
    rightIdx--;
  }

  return copy;
};
