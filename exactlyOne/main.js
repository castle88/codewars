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
    .map((word) =>
      word.match(/!/g) && word.match(/!/g).length === 1 ? "" : word
    )
    .filter((x) => x !== "")
    .join(" ");

  return checker.trim();
}

// console.log(remove("Hi!")); // ""
// console.log(remove("Hi! Hi!")); // ""
// console.log(remove("Hi! Hi! Hi!")); // ""
// console.log(remove("Hi Hi! Hi!")); // "Hi"
// console.log(remove("Hi! !Hi Hi!")); // ""
// console.log(remove("Hi! Hi!! Hi!")); // "Hi!!"
// console.log(remove("Hi! !Hi! Hi!")); // "!Hi!"
console.log(remove("crtboh !plpu tee bjolw rnfgvon! epxrx !bfc zlkx ccof!")); // 'crtboh tee bjolw epxrx zlkx'
