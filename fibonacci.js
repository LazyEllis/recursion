const fibs = (number) => {
  let array = [];

  for (i = 0; i < number; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
};

console.log(fibs(8));
