// pre conditions:
// array is defined
// elements in array are all numbers

// post conditions:
// will sort array in ascending or descending order (defaults to asc)
// returns sorted array without mutating original

const sort = (array, asc = true) => {
  if (array.length <= 1) return array;
  let copy = [...array];

  if (asc) {
  } else {
  }
};

const split = array => {
  const [firstHalf, secondHalf] = [
    array.slice(0, Math.floor(array.length / 2)),
    array.slice(Math.floor(array.length / 2), array.length),
  ];

  return [firstHalf, secondHalf];
};

const merge = (arrayA, arrayB, asc = true) => {
  let idxA = 0;
  let idxB = 0;
  const copyA = asc ? [...arrayA] : reverse(arrayA);
  const copyB = asc ? [...arrayB] : reverse(arrayB);
  const mergedArray = [];

  while (idxA < copyA.length || idxB < copyB.length) {
    if (copyA[idxA] < copyB[idxB]) {
      if (asc) {
        mergedArray.push(copyA[idxA]);
        idxA++;
      } else {
        mergedArray.push(copyB[idxB]);
        idxB++;
      }
    } else {
      if (asc) {
        mergedArray.push(copyB[idxB]);
        idxB++;
      } else {
        mergedArray.push(copyA[idxA]);
        idxA++;
      }
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
