// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)


function camelCase(string) {
	let words = string.split(' ')
	let caps = words.map(word => {
		return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
	})
	return caps.join('')
}

console.log(camelCase("test case"))			// "TestCase"
console.log(camelCase("camel case method"))		// "CamelCaseMethod"
console.log(camelCase("say hello "))			// "SayHello"
console.log(camelCase(" camel case word"))		// "CamelCaseWord"
console.log(camelCase(""))				//  ""