// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
  const charArr = s.split("");
  const first = charArr
    .map((x, i) => (i % 2 === 0 ? x.toUpperCase() : x))
    .join("");
  const second = charArr
    .map((x, i) => (i % 2 !== 0 ? x.toUpperCase() : x))
    .join("");

  return [first, second];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors")); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
