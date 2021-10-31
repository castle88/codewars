// #Difference between biggest 2 numbers

// You have an array of integers. You need to calculate the difference between 1st biggest number and 2nd biggest number of an array.

//     diffBig2([10, 5, 2]);

// In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function returns 5, the result of 10 - 5.

// You can assume that the input array must have 2 or more elements.

// The input array has the sort() method disabled, so you will have to solve it in another way.
// Algorithms
// Arrays

function diffBig2(arr) {
	let max = Math.max(...arr)
	arr.splice(arr.indexOf(max),1)
	let newMax = Math.max(...arr)
	return max - newMax
}


console.log(diffBig2(a = [2, 1]))	// 1
console.log(diffBig2(a = [8, 3, 1]))	// 5
console.log(diffBig2(a = [1, 8, 3]))	// 5