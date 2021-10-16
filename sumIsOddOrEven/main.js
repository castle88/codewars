// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
	if(array.length >= 1){
	   let sum = array.reduce((a,b)=>a+b)
	   return sum % 2 === 0 ? 'even' : 'odd'
	}
	else{
	   return 'even'
	}
}





console.log(oddOrEven([0, 1, 5]))	// 'even'
console.log(oddOrEven([0, 1, 3]))	// 'even'
console.log(oddOrEven([1023, 1, 2]))	// 'even'
console.log(oddOrEven([1,2,3,4,5,6]))	// 'odd'
console.log(oddOrEven([]))		// 'even'