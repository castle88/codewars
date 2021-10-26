// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.


function solution(pairs){
	let answer = []
	for(key in pairs){
		answer.push(`${key} = ${pairs.key}`)
	}
}


solution({a: 1, b: '2'}) 	//  "a = 1,b = 2"