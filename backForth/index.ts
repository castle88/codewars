// Task

// A list S will be given. You need to generate a list T from it by following the given process:

//     Remove the first and last element from the list S and add them to the list T.
//     Reverse the list S
//     Repeat the process until list S gets emptied.

// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
// Example

// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T

// Note

//     size of S goes up to 10^6
//     Keep the efficiency of your code in mind.
//     Do not mutate the Input.

function arrange(s: number[], answer: number[] = []): number[] {
  const input: number[] = s; // ill mutate what i want thanks
  if (s.length < 2) return [];
  if (input[0]) {
    const first = input.shift();
    const last = input.pop();
    answer.push(first!);
    answer.push(last!);
    input.reverse();
    //     return arrange(input, answer);
  }
  return input;
}

console.log(arrange([1, 2])); // [1,2]);
console.log(arrange([4, 3, 2])); // [4, 2, 3]);
// console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])); // [9, 1, 5, 7, -2, 6, -3, 8, 5]);
// console.log(arrange([1])); // [1]);
// console.log(arrange([])); // []);
// console.log(arrange([2, 4, 3, 4])); //[2, 4, 3, 4]);
