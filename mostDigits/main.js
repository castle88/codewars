// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array){
	let answer = array.map(x => String(x)).sort((a,b) => a - b)
	return Number(answer[answer.length - 1])
}

console.log(findLongest([1, 10, 100]))		// 100
console.log(findLongest([9000, 8, 800]))	// 9000
console.log(findLongest([8, 900, 500]))		// 900