// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.


function range(startNum, endNum)   {  
	let answer = []
	for(let i = startNum + 1; i < endNum; i++){
		answer.push(i)
	}
	return answer
};  
  


console.log(range(2,9))			// [3,4,5,6,7,8]
console.log(range(6,8))			// [7]
console.log(range(2,9))			// [3,4,5,6,7,8]