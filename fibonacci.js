const fibs = (number) => {
  let array = [];

  for (i = 0; i < number; i++) {
    if (i === 0) array.push(0);
    else if (i === 1) array.push(1);
    else array.push(array[i - 1] + array[i - 2]);
  }

  return array;
};

const fibsRec = (number) => {
  if (number === 1) return [0];
  else if (number === 2) return [0, 1];
  else
    return fibsRec(number - 1).concat(
      fibsRec(number - 1).pop() + fibsRec(number - 2).pop()
    );
};

console.log(fibs(8));
console.log(fibsRec(8));
