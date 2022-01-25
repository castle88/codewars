// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

// Return an empty string if there are no instances of letter in the given string.

// Adapted from: Ruby Kickstart

function comes_after(str, l) {
  const regex = new RegExp(str);
}

console.log(comes_after("Pirates say arrrrrrrrr.", "r")); //'arrrrrrrr'
console.log(comes_after("Free coffee for all office workers!", "F")); // 'rfeofi'
console.log(
  comes_after("king kUnta is the sickest rap song ever kNown k!", "k")
); // 'iUeN'
console.log(comes_after("p8tice makes pottery p0rfect!", "p")); // 'o'
console.log(comes_after("d8u d._ rly 2d1s", "D")); // ''
console.log(comes_after("nothing to be found here", "z")); // ''
