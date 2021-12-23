// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]

function doubleEveryOther(a) {
  return a.map((x, i) => (i % 2 === 0 ? x : x * 2));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1,4,3,8]
