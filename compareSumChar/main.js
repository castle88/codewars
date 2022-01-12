// Compare two strings by comparing the sum of their values (ASCII character code).

//     For comparing treat all letters as UpperCase
//     null/NULL/Nil/None should be treated as empty strings
//     If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  const charArr1 = s1 ? s1.split("") : false;
  const charArr2 = s2 ? s2.split("") : false;

  const check1 = charArr1 ? charArr1.every((x) => x.match(/\w/i)) : charArr1;
  console.log(check1);

  const check2 = charArr2 ? charArr2.every((x) => x.match(/\w/i)) : charArr2;
  console.log(check2);
  if (check1 && check2) {
  } else {
    return false;
  }
}

console.log(compare("AD", "BC")); // true
console.log(compare("AD", "DD")); // false
console.log(compare("gf", "FG")); // true
console.log(compare("Ad", "DD")); // false
console.log(compare("zz1", "")); // true
console.log(compare("ZzZz", "ffPFF")); // true
console.log(compare("kl", "lz")); // false
console.log(compare("!!", "7476")); // true
console.log(compare("##", "1176")); // true

console.log(compare(null, "BC")); // false
console.log(compare(null, null)); // true
console.log(compare(null, "")); // true
console.log(compare("", "")); // true
