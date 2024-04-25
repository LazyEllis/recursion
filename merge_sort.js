/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array} left - The first sorted array.
 * @param {Array} right - The second sorted array.
 * @returns {Array} The merged sorted array.
 */
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements from left or right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

/**
 * Sorts an array using the merge sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The sorted array.
 */
const mergeSort = (array) => {
  // Base case: if the array has 0 or 1 element, it is already sorted
  if (array.length <= 1) return array;

  // Split the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  // Recursively sort each half
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
