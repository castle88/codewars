// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer: number): string {
  let square = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      if (j === integer - 1) {
        square += i === integer - 1 ? "+" : "+\n";
      } else {
        square += "+";
      }
    }
  }
  return square;
}

console.log(generateShape(8)); // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
