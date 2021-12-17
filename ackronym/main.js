// Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

// Make sure the letters returned are uppercase.

// If the value passed in is not a string return 'Not a string'.

// If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

// If the string is empty, just return the string itself: "".

// EXAMPLES:

// 'Hello codewarrior' -> 'HC'

// 'a42' -> 'Not letters'

// 42 -> 'Not a string'

// [2,12] -> 'Not a string'

// {name: 'Abraham'} -> 'Not a string'

var makeAcronym = function (string) {
  const regex = /[a-z]/gi;
  return typeof string !== "string"
    ? "Not a string"
    : string.match(/\w/gi).every((x) => x.match(regex))
    ? string
        .split(" ")
        .map((x) => x.charAt(0).toUpperCase())
        .join("")
    : "Not letters";
};

console.log(makeAcronym("My aunt sally")); // 'MAS'
console.log(makeAcronym("42")); // 'Not letters'
console.log(makeAcronym(64)); // 'Not a string'
console.log(makeAcronym([2, 4, 6, 8])); // 'Not a string'
