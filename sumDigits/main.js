// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5


function sumDigits(number){
	let arr = number.toString().split('').filter(x => Number(x))
	return arr.reduce((acc, cur) => {
		return acc += Number(cur)
	},0)
}




console.log(sumDigits(10))	// 1
console.log(sumDigits(99))	// 18
console.log(sumDigits(-32))	// 5
