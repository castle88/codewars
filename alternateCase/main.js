// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  const charArr = s.split("");
  const caseCheck = charArr.map((x) =>
    x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
  );
  return caseCheck.join("");
}

console.log(alternateCase("abc")); // "ABC"
console.log(alternateCase("ABC")); // "abc"
console.log(alternateCase("Hello World")); // "hELLO wORLD"
