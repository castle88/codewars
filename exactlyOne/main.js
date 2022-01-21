// Description:

// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples

// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(string) {
  const wordArr = string.split(" ");
  const checker = wordArr
    .map((word) => {
      return word.match(/!/g) && word.match(/!/g).length === 1 ? "" : word;
    })
    .join("");
  return checker;
}

console.log(remove("Hi!")); // ""
console.log(remove("Hi! Hi!")); // ""
console.log(remove("Hi! Hi! Hi!")); // ""
console.log(remove("Hi Hi! Hi!")); // "Hi"
console.log(remove("Hi! !Hi Hi!")); // ""
console.log(remove("Hi! Hi!! Hi!")); // "Hi!!"
console.log(remove("Hi! !Hi! Hi!")); // "!Hi!"
