// Create a function called shortcut to remove all the lowercase vowels in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Don't worry about uppercase vowels.

function shortcut(string) {
  const characterArr = string.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const removedVowels = characterArr.filter((x) => !vowels.includes(x));

  return removedVowels.join("");
}

console.log(shortcut("hello")); //  'hll'
console.log(shortcut("how are you today?")); // 'hw r y tdy?'
console.log(shortcut("complain")); //  'cmpln'
console.log(shortcut("never")); //  'nvr'
