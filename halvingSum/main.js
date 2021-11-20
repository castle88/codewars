// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47


function halvingSum(n) {
	let answer = []
	while(n >= 1){
		answer.push(n)
		n = Math.floor(n/2)
	}
	return answer.reduce((acc, cur) => acc += cur, 0)
}


console.log(halvingSum(25))		// 47
console.log(halvingSum(127))		// 247