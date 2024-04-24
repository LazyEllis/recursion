const mergeSort = (array) => {
  if (array.length === 1) return array;

  const halfLength = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, halfLength);
  const secondHalf = array.slice(halfLength, array.length);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  return sortedFirstHalf[0] < sortedSecondHalf[0]
    ? [sortedFirstHalf[0]].concat(
        mergeSort(sortedFirstHalf.slice(1).concat(sortedSecondHalf))
      )
    : [sortedSecondHalf[0]].concat(
        mergeSort(sortedSecondHalf.slice(1).concat(sortedFirstHalf))
      );
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
