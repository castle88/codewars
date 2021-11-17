// This is a follow up from my kata The old switcheroo</br/>

// Write

// function encode(str)

// that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'
// encode('abc-#@5') == '123-#@5'

// String are case sensitive.

// // Bonus point if you don't use toLowerCase()



function encode(str) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	return str.toLowerCase().split('').map(x => alphabet.includes(x) ? alphabet.indexOf(x) + 1 : x ).join('')
}

console.log(encode('abc'))			// '123'
console.log(encode('ABCD'))			// '1234'
console.log(encode('ZzzzZ'))			// '2626262626'
console.log(encode('abc-#@5'))			// '123-#@5'