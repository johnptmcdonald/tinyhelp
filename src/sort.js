/* pre conditions:
- array is defined
- elements in array are all numbers or all strings

post conditions:
- will sort array in ascending or descending order (defaults to asc)
- returns sorted array without mutating original
*/

/**
 * A function to sort numbers in an array in ascending order
 * @param array - an array
 * @param asc - boolean
 * @return - a new sorted array in ascending or descending order
 */

const sort = (array, asc = true) => {
  if (array.length <= 1) return array;
  const [firstHalf, secondHalf] = split(array);
  return asc
    ? merge(sort(firstHalf), sort(secondHalf))
    : merge(sort(firstHalf), sort(secondHalf), false);
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
  // copy the array as is if asc is true, if not reverse the order
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

    // if all elements in one of the arrays have been merged,
    // copy all the elements left over from the other array since already sorted
    if (idxA === copyA.length) {
      mergedArray.push(...copyB.slice(idxB));
      return mergedArray;
    } else if (idxB === copyB.length) {
      mergedArray.push(...copyA.slice(idxA));
      return mergedArray;
    }
  }

  return mergedArray;
};

const reverse = array => {
  const copy = [...array];
  let leftIdx = 0;
  let rightIdx = copy.length - 1;

  while (leftIdx < rightIdx) {
    // swap element on left with element on right
    [copy[leftIdx], copy[rightIdx]] = [copy[rightIdx], copy[leftIdx]];
    leftIdx++;
    rightIdx--;
  }

  return copy;
};

module.exports = sort;
