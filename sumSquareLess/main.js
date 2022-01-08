// Write a function getNumberOfSquares (C, F#, Haskell) / get_number_of_squares (Python, Ruby) that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.

// E.g 1: For n = 6 result should be 2 because 1^2 + 2^2 = 1 + 4 = 5 and 5 < 6 E.g 2: For n = 15 result should be 3 because 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14 and 14 < 15

function getNumberOfSquares(n) {
  let i = 1;
  let sums = 0;
  let timesRun = 0;
  while (sums < n) {
    sums += Math.pow(i, 2);
    i++;
    if (sums < n) {
      timesRun++;
    }
  }
  return timesRun;
}

console.log(getNumberOfSquares(1)); // 0
console.log(getNumberOfSquares(2)); // 1
console.log(getNumberOfSquares(5)); // 1
console.log(getNumberOfSquares(6)); // 2
console.log(getNumberOfSquares(15)); // 3
