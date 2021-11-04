// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon


function solve(s){
	return [...s.match(/[aeiou]+/gm)].sort((a,b) => b.length - a.length)[0].length
}


console.log(solve("codewarriors"))			// 2
console.log(solve("suoidea"))				// 3
console.log(solve("ultrarevolutionariees"))		// 3
console.log(solve("strengthlessnesses"))		// 1
console.log(solve("cuboideonavicuare"))			// 2
console.log(solve("chrononhotonthuooaos"))		// 5
console.log(solve("iiihoovaeaaaoougjyaw"))		// 8