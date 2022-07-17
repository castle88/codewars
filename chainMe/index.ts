// Write a generic function chainer

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function chain(input: number, fs: any[]) {
  return fs.reduce((acc: number, cur: any) => (acc = cur(acc)), input);
}

function add(x: number) {
  return x + 10;
}

function mult(x: number) {
  return x * 30;
}

console.log(chain(2, [add, mult])); // 360;
