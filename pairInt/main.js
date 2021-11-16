// Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

// 0 <= a <= b <= n

// The pairs should be sorted by increasing values of a then increasing values of b.

// For example,

// generatePairs(2) should return
// [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]

function generatePairs(n) {
	let answer = []
	let inc = 0
	while(inc <= n){
		for(let i = 0; i <= n; i++){
			if(i >= inc){
				answer.push([inc, i])
			}
		}
		inc++
	}
	return answer
}


console.log(generatePairs(2))		// [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]