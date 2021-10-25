// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5


function sumDigits(number){
	return number.toString().split('').reduce((acc, cur) => {
		acc += cur
	})
}




console.log(sumDigits(10))	// 1
console.log(sumDigits(99))	// 18
console.log(sumDigits(-32))	// 5
