const mergeSort = (array) => {
  if (array.length === 1) return array;

  const halfLength = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, halfLength);
  const secondHalf = array.slice(halfLength, array.length);

  return mergeSort(firstHalf)[0] < mergeSort(secondHalf)[0]
    ? [mergeSort(firstHalf)[0]].concat(
        mergeSort(mergeSort(firstHalf).slice(1).concat(mergeSort(secondHalf)))
      )
    : [mergeSort(secondHalf)[0]].concat(
        mergeSort(mergeSort(secondHalf).slice(1).concat(mergeSort(firstHalf)))
      );
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
