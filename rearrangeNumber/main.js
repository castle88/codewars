// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Return -1 if the argument is not valid

// Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

// maxRedigit(123); // returns 321


var maxRedigit = function(num) {
	const digitArr = String(num).split('').map(x => Number(x))
	const maxNum = Number(digitArr.sort((a, b) => b - a).join(''))
	return num <= 0 || num >= maxNum ? null : maxNum
};


// Basic test
console.log(maxRedigit(123))		// 321, "123 => 321");

// Edge cases test
console.log(maxRedigit(-1))		// null, "-1 => null");
console.log(maxRedigit(0))		// null, "0 => null");