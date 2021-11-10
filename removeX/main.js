// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
	return s.replace(/!/gm, '')
}

console.log(removeExclamationMarks("Hello World!"))	// "Hello World"
console.log(removeExclamationMarks('hello!!!!!'))	// 'Hello'
console.log(removeExclamationMarks("!!Hello"))		// 'Hello'
console.log(removeExclamationMarks("!!!Hello!!!"))	// 'Hello'
