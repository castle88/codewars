// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] )


var capitals = function (word) {
	let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	let splitted = word.split('')
	let answer = []
	for(let i = 0; i < splitted.length; i++){
		if(capLetters.includes(splitted[i])){
			answer.push(i)
		}
	}
	return answer
}


console.log(capitals('CodEWaRs'))  	// [0,3,4,6] 