// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.
// Notes:

//     Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
//     If no letters are given, the function should return 'z'

// Examples:

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'


function addLetters(...letters) {
	if(letters.length < 1) return 'z'
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let answer = letters.map(x => alphabet.indexOf(x) + 1).reduce((acc, cur) => acc += cur)
	while(answer > 26){
		answer -= 26
	}
	return alphabet[answer - 1]
}


console.log(addLetters('a', 'b', 'c'))			// 'f'
console.log(addLetters('a', 'b'))			// 'c'
console.log(addLetters('z'))				// 'z'
console.log(addLetters('z', 'a'))			// 'a'
console.log(addLetters('y', 'c', 'b'))			// 'd'