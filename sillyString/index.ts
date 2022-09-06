// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")
// //         --^-- midpoint
// //         bri    first half (lower-cased)
// //            AN second half (upper-cased)

function sillycase(silly: string): string {
  const half: number =
    silly.length % 2 === 0 ? silly.length / 2 : silly.length / 2 + 1;
  const first = silly.slice(0, half);
  const end = silly.slice(half);
  return `${first.toLowerCase()}${end.toUpperCase()}`;
}

console.log(sillycase("foobar")); //  "fooBAR"
console.log(sillycase("codewars")); //  "codeWARS"
console.log(sillycase("brian")); //  'briAN'
