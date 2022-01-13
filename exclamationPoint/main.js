// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(string) {
  console.log(string);
  const regex = /!+$/g;
  const matchLength =
    string.match(regex) === null ? 0 : string.match(regex)[0].length;
  const newString = string
    .split("")
    .filter((x, i) => i < string.length - matchLength)
    .join("");

  return newString;
}

console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi")); // "!Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi! Hi"
console.log(remove("Hi")); // "Hi"
