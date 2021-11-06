// Task

// John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

// Given a string s. Your task is to count how many times the keyboard has been tapped by John.

// You can assume that, at the beginning the Caps Lock light is not lit.
// Input/Output

// [input] string s

// A non-empty string. It contains only English letters(uppercase or lowercase).

// 1 ≤ s.length ≤ 10000

// [output] an integer

// The number of times John tapped the keyboard.
// Example

// For s = "a", the output should be 1.

// John hit button a.

// For s = "aa", the output should be 2.

// John hit button a, a.

// For s = "A", the output should be 2.

// John hit button Caps Lock, A.

// For s = "Aa", the output should be 4.

// John hit button Caps Lock, A, Caps Lock, a.


// function typist(s){
// 	let arr = s.split('')
// 	let caps = arr.filter(x => x.match(/[A-Z]/gm))
// 	let lower = arr.filter(x => x.match(/[a-z]/gm))
// 	if(lower.length > 0){
// 		lower = lower.map(x => 1).reduce((acc, cur) => acc += cur) || 0
// 	}else{
// 		lower = 0
// 	}
// 	if(caps.length > 0){
// 		caps = caps.map(x => 3).reduce((acc, cur) => acc += cur) || 0
// 	}else{
// 		caps = 0
// 	}
// 	return Math.ceil(caps/2) + lower
// }

function typist(s){
	let arr = s.split('')
	console.log(`length: ${arr.length}`)
	let answer = arr.reduce((acc, cur, index) => {
		if(cur.match(/[A-Z]/gm)){
			return acc += 2
		}else if(cur.match(/[A-Z]/gm && arr.length > 1 && index !== arr.length - 1)){
			return acc += 2
		}else{
			return acc += 1
		}
	},0)
	return answer
}

console.log(typist("a"))			// 1
console.log(typist("aa"))			// 2
console.log(typist("A"))			// 2
console.log(typist("AA"))			// 3
console.log(typist("aA"))			// 3
console.log(typist("Aa"))			// 4
console.log(typist("BeiJingDaXueDongMen"))	// 31
console.log(typist("AAAaaaBBBbbbABAB"))		// 21
console.log(typist("AmericanRAILWAY"))		// 18
console.log(typist("AaAaAa"))			// 12
console.log(typist("DFjfkdaB"))			// 11
