# Recursion

This repository contains JavaScript implementations of the Fibonacci sequence generator and the merge sort algorithm.

## Fibonacci Sequence

The `fibonacci.js` file contains two functions to generate Fibonacci sequences:

1. `fibs`: This function generates a Fibonacci sequence up to a specified number using an iterative approach.
2. `fibsRec`: This function generates a Fibonacci sequence up to a specified number using a recursive approach.

### Usage

To use the `fibs` function, call it with the desired number of Fibonacci numbers as the argument:

```javascript
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

To use the `fibsRec` function, similarly call it with the desired number of Fibonacci numbers:

```javascript
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

## Merge Sort Algorithm

The `merge_sort.js` file contains an implementation of the merge sort algorithm for sorting arrays.

### Usage

To use the `mergeSort` function, pass an array of numbers to it:

```javascript
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
