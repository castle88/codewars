// Write brainfuck program, that can reverse the input string.

// For bf, the input will be end with a '\0', which is not counted as a part of the input but a sign.

//     Assumptions:

// input strings contains only letters (small and big) and digits
// input string is never bigger than 1000 characters
// brainfuck interpreter is set to 8 bits cell, and 2048 cells of memory, which should be enough, but you can change it in config

const bf = (string) => {
  const strArr = string.split("");
  const answer = strArr.reverse().join("");
  return answer;
};

console.log(bf("codewars")); // 'srawedoc'
console.log(bf("42")); // '24'
